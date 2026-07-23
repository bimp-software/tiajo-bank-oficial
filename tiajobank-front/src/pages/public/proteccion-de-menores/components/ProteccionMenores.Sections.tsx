import type { WithT } from "../../../../shared/types/common";

const sections = [
    ["purpose", "bi-bullseye"],
    ["scope", "bi-people"],
    ["bestInterest", "bi-heart"],
    ["safeEnvironment", "bi-house-heart"],
    ["accounts", "bi-person-badge"],
    ["data", "bi-database-lock"],
    ["communications", "bi-chat-heart"],
    ["content", "bi-image"],
    ["prohibitedConduct", "bi-slash-circle"],
    ["moderation", "bi-eye"],
    ["reporting", "bi-flag"],
    ["response", "bi-lightning-charge"],
    ["families", "bi-people-fill"],
    ["training", "bi-mortarboard"],
    ["changes", "bi-pencil-square"],
    ["contact", "bi-envelope"],
] as const;

export default function Sections({ t }: WithT) {
    return (
        <div className="proteccion-menores-sections">
            {sections.map(([key, icon], index) => (
                <section
                    id={`proteccion-menores-${key}`}
                    className="proteccion-menores-section"
                    key={key}
                >
                    <span className="proteccion-menores-section__icon">
                        <i className={`bi ${icon}`} />
                    </span>

                    <div>
                        <h2>
                            {index + 1}. {t(`sections.${key}.title`)}
                        </h2>
                        <p>{t(`sections.${key}.text`)}</p>
                    </div>

                    <i className="bi bi-chevron-down proteccion-menores-section__chevron" />
                </section>
            ))}
        </div>
    );
}
