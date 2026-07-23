import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Hero from "./components/Politicas.Hero";
import Cards from "./components/Politicas.Cards";
import Commitment from "./components/Politicas.Commitment";
import Support from "./components/Politicas.Support";
import Notice from "./components/Politicas.Notice";
import CTA from "./components/Politicas.CTA";

import "./assets/css/politicas.css";

export default function PoliticasPage() {
    const { t } = useTranslation("politicas");
    const { lang = "es" } = useParams();

    return (
        <>
            <Hero t={t} />
            <section className="politicas-content">
                <div className="politicas-container politicas-content__grid">
                    <div className="politicas-content__main">
                        <Cards t={t} lang={lang} />
                        <Notice t={t} />
                    </div>

                    <aside className="politicas-content__side">
                        <Commitment t={t} />
                        <Support t={t} lang={lang} />
                    </aside>
                </div>
            </section>
            <CTA t={t} lang={lang} />
        </>
    );
}
