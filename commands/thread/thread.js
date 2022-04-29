const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "thread",
  category: "thread",
  ownerOnly: false,
  usage: "thread [join] [leave] [archive] [unarchive] [delete]",
  examples: "thread join",
  permissions: "MANAGE_THREADS",
  description: "Manage les threads",
  run: (client, message, args) => {},
  options: [
    {
      name: "join",
      description: "Joindre un thread",
      type: "SUB_COMMAND",
    },
    {
      name: "leave",
      description: "Quitte un thread",
      type: "SUB_COMMAND",
    },
    {
      name: "archive",
      description: "Vérouille un thread",
      type: "SUB_COMMAND",
    },
    {
      name: "unarchive",
      description: "Dévérouille un thread",
      type: "SUB_COMMAND",
    },
    {
      name: "delete",
      description: "Supprime un thread",
      type: "SUB_COMMAND",
      options: [
        {
          name: "channel",
          type: "STRING",
          description: "Id du channel",
          required: true,
        },
      ],
    },
  ],
  async runInteraction(client, interaction) {
    let thread = interaction.channel;
    if (thread.isThread())
      return interaction.reply(
        "Impossible de taper cette commande car vous n'êtes pas dans un thread"
      );

    if (interaction.options.getSubCommand() === "join") {
      interaction.reply("Le bot à rejoint le thread");
      if (thread.joinable) await thread.join();
    } else if (interaction.options.getSubCommand() === "leave") {
      interaction.reply("Le bot à quitté le thread");
      await thread.leave();
    } else if (interaction.options.getSubCommand() === "archive") {
      await interaction.reply("Le thread à été archivé");
      await thread.setArchive(true);
    } else if (interaction.options.getSubCommand() === "unarchive") {
      interaction.reply("Le thread à été dévérouillé");
      await thread.setArchive(false);
    } else if (interaction.options.getSubCommand() === "delete") {
      const channelId = interaction.options.getString("channel");
      const logChannel = client.channels.cache.get(channelId);
      await logChannel.send(`Le bot à supprimer le thread ${thread.name}`);
      await thread.delete();
    }
  },
};
