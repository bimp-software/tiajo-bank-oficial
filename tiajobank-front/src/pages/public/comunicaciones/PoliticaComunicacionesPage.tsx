import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Hero from "./components/Comunicaciones.Hero";
import Index from "./components/Comunicaciones.Index";
import Sections from "./components/Comunicaciones.Sections";
import Principles from "./components/Comunicaciones.Principles";
import Reporting from "./components/Comunicaciones.Reporting";
import CTA from "./components/Comunicaciones.CTA";

import "./assets/css/politica-comunicaciones.css";

export default function PoliticaComunicacionesPage() {
    const { t } = useTranslation("comunicaciones");
    const { lang = "es" } = useParams();

    return (
        <>
            <Hero t={t} />

            <section className="comunicaciones-content">
                <div className="comunicaciones-container comunicaciones-content__grid">
                    <Index t={t} />
                    <Sections t={t} />

                    <aside className="comunicaciones-sidebar">
                        <Principles t={t} />
                        <Reporting t={t} lang={lang} />
                    </aside>
                </div>
            </section>

            <CTA t={t} lang={lang} />
        </>
    );
}
