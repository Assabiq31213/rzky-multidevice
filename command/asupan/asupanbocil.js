let { fetchJson } = require("../../lib/index");

module.exports = {
	name: "asupanbocil",
	alias: ["asupanbocil"],
	category: "asupan",
	isSpam: true,
	async run({ msg, conn }) {
	    const ini = await fetchJson(`https://ziy.herokuapp.com/api/asupan/bocil?apikey=xZiyy`)
	    const buff = ini.result.url
		await msg.reply(response.wait);
		const buttons = [{ buttonId: "#asupanbocil", buttonText: { displayText: "Get Again" }, type: 1 }];
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