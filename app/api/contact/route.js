import { prisma } from "@/lib/prisma"; // <- correct path to your prisma.ts

export async function POST(req) {
  try {
    const data = await req.json();

    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        message: data.message,
      },
    });

    return new Response(JSON.stringify({ message: "Message sent!", user }), {
      status: 200,
    });
  } catch (error) {
    console.error(error); 
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  } 
}
