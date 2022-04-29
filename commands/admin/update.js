const { MessageEmbed } = require("discord.js");
const { Guild } = require("../../models/index");

module.exports = {
  name: "update",
  category: "admin",
  ownerOnly: false,
  usage: "update",
  examples: "update",
  permissions: "ADMINISTRATOR",
  description: "Actualiser la base de donnée",
  async runInteraction(client, interaction) {
    await Guild.updateMany(
      {},
      { $set: { testChannel: "957279190896480366" }, upsert: true }
    );
    interaction.reply("Nouvelle donnée ajoutée !");
  },
};
