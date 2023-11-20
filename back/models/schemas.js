const mongoose = require("mongoose");
const Schema = mongoose.Schema

const sessionSchema = new Schema({
    title: {type: String, required: true},
    cell: {type: String, required: true},
    type: {type: String, required: true},
    image: {type: String, required: true},
    file: {type: String, required: true},
    speakers: {type: [String], required: true},
    tags: {type: [String], required: true},
    academicYear: {type: String, required: true},
});

const Sessions = mongoose.model("Sessions", sessionSchema, "sessions");

const contactSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true}
});

const Contacts = mongoose.model("Contacts", contactSchema, "contacts");

module.exports = { Sessions , Contacts };