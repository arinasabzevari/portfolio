import { useEffect, useRef } from "react";
import { portfolioData } from "../data/portfolioData";
import { useLanguage } from "../i18n/LanguageContext";

export function About() {
  const { education } = portfolioData;
  const { t } = useLanguage();
  const gpaRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = gpaRef.current;
    if (!el) return;
    const target = parseFloat(education.gpa);
    let animated = false;
    const onScroll = () => {
      if (animated || el.getBoundingClientRect().top >= window.innerHeight * 0.9) return;
      animated = true;
      const start = performance.now();
      const duration = 900;
      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - (1 - progress) ** 3;
        el.textContent = (target * eased).toFixed(2);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [education.gpa]);

  return <section id="about" className="section reveal"><div className="profile-layout"><div><span className="label">{t.about.label}</span><h2>{t.about.title}</h2><p className="profile-lead">{t.about.body}</p></div><div className="signal-ledger"><div className="signal-row"><strong>01</strong><span>{education.school} — {t.about.degree}, {t.about.period}</span></div><div className="signal-row"><strong>02</strong><span>{t.about.gpaLabel} <span ref={gpaRef}>0.00</span></span></div><div className="signal-row"><strong>03</strong><span>{t.about.languages}</span></div><div className="signal-row"><strong>04</strong><span>{t.about.stack}</span></div></div></div></section>;
}
