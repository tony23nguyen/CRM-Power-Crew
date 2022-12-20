import mongoose from 'mongoose';
const Schema = mongoose.Schema;

interface Lead {
    Name: String,
    Company: String,
    phone_number: String,
    Email: String,
    category: string,
    contact_status: string,
    creation_date: Date,
    last_update: Date,
    owner_id: String
}
const lead_schema: mongoose.Schema = new Schema<Lead>({
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

const Leads = mongoose.model('Leads', lead_schema);
export default Leads