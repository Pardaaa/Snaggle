import express from 'express';
import {
   getProduct,
   getProductbyId,
   createProduct,
   updateProduct,
   deleteProduct,
   getCustomerProductById,
} from '../controllers/productController.js';
import { verifyUser, adminOnly } from '../middleware/authUser.js';

const router = express.Router();

router.get('/product', getProduct);
router.get('/product/:id', getProductbyId);
router.post('/product', verifyUser, adminOnly, createProduct);
router.patch('/product/:id', verifyUser, adminOnly, updateProduct);
router.delete('/product/:id', verifyUser, adminOnly, deleteProduct);
router.get('/customer/product/:id', getCustomerProductById);

export default router;
