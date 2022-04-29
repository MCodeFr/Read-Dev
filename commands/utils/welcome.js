const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

const buttons = new MessageActionRow().addComponents(
  new MessageButton()
    .setCustomId("refuse-button")
    .setLabel("Refuser")
    .setStyle("DANGER"),

  new MessageButton()
    .setCustomId("accept-button")
    .setLabel("Accepter")
    .setStyle("SUCCESS")
);

const welcomeEmbed = new MessageEmbed()
  .setTitle("Charte du serveur")
  .setDescription("Veuillez les respecter !")
  .setFooter({ text: "Bienveue sur le serveur !" })
  .setTimestamp();

module.exports = {
  name: "welcome",
  category: "utils",
  permissions: "ADMINISTRATOR",
  ownerOnly: false,
  usage: "welcome",
  examples: ["welcome"],
  description: "La commande welcome permet d'envoyer l'embed des règles",
  async runInteraction(client, interaction) {
    await interaction.reply({ embeds: [welcomeEmbed], components: [buttons] });
  },
};
