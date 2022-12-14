import mongoose from 'mongoose';
const {Schema} = mongoose;

const contact_schema = new Schema({
    Name: String,
    Company: String,
    phone_number: String,
    Email: String,
    creation_date: {type: Date, default: Date.now},
    last_update: {type: Date, default: Date.now},
    owner_id: String,
    archived: Boolean
})

module.exports = mongoose.Model('contact_schema', contact_schema);