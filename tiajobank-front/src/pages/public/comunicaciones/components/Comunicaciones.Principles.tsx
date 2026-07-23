import type { WithT } from "../../../../shared/types/common";

export default function Principles({ t }: WithT) {
    return (
        <>
            <article className="comunicaciones-principles">
                <span>{t("principles.eyebrow")}</span>
                <h2>{t("principles.title")}</h2>
                <p>{t("principles.description")}</p>

                <ul>
                    <li><i className="bi bi-check-circle-fill" />{t("principles.items.respect")}</li>
                    <li><i className="bi bi-check-circle-fill" />{t("principles.items.purpose")}</li>
                    <li><i className="bi bi-check-circle-fill" />{t("principles.items.privacy")}</li>
                    <li><i className="bi bi-check-circle-fill" />{t("principles.items.safety")}</li>
                </ul>
            </article>

            <article className="comunicaciones-warning">
                <span className="comunicaciones-warning__icon">
                    <i className="bi bi-exclamation-triangle-fill" />
                </span>

                <h2>{t("warning.title")}</h2>
                <p>{t("warning.description")}</p>
            </article>
        </>
    );
}
