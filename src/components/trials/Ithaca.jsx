import {
  headingStyle,
  subtitleStyle,
} from "../../styles/sharedStyles";

export default function Ithaca() {
  return (
    <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
      <div style={{ fontSize: 64, marginBottom: 16 }}>🏛</div>
      <h2 style={{ ...headingStyle, fontSize: 36, lineHeight: 1.3 }}>
        Welcome to Ithaca
      </h2>
      <p style={{ ...subtitleStyle, maxWidth: 560, margin: "0 auto 32px" }}>
        You survived the trials. You've felt what your users feel.
        <br />
        Now bring that empathy back to your craft.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 16,
          marginBottom: 32,
        }}
      >
        {[
          {
            emoji: "🎨",
            role: "Designers",
            tips: "Check contrast early. Don't rely on color alone. Design visible focus states. Annotate alt text.",
          },
          {
            emoji: "💻",
            role: "Developers",
            tips: "Semantic HTML first. Test with keyboard. Label every input. Use ARIA only when native HTML isn't enough.",
          },
          {
            emoji: "📋",
            role: "PMs & QA",
            tips: "Include a11y in acceptance criteria. Test with a screen reader. File bugs for missing labels.",
          },
        ].map((r) => (
          <div
            key={r.role}
            style={{
              background: "rgba(212,168,87,0.06)",
              border: "1px solid rgba(212,168,87,0.2)",
              borderRadius: 12,
              padding: 20,
              textAlign: "left",
            }}
          >
            <div style={{ fontSize: 28, marginBottom: 8 }}>{r.emoji}</div>
            <div
              style={{
                color: "#D4A857",
                fontFamily: "'Cinzel', serif",
                fontSize: 16,
                marginBottom: 8,
              }}
            >
              {r.role}
            </div>
            <p style={{ color: "#888", fontSize: 13, lineHeight: 1.6 }}>
              {r.tips}
            </p>
          </div>
        ))}
      </div>
      <div
        style={{
          background: "rgba(255,255,255,0.03)",
          borderRadius: 12,
          padding: 24,
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h3
          style={{
            color: "#e8dfd0",
            fontSize: 16,
            marginBottom: 12,
            fontFamily: "'Cinzel', serif",
          }}
        >
          Resources
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 8,
            textAlign: "left",
          }}
        >
          {[
            ["Internal Dev Guide", "WCAG 2.1 AA reference"],
            ["WCAG 2.1 Spec", "w3.org/TR/WCAG21"],
            ["WebAIM Checklist", "webaim.org/standards/wcag/checklist"],
            ["ARIA Patterns", "w3.org/WAI/ARIA/apg"],
          ].map(([name, url]) => (
            <div key={name} style={{ fontSize: 13, padding: "4px 0" }}>
              <span style={{ color: "#D4A857" }}>{name}</span>
              <span style={{ color: "#555" }}> — {url}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
