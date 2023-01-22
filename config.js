const fs = require('fs')
const chalk = require('chalk')

//api
global.xteam = 'apivproject'
global.lolhuman = 'yourkey'

//stick
global.author = 'Follow Instagram\n  @naando.io  '
global.packname = 'Naoki\n'

//Link
global.gc = 'https://bit.ly/3KMlmv2'
global.linkyt = 'https://youtube.com/@Naoki5054'
global.linkgc = 'https://chat.whatsapp.com/DwP6uHYBWBc6TBSsNJrzwN'

// Othr
global.owner = ['6281393936306']
global.premium = ['6281393936306']
global.ownername = 'Wisnu'
global.botname = 'NaokiBot'
global.wm = '©Naoki'
global.footer = 'Naoki Robot'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '∘'
global.mess = {
    success: 'Berhasil',
    eror: 'Error',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Tunggu sebentar, sedang di proses',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}

//gambar
global.thumb = 'https://telegra.ph/file/86af4bca3faf0f9896d50.jpg'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
