const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "dbcondig",
  category: "admin",
  ownerOnly: false,
  usage: "dbconfig [key] <value>",
  examples: "dbconfig prefix .",
  permissions: "ADMINISTRATOR",
  description: "Configurer les données de la base de données",
  options: [
    {
      name: "key",
      description: "Choisir une clé à modifier ou afficher",
      type: "STRING",
      required: true,
      choices: [
        {
          name: "prefix",
          value: "prefix",
        },
        {
          name: "logChannel",
          value: "logChannel",
        },
      ],
    },
    {
      name: "value",
      description: "Choisir la nouvelle valeure pour votre clé",
      type: "STRING",
    },
  ],
  async runInteraction(client, interaction, guildSettings) {
    const key = interaction.options.getString("key");
    const value = interaction.options.getString("value");

    if (key == "prefix") {
      if (value) {
        await client.updateGuild(interaction.guild, { prefix: value });
        return interaction.reply({
          content: `Nouvel valeur de préfixe : ${value}`,
        });
      }
      interaction.reply({
        content: `Valeur de préfix : ${guildSettings.prefix}`,
      });
    } else if (key == "logChannel") {
      if (value) {
        await client.updateGuild(interaction.guild, { logChannel: value });
        return interaction.reply({
          content: `Nouvel valeur du logChannel : ${value}`,
        });
      }
      interaction.reply({
        content: `Valeur de logChannel: ${guildSettings.logChannel}`,
      });
    }
  },
};
