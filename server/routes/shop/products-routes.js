const express = require("express");

const {
  handleImageUpload,
  addProduct,
  editProduct,
  deleteProduct,
} = require("../../controllers/admin/products-controller");
const {getFilteredProducts, getProductDetails} = require("../../controllers/shop/products-controller")
const { upload } = require("../../helpers/cloudinary");

const router = express.Router();

router.post("/upload-image", upload.single("my_file"), handleImageUpload);
router.post("/add", addProduct);
router.put("/edit/:id", editProduct);
router.delete("/delete/:id", deleteProduct);
router.get("/get", getFilteredProducts);
router.get("/get/:id", getProductDetails);


module.exports = router;