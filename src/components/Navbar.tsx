import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  return <nav className="nav"><a className="brand" href="#top"><span className="brand-mark">AS</span>{"Arina Sabzevari"}</a><div className={menuOpen ? "nav-links open" : "nav-links"} onClick={() => setMenuOpen(false)}><a href="#about">{t.nav.about}</a><a href="#experience">{t.nav.experience}</a><a href="#projects">{t.nav.projects}</a><a href="#contact">{t.nav.contact}</a><span className="nav-indicator" /></div><div className="nav-actions"><div className="nav-lang" role="group" aria-label="Language"><button type="button" className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button><span className="divider">/</span><button type="button" className={lang === "fr" ? "active" : ""} onClick={() => setLang("fr")}>FR</button></div><button className="menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></div></nav>;
}
