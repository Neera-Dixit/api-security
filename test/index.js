const jwt_util = require('../build/index').default;
const config = require('../src/config');
const options = {
  algorithm: 'RS256'
};

(async function iife(){
 const token = await jwt_util.createToken({name: 'neeraj'}, config.privateKey, options);
 console.log(jwt_util.decodeToken(token));
 const verify = await jwt_util.validateToken(token, config.publicKey, options);
 console.log("verify : ",verify);
})();