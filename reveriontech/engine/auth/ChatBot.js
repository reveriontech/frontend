import axios from "axios"
import dotenv from "dotenv"

dotenv.config()

export const chatBot = async (req, res) => {
    try {
        const { prompt } = req.body
        
        if (!prompt) {
            return res.status(400).json({ error: "Prompt is required." })
        }

        const companyInfo = `{
            name: "Reverion Tech",
            founded: "2023",
            services: [
              "AI Integration Solutions",
              "Custom Web Application Development",
              "Digital Transformation Consulting",
              "Cloud Migration Services",
              "Data Analytics & Business Intelligence"
            ],
            pricing: {
              consultation: "Free 15-minute initial consultation",
              hourlyRate: "$150-$250 depending on project complexity",
              projectBased: "Custom quotes available for larger projects"
            },
            team: {
              size: "15+ specialists",
              expertise: "AI engineers, full-stack developers, UX designers, and project managers"
            },
            contactInfo: {
              email: "connect@reveriontech.com contact",
              scheduling: "https://calendly.com/reveriontech scheduling",
              hours: "Monday-Friday, 9am-6pm EST",
              response: "24-hour response guarantee for all inquiries"
            },
            project: {
              booking: "https://tinyurl.com/ndhe8z2k booking",
              description: "Use this form to initiate your project and ensure alignment with your company initiatives."
            },
            faq: [
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary. Small projects take 2-4 weeks, while enterprise solutions may take 3-6 months."
              },
              {
                question: "Do you offer maintenance after project completion?",
                answer: "Yes, we provide maintenance packages, including updates, bug fixes, and performance monitoring."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "We specialize in React, Node.js, Python, AI frameworks, and cloud platforms (AWS, Azure, Google Cloud)."
              },
              {
                question: "How do you handle data security?",
                answer: "We implement encryption, secure authentication, and regular audits, following industry regulations."
              }
            ]
          }`
          
          const newPrompt = `You are an AI Assistant for ${companyInfo}. Provide helpful, professional, and concise responses. Do not add periods (.) after a URL. If you can't answer a technical question, offer to connect the user with a representative from ${companyInfo}. Include relevant information from ${companyInfo}'s services, pricing, contact details, and FAQs when applicable to the user's request: '${prompt}'.`
          

        const response = await axios.post(
        "https://api.anthropic.com/v1/messages",
        {
            model: "claude-3-opus-20240229",
            max_tokens: 500,
            temperature: 0.7,
            stream: false,
            messages: [{ role: "user", content: newPrompt }], 
        },
        {
            headers: {
            "x-api-key": process.env.ANTHROPIC_API_KEY, 
            "Content-Type": "application/json",
            "Accept": "application/json",
            "anthropic-version": "2023-06-01",
            },
        }
        )

        if (response.data?.content) {
            return res.status(200).json({ message: response.data.content })
        } else {
            return res.status(500).json({ error: "No response from AI." })
        }
    } catch (error) {
        return res.status(500).json({ error: "Internal server error." })
    }
}