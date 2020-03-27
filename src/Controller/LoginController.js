import express from 'express';
import * as LoginService from 'Service/LoginService';
import * as KPS from 'ExternalService/KPS'

const router = express.Router();

router.post("/create",(req,res) => {
    LoginService.createLogin(req,res)
})

router.post("/activate",(req,res) => {
    LoginService.updateLoginByEmail(req,res)
})

router.post("/isActive",(req,res) => {
    LoginService.isActive(req,res)
})

router.post("/updateMailKey",(req,res) => {
    LoginService.updateLoginMailKeyByEmail(req,res)
})

router.post("/login",(req,res) => {
    LoginService.loginCheck(req,res)
})

router.post("/kps",(req,res) => {
    KPS.kpsCheck(req,res)
})


export default router;