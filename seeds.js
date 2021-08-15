var mongoose = require("mongoose");
var Product = require("./models/product");
var Comment   = require("./models/comment");
 
var data = [
    {
        name: "HeadPhone", 
        image: "https://pcbonlineshop.com/photos/product/4/176/4.jpg",
        description: "Great Bass",
        mobile:"9753746474",
        location:"Faridabad",
        price:"800"
    }
]
 
function seedDB(){
   //Remove all campgrounds
   Product.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed products!");
        Comment.remove({}, function(err) {
            if(err){
                console.log(err);
            }
            console.log("removed comments!");
             //add a few campgrounds
            data.forEach(function(seed){
                Product.create(seed, function(err,product){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a campground");
                        //create a comment
                        Comment.create(
                            {
                                text: "This headphone  is great, but I wish there was internet",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    product.comments.push(comment);
                                    product.save();
                                    console.log("Created new comment");
                                }
                            });
                    }
                });
            });
        });
    }); 
    //add a few comments
}
 
module.exports = seedDB;