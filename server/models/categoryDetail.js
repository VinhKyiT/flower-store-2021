import mongoose from "mongoose";

const categoryDetailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  categoryId: {
    type: String,
    ref: "category",
  },
});

const CategoryDetail = mongoose.model("categoryDetail", categoryDetailSchema);

export default CategoryDetail;
