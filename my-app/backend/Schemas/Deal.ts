import mongoose from 'mongoose';
const {Schema} = mongoose;

const lead_schema: mongoose.Schema = new Schema({
    Company: String,
    value: Number,
    priority: String,
    category: String,
    creation_date: {type: Date, default: Date.now},
    last_update: {type: Date, default: Date.now}, 
    owner_id: String,
    contact_id: String
})

module.exports = mongoose.model('lead_schema', lead_schema);