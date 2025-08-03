const Product = require('../models/productModel');

// Trả về key để frontend dịch tự động
const validateProductData = (data) => {
  if (!data.name || data.name.trim() === '') {
    return 'errors.nameRequired';
  }
  if (!data.description || data.description.trim() === '') {
    return 'errors.descriptionRequired';
  }
  if (data.price === undefined || data.price === null || isNaN(data.price)) {
    return 'errors.priceInvalid';
  }
  if (Number(data.price) < 0) {
    return 'errors.priceNegative';
  }
  return null;
};

exports.create_a_product = (req, res) => {
  const productData = req.body;

  const errorKey = validateProductData(productData);
  if (errorKey) {
    return res.status(400).json({ errorKey });
  }

  const product = new Product(productData);
  product.save()
    .then(() => res.status(201).json(product))
    .catch((err) => res.status(400).json({ errorKey: 'error.submit' }));
};

exports.update_a_product = (req, res) => {
  const productData = req.body;

  const errorKey = validateProductData(productData);
  if (errorKey) {
    return res.status(400).json({ errorKey });
  }

  Product.findByIdAndUpdate(req.params.productId, productData, { new: true })
    .then((product) => {
      if (!product) return res.status(404).json({ errorKey: 'error.productNotFound' });
      res.status(200).json(product);
    })
    .catch((err) => res.status(400).json({ errorKey: 'error.submit' }));
};

exports.get_a_product = (req, res) => {
  Product.findById(req.params.productId)
    .then((product) => {
      if (!product) return res.status(404).json({ errorKey: 'error.productNotFound' });
      res.status(200).json(product);
    })
    .catch(() => res.status(400).json({ errorKey: 'error.submit' }));
};

exports.get_all_products = (req, res) => {
  Product.find()
    .then((products) => res.status(200).json(products))
    .catch(() => res.status(400).json({ errorKey: 'error.submit' }));
};

exports.delete_a_product = (req, res) => {
  Product.findByIdAndDelete(req.params.productId)
    .then((product) => {
      if (!product) return res.status(404).json({ errorKey: 'error.productNotFound' });
      res.status(200).json({ message: 'Product deleted' });
    })
    .catch(() => res.status(400).json({ errorKey: 'error.submit' }));
};
