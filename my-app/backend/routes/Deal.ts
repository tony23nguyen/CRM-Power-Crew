import express from 'express'
import controller from '../controllers/Deal.js'

const router = express.Router()

router.get('/', controller.getAllDeals);
router.get('/:dealId', controller.getDeal);
router.post('/add', controller.createDeal);
router.put('/:dealId', controller.updateDeal);
router.delete('/:dealId', controller.deleteDeal);

export default router;