import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import "../../../shared/assets/styles/beneficios.css"; 

import Hero  from "../../components/beneficios/hero"; 
import For from "../../components/beneficios/for";
import Boost from "../../components/beneficios/boost";
import Cta from "../../components/beneficios/cta";

export default function BenefitsPage() {
    const { t,i18n } = useTranslation("beneficios");
    const { lang = "es" } = useParams();

    useEffect(() => {
        if (i18n.language !== lang) {
            i18n.changeLanguage(lang);
        }
    }, [lang, i18n]);

    return (
        <>
            <Hero t={t}/>
            <For t={t}/>
            <Boost t={t}/>
            <Cta t={t} lang={lang}/>
        </>
    );
}