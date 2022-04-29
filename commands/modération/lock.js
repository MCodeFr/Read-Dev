const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "lock",
  category: "modération",
  ownerOnly: false,
  usage: "lock",
  examples: "lock",
  permissions: "MANAGE_CHANNELS",
  description: "Vérouille un salon",
  async runInteraction(client, interaction) {
    await interaction.channel.permissionOverwrites.edit(interaction.guild.id, {
      SEND_MESSAGES: false,
    });
    await interaction.reply({
      content: "Le salon est vérouillé !",
      ephermeral: true,
    });
  },
};
