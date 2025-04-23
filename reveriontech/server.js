import express from 'express';
import bodyParser from 'body-parser';
import twilio from 'twilio';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

dotenv.config();

// ES Module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

// CORS middleware - add this before other middleware
app.use(cors());

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// .env
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_NUMBER;

// Create a Twilio client
const client = twilio(accountSid, authToken);

app.post('/api/initiate-call', async (req, res) => {
  try {
    const { to } = req.body;
    
    if (!to || typeof to !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Valid recipient phone number is required'
      });
    }
    
    // Initiate the call using Twilio
    const call = await client.calls.create({
      to: to,
      from: twilioNumber,
      url: "http://demo.twilio.com/docs/voice.xml",
    });
    
    return res.json({
      success: true,
      message: 'Call initiated successfully',
      callSid: call.sid
    });
    
  } catch (error) {
    console.error('Error initiating call:', error);
    
    // Handle specific error codes
    if (error.code === 21215) {
      return res.status(403).json({
        success: false,
        message: 'International calling to this number is not enabled for your Twilio account. Please contact your administrator.',
        details: 'Administrator needs to enable Philippines calling in Twilio Console: https://www.twilio.com/console/voice/calls/geo-permissions/low-risk'
      });
    }
    
    return res.status(500).json({
      success: false,
      message: error.message || 'Failed to initiate call'
    });
  }
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('dist'));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});