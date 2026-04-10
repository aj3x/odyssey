import { useState } from "react";
import {
  btnGold,
  inputStyle,
  labelStyle,
  headingStyle,
  subtitleStyle,
  accentText,
  lessonCard,
  lessonTitle,
  lessonList,
} from "../../styles/sharedStyles";

export default function CyclopsTrial() {
  const [phase, setPhase] = useState("intro");
  const [answers, setAnswers] = useState({ errors: "", link: "", status: "" });
  const [submitted, setSubmitted] = useState(false);

  if (phase === "intro")
    return (
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>👁</div>
        <h2 style={headingStyle}>The Cyclops</h2>
        <p style={subtitleStyle}>
          The Cyclops has dimmed your vision. Everything is low contrast.
          <br />
          Information is conveyed{" "}
          <strong style={accentText}>only by color</strong>.
          <br />
          Can you tell what's happening on this page?
        </p>
        <button onClick={() => setPhase("trial")} style={btnGold}>
          Enter the Cave
        </button>
      </div>
    );

  if (phase === "trial")
    return (
      <div style={{ maxWidth: 800, margin: "0 auto"}}>
        {/* The low contrast nightmare */}
        <div
          style={{
            background: "#f5f5f5",
            borderRadius: 12,
            padding: 32,
            marginBottom: 24,
            filter: submitted ? "none" : "grayscale(100%)",
          }}
        >
          <h3 style={{ color: "#e0e0e0", fontSize: 22, marginBottom: 16 }}>
            Project Dashboard
          </h3>

          {/* Status indicators by color only */}
          <div
            style={{
              display: "flex",
              gap: 16,
              marginBottom: 20,
              flexWrap: "wrap",
            }}
          >
            {[
              { name: "API Migration", color: "#e8e8e8", dotColor: "#d4d4d4" },
              { name: "Design System", color: "#e8e8e8", dotColor: "#c8dcc8" },
              { name: "Auth Service", color: "#e8e8e8", dotColor: "#dcc8c8" },
              { name: "Mobile App", color: "#e8e8e8", dotColor: "#dcdcc8" },
            ].map((p) => (
              <div
                key={p.name}
                style={{
                  background: p.color,
                  padding: "8px 16px",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: p.dotColor,
                  }}
                />
                <span style={{ color: "#d0d0d0", fontSize: 14 }}>
                  {p.name}
                </span>
              </div>
            ))}
          </div>

          {/* Form with color-only errors */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ marginBottom: 12 }}>
              <span style={{ color: "#ddd", fontSize: 13 }}>Full Name</span>
              <div
                style={{
                  border: "1px solid #e0e0e0",
                  borderRadius: 4,
                  padding: "8px 12px",
                  color: "#ccc",
                  fontSize: 14,
                  background: "#f0f0f0",
                }}
              >
                John Smith
              </div>
            </div>
            <div style={{ marginBottom: 12 }}>
              <span style={{ color: "#ddd", fontSize: 13 }}>Email</span>
              <div
                style={{
                  border: "1px solid #f0c0c0",
                  borderRadius: 4,
                  padding: "8px 12px",
                  color: "#ccc",
                  fontSize: 14,
                  background: "#faf0f0",
                }}
              >
                john@email.com
              </div>
            </div>
            <div>
              <span style={{ color: "#ddd", fontSize: 13 }}>Phone</span>
              <div
                style={{
                  border: "1px solid #f0c0c0",
                  borderRadius: 4,
                  padding: "8px 12px",
                  color: "#ccc",
                  fontSize: 14,
                  background: "#faf0f0",
                }}
              >
                555-4567
              </div>
            </div>
          </div>

          {/* Link hidden in text */}
          <p style={{ color: "#ddd", fontSize: 14, lineHeight: 1.6 }}>
            To update your preferences, go to{" "}
            <span style={{ color: "#ddd6e8" }}>account settings</span> or
            contact <span style={{ color: "#ded9e6" }}>support</span> for help.
          </p>
        </div>

        {/* Questions */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <p style={{ color: "#D4A857", fontSize: 15, marginBottom: 4 }}>
            Now answer honestly:
          </p>
          <label style={labelStyle}>
            Which form fields have errors?
            <input
              value={answers.errors}
              onChange={(e) =>
                setAnswers({ ...answers, errors: e.target.value })
              }
              style={inputStyle}
              placeholder="Your best guess..."
            />
          </label>
          <label style={labelStyle}>
            Which words are clickable links?
            <input
              value={answers.link}
              onChange={(e) =>
                setAnswers({ ...answers, link: e.target.value })
              }
              style={inputStyle}
              placeholder="Your best guess..."
            />
          </label>
          <label style={labelStyle}>
            What's the status of each project? (green/yellow/red)
            <input
              value={answers.status}
              onChange={(e) =>
                setAnswers({ ...answers, status: e.target.value })
              }
              style={inputStyle}
              placeholder="Your best guess..."
            />
          </label>
          {!submitted ? (
            <button onClick={() => setSubmitted(true)} style={btnGold}>
              Submit
            </button>
          ) : (
            <div
              style={{
                background: "rgba(212,168,87,0.1)",
                border: "1px solid #D4A857",
                borderRadius: 8,
                padding: 20,
              }}
            >
              <p style={{ color: "#e8dfd0", fontSize: 14, lineHeight: 1.6, marginBottom: 12 }}>
                <strong>Email</strong> and <strong>Phone</strong> had errors
                (red-tinted borders). <strong>"Account settings"</strong> and{" "}
                <strong>"support"</strong> were links (slightly purple text). The
                status dots were green, red, and yellow — but nearly invisible.
              </p>
              <p style={{ color: "#b0a89a", fontSize: 14, lineHeight: 1.6 }}>
                If you struggled — so does everyone with low vision, color
                blindness, or a cheap monitor. And that dashboard? Completely
                unusable.
              </p>
              <button
                onClick={() => setPhase("reveal")}
                style={{ ...btnGold, marginTop: 12 }}
              >
                See the Lesson →
              </button>
            </div>
          )}
        </div>
      </div>
    );

  return (
    <div style={{ maxWidth: 700, margin: "0 auto" }}>
      <h3
        style={{
          fontFamily: "'Cinzel', serif",
          color: "#D4A857",
          fontSize: 22,
          marginBottom: 16,
        }}
      >
        Surviving the Cyclops
      </h3>
      <div style={lessonCard}>
        <h4 style={lessonTitle}>Contrast ratios (WCAG 2.1 AA)</h4>
        <ul style={lessonList}>
          <li>
            <strong>Normal text:</strong> 4.5:1 minimum (1.4.3)
          </li>
          <li>
            <strong>Large text (18pt+ or 14pt bold):</strong> 3:1 minimum
          </li>
          <li>
            <strong>UI components & focus indicators:</strong> 3:1 minimum
            (1.4.11)
          </li>
          <li>
            <strong>Disabled/inactive elements:</strong> exempt from contrast
            requirements — but this is intentional, not an excuse for lazy design
          </li>
        </ul>
      </div>
      <div style={{ ...lessonCard, marginTop: 12 }}>
        <h4 style={lessonTitle}>Never color alone (1.4.1)</h4>
        <ul style={lessonList}>
          <li>
            Errors need <strong>text + icons</strong>, not just red borders
          </li>
          <li>
            Links need <strong>underlines</strong> (or 3:1 contrast vs.
            surrounding text + hover change)
          </li>
          <li>
            Status indicators need <strong>labels, icons, or patterns</strong>{" "}
            alongside color
          </li>
        </ul>
      </div>
    </div>
  );
}
