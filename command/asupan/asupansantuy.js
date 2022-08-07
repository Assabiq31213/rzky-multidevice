let { fetchJson } = require("../../lib/index");

module.exports = {
	name: "asupansantuy",
	alias: ["asupansantuy"],
	category: "asupan",
	isSpam: true,
	async run({ msg, conn }) {
	    var ini = await fetchJson(`https://ziy.herokuapp.com/api/asupan/santuy?apikey=xZiyy`)
	    buff = ini.result.url
		await msg.reply(response.wait);
		const buttons = [{ buttonId: "#asupansantuy", buttonText: { displayText: "Get Again" }, type: 1 }];
		const buttonMessage = {
			video: { url: buff },
			caption: "Nih kak",
			footer: "Sakura-Botz - By BiqqTzy",
			buttons: buttons,
			headerType: 4,
		};

		await conn.sendMessage(msg.from, buttonMessage);
	},
};
