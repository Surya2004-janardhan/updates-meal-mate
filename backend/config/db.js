import mongoose from "mongoose";

const mongo_uri = 'mongodb+srv://foodie:xzZ0U6XawpnBJdFh@cluster0.brvjn.mongodb.net/foodie';

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongo_uri, {
            // useUnifiedTopology: true,
            // useNewUrlParser: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};