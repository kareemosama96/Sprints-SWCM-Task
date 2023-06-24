import express, { Router } from "express"
import  { getAllProducts,addProduct,getOne,updateProduct,deleteProduct }  from '../controller/productController.js'
export const router = Router();

router.get('/', getAllProducts)
router.post('/', addProduct)
router.get('/:id', getOne)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)