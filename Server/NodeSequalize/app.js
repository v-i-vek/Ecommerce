import express from 'express';
import { testConnection, sequelize } from './db.js';  // ✅ Fix import
import { user } from './Model/user.js';  // ✅ Fix import

const app = express();
app.use(express.json()); // ✅ Enable JSON parsing

// Test DB connection
await testConnection();

// Function to insert a user
const addUser = async () => {
    try {
        await sequelize.sync(); // ✅ Ensure tables are created
        const newUser = await user.create({
            firstName: "Vivek",
            lastName: "Yadav",
        });
        console.log('✅ User added:', newUser.toJSON());
    } catch (error) {
        console.error('❌ Error adding user:', error);
    }
};

// Start Express Server
const PORT = 8888;
app.listen(PORT, async () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    await addUser(); // ✅ Call addUser after server starts
});
