import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      lowecase: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      lowecase: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
