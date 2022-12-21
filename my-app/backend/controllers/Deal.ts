import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Deal from "../models/Deal.js";
const getAllDeals = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const deals = await Deal.find()
        res.status(201).json({ deals });
    } catch (error) {
        res.status(500).json({ error });
    }
}
const getDeal = async (_req: Request, res: Response, next: NextFunction) => {
    const deal_id = _req.params.dealId
    try {
        const deal = await Deal.find({ _id: deal_id })
        res.status(201).json({ deal });
    } catch (error) {
        res.status(500).json({ error });
    }
}
const createDeal = async (_req: Request, res: Response, next: NextFunction) => {
    const { company, value, priority, category, owner_id } = _req.body
    let creation_date = new Date()
    let last_update = new Date()
    let archived = false

    try {
        const deal = new Deal({
            _id: new mongoose.Types.ObjectId(),
            company,
            value,
            priority,
            category,
            creation_date,
            last_update,
            owner_id,
            archived
        });

        const savedDeal = await deal.save()
        res.status(201).json({ deal: savedDeal });
    } catch (error) {
        res.status(500).json({ error });
    }

}
const updateDeal = async (_req: Request, res: Response, next: NextFunction) => {
    let deal_id = _req.params.dealId
    const { company, value, priority, category } = _req.body
    let last_update = new Date()

    try {
        const updatedDeal = await Deal.findByIdAndUpdate(deal_id, {
            company,
            value,
            priority,
            category,
            last_update
        }, { new: true })
        res.status(201).json({ deal: updatedDeal })
    } catch (error) {
        res.status(500).json({ error })
    }
}
const deleteDeal = async (_req: Request, res: Response, next: NextFunction) => {
    let deal_id = _req.params.dealId
    try {
        const deal = await Deal.findById(deal_id)
        if (!deal) {
            return res.status(404).json({ message: 'Deal not found' })
        }
        await Deal.findByIdAndDelete(deal_id)
        res.status(201).json({ message: 'Deal deleted' })
    } catch (error) {
        res.status(500).json({ error })
    }
}
export default { getAllDeals, getDeal, createDeal, updateDeal, deleteDeal }