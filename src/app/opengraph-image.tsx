import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "radial-gradient(circle at top, rgba(91,211,140,0.28), transparent 28%), linear-gradient(135deg, #071114 0%, #102127 52%, #071114 100%)",
          color: "#f6faf8",
          padding: 64,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 32,
            padding: 48,
            background: "rgba(10,20,24,0.58)",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 16,
              alignItems: "center",
              color: "#89f0af",
              fontSize: 28,
            }}
          >
            <span>Full-Stack Developer</span>
            <span style={{ color: "rgba(246,250,248,0.5)" }}>•</span>
            <span>AI SaaS Systems</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontSize: 72, fontWeight: 700 }}>Ali Raza</div>
            <div
              style={{
                fontSize: 36,
                maxWidth: 820,
                color: "rgba(246,250,248,0.82)",
              }}
            >
              Building scalable AI-powered SaaS products, backend systems, and
              modern production web applications.
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
