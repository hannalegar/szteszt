//set typing indicator

function setTypingIndicatorOn(recipientId) {
  request({
    url: "https://graph.facebook.com/v2.6/me/messages",
    qs: {access_token: process.env.PAGE_ACCESS_TOKEN},
    method: "POST",
    json: {
      recipient: {
        id: recipientId
      },
      sender_action: "typing_on"
    }
  }, function(error, response, body) {
    if (error) {
      console.log("Error set typing indicator" + response.error);
    }
  });
}

function setTypingIndicatorOff(recipientId) {
  request({
    url: "https://graph.facebook.com/v2.6/me/messages",
    qs: {access_token: process.env.PAGE_ACCESS_TOKEN},
    method: "POST",
    json: {
      recipient: {
        id: recipientId
      },
      sender_action: "typing_off"
    }
  }, function(error, response, body) {
    if (error) {
      console.log("Error set typing indicator" + response.error);
    }
  });
}

 //example of how to create a recipe
      
      Recipe.create(
        { user_id : senderId,
          title : "title",
          ingredients : ["ing1", "ing2", "ing3"],
          description : "desc"
        }, function (err, recipe){
        var errmessage = {};
        if (err) {
          sendMessage(senderId, {text: "Sorry, I don't understand your request."});
        } else {
          sendMessage(senderId, {text: "Elmentettem a receptet"});
        }
      });
      
      //example of find a recipe and sen a response
      
      Recipe.findOne({ ingredients: message.text }, function(err, recipe){
        if(err || recipe == null){
          console.log("nem talált ilyen receptet");
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
        }
      });

