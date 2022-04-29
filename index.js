const { Client, Collection } = require("discord.js");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const client = new Client({
  intents: 1539,
  partials: ["MESSAGE", "CHANNEL", "REACTION", "USER"],
});

client.commands = new Collection();
client.buttons = new Collection();
client.selects = new Collection();
require("./utils/handlers/EventUtil")(client);
require("./utils/handlers/CommandUtil")(client);
require("./utils/handlers/ButtonUtil")(client);
require("./utils/handlers/SelectUtil")(client);
require("./utils/Functions")(client);

process.on("exit", (code) => {
  console.log(`Le processuss s'est arrêté avec le code ${code} !`);
});
process.on("uncaughtException", (err, origin) => {
  console.log(`Unchaught Exception ${err}`, `${origin}`);
});
process.on("unhandledRejection", (reaseon, promise) =>
  console.log(`Unhandled Rejection : ${reaseon}\n---\n`, `${promise}`)
);
process.on("warning", (...args) => console.log(...args));

mongoose
  .connect("votre mongodb", {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4,
  })
  .then(() => {
    console.log("Le client est connecté à la base de donnée !");
  })
  .catch((err) => {
    console.log(err);
  });

client.login(process.env.DISCORD_TOKEN);
