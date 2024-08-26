import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest) {
  try {
    const url = request.nextUrl.searchParams.get("url");

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    // Fetch the content from the external URL using axios
    const response = await axios.get(url, {
      responseType: "arraybuffer",
      headers: {
        "User-Agent": request.headers.get("user-agent"),
        Accept: request.headers.get("accept"),
      },
    });

    // Return the fetched content with the correct headers
    return new NextResponse(response.data, {
      headers: {
        "Content-Type": response.headers["content-type"],
      },
    });
  } catch (error) {
    console.error("Error fetching content:", error);
    return NextResponse.json(
      { error: "Failed to fetch the content." },
      { status: 500 },
    );
  }
}
