var request = require("request");

exports.sendFindOrCreateQuickReplies = function(senderId){
    request({
      url: "https://graph.facebook.com/v2.6/me/messages",
      qs: {access_token: process.env.PAGE_ACCESS_TOKEN},
      method: "POST",
      json : {
        recipient : {
            id : senderId },
        message : {
          text : "Mit szeretnél csinálni?",
          quick_replies :[
            {
              content_type :"text",
              title :"Recept keresés",
              payload : "FIND_RECIPE"
            },
            {
              content_type :"text",
              title :"Recept hozzáadása",
              payload : "CREATE_RECIPE"
            }]
        }
      }
    });
  }

exports.sendFindByQuickReplies = function(senderId){
    request({
      url: "https://graph.facebook.com/v2.6/me/messages",
      qs: {access_token: process.env.PAGE_ACCESS_TOKEN},
      method: "POST",
      json : {
        recipient : {
            id : senderId },
        message : {
          text : "Mit alapján szeretnél keresni?",
          quick_replies :[
            {
              content_type :"text",
              title :"Név",
              payload : "FIND_BY_TITLE"
            },
            {
              content_type :"text",
              title :"Hozzávalók",
              payload : "FIND_BY_INGREDIENTS"
            },
            {
              content_type :"text",
              title :"Leírás",
              payload : "FIND_BY_DESCRIPTION"
            }]
        }
      }
    });
  }

exports.sendWebhookEvent = function(senderId, messageId){
    request({
        url: "https://graph.facebook.com/v2.6/me/messages",
        qs: {access_token: process.env.PAGE_ACCESS_TOKEN},
        method: "POST",
        json : {
            sender : {
                id : senderId
            },
            recipient:{
                id : 372924409900493
            },
            timestamp:1458692752478,
            message : {
                mid : messageId,
                text : "hello, world!",
                quick_reply : {
                    payload: "DEVELOPER_DEFINED_PAYLOAD"
                }
            }
        }      
    });
}