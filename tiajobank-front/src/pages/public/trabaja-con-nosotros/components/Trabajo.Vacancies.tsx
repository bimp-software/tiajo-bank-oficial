import { Link } from "react-router-dom";
import type { WithTAndLang } from "../../../../shared/types/common";

export default function Vacancies({ t, lang }: WithTAndLang) {
    const vacancies = [
        ["developer", "bi-code-slash", "purple"],
        ["designer", "bi-palette-fill", "yellow"],
        ["marketing", "bi-megaphone-fill", "green"],
        ["support", "bi-headset", "blue"],
    ] as const;

    return (
        <div className="trabajo-vacancies">
            <div className="trabajo-section-title">
                <i className="bi bi-heart-fill" />
                <h2>{t("vacancies.title")}</h2>
            </div>

            <div className="trabajo-vacancies__list">
                {vacancies.map(([key, icon, tone]) => (
                    <Link
                        to={`/${lang}/trabaja-con-nosotros/${key}`}
                        className="trabajo-vacancy-card"
                        key={key}
                    >
                        <span className={`trabajo-vacancy-icon trabajo-vacancy-icon--${tone}`}>
                            <i className={`bi ${icon}`} />
                        </span>

                        <div>
                            <h3>{t(`vacancies.items.${key}.title`)}</h3>
                            <strong>{t(`vacancies.items.${key}.area`)}</strong>
                            <p>{t(`vacancies.items.${key}.text`)}</p>
                        </div>

                        <span className={`trabajo-badge trabajo-badge--${t(`vacancies.items.${key}.modeTone`)}`}>
                            {t(`vacancies.items.${key}.mode`)}
                        </span>

                        <i className="bi bi-chevron-right trabajo-vacancy-card__arrow" />
                    </Link>
                ))}
            </div>

            <div className="trabajo-vacancies__footer">
                <Link to={`/${lang}/trabaja-con-nosotros/vacantes`}>
                    {t("vacancies.viewAll")}
                    <i className="bi bi-arrow-right" />
                </Link>
            </div>
        </div>
    );
}
