const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ban",
  category: "modération",
  ownerOnly: false,
  usage: "ban [@user] [raison]",
  examples: "ban @UtilisateurMéchant T'es méchant !",
  permissions: "BAN_MEMBERS",
  description: "Bannis un membre",
  options: [
    {
      name: "target",
      description: "L'utilisateur à bannir",
      type: "USER",
      required: true,
    },
    {
      name: "reason",
      description: "Indiquez la raison du ban",
      type: "STRING",
      required: true,
    },
  ],
  async runInteraction(client, interaction) {
    const target = interaction.options.getMember("target");
    const reason = interaction.options.getString("reason");

    if (!target.bannable)
      return interaction.reply("Ce membre ne peut pas être bannis par le bot");

    target.ban({ reason });
    interaction.reply(`Le membre ${target} à été bannis !`);
  },
};
