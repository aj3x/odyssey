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
  trialSection,
} from "../../styles/sharedStyles";

const videoSrc = "/assets/hedge.mov";
const caption = "A hedge is a hedge. He only chopped it down because it spoiled his view. What's [Reaper] moaning about.";
const videoSections = [
  "0,12",
  "12,20",
  "20,36",
];
const sectionLabels = [
  "Person 1 of 3 — hardest to understand",
  "Person 2 of 3 — a little clearer",
  "Person 3 of 3 — clearest",
];

export default function SirensTrial() {
  const [phase, setPhase] = useState("intro");
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [videoSection, setVideoSection] = useState(0);
  const [sectionSubmitted, setSectionSubmitted] = useState(false);

  const isLastSection = videoSection === videoSections.length - 1;

  const handleSubmit = () => setSectionSubmitted(true);

  const handleNextSection = () => {
    setVideoSection((v) => v + 1);
    setSectionSubmitted(false);
    // currentAnswer intentionally kept so user can refine it
  };

  if (phase === "intro")
    return (
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>👂</div>
        <h2 style={headingStyle}>The Sirens</h2>
        <p style={subtitleStyle}>
          Three people will each say the same thing.
          <br />
          The first is the hardest to understand. Each one is a little clearer.
          <br />
          After each person speaks,{" "}
          <strong style={accentText}>type what you think they said</strong> and
          submit.
          <br />
          You can update your answer as you hear each version.
        </p>
        <button onClick={() => setPhase("playing")} style={btnGold}>
          Begin
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
            padding: 24,
            textAlign: "center",
            marginBottom: 24,
            border: "1px solid #333",
          }}
        >
          <div
            style={{
              color: "#888",
              fontSize: 13,
              marginBottom: 12,
              fontFamily: "monospace",
              letterSpacing: 0.5,
            }}
          >
            {sectionLabels[videoSection]}
          </div>
          <video
            key={videoSection}
            src={`${videoSrc}#t=${videoSections[videoSection]}`}
            autoPlay
            style={{ borderRadius: 8, height: 280, maxWidth: "100%" }}
          />
        </div>
        <form style={{ display: "flex", flexDirection: "column", gap: 16 }} onSubmit={handleSubmit}>
          <label style={labelStyle}>
            What do you think they said?
            <input
              value={currentAnswer}
              onChange={(e) => setCurrentAnswer(e.target.value)}
              disabled={sectionSubmitted}
              placeholder="Type what you heard..."
              style={{
                ...inputStyle,
                resize: "vertical",
                minHeight: 40,
                fontFamily: "inherit",
                opacity: sectionSubmitted ? 0.6 : 1,
              }}
            />
            <input type="submit" disabled style={{ display: "none" }} />
          </label>
          {!sectionSubmitted ? (
            <button
              type="submit"
              onClick={handleSubmit}
              style={{
                ...btnGold,
                opacity: currentAnswer.trim() ? 1 : 0.5,
                cursor: currentAnswer.trim() ? "pointer" : "not-allowed",
              }}
              disabled={!currentAnswer.trim()}
            >
              Submit
            </button>
          ) : isLastSection ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div
                style={{ color: "#b0a89a", fontSize: 14, textAlign: "center" }}
              >
                That was the final version.
              </div>
              <button
                onClick={() => setPhase("reveal")}
                style={{ ...btnGold, marginTop: 4 }}
              >
                See What Was Said →
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div
                style={{ color: "#b0a89a", fontSize: 14, textAlign: "center" }}
              >
                Answer recorded. Ready to hear the next version?
              </div>
              <button onClick={handleNextSection} style={btnGold}>
                Play Next Version →
              </button>
            </div>
          )}
        </form>
      </div>
    );

  return (
    <div style={{ maxWidth: 700, margin: "0 auto" }}>
      <div
        style={{
          background: "rgba(212,168,87,0.08)",
          border: "1px solid rgba(212,168,87,0.35)",
          borderRadius: 10,
          padding: 20,
          marginBottom: 24,
        }}
      >
        <p
          style={{
            color: "#D4A857",
            fontFamily: "'Cinzel', serif",
            fontSize: 16,
            marginBottom: 8,
          }}
        >
          What they said:
        </p>
        <p
          style={{
            color: "#e8dfd0",
            fontSize: 15,
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          "{caption}"
        </p>
        {currentAnswer.trim() && (
          <>
            <p
              style={{
                color: "#D4A857",
                fontFamily: "'Cinzel', serif",
                fontSize: 16,
                marginTop: 16,
                marginBottom: 8,
              }}
            >
              Your final answer:
            </p>
            <p
              style={{
                color: "#b0a89a",
                fontSize: 15,
                lineHeight: 1.7,
                fontStyle: "italic",
              }}
            >
              "{currentAnswer}"
            </p>
          </>
        )}
      </div>
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
