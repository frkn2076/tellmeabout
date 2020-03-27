"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findUserByName = exports.createUser = void 0;

var _User = _interopRequireDefault(require("../Model/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createUser = async userObject => {
  return new Promise((resolve, reject) => {
    try {
      _User.default.create(userObject);

      resolve();
    } catch (error) {
      reject();
    }
  });
};

exports.createUser = createUser;

const findUserByName = async userName => {
  return new Promise((resolve, reject) => {
    try {
      const incomingUserFromDB = _User.default.findOne({
        where: {
          name: userName
        }
      });

      resolve(incomingUserFromDB);
    } catch (error) {
      reject();
    }
  });
}; // export const findUserByTckn = async tckn => {
//     return new Promise((resolve, reject) => {
//         try {
//          const incomingUserFromDB = User.findOne({
//             where:{
//                 tckn:tckn
//             }
//          })
//             resolve(incomingUserFromDB);
//         }
//         catch (error) {
//             reject();
//         }
//     })
// }


exports.findUserByName = findUserByName;
//# sourceMappingURL=UserRepository.js.map