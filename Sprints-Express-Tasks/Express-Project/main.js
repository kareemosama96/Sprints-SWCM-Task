import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './routes/products.js';


const app = express();
app.use(bodyParser.json());
app.use('/', productRoutes);


app.get('/', (req, res) => {
  res.send('Hey');
});

app.listen(8080, () => {
console.log('Listening on http://localhost:8080');
});
