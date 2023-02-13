
import { model, Schema, Types } from 'mongoose';
interface IDeal {
    company: string;
    value: number;
    priority: string;
    category: string;
    creation_date: Date;
    last_update: Date;
    owner_id: Types.ObjectId;
    archived: boolean
}
const dealSchema = new Schema<IDeal>({
    company: String,
    value: Number,
    priority: String,
    category: String,
    creation_date: { type: Date, default: Date.now },
    last_update: { type: Date, default: Date.now },
    owner_id: { type: Schema.Types.ObjectId, ref: 'User' },
    archived: Boolean
})

const Deal =  model<IDeal>('Deal', dealSchema);
export default Deal