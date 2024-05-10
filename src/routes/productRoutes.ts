import express from "express"
import productController from "../controllers/productController"
import authController from "../controllers/authController"

const router = express.Router()

const { restrictTo, protect } = authController
const {
  createProduct,
  updateProduct,
  deleteProduct,
  getOverviews,
  getProducts,
} = productController

router.get("/get-products", protect, getProducts)

router.use(restrictTo("admin"))

router.post("/create-product", protect, createProduct)
router.patch("/update-product/:productID", protect, updateProduct)
router.delete("/delete-product/:productID", protect, deleteProduct)
router.get("/get-products", protect, getProducts)
router.get("/get-overviews", protect, getOverviews)

export default router