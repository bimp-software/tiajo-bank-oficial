import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Hero from "./components/Trabajo.Hero";
import Benefits from "./components/Trabajo.Benefits";
import Vacancies from "./components/Trabajo.Vacancies";
import Process from "./components/Trabajo.Process";
import Testimonial from "./components/Trabajo.Testimonial";
import CTA from "./components/Trabajo.CTA";

import "./assets/css/trabaja-con-nosotros.css";

export default function TrabajaConNosotrosPage() {
    const { t } = useTranslation("trabaja-con-nosotros");
    const { lang = "es" } = useParams();

    return (
        <>
            <Hero t={t} lang={lang} />
            <Benefits t={t} />
            <section className="trabajo-content">
                <div className="trabajo-container trabajo-content__grid">
                    <Vacancies t={t} lang={lang} />
                    <div className="trabajo-content__side">
                        <Process t={t} />
                        <Testimonial t={t} />
                    </div>
                </div>
            </section>
            <CTA t={t} lang={lang} />
        </>
    );
}
