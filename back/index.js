const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const schemas = require("./models/schemas");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();
const port = process.env.PORT || 5000;
const db_uri = process.env.DB_URI;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(db_uri, dbOptions).then(() => {
  console.log("Connected to MongoDB");
});

app.get("/api/v1", (req, res) => {
  res.send("Hello from ENSIAS AI Club");
});

// app.post("/api/v1/sessions", async (req, res) => {
//   const sessionData = req.body;
//   const newSession = new schemas.Sessions(sessionData);
//   const saveSession = await newSession.save();

//   if (saveSession) {
//     res.status(200).json({ message: "Session added successfully" });
//   } else {
//     res.status(400).json({ message: "Error adding session" });
//   }

//   res.end();
// });

app.get("/api/v1/sessions", async (req, res) => {
  const sessions = await schemas.Sessions.find().exec();

  if (sessions) {
    res.status(200).json(sessions);
  } else {
    res.status(400).json({ message: "Error fetching sessions" });
  }
});

app.get("/api/v1/sessions/cell/:cell", async (req, res) => {
  const cell = req.params.cell;
  const sessions = await schemas.Sessions.find({ cell: cell }).exec();

  if (sessions) {
    res.status(200).json(sessions);
  } else {
    res.status(400).json({ message: "Error fetching sessions" });
  }
});

// contact request
app.post("/api/v1/contact", async (req, res) => {
  const contactData = req.body;
  const newContact = new schemas.Contacts(contactData);
  const saveContact = await newContact.save();

  if (saveContact) {
    res.status(200).json({ message: "Contact added successfully" });
  } else {
    res.status(400).json({ message: "Error adding contact" });
  }

  res.end();
});

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
