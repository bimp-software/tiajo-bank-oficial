import { Link } from "react-router-dom";
import type { WithTAndLang } from "../../../../shared/types/common";

export default function Categories({ t, lang }: WithTAndLang) {
    const categories = [
        ["start", "bi-rocket-takeoff", "green"],
        ["account", "bi-person-gear", "purple"],
        ["classroom", "bi-mortarboard", "yellow"],
        ["coins", "bi-coin", "orange"],
        ["reports", "bi-bar-chart-line", "blue"],
        ["security", "bi-shield-check", "pink"],
    ] as const;

    return (
        <section className="ayuda-section ayuda-categories">
            <div className="ayuda-container">
                <div className="ayuda-heading">
                    <span>{t("categories.eyebrow")}</span>
                    <h2>{t("categories.title")}</h2>
                    <p>{t("categories.description")}</p>
                </div>

                <div className="ayuda-categories__grid">
                    {categories.map(([key, icon, tone]) => (
                        <Link
                            to={`/${lang}/centro-de-ayuda/${key}`}
                            className="ayuda-category-card"
                            key={key}
                        >
                            <span className={`ayuda-category-card__icon ayuda-category-card__icon--${tone}`}>
                                <i className={`bi ${icon}`} />
                            </span>

                            <div>
                                <h3>{t(`categories.items.${key}.title`)}</h3>
                                <p>{t(`categories.items.${key}.text`)}</p>
                            </div>

                            <i className="bi bi-arrow-right ayuda-category-card__arrow" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
