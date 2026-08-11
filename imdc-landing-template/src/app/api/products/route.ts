import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    {
      id: "p1",
      name: "IMDC Globe GL-9063",
      categoryName: "OPAL",
      description: "Brilliant white PMMA acrylic globe fixture with an impact-resistant black ABS polymer base.",
      price: "$145",
      image: "/globe-opal.jpg",
      versions: ["GL-9063 (20cm)", "GL-9066 (25cm)", "GL-9070 (30cm)", "GL-9074 (40cm)"]
    },
    {
      id: "p2",
      name: "IMDC Globe GL-9067",
      categoryName: "PRISMATIC",
      description: "Vertical linear-ribbed PMMA globe casting elegant refractive light lines and glints.",
      price: "$165",
      image: "/globe-prismatic.jpg",
      versions: ["GL-9062 (20cm)", "GL-9067 (25cm)", "GL-9071 (30cm)", "GL-9075 (40cm)"]
    },
    {
      id: "p3",
      name: "IMDC Globe GL-9065",
      categoryName: "SMOKED",
      description: "Translucent smoke-grey acrylic sphere revealing warm soft filament luminance.",
      price: "$185",
      image: "/globe-fume.jpg",
      versions: ["GL-9065 (25cm)", "GL-9069 (30cm)", "GL-9073 (40cm)"]
    },
    {
      id: "p4",
      name: "IMDC Globe GL-1350",
      categoryName: "DUAL DOME",
      description: "Reflective black top-dome shell shielding direct uplight with white opal bottom diffuser.",
      price: "$220",
      image: "/globe-dualdome.jpg",
      versions: ["GL-1320 (25cm)", "GL-1330 (30cm)", "GL-1350 (40cm)"]
    },
    {
      id: "p5",
      name: "IMDC Globe GL-9076",
      categoryName: "OPAL",
      description: "Specialized colourful dome accented PMMA sphere detailing E27 outdoor lamp socket.",
      price: "$155",
      image: "/globe-opal.jpg",
      versions: ["GL-9076 (20cm)", "GL-9078 (20cm Prismatic)"]
    },
    {
      id: "p6",
      name: "IMDC Globe GL-9081",
      categoryName: "DUAL DOME",
      description: "Cone shaped roofed dome structure optimized for premium landscape and garden installations.",
      price: "$210",
      image: "/globe-dualdome.jpg",
      versions: ["GL-9079 (20cm Clear)", "GL-9080 (20cm Prismatic)", "GL-9081 (20cm Opal)"]
    },
    {
      id: "p7",
      name: "IMDC Globe GL-9084",
      categoryName: "PRISMATIC",
      description: "Waved mill-cut structured PMMA globe for premium multi-directional light glow.",
      price: "$175",
      image: "/globe-prismatic.jpg",
      versions: ["GL-9082 (20cm Clear)", "GL-9083 (20cm Prismatic)", "GL-9084 (20cm Opal)"]
    },
    {
      id: "p8",
      name: "IMDC Globe GL-9093",
      categoryName: "DUAL DOME",
      description: "Distinct geometric pyramid shell globe system casting ambient pathways guidance lighting.",
      price: "$240",
      image: "/globe-dualdome.jpg",
      versions: ["GL-9091 (20cm Clear)", "GL-9092 (20cm Prismatic)", "GL-9093 (20cm Opal)"]
    }
  ];

  return NextResponse.json(products);
}

// POST endpoint handler mockup for adding a product (useful for admin panel setup)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, categoryName, description, price, image, versions } = body;
    
    // Validate inputs
    if (!name || !categoryName || !price || !versions || !Array.isArray(versions)) {
      return NextResponse.json({ error: "Missing required fields or invalid versions list" }, { status: 400 });
    }

    const newProduct = {
      id: `p${Math.floor(Math.random() * 1000)}`,
      name,
      categoryName,
      description: description || "",
      price,
      image: image || "/pendant-light.jpg",
      versions
    };

    return NextResponse.json({ success: true, product: newProduct }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to parse body" }, { status: 400 });
  }
}
