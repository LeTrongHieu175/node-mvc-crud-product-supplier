const Supplier = require("../models/Supplier");

// GET all suppliers
exports.index = async (req, res) => {
  const suppliers = await Supplier.find();
  res.render("suppliers/index", { suppliers });
};

// GET new supplier form
exports.newForm = (req, res) => {
  res.render("suppliers/new");
};

// POST create supplier
exports.create = async (req, res) => {
  const { name, address, phone } = req.body;
  await Supplier.create({ name, address, phone });
  res.redirect("/suppliers");
};

// GET edit supplier form
exports.editForm = async (req, res) => {
  const supplier = await Supplier.findById(req.params.id);
  res.render("suppliers/edit", { supplier });
};

// POST update supplier
exports.update = async (req, res) => {
  const { name, address, phone } = req.body;
  await Supplier.findByIdAndUpdate(req.params.id, { name, address, phone });
  res.redirect("/suppliers");
};

// GET delete supplier
exports.delete = async (req, res) => {
  await Supplier.findByIdAndDelete(req.params.id);
  res.redirect("/suppliers");
};