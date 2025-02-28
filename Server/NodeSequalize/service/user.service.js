
export const addUser = async () => {
    try {
        // await sequelize.sync(); // ✅ Ensure tables are created
        // const newUser = await user.create({
        //     firstName: "Vivek",
        //     lastName: "Yadav",
        // });
        console.log('✅ User added:');
    } catch (error) {
        throw error('❌ Error while executing addUser():', error);
    }
};