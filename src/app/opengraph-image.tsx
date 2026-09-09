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
        <svg width="90" height="90" viewBox="0 0 1000 1000">
          <rect width="1000" height="1000" rx="180" fill="#07100d" />
          <g
            fill="none"
            stroke="#6fbf8b"
            strokeWidth="22"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M145 650 L350 370 L470 520 L610 285 L855 650" />
            <path d="M185 650 H815" />
            <path d="M350 370 L610 285 M470 520 L720 495" />
            <circle cx="350" cy="370" r="28" fill="#07100d" />
            <circle cx="470" cy="520" r="28" fill="#07100d" />
            <circle cx="610" cy="285" r="28" fill="#07100d" />
            <circle cx="720" cy="495" r="28" fill="#07100d" />
          </g>
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
