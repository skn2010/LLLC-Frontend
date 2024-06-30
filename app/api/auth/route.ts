import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

// To store credentials and user's info on cookies after successfully login
export async function POST(req: NextRequest) {
  const data = await req.json();

  // Data validation: You can use zod npm package to verify your data.
  if (!data.user) {
    return NextResponse.json(
      { message: "User data not found." },
      { status: 400 }
    );
  }

  if (!data.token.trim()) {
    return NextResponse.json({ message: "Token not found." }, { status: 400 });
  }

  // Now, let's set user and token in cookies
  try {
    const days = 24 * 60 * 60 * 1000 * 28; // automatically clear after 28 days

    cookies().set({
      name: "token",
      value: data.token,
      httpOnly: true,
      secure: true,
      sameSite: true,
      expires: Date.now() + days,
    });

    cookies().set({
      name: "user",
      value: JSON.stringify(data.user || {}),
      httpOnly: true,
      secure: true,
      sameSite: true,
      expires: Date.now() + days,
    });

    return NextResponse.json({ message: "Login successful." });
  } catch {
    return NextResponse.json(
      { message: "Internal serve error." },
      { status: 500 }
    );
  }
}

// Route to get user's info and credential from the cookies
export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value;
    const userInString: any = req.cookies.get("user")?.value;
    const user = JSON.parse(userInString);

    return NextResponse.json({ user, token });
  } catch {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
}

// Route to delete user's info and credential from the cookies
export async function DELETE(_req: NextRequest) {
  cookies().delete("token");
  cookies().delete("user");

  return NextResponse.json({ message: "Logout successful." });
}
