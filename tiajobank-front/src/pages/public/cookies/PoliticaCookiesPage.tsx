import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Hero from "./components/Cookies.Hero";
import Index from "./components/Cookies.Index";
import Sections from "./components/Cookies.Sections";
import Preferences from "./components/Cookies.Preferences";
import Support from "./components/Cookies.Support";
import CTA from "./components/Cookies.CTA";

import "./assets/css/politica-cookies.css";

export default function PoliticaCookiesPage() {
    const { t } = useTranslation("cookies");
    const { lang = "es" } = useParams();

    return (
        <>
            <Hero t={t} />

            <section className="cookies-content">
                <div className="cookies-container cookies-content__grid">
                    <Index t={t} />
                    <Sections t={t} />

                    <aside className="cookies-sidebar">
                        <Preferences t={t} />
                        <Support t={t} lang={lang} />
                    </aside>
                </div>
            </section>

            <CTA t={t} lang={lang} />
        </>
    );
}
