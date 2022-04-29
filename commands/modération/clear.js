const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "clear",
  category: "modération",
  ownerOnly: false,
  usage: "clear [Nombre] [@user]",
  examples: "clear 3 @UtilisateurMéchant",
  permissions: "MANAGE_MESSAGES",
  description: "Supprime un nombre de messages aux choix",
  options: [
    {
      name: "message",
      description: "Nombres de messages à supprimer",
      type: "NUMBER",
      required: true,
    },
    {
      name: "target",
      description:
        "Séléctionner l'utilisateur pour la suppression de ces messages",
      type: "USER",
      required: false,
    },
  ],
  async runInteraction(client, interaction) {
    const amountToDelete = interaction.options.getNumber("message");
    if (amountToDelete > 100 || amountToDelete < 0)
      return interaction.reply(
        "Veuillez entrez un nombre supérieur à 0 et inférieur à 100"
      );
    const target = interaction.options.getMember("target");

    const messageToDelete = await interaction.channel.message.fetch();

    if (target) {
      let i = 0;
      const filteredTargetMessages = [](await messageToDelete).filter((msg) => {
        if (msg.author.id == target.id && amountToDelete > i) {
          filteredTargetMessages.push(msg);
          i++;
        }
      });

      await interaction.channel
        .bulkdelete(filteredTargetMessages, true)
        .then((message) => {
          interaction.reply(
            `J'ai supprimé ${message.size} messages sur l'utilisateur ${target}`
          );
        });
    } else {
      await interaction.channel
        .bulkdelete(amountToDelete, true)
        .then((message) => {
          interaction.reply(
            `J'ai supprimé ${message.size} messages sur ce salon`
          );
        });
    }
  },
};
