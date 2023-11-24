import { SlashCommandBuilder } from '@discordjs/builders';
export default {
	data: new SlashCommandBuilder()
		.setName('nggyu')
		.setDescription('hehe nggyu'),
	async execute(interaction) {
		await interaction.reply('Never gonna give you up, never gonna let you down, never gonna run around and desert you.');
	},
};