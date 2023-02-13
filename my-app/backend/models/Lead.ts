
import { model, Schema, Types } from 'mongoose';
interface ILead {
    name: string;
    company: string;
    phone_number: string;
    email: string;
    category: string;
    contact_status: string;
    creation_date: Date;
    last_update: Date;
    owner_id: Types.ObjectId;
}
const leadSchema = new Schema<ILead>({
    name: String,
    company: String,
    phone_number: String,
    email: String,
    category: String,
    contact_status: String,
    creation_date: {type: Date, default: Date.now},
    last_update: {type: Date, default: Date.now},
    owner_id: { type: Schema.Types.ObjectId, ref: 'User' },
})

const Lead =  model<ILead>('Lead', leadSchema);
export default Lead