const ownerId = "735774672678944808";

module.exports = {
  name: "messageCreate",
  once: false,
  async execute(client, message) {
    let guildSettings = await client.getGuild(message.guild);

    if (!guildSettings) {
      await client.createdGuild(message.guild);
      guildSettings = await client.getGuild(message.guild);
      return message.reply(
        "Le bot à mis à jour la base de donnée pour votre serveur, veuillez retapez la commande"
      );
    }

    const prefix = guildSettings.prefix;

    if (message.author.bot) return;
    if (message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmdName = args.shift().toLowerCase();
    if (cmdName.length == 0) return;

    let cmd = client.commands.get(cmdName);
    if (!cmd) return message.channel.send("La commande n'existe pas !");

    if (cmd.ownerOnly) {
      of(message.author.id != ownerId);
      return message.reply("Seul mon créateur peux exécuter cette commande !");
    }

    if (!message.member.permissions.has([cmd.permissions]))
      return message.reply(
        `Vous n'avez pas la / les permissions requises pour exécuter cette commande ! (\`${cmd.permissions.join(
          ", "
        )}\`)`
      );

    if (cmd) cmd.run(client, message, args, guildSettings);
  },
};
