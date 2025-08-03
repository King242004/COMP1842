const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Định nghĩa routes
router.get('/', productController.get_all_products); // Lấy tất cả sản phẩm
router.get('/:productId', productController.get_a_product); // Lấy sản phẩm theo ID
router.post('/', productController.create_a_product); // Tạo sản phẩm mới
router.put('/:productId', productController.update_a_product); // Cập nhật sản phẩm
router.delete('/:productId', productController.delete_a_product); // Xóa sản phẩm

module.exports = router;