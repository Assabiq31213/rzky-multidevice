module.exports = {
	name: "asupanhijab",
	alias: ["asupanhijab"],
	category: "asupan",
	isSpam: true,
	async run({ msg, conn }) {
		await msg.reply(response.wait);
		const buttons = [{ buttonId: "#asupanhijab", buttonText: { displayText: "Get Again" }, type: 1 }];
		const buttonMessage = {
			video: { url: 'https://api.zacros.my.id/asupan/hijaber' },
			caption: "Nih kak",
			footer: "Sakura-Botz - By BiqqTzy",
			buttons: buttons,
			headerType: 4,
		};

		await conn.sendMessage(msg.from, buttonMessage);
	},
};
