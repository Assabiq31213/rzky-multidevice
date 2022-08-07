const fs = require('fs');
module.exports = {
	name: "asupan",
	alias: ["asupan"],
	category: "asupan",
	isSpam: true,
	async run({ msg, conn }) {
	    const asupan = JSON.parse(fs.readFileSync("../../lib/asupan.json"));
		await msg.reply(response.wait);
		const buttons = [{ buttonId: "#asupan", buttonText: { displayText: "Get Again" }, type: 1 }];
		const buttonMessage = {
			video: { url: asupan[Math.floor(Math.random() * asupan.length)].url },
			caption: "Nih kak ,jangan sange ya",
			buttons: buttons,
			headerType: 4,
		};

		await conn.sendMessage(msg.from, buttonMessage);
	},
};
