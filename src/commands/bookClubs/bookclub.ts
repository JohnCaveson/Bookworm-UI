import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js'
import { post } from '../../axios/axios'

const data = new SlashCommandBuilder()
  .setName("new_book_club")
  .setDescription("Create a new book club for people to join! 📖")
  .addStringOption(option => 
    option
        .setName("book_club_name")
        .setDescription("Book club to be created")
        .setRequired(true))


const execute = async (interaction: ChatInputCommandInteraction) => {
    console.log(interaction)
    const bookClubName = interaction.options.getString("book_club_name", true)
    const res = await post(bookClubName)
    console.log(res)
}

export {data, execute}