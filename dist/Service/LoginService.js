"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateLoginMailKeyByEmail = exports.isActive = exports.loginCheck = exports.updateLoginByEmail = exports.createLogin = void 0;

var LoginRepository = _interopRequireWildcard(require("./../Repository/LoginRepository"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//create
const createLogin = async (req, res) => {
  try {
    let incomingLoginObjFromClient = req.body;
    incomingLoginObjFromClient.mailKey = "abc";
    incomingLoginObjFromClient.isActive = false;
    const createdBefore = await LoginRepository.getLoginByEmail(incomingLoginObjFromClient.email);

    if (createdBefore != null || createdBefore != undefined) {
      res.status(500).json({
        errorCode: -1,
        errorMessage: 'Bu kullanıcı kayıtlı'
      });
    }

    await LoginRepository.createLogin(incomingLoginObjFromClient);
    res.status(200).json({
      errorCode: 0,
      errorMessage: ''
    });
  } catch (error) {
    res.status(500).json({
      errorCode: -1,
      errorMessage: '....'
    });
  }
}; //activate


exports.createLogin = createLogin;

const updateLoginByEmail = async (req, res) => {
  try {
    let incomingEmailFromClient = req.body;
    await LoginRepository.updateLoginByEmail(incomingEmailFromClient);
    res.status(200).json({
      errorCode: 0,
      errorMessage: ''
    });
  } catch (error) {
    res.status(500).json({
      errorCode: -1,
      errorMessage: '....'
    });
  }
}; //login


exports.updateLoginByEmail = updateLoginByEmail;

const loginCheck = async (req, res) => {
  try {
    const incomingLoginFromClient = req.body;
    const incomingLoginFromDB = await LoginRepository.getLoginByEmail(incomingLoginFromClient.email);
    if (incomingLoginFromDB.password == incomingLoginFromClient.password && incomingLoginFromDB.isActive == 1) res.status(200).json({
      errorCode: 0
    });else {
      res.status(500).json({
        errorCode: -1,
        errorMessage: '....'
      });
    }
  } catch (error) {
    res.status(500).json({
      errorCode: -1,
      errorMessage: 'error'
    });
  }
}; //isActive


exports.loginCheck = loginCheck;

const isActive = async (req, res) => {
  try {
    const incomingLoginFromClient = req.body;
    const incomingLoginFromDB = await LoginRepository.getLoginByEmail(incomingLoginFromClient.email);
    if (incomingLoginFromDB != null) res.status(200).json(incomingLoginFromDB.isActive);else {
      res.status(500).json({
        errorCode: -1,
        errorMessage: '....'
      });
    }
  } catch (error) {
    res.status(500).json({
      errorCode: -1,
      errorMessage: '....'
    });
  }
}; //updateMailKey


exports.isActive = isActive;

const updateLoginMailKeyByEmail = async (req, res) => {
  try {
    const incomingEmailFromClient = req.body;
    await LoginRepository.updateLoginMailKeyByEmail(incomingEmailFromClient);
    res.status(200).json({
      errorCode: 0,
      errorMessage: ''
    });
  } catch (error) {
    res.status(500).json({
      errorCode: -1,
      errorMessage: '....'
    });
  }
};

exports.updateLoginMailKeyByEmail = updateLoginMailKeyByEmail;
//# sourceMappingURL=LoginService.js.map