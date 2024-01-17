import { CommandInteraction, SlashCommandBuilder } from "discord.js";

const data = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Replies with Pong!");

const execute = (interaction: CommandInteraction) => interaction.reply("Pong!");

export { execute, data }
