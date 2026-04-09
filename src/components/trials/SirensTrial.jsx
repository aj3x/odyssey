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

export default function SirensTrial() {
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
        <h2 style={headingStyle}>The Sirens</h2>
        <p style={subtitleStyle}>
          The Sirens' song carries critical information — but you cannot hear it.
          <br />
          A video will play with important details about a team meeting.
          <br />
          <strong style={accentText}>
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
              <button
                onClick={() => setPhase("reveal")}
                style={{ ...btnGold, marginTop: 16 }}
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
