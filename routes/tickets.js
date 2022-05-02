import { Router } from "express";
const router = Router();
import { Ticket } from "../models/tickets.js";
//GET TICKET
router.get("/:id", async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    res.status(200).json(ticket);
  } catch (err) {
    res.status(500).json(err);
  }
});
//DELETE TICKET
router.delete("/:id", async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    await ticket.delete();
    res.status(200).json("Ticket has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});
//CREATE TICKET
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
