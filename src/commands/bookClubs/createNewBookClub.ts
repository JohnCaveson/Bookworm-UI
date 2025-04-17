import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { createBookclub } from "../../axios/axios";
import { BookClubRequest } from '../../interface/bookclub';

const data = new SlashCommandBuilder()
  .setName("new_book_club")
  .setDescription("Create a new book club for people to join! 📖")
  .addStringOption((option) =>
    option
      .setName("book_club_name")
      .setDescription("Book club to be created")
      .setRequired(true)
  );

const execute = async (interaction: CommandInteraction) => {
  const bookClubName = interaction.options.get("book_club_name", true);
  const newBookClub: BookClubRequest = {
    bookClubName: bookClubName.value as string,
    members: [],
  };

  newBookClub.members.push({
    userId: interaction.user.id,
    username: interaction.user.username,
  });
  console.log(newBookClub);
  await createBookclub(newBookClub).then((res) => {
    console.log(res)
    interaction.reply(`Book Club ${res.bookClubName} Created! 
       Welcome ${res.members.pop()?.username} you are the first member!
    `).catch((err) => {
      console.error(err);
    })
  });
};

export { data, execute };
