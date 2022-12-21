
import { model, Schema, Types } from 'mongoose';

interface IContact {
    name: string;
    company: string;
    phone_number: string;
    email: string;
    creation_date: Date;
    last_update: Date;
    owner_id: Types.ObjectId;
    archived: boolean
  }
const contactSchema = new Schema<IContact>({
    name: String,
    company: String,
    phone_number: String,
    email: String,
    creation_date: {type: Date, default: Date.now},
    last_update: {type: Date, default: Date.now},
    owner_id: { type: Schema.Types.ObjectId, ref: 'User' },
    archived: Boolean
})

const Contact =  model<IContact>('Contact', contactSchema);
export default Contact