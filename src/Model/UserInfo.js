import Sequelize from 'sequelize'

import DatabaseConnection from 'Config/DatabaseConnection';

const Model = Sequelize.Model;
const sequelize = DatabaseConnection


class UserInfo extends Model { }


UserInfo.init({
    tckn: Sequelize.STRING,
    email: Sequelize.STRING,
    name: Sequelize.STRING,
    surname: Sequelize.STRING,
    birthDate: Sequelize.DATE,
    city: Sequelize.STRING,
    town: Sequelize.STRING,
    job: Sequelize.STRING,
    sex: Sequelize.STRING
}, { sequelize, modelName: 'UserInfo' });


UserInfo.sync({
    // force:true
})


export default UserInfo;
