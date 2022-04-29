module.exports = {
  name: "messageReactionAdd",
  once: false,
  async execute(client, messageReaction, user) {
    const message = messageReaction.message;
    const emojiName = messageReaction.emoji.name;
    const member = message.guild.members.cache.get(user.id);
    if (member.user.bot) return;

    if (messageReaction.partial) {
      await messageReaction.fetch();
    }

    if (emojiName === "✅") message.react("✅");
  },
};
