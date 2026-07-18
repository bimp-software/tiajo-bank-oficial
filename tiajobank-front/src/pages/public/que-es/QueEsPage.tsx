import { useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"

import Hero from "./components/QueEs.Hero"
import Benefits from "./components/QueEs.Benefits"
import HowItWorks from "./components/QueEs.HowItWorks"
import Community from "./components/QueEs.Community"

import "./assets/css/que-es.css"

export default function QueEsPage() {
    const { t } = useTranslation("que-es");
    const { lang = "es" } = useParams();

    return (
        <>
            <Hero t={t} lang={lang}/>
            <Benefits t={t}/>
            <HowItWorks t={t}/>
            <Community t={t}/>
        </>
    );
}
