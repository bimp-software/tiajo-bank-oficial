import { Link } from "react-router-dom";
import type { WithTAndLang } from "../../../../shared/types/common";

export default function Commitment({ t, lang }: WithTAndLang) {
    return (
        <>
            <article className="privacidad-commitment">
                <span>{t("commitment.eyebrow")}</span>
                <h2>{t("commitment.title")}</h2>
                <p>{t("commitment.description")}</p>

                <ul>
                    <li><i className="bi bi-check-circle-fill" />{t("commitment.items.transparency")}</li>
                    <li><i className="bi bi-check-circle-fill" />{t("commitment.items.protection")}</li>
                    <li><i className="bi bi-check-circle-fill" />{t("commitment.items.compliance")}</li>
                    <li><i className="bi bi-check-circle-fill" />{t("commitment.items.rights")}</li>
                </ul>
            </article>

            <article className="privacidad-priority">
                <span className="privacidad-priority__icon">
                    <i className="bi bi-lock-fill" />
                </span>
                <h2>{t("priority.title")}</h2>
                <p>{t("priority.description")}</p>

                <Link to={`/${lang}/seguridad`}>
                    {t("priority.action")}
                    <i className="bi bi-arrow-right" />
                </Link>
            </article>
        </>
    );
}
