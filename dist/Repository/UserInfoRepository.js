"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.completeUserInfo = exports.createUserInfo = void 0;

var _UserInfo = _interopRequireDefault(require("../Model/UserInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createUserInfo = async userInfoObject => {
  return new Promise((resolve, reject) => {
    try {
      _UserInfo.default.create(userInfoObject);

      resolve();
    } catch (error) {
      reject();
    }
  });
};

exports.createUserInfo = createUserInfo;

const completeUserInfo = async userInfoObject => {
  return new Promise((resolve, reject) => {
    try {
      _UserInfo.default.update({
        city: userInfoObject.city,
        town: userInfoObject.town,
        job: userInfoObject.job,
        sex: userInfoObject.sex
      }, {
        where: {
          email: userInfoObject.email
        }
      });

      resolve();
    } catch (error) {
      reject();
    }
  });
};

exports.completeUserInfo = completeUserInfo;
//# sourceMappingURL=UserInfoRepository.js.map