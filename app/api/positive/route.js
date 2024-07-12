import CONNECT_DATABASE from "@/app/config/connection"
import details from "@/app/modal/PositiveModal";
import { NextResponse } from "next/server";

export const POST = async (req, { params }) => {
    // console.log('req check ',req)
    await CONNECT_DATABASE();
    try {
        const body = await req.json();
        // console.log('body check', body)
        const toSave = await details(body);
        // console.log('to Saved check', toSave);
        const saved = await toSave.save();
        console.log('saved', saved);

        if(saved){
            return NextResponse.json({message:'Saved Your Details'},{status:200})
        }else{
            return NextResponse.json({message:'Failed to Saved Details'},{status:200})
        }

    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}