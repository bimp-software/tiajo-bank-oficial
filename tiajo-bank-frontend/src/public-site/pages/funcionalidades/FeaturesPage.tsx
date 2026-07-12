import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import "../../../shared/assets/styles/funcionalidades.css";

import Hero from "../../components/funcionalidades/hero";
import Main from "../../components/funcionalidades/main";

export default function FeaturesPage() {
    const { t, i18n } = useTranslation("funcionalidades");
    const { lang = "es" } = useParams();

    useEffect(() => {
        if (i18n.language !== lang) {
            i18n.changeLanguage(lang);
        }
    }, [lang, i18n]);

    return (
        <>
            <Hero t={t} lang={lang}/>

            <Main t={t}/>
            
        </>
    );
}