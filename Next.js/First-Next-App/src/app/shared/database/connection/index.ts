import mongoose from 'mongoose';

export const connect = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGOURI!)
        if (connection) {
            console.log("Database connected successfully");
        }
    } catch (error) {
        console.error("Database connection failed:", error);
    }
};