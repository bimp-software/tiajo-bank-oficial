import { Link } from "react-router-dom";
import type { WithTAndLang } from "../../../../shared/types/common";

export default function Reporting({ t, lang }: WithTAndLang) {
    return (
        <article className="proteccion-menores-reporting">
            <span>{t("reporting.eyebrow")}</span>
            <h2>{t("reporting.title")}</h2>
            <p>{t("reporting.description")}</p>

            <ul>
                <li>
                    <span>
                        <i className="bi bi-flag-fill" />
                    </span>
                    <div>
                        <strong>{t("reporting.items.report.title")}</strong>
                        <p>{t("reporting.items.report.text")}</p>
                    </div>
                </li>

                <li>
                    <span>
                        <i className="bi bi-building-fill-check" />
                    </span>
                    <div>
                        <strong>{t("reporting.items.school.title")}</strong>
                        <p>{t("reporting.items.school.text")}</p>
                    </div>
                </li>

                <li>
                    <span>
                        <i className="bi bi-envelope-fill" />
                    </span>
                    <div>
                        <strong>{t("reporting.items.contact.title")}</strong>
                        <p>{t("reporting.items.contact.text")}</p>
                    </div>
                </li>
            </ul>

            <Link to={`/${lang}/contacto`}>
                {t("reporting.button")}
                <i className="bi bi-arrow-right" />
            </Link>
        </article>
    );
}
