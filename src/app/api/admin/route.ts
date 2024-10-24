import { NextResponse } from "next/server";
import { Record } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { formSchema } from "@/lib/schema";

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
    const body: unknown = await request.json();
    const params = formSchema.safeParse(body);
    console.log(params);
    if (!params.success) {
      throw new Error(params.error.issues[0].message);
    }
    let res = await Record.create(params.data);

    return NextResponse.json({});
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export async function DELETE(request: Request) {
  try {
    await connectToDb();
    // 获取请求中的 id
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "No ID provided" }, { status: 400 });
    }
    const record = await Record.findByIdAndDelete(id);
    if (!record) {
      return NextResponse.json({ error: "Record not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Record deleted successfully" });
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
