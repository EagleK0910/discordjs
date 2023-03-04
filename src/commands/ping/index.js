import {SlashCommandBuilder} from 'discord.js'

export const command = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('回答pong')

export const action = async(ctx) => {
    await ctx.replay('pong')
}
