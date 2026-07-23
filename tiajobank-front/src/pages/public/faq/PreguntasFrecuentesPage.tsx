import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Hero from "./components/FAQ.Hero";
import Categories from "./components/FAQ.Categories";
import Accordion from "./components/FAQ.Accordion";
import Sidebar from "./components/FAQ.Sidebar";
import CTA from "./components/FAQ.CTA";

import "./assets/css/faq.css";

export default function PreguntasFrecuentesPage() {
    const { t } = useTranslation("faq");
    const { lang = "es" } = useParams();

    return (
        <>
            <Hero t={t} />
            <Categories t={t} />
            <section className="faq-content">
                <div className="faq-container faq-content__grid">
                    <Accordion t={t} />
                    <Sidebar t={t} lang={lang} />
                </div>
            </section>
            <CTA t={t} lang={lang} />
        </>
    );
}
