import { Link } from "react-router-dom";
import type { WithTAndLang } from "../../../../shared/types/common";

export default function Explorer({ t, lang }: WithTAndLang) {
    const guideKeys = [
        "teachers",
        "students",
        "families",
        "methodologies",
        "tutorials",
        "administrators",
    ] as const;

    return (
        <section className="guias-section guias-explorer">
            <div className="guias-container">
                <div className="guias-heading guias-heading--left">
                    <div>
                        <span>{t("explorer.eyebrow")}</span>
                        <h2>{t("explorer.title")}</h2>
                    </div>

                    <p>{t("explorer.description")}</p>
                </div>

                <div className="guias-filters">
                    <button type="button" className="is-active">{t("explorer.filters.all")}</button>
                    <button type="button">{t("explorer.filters.teachers")}</button>
                    <button type="button">{t("explorer.filters.students")}</button>
                    <button type="button">{t("explorer.filters.families")}</button>
                    <button type="button">{t("explorer.filters.administrators")}</button>
                    <button type="button">{t("explorer.filters.methodologies")}</button>
                    <button type="button">{t("explorer.filters.tutorials")}</button>
                </div>

                <div className="guias-grid">
                    {guideKeys.map((key) => (
                        <article className="guias-card" key={key}>
                            <div className="guias-card__image">
                                <img
                                    src={`/assets/img/guias/${key}.webp`}
                                    alt={t(`explorer.items.${key}.imageAlt`)}
                                />
                                <span>{t(`explorer.items.${key}.category`)}</span>
                            </div>

                            <div className="guias-card__content">
                                <h3>{t(`explorer.items.${key}.title`)}</h3>
                                <p>{t(`explorer.items.${key}.description`)}</p>

                                <div className="guias-card__meta">
                                    <span>
                                        <i className="bi bi-clock" />
                                        {t(`explorer.items.${key}.time`)}
                                    </span>

                                    <span>
                                        <i className="bi bi-file-earmark-pdf" />
                                        PDF
                                    </span>
                                </div>

                                <Link to={`/${lang}/guias/${key}`}>
                                    {t("explorer.readGuide")}
                                    <i className="bi bi-arrow-right" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="guias-load-more">
                    <button type="button">
                        {t("explorer.loadMore")}
                        <i className="bi bi-chevron-down" />
                    </button>
                </div>
            </div>
        </section>
    );
}
