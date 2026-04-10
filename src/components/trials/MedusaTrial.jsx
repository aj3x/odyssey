import { useState, useRef, useCallback, useEffect } from "react";
import {
  btnGold,
  inputStyle,
  headingStyle,
  subtitleStyle,
  accentText,
  lessonCard,
  lessonTitle,
  lessonList,
  kbdStyle,
} from "../../styles/sharedStyles";

export default function MedusaTrial() {
  const [phase, setPhase] = useState("intro");
  const [srLog, setSrLog] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", role: "" });
  const [completed, setCompleted] = useState(false);
  const formRef = useRef(null);
  const srLogRef = useRef(null);

  useEffect(() => {
    const el = srLogRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [srLog]);

  const announce = useCallback((msg) => {
    setSrLog((prev) => [...prev, msg]);
  }, []);

  const handleFocus = (e) => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if (tag === "input") {
      const label = el.getAttribute("data-sr-label") || "unlabeled input";
      announce(`${label}, edit text${el.value ? `, contains: ${el.value}` : ""}`);
    } else if (tag === "select") {
      const label = el.getAttribute("data-sr-label") || "unlabeled dropdown";
      announce(`${label}, popup button, ${el.value || "no selection"}`);
    } else if (tag === "button") {
      announce(`${el.textContent}, button`);
    }
  };

  const handleTextChange = (e) => {
    const el = e.target;
    const label = el.getAttribute("data-sr-label") || "unlabeled input";
    announce(`${el.value}`);
  }

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.role) {
      announce("Form submitted successfully. Registration complete.");
      setCompleted(true);
    } else {
      announce("Error: please fill in all fields before submitting.");
    }
  };

  if (phase === "intro")
    return (
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>🪨</div>
        <h2 style={headingStyle}>Medusa's Gaze</h2>
        <p style={subtitleStyle}>
          Medusa has turned your screen to stone. You can see{" "}
          <strong style={accentText}>nothing</strong>.
          <br />
          You must fill out a registration form using only your keyboard.
          <br />
          The only feedback you get is what a screen reader would announce.
        </p>
        <p style={{ color: "#777", fontSize: 13, marginBottom: 24 }}>
          Use <kbd style={kbdStyle}>Tab</kbd> to move between fields,{" "}
          type to fill them in, and <kbd style={kbdStyle}>Enter</kbd> to submit.
        </p>
        <button onClick={() => setPhase("trial")} style={btnGold}>
          Face Medusa
        </button>
      </div>
    );

  if (phase === "trial")
    return (
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
          {/* The "blind" form */}
          <div
            ref={formRef}
            style={{
              flex: 1,
              background: "#000",
              borderRadius: 12,
              padding: 32,
              minHeight: 320,
              border: "1px solid #222",
              position: "relative",
            }}
          >
            {completed ? (
              <div style={{ textAlign: "center", paddingTop: 60 }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>✓</div>
                <p style={{ color: "#4ade80", fontSize: 18 }}>
                  Registration complete!
                </p>
                <button
                  onClick={() => setPhase("reveal")}
                  style={{ ...btnGold, marginTop: 20 }}
                >
                  See the Lesson →
                </button>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                <div style={{position: "absolute", top: 0, left: 0, borderRadius: 12, width: "100%", height: "100%", backgroundColor: "#000"}}></div>
                <p
                  style={{
                    color: "#333",
                    fontSize: 12,
                    textAlign: "center",
                    marginBottom: 8,
                    zIndex: 1,
                  }}
                >
                  [The form is here — but you can't see it.
                  Use Tab and pay attention to the screen reader.]
                </p>
                <input
                  data-sr-label="Full name"
                  value={formData.name}
                  onChange={(e) => {
                    handleTextChange(e);
                    setFormData({ ...formData, name: e.target.value });
                  }}
                  style={{
                    ...inputStyle,
                    color: "#000",
                    caretColor: "#000",
                    background: "#000",
                    border: "1px solid #000",
                    userSelect: "none",
                  }}
                  onFocus={(e) => {
                    e.target.style.outline = "2px solid #D4A857";
                    handleFocus(e);
                  }}
                  onBlur={(e) => {
                    e.target.style.outline = "none";
                  }}
                />
                <input
                  data-sr-label="Email address"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    handleTextChange(e);
                    setFormData({ ...formData, email: e.target.value });
                  }}
                  style={{
                    ...inputStyle,
                    color: "#000",
                    caretColor: "#000",
                    background: "#000",
                    border: "1px solid #000",
                  }}
                  onFocus={(e) => {
                    e.target.style.outline = "2px solid #D4A857";
                    handleFocus(e);
                  }}
                  onBlur={(e) => {
                    e.target.style.outline = "none";
                  }}
                />
                <select
                  data-sr-label="Your role"
                  value={formData.role}
                  onChange={(e) => {
                    setFormData({ ...formData, role: e.target.value });
                    announce(`Your role, ${e.target.value} selected`);
                  }}
                  style={{
                    ...inputStyle,
                    color: "#000",
                    background: "#000",
                    border: "1px solid #000",
                    appearance: "none",
                  }}
                  onFocus={(e) => {
                    e.target.style.outline = "2px solid #D4A857";
                    handleFocus(e);
                  }}
                  onBlur={(e) => {
                    e.target.style.outline = "none";
                  }}
                >
                  <option value="">Select...</option>
                  <option value="Designer">Designer</option>
                  <option value="Developer">Developer</option>
                  <option value="PM">PM</option>
                  <option value="QA">QA</option>
                </select>
                <button
                  onClick={handleSubmit}
                  style={{
                    ...btnGold,
                    background: "#000",
                    color: "#000",
                    border: "1px solid #000",
                  }}
                  onFocus={(e) => {
                    e.target.style.outline = "2px solid #D4A857";
                    e.target.style.color = "#D4A857";
                    handleFocus(e);
                  }}
                  onBlur={(e) => {
                    e.target.style.outline = "none";
                    e.target.style.color = "#000";
                  }}
                >
                  Register
                </button>
              </div>
            )}
          </div>

          {/* Screen reader output */}
          <div
            ref={srLogRef}
            style={{
              width: 280,
              background: "rgba(212,168,87,0.08)",
              border: "1px solid rgba(212,168,87,0.3)",
              borderRadius: 12,
              padding: 16,
              maxHeight: 320,
              overflowY: "auto",
            }}
          >
            <div
              style={{
                color: "#D4A857",
                fontSize: 11,
                fontFamily: "monospace",
                textTransform: "uppercase",
                letterSpacing: 2,
                marginBottom: 8,
              }}
            >
              Screen Reader Output
            </div>
            {srLog.length === 0 ? (
              <p style={{ color: "#555", fontSize: 13, fontStyle: "italic" }}>
                Tab into the black box to begin...
              </p>
            ) : (
              srLog.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    color: i === srLog.length - 1 ? "#e8dfd0" : "#666",
                    fontSize: 13,
                    fontFamily: "monospace",
                    padding: "4px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  » {msg}
                </div>
              ))
            )}
          </div>
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
        Surviving Medusa
      </h3>
      <p style={{ color: "#b0a89a", fontSize: 15, lineHeight: 1.7, marginBottom: 16 }}>
        That form had proper labels — so the screen reader could announce each
        field. Imagine if it hadn't. You'd hear{" "}
        <em>"edit text... edit text... popup button..."</em> — with no idea what
        to type where.
      </p>
      <div style={lessonCard}>
        <h4 style={lessonTitle}>What makes this work</h4>
        <ul style={lessonList}>
          <li>
            <strong>Semantic HTML</strong> — use {`<nav>`}, {`<main>`},{" "}
            {`<header>`}, {`<h1>`}–{`<h6>`} so screen readers can navigate by
            landmark and heading
          </li>
          <li>
            <strong>Labels on every input</strong> — {`<label for="...">`}, not
            just placeholder text
          </li>
          <li>
            <strong>Landmarks & headings</strong> — screen reader users jump
            between these, they don't read top-to-bottom
          </li>
          <li>
            <strong>Alt text on images</strong> — describe it if informative,{" "}
            {`alt=""`} if decorative
          </li>
        </ul>
      </div>
    </div>
  );
}
