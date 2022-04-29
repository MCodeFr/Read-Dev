const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

const buttons = new MessageActionRow().addComponents(
  new MessageButton()
    .setCustomId("retour-button")
    .setLabel("Retour")
    .setStyle("DANGER"),

  new MessageButton()
    .setCustomId("suivant-button")
    .setLabel("Suivant")
    .setStyle("SUCCESS")
);

const embed = new MessageEmbed().setTitle("Livres");

module.exports = {
  name: "book",
  category: "utils",
  permissions: "SEND_MESSAGES",
  ownerOnly: false,
  usage: "undefined",
  examples: "undefined",
  description: "Lit un livre !",
  async runInteraction(client, interaction) {
    interaction.reply({ embeds: [embed], components: [buttons] });
  },
};
