const TelegramBot = require('node-telegram-bot-api');
const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Открыть магазин', {
    reply_markup: {
      keyboard: [[{ text: 'Открыть магазин', web_app: { url: 'https://sneaker-shop-r7fa.onrender.com/' } }]],
      resize_keyboard: true,
    },
  });
});
