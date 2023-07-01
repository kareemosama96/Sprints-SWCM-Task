import express, { Router } from 'express';
import { getProduct,createProduct ,getpro,deletee, updateee } from '../controllers/products.js';
 import {login} from '../controllers/login.js';
 import { registration } from '../controllers/reg.js';
 import { authenticate } from '../controllers/authenticate.js';


const router = express.Router();


router.post('/login',login)
router.post('/registration',registration)
router.get('/products',getProduct)
router.get('/authenticate',authenticate)
router.post('/products',createProduct)
router.get('/products/:id', getpro);
router.delete('/products/:id',deletee);
router.patch('/products/:id', updateee);

export default router;
