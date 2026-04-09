import { useState, useEffect, useRef } from "react";
import { TRIALS, TRIAL_ORDER } from "./constants/trials";
import { containerStyle, contentStyle } from "./styles/sharedStyles";
import Navigation from "./components/Navigation";
import HomeScreen from "./components/HomeScreen";
import SirensTrial from "./components/trials/SirensTrial";
import MedusaTrial from "./components/trials/MedusaTrial";
import ScyllaTrial from "./components/trials/ScyllaTrial";
import CyclopsTrial from "./components/trials/CyclopsTrial";
import Ithaca from "./components/trials/Ithaca";

export default function App() {
  const [current, setCurrent] = useState(TRIALS.home);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) contentRef.current.scrollTop = 0;
  }, [current]);

  const currentIndex = TRIAL_ORDER.indexOf(current);

  const goNext = () => {
    if (currentIndex < TRIAL_ORDER.length - 1) {
      setCurrent(TRIAL_ORDER[currentIndex + 1]);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrent(TRIAL_ORDER[currentIndex - 1]);
    } else {
      setCurrent(TRIALS.home);
    }
  };

  return (
    <div style={containerStyle}>
      <link
        href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap"
        rel="stylesheet"
      />

      {/* Navigation */}
      {current !== TRIALS.home && (
        <Navigation
          current={current}
          setCurrent={setCurrent}
          currentIndex={currentIndex}
          onNext={goNext}
          onPrev={goPrev}
        />
      )}

      {/* Content */}
      <div ref={contentRef} style={contentStyle}>
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
