import getFakeVisaData from "@/lib/fakeData"
import { NextResponse } from "next/server"


export const GET = async () => {
    try {
        let posts = await getFakeVisaData()
        return NextResponse.json(posts)
    } catch (error) {
        console.log(error)
        throw new Error((error as Error).message);
    }
}