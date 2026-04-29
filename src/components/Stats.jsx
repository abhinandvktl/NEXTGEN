export default function Stats() {
  return (
    <>
      {/* MARQUEE */}
      <div
        id="stats"
        style={{
          overflow: "hidden",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "18px 0",
          background: "rgba(130,90,255,0.04)",
        }}
      >
        <div style={{ display: "flex" }}>
          <div className="marquee-track">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Figma",
              "Tailwind CSS",
              "PostgreSQL",
              "GraphQL",
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Figma",
              "Tailwind CSS",
              "PostgreSQL",
              "GraphQL",
            ].map((t, i) => (
              <span
                key={i}
                style={{
                  fontSize: 13,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: i % 2 === 0 ? "rgba(255,255,255,0.25)" : "rgba(130,90,255,0.7)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
