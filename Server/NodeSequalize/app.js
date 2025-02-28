import express from 'express';
import { testConnection, sequelize } from './db.js';  // ✅ Fix import
import mainRoute from './routes/index.js';
const app = express();

app.use(express.json()); // ✅ Enable JSON parsing

// Test DB connection
await testConnection();

app.use('/v1',mainRoute)

const PORT = 8888;
app.listen(PORT, async () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    // await addUser(); // ✅ Call addUser after server starts
});
