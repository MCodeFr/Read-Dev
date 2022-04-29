const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "unmute",
  category: "modération",
  ownerOnly: false,
  usage: "mute [@user]",
  examples: "unmute @UtilisateurGentil",
  permissions: "MODERATE_MEMBERS",
  description: "Unmute un membre",
  options: [
    {
      name: "target",
      description: "L'utilisateur à unmute",
      type: "USER",
      required: true,
    },
  ],
  async runInteraction(client, interaction) {
    const target = interaction.options.getMember("target");

    if (!target.isComunicationDisabled())
      return interaction.reply("Ce membre n'est pas mute !");

    target.timeout(null);
    interaction.reply(`Le membre ${target} à été unmute`);
  },
};
