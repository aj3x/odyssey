import { useState, useEffect, useRef, useCallback } from "react";

const TRIALS = {
  home: "home",
  sirens: "sirens",
  medusa: "medusa",
  scylla: "scylla",
  cyclops: "cyclops",
  ithaca: "ithaca",
};

// ─── SIRENS TRIAL: Deafness ─────────────────────────────────
function SirensTrial() {
  const [phase, setPhase] = useState("intro"); // intro | playing | reveal
  const [answers, setAnswers] = useState({ q1: "", q2: "", q3: "" });
  const [submitted, setSubmitted] = useState(false);

  const correct = { q1: "3", q2: "friday", q3: "sarah" };

  const handleSubmit = () => setSubmitted(true);

  const score = submitted
    ? Object.keys(correct).filter(
        (k) => answers[k].toLowerCase().trim() === correct[k]
      ).length
    : 0;

  if (phase === "intro")
    return (
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>🔇</div>
        <h2
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 32,
            color: "#D4A857",
            marginBottom: 12,
          }}
        >
          The Sirens
        </h2>
        <p
          style={{
            color: "#b0a89a",
            fontSize: 17,
            lineHeight: 1.7,
            marginBottom: 24,
          }}
        >
          The Sirens' song carries critical information — but you cannot hear it.
          <br />A video will play with important details about a team meeting.
          <br />
          <strong style={{ color: "#e8dfd0" }}>
            The audio is muted. There are no captions.
          </strong>
          <br />
          Afterward, you'll be quizzed on what was said.
        </p>
        <button onClick={() => setPhase("playing")} style={btnGold}>
          Play the Video
        </button>
      </div>
    );

  if (phase === "playing")
    return (
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <div
          style={{
            background: "#000",
            borderRadius: 12,
            padding: 40,
            textAlign: "center",
            marginBottom: 24,
            border: "1px solid #333",
            minHeight: 280,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: 48, marginBottom: 16 }}>🔇</div>
          <div
            style={{
              color: "#555",
              fontFamily: "monospace",
              fontSize: 14,
              marginBottom: 12,
            }}
          >
            ▶ NOW PLAYING — Team Standup Recording (0:47)
          </div>
          <div style={{ color: "#333", fontSize: 13 }}>
            [A person is speaking animatedly. They point at a screen showing
            charts.
            <br />
            Another person nods and holds up fingers. A third person writes on a
            whiteboard.
            <br />
            Everyone laughs. The speaker gestures toward a calendar on the wall.]
          </div>
          <div
            style={{
              marginTop: 20,
              background: "#111",
              height: 4,
              borderRadius: 2,
              width: "80%",
              position: "relative",
            }}
          >
            <div
              style={{
                background: "#D4A857",
                height: 4,
                borderRadius: 2,
                width: "100%",
                animation: "progress 5s linear forwards",
              }}
            />
          </div>
          <style>{`@keyframes progress { from { width: 0% } to { width: 100% } }`}</style>
        </div>
        <p
          style={{
            color: "#b0a89a",
            textAlign: "center",
            fontSize: 15,
            marginBottom: 24,
          }}
        >
          The video has ended. Based on what you saw, answer these questions:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <label style={labelStyle}>
            How many action items were assigned?
            <input
              type="text"
              value={answers.q1}
              onChange={(e) => setAnswers({ ...answers, q1: e.target.value })}
              style={inputStyle}
              placeholder="Your answer..."
            />
          </label>
          <label style={labelStyle}>
            What day is the deadline?
            <input
              type="text"
              value={answers.q2}
              onChange={(e) => setAnswers({ ...answers, q2: e.target.value })}
              style={inputStyle}
              placeholder="Your answer..."
            />
          </label>
          <label style={labelStyle}>
            Who volunteered to lead the next sprint?
            <input
              type="text"
              value={answers.q3}
              onChange={(e) => setAnswers({ ...answers, q3: e.target.value })}
              style={inputStyle}
              placeholder="Your answer..."
            />
          </label>
          {!submitted ? (
            <button onClick={handleSubmit} style={btnGold}>
              Submit Answers
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
              <p
                style={{
                  color: "#D4A857",
                  fontFamily: "'Cinzel', serif",
                  fontSize: 18,
                  marginBottom: 8,
                }}
              >
                You got {score} out of 3 correct.
              </p>
              <p style={{ color: "#b0a89a", fontSize: 14, lineHeight: 1.6 }}>
                The answers were: <strong>3 action items</strong>,{" "}
                <strong>Friday</strong>, and <strong>Sarah</strong>.
              </p>
              <p
                style={{
                  color: "#e8dfd0",
                  fontSize: 14,
                  lineHeight: 1.6,
                  marginTop: 12,
                }}
              >
                Without captions or a transcript, the video was useless. This is
                what <strong>466 million people</strong> with hearing loss
                experience — and anyone in a noisy room, or watching without
                headphones.
              </p>
              <button onClick={() => setPhase("reveal")} style={{ ...btnGold, marginTop: 16 }}>
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
        Surviving the Sirens
      </h3>
      <div style={lessonCard}>
        <h4 style={lessonTitle}>What's required (WCAG 2.1 AA)</h4>
        <ul style={lessonList}>
          <li>
            <strong>Captions</strong> on all prerecorded video (1.2.2)
          </li>
          <li>
            <strong>Live captions</strong> for live media (1.2.4)
          </li>
          <li>
            <strong>Transcripts</strong> for audio-only content (1.2.1)
          </li>
          <li>
            <strong>Audio descriptions</strong> when visuals convey info not in
            audio (1.2.5)
          </li>
        </ul>
      </div>
      <div style={{ ...lessonCard, marginTop: 12 }}>
        <h4 style={lessonTitle}>The Curb Cut</h4>
        <p style={{ color: "#b0a89a", fontSize: 14, lineHeight: 1.6 }}>
          Captions help everyone: noisy offices, foreign language learners,
          people with auditory processing differences, or anyone who just forgot
          their headphones. Video transcripts also make your content{" "}
          <strong style={{ color: "#e8dfd0" }}>
            indexable by search engines
          </strong>
          , directly improving SEO.
        </p>
      </div>
    </div>
  );
}

// ─── MEDUSA TRIAL: Blindness ─────────────────────────────────
function MedusaTrial() {
  const [phase, setPhase] = useState("intro");
  const [srLog, setSrLog] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", role: "" });
  const [completed, setCompleted] = useState(false);
  const formRef = useRef(null);

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
        <h2
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 32,
            color: "#D4A857",
            marginBottom: 12,
          }}
        >
          Medusa's Gaze
        </h2>
        <p
          style={{
            color: "#b0a89a",
            fontSize: 17,
            lineHeight: 1.7,
            marginBottom: 24,
          }}
        >
          Medusa has turned your screen to stone. You can see{" "}
          <strong style={{ color: "#e8dfd0" }}>nothing</strong>.
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
            onFocus={handleFocus}
            onFocusCapture={handleFocus}
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
                }}
              >
                <p
                  style={{
                    color: "#333",
                    fontSize: 12,
                    textAlign: "center",
                    marginBottom: 8,
                  }}
                >
                  [The form is here — but you can't see it. Use Tab and listen
                  to the screen reader.]
                </p>
                <input
                  data-sr-label="Full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  style={{
                    ...inputStyle,
                    color: "#000",
                    caretColor: "#000",
                    background: "#000",
                    border: "1px solid #000",
                  }}
                  onFocus={(e) => { e.target.style.outline = "2px solid #D4A857"; handleFocus(e); }}
                  onBlur={(e) => { e.target.style.outline = "none"; }}
                />
                <input
                  data-sr-label="Email address"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  style={{
                    ...inputStyle,
                    color: "#000",
                    caretColor: "#000",
                    background: "#000",
                    border: "1px solid #000",
                  }}
                  onFocus={(e) => { e.target.style.outline = "2px solid #D4A857"; handleFocus(e); }}
                  onBlur={(e) => { e.target.style.outline = "none"; }}
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
                  onFocus={(e) => { e.target.style.outline = "2px solid #D4A857"; handleFocus(e); }}
                  onBlur={(e) => { e.target.style.outline = "none"; }}
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
                  onFocus={(e) => { e.target.style.outline = "2px solid #D4A857"; e.target.style.color = "#D4A857"; handleFocus(e); }}
                  onBlur={(e) => { e.target.style.outline = "none"; e.target.style.color = "#000"; }}
                >
                  Register
                </button>
              </div>
            )}
          </div>

          {/* Screen reader output */}
          <div
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

