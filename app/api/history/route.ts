import { NextResponse } from "next/server";
import { db } from "@/utils/db";
import { AIOuput } from "@/utils/Schema";
import { desc, eq } from "drizzle-orm"; // Import eq for equality comparison
import { auth } from "@clerk/nextjs/server"; // Import auth from Clerk

export async function GET(request: Request) { // Add request parameter to access user info
  try {
    const { userId } = await auth(); // Get userId from Clerk and await it

    if (!userId) {
      return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
    }

    console.log('Clerk userId:', userId); // Debug: log userId
    const results = await db.select().from(AIOuput)
      .where(eq(AIOuput.createdBy, userId)) // Filter by createdBy
      .orderBy(desc(AIOuput.id));
    console.log('DB results:', results); // Debug: log DB results
    // Map DB fields to UI fields
    const mapped = results.map((item) => ({
      id: item.id,
      template: item.templateSlug,
      aiResp: item.aiResponse,
      date: item.createdAt ? new Date(item.createdAt).toLocaleDateString() : "",
      words: item.aiResponse ? item.aiResponse.split(/\s+/).length : 0,
      // Optionally, add icon logic here based on templateSlug
    }));
    return NextResponse.json({ data: mapped });
  } catch (e) {
    return NextResponse.json({ error: "Failed to fetch history" }, { status: 500 });
  }
}
