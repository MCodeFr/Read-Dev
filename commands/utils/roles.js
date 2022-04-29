const {
  MessageActionRow,
  MessageSelectMenu,
  MessageEmbed,
} = require("discord.js");

const selectMenu = new MessageActionRow().addComponents(
  new MessageSelectMenu()
    .setCustomId("roles-menu")
    .setPlaceholder("Choisir un / plusieurs rôle(s) dans la liste")
    .setMaxValues(1)
    .setMaxValues(3)
    .addOptions([
      {
        label: "Annonces",
        description: "Notifications Annonces",
        value: "967653282208182352",
      },
      {
        label: "Changelogs",
        description: "Notifications Changelogs",
        value: "967653358720659506",
      },
      {
        label: "Autres",
        description: "Notifications Autres",
        value: "967653442757730334",
      },
    ])
);

module.exports = {
  name: "roles",
  category: "utils",
  permissions: "ADMINISTRATOR",
  ownerOnly: false,
  usage: "roles",
  examples: ["roles"],
  description: "La commande roles permet d'envoyer l'embed des rôles",
  async runInteraction(client, interaction) {
    await interaction.reply({
      content: "Choisir un ou plusieurs rôles",
      components: [selectMenu],
    });
  },
};