// ─── SCYLLA TRIAL: Keyboard Traps ────────────────────────────
function ScyllaTrial() {
  const [phase, setPhase] = useState("intro");
  const [escaped, setEscaped] = useState(false);
  const [trapCount, setTrapCount] = useState(0);
  const [tasksDone, setTasksDone] = useState({ task1: false, task2: false, task3: false });
  const trapRef = useRef(null);

  const handleTrapKeyDown = (e) => {
    if (e.key === "Tab" && !e.shiftKey) {
      const focusable = trapRef.current?.querySelectorAll("button, input, a");
      if (focusable && focusable.length > 0) {
        const last = focusable[focusable.length - 1];
        if (e.target === last) {
          e.preventDefault();
          focusable[0].focus();
          setTrapCount((c) => c + 1);
        }
      }
    }
    if (e.key === "Escape") {
      setEscaped(true);
    }
  };

  const allDone = tasksDone.task1 && tasksDone.task2 && tasksDone.task3;

  if (phase === "intro")
    return (
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>🌊</div>
        <h2
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 32,
            color: "#D4A857",
            marginBottom: 12,
          }}
        >
          Scylla & Charybdis
        </h2>
        <p
          style={{
            color: "#b0a89a",
            fontSize: 17,
            lineHeight: 1.7,
            marginBottom: 24,
          }}
        >
          The seas have cursed your mouse — it no longer works.
          <br />
          Navigate this page using{" "}
          <strong style={{ color: "#e8dfd0" }}>only your keyboard</strong>.
          <br />
          Complete 3 tasks. But beware — one section is a trap.
        </p>
        <p style={{ color: "#777", fontSize: 13, marginBottom: 24 }}>
          <kbd style={kbdStyle}>Tab</kbd> to move,{" "}
          <kbd style={kbdStyle}>Enter</kbd> /{" "}
          <kbd style={kbdStyle}>Space</kbd> to activate,{" "}
          <kbd style={kbdStyle}>Esc</kbd> might help you escape...
        </p>
        <button onClick={() => setPhase("trial")} style={btnGold}>
          Enter the Strait
        </button>
      </div>
    );

  if (phase === "trial")
    return (
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          cursor: "not-allowed",
          pointerEvents: "auto",
        }}
        onMouseDown={(e) => e.preventDefault()}
        onClick={(e) => { if (e.target.tagName !== "BUTTON" && e.target.tagName !== "INPUT") e.preventDefault(); }}
      >
        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 20,
            justifyContent: "center",
          }}
        >
          {["task1", "task2", "task3"].map((t, i) => (
            <div
              key={t}
              style={{
                padding: "6px 16px",
                borderRadius: 20,
                fontSize: 13,
                background: tasksDone[t]
                  ? "rgba(74,222,128,0.15)"
                  : "rgba(255,255,255,0.05)",
                color: tasksDone[t] ? "#4ade80" : "#666",
                border: `1px solid ${tasksDone[t] ? "#4ade80" : "#333"}`,
              }}
            >
              {tasksDone[t] ? "✓" : "○"} Task {i + 1}
            </div>
          ))}
        </div>

        {/* Task 1: Simple button */}
        <div style={{ ...trialSection, marginBottom: 16 }}>
          <h3 style={{ color: "#e8dfd0", fontSize: 16, marginBottom: 8 }}>
            Task 1: Confirm your attendance
          </h3>
          <button
            onClick={() => setTasksDone((d) => ({ ...d, task1: true }))}
            disabled={tasksDone.task1}
            style={{
              ...btnGold,
              opacity: tasksDone.task1 ? 0.4 : 1,
              fontSize: 14,
              padding: "8px 20px",
            }}
          >
            {tasksDone.task1 ? "Confirmed ✓" : "I'll be there"}
          </button>
        </div>

        {/* THE TRAP */}
        <div
          ref={trapRef}
          onKeyDown={handleTrapKeyDown}
          style={{
            ...trialSection,
            marginBottom: 16,
            border: escaped
              ? "1px solid #4ade80"
              : trapCount > 2
              ? "1px solid #ef4444"
              : "1px solid rgba(212,168,87,0.2)",
            position: "relative",
          }}
        >
          {trapCount > 2 && !escaped && (
            <div
              style={{
                position: "absolute",
                top: -12,
                right: 16,
                background: "#ef4444",
                color: "#fff",
                fontSize: 11,
                padding: "2px 10px",
                borderRadius: 10,
              }}
            >
              You're trapped! Try pressing Esc
            </div>
          )}
          {escaped && (
            <div
              style={{
                position: "absolute",
                top: -12,
                right: 16,
                background: "#4ade80",
                color: "#000",
                fontSize: 11,
                padding: "2px 10px",
                borderRadius: 10,
              }}
            >
              Escaped!
            </div>
          )}
          <h3 style={{ color: "#e8dfd0", fontSize: 16, marginBottom: 8 }}>
            Task 2: Subscribe to updates
          </h3>
          <div style={{ display: "flex", gap: 8 }}>
            <input
              type="email"
              placeholder="Email..."
              style={{ ...inputStyle, flex: 1, fontSize: 14 }}
            />
            <button
              onClick={() => setTasksDone((d) => ({ ...d, task2: true }))}
              disabled={tasksDone.task2}
              style={{
                ...btnGold,
                fontSize: 14,
                padding: "8px 20px",
                opacity: tasksDone.task2 ? 0.4 : 1,
              }}
            >
              {tasksDone.task2 ? "Subscribed ✓" : "Subscribe"}
            </button>
          </div>
          <button
            style={{
              background: "transparent",
              border: "1px solid #333",
              color: "#666",
              padding: "4px 12px",
              borderRadius: 4,
              cursor: "pointer",
              fontSize: 12,
              marginTop: 8,
            }}
          >
            More options
          </button>
        </div>

        {/* Task 3 */}
        <div style={{ ...trialSection, marginBottom: 16 }}>
          <h3 style={{ color: "#e8dfd0", fontSize: 16, marginBottom: 8 }}>
            Task 3: Rate your experience
          </h3>
          <div style={{ display: "flex", gap: 8 }}>
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                onClick={() => setTasksDone((d) => ({ ...d, task3: true }))}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 8,
                  border: "1px solid #444",
                  background: tasksDone.task3 && n <= 4
                    ? "rgba(212,168,87,0.2)"
                    : "rgba(255,255,255,0.03)",
                  color: "#D4A857",
                  fontSize: 16,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                aria-label={`Rate ${n} out of 5`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        {allDone && (
          <div style={{ textAlign: "center", marginTop: 16 }}>
            <p style={{ color: "#4ade80", marginBottom: 12 }}>
              All tasks complete!{" "}
              {escaped
                ? "And you escaped the trap!"
                : "But did you notice you were trapped in Task 2?"}
            </p>
            <button onClick={() => setPhase("reveal")} style={btnGold}>
              See the Lesson →
            </button>
          </div>
        )}
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
        Surviving the Strait
      </h3>
      <p
        style={{
          color: "#b0a89a",
          fontSize: 15,
          lineHeight: 1.7,
          marginBottom: 16,
        }}
      >
        {escaped
          ? `You hit Tab ${trapCount} times before you realized you were stuck. In a real modal or widget, users might never find the escape.`
          : "The subscribe section was a keyboard trap — Tab cycled endlessly between the input, button, and link. This happens in real products with modals, embedded widgets, and custom dropdowns."}
      </p>
      <div style={lessonCard}>
        <h4 style={lessonTitle}>Keyboard essentials</h4>
        <ul style={lessonList}>
          <li>
            <strong>Everything clickable must be Tab-reachable</strong> and
            activatable with Enter or Space (2.1.1)
          </li>
          <li>
            <strong>No keyboard traps</strong> — users must always be able to
            Tab out or Esc out (2.1.2)
          </li>
          <li>
            <strong>Focus must be visible</strong> — never {`outline: none`}{" "}
            without a replacement (2.4.7)
          </li>
          <li>
            <strong>Tab order = DOM order</strong> — don't reorder with CSS or
            tabindex {">"} 0 (2.4.3)
          </li>
        </ul>
      </div>
    </div>
  );
}

