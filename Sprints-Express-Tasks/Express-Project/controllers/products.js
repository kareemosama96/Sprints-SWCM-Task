import { v4 as uuidv4 } from 'uuid';

const products = [];

export const getProduct = (req, res) => {
  res.send(products);
  
};

export const createProduct = (req, res) => {
  const product = { ...req.body, id: uuidv4() };
  if (!req.body.name || req.body.name.length < 3) {
    return res.status(400).json({ error: 'Name should be in alphabitical characters with at least 3 characters' });
  
  }
  if (typeof req.body.price !== 'number') {
    return res.status(400).json({ error: 'Price should be a number' });
  }

  // // Validate the category_id field
  // const existingCategory = categories.find((category) => req.body.category.id === category_id);
  // if (!existingCategory) {
  //   return res.status(400).json({ error: 'Invalid category_id' });
  // }


  else{
    products.push(product);
    res.send(products);
  }
 
};

export const  getpro = (req, res) => {
    const id = req.params.id;
    const product = products.find((product) => product.id === id);
    res.send(product);
  }

  export const deletee =  (req, res) => {
    const id = req.params.id;
    products = products.filter((product) => product.id !== id);
    res.send(products);
  }

  export const updateee= (req, res) => {
    const id = req.params.id;
    const { name, price } = req.body;
    const product = products.find((product) => product.id === id);
  
    // Validate the name field
  if (!name || typeof name !== 'string' || name.length < 3) {
    return res.status(400).json({ error: 'Name should be a string with at least 3 characters' });
  }

  // Validate the price field
  if (typeof price !== 'number') {
    return res.status(400).json({ error: 'Price should number' });
  }

  // Validate the category_id field
  const existingCategory = categories.find((category) => category.id === category_id);
  if (!existingCategory) {
    return res.status(400).json({ error: 'Invalid category_id' });
  }
  }