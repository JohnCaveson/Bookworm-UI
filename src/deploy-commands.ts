import { REST, Routes } from "discord.js";
import { DISCORD_TOKEN, DISCORD_CLIENT_ID } from "./config";
import commands from "./commands";

const commandsData = Object.values(commands).map((command) => command.data);
const rest = new REST({ version: "10" }).setToken(DISCORD_TOKEN!);

type DeployCommandsProps = {
  guildId: string;
};

const deployCommands = async ({ guildId }: DeployCommandsProps) => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(
      Routes.applicationGuildCommands(DISCORD_CLIENT_ID!, guildId),
      {
        body: commandsData,
      }
    );

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
}

export default deployCommands