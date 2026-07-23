import { Link } from "react-router-dom";
import type { WithTAndLang } from "../../../../shared/types/common";

export default function CTA({ t, lang }: WithTAndLang) {
    return (
        <section className="cookies-cta">
            <div className="cookies-container">
                <div className="cookies-cta__panel">
                    <img
                        src="/assets/img/politica-cookies/pepe-cta.webp"
                        alt={t("cta.imageAlt")}
                    />

                    <div>
                        <h2>{t("cta.title")}</h2>
                        <p>{t("cta.description")}</p>
                    </div>

                    <Link to={`/${lang}/politicas/privacidad`}>
                        {t("cta.button")}
                        <i className="bi bi-arrow-right" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
