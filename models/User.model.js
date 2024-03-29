const { Schema, model } = require("mongoose");

const userSchema = new Schema(

  {
    username: {
      type: String,
      unique: true,
      required: [true, "Username is required"]
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"]
    },
    password: {
      type: String,
    },
    description: {
      type: String,
      default: 'No description provided.'
    },
    avatar: {
      type: String,
      default: 'https://res.cloudinary.com/dqwiiycdv/image/upload/v1658999802/pepe_ipznv8.png'
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
