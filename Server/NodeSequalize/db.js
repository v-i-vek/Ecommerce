import { Sequelize } from 'sequelize'

// connection with Database
const sequelize = new Sequelize('postgres', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres', 
    logging: false,  // Disable logging (optional)
});

export async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('✅ Database connected successfully.');
    } catch (error) {
        console.error('❌ Unable to connect to the database:', error);
    }
}


