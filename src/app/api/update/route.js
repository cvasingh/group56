
import Scan from '../models/scan';
import connectDB from '../mongodb';




export async function POST(req, { params }) {
    var data = {}
    const body = await req.json()
    try {
        await connectDB();
        data = await Scan.findOneAndUpdate({ for: body.for }, { $set: { lyf: body.lyf } }, { new: true });
    } catch (err) {
        console.log(err);
    }
    return new Response(JSON.stringify(data));
}