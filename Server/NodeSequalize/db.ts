import { Sequelize } from '@sequelize/core';
import { User } from './Model/user.js'; // Ensure correct import (use `.js` if transpiling from TS)
import { PostgresDialect } from '@sequelize/postgres';

export const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: 'postgres',
  user: 'postgres',
  password: 'root',
  host: 'localhost',
  port: 5432,
  ssl: true,
  clientMinMessages: 'notice',
  models: [User], // ✅ Register the User model
});

// ✅ Sync database
async function initializeDB() {
  try {
    await sequelize.sync({ alter: true }); // Ensure tables are created/updated
    console.log("✅ Database synchronized successfully.");
  } catch (error) {
    console.error("❌ Database sync error:", error);
  }
}

initializeDB();
