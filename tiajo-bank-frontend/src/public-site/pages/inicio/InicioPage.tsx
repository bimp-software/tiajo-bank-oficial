import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import "../../../shared/assets/styles/index.css";


import Hero from "../../components/Inicio/hero";
import Methodology from "../../components/Inicio/methodology";
import HowItWorks from "../../components/Inicio/howitworks";
import PlatformSection from "../../components/Inicio/plataformsection";
import FinalSection from "../../components/Inicio/finalsection";


export default function Inicio() {
    const { t,i18n } = useTranslation("inicio");
    const { lang = "es" } = useParams();

    useEffect(() => {
        if (i18n.language !== lang) {
            i18n.changeLanguage(lang);
        }
    }, [lang, i18n]);

    return (
        <>
            <Hero t={t} lang={lang}/>

            <Methodology t={t} />

            <HowItWorks t={t} />

            <PlatformSection t={t} lang={lang} />

            <FinalSection t={t} lang={lang}/>            
        </>
    );
}