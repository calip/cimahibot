const TelegramBot = require('node-telegram-bot-api'); 
const token = 'YOUR_BOT_TOKEN';
const bot = new TelegramBot(token, {polling: true});
    
bot.onText(/\/wisata/, function(msg, match) {
  var fromId = msg.from.id;
  var chatId = msg.chat.id;
  var insults = ["Stasiun Cimahi", "Alam Wisata Cimahi", "Bioskop Rio"];
  var chosenInsult = insults[Math.floor(Math.random() * insults.length)];
  bot.sendMessage(fromId, chosenInsult);
  bot.sendMessage(chatId, chosenInsult);
});

bot.onText(/\/punten/, function(msg, match) {
    var fromId = msg.from.id;
    var chatId = msg.chat.id;
    bot.sendMessage(fromId, "Wilujeng Sumping " + msg.from.first_name);
    bot.sendMessage(chatId, "Wilujeng Sumping " + msg.from.first_name);
});

bot.onText(/\/help/, function(msg, match) {
    var fromId = msg.from.id;
    var chatId = msg.chat.id;
    bot.sendMessage(fromId, "You can control me by sending these commands: \n /punten - kenalan \n /wisata - cari tempat wisata di cimahi \n /cimahi - sejarah cimahi");
    bot.sendMessage(chatId, "You can control me by sending these commands: \n /punten - kenalan \n /wisata - cari tempat wisata di cimahi \n /cimahi - sejarah cimahi");
});

bot.onText(/\/cimahi/, (msg) => {
  bot.sendPhoto(msg.chat.id,"https://upload.wikimedia.org/wikipedia/commons/f/f6/Logo-Cimahi.png" );
    
});

bot.on('message', (msg) => {
  var questions = "naon";
  if (msg.text.toLowerCase().includes(questions)) {
    bot.sendMessage(msg.chat.id, "Hoyong naon " + msg.from.first_name + '?'); 
  } 

});