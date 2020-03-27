import UserInfo from 'Model/UserInfo'

export const createUserInfo = async userInfoObject => {
    return new Promise((resolve, reject) => {
        try {
            UserInfo.create(userInfoObject);
            resolve();
        }
        catch (error) {
            reject();
        }
    })
}

export const completeUserInfo = async userInfoObject => {
    return new Promise((resolve, reject) => {
        try {
            UserInfo.update(
                {   city : userInfoObject.city,
                    town : userInfoObject.town,
                    job  : userInfoObject.job,
                    sex  : userInfoObject.sex     
                },
                { where:{ email: userInfoObject.email }
            })
            resolve();
        }
        catch (error) {
            reject();
        }
    })
}


