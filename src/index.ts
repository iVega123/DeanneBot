const { Telegraf } = require('telegraf');
var CronJob = require('cron').CronJob;
import express, { Request, Response } from 'express'

import 'dotenv/config'

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.launch()

new CronJob(
	'0 14 1-31/2 * *',
	function() {
		bot.telegram.sendMessage(process.env.CHAT_ID, "Então... Algum progresso? No que vocês andam trabalhando?")
	},
	null,
	true,
	'America/Los_Angeles'
);
const secretPath = `/telegraf/${bot.secretPathComponent()}`

const app = express()
app.get('/', (req: Request, res: Response) => res.send('Hello World!'))
// Set the bot API endpoint
app.use(bot.webhookCallback(secretPath))
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})