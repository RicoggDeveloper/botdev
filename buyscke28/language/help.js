  // Menu
  exports.menu = (botname, pushname, salam) => {
  return `Selamat ${salam} kak ${pushname}

Saya ${botname}, Bot Ini Adalah Beta Multi-Device WhatsApp.
Jika Kamu Menemukan Semacam Bug Atau Kesalahan Mohon Dimaklumi Dulu Ya, Lapor Owner Agar Segera Di Perbaikiπ
  `
  }

  // List
  exports.list = (pushname) => {
  return `Halo kak ${pushname}, silahkan dipilih list menu dibawah ini
  `
  }

  // All Menu
  exports.allmenu = (prefix, pushname, botname, time, salam) => {
  return `  _Selamat ${salam} kak ${pushname}_

  *β° Time Server : ${time}*
  *π List Menu : ${botname}*

  *(π€) Bot Info*
  β ${prefix}script
  β ${prefix}ping
  β ${prefix}runtime
  β ${prefix}speed
  β ${prefix}owner
  β ${prefix}menu
  β ${prefix}delete
  β ${prefix}infochat
  β ${prefix}quoted
  β ${prefix}listpc
  β ${prefix}listgc

  *(1) Owner Menu*
  β ${prefix}react [emoji]
  β ${prefix}chat [option]
  β ${prefix}join [link]
  β ${prefix}leave
  β ${prefix}block @user
  β ${prefix}unblock @user
  β ${prefix}bcgroup 
  β ${prefix}bcall 
  β ${prefix}setppbot  
  β ${prefix}setexif
  β ${prefix}setmenu
  β ${prefix}setallmenu
  β ${prefix}autoreact [on/off]
  
  *(2) Group Menu*
  β ${prefix}linkgroup
  β ${prefix}ephemeral [option]
  β ${prefix}setppgc
  β ${prefix}setname 
  β ${prefix}setdesc 
  β ${prefix}group [option]
  β ${prefix}editinfo [option]
  β ${prefix}add @user
  β ${prefix}kick @user
  β ${prefix}listonline
  β ${prefix}hidetag 
  β ${prefix}tagall 
  β ${prefix}antilink [on/off]
  β ${prefix}nsfw [on/off]
  β ${prefix}mute [on/off]
  β ${prefix}promote @user
  β ${prefix}demote @user
  β ${prefix}absen
  β ${prefix}hadir
  β ${prefix}tidakhadir
  β ${prefix}cekabsen
  β ${prefix}hapusabsen
  
  *(3) Database Menu*
  β ${prefix}setcmd
  β ${prefix}listcmd
  β ${prefix}delcmd
  β ${prefix}lockcmd
  β ${prefix}addmsg
  β ${prefix}listmsg
  β ${prefix}getmsg
  β ${prefix}delmsg

  *(4) Search Menu*
  β ${prefix}play 
  β ${prefix}yts 
  β ${prefix}google 
  β ${prefix}gimage 
  β ${prefix}pinterest 
  β ${prefix}wikimedia 
  β ${prefix}ytsearch 
  β ${prefix}githubstalk
  β ${prefix}igstalk
  β ${prefix}ringtone 
  
  *(5) Downloader Menu*
  β ${prefix}tiktok [url]
  β ${prefix}tiktokwm [url]
  β ${prefix}tiktoknowm [url]
  β ${prefix}tiktokaudio [url]
  β ${prefix}instagram [url]
  β ${prefix}twitter [url]
  β ${prefix}facebook [url]
  β ${prefix}ytmp4 [url]
  β ${prefix}ytmp3 [url]
  β ${prefix}play [judul]
  β ${prefix}ytsearch [judul]
  β ${prefix}gitclone

  *(6) Converter Menu*
  β ${prefix}toimage
  β ${prefix}removebg
  β ${prefix}sticker
  β ${prefix}setwm
  β ${prefix}emojimix
  β ${prefix}tovideo
  β ${prefix}togif
  β ${prefix}tourl
  β ${prefix}tovn
  β ${prefix}tomp3
  β ${prefix}toaudio
  β ${prefix}ebinary
  β ${prefix}dbinary
  β ${prefix}styletext
  β ${prefix}smeme
  β ${prefix}semoji
  β ${prefix}nulisbiasa
  β ${prefix}nuliskanan
  β ${prefix}nuliskiri
  β ${prefix}foliokanan
  β ${prefix}foliokiri

  *(7) Textpro Menu*
  β ${prefix}serti1 [teks]
  β ${prefix}serti2 [teks]
  β ${prefix}serti3 [teks]
  β ${prefix}blackpink [teks]
  β ${prefix}neon [teks]
  β ${prefix}magma [teks]
  β ${prefix}3dstone [teks]
  β ${prefix}halloween [teks]
  β ${prefix}horror [teks]
  β ${prefix}larva [teks]
  β ${prefix}toxic [teks]
  β ${prefix}marvel [teks|teks]
  β ${prefix}potter [teks]
  β ${prefix}pornhub [teks|teks]

  *(8) Photooxy Menu*
  β ${prefix}3d-underwater  
  β ${prefix}3dtext-pig  
  β ${prefix}3dvalentine-cards  
  β ${prefix}anonymous-neon  
  β ${prefix}advanced-glow  
  β ${prefix}art-shader  
  β ${prefix}angels-wings 

  *(9) Ephoto Menu*
  β ${prefix}3dnature
  β ${prefix}bevel
  β ${prefix}burnpaper
  β ${prefix}quotesgrass
  β ${prefix}stars
  β ${prefix}flaming
  β ${prefix}romance
  β ${prefix}gerbang
  β ${prefix}fur
  β ${prefix}funnycup
  
  *(10) Anime Menu*
  β ${prefix}loli
  β ${prefix}neko
  β ${prefix}waifu
  β ${prefix}shinobu
  β ${prefix}megumin
  β ${prefix}bully
  β ${prefix}cuddle
  β ${prefix}cry
  β ${prefix}hug
  β ${prefix}awoo
  β ${prefix}kiss
  β ${prefix}lick
  β ${prefix}pat
  β ${prefix}smug
  β ${prefix}bonk
  β ${prefix}yeet
  β ${prefix}blush
  β ${prefix}smile
  β ${prefix}wave
  β ${prefix}highfive
  β ${prefix}handhold
  β ${prefix}nom
  β ${prefix}bite
  β ${prefix}glomp
  β ${prefix}slap
  β ${prefix}kill
  β ${prefix}happy
  β ${prefix}wink
  β ${prefix}poke
  β ${prefix}dance
  β ${prefix}cringe
  β ${prefix}anime
  β ${prefix}yotsuba
  β ${prefix}shinomiya
  β ${prefix}yumeko
  β ${prefix}tejina
  β ${prefix}chiho
  β ${prefix}toukachan
  β ${prefix}akira
  β ${prefix}itori
  β ${prefix}kurumi
  β ${prefix}miku
  β ${prefix}pokemon
  β ${prefix}ryujin
  β ${prefix}kaori
  β ${prefix}shizuka
  β ${prefix}kotori
  β ${prefix}kaga
  β ${prefix}mikasa
  β ${prefix}akiyama
  β ${prefix}gremory
  β ${prefix}isuzu
  β ${prefix}cosplay
  β ${prefix}shina
  β ${prefix}kagura
  β ${prefix}shinka
  β ${prefix}eba
  β ${prefix}deidara
  β ${prefix}itachi
  β ${prefix}madara
  β ${prefix}yuki
  β ${prefix}asuna
  β ${prefix}ayuzawa
  β ${prefix}chitoge
  β ${prefix}emilia
  β ${prefix}hestia
  β ${prefix}inori
  β ${prefix}ana
  β ${prefix}boruto
  β ${prefix}erza
  β ${prefix}kakasih
  β ${prefix}sagiri
  β ${prefix}minato
  β ${prefix}naruto
  β ${prefix}nezuko
  β ${prefix}onepiece
  β ${prefix}sakura
  β ${prefix}sasuke
  β ${prefix}tsunade
  β ${prefix}jhota
  β ${prefix}hinata

  *(11) Nsfw Menu*
  β ${prefix}ahegeo
  β ${prefix}ass
  β ${prefix}bdsm
  β ${prefix}blowjob
  β ${prefix}cuckold 
  β ${prefix}cum 
  β ${prefix}ero
  β ${prefix}femdom
  β ${prefix}foot
  β ${prefix}gangbang
  β ${prefix}glasses
  β ${prefix}hentai
  β ${prefix}ahy
  β ${prefix}mstb
  β ${prefix}neko
  β ${prefix}orgy
  β ${prefix}panties
  β ${prefix}pussy
  β ${prefix}yuri
  β ${prefix}zettai
  
  *(12) Game Menu*
  β ${prefix}tictactoe [nama room]
  β ${prefix}delttt
  β ${prefix}tebak [option]
  β ${prefix}math [mode]
  β ${prefix}suitpvp [@tag]
  β ${prefix}suit2
  β ${prefix}aduayam

  *(13) Fun Menu*
  β ${prefix}bagaimanakah
  β ${prefix}kapankah
  β ${prefix}apakah
  β ${prefix}bisakah
  β ${prefix}rate
  β ${prefix}wangy
  β ${prefix}gantengcek
  β ${prefix}cekganteng
  β ${prefix}cantikcek
  β ${prefix}cekcantik
  β ${prefix}sangecek
  β ${prefix}ceksange
  β ${prefix}gaycek
  β ${prefix}cekgay
  β ${prefix}lesbicek
  β ${prefix}halah
  β ${prefix}hilih
  β ${prefix}huluh
  β ${prefix}heleh
  β ${prefix}holoh
  β ${prefix}jadian
  β ${prefix}jodohku
  β ${prefix}truth
  β ${prefix}dare

  *(14) Primbon Menu*
  β ${prefix}nomorhoki
  β ${prefix}artimimpi
  β ${prefix}artinama
  β ${prefix}ramaljodoh
  β ${prefix}ramaljodohbali
  β ${prefix}suamiistri
  β ${prefix}ramalcinta
  β ${prefix}cocoknama
  β ${prefix}pasangan
  β ${prefix}jadiannikah
  β ${prefix}sifatusaha
  β ${prefix}rezeki
  β ${prefix}pekerjaan
  β ${prefix}nasib
  β ${prefix}penyakit
  β ${prefix}tarot
  β ${prefix}fengshui
  β ${prefix}haribaik
  β ${prefix}harisangar
  β ${prefix}harisial
  β ${prefix}nagahari
  β ${prefix}arahrezeki
  β ${prefix}peruntungan
  β ${prefix}weton
  β ${prefix}karakter
  β ${prefix}keberuntungan
  β ${prefix}memancing
  β ${prefix}masasubur
  β ${prefix}zodiak
  β ${prefix}shio

  *(15) Cerpen Menu*
  β ${prefix}cerpen anak
  β ${prefix}cerpen bahasa daerah
  β ${prefix}cerpen bahasa inggris
  β ${prefix}cerpen bahasa jawa
  β ${prefix}cerpen bahasa sunda
  β ${prefix}cerpen budaya
  β ${prefix}cerpen cinta
  β ${prefix}cerpen cinta islami
  β ${prefix}cerpen cinta pertama
  β ${prefix}cerpen cinta romantis
  β ${prefix}cerpen cinta sedih
  β ${prefix}cerpen cinta segitiga
  β ${prefix}cerpen cinta sejati
  β ${prefix}cerpen galau
  β ${prefix}cerpen gokil
  β ${prefix}cerpen inspiratif
  β ${prefix}cerpen jepang
  β ${prefix}cerpen kehidupan
  β ${prefix}cerpen keluarga
  β ${prefix}cerpen kisah nyata
  β ${prefix}cerpen korea
  β ${prefix}cerpen kristen
  β ${prefix}cerpen liburan
  β ${prefix}cerpen lingkungan
  β ${prefix}cerpen lucu
  β ${prefix}cerpen malaysia
  β ${prefix}cerpen mengharukan
  β ${prefix}cerpen misteri
  β ${prefix}cerpen motivasi
  β ${prefix}cerpen nasihat
  β ${prefix}cerpen nasionalisme
  β ${prefix}cerpen olahraga
  β ${prefix}cerpen patah hati
  β ${prefix}cerpen penantian
  β ${prefix}cerpen pendidikan
  β ${prefix}cerpen pengalaman pribadi
  β ${prefix}cerpen pengorbanan
  β ${prefix}cerpen penyesalan
  β ${prefix}cerpen perjuangan
  β ${prefix}cerpen perpisahan
  β ${prefix}cerpen persahabatan
  β ${prefix}cerpen petualangan
  β ${prefix}cerpen ramadhan
  β ${prefix}cerpen remaja
  β ${prefix}cerpen renungan
  β ${prefix}cerpen rindu
  β ${prefix}cerpen rohani
  β ${prefix}cerpen romantis
  β ${prefix}cerpen sastra
  β ${prefix}cerpen sedih
  β ${prefix}cerpen sejarah
  β ${prefix}cerpen slice of life
  β ${prefix}cerpen terjemahan
  β ${prefix}cerpen thriller

  *(16) Information Menu*
  β ${prefix}merdeka-news 
  β ${prefix}kontan-news 
  β ${prefix}cnbc-news 
  β ${prefix}tribun-news 
  β ${prefix}indozone-news 
  β ${prefix}kompas-news 
  β ${prefix}detik-news 
  β ${prefix}daily-news 
  β ${prefix}inews-news 
  β ${prefix}okezone-news 
  β ${prefix}sindo-news 
  β ${prefix}tempo-news 
  β ${prefix}antara-news 
  β ${prefix}cnn-news 
  β ${prefix}fajar-news 
  β ${prefix}infogempa
  β ${prefix}infocovid
  β ${prefix}faktaunik

  *(17) Cecan Menu*
  β ${prefix}china
  β ${prefix}vietnam
  β ${prefix}thailand
  β ${prefix}indonesia
  β ${prefix}korea
  β ${prefix}japan
  β ${prefix}malaysia
  
  *(18) Asupan Menu*
  β ${prefix}hijaber
  β ${prefix}cecan
  β ${prefix}bocil
  β ${prefix}ukhty
  β ${prefix}gheayubi
  β ${prefix}rikagusriani
  β ${prefix}santuy
  
  *(19) Islamic Menu*
  β ${prefix}iqra
  β ${prefix}hadist
  β ${prefix}alquran
  β ${prefix}juzamma
  β ${prefix}tafsirsurah

  *(20) Sound Menu*
  β ${prefix}sound1
  β ${prefix}sound2
  β ${prefix}sound3
  β ${prefix}sound4
  β ${prefix}sound5
  β ${prefix}sound6
  β ${prefix}sound7
  β ${prefix}sound8
  β ${prefix}sound9
  β ${prefix}sound10
  β ${prefix}sound11
  β ${prefix}sound12
  β ${prefix}sound13
  β ${prefix}sound14
  β ${prefix}sound15
  β ${prefix}sound16
  β ${prefix}sound17
  β ${prefix}sound18
  β ${prefix}sound19
  β ${prefix}sound20
  β ${prefix}sound21
  β ${prefix}sound22
  β ${prefix}sound23
  β ${prefix}sound24
  β ${prefix}sound25
  β ${prefix}sound26
  β ${prefix}sound27
  β ${prefix}sound28
  β ${prefix}sound29
  β ${prefix}sound30
  β ${prefix}sound31
  β ${prefix}sound32
  β ${prefix}sound33
  β ${prefix}sound34
  β ${prefix}sound35
  β ${prefix}sound36
  β ${prefix}sound37
  β ${prefix}sound38
  β ${prefix}sound39
  β ${prefix}sound40
  β ${prefix}sound41
  β ${prefix}sound42
  β ${prefix}sound43
  β ${prefix}sound44
  β ${prefix}sound45
  β ${prefix}sound46
  β ${prefix}sound47
  β ${prefix}sound48
  β ${prefix}sound49
  β ${prefix}sound50
  β ${prefix}sound51
  β ${prefix}sound52
  β ${prefix}sound53
  β ${prefix}sound54
  β ${prefix}sound55
  β ${prefix}sound56
  β ${prefix}sound57
  β ${prefix}sound58
  β ${prefix}sound59
  β ${prefix}sound60
  β ${prefix}sound61
  β ${prefix}sound62
  β ${prefix}sound63
  β ${prefix}sound64
  β ${prefix}sound65
  β ${prefix}sound66
  β ${prefix}sound67
  β ${prefix}sound68
  β ${prefix}sound69
  β ${prefix}sound70
  β ${prefix}sound71
  β ${prefix}sound72
  β ${prefix}sound73
  β ${prefix}sound74
  
  *(21) Voice Changer*
  β ${prefix}bass
  β ${prefix}blown
  β ${prefix}deep
  β ${prefix}earrape
  β ${prefix}fast
  β ${prefix}fat
  β ${prefix}nightcore
  β ${prefix}reverse
  β ${prefix}robot
  β ${prefix}slow
  β ${prefix}tupai

  *(22) Telegram Sticker*
  β ${prefix}gurastick
  β ${prefix}dogestick
  β ${prefix}bucinstick
  β ${prefix}awoawo
  β ${prefix}benedict
  β ${prefix}chat
  β ${prefix}dbfly
  β ${prefix}dino_kuning
  β ${prefix}doge
  β ${prefix}gojosatoru
  β ${prefix}hope_boy
  β ${prefix}jisoo
  β ${prefix}kr_robot
  β ${prefix}kucing
  β ${prefix}lonte
  β ${prefix}manusia_lidi
  β ${prefix}menjamet
  β ${prefix}meow
  β ${prefix}nicholas
  β ${prefix}patrick
  β ${prefix}popoci
  β ${prefix}sponsbob
  β ${prefix}kawan_sponsbob
  β ${prefix}tyni

  *(23) Others Menu*
  β ${prefix}coffe
  β ${prefix}katabijak
  β ${prefix}quotes
  β ${prefix}quotes2
  β ${prefix}quotesanime
  β ${prefix}katailham
  β ${prefix}katabucin
  β ${prefix}katasenja
  β ${prefix}fiersabersari
  β ${prefix}couple
  β ${prefix}darkjokes
  
  *(π) Thanks To*
  β Dika Ardnt
  β Mhankbarbar
  β Fatih Arridho
  β Ryuka Team
  β Zeeone Ofc
  β Bagas Prdn
  β Nurutomo
  β OnX Dz
  β Nekel
  β Yoga
  β Deff
  β Riy
  `
  }

  // Welcome
  exports.welcome = () => {
	return `Welcome
  `
  }

  // Leave
  exports.leave = () => {
  return`Byeee
  `
  }

  // Donasi
  exports.donasi  = (ownernomer) => {
  return `
*DONATE*

Hai kak βΊοΈ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi
Berapapun donasi kalian akan sangat berarti π

Thanks!

*Contact person Owner* :
wa.me/${ownernomer}
  `
  }

  // Simple Menu
  exports.botinfo = (prefix) => {
  return`
  *(π€) Bot Info*
  β ${prefix}script
  β ${prefix}ping
  β ${prefix}runtime
  β ${prefix}speed
  β ${prefix}owner
  β ${prefix}menu
  β ${prefix}delete
  β ${prefix}infochat
  β ${prefix}quoted
  β ${prefix}listpc
  β ${prefix}listgc
  `
  }

  exports.ownermenu = (prefix) => {
  return `
  *(1) Owner Menu*
  β ${prefix}react [emoji]
  β ${prefix}chat [option]
  β ${prefix}join [link]
  β ${prefix}leave
  β ${prefix}block @user
  β ${prefix}unblock @user
  β ${prefix}bcgroup 
  β ${prefix}bcall 
  β ${prefix}setppbot  
  β ${prefix}setexif
  β ${prefix}setmenu
  β ${prefix}setallmenu
  β ${prefix}autoreact [on/off]
  `
  }

  exports.groupmenu = (prefix) => {
  return `
  *(2) Group Menu*
  β ${prefix}linkgroup
  β ${prefix}ephemeral [option]
  β ${prefix}setppgc
  β ${prefix}setname 
  β ${prefix}setdesc 
  β ${prefix}group [option]
  β ${prefix}editinfo [option]
  β ${prefix}add @user
  β ${prefix}kick @user
  β ${prefix}listonline
  β ${prefix}hidetag 
  β ${prefix}tagall 
  β ${prefix}antilink [on/off]
  β ${prefix}nsfw [on/off]
  β ${prefix}mute [on/off]
  β ${prefix}promote @user
  β ${prefix}demote @user
  β ${prefix}absen
  β ${prefix}hadir
  β ${prefix}tidakhadir
  β ${prefix}cekabsen
  β ${prefix}hapusabsen
  `
  }

  exports.databasemenu = (prefix) => {
  return`
  *(3) Database Menu*
  β ${prefix}setcmd
  β ${prefix}listcmd
  β ${prefix}delcmd
  β ${prefix}lockcmd
  β ${prefix}addmsg
  β ${prefix}listmsg
  β ${prefix}getmsg
  β ${prefix}delmsg
  `
  }

  exports.searchmenu = (prefix) => {
  return `
  *(4) Search Menu*
  β ${prefix}play 
  β ${prefix}yts 
  β ${prefix}google 
  β ${prefix}gimage 
  β ${prefix}pinterest 
  β ${prefix}wikimedia 
  β ${prefix}ytsearch 
  β ${prefix}githubstalk
  β ${prefix}igstalk
  β ${prefix}ringtone 
  `
  }

  exports.downloadermenu = (prefix) => {
  return `
  *(5) Downloader Menu*
  β ${prefix}tiktok [url]
  β ${prefix}tiktokwm [url]
  β ${prefix}tiktoknowm [url]
  β ${prefix}tiktokaudio [url]
  β ${prefix}instagram [url]
  β ${prefix}twitter [url]
  β ${prefix}facebook [url]
  β ${prefix}ytmp4 [url]
  β ${prefix}ytmp3 [url]
  β ${prefix}play [judul]
  β ${prefix}ytsearch [judul]
  β ${prefix}gitclone
  `
  }

  exports.convertmenu = (prefix) => {
  return `
  *(6) Converter Menu*
  β ${prefix}toimage
  β ${prefix}removebg
  β ${prefix}sticker
  β ${prefix}setwm
  β ${prefix}emojimix
  β ${prefix}tovideo
  β ${prefix}togif
  β ${prefix}tourl
  β ${prefix}tovn
  β ${prefix}tomp3
  β ${prefix}toaudio
  β ${prefix}ebinary
  β ${prefix}dbinary
  β ${prefix}styletext
  β ${prefix}smeme
  β ${prefix}semoji
  β ${prefix}nulisbiasa
  β ${prefix}nuliskanan
  β ${prefix}nuliskiri
  β ${prefix}foliokanan
  β ${prefix}foliokiri
  `
  }

  exports.textpromenu = (prefix) => {
  return `
  *(7) Textpro Menu*
  β ${prefix}serti1 [teks]
  β ${prefix}serti2 [teks]
  β ${prefix}serti3 [teks]
  β ${prefix}blackpink [teks]
  β ${prefix}neon [teks]
  β ${prefix}magma [teks]
  β ${prefix}3dstone [teks]
  β ${prefix}halloween [teks]
  β ${prefix}horror [teks]
  β ${prefix}larva [teks]
  β ${prefix}toxic [teks]
  β ${prefix}marvel [teks|teks]
  β ${prefix}potter [teks]
  β ${prefix}pornhub [teks|teks]
  `
  }

  exports.photooxymenu = (prefix) => {
  return`
  *(8) Photooxy Menu*
  β ${prefix}3d-underwater  
  β ${prefix}3dtext-pig  
  β ${prefix}3dvalentine-cards  
  β ${prefix}anonymous-neon  
  β ${prefix}advanced-glow  
  β ${prefix}art-shader  
  β ${prefix}angels-wings 
  `
  }

  exports.ephotomenu = (prefix) => {
  return `
  *(9) Ephoto Menu*
  β ${prefix}3dnature
  β ${prefix}bevel
  β ${prefix}burnpaper
  β ${prefix}quotesgrass
  β ${prefix}stars
  β ${prefix}flaming
  β ${prefix}romance
  β ${prefix}gerbang
  β ${prefix}fur
  β ${prefix}funnycup
  `
  }

  exports.randomanimemenu = (prefix) => {
  return `
  *(10) Anime Menu*
  β ${prefix}loli
  β ${prefix}neko
  β ${prefix}waifu
  β ${prefix}shinobu
  β ${prefix}megumin
  β ${prefix}bully
  β ${prefix}cuddle
  β ${prefix}cry
  β ${prefix}hug
  β ${prefix}awoo
  β ${prefix}kiss
  β ${prefix}lick
  β ${prefix}pat
  β ${prefix}smug
  β ${prefix}bonk
  β ${prefix}yeet
  β ${prefix}blush
  β ${prefix}smile
  β ${prefix}wave
  β ${prefix}highfive
  β ${prefix}handhold
  β ${prefix}nom
  β ${prefix}bite
  β ${prefix}glomp
  β ${prefix}slap
  β ${prefix}kill
  β ${prefix}happy
  β ${prefix}wink
  β ${prefix}poke
  β ${prefix}dance
  β ${prefix}cringe
  β ${prefix}anime
  β ${prefix}yotsuba
  β ${prefix}shinomiya
  β ${prefix}yumeko
  β ${prefix}tejina
  β ${prefix}chiho
  β ${prefix}toukachan
  β ${prefix}akira
  β ${prefix}itori
  β ${prefix}kurumi
  β ${prefix}miku
  β ${prefix}pokemon
  β ${prefix}ryujin
  β ${prefix}kaori
  β ${prefix}shizuka
  β ${prefix}kotori
  β ${prefix}kaga
  β ${prefix}mikasa
  β ${prefix}akiyama
  β ${prefix}gremory
  β ${prefix}isuzu
  β ${prefix}cosplay
  β ${prefix}shina
  β ${prefix}kagura
  β ${prefix}shinka
  β ${prefix}eba
  β ${prefix}deidara
  β ${prefix}itachi
  β ${prefix}madara
  β ${prefix}yuki
  β ${prefix}asuna
  β ${prefix}ayuzawa
  β ${prefix}chitoge
  β ${prefix}emilia
  β ${prefix}hestia
  β ${prefix}inori
  β ${prefix}ana
  β ${prefix}boruto
  β ${prefix}erza
  β ${prefix}kakasih
  β ${prefix}sagiri
  β ${prefix}minato
  β ${prefix}naruto
  β ${prefix}nezuko
  β ${prefix}onepiece
  β ${prefix}sakura
  β ${prefix}sasuke
  β ${prefix}tsunade
  β ${prefix}jhota
  β ${prefix}hinata
  `
  }

  exports.nsfwmenu = (prefix) => {
  return`
  *(11) Nsfw Menu*
  β ${prefix}ahegeo
  β ${prefix}ass
  β ${prefix}bdsm
  β ${prefix}blowjob
  β ${prefix}cuckold 
  β ${prefix}cum 
  β ${prefix}ero
  β ${prefix}femdom
  β ${prefix}foot
  β ${prefix}gangbang
  β ${prefix}glasses
  β ${prefix}hentai
  β ${prefix}ahy
  β ${prefix}mstb
  β ${prefix}neko
  β ${prefix}orgy
  β ${prefix}panties
  β ${prefix}pussy
  β ${prefix}yuri
  β ${prefix}zettai
  `
  }

  exports.gamemenu = (prefix) => {
  return`
  *(12) Game Menu*
  β ${prefix}tictactoe [nama room]
  β ${prefix}delttt
  β ${prefix}tebak [option]
  β ${prefix}math [mode]
  β ${prefix}suitpvp [@tag]
  β ${prefix}suit2
  β ${prefix}aduayam
  `
  }
  
  exports.funmenu = (prefix) => {
  return `
  *(13) Fun Menu*
  β ${prefix}bagaimanakah
  β ${prefix}kapankah
  β ${prefix}apakah
  β ${prefix}bisakah
  β ${prefix}rate
  β ${prefix}wangy
  β ${prefix}gantengcek
  β ${prefix}cekganteng
  β ${prefix}cantikcek
  β ${prefix}cekcantik
  β ${prefix}sangecek
  β ${prefix}ceksange
  β ${prefix}gaycek
  β ${prefix}cekgay
  β ${prefix}lesbicek
  β ${prefix}halah
  β ${prefix}hilih
  β ${prefix}huluh
  β ${prefix}heleh
  β ${prefix}holoh
  β ${prefix}jadian
  β ${prefix}jodohku
  β ${prefix}truth
  β ${prefix}dare
  `
  }

  exports.primbonmenu = (prefix) => {
  return`
  *(14) Primbon Menu*
  β ${prefix}nomorhoki
  β ${prefix}artimimpi
  β ${prefix}artinama
  β ${prefix}ramaljodoh
  β ${prefix}ramaljodohbali
  β ${prefix}suamiistri
  β ${prefix}ramalcinta
  β ${prefix}cocoknama
  β ${prefix}pasangan
  β ${prefix}jadiannikah
  β ${prefix}sifatusaha
  β ${prefix}rezeki
  β ${prefix}pekerjaan
  β ${prefix}nasib
  β ${prefix}penyakit
  β ${prefix}tarot
  β ${prefix}fengshui
  β ${prefix}haribaik
  β ${prefix}harisangar
  β ${prefix}harisial
  β ${prefix}nagahari
  β ${prefix}arahrezeki
  β ${prefix}peruntungan
  β ${prefix}weton
  β ${prefix}karakter
  β ${prefix}keberuntungan
  β ${prefix}memancing
  β ${prefix}masasubur
  β ${prefix}zodiak
  β ${prefix}shio
  `
  }

  exports.cerpenmenu = (prefix) => {
  return `
  *(15) Cerpen Menu*
  β ${prefix}cerpen anak
  β ${prefix}cerpen bahasa daerah
  β ${prefix}cerpen bahasa inggris
  β ${prefix}cerpen bahasa jawa
  β ${prefix}cerpen bahasa sunda
  β ${prefix}cerpen budaya
  β ${prefix}cerpen cinta
  β ${prefix}cerpen cinta islami
  β ${prefix}cerpen cinta pertama
  β ${prefix}cerpen cinta romantis
  β ${prefix}cerpen cinta sedih
  β ${prefix}cerpen cinta segitiga
  β ${prefix}cerpen cinta sejati
  β ${prefix}cerpen galau
  β ${prefix}cerpen gokil
  β ${prefix}cerpen inspiratif
  β ${prefix}cerpen jepang
  β ${prefix}cerpen kehidupan
  β ${prefix}cerpen keluarga
  β ${prefix}cerpen kisah nyata
  β ${prefix}cerpen korea
  β ${prefix}cerpen kristen
  β ${prefix}cerpen liburan
  β ${prefix}cerpen lingkungan
  β ${prefix}cerpen lucu
  β ${prefix}cerpen malaysia
  β ${prefix}cerpen mengharukan
  β ${prefix}cerpen misteri
  β ${prefix}cerpen motivasi
  β ${prefix}cerpen nasihat
  β ${prefix}cerpen nasionalisme
  β ${prefix}cerpen olahraga
  β ${prefix}cerpen patah hati
  β ${prefix}cerpen penantian
  β ${prefix}cerpen pendidikan
  β ${prefix}cerpen pengalaman pribadi
  β ${prefix}cerpen pengorbanan
  β ${prefix}cerpen penyesalan
  β ${prefix}cerpen perjuangan
  β ${prefix}cerpen perpisahan
  β ${prefix}cerpen persahabatan
  β ${prefix}cerpen petualangan
  β ${prefix}cerpen ramadhan
  β ${prefix}cerpen remaja
  β ${prefix}cerpen renungan
  β ${prefix}cerpen rindu
  β ${prefix}cerpen rohani
  β ${prefix}cerpen romantis
  β ${prefix}cerpen sastra
  β ${prefix}cerpen sedih
  β ${prefix}cerpen sejarah
  β ${prefix}cerpen slice of life
  β ${prefix}cerpen terjemahan
  β ${prefix}cerpen thriller
  `
  }

  exports.informationmenu = (prefix) => {
  return `
  *(16) Information Menu*
  β ${prefix}merdeka-news 
  β ${prefix}kontan-news 
  β ${prefix}cnbc-news 
  β ${prefix}tribun-news 
  β ${prefix}indozone-news 
  β ${prefix}kompas-news 
  β ${prefix}detik-news 
  β ${prefix}daily-news 
  β ${prefix}inews-news 
  β ${prefix}okezone-news 
  β ${prefix}sindo-news 
  β ${prefix}tempo-news 
  β ${prefix}antara-news 
  β ${prefix}cnn-news 
  β ${prefix}fajar-news 
  β ${prefix}infogempa
  β ${prefix}infocovid
  β ${prefix}faktaunik
  `
  }
  
  exports.cecanmenu = (prefix) => {
  return `
  *(17) Cecan Menu*
  β ${prefix}china
  β ${prefix}vietnam
  β ${prefix}thailand
  β ${prefix}indonesia
  β ${prefix}korea
  β ${prefix}japan
  β ${prefix}malaysia
  `
  }

  exports.asupanmenu = (prefix) => {
  return `
  *(18) Asupan Menu*
  β ${prefix}hijaber
  β ${prefix}cecan
  β ${prefix}bocil
  β ${prefix}ukhty
  β ${prefix}gheayubi
  β ${prefix}rikagusriani
  β ${prefix}santuy
  `
  }

  exports.islamicmenu = (prefix) => {
  return `
  *(19) Islamic Menu*
  β ${prefix}iqra
  β ${prefix}hadist
  β ${prefix}alquran
  β ${prefix}juzamma
  β ${prefix}tafsirsurah
  `
  }

  exports.voicechargermenu = (prefix) => {
  return`
  *(20) Voice Changer*
  β ${prefix}bass
  β ${prefix}blown
  β ${prefix}deep
  β ${prefix}earrape
  β ${prefix}fast
  β ${prefix}fat
  β ${prefix}nightcore
  β ${prefix}reverse
  β ${prefix}robot
  β ${prefix}slow
  β ${prefix}tupai
  `
  }
  
  exports.soundmenu = (prefix) => {
  return `
  *(21) Sound Menu*
  β ${prefix}sound1
  β ${prefix}sound2
  β ${prefix}sound3
  β ${prefix}sound4
  β ${prefix}sound5
  β ${prefix}sound6
  β ${prefix}sound7
  β ${prefix}sound8
  β ${prefix}sound9
  β ${prefix}sound10
  β ${prefix}sound11
  β ${prefix}sound12
  β ${prefix}sound13
  β ${prefix}sound14
  β ${prefix}sound15
  β ${prefix}sound16
  β ${prefix}sound17
  β ${prefix}sound18
  β ${prefix}sound19
  β ${prefix}sound20
  β ${prefix}sound21
  β ${prefix}sound22
  β ${prefix}sound23
  β ${prefix}sound24
  β ${prefix}sound25
  β ${prefix}sound26
  β ${prefix}sound27
  β ${prefix}sound28
  β ${prefix}sound29
  β ${prefix}sound30
  β ${prefix}sound31
  β ${prefix}sound32
  β ${prefix}sound33
  β ${prefix}sound34
  β ${prefix}sound35
  β ${prefix}sound36
  β ${prefix}sound37
  β ${prefix}sound38
  β ${prefix}sound39
  β ${prefix}sound40
  β ${prefix}sound41
  β ${prefix}sound42
  β ${prefix}sound43
  β ${prefix}sound44
  β ${prefix}sound45
  β ${prefix}sound46
  β ${prefix}sound47
  β ${prefix}sound48
  β ${prefix}sound49
  β ${prefix}sound50
  β ${prefix}sound51
  β ${prefix}sound52
  β ${prefix}sound53
  β ${prefix}sound54
  β ${prefix}sound55
  β ${prefix}sound56
  β ${prefix}sound57
  β ${prefix}sound58
  β ${prefix}sound59
  β ${prefix}sound60
  β ${prefix}sound61
  β ${prefix}sound62
  β ${prefix}sound63
  β ${prefix}sound64
  β ${prefix}sound65
  β ${prefix}sound66
  β ${prefix}sound67
  β ${prefix}sound68
  β ${prefix}sound69
  β ${prefix}sound70
  β ${prefix}sound71
  β ${prefix}sound72
  β ${prefix}sound73
  β ${prefix}sound74
  `
  }

  exports.telegramstickermenu = (prefix) => {
  return `
  *(22) Telegram Sticker*
  β ${prefix}gurastick
  β ${prefix}dogestick
  β ${prefix}bucinstick
  β ${prefix}awoawo
  β ${prefix}benedict
  β ${prefix}chat
  β ${prefix}dbfly
  β ${prefix}dino_kuning
  β ${prefix}doge
  β ${prefix}gojosatoru
  β ${prefix}hope_boy
  β ${prefix}jisoo
  β ${prefix}kr_robot
  β ${prefix}kucing
  β ${prefix}lonte
  β ${prefix}manusia_lidi
  β ${prefix}menjamet
  β ${prefix}meow
  β ${prefix}nicholas
  β ${prefix}patrick
  β ${prefix}popoci
  β ${prefix}sponsbob
  β ${prefix}kawan_sponsbob
  β ${prefix}tyni
  `
  }

  exports.othersmenu = (prefix) => {
  return `
  *(23) Others Menu*
  β ${prefix}coffe
  β ${prefix}katabijak
  β ${prefix}quotes
  β ${prefix}quotes2
  β ${prefix}quotesanime
  β ${prefix}katailham
  β ${prefix}katabucin
  β ${prefix}katasenja
  β ${prefix}fiersabersari
  β ${prefix}couple
  β ${prefix}darkjokes
  `
  }

  //tqto gsh di hps y :) kalau mai tmbhin aja nama kalian.
  exports.thanksto = () => {
  return `
  *(π) Thanks To*
  β Dika Ardnt
  β Fatih Arridho
  β Zeeone Ofc
  β Nekel
  β Yoga
  β Riy
  β RicDev
  `
  }