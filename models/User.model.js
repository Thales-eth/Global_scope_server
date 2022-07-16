const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      // unique: [true, "username must be unique"],
      required: [true, "Username is required"]
    },
    email: {
      type: String,
      unique: true,
      // unique: [true, "Email must be unique"],
      required: [true, "Email is required"]
    },
    password: {
      type: String,
    },
    description: {
      type: String,
      default: 'No description provided.'
    },
    role: {
      type: String,
      enum: ['USER', 'PREMIUM', 'ADMIN'],
      default: 'USER'
    },
    points: {
      type: Number,
      default: 0
    },
    courses: [{
      type: Schema.Types.ObjectId,
      ref: 'Course',
    }],
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
