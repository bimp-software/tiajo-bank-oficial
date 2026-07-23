import { Link } from "react-router-dom";
import type { WithTAndLang } from "../../../../shared/types/common";

export default function CTA({ t, lang }: WithTAndLang) {
    return (
        <section className="uso-aceptable-cta">
            <div className="uso-aceptable-container">
                <div className="uso-aceptable-cta__panel">
                    <img
                        src="/assets/img/politica-uso-aceptable/pepe-cta.webp"
                        alt={t("cta.imageAlt")}
                    />

                    <div>
                        <h2>{t("cta.title")}</h2>
                        <p>{t("cta.description")}</p>
                    </div>

                    <Link to={`/${lang}/registro`}>
                        {t("cta.button")}
                        <i className="bi bi-arrow-right" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
