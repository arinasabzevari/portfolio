import { ArrowUp, Rocket } from "lucide-react";
import { useEffect, useState } from "react";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { LanguageProvider, useLanguage } from "./i18n/LanguageContext";
import "./App.css";

function AppContent() {
  const { t } = useLanguage();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const onMove = (event: MouseEvent) => setMouse({ x: (event.clientX / window.innerWidth - .5) * 2, y: (event.clientY / window.innerHeight - .5) * 2 });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const revealInView = () => {
      sections.forEach((section) => {
        if (!section.classList.contains("visible") && section.getBoundingClientRect().top < window.innerHeight * 0.9) {
          section.classList.add("visible");
        }
      });
    };
    revealInView();
    window.addEventListener("scroll", revealInView, { passive: true });
    window.addEventListener("resize", revealInView);
    return () => {
      window.removeEventListener("scroll", revealInView);
      window.removeEventListener("resize", revealInView);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      document.documentElement.style.setProperty("--background-shift", `${window.scrollY * -.08}px`);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty("--scroll-progress", max > 0 ? String(window.scrollY / max) : "0");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const nav = document.querySelector<HTMLElement>(".nav-links");
    const indicator = document.querySelector<HTMLElement>(".nav-indicator");
    if (!nav || !indicator) return;
    const links = Array.from(nav.querySelectorAll<HTMLAnchorElement>("a"));
    const sections = links
      .map((link) => document.getElementById(link.getAttribute("href")!.slice(1)))
      .filter((section): section is HTMLElement => section !== null);
    const onScroll = () => {
      let activeId = "";
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= 140) activeId = section.id;
      });
      const activeLink = links.find((link) => link.getAttribute("href") === `#${activeId}`);
      links.forEach((link) => link.classList.toggle("active", link === activeLink));
      if (activeLink) {
        const navRect = nav.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();
        indicator.style.opacity = "1";
        indicator.style.width = `${linkRect.width}px`;
        indicator.style.transform = `translateX(${linkRect.left - navRect.left}px)`;
      } else {
        indicator.style.opacity = "0";
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <main className="portfolio" id="top"><div className="scroll-progress" /><div className="scroll-journey" aria-hidden="true"><div className="journey-track" /><Rocket className="journey-rocket" size={20} /></div><Navbar /><Hero mouse={mouse} /><About /><Skills /><Experience /><Projects /><Contact /><footer><span>Arina Sabzevari / {t.footer.role}</span><span>{t.footer.status}</span></footer><a href="#top" className={showTop ? "scroll-top visible" : "scroll-top"} aria-label="Back to top"><ArrowUp size={18} /></a></main>
  );
}

function App() {
  return <LanguageProvider><AppContent /></LanguageProvider>;
}

export default App;