var mongoose = require("mongoose");

var db = mongoose.connect(process.env.MONGODB_URI);
var Recipe = require("./models/recipes");

exports.

exports.findRecipe = function(findBy,value, senderId){
    Recipe.findOne({ [findBy] : value }, function(err, recipe){
      if(err || recipe == null){
        sendMessage(senderId, {text : "Nem találtam ilyen receptet"});
      } else {
        let ings = ""; 
  
        recipe.ingredients.forEach(function(i){
          ings += i + "," + '\n';
        });
  
        let message = recipe.title + '\n\n' +
                      "Hozzávalók: " + '\n' + ings + '\n' +
                      "Elkészítés: " + '\n' + recipe.description;  
  
        sendMessage(senderId, {text: message});
        findBy = null;
      }
    });
}