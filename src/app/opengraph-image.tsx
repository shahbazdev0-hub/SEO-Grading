import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0f172a",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(37,99,235,0.55), transparent 45%), radial-gradient(circle at 85% 85%, rgba(14,165,233,0.35), transparent 45%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg,#3b82f6,#1d4ed8)",
            }}
          />
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: "#ffffff" }}>
            <span>SEO&nbsp;</span>
            <span style={{ color: "#60a5fa" }}>Grading</span>
          </div>
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 58,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Guest Posting, Link Building &amp; SEO Services
        </div>
        <div style={{ marginTop: 28, fontSize: 26, color: "#cbd5e1", maxWidth: 820 }}>
          {siteConfig.description}
        </div>
      </div>
    ),
    { ...size }
  );
}
