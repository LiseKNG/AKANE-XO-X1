import config from "../config.js"

export default async function pingCommand(message, client) {
  const remoteJid = message.key.remoteJid;
  const start = Date.now();

  await client.sendMessage(remoteJid, { text: "_🏓 *𝐏𝐨𝐧𝐠 𝐁𝐘 𝐀𝐊𝐀𝐍𝐄 𝐗𝐎*_" });
  const latency = Date.now() - start;

  await client.sendMessage(remoteJid, {
    text: `_*${config.BotName} latency* : *${latency} ms*_`,
  });
}