import User from "./models/users";

export async function getDetailsWithEmail(email) {
    await connectDB();
    return await User.findOne({ email }, { _id: 0 });
}