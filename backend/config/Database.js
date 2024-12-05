import { Sequelize } from "sequelize";

const db = new Sequelize('db_sirapor', 'root', '', {
    host: 'localhost',
    port: 3308,
    dialect: 'mysql',
  });

export default db;
