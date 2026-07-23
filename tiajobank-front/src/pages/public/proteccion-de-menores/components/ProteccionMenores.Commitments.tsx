import type { WithT } from "../../../../shared/types/common";

export default function Commitments({ t }: WithT) {
    return (
        <>
            <article className="proteccion-menores-commitments">
                <span>{t("commitments.eyebrow")}</span>
                <h2>{t("commitments.title")}</h2>
                <p>{t("commitments.description")}</p>

                <ul>
                    <li>
                        <i className="bi bi-check-circle-fill" />
                        {t("commitments.items.safety")}
                    </li>
                    <li>
                        <i className="bi bi-check-circle-fill" />
                        {t("commitments.items.privacy")}
                    </li>
                    <li>
                        <i className="bi bi-check-circle-fill" />
                        {t("commitments.items.respect")}
                    </li>
                    <li>
                        <i className="bi bi-check-circle-fill" />
                        {t("commitments.items.response")}
                    </li>
                </ul>
            </article>

            <article className="proteccion-menores-alert">
                <span className="proteccion-menores-alert__icon">
                    <i className="bi bi-exclamation-triangle-fill" />
                </span>

                <h2>{t("alert.title")}</h2>
                <p>{t("alert.description")}</p>
            </article>
        </>
    );
}
