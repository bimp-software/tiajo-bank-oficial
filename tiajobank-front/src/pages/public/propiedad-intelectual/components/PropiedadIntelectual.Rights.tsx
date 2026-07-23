import type { WithT } from "../../../../shared/types/common";

export default function Rights({ t }: WithT) {
    return (
        <>
            <article className="propiedad-intelectual-rights">
                <span>{t("rights.eyebrow")}</span>
                <h2>{t("rights.title")}</h2>
                <p>{t("rights.description")}</p>

                <ul>
                    <li><i className="bi bi-check-circle-fill" />{t("rights.items.brand")}</li>
                    <li><i className="bi bi-check-circle-fill" />{t("rights.items.software")}</li>
                    <li><i className="bi bi-check-circle-fill" />{t("rights.items.content")}</li>
                    <li><i className="bi bi-check-circle-fill" />{t("rights.items.design")}</li>
                </ul>
            </article>

            <article className="propiedad-intelectual-warning">
                <span className="propiedad-intelectual-warning__icon">
                    <i className="bi bi-exclamation-triangle-fill" />
                </span>
                <h2>{t("warning.title")}</h2>
                <p>{t("warning.description")}</p>
            </article>
        </>
    );
}
