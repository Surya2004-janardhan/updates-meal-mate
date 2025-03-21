import mongoose from "mongoose";

// const mongo_uri = 'keep_mongodb_uri_later';
const mongo_uri = 'mongodb+srv://foodie:foodie@cluster0.brvjn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


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
