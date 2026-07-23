import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import HistoriaHero from "./components/Historia.Hero";
import HistoriaOrigen from "./components/Historia.Origen";
import HistoriaProblema from "./components/Historia.Problema";
import HistoriaNacimiento from "./components/Historia.Nacimiento";
import HistoriaEvolucion from "./components/Historia.Evolucion";
import HistoriaMetodologia from "./components/Historia.Metodologia";
import HistoriaValores from "./components/Historia.Valores";
import HistoriaFuturo from "./components/Historia.Futuro";
import HistoriaCTA from "./components/Historia.CTA";

import "./assets/css/historia.css";

export default function ConoceNuestraHistoriaPage() {
    const { t } = useTranslation("historia");
    const { lang = "es" } = useParams();

    return (
        <>
            <HistoriaHero t={t} lang={lang} />
            <HistoriaOrigen t={t} />
            <HistoriaProblema t={t} />
            <HistoriaNacimiento t={t} />
            <HistoriaEvolucion t={t} />
            <HistoriaMetodologia t={t} />
            <HistoriaValores t={t} />
            <HistoriaFuturo t={t} />
            <HistoriaCTA t={t} lang={lang} />
        </>
    );
}
