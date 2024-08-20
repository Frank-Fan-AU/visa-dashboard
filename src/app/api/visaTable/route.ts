import { NextResponse } from "next/server"
import { Record } from "@/lib/models"
import { connectToDb } from "@/lib/utils"

export const GET = async () => {
    try {
        connectToDb()
        const records = await Record.find()
       
        return NextResponse.json(records)
    } catch (error) {
        
        throw new Error((error as Error).message);
    }
}