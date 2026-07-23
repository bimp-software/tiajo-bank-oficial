import type { WithT } from "../../../../shared/types/common";

export default function Acceptance({ t }: WithT) {
    return (
        <>
            <article className="terminos-acceptance">
                <span>{t("acceptance.eyebrow")}</span>
                <h2>{t("acceptance.title")}</h2>
                <p>{t("acceptance.description")}</p>

                <ul>
                    <li>
                        <i className="bi bi-check-circle-fill" />
                        {t("acceptance.items.read")}
                    </li>
                    <li>
                        <i className="bi bi-check-circle-fill" />
                        {t("acceptance.items.understand")}
                    </li>
                    <li>
                        <i className="bi bi-check-circle-fill" />
                        {t("acceptance.items.agree")}
                    </li>
                    <li>
                        <i className="bi bi-check-circle-fill" />
                        {t("acceptance.items.responsibility")}
                    </li>
                </ul>
            </article>

            <article className="terminos-responsibility">
                <span className="terminos-responsibility__icon">
                    <i className="bi bi-shield-fill-check" />
                </span>

                <h2>{t("responsibility.title")}</h2>
                <p>{t("responsibility.description")}</p>
            </article>
        </>
    );
}
