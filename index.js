const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
//product Routes
const productRoutes = require('./routes/product');
// Cart Routes
const cartRoutes = require('./routes/cart');
// menBestSeller Routes
const productBestSellerRoutes = require('./routes/productBestSeller');
// accsessorymen Routes
const AccessoryProductRoutes = require('./routes/accessoryProduct');
// menRope Routes
const productRopeRoutes = require('./routes/productRope');
// brand Routes
const brandRoutes = require('./routes/brand');
// customer Routes
const customerRoutes = require('./routes/customer');

dotenv.config();

//connect database

mongoose.connect(process.env.MONGODB_URL, () => {
    console.log('connected to mongooDB');
});

app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());
app.use(morgan('common'));

// routes
app.use('/api/product', productRoutes);
// Cart
app.use('/api/cart', cartRoutes);
//productBestSeller
app.use('/api/productBestSeller', productBestSellerRoutes);
//accessoryProduct
app.use('/api/accessoryProduct', AccessoryProductRoutes);
//productRope
app.use('/api/productRope', productRopeRoutes);
// brand
app.use('/api/brand', brandRoutes);
// customer
app.use('/api/customer', customerRoutes);

app.listen(8000, () => {
    console.log('server is runging...');
});
