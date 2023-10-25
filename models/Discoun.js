import { model, models, Schema } from "mongoose";

const adminSchema = new Schema(
  {
    code: { type: String, required: true, unique: true },
    percentage: {
      type: Number,
      required: true,
    },
    fromdate: {
      type: Date,
      required: true,
    },
    todate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export const Admin = models?.Admin || model("Admin", adminSchema);
