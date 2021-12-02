import Sequelize from 'sequelize';

const Database = new Sequelize(
    'postgres',
    'postgres',
    '123456',
    {
        host: 'localhost',
        port: 5432,
        dialect: 'postgres'
    } 
);

export default Database;