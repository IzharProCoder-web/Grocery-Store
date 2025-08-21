import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    id: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true },
    Image: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
