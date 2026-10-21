import { ArrowUpRight, Download } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../i18n/LanguageContext";

type HeroProps = { mouse: { x: number; y: number } };

export function Hero({ mouse }: HeroProps) {
  const { t } = useLanguage();
  return <section className="hero"><div className="hero-copy"><motion.h1 initial={{ opacity: 0, y: 38 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>{t.hero.greeting} <em>{t.hero.name}</em></motion.h1><motion.p className="lede" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35 }}>{t.hero.lede}</motion.p><div className="actions"><a className="button primary" href="#projects">{t.hero.explore} <ArrowUpRight size={17} /></a><a className="button" href="/cv.pdf"><Download size={16} /> {t.hero.resume}</a></div></div><motion.div className="visual" animate={{ x: mouse.x * 18, y: mouse.y * 18, rotate: mouse.x * 4 }} transition={{ type: "spring", stiffness: 90, damping: 18 }}><div className="console"><div className="console-top">arina.tsx / profile</div><div className="console-body"><div><b>{t.hero.focusLabel}</b>: <strong>{t.hero.focusValue}</strong></div><div><b>{t.hero.toolsLabel}</b>: <strong>{t.hero.toolsValue}</strong></div><div><b>{t.hero.langLabel}</b>: <strong>{t.hero.langValue}</strong></div><div><b>{t.hero.statusLabel}</b>: <strong>{t.hero.statusValue}</strong></div></div></div></motion.div></section>;
}
