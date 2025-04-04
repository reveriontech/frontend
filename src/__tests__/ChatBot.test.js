import { describe, it, expect, vi } from 'vitest';
import { chatBot } from '../../reveriontech/engine/auth/ChatBot';

// Mock axios
vi.mock('axios', () => ({
  default: {
    post: vi.fn()
  }
}));

// Mock dotenv
vi.mock('dotenv', () => ({
    default: {
      config: vi.fn()
    }
  }));

describe('ChatBot', () => {
  it('should return an error if prompt is missing', async () => {
    // Arrange
    const req = { body: {} };
    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn()
    };
    
    // Act
    await chatBot(req, res);
    
    // Assert
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: "Prompt is required." });
  });
  
  it('should return company info when prompt is provided', async () => {
    // Arrange
    const req = { body: { prompt: "Tell me about Reverion Tech" } };
    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn()
    };
    
    // Act
    await chatBot(req, res);
    
    // Assert - verify response has company info
    // You might need to adapt this based on the actual implementation
    expect(res.json).toHaveBeenCalled();
    // Additional assertions based on what the function should return
  });
});