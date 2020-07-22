"use strict";

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bob = Bob;
exports.poppy = void 0;

require("regenerator-runtime/runtime");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var poppy = "hello";
exports.poppy = poppy;

function Bob() {
  return _Bob.apply(this, arguments);
}

function _Bob() {
  _Bob = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var sam;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return peter();

          case 2:
            sam = _context.sent;
            return _context.abrupt("return", sam);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _Bob.apply(this, arguments);
}

var peter = function peter() {
  console.log("Peter");
};