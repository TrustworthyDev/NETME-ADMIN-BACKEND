const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

const Schema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", index: true },
    title: {
      type: String,
    },
    body: {
      type: String,
    },
    image: {
      type: String,
    },
    category: {
      type: String,
      enum: ["INVITATION"],
      default: "INVITATION",
    },
  },
  { timestamps: true }
);

Schema.plugin(mongoose_delete, {
  overrideMethods: ["find", "findOne", "findOneAndUpdate", "update"],
});
const userNotification = mongoose.model("userNotification", Schema);

module.exports = userNotification;
