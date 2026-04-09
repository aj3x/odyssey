import { useState, useRef } from "react";
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
  trialSection,
} from "../../styles/sharedStyles";

export default function ScyllaTrial() {
  const [phase, setPhase] = useState("intro");
  const [escaped, setEscaped] = useState(false);
  const [trapCount, setTrapCount] = useState(0);
  const [tasksDone, setTasksDone] = useState({
    task1: false,
    task2: false,
    task3: false,
  });
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
        <h2 style={headingStyle}>Scylla & Charybdis</h2>
        <p style={subtitleStyle}>
          The seas have cursed your mouse — it no longer works.
          <br />
          Navigate this page using{" "}
          <strong style={accentText}>only your keyboard</strong>.
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
        onClick={(e) => {
          if (
            e.target.tagName !== "BUTTON" &&
            e.target.tagName !== "INPUT"
          )
            e.preventDefault();
        }}
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
                  background:
                    tasksDone.task3 && n <= 4
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
