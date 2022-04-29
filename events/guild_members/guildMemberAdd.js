const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "guildMemberAdd",
  once: false,
  async execute(client, member) {
    const fetchGuild = await client.getGuild(member.guild);

    const embed = new MessageEmbed()
      .setAuthor({
        name: `${member.user.tag} (${member.id})`,
        iconURL: member.user.displayAvatarURL,
      })
      .setColor("GREEN")
      .setDescription(
        `+ Nom d'utilisateur : ${member}
      + Créer le : <t:${parseInt(
        member.user.createdTimestamp / 1000
      )}:f> (<t:${parseInt(member.user.createdTimestamp / 1000)}:R>)
      + Rejoint le : <t:${parseInt(
        member.joinedTimestamp / 1000
      )}:f> (<t:${parseInt(member.joinedTimestamp / 1000)}:f>)
      `
      )
      .setTimestamp()
      .setFooter({ text: "L'utilisateur à rejoint !" });

    const logchannel = client.channels.cache.get(fetchGuild.logchannel);
    logchannel.send({ embeds: [embed] });
  },
};
