import mongoose from 'mongoose';
const {Schema} = mongoose;

const user_schema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    created_at: {type: Date, default: Date.now},
    phone_number: {type: String, required: false},
    refresh_token: {type: String, required: false},
    auth_token: {type: String, required: false}
})

module.exports = mongoose.Model('user_schema', user_schema);