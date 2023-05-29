
import Scan from '../models/scan';
import connectDB from '../mongodb';




export async function POST(req, { params }) {
    var data = 0
    const body = await req.json()
    try {
        await connectDB();
        data = await Scan.findOneAndUpdate(body, { $set: { lyf: 0 } }, { new: false });
    } catch (err) {
        console.log(err);
    }
    return new Response(JSON.stringify({ lyf: data.lyf }));
}