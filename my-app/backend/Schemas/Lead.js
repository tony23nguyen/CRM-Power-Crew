import mongoose from 'mongoose';
const {Schema} = mongoose;

const lead_schema = new Schema({
    Name: String,
    Company: String,
    phone_number: String,
    Email: String,
    category: String,
    contact_status: String,
    creation_date: {type: Date, default: Date.now},
    last_update: {type: Date, default: Date.now},
    owner_id: String
})

module.exports = mongoose.Model('lead_schema', lead_schema);