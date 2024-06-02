import { Schema, model, Document } from "mongoose";
import bcrypt from "bcrypt";
import config from "../../config";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser & Document>(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true, // Ensure password is required
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ["admin", "student", "faculty"],
      required: true,
    },
    status: {
      type: String,
      enum: ["in-progress", "block"],
      default: "in-progress",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const user = this as TUser & Document;

  if (user.isModified("password")) {
    try {
      const saltRounds = Number(config.bcrypt_salt_rounds);
      if (!saltRounds) {
        throw new Error("Salt rounds configuration is invalid");
      }
      user.password = await bcrypt.hash(user.password, saltRounds);
    } catch (error: any) {
      return next(error);
    }
  }

  next();
});

export const User = model<TUser & Document>("User", userSchema);
