const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const commandFolder = readdirSync("./commands");
const prefix = "!";

const contextDescription = {
  userinfo: "Renvoie des informations sur l'utilisateur",
};

module.exports = {
  name: "help",
  category: "utils",
  ownerOnly: false,
  usage: "help | help <commande>",
  examples: "help | help ping",
  permissions: "SEND_MESSAGES",
  description: "Renvoie la liste des commandes du bot",
  run(client, message, args) {},
  options: [
    {
      name: "command",
      description: "Tapez le nom de votre commande",
      type: "STRING",
      required: false,
    },
  ],
  async runInteraction(client, interaction) {
    const cmdName = interaction.options.getString("command");
    if (!cmdName) {
      const noArgsEmbed = new MessageEmbed()
        .setColor("RED")
        .addField(
          `Liste des commandes`,
          `Une liste de toutes les catégories disponibles et leurs commandes.\nPour plus d'informations sur une commande, tapez \`/help <commande>`
        );

      for (const category of commandFolder) {
        noArgsEmbed.addField(
          `${category}`,
          `**${client.commands
            .filter((cmd) => cmd.category == category.toLocaleLowerCase())
            .map((cmd) => cmd.name)
            .join(", ")}**`
        );
      }

      return interaction.reply({ embeds: [noArgsEmbed], ephemeral: true });
    }

    const cmd = client.commands.get(cmdName);
    if (!cmd)
      return interaction.reply({
        content: `Cette commande n'existe pas !`,
        ephemeral: true,
      });

    return interaction.reply({
      content: `
\`\`\`makefile
[Help: commande -> ${cmd.name}] ${
        cmd.ownerOnly ? "! Pour les admins du bot uniquement" : ""
      }
${cmd.description ? cmd.description : contextDescription[`${cmd.name}`]}
Utilisation: /${cmd.usage}
Exemples: /${cmd.examples}
---
/ = prefix (commande slash)
{} = sous-commande(s) disponible(s) | [] = option(s) obligatoire(s) | <> = option(s) optionnel(s)
Ne pas inclure les {}, [], ni <> dans vos commandes !
\`\`\`
          `,
      ephemeral: true,
    });
  },
};
