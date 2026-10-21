import { portfolioData } from "../data/portfolioData";
import { useLanguage } from "../i18n/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  return <section id="contact" className="contact reveal"><span className="label">{t.contact.label}</span><h2>{t.contact.title}</h2><p>{t.contact.body}</p><div className="contact-links"><a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a><a href={`tel:${portfolioData.phone}`}>{portfolioData.phone}</a><a href={portfolioData.linkedin}>{t.contact.linkedin}</a><a href={portfolioData.github}>{t.contact.github}</a></div></section>;
}
