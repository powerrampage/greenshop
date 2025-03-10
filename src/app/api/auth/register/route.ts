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
const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const result = registerSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid input", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, password } = result.data;

    // Check if user already exists
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 409 }
      );
    }

    // In a real app, you would hash the password and save to database
    // For demo, we'll just pretend we created a new user
    const newUser = {
      id: `${users.length + 1}`,
      name,
      email,
      password, // In a real app, this would be hashed
      image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Aidan",
    };

    // Create JWT token
    const token = sign(
      {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
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
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        image: newUser.image,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
