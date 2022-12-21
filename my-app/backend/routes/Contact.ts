import express from 'express'
import controller from '../controllers/Contact.js'

const router = express.Router()

router.get('/', controller.getAllContacts);
router.get('/:contactId', controller.getContact);
router.post('/add', controller.createContact);
router.put('/:contactId', controller.updateContact);
router.delete('/:contactId', controller.deleteContact);

export default router;