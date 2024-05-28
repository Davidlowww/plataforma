import { Router } from "express";
import {createSession} from '../controllers/Payment.controllers'

const router = Router();

router.get('/create-checkout-session', createSession);

router.get('/success', (req, res) => res.redirect("success.html"));
router.get('/cancel', (req, res) => res.redirect("/index.html"));

export default router;
