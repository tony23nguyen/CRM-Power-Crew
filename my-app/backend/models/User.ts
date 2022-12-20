import mongoose from 'mongoose';
const {Schema} = mongoose;

const user_schema: mongoose.Schema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    created_at: {type: Date, default: Date.now},
    phone_number: {type: String, required: false},
    refresh_token: {type: String, required: false},
    auth_token: {type: String, required: false}
})

export default mongoose.model('Users', user_schema);