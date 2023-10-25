import { mongooseConnect } from "@/lib/mongoose";
import { Review } from "@/models/Review";
import { Product } from "@/models/Product";

export default async function handle(req, res) {
  await mongooseConnect();

  if (req.method === "GET") {
    res.json(await Review.find().populate("product").sort({ product: -1 }));
  }

  if (req.method === "DELETE") {
    await Review.deleteOne({ _id: req.query?._id });
    res.json("OK");
  }
}
