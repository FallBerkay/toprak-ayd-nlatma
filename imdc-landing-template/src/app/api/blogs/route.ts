import { NextResponse } from "next/server";

export async function GET() {
  const blogs = [
    {
      id: "b1",
      title: "The Art of Architectural Uplighting",
      excerpt: "Explore how direction and shadow shapes modern residential masonry and columns.",
      author: "IMDC Design Lab",
      date: "July 12, 2026",
      readTime: "5 min read",
      category: "DESIGN PRINCIPLES"
    },
    {
      id: "b2",
      title: "Demystifying Smart Dimming Protocols",
      excerpt: "A deep dive comparing Lutron, KNX, and Crestron setups for custom modern builds.",
      author: "IMDC Engineering",
      date: "June 28, 2026",
      readTime: "8 min read",
      category: "TECHNOLOGY"
    },
    {
      id: "b3",
      title: "Restoration of Hand-Finished Italian Brass",
      excerpt: "Maintenance best practices to retain the living finish of our organic metal surfaces.",
      author: "Studio Craftsmen",
      date: "May 15, 2026",
      readTime: "4 min read",
      category: "CRAFTSMANSHIP"
    }
  ];

  return NextResponse.json(blogs);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, excerpt, author, date, readTime, category } = body;
    
    if (!title || !excerpt || !category) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const newBlog = {
      id: `b${Math.floor(Math.random() * 1000)}`,
      title,
      excerpt,
      author: author || "IMDC Studio",
      date: date || new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      readTime: readTime || "3 min read",
      category
    };

    return NextResponse.json({ success: true, blog: newBlog }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to parse body" }, { status: 400 });
  }
}
