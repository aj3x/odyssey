import {
  btnGold,
  headingStyle,
  subtitleStyle,
} from "../styles/sharedStyles";
import { TRIAL_METADATA } from "../constants/trials";

export default function HomeScreen({ onStart }) {
  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: 700,
        margin: "0 auto",
        paddingTop: 24,
      }}
    >
      <div
        style={{
          fontSize: 13,
          color: "#D4A857",
          fontFamily: "'Cinzel', serif",
          letterSpacing: 4,
          marginBottom: 24,
          textTransform: "uppercase",
        }}
      >
        The Odyssey of
      </div>
      <h1
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: 52,
          color: "#e8dfd0",
          lineHeight: 1.15,
          marginBottom: 16,
          fontWeight: 700,
        }}
      >
        Accessibility
      </h1>
      <div
        style={{
          width: 60,
          height: 2,
          background: "#D4A857",
          margin: "0 auto 24px",
        }}
      />
      <p
        style={{
          color: "#888",
          fontSize: 16,
          lineHeight: 1.8,
          marginBottom: 32,
          maxWidth: 500,
          margin: "0 auto 32px",
        }}
      >
        Experience your product through the eyes of those who use it
        differently. Four mythological trials await — each simulating a real
        barrier your users face.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
          marginBottom: 32,
          textAlign: "left",
        }}
      >
        {TRIAL_METADATA.map((t) => (
          <div
            key={t.name}
            style={{
              background: "rgba(212,168,87,0.04)",
              border: "1px solid rgba(212,168,87,0.15)",
              borderRadius: 10,
              padding: "14px 18px",
              display: "flex",
              gap: 14,
              alignItems: "center",
            }}
          >
            <div style={{ fontSize: 28, flexShrink: 0 }}>{t.emoji}</div>
            <div>
              <div
                style={{
                  color: "#e8dfd0",
                  fontSize: 15,
                  fontFamily: "'Cinzel', serif",
                  marginBottom: 2,
                }}
              >
                {t.name}
              </div>
              <div style={{ color: "#666", fontSize: 13 }}>{t.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onStart}
        style={{ ...btnGold, fontSize: 16, padding: "14px 36px" }}
      >
        Begin the Odyssey
      </button>
    </div>
  );
}
