export const TRIALS = {
  home: "home",
  sirens: "sirens",
  medusa: "medusa",
  scylla: "scylla",
  cyclops: "cyclops",
  ithaca: "ithaca",
};

export const TRIAL_ORDER = [
  TRIALS.sirens,
  TRIALS.medusa,
  TRIALS.scylla,
  TRIALS.cyclops,
  TRIALS.ithaca,
];

export const TRIAL_METADATA = [
  {
    emoji: "🔇",
    name: "The Sirens",
    desc: "Can you understand without hearing?",
    trialKey: TRIALS.sirens,
  },
  {
    emoji: "🪨",
    name: "Medusa's Gaze",
    desc: "Can you navigate without seeing?",
    trialKey: TRIALS.medusa,
  },
  {
    emoji: "🌊",
    name: "Scylla & Charybdis",
    desc: "Can you escape with only a keyboard?",
    trialKey: TRIALS.scylla,
  },
  {
    emoji: "👁",
    name: "The Cyclops",
    desc: "Can you read with dimmed vision?",
    trialKey: TRIALS.cyclops,
  },
];
