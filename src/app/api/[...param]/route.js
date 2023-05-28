
import { NextResponse } from 'next/server';
import User from '../models/users';
import { getDetailsWithEmail } from '../commonFun';


export async function GET(req, { params }) {
    const { param } = params;
    const email = param[0] ?? null
    var data = {}
    try {
        data = await getDetailsWithEmail(email)
    } catch (error) {
        data = null;
    }
    return NextResponse.json(data);
}

export async function POST(req, { params }) {
    var data = null
    const body = await req.json()
    try {
        data = await getDetailsWithEmail(body.email);
        if (data === null) {
            const temp = new User(body)
            await temp.save()
            data = 'user added'
        } else {
            data = 'already exit'
        }
    } catch (error) {
        console.log(error);
    }
    return NextResponse.json(data);
}