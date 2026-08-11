import { NextResponse } from "next/server";

export async function GET() {
  const slides = [
    {
      id: "s1",
      highlight: "Lighting",
      rest: "that defines your space.",
      subtitle: "Curated luxury lighting for interiors that inspire."
    },
    {
      id: "s2",
      highlight: "Design",
      rest: "crafted with precision.",
      subtitle: "Architectural fixtures designed to merge art and engineering."
    },
    {
      id: "s3",
      highlight: "Elegance",
      rest: "in every single detail.",
      subtitle: "Bespoke brass and crystal systems for exclusive residences."
    },
    {
      id: "s4",
      highlight: "Atmosphere",
      rest: "tailored to your lifestyle.",
      subtitle: "Smart sensory illumination systems controlled effortlessly."
    },
    {
      id: "s5",
      highlight: "Innovation",
      rest: "meeting timeless art.",
      subtitle: "Leading modern tech meets heritage Italian craftsmanship."
    }
  ];

  return NextResponse.json(slides);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { highlight, rest, subtitle } = body;
    
    if (!highlight || !rest || !subtitle) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const newSlide = {
      id: `s${Math.floor(Math.random() * 1000)}`,
      highlight,
      rest,
      subtitle
    };

    return NextResponse.json({ success: true, slide: newSlide }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to parse body" }, { status: 400 });
  }
}
