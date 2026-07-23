import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Hero from "./components/Nosotros.Hero";
import Purpose from "./components/Nosotros.Purpose";
import Differences from "./components/Nosotros.Differences";
import Team from "./components/Nosotros.Team";
import Impact from "./components/Nosotros.Impact";
import CTA from "./components/Nosotros.CTA";

import "./assets/css/sobre-nosotros.css";

export default function SobreNosotrosPage() {
    const { t } = useTranslation("sobre-nosotros");
    const { lang = "es" } = useParams();

    return (
        <>
            <Hero t={t} lang={lang} />
            <Purpose t={t} />
            <Differences t={t} />
            <Team t={t} />
            <Impact t={t} />
            <CTA t={t} lang={lang} />
        </>
    );
}
