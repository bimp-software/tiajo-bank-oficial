import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import "../../../shared/assets/styles/que-es.css";

import Hero from "../../components/que-es/hero";
import Benefits from "../../components/que-es/benefit";
import HowItWorks from "../../components/que-es/howitworks";
import Community from "../../components/que-es/community";



export default function QueEsPage() {
    const { t,i18n } = useTranslation("que-es");
    const { lang = "es" } = useParams();

    useEffect(() => {
        if (i18n.language !== lang) {
            i18n.changeLanguage(lang);
        }
    }, [lang, i18n]);

    return (
        <>
            <Hero t={t} lang={lang}/>  

            <Benefits t={t}/>

            <HowItWorks t={t}/>

            <Community t={t}/>
        </>
    );
}