const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: String,
    userName: String,
    code: Number,
    password: String,
    title: String,
    email: String,
    role: String,
    supervisor: String,
});

module.exports = mongoose.model('user', userSchema, 'users');