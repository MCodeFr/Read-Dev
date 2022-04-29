const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "guildMemberRemove",
  once: false,
  async execute(client, member) {
    const fetchGuild = await client.getGuild(member.guild);
    const fetchKickLog = await member.guild.fetchAuditLogs({
      limit: 1,
      type: "MEMBER_KICK",
    });

    const kickLog = fetchKickLog.entries.first();
    const target = kickLog.target;
    const reason = kickLog.reason;
    let isMemberKick = false;

    if (target.id === member.id) isMemberKick = true;

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
      + Quitté le : <t:${parseInt(Date.now() / 1000)}:f> (t:${parseInt(
          Date.now() / 1000
        )}:R>)
        + Kick ?: ${isMemberKick ? `🟢 (raison : ${reason})` : "🔴"}
      `
      )
      .setTimestamp()
      .setFooter({ text: "L'utilisateur à quitté !" });

    const logchannel = client.channels.cache.get(fetchGuild.logchannel);
    logchannel.send({ embeds: [embed] });
  },
};
