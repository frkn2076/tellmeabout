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

class Job extends Model {}

Job.init({
  id: _sequelize.default.INTEGER,
  name: _sequelize.default.STRING
}, {
  sequelize,
  modelName: 'Job'
});
Job.sync({// force:false
});
var _default = Job;
exports.default = _default;
//# sourceMappingURL=Job.js.map