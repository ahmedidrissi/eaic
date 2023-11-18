const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const db_uri = process.env.DB_URI;

// // Connect to MongoDB
// mongoose.connect(db_uri, { useNewUrlParser: true, useUnifiedTopology: true });

// // Create a schema
// const yourSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// });

// // Create a model
// const YourModel = mongoose.model('YourModel', yourSchema);

// // Route for fetching data
// app.get('/api/data', async (req, res) => {
//   try {
//     const data = await YourModel.find();
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
