const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const schemas = require("./models/schemas");
const fs = require("fs");
const mongoose = require("mongoose");
const mail = require("./mail");
require("dotenv/config");

const app = express();
const port = process.env.PORT || 5000;
const db_uri = process.env.DB_URI;

const corsOptions = {
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200,
};

const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(corsOptions));

app.get("/api/v1", (req, res) => {
  res.send("Hello from ENSIAS AI Club");
});

// get all sessions
app.get("/api/v1/sessions", async (req, res) => {
  const sessions = await schemas.Sessions.find().exec();

  if (sessions) {
    res.status(200).json(sessions);
  } else {
    res.status(400).json({ message: "Error fetching sessions" });
  }
});

// get session by cell
app.get("/api/v1/sessions/cells/:cell", async (req, res) => {
  const cell = req.params.cell;
  const sessions = await schemas.Sessions.find({ cell: cell }).exec();

  if (sessions) {
    res.status(200).json(sessions);
  } else {
    res.status(400).json({ message: "Error fetching sessions" });
  }
});

// post contact form
app.post("/api/v1/contact", async (req, res) => {
  const contactData = req.body;
  name = contactData.name;
  to = contactData.email;
  message = contactData.message;
  const sendMail = await mail.sendContactEmail({name, to, message});
  if (sendMail) {
    res.status(200).json({ message: "Mail sent successfully" });
  } else {
    res.status(400).json({ message: "Error" });
  }

  res.end();
});

const server = app.listen(port, () => {
  mongoose.connect(db_uri, dbOptions).then(() => {
    console.log("Connected to MongoDB");
  });
  console.log(`Server is running on port ${port}`);
});
