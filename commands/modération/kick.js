const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "kick",
  category: "modération",
  ownerOnly: false,
  usage: "kick [@user] [raison]",
  examples: "kick @UtilisateurMéchant T'es méchant !",
  permissions: "KICK_MEMBERS",
  description: "Exclue un membre",
  options: [
    {
      name: "target",
      description: "L'utilisateur à expulser",
      type: "USER",
      required: true,
    },
    {
      name: "reason",
      description: "Indiquez la raison du kick",
      type: "STRING",
      required: true,
    },
  ],
  async runInteraction(client, interaction) {
    const target = interaction.options.getMember("target");
    const reason = interaction.options.getString("reason");

    if (!target.kickable)
      return interaction.reply("Ce membre ne peut pas être kick par le bot");

    target.kick(reason);
    interaction.reply(`Le membre ${target} à été kick !`);
  },
};
