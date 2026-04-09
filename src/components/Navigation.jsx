import { TRIALS, TRIAL_ORDER } from "../constants/trials";

export default function Navigation({
  current,
  setCurrent,
  currentIndex,
  onNext,
  onPrev,
}) {
  return (
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
        {TRIAL_ORDER.slice(0, -1).map((t, i) => (
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
            border: `1px solid ${
              current === TRIALS.ithaca ? "#D4A857" : "#444"
            }`,
            background: current === TRIALS.ithaca ? "#D4A857" : "transparent",
            cursor: "pointer",
            padding: 0,
          }}
          aria-label="Go to Ithaca"
        />
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          onClick={onPrev}
          disabled={currentIndex <= 0 && current !== TRIAL_ORDER[0]}
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
          onClick={onNext}
          disabled={currentIndex >= TRIAL_ORDER.length - 1}
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
  );
}
