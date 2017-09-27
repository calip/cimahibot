const TelegramBot = require('node-telegram-bot-api');

const token = '459952409:AAGD4N1hVn5i_epkc_ieDPqDuswXl6vx0sE';
// Setup polling way
const bot = new TelegramBot(token, {port: true});

bot.onText(/\/tes/, function(msg, match) {
  var fromId = msg.from.id;
  var insults = ["Dumbass", "Out of 100,000 sperm, you were the fastest?", "Look, you aint funny. Your life is just a joke."];
  var chosenInsult = insults[Math.floor(Math.random() * insults.length)];
  bot.sendMessage(fromId, chosenInsult);
});

bot.onText(/\/help/, function(msg, match) {
  var fromId = msg.from.id;
  bot.sendMessage(fromId, "This spectacular bot just have one single command.\n/tes - Insult you.");
});