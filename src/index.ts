const { Telegraf } = require('telegraf');
var CronJob = require('cron').CronJob;

import 'dotenv/config'

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.launch()

//bot.telegram.sendMessage(process.env.CHAT_ID, "Então... Algum progresso? No que vocês andam trabalhando?");

console.log("teste!");