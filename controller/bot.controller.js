
const { GoogleGenerativeAI } = require('@google/generative-ai');
require("dotenv").config();

const configuration = new GoogleGenerativeAI('AIzaSyDvuEZFtlcag7f-h5rIpojcGnbyBYEjVXQ');

const modelId = "gemini-pro";
const model = configuration.getGenerativeModel({ model: modelId });

const conversationContext = [];
const currentMessages = [];

const generateResponse = async (req, res) => {
  try {
    const { prompt } = req.body;
    for (const [inputText, responseText] of conversationContext) {
      currentMessages.push({ role: "user", parts: [{text : inputText}] });
      currentMessages.push({ role: "model", parts: [{text: responseText}] });
    }
    
    const chat = model.startChat({
      history: currentMessages,
      generationConfig: {
        maxOutputTokens: 1000,
      },
    });

    const result = await chat.sendMessage(prompt);
    const response = await result.response;

    const responseText = response.text();

    conversationContext.push([prompt, responseText]);
    res.send({ response: responseText });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { generateResponse }