"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var LoginService = _interopRequireWildcard(require("../Service/LoginService"));

var KPS = _interopRequireWildcard(require("../ExternalService/KPS"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.post("/create", (req, res) => {
  LoginService.createLogin(req, res);
});
router.post("/activate", (req, res) => {
  LoginService.updateLoginByEmail(req, res);
});
router.post("/isActive", (req, res) => {
  LoginService.isActive(req, res);
});
router.post("/updateMailKey", (req, res) => {
  LoginService.updateLoginMailKeyByEmail(req, res);
});
router.post("/login", (req, res) => {
  LoginService.loginCheck(req, res);
});
router.post("/kps", (req, res) => {
  KPS.kpsCheck(req, res);
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=LoginController.js.map