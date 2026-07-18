import { useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"

import "./assets/css/funcionalidades.css"

import Hero from "./components/Funcionalidades.Hero"
import Main from "./components/Funcionalidades.Main"

export default function FeaturesPage() {
    const { t } = useTranslation("funcionalidades");
    const { lang = "es" } = useParams();

    return (
        <>
            <Hero t={t} lang={lang}/>

            <Main t={t}/>
            
        </>
    );
}