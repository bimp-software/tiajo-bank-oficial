import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Hero from "./components/Ayuda.Hero";
import Categories from "./components/Ayuda.Categories";
import Popular from "./components/Ayuda.Popular";
import Guides from "./components/Ayuda.Guides";
import Contact from "./components/Ayuda.Contact";
import CTA from "./components/Ayuda.CTA";

import "./assets/css/ayuda.css";

export default function CentroAyudaPage() {
    const { t } = useTranslation("ayuda");
    const { lang = "es" } = useParams();

    return (
        <>
            <Hero t={t} />
            <Categories t={t} lang={lang} />
            <Popular t={t} lang={lang} />
            <Guides t={t} lang={lang} />
            <Contact t={t} />
            <CTA t={t} lang={lang} />
        </>
    );
}
