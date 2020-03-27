export const databaseConfig = Object.freeze({
    SCHEME_NAME: "testdb",
    USER_NAME: "root",
    USER_PASSWORD: "toortoor",
    // HOST: "localhost",
    	HOST: process.env.DB_HOSTNAME,
    DIALECT: "mysql",
    port: "3306",
    connectionLimit: 10
  });
