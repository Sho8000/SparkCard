import prisma from "@/app/lib/db";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.email) {
      return NextResponse.json({ message: "Missing title or content" });
    }

    const newUser = await prisma.user.create({
      data: {
        email: body.email,
      },
    });

    return NextResponse.json({
      message: "Post Added successfully",
      post: newUser,
    });
  } catch (error) {
    console.log(error)
  }
}
