import { Link } from "react-router-dom";
import type { WithTAndLang } from "../../../../shared/types/common";

export default function CTA({ t, lang }: WithTAndLang) {
    return (
        <section className="politicas-cta">
            <div className="politicas-container">
                <div className="politicas-cta__panel">
                    <img
                        src="/assets/img/politicas/pepe-cta.webp"
                        alt={t("cta.imageAlt")}
                    />

                    <div>
                        <h2>
                            {t("cta.title.before")}
                            <span>{t("cta.title.highlight")}</span>
                        </h2>
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
