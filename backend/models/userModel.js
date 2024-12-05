import {Sequelize,DataTypes} from "sequelize";
import db from "../config/Database.js";
import Role from "./roleModel.js";

// const DataTypes = Sequelize;
const Users = db.define('users',{
    id_user:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    id_role:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        },
    },
    is_active: {
        type: DataTypes.ENUM('active', 'inactive'), 
        defaultValue: 'active',
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('0', '1'), 
        defaultValue: '0',
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW, 
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true, 
    },
},{
    freezeTableName: true,
    timestamps: false
});

Role.hasMany(Users, {foreignKey:'id_role'});
Users.belongsTo(Role, {foreignKey:'id_role'});

export default Users;