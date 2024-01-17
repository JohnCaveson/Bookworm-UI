import { CommandInteraction, SlashCommandBuilder } from 'discord.js';
import { post } from '../../axios/axios';

const data = new SlashCommandBuilder()
  .setName("addBook")
  .setDescription("Adds a choice to the poll (up to 8)")

//Do a post to the book club
const execute = (interaction: CommandInteraction) => {
    // interaction.reply()
    // post(interaction.)
}

