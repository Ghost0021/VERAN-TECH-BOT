const _0x1f350a=_0x3f5f;(function(_0x2f9f21,_0x37bba6){const _0x2e5163=_0x3f5f,_0x29d285=_0x2f9f21();while(!![]){try{const _0x28bd1f=-parseInt(_0x2e5163(0x9a))/0x1*(parseInt(_0x2e5163(0x98))/0x2)+parseInt(_0x2e5163(0x86))/0x3*(parseInt(_0x2e5163(0x85))/0x4)+-parseInt(_0x2e5163(0x97))/0x5+parseInt(_0x2e5163(0x99))/0x6+-parseInt(_0x2e5163(0x8c))/0x7*(-parseInt(_0x2e5163(0x92))/0x8)+-parseInt(_0x2e5163(0x96))/0x9+-parseInt(_0x2e5163(0x87))/0xa*(parseInt(_0x2e5163(0x90))/0xb);if(_0x28bd1f===_0x37bba6)break;else _0x29d285['push'](_0x29d285['shift']());}catch(_0x4a604a){_0x29d285['push'](_0x29d285['shift']());}}}(_0x12cd,0x6b452));function _0x12cd(){const _0x3e5699=['1555614PVFaKz','1217gVHmyA','stringify','4rKtkTy','1919562KqvEos','1327710ezhqIE','keys','now','exports','log','57302mRUedm','Premium\x20expired:\x20','./database/premium.json','splice','33FNGivm','push','664kevBlq','expired','forEach','find','1179063GNvjba','1996610RrbZbn','346NrYIOr'];_0x12cd=function(){return _0x3e5699;};return _0x12cd();}function _0x3f5f(_0x24a382,_0x5a6f60){const _0x12cd35=_0x12cd();return _0x3f5f=function(_0x3f5f40,_0x12d11c){_0x3f5f40=_0x3f5f40-0x84;let _0x24b680=_0x12cd35[_0x3f5f40];return _0x24b680;},_0x3f5f(_0x24a382,_0x5a6f60);}const fs=require('fs'),toMs=require('ms'),addPremiumUser=(_0x20944d,_0x220055,_0x3ddd2e)=>{const _0x203335=_0x3f5f,_0x19c71b=_0x3ddd2e[_0x203335(0x95)](_0x593314=>_0x593314['id']==_0x20944d);if(_0x19c71b)_0x19c71b['expired']=_0x19c71b[_0x203335(0x93)]+toMs(_0x220055);else{const _0x28e263={'id':_0x20944d,'expired':Date['now']()+toMs(_0x220055)};_0x3ddd2e[_0x203335(0x91)](_0x28e263);}fs['writeFileSync']('./database/premium.json',JSON['stringify'](_0x3ddd2e));},getPremiumPosition=(_0x1d42f8,_0xb2c5a5)=>{const _0x3f65be=_0x3f5f;let _0x121b5e=null;Object[_0x3f65be(0x88)](_0xb2c5a5)[_0x3f65be(0x94)](_0x382106=>{_0xb2c5a5[_0x382106]['id']===_0x1d42f8&&(_0x121b5e=_0x382106);});if(_0x121b5e!==null)return _0x121b5e;},getPremiumExpired=(_0x3fd968,_0x473c4d)=>{const _0x5385ca=_0x3f5f;let _0x32ee20=null;Object[_0x5385ca(0x88)](_0x473c4d)['forEach'](_0x36811c=>{_0x473c4d[_0x36811c]['id']===_0x3fd968&&(_0x32ee20=_0x36811c);});if(_0x32ee20!==null)return _0x473c4d[_0x32ee20][_0x5385ca(0x93)];},checkPremiumUser=(_0x28d825,_0x574c5)=>{const _0xc1de6f=_0x3f5f;let _0x16b5ca=![];return Object[_0xc1de6f(0x88)](_0x574c5)[_0xc1de6f(0x94)](_0x145a8b=>{_0x574c5[_0x145a8b]['id']===_0x28d825&&(_0x16b5ca=!![]);}),_0x16b5ca;},expiredCheck=(_0x3fe1ac,_0x480a38)=>{setInterval(()=>{const _0x1ebe61=_0x3f5f;let _0x5cd0ac=null;Object['keys'](_0x480a38)[_0x1ebe61(0x94)](_0x25aff1=>{const _0x5565d4=_0x1ebe61;Date[_0x5565d4(0x89)]()>=_0x480a38[_0x25aff1][_0x5565d4(0x93)]&&(_0x5cd0ac=_0x25aff1);}),_0x5cd0ac!==null&&(idny=_0x480a38[_0x5cd0ac]['id'],console[_0x1ebe61(0x8b)](_0x1ebe61(0x8d)+_0x480a38[_0x5cd0ac]['id']),_0x480a38[_0x1ebe61(0x8f)](_0x5cd0ac,0x1),fs['writeFileSync'](_0x1ebe61(0x8e),JSON[_0x1ebe61(0x84)](_0x480a38)),idny?_0x3fe1ac['sendMessage'](idny,{'text':'Premium\x20Expired,\x20Terima\x20Kasih\x20Sudah\x20Berlangganan'}):'',idny=![]);},0x3e8);},getAllPremiumUser=_0x1c66dc=>{const _0x4b2c27=_0x3f5f,_0x34316f=[];return Object[_0x4b2c27(0x88)](_0x1c66dc)[_0x4b2c27(0x94)](_0x58e448=>{_0x34316f['push'](_0x1c66dc[_0x58e448]['id']);}),_0x34316f;};module[_0x1f350a(0x8a)]={'addPremiumUser':addPremiumUser,'getPremiumExpired':getPremiumExpired,'getPremiumPosition':getPremiumPosition,'expiredCheck':expiredCheck,'checkPremiumUser':checkPremiumUser,'getAllPremiumUser':getAllPremiumUser};