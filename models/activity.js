import mongoose from "mongoose";

const schema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  activity: {
    type: String,
    required: true,
  },
  calorieBurned: {
    type: Number,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    required: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Activity = mongoose.model("Activity", schema);