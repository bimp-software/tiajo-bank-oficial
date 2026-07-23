import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Hero from "./components/UsoAceptable.Hero";
import Index from "./components/UsoAceptable.Index";
import Sections from "./components/UsoAceptable.Sections";
import Principles from "./components/UsoAceptable.Principles";
import Support from "./components/UsoAceptable.Support";
import CTA from "./components/UsoAceptable.CTA";

import "./assets/css/politica-uso-aceptable.css";

export default function PoliticaUsoAceptablePage() {
    const { t } = useTranslation("uso-aceptable");
    const { lang = "es" } = useParams();

    return (
        <>
            <Hero t={t} />

            <section className="uso-aceptable-content">
                <div className="uso-aceptable-container uso-aceptable-content__grid">
                    <Index t={t} />
                    <Sections t={t} />

                    <aside className="uso-aceptable-sidebar">
                        <Principles t={t} />
                        <Support t={t} lang={lang} />
                    </aside>
                </div>
            </section>

            <CTA t={t} lang={lang} />
        </>
    );
}
