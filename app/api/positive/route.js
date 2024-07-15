import CONNECT_DATABASE from "@/app/config/connection"
import details from "@/app/modal/PositiveModal";
import { NextResponse } from "next/server";

export const POST = async (req, { params }) => {
    // console.log('req check ',req)
    await CONNECT_DATABASE();
    try {
        const body = await req.json();
        console.log('body check', body.email)
        const isUserExist = await details.findOne({email:body.email});
        // console.log('is user ', isUserExist);
        if(isUserExist){
            // console.log("Already Registered")
            return NextResponse.json({message:"This Email is Already Registered"},{status:200})
         }

         if(!isUserExist){
            const toSave = await details(body);
            // console.log('tosave',toSave)
            const saved = await toSave.save();
            // console.log("saved body",saved)
            if(saved){
               return  NextResponse.json({message:"Saved Your Details"},{status:200})
            }
            if(!saved){
              return  NextResponse.json({message:"Failed to Saved Details"},{status:200})
            }
           
         }

    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}


