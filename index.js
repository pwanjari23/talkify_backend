// app.js

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios'); 
require("dotenv").config();
const app = express();
const port = 4000;

// Middleware
app.use(bodyParser.json());
const cors = require('cors');
const { generateResponse } = require('./controller/bot.controller');
app.use(cors());
/* // const { Configuration, OpenAIApi , OpenAI } = require("openai");

console.log(process.env.OPENAI_API_KEY, "process.env.OPENAI_API_KEY")
// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,
//   });
const { CohereClient } =  require("cohere-ai");

const cohere = new CohereClient({
    token: process.env.OPENAI_API_KEY,
});

app.post("/converse", async (req, res) => {
    const { message } = req.body;
  console.log(message , "debug@313 ::: message")
    try {
      // Generate a response using Cohere AI
      const response = await cohere.generate({
        // model: 'xlarge',
        prompt: `User: ${message}\nTherapist:`,
        max_tokens: 100
      });
       console.log(response["generations"][0], "response")
  
    //   const therapistReply = response.body.generations[0].text.trim();
      
     return res.send({ reply: response["generations"][0] });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
  
}); */
app.post("/generate", generateResponse);

// Start server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});