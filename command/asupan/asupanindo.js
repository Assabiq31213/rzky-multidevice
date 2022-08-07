let { fetchJson } = require("../../lib/index");

module.exports = {
	name: "asupanindo",
	alias: ["asupanindo"],
	category: "asupan",
	isSpam: true,
	async run({ msg, conn }) {
	    var ini = await fetchJson(`https://ziy.herokuapp.com/api/gacha/indonesia?apikey=xZiyy`)
		await msg.reply(response.wait);
		const buttons = [{ buttonId: "#asupanindo", buttonText: { displayText: "Get Again" }, type: 1 }];
		const buttonMessage = {
			video: { url: ini.result.url },
			caption: "Nih kak",
			footer: "Sakura-Botz - By BiqqTzy",
			buttons: buttons,
			headerType: 4,
		};

		await conn.sendMessage(msg.from, buttonMessage);
	},
};
