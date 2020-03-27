"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _winston = _interopRequireDefault(require("winston"));

var _expressWinston = _interopRequireDefault(require("express-winston"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const logger = _expressWinston.default.logger({
  transports: [new _winston.default.transports.Console(), new _winston.default.transports.File({
    filename: 'services.log'
  })],
  format: _winston.default.format.combine(_winston.default.format.colorize(), _winston.default.format.json()),
  meta: true,
  // optional: control whether you want to log the meta data about the request (default to true)
  msg: "HTTP {{req.method}} {{req.url}}",
  // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
  expressFormat: true,
  // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
  colorize: false,
  // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
  ignoreRoute: function (req, res) {
    return false;
  } // optional: allows to skip some log messages based on request and/or response

});

var _default = logger;
exports.default = _default;
//# sourceMappingURL=Logger.js.map