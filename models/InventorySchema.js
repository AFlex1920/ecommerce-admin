import mongoose, { model, Schema, models } from "mongoose";
const InventorySchema = new Schema(
  {
    product: { type: mongoose.Types.ObjectId, ref: "Product" },
    quantity: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export const Inventory =
  models.Inventory || model("Inventory", InventorySchema);
