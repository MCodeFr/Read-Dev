const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "unlock",
  category: "modération",
  ownerOnly: false,
  usage: "unlock",
  examples: "unock",
  permissions: "MANAGE_CHANNELS",
  description: "dévérouille un salon",
  async runInteraction(client, interaction) {
    await interaction.channel.permissionOverwrites.edit(interaction.guild.id, {
      SEND_MESSAGES: true,
    });
    await interaction.reply({
      content: "Le salon est dévérouillé !",
      ephermeral: true,
    });
  },
};
