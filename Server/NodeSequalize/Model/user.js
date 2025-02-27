import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";  // Corrected import path

export const user = sequelize.define('user', {
    id: {
        type: DataTypes.UUID,  // ✅ Use UUID (no SERIAL)
        defaultValue: DataTypes.UUIDV4,  // ✅ Default to UUIDv4
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    }
});