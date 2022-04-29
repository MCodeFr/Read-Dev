const { MessageActionRow, MessageButton } = require("discord.js");

const buttons = new MessageActionRow().addComponents(
  new MessageButton()
    .setCustomId("primary-button")
    .setLabel("Primary")
    .setStyle("PRIMARY"),

  new MessageButton()
    .setCustomId("secondary-button")
    .setLabel("Secondary")
    .setStyle("SECONDARY"),

  new MessageButton()
    .setURL("https://google.fr")
    .setLabel("Link")
    .setStyle("LINK"),

  new MessageButton()
    .setCustomId("success-button")
    .setLabel("Success")
    .setStyle("SUCCESS"),

  new MessageButton()
    .setCustomId("for-button")
    .setLabel("Primary")
    .setStyle("PRIMARY")
);

module.exports = {
  name: "buttons",
  category: "utils",
  permissions: "ADMINISTRATOR",
  ownerOnly: false,
  usage: "button",
  examples: ["buttons"],
  description: "Ajoute un rôle via boutons",
  async runInteraction(client, interaction) {
    await interaction.reply({
      content: `Cliquer sur les boutons`,
      components: [buttons],
    });
  },
};
