import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟩🟩🟩🟩
🟩🟩🏻🏻🟩🏻🟩🟩
🟩🏻🏻🏻🏻🏾🏻🟩
🏻⬜⬛🏻🏻🏾🏻🏻
🏻🏻🏻🏻🏻🏾🏻🏻
🏻🏻🏻🏼🏼🏻🏻🏻
🏻🏻🏻🏻🏻🏻🏻🏻
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
    ANIME WORLD 🌎🌍
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
*السلام عليكم✌️😳🌝*
┏━━ salam  *%name*
👥 *Total user:* %totalreg 
⏰ *Uptime:* %muptime  
┗━━━━━━━━━━⬣

  ≡ *K I L L U A | M E N U*
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
*☰ وامـر البـوت↯°*
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
           ⩥🧎🏽‍♂️│ALLAH│🕋⩤
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
│✮ ⃟🧎🏽‍♂️❯ .adan
│✮ ⃟📖❯ .coran
│✮ ⃟📺❯ .bader
│✮ ⃟📿❯ .asmaeallah
│✮ ⃟📄❯ .ayati
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
           ⩥🌐│Administrator│👨🏻‍💻⩤
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
│✮ ⃟🚫❯ .ban
│✮ ⃟⭕❯ .unban
│✮ ⃟➕❯ .tostatus
│✮ ⃟📧❯ .tagall
│✮ ⃟👽❯ .hidetag
│✮ ⃟👨🏽‍✈️❯ .setgroupname
│✮ ⃟♻️❯ .restart
│✮ ⃟🗑️❯ .cleartmp
│✮ ⃟🪀❯ .creategroup
│✮ ⃟📰❯ .modules
│✮ ⃟📇❯ .listonline
│✮ ⃟📢❯ .setbio 
│✮ ⃟↗️❯ .addowner 
│✮ ⃟↘️❯ .delowner
│✮ ⃟📝❯ .setbotname 
│✮ ⃟🗒️❯ .setdesc 
│✮ ⃟📸❯ .setpp
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
          ⩥⚙️│Sticker│🧰⩤
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
│✮ ⃟🎈❯ .sticker
│✮ ⃟😂❯ .bobiz
│✮ ⃟📝❯ .attp
│✮ ⃟💀❯ .wasted
│✮ ⃟©️❯ .wm
│✮ ⃟🏞️❯ .toimg
│✮ ⃟🎞️❯ .tovideo
│✮ ⃟🎞️❯ .stickervideo
│✮ ⃟🔗❯ .smeme
│✮ ⃟🌠❯ .quotly
│✮ ⃟🌠❯.quotlyv2
│✮ ⃟🌠❯ .quotlyv3
│✮ ⃟🌠❯ .quotlyimg
│✮ ⃟🌠❯ .quotlyimgv2
│✮ ⃟🌠❯ .quotlyimgv3
│✮ ⃟🎭❯ .smeta
│✮ ⃟🎐❯ .srbg
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
           ⩥⚙️│Make img AI│🏞️⩤
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
│✮ ⃟🏞️❯ .animediff
│✮ ⃟🏞️❯ .animediff2
│✮ ⃟🏞️❯ .bingcreate
│✮ ⃟🏞️❯ .bimg
│✮ ⃟🏞️❯ .dalle
│✮ ⃟🏞️❯ .dalle3
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
           ⩥⚙️│Tools│🧮⩤
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
│✮ ⃟💬❯ .tts
│✮ ⃟👀❯ .tovn
│✮ ⃟🌎❯ .ssweb
│✮ ⃟⚰️❯ .sleep
│✮ ⃟🎞️❯ .short
│✮ ⃟📡❯ .readqr
│✮ ⃟🕯️❯ .ocr
│✮ ⃟⚙️❯ .get
│✮ ⃟🔮❯ .dns
│✮ ⃟🧉❯ .coffee
│✮ ⃟🎪❯ .tomp3
│✮ ⃟✨❯ .stories
│✮ ⃟🌠❯ .hd
│✮ ⃟✍🏻❯ .styletext
│✮ ⃟🎟️❯ .qrcode
│✮ ⃟🏹❯ .tarjim
│✮ ⃟🏹❯ .translate
│✮ ⃟☁️❯ .climate
│✮ ⃟〰️❯ .lyrics 
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
          ⩥📱│Apps│🌐⩤
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
│✮ ⃟📱❯ .apk
│✮ ⃟📱❯ .apk2
│✮ ⃟📱❯ .apkcafe
│✮ ⃟📱❯ .apkmirror
│✮ ⃟📱❯ .uapkpro
│✮ ⃟🌐❯ .uptodown
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
          ⩥🎙️│Effects│📽️⩤
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
│✮ ⃟🎙️❯ .bass
│✮ ⃟🎙️❯ .blown
│✮ ⃟🎙️❯ .deep
│✮ ⃟🎙️❯ .earrape
│✮ ⃟🎙️❯ .fast
│✮ ⃟🎙️❯ .fat
│✮ ⃟🎙️❯ .nightcore
│✮ ⃟🎙️❯ .reverse
│✮ ⃟🎙️❯ .robot
│✮ ⃟🎙️❯ .slow
│✮ ⃟🎙️❯ .smooth
│✮ ⃟🎙️❯ .tupai
│✮ ⃟🎙️❯ .streame
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
           ⩥⚙️│Search│📊⩤
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
│✮ ⃟🔍❯ .spotifysearch
│✮ ⃟🔍❯ .wiki
│✮ ⃟🔍❯ .yts
│✮ ⃟🔍❯ .yttags
│✮ ⃟🖨️❯ .udemy
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
     ⩥🏞️│Image│📹⩤
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
│✮ ⃟📹❯ .dehaze
│✮ ⃟🎴❯ .blur
│✮ ⃟🌠❯ .remini
│✮ ⃟🌠❯ .hd
│✮ ⃟🌠❯ .recolor
│✮ ⃟🙋🏻‍♂️❯ .tocartoon
│✮ ⃟🙋🏻‍♂️❯ .toanime2
│✮ ⃟🧟‍♂️❯ .zombie
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
     ⩥🏞️│ChatAI│📹⩤
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
│✮ ⃟🤖❯ .aipilot
│✮ ⃟🤖❯ .bardai
│✮ ⃟🤖❯ .chatgbt
│✮ ⃟🤖❯ .chawnyma
│✮ ⃟🤖❯ .dx
│✮ ⃟🤖❯ .gemini
│✮ ⃟🤖❯ .gemini2
│✮ ⃟🤖❯ .gpt2
│✮ ⃟🤖❯ .wordle
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
           ⩥⚙️│Anime│📊⩤
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
│✮ ⃟👲🏻❯ .dragon-ball-z
│✮ ⃟👲🏻❯ .hunter
│✮ ⃟👲🏻❯ .jujutsu
│✮ ⃟👲🏻❯ .luffy
│✮ ⃟👲🏻❯ .animepic
│✮ ⃟👲🏻❯ .animestory
│✮ ⃟👲🏻❯ .chainsaw-man
│✮ ⃟👲🏻❯ .classroom-ote
│✮ ⃟👲🏻❯ .manga
│✮ ⃟👲🏻❯ .reels
│✮ ⃟👲🏻❯ .ppcouple
│✮ ⃟👲🏻❯ .tofanime
│✮ ⃟👲🏻❯ .resvcouple
│✮ ⃟👲🏻❯ .stories
│✮ ⃟👲🏻❯ .trace
│✮ ⃟👲🏻❯ .waifu
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
           ⩥⚙️│Downloads│📊⩤
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
│✮ ⃟🐱❯ .capcut
│✮ ⃟✒️❯  .dafonts
│✮ ⃟📬❯  .dlpanda
│✮ ⃟📧❯  .facebook3
│✮ ⃟📧❯  .facebook4
│✮ ⃟📧❯  .facebook5
│✮ ⃟📩❯  .gdrive2
│✮ ⃟🪄❯  .igdl
│✮ ⃟🖼️❯  .image
│✮ ⃟🗃️❯  .instagram
│✮ ⃟🪩❯  .mediafire1
│✮ ⃟📌❯  .pin
│✮ ⃟📸❯  .pinterest
│✮ ⃟📸❯  .pinterest2
│✮ ⃟📸❯  .pinterest3
│✮ ⃟📷❯  .pixellab
│✮ ⃟📲❯  .snapsave
│✮ ⃟🎼❯  .song
│✮ ⃟🎬❯  .storyset
│✮ ⃟🥌❯  .tt
│✮ ⃟🐤❯  .twitter
│✮ ⃟🐾❯  .unsplash
│✮ ⃟📺❯  .video
│✮ ⃟🖼️❯  .wallpaper
│✮ ⃟🎬❯  .youtube
│✮ ⃟📃❯  .ytdoc
│✮ ⃟🎬❯  .ytmp4
│✮ ⃟🎬❯  .ytvdoc
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
           ⩥📌│Logo│📌⩤
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
│✮ ⃟📝❯ .brandcrowd
│✮ ⃟📝❯ .glass
│✮ ⃟📝❯ .haryypotter
│✮ ⃟📝❯ .illuminated
│✮ ⃟📝❯ .logo-naruto
│✮ ⃟📝❯ .pubg
│✮ ⃟📝❯ .pubg2
│✮ ⃟📝❯ .sweetcandy
│✮ ⃟📝❯ .ttlogo
│✮ ⃟📝❯ .tweet
│✮ ⃟📝❯ .tweettrump
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
           ⩥📌│PDF│📌⩤
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
│✮ ⃟📜❯ .bookslib
│✮ ⃟📜❯ .texttopdf
│✮ ⃟📜❯ .topdf
│✮ ⃟📜❯ .urltopdf
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
           ⩥📌│Moroco│📌⩤
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
│✮ ⃟❗❯ .1bac
│✮ ⃟❗❯ .1collège
│✮ ⃟❗❯ .2bac
│✮ ⃟❗❯ .2collège
│✮ ⃟❗❯ .3collège
│✮ ⃟❗❯ .alloschool
│✮ ⃟❗❯ .raqamitv
│✮⃟❗❯ .tce
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
           ⩥📌│Upload│📌⩤
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
│✮ ⃟🪩❯ .tourl
│✮ ⃟🪩❯ .top4top
│✮ ⃟🪩❯ .cleandx
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
           ⩥📌│Members│📌⩤
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
│✮ ⃟👨🏻‍💻❯ .owner
│✮ ⃟✴️❯ .menu
│✮ ⃟📍❯ .channel
│✮ ⃟🔖❯ .alive
│✮ ⃟🍁❯ .owner 
│✮ ⃟🚀❯ .ping
│✮ ⃟👾❯ .runtime
│✮ ⃟👾❯ .feature
│✮ ⃟👾❯ .tz
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢
╰────────────────────
*─[ BY [JoAnimi] ]*🌟✨
`.trim()
  m.reply(caption)
    }

let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, diamond, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

handler.help = ['menu']
handler.tags = ['infobot']
handler.command = /^(menu)$/iq

export default handler
