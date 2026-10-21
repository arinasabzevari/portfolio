import { portfolioData } from "../data/portfolioData";
import { useLanguage } from "../i18n/LanguageContext";

export function Skills() {
  const { t } = useLanguage();
  return <section className="section reveal"><div className="section-head"><div><span className="label">{t.skills.label}</span><h2>{t.skills.title}</h2></div></div><div className="capabilities">{Object.entries(portfolioData.skills).map(([group, skills]) => <div className="capability" key={group}><h3>{t.skills.groups[group as keyof typeof t.skills.groups]}</h3><p>{skills.map((skill) => <span key={skill}>{skill}<br /></span>)}</p></div>)}</div></section>;
}
