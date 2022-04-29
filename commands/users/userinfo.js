const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "userinfo",
  category: "user",
  ownerOnly: false,
  usage: "Clique droit sur un utilisateur sur app => User info",
  examples: "Clique Droit -> Applications -> userinfo",
  permissions: "ADMINISTRATOR",
  type: "USER",
  run(client, message, args) {},
  async runInteraction(client, interaction) {
    const member = await interaction.guild.members.fetch(interaction.targetId);

    const embed = new MessageEmbed()
      .setAuthor({
        name: `${member.user.tag} (${member.id})`,
        inconURL: member.user.bot ? "🤖" : "👨",
      })
      .setColor("RED")
      .setImage(member.user.displayAvatarURL())
      .addFields(
        {
          name: "Nom",
          value: `${member.displayName}`,
          inline: true,
        },
        {
          name: "Modérateur",
          value: `${member.kickable ? "🔴" : "🟢"}`,
          inline: true,
        },
        {
          name: "Bot",
          value: `${member.user.bot ? "🟢" : "🔴"}`,
          inline: true,
        },
        {
          name: "Rôles",
          value: `${member.roles.cache
            .map((role) => role)
            .join(", ")
            .replace(", @everyone", " ")}`,
        },
        {
          name: "A créer son compte le",
          value: `<t:${parseInt(
            member.user.createdTimestamp / 1000
          )}:f> (<t:${parseInt(member.user.createdTimestamp / 1000)}:R>)`,
        },
        {
          name: "Rejoint le",
          value: `<t:${parseInt(
            member.joinedTimestamp / 1000
          )}:f> (<t:${parseInt(member.joinedTimestamp / 1000)}:f>)`,
        }
      );
    interaction.channel.send({ embeds: [embed], ephemeral: true });
  },
};
