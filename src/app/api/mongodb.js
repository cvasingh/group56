import mongoose from 'mongoose';

const connectDB = async () => mongoose.connect(process.env.mongodburl);

export default connectDB;
