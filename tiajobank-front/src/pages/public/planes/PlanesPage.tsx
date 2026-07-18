import { useTranslation } from "react-i18next"

import Hero from "./components/Planes.Hero"
import Pricing from "./components/Planes.Pricing"
import Comparison from "./components/Planes.Comparison"
import Help from "./components/Planes.Help"

import "./assets/css/planes.css"

export default function PlanesPage() {
    const { t } = useTranslation("planes");

    return (
        <>
            <Hero t={t}/>
            <Pricing t={t}/>
            <Comparison t={t}/>
            <Help t={t}/>
        </>
    );
}