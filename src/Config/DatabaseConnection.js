import Sequelize from "sequelize";
import { databaseConfig } from "Config/DatabaseConfig";

const sequelize = new Sequelize(
	databaseConfig.SCHEME_NAME,
	databaseConfig.USER_NAME,
	databaseConfig.USER_PASSWORD,
	{
		host: databaseConfig.HOST,
		dialect: databaseConfig.DIALECT,
		define: {
			timestamps: false
		}
	}
);


export default sequelize;