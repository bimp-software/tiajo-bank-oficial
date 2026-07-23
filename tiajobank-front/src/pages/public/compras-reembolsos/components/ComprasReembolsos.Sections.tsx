import type { WithT } from "../../../../shared/types/common";

const sections = [
    ["scope", "bi-bullseye"],
    ["products", "bi-box-seam"],
    ["prices", "bi-tags"],
    ["payment", "bi-credit-card"],
    ["billing", "bi-receipt"],
    ["subscriptions", "bi-calendar-check"],
    ["renewals", "bi-arrow-repeat"],
    ["cancellations", "bi-x-circle"],
    ["refunds", "bi-arrow-counterclockwise"],
    ["exceptions", "bi-exclamation-diamond"],
    ["processing", "bi-hourglass-split"],
    ["promotions", "bi-gift"],
    ["taxes", "bi-percent"],
    ["changes", "bi-pencil-square"],
    ["contact", "bi-envelope"],
] as const;

export default function Sections({ t }: WithT) {
    return (
        <div className="compras-reembolsos-sections">
            {sections.map(([key, icon], index) => (
                <section
                    id={`compras-reembolsos-${key}`}
                    className="compras-reembolsos-section"
                    key={key}
                >
                    <span className="compras-reembolsos-section__icon">
                        <i className={`bi ${icon}`} />
                    </span>

                    <div>
                        <h2>{index + 1}. {t(`sections.${key}.title`)}</h2>
                        <p>{t(`sections.${key}.text`)}</p>
                    </div>

                    <i className="bi bi-chevron-down compras-reembolsos-section__chevron" />
                </section>
            ))}
        </div>
    );
}
