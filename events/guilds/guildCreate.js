module.exports = {
  name: "guildCreate",
  once: false,
  async execute(client, interaction) {
    await client.createdGuild(guild);
  },
};
