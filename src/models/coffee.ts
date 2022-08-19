import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class Coffee extends Model<InferAttributes<Coffee>, InferCreationAttributes<Coffee>>{
    declare coffeeId: number;
    declare name: string;
    declare description: string;
    declare price: number;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

export function CoffeeFactory(sequelize: Sequelize) {
    Coffee.init({
        coffeeId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    }, {
        freezeTableName: true,
        tableName: 'coffee',
        sequelize
    });
}