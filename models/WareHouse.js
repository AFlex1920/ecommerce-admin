import mongoose, { model, Schema, models } from "mongoose";

const WareHouseSchema = new Schema(
  {
    quantity: Number,
    product: { type: mongoose.Types.ObjectId, ref: "Product" },
  },
  {
    timestamps: true,
  }
);

export const WareHouse =
  models.WareHouse || model("WareHouse", WareHouseSchema);
