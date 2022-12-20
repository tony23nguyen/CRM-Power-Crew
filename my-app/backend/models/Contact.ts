import mongoose from 'mongoose';
const {Schema} = mongoose;

const contact_schema: mongoose.Schema = new Schema({
    Name: String,
    Company: String,
    phone_number: String,
    Email: String,
    creation_date: {type: Date, default: Date.now},
    last_update: {type: Date, default: Date.now},
    owner_id: String,
    archived: {type: Boolean, default: false}
})

export default mongoose.model('Contacts', contact_schema);