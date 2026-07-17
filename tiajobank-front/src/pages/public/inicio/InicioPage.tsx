import { useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"

import Hero from "../inicio/components/Inicio.Hero"
import Methodology from "./components/Inicio.Methodology"
import HowItWorks from "./components/Inicio.HowItWorks"
import PlatformSection from "./components/Inicio.PlatformSection"
import FinalSection from "./components/Inicio.FinalSection"

import "../inicio/assets/css/index.css"

export default function InicioPage() {
    const { t } = useTranslation("inicio");
    const { lang = "es" } = useParams();

    return (
        <>
            <Hero t={t} lang={lang}/>
            <Methodology t={t}/>
            <HowItWorks t={t}/>
            <PlatformSection t={t} lang={lang}/>
            <FinalSection t={t} lang={lang}/>
        </>
    );
}
