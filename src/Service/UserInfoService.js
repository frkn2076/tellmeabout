import * as UserInfoRepository from './../Repository/UserInfoRepository';



export const createUserInfo = async (req, res) => {
    try {
        const incomingLoginObjFromClient = req.body;
        await UserInfoRepository.createUserInfo(incomingLoginObjFromClient);
        res.status(200).json({
            errorCode: 0,
            errorMessage: ''
        })
    } catch (error) {
        res.status(500).json({
            errorCode: -1,
            errorMessage: '....'
        })
    }

}


export const completeUserInfo = async (req, res) => {
    try {
        const incomingLoginObjFromClient = req.body;
        await UserInfoRepository.completeUserInfo(incomingLoginObjFromClient);
        res.status(200).json({
            errorCode: 0,
            errorMessage: ''
        })
    } catch (error) {
        res.status(500).json({
            errorCode: -1,
            errorMessage: '....'
        })
    }
}