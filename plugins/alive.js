import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭────────────────────
│👋 مرحبا يا , ${conn.getName(m.sender)}!
│🤖 أتمنى أنك بخير ♥ البوت أون لاين الآن 
يمكنك إستخدامه عبر كتابة menu.
╰────────────────────
*─[ BY [JoAnimi] ]*🌟✨
`.trim()
  m.reply(caption)
}
handler.help = ['حي']
handler.tags = ['infobot']
handler.command = /^(حي)$/i


export default handler
