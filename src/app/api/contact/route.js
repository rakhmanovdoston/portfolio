import { NextResponse } from "next/server";

export async function  POST(req) {
    const {email ,  subject , message} = await req.json();

    console.log("email", email);
    console.log("subject", subject);
    console.log("message", message);

    return NextResponse.json({msg:["hi contact from route.js"]})
}