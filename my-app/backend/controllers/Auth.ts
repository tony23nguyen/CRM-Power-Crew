import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import User from "../models/User.js";


const createUser = async (_req: Request, res: Response, next: NextFunction) => {
  
    const { username, password, email, phone_number } = _req.body
    let created_at = new Date()
 
    try {
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            username,
            password,
            phone_number,
            email,
            created_at
        });

        const savedUser = await user.save()
        res.status(201).json({ user: savedUser });
    } catch (error) {
        res.status(500).json({ error });
    }

}

export default { createUser }