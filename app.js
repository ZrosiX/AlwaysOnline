const Eris = require("eris");
const keepAlive = require("./server");
keepAlive();

const bot = new Eris(process.env.TOKEN);

bot.connect();
const keepAlive = require("./server");



keepAlive();

client.login(process.env.DISCORD_BOT_TOKEN);
