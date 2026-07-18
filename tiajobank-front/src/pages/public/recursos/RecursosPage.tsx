import { useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"

import Hero from "./components/Recursos.Hero"
import Categories from "./components/Recursos.Categories"
import Featured from "./components/Recursos.Featured"
import Formats from "./components/Recursos.Formats"
import Share from "./components/Recursos.Share"

import "./assets/css/recursos.css"

export default function RecursosPage() {
    const { t } = useTranslation("recursos");
    const { lang = "es" } = useParams();

    return (
        <>
            <Hero t={t}/>
            <Categories t={t}/>
            <Featured t={t} lang={lang}/>
            <Formats t={t}/>
            <Share t={t}/>
        </>
    );
}