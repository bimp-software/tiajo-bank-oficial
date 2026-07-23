import { Link } from "react-router-dom";
import type { WithTAndLang } from "../../../../shared/types/common";

export default function Featured({ t, lang }: WithTAndLang) {
    return (
        <section className="guias-section guias-featured">
            <div className="guias-container">
                <div className="guias-featured__grid">
                    <article className="guias-featured__card">
                        <span className="guias-featured__eyebrow">
                            {t("featured.eyebrow")}
                        </span>

                        <img
                            src="/assets/img/guias/guia-destacada.webp"
                            alt={t("featured.imageAlt")}
                        />

                        <h2>{t("featured.title")}</h2>
                        <p>{t("featured.description")}</p>

                        <div className="guias-featured__meta">
                            <span>
                                <i className="bi bi-clock" />
                                {t("featured.time")}
                            </span>
                            <span>
                                <i className="bi bi-file-earmark-pdf" />
                                PDF
                            </span>
                        </div>

                        <Link to={`/${lang}/guias/aventura-inolvidable`}>
                            {t("featured.button")}
                            <i className="bi bi-download" />
                        </Link>
                    </article>

                    <div className="guias-featured__copy">
                        <span>{t("featured.sideEyebrow")}</span>
                        <h2>{t("featured.sideTitle")}</h2>
                        <p>{t("featured.sideDescription")}</p>

                        <ul>
                            <li>
                                <i className="bi bi-check-circle-fill" />
                                {t("featured.points.practical")}
                            </li>
                            <li>
                                <i className="bi bi-check-circle-fill" />
                                {t("featured.points.visual")}
                            </li>
                            <li>
                                <i className="bi bi-check-circle-fill" />
                                {t("featured.points.ready")}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
