import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "BioAIguru - Bioinformatics Services";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #4a78b5 0%, #3d6a9f 50%, #2d5a8f 100%)",
          position: "relative",
        }}
      >
        {/* Background pattern overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.05) 2px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.03)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -50,
            left: -50,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.03)",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 10,
          }}
        >
          {/* Company name */}
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: "white",
              fontFamily: "Georgia, serif",
              letterSpacing: "-2px",
              marginBottom: 16,
            }}
          >
            BioAIguru
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 32,
              color: "rgba(255,255,255,0.9)",
              fontFamily: "sans-serif",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            Bioinformatics Solutions
          </div>

          {/* Accent line */}
          <div
            style={{
              width: 200,
              height: 3,
              background: "rgba(255,255,255,0.3)",
              borderRadius: 2,
              marginBottom: 24,
            }}
          />

          {/* Services */}
          <div
            style={{
              fontSize: 22,
              color: "rgba(255,255,255,0.7)",
              fontFamily: "sans-serif",
              display: "flex",
              gap: 32,
            }}
          >
            <span>Genomics</span>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>•</span>
            <span>Data Analysis</span>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>•</span>
            <span>Research Consulting</span>
          </div>
        </div>

        {/* Location badge */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 24px",
            background: "rgba(255,255,255,0.1)",
            borderRadius: 20,
            fontSize: 14,
            color: "rgba(255,255,255,0.8)",
            fontFamily: "sans-serif",
          }}
        >
          Sonipat, Haryana, India
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
