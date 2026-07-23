import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Hero from "./components/Privacidad.Hero";
import Index from "./components/Privacidad.Index";
import Sections from "./components/Privacidad.Sections";
import Commitment from "./components/Privacidad.Commitment";
import Support from "./components/Privacidad.Support";
import CTA from "./components/Privacidad.CTA";

import "./assets/css/politica-privacidad.css";

export default function PoliticaPrivacidadPage() {
    const { t } = useTranslation("privacidad");
    const { lang = "es" } = useParams();

    return (
        <>
            <Hero t={t} />
            <section className="privacidad-content">
                <div className="privacidad-container privacidad-content__grid">
                    <Index t={t} />
                    <Sections t={t} />
                    <aside className="privacidad-sidebar">
                        <Commitment t={t} lang={lang} />
                        <Support t={t} lang={lang} />
                    </aside>
                </div>
            </section>
            <CTA t={t} lang={lang} />
        </>
    );
}
