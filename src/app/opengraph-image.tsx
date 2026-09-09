import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          backgroundColor: "#07100C",
          backgroundImage:
            "linear-gradient(rgba(119,197,138,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(119,197,138,0.12) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <div
          style={{
            fontSize: 30,
            color: "#77C58A",
            letterSpacing: 4,
            fontFamily: "monospace",
            display: "flex",
          }}
        >
          {site.descriptor}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 64,
            fontWeight: 700,
            color: "#F2F5F3",
            display: "flex",
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            color: "#8D9C92",
            maxWidth: 900,
            display: "flex",
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
