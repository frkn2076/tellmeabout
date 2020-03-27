"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _DatabaseConfig = _interopRequireDefault(require("../Config/DatabaseConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Model = _sequelize.default.Model;
const sequelize = _DatabaseConfig.default;

class Login extends Model {}

Login.init({
  email: _sequelize.default.STRING,
  password: _sequelize.default.STRING,
  mailKey: _sequelize.default.STRING,
  isActive: _sequelize.default.BOOLEAN
}, {
  sequelize,
  modelName: 'Login'
});
Login.sync({// force:true
});
var _default = Login;
exports.default = _default;
//# sourceMappingURL=Login.js.map