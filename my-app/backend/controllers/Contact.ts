import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Contact from "../models/Contact.js";
const getAllContacts = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const contacts = await Contact.find()
        res.status(201).json({ contacts });
    } catch (error) {
        res.status(500).json({ error });
    }
}
const getContact = async (_req: Request, res: Response, next: NextFunction) => {
    const contact_id = _req.params.contactId
    try {
        const contact = await Contact.find({ _id: contact_id })
        res.status(201).json({ contact });
    } catch (error) {
        res.status(500).json({ error });
    }
}
const createContact = async (_req: Request, res: Response, next: NextFunction) => {
    const { name, company, phone_number, email, owner_id } = _req.body
    let creation_date = new Date()
    let last_update = new Date()
    let archived = false
    try {
        const contact = new Contact({
            _id: new mongoose.Types.ObjectId(),

            name,
            company,
            phone_number,
            email,
            creation_date,
            last_update,
            owner_id,
            archived
        });
        const savedContact = await contact.save()
        res.status(201).json({ contact: savedContact });
    } catch (error) {
        res.status(500).json({ error });
    }

}
const updateContact = async (_req: Request, res: Response, next: NextFunction) => {
    let contact_id = _req.params.contactId
    const { name, company, phone_number, email } = _req.body
    let last_update = new Date()

    try {
        const updatedContact = await Contact.findByIdAndUpdate(contact_id, {
            name,
            company,
            phone_number,
            email,
            last_update
        }, { new: true })
        res.status(201).json({ contact: updatedContact })
    } catch (error) {
        res.status(500).json({ error })
    }
}
const deleteContact = async (_req: Request, res: Response, next: NextFunction) => {
    let contact_id = _req.params.contactId
    try {
        const contact = await Contact.findById(contact_id)
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' })
        }
        await Contact.findByIdAndDelete(contact_id)
        res.status(201).json({ message: 'Contact deleted' })
    } catch (error) {
        res.status(500).json({ error })
    }
}
export default { getAllContacts, getContact, createContact, updateContact, deleteContact }