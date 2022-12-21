import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Lead from "../models/Lead.js";
const getAllLeads = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const leads = await Lead.find()
        res.status(201).json({ leads });
    } catch (error) {
        res.status(500).json({ error });
    }
}
const getLead = async (_req: Request, res: Response, next: NextFunction) => {
    const lead_id = _req.params.leadId
    try {
        const lead = await Lead.find({ _id: lead_id })
        res.status(201).json({ lead });
    } catch (error) {
        res.status(500).json({ error });
    }
}
const createLead = async (_req: Request, res: Response, next: NextFunction) => {
    const { name, company, phone_number, email, category, contact_status, owner_id } = _req.body
    let creation_date = new Date()
    let last_update = new Date()
    try {
        const lead = new Lead({
            _id: new mongoose.Types.ObjectId(),
            name,
            company,
            phone_number,
            email,
            category,
            contact_status,
            creation_date,
            last_update,
            owner_id 
        });

        const savedLead = await lead.save()
        res.status(201).json({ lead: savedLead });
    } catch (error) {
        res.status(500).json({ error });
    }

}
const updateLead = async (_req: Request, res: Response, next: NextFunction) => {
    let lead_id = _req.params.leadId
    const { name, company, phone_number, email, category, contact_status } = _req.body
    let last_update = new Date()
    try {
        const updatedLead = await Lead.findByIdAndUpdate(lead_id, {
            name,
            company,
            phone_number,
            email,
            category,
            contact_status,
            last_update
        }, { new: true })
        res.status(201).json({ lead: updatedLead })
    } catch (error) {
        res.status(500).json({ error })
    }
}
const deleteLead = async (_req: Request, res: Response, next: NextFunction) => {
    let lead_id = _req.params.leadId
    try {
        const lead = await Lead.findById(lead_id)
        if (!lead) {
            return res.status(404).json({ message: 'Lead not found' })
        }
        await Lead.findByIdAndDelete(lead_id)
        res.status(201).json({ message: 'Lead deleted' })
    } catch (error) {
        res.status(500).json({ error })
    }
}
export default { getAllLeads, getLead, createLead, updateLead, deleteLead }