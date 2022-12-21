import { model, Schema} from 'mongoose';

interface IUser {
    username: string;
    password: string;
    email: string;
    created_at: Date;
    phone_number: string;
    refresh_token: string;
    auth_token: string
  }
  const userSchema = new Schema<IUser>({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    created_at: {type: Date, default: Date.now},
    phone_number: {type: String, required: false},
    refresh_token: {type: String, required: false},
    auth_token: {type: String, required: false}
})


const User =  model<IUser>('User', userSchema);

export default User