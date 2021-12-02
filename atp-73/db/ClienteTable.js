import { Sequelize } from "sequelize";
import Database from "./Database.js";

const ClienteTable = Database.define( 'clientenew',{
    nome:{
        type: Sequelize.STRING,
    },
    sobrenome:{
        type: Sequelize.STRING,
    },
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }

});

export default ClienteTable;