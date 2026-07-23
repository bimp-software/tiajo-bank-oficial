import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Hero from "./components/Terminos.Hero";
import Index from "./components/Terminos.Index";
import Sections from "./components/Terminos.Sections";
import Acceptance from "./components/Terminos.Acceptance";
import Support from "./components/Terminos.Support";
import CTA from "./components/Terminos.CTA";

import "./assets/css/terminos-condiciones.css";

export default function TerminosCondicionesPage() {
    const { t } = useTranslation("terminos-condiciones");
    const { lang = "es" } = useParams();

    return (
        <>
            <Hero t={t} />

            <section className="terminos-content">
                <div className="terminos-container terminos-content__grid">
                    <Index t={t} />
                    <Sections t={t} />

                    <aside className="terminos-sidebar">
                        <Acceptance t={t} />
                        <Support t={t} lang={lang} />
                    </aside>
                </div>
            </section>

            <CTA t={t} lang={lang} />
        </>
    );
}
