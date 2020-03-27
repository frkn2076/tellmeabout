import Login from 'Model/Login'

export const createLogin = async loginObject => {
    return new Promise((resolve, reject) => {

        try {
            Login.create(loginObject);
            resolve();
        }
        catch (error) {
            reject();
        }
    })
}

//activate
export const updateLoginByEmail = async updateObject => {
    return new Promise((resolve, reject) => {
        try {
            Login.update(
                { isActive: 1 },
                { where:{ email:updateObject.email }
            })
            resolve();
        }
        catch (error) {
            reject();
        }
    })
}

export const getLoginByEmail = async email => {
    return new Promise((resolve, reject) => {
        try {
            const incomingLoginFromDB = Login.findOne({
                where:{
                    email:email
                }
            })
            resolve(incomingLoginFromDB);
        }
        catch (error) {
            reject();
        }
    })
}



export const updateLoginMailKeyByEmail = loginObject => {
    return new Promise((resolve, reject) => {
        try {
            Login.update(
                { mailKey: "1234" },
                { where:{ email:loginObject.email }
            })
            resolve();
        }
        catch (error) {
            reject();
        }
    })
}