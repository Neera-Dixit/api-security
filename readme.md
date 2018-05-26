
jwtutil - node wrapper module built on top on jsonwebtoken

To Install : npm i jwtUtil;

Example to Use it

import jwt_util from jwtutil;
import config from 'some config file' //which public ket,private key or secret

const options = {
  algorithm: 'RS256'
};

(async function iife(){
 const token = await jwt_util.createToken({name: 'neeraj'}, config.privateKey, options);
 console.log(jwt_util.decodeToken(token));
 const verify = await jwt_util.validateToken(token, config.publicKey, options);
 console.log("verify : ",verify);
})();
