const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

// Select model (e.g., Gemini 1.5 Flash)
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

// Configuration for generation
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

// Async function to start chat session and send a message

   export const chatSession = model.startChat({
    generationConfig,
    // Adjust safety settings as needed
    // safetySettings: [...], 
    history: [],
  });


