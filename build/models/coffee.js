"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeFactory = exports.Coffee = void 0;
const sequelize_1 = require("sequelize");
class Coffee extends sequelize_1.Model {
}
exports.Coffee = Coffee;
function CoffeeFactory(sequelize) {
    Coffee.init({
        coffeeId: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        }
    }, {
        freezeTableName: true,
        tableName: 'coffee',
        sequelize
    });
}
exports.CoffeeFactory = CoffeeFactory;
