"use strict";

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exportedModule2 = exportedModule2;
exports.exportedModule1 = void 0;

require("regenerator-runtime/runtime");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var exportedModule1 = "Hello from Module 1";
exports.exportedModule1 = exportedModule1;

function exportedModule2() {
  return _exportedModule.apply(this, arguments);
}

function _exportedModule() {
  _exportedModule = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var messageSend;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return messageBuild();

          case 2:
            messageSend = _context.sent;
            return _context.abrupt("return", "Message Built");

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _exportedModule.apply(this, arguments);
}

var messageBuild = function messageBuild() {
  console.log("Building message");
};