import express from "express";
import { protectRoute } from "../middleware/auth.middelware.js";
import {
  createCheckoutSession,
  checkoutSuccess,
} from "../controllers/payment.controller.js";

const router = express.Router();

// Route to create a Stripe checkout session
router.post("/create-checkout-session", protectRoute, createCheckoutSession);
router.post("/checkout-success", protectRoute, checkoutSuccess);

export default router;
