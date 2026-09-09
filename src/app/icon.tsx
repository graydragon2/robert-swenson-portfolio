import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#07100C",
        }}
      >
        <svg width="52" height="52" viewBox="0 0 64 64">
          <path
            d="M32 8 L54 50 L10 50 Z"
            fill="#1F3D2E"
            stroke="#77C58A"
            strokeWidth="2"
          />
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
      </div>
    ),
    { ...size }
  );
}
