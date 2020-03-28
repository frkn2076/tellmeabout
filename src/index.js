import express from "express";
//import logger from './Common/Logger'
import bodyParser from "body-parser"
//import {createUser,findUserByEmail} from './Repository/UserRepository'
//import * as verdiginNaming from './Repository/UserRepository'
// verdiginNaming.findUserByEmail

import LoginController from "Controller/LoginController"
import UserInfoController from "Controller/UserInfoController"

const app = express()
const port = 3000


app.use(bodyParser.json())
//app.use(logger);

app.use("/userInfo",UserInfoController)
app.use("/login",LoginController)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))



