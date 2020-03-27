import express from 'express';
import * as UserInfoService from 'Service/UserInfoService';

const router = express.Router();

router.post("/create",(req,res) => {
    UserInfoService.createUserInfo(req,res)
})

router.post("/complete",(req,res) => {
    UserInfoService.completeUserInfo(req,res)
})

export default router;