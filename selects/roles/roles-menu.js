module.exports = {
  name: "roles-menu",
  async runInteraction(client, interaction) {
    await interaction.member.roles.add(interaction.values);
    await interaction.reply("Félicitations, le bot à ajouter votre rôle !");
  },
};
