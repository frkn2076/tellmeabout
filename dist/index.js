"use strict";

var _express = _interopRequireDefault(require("express"));

var _Logger = _interopRequireDefault(require("./Common/Logger"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _LoginController = _interopRequireDefault(require("./Controller/LoginController"));

var _UserInfoController = _interopRequireDefault(require("./Controller/UserInfoController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import {createUser,findUserByEmail} from './Repository/UserRepository'
//import * as verdiginNaming from './Repository/UserRepository'
// verdiginNaming.findUserByEmail
const app = (0, _express.default)();
const port = 3000;
app.use(_bodyParser.default.json());
app.use(_Logger.default);
app.use("/userInfo", _UserInfoController.default);
app.use("/login", _LoginController.default);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//# sourceMappingURL=index.js.map