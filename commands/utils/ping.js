const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  category: "utils",
  permissions: "SEND_MESSAGES",
  ownerOnly: false,
  usage: "ping",
  examples: ["ping"],
  description: "Commande ping",
  async run(client, message, args) {
    const embed = new MessageEmbed()
      .setTitle("Pong !")
      .setImage(client.user.displayAvatarURL())
      .addFields({
        name: "Latence",
        value: `${client.ws.ping}ms`,
        inline: true,
        name: "Uptime",
        value: `<t:${client.readyTimestamp / 1000}:R>ms`,
        inline: true,
      })
      .setTimestamp()
      .setFooter({
        text: message.author.username,
        iconURL: message.author.displayAvatarURL(),
      });

    message.reply({ embed: [embed] });
  },
  runInteraction(client, interaction) {
    const embed = new MessageEmbed()
      .setTitle("Pong !")
      .setImage(client.user.displayAvatarURL())
      .addFields({
        name: "Latence",
        value: `${client.ws.ping}ms`,
        inline: true,
        name: "Uptime",
        value: `<t:${client.readyTimestamp / 1000}:R>ms`,
        inline: true,
      })
      .setTimestamp()
      .setFooter({
        text: interaction.user.username,
        iconURL: interaction.user.displayAvatarURL(),
      });

    interaction.channel.send({ embeds: [embed] });
  },
};
