import * as LoginRepository from './../Repository/LoginRepository';


//create
export const createLogin = async (req, res) => {
    try {

        let incomingLoginObjFromClient = req.body;
        incomingLoginObjFromClient.mailKey = "abc";
        incomingLoginObjFromClient.isActive = false;
        const createdBefore = await LoginRepository.getLoginByEmail(incomingLoginObjFromClient.email);
        if(createdBefore != null || createdBefore != undefined){
            res.status(500).json({
                errorCode: -1,
                errorMessage: 'Bu kullanıcı kayıtlı'
            })
        }
        await LoginRepository.createLogin(incomingLoginObjFromClient);

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
//activate
export const updateLoginByEmail = async (req, res) => {
    try {

        let incomingEmailFromClient = req.body;
        await LoginRepository.updateLoginByEmail(incomingEmailFromClient);
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

//login
export const loginCheck = async (req, res) => {
    try {
        const incomingLoginFromClient = req.body;
        const incomingLoginFromDB = await LoginRepository.getLoginByEmail(incomingLoginFromClient.email);
        if(incomingLoginFromDB.password == incomingLoginFromClient.password && incomingLoginFromDB.isActive == 1)
            res.status(200).json({errorCode: 0})
        else{
            res.status(500).json({
                errorCode: -1,
                errorMessage: '....'
            })
        }
    }
    catch (error) {
        res.status(500).json({
            errorCode: -1,
            errorMessage: 'error'
        })
    }
}

//isActive
export const isActive = async (req, res) => {
    try {
        const incomingLoginFromClient = req.body;
        const incomingLoginFromDB = await LoginRepository.getLoginByEmail(incomingLoginFromClient.email);
        if(incomingLoginFromDB != null)
            res.status(200).json(incomingLoginFromDB.isActive)
        else{
            res.status(500).json({
                errorCode: -1,
                errorMessage: '....'
            })
        }
    }
    catch (error) {
        res.status(500).json({
            errorCode: -1,
            errorMessage: '....'
        })
    }
}


//updateMailKey
export const updateLoginMailKeyByEmail = async (req, res) => {
    try {
        const incomingEmailFromClient = req.body;
        await LoginRepository.updateLoginMailKeyByEmail(incomingEmailFromClient);
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
