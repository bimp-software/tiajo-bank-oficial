import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Hero from "./components/Contacto.Hero";
import Form from "./components/Contacto.Form";
import FAQ from "./components/Contacto.FAQ";
import Location from "./components/Contacto.Location";
import CTA from "./components/Contacto.CTA";

import "./assets/css/contacto.css";

export default function ContactoPage() {
    const { t } = useTranslation("contacto");
    const { lang = "es" } = useParams();

    return (
        <>
            <Hero t={t} />
            <section className="contacto-main">
                <div className="contacto-container contacto-main__grid">
                    <Form t={t} />
                    <div className="contacto-main__side">
                        <FAQ t={t} lang={lang} />
                        <Location t={t} />
                    </div>
                </div>
            </section>
            <CTA t={t} />
        </>
    );
}
