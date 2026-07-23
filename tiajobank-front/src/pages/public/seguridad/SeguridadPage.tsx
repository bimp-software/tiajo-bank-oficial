import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Hero from "./components/Seguridad.Hero";
import Protection from "./components/Seguridad.Protection";
import Standards from "./components/Seguridad.Standards";
import Privacy from "./components/Seguridad.Privacy";
import Practices from "./components/Seguridad.Practices";
import Support from "./components/Seguridad.Support";

import "./assets/css/seguridad.css";

export default function SeguridadPage() {
    const { t } = useTranslation("seguridad");
    const { lang = "es" } = useParams();

    return (
        <div className="seguridad-page">
            <Hero t={t} />
            <Protection t={t} />
            <Standards t={t} />
            <Privacy t={t} />
            <Practices t={t} />
            <Support t={t} lang={lang} />
        </div>
    );
}