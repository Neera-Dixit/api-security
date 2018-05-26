'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _index = require('../build/index');

var _index2 = _interopRequireDefault(_index);

var _config = require('../src/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = {
  algorithm: 'RS256'
};

(function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var token, verify;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _index2.default.createToken({ name: 'neeraj' }, _config2.default.privateKey, options);

          case 2:
            token = _context.sent;

            console.log(_index2.default.decodeToken(token));
            _context.next = 6;
            return _index2.default.validateToken(token, _config2.default.publicKey, options);

          case 6:
            verify = _context.sent;

            console.log("verify : ", verify);

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function iife() {
    return _ref.apply(this, arguments);
  }

  return iife;
})()();
