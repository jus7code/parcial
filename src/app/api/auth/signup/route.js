import { NextResponse } from "next/server";
import {prisma} from "@/lib/db";
import bcrypt from "bcrypt";


export async function POST(request){
    try{
        const data =await request.json()


        const hashpassword = await bcrypt.hash(data.password,10)
        const newUser = await prisma.estudiante.create({
            data:{
                name: data.name,
                email: data.email,
                password: hashpassword,
            }
        })
    
        const {password:_,...estudiante} = newUser
        return NextResponse.json(estudiante)
    }
    catch(error){
        return NextResponse.json({message:error.message,},{status: 500,})
    }
}