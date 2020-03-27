import Sequelize from 'sequelize'

import DatabaseConnection from 'Config/DatabaseConnection';

const Model = Sequelize.Model;
const sequelize = DatabaseConnection


class Login extends Model { }


Login.init({
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    mailKey: Sequelize.STRING,
    isActive: Sequelize.BOOLEAN
}, { sequelize, modelName: 'Login' });

Login.sync({
    // force:true
})


export default Login;
