"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findUserByName = exports.createUser = void 0;

var UserRepository = _interopRequireWildcard(require("./../Repository/UserRepository"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const createUser = async (req, res) => {
  try {
    const incomingUserObjFromClient = req.body;
    await UserRepository.createUser(incomingUserObjFromClient);
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

exports.createUser = createUser;

const findUserByName = async (req, res) => {
  try {
    const incomingUserFromDB = await UserRepository.findUserByName(req.body.name);
    res.status(200).json(incomingUserFromDB);
  } catch (error) {
    res.status(500).json({
      errorCode: -1,
      errorMessage: '....'
    });
  }
};

exports.findUserByName = findUserByName;
//# sourceMappingURL=UserService.js.map