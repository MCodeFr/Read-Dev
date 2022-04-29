const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "emoji",
  category: "utils",
  permissions: "MANAGE_ROLES",
  ownerOnly: false,
  usage: "emoji [emoji]",
  examples: "emoji [ton emoji]",
  description: "Postez vos émojis",
  async runInteraction(client, interaction) {
    const poll = await interaction.reply({ content: "Testing" });
    poll.react("💠");
    poll.react("🔒");
    poll.react("🔱");
    poll.react("📪");
  },
};
