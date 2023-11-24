import { SlashCommandBuilder } from '@discordjs/builders';
export default {
	data: new SlashCommandBuilder()
		.setName('example')
		.setDescription('This is an example command description.'),
	async execute(interaction) {
		//await interaction.reply('Pong!');
        //here you can put your code for the command to execute when it is called by a user: /example
	},
};