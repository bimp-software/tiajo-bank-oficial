import type { WithT } from "../../../../shared/types/common";

export default function Preferences({ t }: WithT) {
    return (
        <>
            <article className="cookies-preferences">
                <span>{t("preferences.eyebrow")}</span>
                <h2>{t("preferences.title")}</h2>
                <p>{t("preferences.description")}</p>

                <ul>
                    <li>
                        <i className="bi bi-check-circle-fill" />
                        {t("preferences.items.essential")}
                    </li>
                    <li>
                        <i className="bi bi-check-circle-fill" />
                        {t("preferences.items.functional")}
                    </li>
                    <li>
                        <i className="bi bi-check-circle-fill" />
                        {t("preferences.items.analytics")}
                    </li>
                    <li>
                        <i className="bi bi-check-circle-fill" />
                        {t("preferences.items.personalization")}
                    </li>
                </ul>

                <button type="button">
                    <i className="bi bi-sliders" />
                    {t("preferences.button")}
                </button>
            </article>

            <article className="cookies-essential">
                <span className="cookies-essential__icon">
                    <i className="bi bi-lock-fill" />
                </span>
                <h2>{t("essentialCard.title")}</h2>
                <p>{t("essentialCard.description")}</p>
            </article>
        </>
    );
}
