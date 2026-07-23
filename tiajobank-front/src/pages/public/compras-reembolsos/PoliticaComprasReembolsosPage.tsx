import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Hero from "./components/ComprasReembolsos.Hero";
import Index from "./components/ComprasReembolsos.Index";
import Sections from "./components/ComprasReembolsos.Sections";
import Summary from "./components/ComprasReembolsos.Summary";
import Support from "./components/ComprasReembolsos.Support";
import CTA from "./components/ComprasReembolsos.CTA";

import "./assets/css/politica-compras-reembolsos.css";

export default function PoliticaComprasReembolsosPage() {
    const { t } = useTranslation("compras-reembolsos");
    const { lang = "es" } = useParams();

    return (
        <>
            <Hero t={t} />

            <section className="compras-reembolsos-content">
                <div className="compras-reembolsos-container compras-reembolsos-content__grid">
                    <Index t={t} />
                    <Sections t={t} />

                    <aside className="compras-reembolsos-sidebar">
                        <Summary t={t} />
                        <Support t={t} lang={lang} />
                    </aside>
                </div>
            </section>

            <CTA t={t} lang={lang} />
        </>
    );
}
