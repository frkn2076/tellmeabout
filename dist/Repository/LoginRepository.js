"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateLoginMailKeyByEmail = exports.getLoginByEmail = exports.updateLoginByEmail = exports.createLogin = void 0;

var _Login = _interopRequireDefault(require("../Model/Login"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createLogin = async loginObject => {
  return new Promise((resolve, reject) => {
    try {
      _Login.default.create(loginObject);

      resolve();
    } catch (error) {
      reject();
    }
  });
}; //activate


exports.createLogin = createLogin;

const updateLoginByEmail = async updateObject => {
  return new Promise((resolve, reject) => {
    try {
      _Login.default.update({
        isActive: 1
      }, {
        where: {
          email: updateObject.email
        }
      });

      resolve();
    } catch (error) {
      reject();
    }
  });
};

exports.updateLoginByEmail = updateLoginByEmail;

const getLoginByEmail = async email => {
  return new Promise((resolve, reject) => {
    try {
      const incomingLoginFromDB = _Login.default.findOne({
        where: {
          email: email
        }
      });

      resolve(incomingLoginFromDB);
    } catch (error) {
      reject();
    }
  });
};

exports.getLoginByEmail = getLoginByEmail;

const updateLoginMailKeyByEmail = loginObject => {
  return new Promise((resolve, reject) => {
    try {
      _Login.default.update({
        mailKey: "1234"
      }, {
        where: {
          email: loginObject.email
        }
      });

      resolve();
    } catch (error) {
      reject();
    }
  });
};

exports.updateLoginMailKeyByEmail = updateLoginMailKeyByEmail;
//# sourceMappingURL=LoginRepository.js.map