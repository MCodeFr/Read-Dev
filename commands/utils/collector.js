const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "collector",
  category: "utils",
  permissions: "SEND_MESSAGES",
  ownerOnly: false,
  usage: "undefined",
  examples: "undefined",
  description: "Collecte des messages !",
  async runInteraction(client, interaction) {
    interaction.reply("Tapez le message `discord` !");
    const filter = (msg) => msg.content.includes("discord");
    const collector = interaction.channel.createdMessageCollector({
      filter,
      time: 5000,
    });

    collector.on("e,d", (collected) => {
      interaction.followUp(`${collected.size - 1} messages collectés`);
    });
  },
};
