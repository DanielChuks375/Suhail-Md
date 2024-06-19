const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347070726976l";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_22_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzksXG4gICAgICAgIDk5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDQxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDk0LFxuICAgICAgICA5OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA4NixcbiAgICAgICAgNDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc3LFxuICAgICAgICAzMixcbiAgICAgICAgMTAzLFxuICAgICAgICA1MixcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQxLFxuICAgICAgICA3NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDUsXG4gICAgICAgIDk0LFxuICAgICAgICA3NixcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDUzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjksXG4gICAgICAgIDYzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNyxcbiAgICAgICAgODQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA2LFxuICAgICAgICA0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgODksXG4gICAgICAgIDMxLFxuICAgICAgICA1NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM4LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDksXG4gICAgICAgIDExMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQwLFxuICAgICAgICA3OCxcbiAgICAgICAgNzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgODgsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJuSkMxUHdQZUZSeEhsSlZ0YTMyeGEweHFJc1BGYld0amRvLzg1dmRKWStVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNzA3MjY5NzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBMURFQURBN0M1NDVDMUVBQjRDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODgwMzM1M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNzA3MjY5NzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBOENBNzUxN0M5ODhGMjhFOTU5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODgwMzM1NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNzA3MjY5NzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBODk4MzI4Q0EwQjU3REE4QTM1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODgwMzM1N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJkVjhmcktmR1Q0bWFKWTBib2dVUS1BXCIsXG4gIFwicGhvbmVJZFwiOiBcImM1ZGViMTMwLTYyZDctNDUzMi04MDA4LWE3Zjk4ZWI5NzI4ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDMsXG4gICAgICAxNTgsXG4gICAgICA1MCxcbiAgICAgIDE4OSxcbiAgICAgIDc1LFxuICAgICAgMjIsXG4gICAgICAxNzgsXG4gICAgICA1NCxcbiAgICAgIDIzNixcbiAgICAgIDE0OCxcbiAgICAgIDk3LFxuICAgICAgMTE1LFxuICAgICAgNDYsXG4gICAgICAxOTQsXG4gICAgICAxNTEsXG4gICAgICAxNTksXG4gICAgICAyMTYsXG4gICAgICAxMTMsXG4gICAgICA2OCxcbiAgICAgIDIwMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2OCxcbiAgICAgIDIzOCxcbiAgICAgIDI2LFxuICAgICAgNyxcbiAgICAgIDY2LFxuICAgICAgMTA5LFxuICAgICAgODgsXG4gICAgICAzNixcbiAgICAgIDIyNSxcbiAgICAgIDg0LFxuICAgICAgMjM0LFxuICAgICAgMjQ1LFxuICAgICAgNCxcbiAgICAgIDcsXG4gICAgICAxMTgsXG4gICAgICAyNDgsXG4gICAgICA3NixcbiAgICAgIDIwLFxuICAgICAgMTIsXG4gICAgICAyMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUjhWOVhNUUFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNzA3MjY5NzY6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkRHIFRFQ0ggQk9UXCIsXG4gICAgXCJsaWRcIjogXCI0MDQzNzU4Njg1NDA1NToxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tpcnRJc0dFSlMzeTdNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQVIvb3g4LzBVeTY2Mm9XSzNDZjEvZ0dtWnd6S1pCTW1rV0VZVXNLSWh6Yz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJnNTRYYU9sMm5KdWlMRytMNFZUZ3JGWGlSQm0zTTJqd3JBaUNqVlBRTmlvMXdwQjcwOWxXbTRMYVlZdkVaL2x3R0ZBOWIvYVJlTnBrWHNTKzZKNDVCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIwL0p4UEJSV2YrQlFEWkxvQmFVTEkwTVMwbWo5UWdVQjd0OG9LQ2hERm1SeUxEdmFSTnRpcmJ0MStwcnA5Vi8xdUNVVk5QRVd0Rkp1aWVNL2Jjb1RBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDcwNzI2OTc2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg4MDMzNTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQVkZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBWRi5qc29uIjogIntcImtleURhdGFcIjpcImZuU2Q4d3l4dHUvMnpFcVEyNXhRWXFzTTlJaEpBRnBzcG11WUJjaGtoOU09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTYzNDUzODkyMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzE4ODAzMzUyODM2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
