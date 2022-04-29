module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    let guildCount = await client.guilds.fetch();
    let usersCount = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);

    console.log(
      `Je suis prêt à être utilisé sur ${guildCount.size} serveurs par ${usersCount} utilisateurs`
    );

    client.user.setPresence({
      activities: [{ name: "to getCoding", type: "LISTENING" }],
      status: "dnd",
    });

    //const devGuild = await client.guilds.cache.get("885838388295499807");
    //devGuild.commands.set(client.commands.map((cmd) => cmd));
    client.application.commands.set(client.commands.map((cmd) => cmd));
  },
};
