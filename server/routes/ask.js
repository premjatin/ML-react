const express = require("express");
const axios = require("axios");
const Message = require("../models/Message");

const router = express.Router();

router.post("/", async (req, res) => {
  const { question } = req.body;

  try {
    // Send to Python FastAPI server
    const response = await axios.post("http://localhost:8000/solve", {
      question,
    });
    const answer = response.data.answer;

    // Save to MongoDB
    const newMessage = new Message({ question, answer });
    await newMessage.save();

    res.json({ answer });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Error solving question" });
  }
});

module.exports = router;
