import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

export async function GET(request) {
  const session = await getServerSession(authOptions);

  return NextResponse.json({
    authenticated: !!session,
    session,
  });
}
