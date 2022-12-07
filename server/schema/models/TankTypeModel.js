const mongoose = require("mongoose");
const { Schema } = mongoose;

const tankTypeSchema = new Schema(
  {
    tank_id: String,
    name: String,
    short_name: String,
    slug: String,
    type: String,
    tier: Number,
    price: Number,
    gold_price: Number,
    not_in_shop: Boolean,
    nation: String,
    tags: String,
  },
  {
    collection: "tanks",
  }
);

module.exports = mongoose.model("TankTypeModel", tankTypeSchema);
