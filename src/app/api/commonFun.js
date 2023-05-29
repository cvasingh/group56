import User from "./models/users";
import connectDB from "./mongodb";

export async function getDetailsWithEmail(email) {
    await connectDB();
    return await User.findOne({ email }, { _id: 0 });
}