import { useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"

import "./assets/css/beneficios.css"

import Hero  from "./components/Beneficios.Hero"
import For from "./components/Beneficios.For"
import Boost from "./components/Beneficios.Boost"
import Cta from "./components/Beneficios.Cta"

export default function BeneficiosPage() {
    const { t } = useTranslation("beneficios");
    const { lang = "es" } = useParams();

    return (
        <>
            <Hero t={t}/>
            <For t={t}/>
            <Boost t={t}/>
            <Cta t={t} lang={lang}/>
        </>
    );
}