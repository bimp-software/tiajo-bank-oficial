import type { WithT } from "../../../../shared/types/common";

export default function Commitment({ t }: WithT) {
    return (
        <article className="politicas-commitment">
            <div>
                <span>{t("commitment.eyebrow")}</span>
                <h2>{t("commitment.title")}</h2>
                <p>{t("commitment.description")}</p>
            </div>

            <ul>
                <li><i className="bi bi-check-circle-fill" />{t("commitment.items.transparency")}</li>
                <li><i className="bi bi-check-circle-fill" />{t("commitment.items.privacy")}</li>
                <li><i className="bi bi-check-circle-fill" />{t("commitment.items.security")}</li>
                <li><i className="bi bi-check-circle-fill" />{t("commitment.items.fairness")}</li>
            </ul>

            <img
                src="/assets/img/politicas/pepe-compromiso.webp"
                alt={t("commitment.imageAlt")}
            />
        </article>
    );
}
