import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    default: 5,
  },
  tags: {
    type: [String],
    required: true,
  },
});

// جلوگیری از دوباره ساختن مدل در هربار refresh
const FoodModel = mongoose.models.Food || mongoose.model("Food", schema);

export default FoodModel;