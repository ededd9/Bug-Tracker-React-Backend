import { Router } from "express";
const router = Router();
import { Ticket } from "../models/tickets.js";
//CREATE POST
router.post("/", async (req, res) => {
  console.log(req.body);
  const newTicket = new Ticket(req.body);
  try {
    const savedTicket = await newTicket.save();
    res.status(200).json(savedTicket);
  } catch (err) {
    res.status(500).json(err);
  }
});
export { router };
