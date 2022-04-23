import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ticketSchema = new Schema(
  {
    department: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    severity: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
const Ticket = mongoose.model("Ticket", ticketSchema);
export { Ticket };
