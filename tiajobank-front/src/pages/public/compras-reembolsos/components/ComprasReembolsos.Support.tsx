import { Link } from "react-router-dom";
import type { WithTAndLang } from "../../../../shared/types/common";

export default function Support({ t, lang }: WithTAndLang) {
    return (
        <article className="compras-reembolsos-support">
            <span>{t("support.eyebrow")}</span>
            <h2>{t("support.title")}</h2>
            <p>{t("support.description")}</p>

            <ul>
                <li>
                    <span><i className="bi bi-receipt-fill" /></span>
                    <div>
                        <strong>{t("support.items.receipt.title")}</strong>
                        <p>{t("support.items.receipt.text")}</p>
                    </div>
                </li>

                <li>
                    <span><i className="bi bi-arrow-counterclockwise" /></span>
                    <div>
                        <strong>{t("support.items.refund.title")}</strong>
                        <p>{t("support.items.refund.text")}</p>
                    </div>
                </li>

                <li>
                    <span><i className="bi bi-envelope-fill" /></span>
                    <div>
                        <strong>{t("support.items.contact.title")}</strong>
                        <p>{t("support.items.contact.text")}</p>
                    </div>
                </li>
            </ul>

            <Link to={`/${lang}/contacto`}>
                {t("support.button")}
                <i className="bi bi-arrow-right" />
            </Link>
        </article>
    );
}
