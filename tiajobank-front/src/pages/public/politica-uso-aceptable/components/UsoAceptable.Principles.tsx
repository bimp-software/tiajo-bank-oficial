import type { WithT } from "../../../../shared/types/common";

export default function Principles({ t }: WithT) {
    return (
        <>
            <article className="uso-aceptable-principles">
                <span>{t("principles.eyebrow")}</span>
                <h2>{t("principles.title")}</h2>
                <p>{t("principles.description")}</p>

                <ul>
                    <li>
                        <i className="bi bi-check-circle-fill" />
                        {t("principles.items.respect")}
                    </li>
                    <li>
                        <i className="bi bi-check-circle-fill" />
                        {t("principles.items.safety")}
                    </li>
                    <li>
                        <i className="bi bi-check-circle-fill" />
                        {t("principles.items.responsibility")}
                    </li>
                    <li>
                        <i className="bi bi-check-circle-fill" />
                        {t("principles.items.education")}
                    </li>
                </ul>
            </article>

            <article className="uso-aceptable-warning">
                <span className="uso-aceptable-warning__icon">
                    <i className="bi bi-exclamation-triangle-fill" />
                </span>

                <h2>{t("warning.title")}</h2>
                <p>{t("warning.description")}</p>
            </article>
        </>
    );
}
