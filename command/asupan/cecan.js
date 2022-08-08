module.exports = {
	name: "cecan",
	alias: ["cecan"],
	category: "asupan",
	isSpam: true,
	async run({ msg, conn }) {
		await msg.reply(response.wait);
		const buttons = [{ buttonId: "#cecan", buttonText: { displayText: "Get Again" }, type: 1 }];
		const buttonMessage = {
			image: { url: 'http://hadi-api.herokuapp.com/api/randomImage/cecan' },
			caption: "Nih kak",
			footer: "Sakura-Botz - By BiqqTzy",
			buttons: buttons,
			headerType: 4,
		};

		await conn.sendMessage(msg.from, buttonMessage);
	},
};