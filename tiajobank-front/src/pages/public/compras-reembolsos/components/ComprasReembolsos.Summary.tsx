import type { WithT } from "../../../../shared/types/common";

export default function Summary({ t }: WithT) {
    return (
        <>
            <article className="compras-reembolsos-summary">
                <span>{t("summary.eyebrow")}</span>
                <h2>{t("summary.title")}</h2>
                <p>{t("summary.description")}</p>

                <ul>
                    <li><i className="bi bi-check-circle-fill" />{t("summary.items.clearPrices")}</li>
                    <li><i className="bi bi-check-circle-fill" />{t("summary.items.securePayments")}</li>
                    <li><i className="bi bi-check-circle-fill" />{t("summary.items.invoices")}</li>
                    <li><i className="bi bi-check-circle-fill" />{t("summary.items.support")}</li>
                </ul>
            </article>

            <article className="compras-reembolsos-warning">
                <span className="compras-reembolsos-warning__icon">
                    <i className="bi bi-info-circle-fill" />
                </span>
                <h2>{t("warning.title")}</h2>
                <p>{t("warning.description")}</p>
            </article>
        </>
    );
}
