let { fetchJson } = require("../../lib/index");

module.exports = {
	name: "asupanukhty",
	alias: ["asupanukhty"],
	category: "asupan",
	isSpam: true,
	async run({ msg, conn }) {
//	    var ini = await fetchJson(`https://ziy.herokuapp.com/api/asupan/ukty?apikey=xZiyy`)
//	    buff = ini.result.url
		await msg.reply(response.wait);
		const buttons = [{ buttonId: "#asupanukhty", buttonText: { displayText: "Get Again" }, type: 1 }];
		const buttonMessage = {
			video: { url: 'https://api.zacros.my.id/asupan/ukhty' },
			caption: "Nih kak",
			footer: "Sakura-Botz - By BiqqTzy",
			buttons: buttons,
			headerType: 4,
		};

		await conn.sendMessage(msg.from, buttonMessage);
	},
};