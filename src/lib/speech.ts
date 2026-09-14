/**
 * Strips the notation we show on screen but don't want read aloud:
 * a leading list number ("1. achten auf") and the case marker that
 * follows a preposition ("achten auf + Akk." → "achten auf").
 */
export function cleanForSpeech(text: string) {
  return text
    .replace(/^\s*\d+\.\s*/, "")
    .replace(/\s*\+\s*(Akk|Dat|Gen)\.?/g, "")
    .trim();
}

export function speakGerman(text: string) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  const spoken = cleanForSpeech(text);
  if (!spoken) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(spoken);
  utterance.lang = "de-DE";
  utterance.rate = 0.9;
  const voices = window.speechSynthesis.getVoices();
  const germanVoice = voices.find((v) => v.lang.startsWith("de"));
  if (germanVoice) utterance.voice = germanVoice;
  window.speechSynthesis.speak(utterance);
}

export function isSpeechSupported() {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}
