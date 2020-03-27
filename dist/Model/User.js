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

class User extends Model {}

User.init({
  userName: _sequelize.default.STRING,
  password: _sequelize.default.STRING
}, {
  sequelize,
  modelName: 'User'
});
User.sync({// force:true
});
var _default = User;
exports.default = _default;
//# sourceMappingURL=User.js.map