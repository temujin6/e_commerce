import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// Хэрэглэгчийн мэдээллийг ID-гаар устгах
export async function DELETE(req, { params }) {
  try {
    const id = params.id;

    const [result] = await db.query("DELETE FROM users WHERE id = ?", [id]);

    return NextResponse.json({
      success: true,
      affectedRows: result.affectedRows,
      message: "Амжилттай устгагдлаа",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Delete error",
      },
      { status: 500 }
    );
  }
}
