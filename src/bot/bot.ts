import { DISCORD_TOKEN } from '../config';
import { Client, Events } from "discord.js";
import deployCommands from "../deploy-commands";
import commands from '../commands';

const client = new Client({
  intents: ["Guilds", "GuildMessages", "DirectMessages"],
});

client.once(Events.ClientReady, () => {
  console.log("Ready!");
});

client.on(Events.GuildAvailable, async (guild) => {
  await deployCommands({ guildId: guild.id });
});

client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isCommand()) {
      return;
    }
    const { commandName } = interaction;
    if (commands[commandName as keyof typeof commands]) {
      commands[commandName as keyof typeof commands].execute(interaction);
    }
  });
  
client.login(DISCORD_TOKEN)