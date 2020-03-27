"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.completeUserInfo = exports.createUserInfo = void 0;

var UserInfoRepository = _interopRequireWildcard(require("./../Repository/UserInfoRepository"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const createUserInfo = async (req, res) => {
  try {
    const incomingLoginObjFromClient = req.body;
    await UserInfoRepository.createUserInfo(incomingLoginObjFromClient);
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

exports.createUserInfo = createUserInfo;

const completeUserInfo = async (req, res) => {
  try {
    const incomingLoginObjFromClient = req.body;
    await UserInfoRepository.completeUserInfo(incomingLoginObjFromClient);
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

exports.completeUserInfo = completeUserInfo;
//# sourceMappingURL=UserInfoService.js.map