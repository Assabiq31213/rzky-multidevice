const fs = require('fs')
module.exports = {
	name: "asupan",
	alias: ["asupan"],
	category: "asupan",
	isSpam: true,
	async run({ msg, conn }) {
	    var asupan = JSON.parse(fs.readFileSync("../../lib/asupan"))
        var hasil = asupan[Math.floor(Math.random() * asupan.length)].url
		await msg.reply(response.wait);
		const buttons = [{ buttonId: "#asupan", buttonText: { displayText: "Get Again" }, type: 1 }];
		const buttonMessage = {
			video: { url: hasil },
			caption: "Nih kak ,jangan sange ya",
			buttons: buttons,
			headerType: 4,
		};

		await conn.sendMessage(msg.from, buttonMessage);
	},
};
