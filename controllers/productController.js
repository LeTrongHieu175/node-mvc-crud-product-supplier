const Product = require("../models/Product");
const Supplier = require("../models/Supplier");

// GET all products
exports.index = async (req, res) => {
  const products = await Product.find().populate("supplierId");
  res.render("products/index", { products });
};

// GET new product form
exports.newForm = async (req, res) => {
  const suppliers = await Supplier.find();
  res.render("products/new", { suppliers });
};

// POST create product
exports.create = async (req, res) => {
  const { name, price, quantity, supplierId } = req.body;
  await Product.create({ name, price, quantity, supplierId });
  res.redirect("/products");
};

// GET edit product form
exports.editForm = async (req, res) => {
  const product = await Product.findById(req.params.id);
  const suppliers = await Supplier.find();
  res.render("products/edit", { product, suppliers });
};

// POST update product
exports.update = async (req, res) => {
  const { name, price, quantity, supplierId } = req.body;
  await Product.findByIdAndUpdate(req.params.id, { name, price, quantity, supplierId });
  res.redirect("/products");
};

// GET delete product
exports.delete = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect("/products");
};