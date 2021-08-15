var mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String,
   price:Number,
   mobile:Number,
   location:String,
   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ]
});

module.exports = mongoose.model("Product", productSchema);
