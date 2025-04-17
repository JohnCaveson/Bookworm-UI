import { CommandInteraction, SlashCommandBuilder } from 'discord.js';

const data = new SlashCommandBuilder()
  .setName('join_book_club')
  .setDescription('Join an existing book club! 📖')

const execute = async (interaction: CommandInteraction) => {
}