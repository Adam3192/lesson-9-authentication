import { Sequelize } from "sequelize";
import { CoffeeFactory } from "./coffee";
import { UserFactory } from "./user";

const dbName = 'shopdb';
const username = 'sqluser';
const password = 'password';

const sequelize = new Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

CoffeeFactory(sequelize);
UserFactory(sequelize);

export const db = sequelize;