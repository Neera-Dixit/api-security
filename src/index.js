import jwt from 'jsonwebtoken';

const jwt_util = {
  validateToken: async function validateToken(token, secretOrPublicKey, options) {
    return new Promise((resolve,reject) => {
      jwt.verify(token, secretOrPublicKey, (error, decoded) => {
        if (error) {
          reject(error);
        }
        resolve(decoded);
      });
    })
  },
  decodeToken: (token, options) => {
    return jwt.decode(token, options);
  },
  createToken: async function createToken(payload, secretOrPrivateKey, options) {
    return new Promise((resolve,reject) => {
      jwt.sign(payload, secretOrPrivateKey, options, (error, token) => {
        if (error) {
          reject(error);
        } 
        resolve(token);
      });
    })
  }
};

export default jwt_util;