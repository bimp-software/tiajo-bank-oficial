import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Hero from "./components/PropiedadIntelectual.Hero";
import Index from "./components/PropiedadIntelectual.Index";
import Sections from "./components/PropiedadIntelectual.Sections";
import Rights from "./components/PropiedadIntelectual.Rights";
import Reporting from "./components/PropiedadIntelectual.Reporting";
import CTA from "./components/PropiedadIntelectual.CTA";

import "./assets/css/politica-propiedad-intelectual.css";

export default function PoliticaPropiedadIntelectualPage() {
    const { t } = useTranslation("propiedad-intelectual");
    const { lang = "es" } = useParams();

    return (
        <>
            <Hero t={t} />

            <section className="propiedad-intelectual-content">
                <div className="propiedad-intelectual-container propiedad-intelectual-content__grid">
                    <Index t={t} />
                    <Sections t={t} />

                    <aside className="propiedad-intelectual-sidebar">
                        <Rights t={t} />
                        <Reporting t={t} lang={lang} />
                    </aside>
                </div>
            </section>

            <CTA t={t} lang={lang} />
        </>
    );
}
