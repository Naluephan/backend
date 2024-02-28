const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    tel: { type: String, required: true },
    address: 
      {
        district: String,
        sub_district: String,
        province: String,
        country: String,
        zipcode: String,
      },
    full_name: { first_name: String, last_name: String },
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
