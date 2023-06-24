import express from "express" ;
import { router as productRouter} from "./routes/productRoute.js";

const app= express();
app.use(express.json());
app.use('/api/v1/products', productRouter);


// const express= require('express');
// const productRoutes= require('./routes/productRoutes')



app.listen(8080, ()=> {
  console.log('\nListinning on port http"//localhost:8080')
});