import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    dialect: 'postgres', 
  }
);


sequelize
  .authenticate()
  .then(() => {
    console.log('Успешное подключение к базе данных.', sequelize.getDatabaseName());
  })
  .catch((error) => {
    console.error('Ошибка подключения к базе данных:', error);
  });
