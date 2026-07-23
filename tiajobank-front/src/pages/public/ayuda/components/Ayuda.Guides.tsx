import { Link } from "react-router-dom";
import type { WithTAndLang } from "../../../../shared/types/common";

export default function Guides({ t, lang }: WithTAndLang) {
    return (
        <section className="ayuda-section ayuda-guides">
            <div className="ayuda-container">
                <div className="ayuda-guides__panel">
                    <div className="ayuda-guides__content">
                        <span>{t("guides.eyebrow")}</span>
                        <h2>{t("guides.title")}</h2>
                        <p>{t("guides.description")}</p>

                        <ul>
                            <li><i className="bi bi-check-circle-fill" />{t("guides.points.steps")}</li>
                            <li><i className="bi bi-check-circle-fill" />{t("guides.points.visual")}</li>
                            <li><i className="bi bi-check-circle-fill" />{t("guides.points.downloadable")}</li>
                        </ul>

                        <Link to={`/${lang}/guias`}>
                            {t("guides.button")}
                            <i className="bi bi-arrow-right" />
                        </Link>
                    </div>

                    <div className="ayuda-guides__visual">
                        <img
                            src="/assets/img/ayuda/pepe-guias-ayuda.webp"
                            alt={t("guides.imageAlt")}
                        />

                        <article>
                            <i className="bi bi-file-earmark-pdf-fill" />
                            <div>
                                <strong>{t("guides.card.title")}</strong>
                                <p>{t("guides.card.text")}</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
