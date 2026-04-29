import { NextRequest, NextResponse } from "next/server";
import { handle as openaiHandler } from "openai";

export async function handle(
  req: NextRequest,
  { params }: { params: { path: string[] } },
) 
{
	return openaiHandler(req, { params });
}
