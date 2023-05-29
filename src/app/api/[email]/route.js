
import User from '../models/users';
import { getDetailsWithEmail } from '../commonFun';

export function getQSParamFromURL(key, url) {
    if (!url) return "";
    const search = new URL(url).search;
    const urlParams = new URLSearchParams(search);
    return urlParams.get(key);
}
export async function GET(req, { params }) {
    var res = {}
    const { email } = params;
    const password = await getQSParamFromURL('password', req.url);
    try {
        let user = await getDetailsWithEmail(email)
        if (user) {
            if (user.password === password) {
                res = { msg: 'Login Successfull', status: true }
            } else {
                res = { msg: 'Password not match', status: false }
            }
        } else {
            res = { msg: 'Email id not exits', status: false }
        }
    } catch (err) {
        res = { msg: 'something went wrong please try again', status: false };
        console.log(err);
    }
    return new Response(JSON.stringify(res));
}

export async function POST(req, { params }) {
    var res = {}
    const { email } = params;
    const body = await req.json()
    try {
        let user = await getDetailsWithEmail(email)
        if (!user) {
            const temp = new User(body)
            await temp.save()
            res = { msg: 'User added successfully', status: true }
        } else {
            res = { msg: 'Email already exits', status: false }
        }
    } catch (err) {
        res = { msg: 'something went wrong please try again', status: false };
        console.log(err);
    }
    return new Response(JSON.stringify(res));
}