const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.TG_BOT_KEY);

bot.start((ctx) => ctx.reply("Welcome!"));
bot.hears("hello", (ctx) => ctx.reply("Hello!"));
bot.command("oldschool", (ctx) => ctx.reply("Hello"));
bot.launch();

console.log("Telegram bot is running...");
