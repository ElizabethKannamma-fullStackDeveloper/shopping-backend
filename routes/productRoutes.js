const express = require('express');
const Product = require('../models/product');
const router = express.Router();

// GET all products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Optionally, you can add filtering routes here

module.exports = router;
