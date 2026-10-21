import { useEffect, useRef } from "react";
import { portfolioData } from "../data/portfolioData";
import { formatPeriod } from "../i18n/formatPeriod";
import { useLanguage } from "../i18n/LanguageContext";

export function Experience() {
  const { t, lang } = useLanguage();
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      el.style.setProperty("--timeline-progress", String(Math.min(1, Math.max(0, progress))));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return <section id="experience" className="section reveal"><div className="section-head"><div><span className="label">{t.experience.label}</span><h2>{t.experience.title}</h2></div></div><div className="timeline" ref={timelineRef}>{portfolioData.experience.map((item, index) => <article key={item.company}><span className="meta">{formatPeriod(item.period, lang)}</span><h3>{t.experience.roles[index].title}</h3><p className="company">{item.company}</p><ul>{t.experience.roles[index].bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></article>)}</div></section>;
}
