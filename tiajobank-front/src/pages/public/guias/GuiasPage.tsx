import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Hero from "./components/Guias.Hero";
import Benefits from "./components/Guias.Benefits";
import Explorer from "./components/Guias.Explorer";
import Featured from "./components/Guias.Featured";
import Resources from "./components/Guias.Resources";
import Process from "./components/Guias.Process";

import "./assets/css/guias.css";

export default function GuiasPage() {
    const { t } = useTranslation("guias");
    const { lang = "es" } = useParams();

    return (
        <>
            <Hero t={t} />
            <Benefits t={t} />
            <Explorer t={t} lang={lang} />
            <Featured t={t} lang={lang} />
            <Resources t={t} />
            <Process t={t} />
        </>
    );
}
