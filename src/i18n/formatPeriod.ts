import type { Lang } from "./translations";

const monthsFr: Record<string, string> = {
  Jan: "janv.",
  Feb: "févr.",
  Mar: "mars",
  Apr: "avr.",
  May: "mai",
  Jun: "juin",
  Jul: "juil.",
  Aug: "août",
  Sep: "sept.",
  Oct: "oct.",
  Nov: "nov.",
  Dec: "déc.",
};

export function formatPeriod(period: string, lang: Lang): string {
  if (lang !== "fr") return period;
  return period
    .replace(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b/g, (month) => monthsFr[month])
    .replace(/\bPresent\b/, "Présent");
}
