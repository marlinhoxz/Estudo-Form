import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const form = await req.json();

    const response = await fetch(
      "https://ranekapi.origamid.dev/json/api/usuario",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      },
    );

    const body = await response.json();
    return NextResponse.json(body);
  } catch (err: unknown) {
    return NextResponse.json(
      { err: "Erro ao se comunicar com o servidor" },
      { status: 404 },
    );
  }
}
