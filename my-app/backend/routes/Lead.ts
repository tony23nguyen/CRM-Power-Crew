import express from 'express'
import controller from '../controllers/Lead.js'

const router = express.Router()

router.get('/', controller.getAllLeads);
router.get('/:leadId', controller.getLead);
router.post('/add', controller.createLead);
router.put('/:leadId', controller.updateLead);
router.delete('/:leadId', controller.deleteLead);

export default router;