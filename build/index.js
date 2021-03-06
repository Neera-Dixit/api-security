'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jwt_util = {
  validateToken: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(token, secretOrPublicKey, options) {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt('return', new _promise2.default(function (resolve, reject) {
                _jsonwebtoken2.default.verify(token, secretOrPublicKey, function (error, decoded) {
                  if (error) {
                    reject(error);
                  }
                  resolve(decoded);
                });
              }));

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function validateToken(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    }

    return validateToken;
  }(),
  decodeToken: function decodeToken(token, options) {
    return _jsonwebtoken2.default.decode(token, options);
  },
  createToken: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(payload, secretOrPrivateKey, options) {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt('return', new _promise2.default(function (resolve, reject) {
                _jsonwebtoken2.default.sign(payload, secretOrPrivateKey, options, function (error, token) {
                  if (error) {
                    reject(error);
                  }
                  resolve(token);
                });
              }));

            case 1:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function createToken(_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    }

    return createToken;
  }()
};

exports.default = jwt_util;
