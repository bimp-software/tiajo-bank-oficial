import { Link } from "react-router-dom";
import type { WithTAndLang } from "../../../../shared/types/common";

export default function CTA({ t, lang }: WithTAndLang) {
    return (
        <section className="compras-reembolsos-cta">
            <div className="compras-reembolsos-container">
                <div className="compras-reembolsos-cta__panel">
                    <img
                        src="/assets/img/politica-compras-reembolsos/pepe-cta.webp"
                        alt={t("cta.imageAlt")}
                    />

                    <div>
                        <h2>{t("cta.title")}</h2>
                        <p>{t("cta.description")}</p>
                    </div>

                    <Link to={`/${lang}/contacto`}>
                        {t("cta.button")}
                        <i className="bi bi-arrow-right" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
