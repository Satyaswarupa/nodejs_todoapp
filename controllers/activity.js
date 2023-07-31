import ErrorHandler from "../middlewares/error.js";
import { Activity } from "../models/activity.js";

export const newActivity = async (req, res, next) => {
  try {
    const { name, date, activity, calorieBurned } = req.body;

    await Activity.create({
      name,
      date,
      activity,
      calorieBurned,
      user: req.user,
    });

    res.status(201).json({
      success: true,
      message: "Task added Successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getMyActivity = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const activity = await Activity.find({ user: userId });

    res.status(200).json({
      success: true,
      activity,
    });
  } catch (error) {
    next(error);
  }
};

export const updateMyActivity = async (req, res, next) => {
  try {
    const activity = await Activity.findById(req.params.id);

    if (!activity) return next(new ErrorHandler("Activity not found", 404));

    activity.isCompleted = !activity.isCompleted;
    await activity.save();

    res.status(200).json({
      success: true,
      message: "Task Updated!",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteActivity = async (req, res, next) => {
  try {
    const activity = await Activity.findById(req.params.id);

    if (!activity) return next(new ErrorHandler("Task not found", 404));
    await activity.deleteOne();

    res.status(200).json({
      message: "Task Deleted!",
      success: true,
    });
  } catch (error) {
    next(error);
  }
};
