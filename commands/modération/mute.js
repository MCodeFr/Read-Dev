const { MessageEmbed } = require("discord.js");
const ms = require("ms");

module.exports = {
  name: "mute",
  category: "modération",
  ownerOnly: false,
  usage: "mute [@user] [durée] [raison]",
  examples: "mute @UtilisateurMéchant 3 minutes T'es méchant !",
  permissions: "MODERATE_MEMBERS",
  description: "Mute un membre",
  options: [
    {
      name: "target",
      description: "L'utilisateur à mute",
      type: "USER",
      required: true,
    },
    {
      name: "reason",
      description: "Indiquez la raison du mute",
      type: "STRING",
      required: true,
    },
    {
      name: "duration",
      description: "Indiquez le temps du mute",
      type: "NUMBER",
      minValue: 1,
      maxValue: 7,
      required: true,
    },
  ],
  async runInteraction(client, interaction) {
    const target = interaction.options.getMember("target");
    const duration = interaction.options.getNumber("duration");
    const convertedTime = ms(duration);
    const reason = interaction.options.getString("reason");

    if (!target.moderatable)
      return interaction.reply("Ce membre ne peut pas se faire mute !");

    if (!convertedTime)
      return interaction.reply("Veuillez rentrez une durée valide !");

    target.timeout(convertedTime, reason);
    interaction.reply(
      `Le membre ${target} à été mute pour ${duration} car ${reason}`
    );
  },
};
