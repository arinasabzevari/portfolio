import { ExternalLink } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { formatPeriod } from "../i18n/formatPeriod";
import { useLanguage } from "../i18n/LanguageContext";

function onProjectMove(event: React.MouseEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--spot-x", `${((event.clientX - rect.left) / rect.width) * 100}%`);
  event.currentTarget.style.setProperty("--spot-y", `${((event.clientY - rect.top) / rect.height) * 100}%`);
}

export function Projects() {
  const { t, lang } = useLanguage();
  return <section id="projects" className="section reveal"><div className="section-head"><div><span className="label">{t.projects.label}</span><h2>{t.projects.title}</h2></div></div><div className="projects">{portfolioData.projects.map(([title, period, , tags, github], index) => <article className="project" key={title} onMouseMove={onProjectMove}>{github && <a className="project-cover" href={github} target="_blank" rel="noopener noreferrer" aria-label={`${t.projects.items[index].title} on GitHub`} />}<span className="label">{formatPeriod(period, lang)}</span>{github && <ExternalLink className="project-icon" size={16} />}<h3>{t.projects.items[index].title}</h3><p>{t.projects.items[index].description}</p><div className="tag">{tags}</div></article>)}</div></section>;
}
