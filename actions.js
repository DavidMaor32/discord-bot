import client from './index.js'

client.on('ready', () => {
    console.log(`Logged in as ${client.user?.tag}!`);
});

client.on('messageCreate', msg => {
    if (msg.content.includes('ping')) {
        msg.reply('pong');
    }
});

// client.on('event', async (event) => {
//     console.log(event);
// });