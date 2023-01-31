const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    img: {
        type: String,
    },
    imgSlider: {
        type: String,
    },
    name: {
        type: String,
    },
    desc: {
        type: String,
    },
    genres: {
        type: String,
    },
});

const productRopeSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    priceSell: {
        type: Number,
    },
    bestSeller: {
        type: String,
    },
    size: {
        type: String,
    },
    desc: {
        type: String,
    },
    chatlieu: {
        type: String,
    },
    color: {
        type: String,
    },
    genres: {
        type: String,
    },
});

const accessoryProductSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    priceSell: {
        type: Number,
    },
    bestSeller: {
        type: String,
    },
    size: {
        type: String,
    },
    desc: {
        type: String,
    },
    chatlieu: {
        type: String,
    },
    color: {
        type: String,
    },
    genres: {
        type: String,
    },
});

const productBestSellersSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    priceSell: {
        type: Number,
    },
    bestSeller: {
        type: String,
    },
    desc: {
        type: String,
    },
    size: {
        type: String,
    },
    doday: {
        type: String,
    },
    maumat: {
        type: String,
    },
    loaimay: {
        type: String,
    },
    sizeday: {
        type: String,
    },
    chongnuoc: {
        type: String,
    },
    matkinh: {
        type: String,
    },
    chatlieuday: {
        type: String,
    },
    genres: {
        type: String,
    },
});

const productSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    priceSell: {
        type: Number,
    },
    bestSeller: {
        type: String,
    },
    desc: {
        type: String,
    },
    size: {
        type: String,
    },
    doday: {
        type: String,
    },
    maumat: {
        type: String,
    },
    loaimay: {
        type: String,
    },
    sizeday: {
        type: String,
    },
    chongnuoc: {
        type: String,
    },
    matkinh: {
        type: String,
    },
    chatlieuday: {
        type: String,
    },
    genres: {
        type: String,
    },
});

const customer = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    hoten: {
        type: String,
        required: true,
    },
    sdt: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    ghichu: {
        type: String,
    },
});

const cartSchema = new mongoose.Schema({
    _idsp: {
        type: String,
    },
    _idkh: {
        type: String,
    },
    count: {
        type: Number,
    },
});

let Product = mongoose.model('Product', productSchema);
let Cart = mongoose.model('Cart', cartSchema);
let ProductBestSellers = mongoose.model('MenBestSellers', productBestSellersSchema);
let AccessoryProduct = mongoose.model('AccessoryMen', accessoryProductSchema);
let productRope = mongoose.model('MenRope', productRopeSchema);
let Brand = mongoose.model('Brand', brandSchema);
let Customer = mongoose.model('Customer', customer);

module.exports = { Product, Cart, ProductBestSellers, AccessoryProduct, productRope, Brand, Customer };
