const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const schemas = require("./models/schemas");
const mongoose = require("mongoose");
const mail = require("./mail");

const nodemailer = require("nodemailer");

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

  // // export all sessions to json file
  // fetch('http://localhost:5000/api/v1/sessions', {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // })
  // .then((res) => res.json())
  // .then((data) => {
  //   const fs = require('fs');
  //   fs.writeFile('sessions.json', JSON.stringify(data), (err) => {
  //     if (err) throw err;
  //     console.log('Sessions saved to sessions.json');
  //   });
  // })

  // // post all sessions from json file without _id
  // const fs = require("fs");
  // const sessions = JSON.parse(fs.readFileSync("sessions.json", "utf8"));
  // sessions.forEach((session) => {
  //   delete session._id;
  //   fetch("http://localhost:5000/api/v1/sessions", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(session),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // });
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

app.get("/api/v1/sessions/cells/:cell", async (req, res) => {
  const cell = req.params.cell;
  const sessions = await schemas.Sessions.find({ cell: cell }).exec();

  if (sessions) {
    res.status(200).json(sessions);
  } else {
    res.status(400).json({ message: "Error fetching sessions" });
  }
});

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
  console.log(`Server is running on port ${port}`);
});
