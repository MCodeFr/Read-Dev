module.exports = {
  name: "accept-button",
  async runInteraction(client, interaction) {
    await interaction.member.roles.add("955435872130576404");
    await interaction.reply(
      "Vous avez acceptez les règles, vous recevez votre rôle !"
    );
  },
};
