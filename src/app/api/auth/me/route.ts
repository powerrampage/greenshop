import { type NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";

// In a real app, you would use a database
const users = [
  {
    id: "1",
    name: "Demo User",
    email: "user@example.com",
    password: "password123", // In a real app, this would be hashed
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Aidan",
  },
];

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth-token");

    if (!token) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    // Verify token
    const decoded = verify(
      token.value,
      process.env.NEXTAUTH_SECRET || "your-secret-key"
    ) as {
      id: string;
      email: string;
      name: string;
    };

    // Find user (in a real app, you would query your database)
    const user = users.find((user) => user.id === decoded.id);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Return user info (without password)
    return NextResponse.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
      },
    });
  } catch (error) {
    console.error("Auth error:", error);
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
}
