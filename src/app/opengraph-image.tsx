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
        <svg width="72" height="72" viewBox="0 0 64 64">
          <path d="M32 8 L54 50 L10 50 Z" fill="#1F3D2E" stroke="#77C58A" strokeWidth="2" />
          <g stroke="#F2F5F3" strokeWidth="1.3" opacity={0.9}>
            <line x1="32" y1="8" x2="19" y2="30" />
            <line x1="32" y1="8" x2="45" y2="30" />
            <line x1="19" y1="30" x2="45" y2="30" />
            <line x1="19" y1="30" x2="10" y2="50" />
            <line x1="45" y1="30" x2="54" y2="50" />
            <line x1="19" y1="30" x2="32" y2="46" />
            <line x1="45" y1="30" x2="32" y2="46" />
          </g>
          <circle cx="32" cy="8" r="3.6" fill="#07100C" stroke="#F2F5F3" strokeWidth="1.6" />
          <circle cx="19" cy="30" r="3" fill="#07100C" stroke="#F2F5F3" strokeWidth="1.6" />
          <circle cx="45" cy="30" r="3" fill="#07100C" stroke="#F2F5F3" strokeWidth="1.6" />
          <circle cx="32" cy="46" r="3" fill="#07100C" stroke="#F2F5F3" strokeWidth="1.6" />
          <circle cx="10" cy="50" r="2.4" fill="#77C58A" />
          <circle cx="54" cy="50" r="2.4" fill="#77C58A" />
        </svg>

        <div
          style={{
            marginTop: 32,
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
