import { Link } from "react-router-dom";
import type { WithTAndLang } from "../../../../shared/types/common";

export default function CTA({ t, lang }: WithTAndLang) {
    return (
        <section className="trabajo-cta">
            <div className="trabajo-container">
                <div className="trabajo-cta__panel">
                    <img
                        src="/assets/img/trabaja-con-nosotros/pepe-cta.webp"
                        alt={t("cta.imageAlt")}
                    />

                    <div>
                        <h2>{t("cta.title")}</h2>
                        <p>{t("cta.description")}</p>
                    </div>

                    <div className="trabajo-cta__actions">
                        <Link to={`/${lang}/trabaja-con-nosotros/vacantes`}>
                            {t("cta.primary")}
                            <i className="bi bi-arrow-right" />
                        </Link>

                        <Link to={`/${lang}/trabaja-con-nosotros/postulacion-espontanea`}>
                            {t("cta.secondary")}
                            <i className="bi bi-arrow-right" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
