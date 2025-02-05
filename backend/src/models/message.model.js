import mongoose from "mongoose"

const messageSchema = new mongoose.Schema(
    {
      senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        unique: true,
      },
      receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      text: {
        type: String,
        ref:"User",
        minlength: 6,
      },
      image: {
        type: String,
      }
    },
    { timestamps: true }
  );
  
  const User = mongoose.model("Message", messageSchema);
  
  export default User;
  