// ─── CYCLOPS TRIAL: Low Vision / Color ──────────────────────
function CyclopsTrial() {
  const [phase, setPhase] = useState("intro");
  const [answers, setAnswers] = useState({ errors: "", link: "", status: "" });
  const [submitted, setSubmitted] = useState(false);

  if (phase === "intro")
    return (
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>👁</div>
        <h2
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 32,
            color: "#D4A857",
            marginBottom: 12,
          }}
        >
          The Cyclops
        </h2>
        <p
          style={{
            color: "#b0a89a",
            fontSize: 17,
            lineHeight: 1.7,
            marginBottom: 24,
          }}
        >
          The Cyclops has dimmed your vision. Everything is low contrast.
          <br />
          Information is conveyed{" "}
          <strong style={{ color: "#e8dfd0" }}>only by color</strong>.
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
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {/* The low contrast nightmare */}
        <div
          style={{
            background: "#f5f5f5",
            borderRadius: 12,
            padding: 32,
            marginBottom: 24,
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
                john@
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
                555-123
              </div>
            </div>
          </div>

          {/* Link hidden in text */}
          <p style={{ color: "#ddd", fontSize: 14, lineHeight: 1.6 }}>
            To update your preferences, go to{" "}
            <span style={{ color: "#c8c8e0" }}>account settings</span> or
            contact <span style={{ color: "#c8c8e0" }}>support</span> for help.
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
              onChange={(e) => setAnswers({ ...answers, link: e.target.value })}
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

// ─── ITHACA: Victory ─────────────────────────────────────────
function Ithaca() {
  return (
    <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
      <div style={{ fontSize: 64, marginBottom: 16 }}>🏛</div>
      <h2
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: 36,
          color: "#D4A857",
          marginBottom: 16,
          lineHeight: 1.3,
        }}
      >
        Welcome to Ithaca
      </h2>
      <p
        style={{
          color: "#b0a89a",
          fontSize: 17,
          lineHeight: 1.8,
          marginBottom: 32,
          maxWidth: 560,
          margin: "0 auto 32px",
        }}
      >
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
          { emoji: "🎨", role: "Designers", tips: "Check contrast early. Don't rely on color alone. Design visible focus states. Annotate alt text." },
          { emoji: "💻", role: "Developers", tips: "Semantic HTML first. Test with keyboard. Label every input. Use ARIA only when native HTML isn't enough." },
          { emoji: "📋", role: "PMs & QA", tips: "Include a11y in acceptance criteria. Test with a screen reader. File bugs for missing labels." },
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

// ─── HOME SCREEN ─────────────────────────────────────────────
function HomeScreen({ onStart }) {
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
        {[
          {
            emoji: "🔇",
            name: "The Sirens",
            desc: "Can you understand without hearing?",
          },
          {
            emoji: "🪨",
            name: "Medusa's Gaze",
            desc: "Can you navigate without seeing?",
          },
          {
            emoji: "🌊",
            name: "Scylla & Charybdis",
            desc: "Can you escape with only a keyboard?",
          },
          {
            emoji: "👁",
            name: "The Cyclops",
            desc: "Can you read with dimmed vision?",
          },
        ].map((t) => (
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

      <button onClick={onStart} style={{ ...btnGold, fontSize: 16, padding: "14px 36px" }}>
        Begin the Odyssey
      </button>
    </div>
  );
}

// ─── SHARED STYLES ───────────────────────────────────────────
const btnGold = {
  background: "#D4A857",
  color: "#1a1510",
  border: "none",
  borderRadius: 8,
  padding: "10px 24px",
  fontSize: 15,
  fontWeight: 600,
  cursor: "pointer",
  fontFamily: "'Cinzel', serif",
  letterSpacing: 0.5,
  transition: "all 0.2s",
};

const inputStyle = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: 6,
  padding: "10px 14px",
  color: "#e8dfd0",
  fontSize: 15,
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
};

const labelStyle = {
  color: "#b0a89a",
  fontSize: 14,
  display: "flex",
  flexDirection: "column",
  gap: 6,
};

const kbdStyle = {
  background: "rgba(255,255,255,0.1)",
  border: "1px solid rgba(255,255,255,0.2)",
  borderRadius: 4,
  padding: "2px 8px",
  fontSize: 12,
  fontFamily: "monospace",
  color: "#D4A857",
};

const trialSection = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 12,
  padding: 20,
};

const lessonCard = {
  background: "rgba(212,168,87,0.06)",
  border: "1px solid rgba(212,168,87,0.2)",
  borderRadius: 10,
  padding: 20,
};

const lessonTitle = {
  color: "#D4A857",
  fontSize: 16,
  fontFamily: "'Cinzel', serif",
  marginBottom: 10,
};

const lessonList = {
  color: "#b0a89a",
  fontSize: 14,
  lineHeight: 1.7,
  paddingLeft: 20,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: 6,
};

// ─── MAIN APP ────────────────────────────────────────────────
const trialOrder = [TRIALS.sirens, TRIALS.medusa, TRIALS.scylla, TRIALS.cyclops, TRIALS.ithaca];

export default function App() {
  const [current, setCurrent] = useState(TRIALS.home);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) contentRef.current.scrollTop = 0;
  }, [current]);

  const currentIndex = trialOrder.indexOf(current);

  const goNext = () => {
    if (currentIndex < trialOrder.length - 1) {
      setCurrent(trialOrder[currentIndex + 1]);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrent(trialOrder[currentIndex - 1]);
    } else {
      setCurrent(TRIALS.home);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#12100e",
        color: "#e8dfd0",
        fontFamily: "'Crimson Text', Georgia, serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap"
        rel="stylesheet"
      />

      {/* Top nav */}
      {current !== TRIALS.home && (
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            padding: "12px 24px",
            borderBottom: "1px solid rgba(212,168,87,0.15)",
            background: "rgba(18,16,14,0.95)",
            backdropFilter: "blur(8px)",
            position: "sticky",
            top: 0,
            zIndex: 10,
          }}
        >
          <button
            onClick={() => setCurrent(TRIALS.home)}
            style={{
              background: "none",
              border: "none",
              color: "#D4A857",
              cursor: "pointer",
              fontFamily: "'Cinzel', serif",
              fontSize: 14,
              letterSpacing: 2,
            }}
          >
            THE ODYSSEY
          </button>
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              gap: 6,
            }}
          >
            {trialOrder.slice(0, -1).map((t, i) => (
              <button
                key={t}
                onClick={() => setCurrent(t)}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  border: `1px solid ${current === t ? "#D4A857" : "#444"}`,
                  background:
                    current === t
                      ? "#D4A857"
                      : i < currentIndex
                      ? "rgba(212,168,87,0.3)"
                      : "transparent",
                  cursor: "pointer",
                  padding: 0,
                }}
                aria-label={`Go to trial ${i + 1}: ${t}`}
              />
            ))}
            <button
              onClick={() => setCurrent(TRIALS.ithaca)}
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                border: `1px solid ${current === TRIALS.ithaca ? "#D4A857" : "#444"}`,
                background: current === TRIALS.ithaca ? "#D4A857" : "transparent",
                cursor: "pointer",
                padding: 0,
              }}
              aria-label="Go to Ithaca"
            />
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={goPrev}
              disabled={currentIndex <= 0 && current !== trialOrder[0]}
              style={{
                background: "none",
                border: "1px solid #444",
                color: "#888",
                borderRadius: 6,
                padding: "4px 12px",
                cursor: "pointer",
                fontSize: 13,
              }}
            >
              ← Prev
            </button>
            <button
              onClick={goNext}
              disabled={currentIndex >= trialOrder.length - 1}
              style={{
                background: "none",
                border: "1px solid #444",
                color: "#888",
                borderRadius: 6,
                padding: "4px 12px",
                cursor: "pointer",
                fontSize: 13,
              }}
            >
              Next →
            </button>
          </div>
        </nav>
      )}

      {/* Content */}
      <div ref={contentRef} style={{ flex: 1, padding: "40px 24px", overflowY: "auto" }}>
        {current === TRIALS.home && (
          <HomeScreen onStart={() => setCurrent(TRIALS.sirens)} />
        )}
        {current === TRIALS.sirens && <SirensTrial />}
        {current === TRIALS.medusa && <MedusaTrial />}
        {current === TRIALS.scylla && <ScyllaTrial />}
        {current === TRIALS.cyclops && <CyclopsTrial />}
        {current === TRIALS.ithaca && <Ithaca />}
      </div>
    </div>
  );
}
