// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {},
};

// const { Telegraf } = require("telegraf");

// const bot = new Telegraf(process.env.TG_BOT_KEY);
// bot.command("oldschool", (ctx) => ctx.reply("Hello"));
// bot.command("hipster", Telegraf.reply("λ"));
// bot.launch();

// // Enable graceful stop
// // process.once("SIGINT", () => bot.stop("SIGINT"));
// // process.once("SIGTERM", () => bot.stop("SIGTERM"));

// console.log(bot);
