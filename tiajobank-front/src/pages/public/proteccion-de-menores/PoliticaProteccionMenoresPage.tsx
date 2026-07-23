import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Hero from "./components/ProteccionMenores.Hero";
import Index from "./components/ProteccionMenores.Index";
import Sections from "./components/ProteccionMenores.Sections";
import Commitments from "./components/ProteccionMenores.Commitments";
import Reporting from "./components/ProteccionMenores.Reporting";
import CTA from "./components/ProteccionMenores.CTA";

import "./assets/css/politica-proteccion-menores.css";

export default function PoliticaProteccionMenoresPage() {
    const { t } = useTranslation("proteccion-menores");
    const { lang = "es" } = useParams();

    return (
        <>
            <Hero t={t} />

            <section className="proteccion-menores-content">
                <div className="proteccion-menores-container proteccion-menores-content__grid">
                    <Index t={t} />
                    <Sections t={t} />

                    <aside className="proteccion-menores-sidebar">
                        <Commitments t={t} />
                        <Reporting t={t} lang={lang} />
                    </aside>
                </div>
            </section>

            <CTA t={t} lang={lang} />
        </>
    );
}
