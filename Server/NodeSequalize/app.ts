import { sequelize } from './db.js';
import { User } from './Model/user.js';

async function addUser() {
  try {
    // ✅ Insert a user into the database
    const newUser = await User.create({
      firstName: 'Vivek',
      lastName: 'Yadav',
    });

    console.log("🎉 User added successfully:", newUser.toJSON());
  } catch (error) {
    console.error("❌ Error adding user:", error);
  }
}

// ✅ Ensure database is ready before inserting
sequelize.authenticate().then(() => {
  console.log("✅ Connected to the database.");
  addUser();
});
