import mongoose, { model, Schema, models } from "mongoose";

const PurchaseOrderSchema = new Schema(
  {
    orderNumber: { type: String, required: true },
    orderDate: { type: Date, required: true },
    products: [
      {
        product: { type: mongoose.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, required: true },
        purchasePrice: { type: Number, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const PurchaseOrder =
  models.PurchaseOrder || model("PurchaseOrder", PurchaseOrderSchema);
