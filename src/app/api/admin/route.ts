import { NextResponse } from "next/server";
import { Record } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { newFormSchema } from "@/lib/schema";

export const GET = async () => {
  try {
    connectToDb();
    const records = await Record.find();

    return NextResponse.json(records);
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const POST = async (request: Request) => {
    try {
        connectToDb();
        const body:unknown = await request.json()
        const params = newFormSchema.safeParse(body)
        if(!params.success){
            throw new Error(params.error.issues[0].message)
        }
        let res = await Record.create(params.data)

        return NextResponse.json({})
    }catch(error){
        throw new Error((error as Error).message);
    }
}
