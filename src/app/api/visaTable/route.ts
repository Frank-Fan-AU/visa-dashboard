import { NextResponse } from "next/server"
import { Record } from "@/lib/models"
import { connectToDb } from "@/lib/utils"

export const GET = async () => {
    try {
        connectToDb()
        const records = await Record.find()
        console.log(records)
        return NextResponse.json(records)
    } catch (error) {
        console.log(error)
        throw new Error((error as Error).message);
    }
}