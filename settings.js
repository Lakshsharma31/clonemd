const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zen: 'https://zenzapi.xyz',
        dap: 'https://api.dapuhy.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '434185F5775E',
        'https://api.dapuhy.xyz': 'friska',
}

// Other
global.owner = ['919389379221']
global.premium = ['919389379221']
global.packname = '⫷ кคкครђเ รєภรเє ⫸'
global.author = 'Mrs Dia hatake🧣❤'
global.sessionName = 'zakbotz'
global.email = 'kakashixre@gmail.com'
global.yt = 'https://youtube.com/channel/Carryminati'
global.region = 'India'
global.prefa = ['','!','.','#','-','•']
global.sp = '⭔'
global.mess = {
    success: 'Success❤',
    admin: '(♥_♥)Only admin can use this cmd baka!!',
    botAdmin: 'Bot Not admin bro use your eyes and promote me!!!',
    owner: 'baka!! Only Master kakashi allowed to use this command!!',
    group: 'This command works only in  Group!!!',
    private: 'This command works only in Private Chat!!!',
    bot: 'Bot Number User Special Features!!',
    wait: '*Please wait* 🧣❤',
    endLimit: 'YOUR TODAY LIMIT END COME AFTER 12 AT NIGHT BAKA!! TO GET PREMIUM CONTACT OWNER',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./Image/kirbotz.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
