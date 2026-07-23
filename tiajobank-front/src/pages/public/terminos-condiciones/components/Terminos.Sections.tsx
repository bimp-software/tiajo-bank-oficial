import type { WithT } from "../../../../shared/types/common";

const sections = [
    ["acceptance", "bi-check-circle", "green"],
    ["service", "bi-grid", "green"],
    ["registration", "bi-person-plus", "green"],
    ["responsibilities", "bi-person-check", "green"],
    ["intellectualProperty", "bi-c-circle", "green"],
    ["userContent", "bi-chat-square-text", "green"],
    ["payments", "bi-credit-card", "green"],
    ["suspension", "bi-person-x", "green"],
    ["liability", "bi-exclamation-triangle", "green"],
    ["changes", "bi-pencil-square", "green"],
    ["law", "bi-balance-scale", "green"],
    ["contact", "bi-envelope", "green"],
] as const;

export default function Sections({ t }: WithT) {
    return (
        <div className="terminos-sections">
            {sections.map(([key, icon, tone], index) => (
                <section
                    id={`terminos-${key}`}
                    className="terminos-section"
                    key={key}
                >
                    <span className={`terminos-section__icon terminos-section__icon--${tone}`}>
                        <i className={`bi ${icon}`} />
                    </span>

                    <div>
                        <h2>
                            {index + 1}. {t(`sections.${key}.title`)}
                        </h2>
                        <p>{t(`sections.${key}.text`)}</p>
                    </div>

                    <i className="bi bi-chevron-down terminos-section__chevron" />
                </section>
            ))}
        </div>
    );
}
