import { type NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { sign } from "jsonwebtoken";
import { z } from "zod";

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

// Validation schema
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const result = loginSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid credentials", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { email, password } = result.data;

    // Find user (in a real app, you would query your database)
    const user = users.find((user) => user.email === email);

    // Check if user exists and password matches
    if (!user || user.password !== password) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Create JWT token
    const token = sign(
      {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      process.env.NEXTAUTH_SECRET || "your-secret-key",
      { expiresIn: "7d" }
    );

    // Set JWT as HTTP-only cookie
    const cookieStore = await cookies();
    cookieStore.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
      sameSite: "strict",
    });

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
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
