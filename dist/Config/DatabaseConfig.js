"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Docker'da ki mysql için
// const sequelize = new Sequelize('testdb', 'root', 'toortoor', {
//     dialect: 'mysql'
//   })
const sequelize = new _sequelize.default("mydb58", "mydb58", "Tz24zr-c~lHw", {
  host: "den1.mssql7.gear.host",
  // port: "49394",  // 
  dialect: "mssql",
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
var _default = sequelize;
exports.default = _default;
//# sourceMappingURL=DatabaseConfig.js.map