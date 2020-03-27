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

class UserInfo extends Model {}

UserInfo.init({
  tckn: _sequelize.default.STRING,
  email: _sequelize.default.STRING,
  name: _sequelize.default.STRING,
  surname: _sequelize.default.STRING,
  birthDate: _sequelize.default.DATE,
  city: _sequelize.default.STRING,
  town: _sequelize.default.STRING,
  job: _sequelize.default.STRING,
  sex: _sequelize.default.STRING
}, {
  sequelize,
  modelName: 'UserInfo'
});
UserInfo.sync({// force:true
});
var _default = UserInfo;
exports.default = _default;
//# sourceMappingURL=UserInfo.js.map