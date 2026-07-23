import { Link } from "react-router-dom";
import type { WithTAndLang } from "../../../../shared/types/common";

export default function Support({ t, lang }: WithTAndLang) {
    return (
        <article className="uso-aceptable-support">
            <span>{t("support.eyebrow")}</span>
            <h2>{t("support.title")}</h2>
            <p>{t("support.description")}</p>

            <ul>
                <li>
                    <span>
                        <i className="bi bi-flag-fill" />
                    </span>
                    <div>
                        <strong>{t("support.items.report.title")}</strong>
                        <p>{t("support.items.report.text")}</p>
                    </div>
                </li>

                <li>
                    <span>
                        <i className="bi bi-question-circle-fill" />
                    </span>
                    <div>
                        <strong>{t("support.items.help.title")}</strong>
                        <p>{t("support.items.help.text")}</p>
                    </div>
                </li>

                <li>
                    <span>
                        <i className="bi bi-envelope-fill" />
                    </span>
                    <div>
                        <strong>{t("support.items.contact.title")}</strong>
                        <p>{t("support.items.contact.text")}</p>
                    </div>
                </li>
            </ul>

            <Link to={`/${lang}/centro-de-ayuda`}>
                {t("support.button")}
                <i className="bi bi-arrow-right" />
            </Link>
        </article>
    );
}
