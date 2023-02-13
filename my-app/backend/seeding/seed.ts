import {} from 'dotenv/config';
import mongoose from "mongoose";
import Contact from "../models/Contact";
import Deal from "../models/Deal";
import Leads from '../models/Lead';
import Users from "../models/User";
import { fake_contact_data, fake_deal_data, fake_lead_data, fake_user_data } from "./seedData";

console.log("Initiating connection...");

try {
    mongoose.connect(process.env.DATABASE_URL);
    const db = mongoose.connection;
} catch(e: any) {
    console.log((e as Error).message);
}

console.log("Connected. Seeding now.");

const seed = async () => {
    await Leads.deleteMany({});
    await Contact.deleteMany({});
    await Deal.deleteMany({});
    await Users.deleteMany({});
    await Leads.insertMany(fake_lead_data);
    await Users.insertMany(fake_user_data);
    await Deal.insertMany(fake_deal_data);
    await Contact.insertMany(fake_contact_data);
}

seed().then(() => {
    mongoose.connection.close();
});

console.log("Seeding completed!");