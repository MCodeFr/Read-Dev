const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "poll",
  category: "utils",
  permissions: "MANAGE_ROLES",
  ownerOnly: false,
  usage: "poll [Titre] [Contenu]",
  examples: "poll Que préférez vous ? La fraise ou la framboise ?",
  description: "Créer un sondage",
  options: [
    {
      name: "title",
      description: "Tapez le titre de votre sondage",
      type: "STRING",
      required: true,
    },
    {
      name: "content",
      description: "Tapez le contenu de votre sondage",
      type: "STRING",
      required: true,
    },
  ],
  async runInteraction(client, interaction) {
    const pollTitle = interaction.options.getString("title");
    const pollContent = interaction.options.getString("content");

    const embed = new MessageEmbed()
      .setTitle(pollTitle)
      .setColor("RED")
      .setDescription(pollContent)
      .setTimestamp()
      .setFooter({
        text: `Nouveau sondage généré par ${interaction.user.tag}`,
      });

    const poll = await interaction.reply({
      embeds: [embed],
      fetchReply: true,
    });
    poll.react("✅");
    poll.react("🛑");
  },
};
