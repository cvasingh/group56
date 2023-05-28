
import { NextResponse } from 'next/server';
import Scan from '../models/scan';
import connectDB from '../mongodb';


export async function GET(req, { params }) {
    var data = 0
    try {
        await connectDB();
        data = await Scan.findOne({ for: 'nextjs' }, { _id: 0 });
        await Scan.updateOne({
            for: 'nextjs'
        },
            { lyf: 0 })
    } catch (err) {
        console.log(err);
    }
    return NextResponse.json({ lyf: data.lyf });
}