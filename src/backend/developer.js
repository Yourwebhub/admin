import mongoose from "mongoose";

const developerSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
      required: [true, "Name is required"],
      unique: true,
    },
    email: {
      type: String,
      trim: true,
      required: [true, "email is required"],
    },
    location: {
      type: String,
    },
    designation: {
      type: String,
    },
    image: {
      type: String,
      default:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png",
    },
    desc: {
      type: String,
    },
    category: {
      type: String,
      enum: [ "WD", "MK", "SE", "AP", "WP"],
      default: "WD",
    },
    portfolio: {
      type: String,
    },
  },
  { timestamps: true }
);

const Developer = mongoose?.models?.Developer || mongoose?.model('Developer', developerSchema);

export default Developer;
