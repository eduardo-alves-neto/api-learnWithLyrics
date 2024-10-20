import express from "express";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { formatLyricTest } from "./helper.js";

dotenv.config();

const app = express();
app.use(express.json());

app.post("/generate-test", async (req, res) => {
  try {
    const { lyric } = req.body;

    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      Take the lyrics from the song ${lyric} and, based on them, create an array of JSON objects 
      containing 5 questions. Each question should have four answer options (a, b, c, d), and one 
      of them must be marked as the correct answer. The answers should be based on the interpretation 
      of the song, focusing on the themes, messages, or implicit meanings in the lyrics.
      
      Use the example array below as a reference for the structure of questions:
      
        {
          description: "Insert the first question here...",
          a: { option: "Option A", rightAnswer: false },
          b: { option: "Option B", rightAnswer: false },
          c: { option: "Option C", rightAnswer: true },
          d: { option: "Option D", rightAnswer: false },
        },
        // Repeat for 4 more questions

      The questions and answers should reflect the interpretation of the lyrics, considering the context, 
      emotions expressed, and the possible messages conveyed by the song. 
      Please, return the questions formatted and that can be received by a variable!
    `;

    const result = await model.generateContent(prompt);

    const questions = formatLyricTest(result.response.text());

    res.status(200).send(questions);
  } catch (error) {
    console.error("Error generating test:", error);
    res
      .status(500)
      .send({ error: "An error occurred while generating the test" });
  }
});

app.listen(3000, () => {
  console.log("AI Lyric Service works...");
});
