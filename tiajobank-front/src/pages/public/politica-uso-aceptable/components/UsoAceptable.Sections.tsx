import type { WithT } from "../../../../shared/types/common";

const sections = [
    ["purpose", "bi-bullseye"],
    ["scope", "bi-people"],
    ["responsibleUse", "bi-hand-thumbs-up"],
    ["prohibitedConduct", "bi-slash-circle"],
    ["content", "bi-chat-square-text"],
    ["privacy", "bi-person-lock"],
    ["security", "bi-shield-lock"],
    ["communications", "bi-megaphone"],
    ["intellectualProperty", "bi-c-circle"],
    ["reporting", "bi-flag"],
    ["measures", "bi-exclamation-triangle"],
    ["changes", "bi-pencil-square"],
    ["contact", "bi-envelope"],
] as const;

export default function Sections({ t }: WithT) {
    return (
        <div className="uso-aceptable-sections">
            {sections.map(([key, icon], index) => (
                <section
                    id={`uso-aceptable-${key}`}
                    className="uso-aceptable-section"
                    key={key}
                >
                    <span className="uso-aceptable-section__icon">
                        <i className={`bi ${icon}`} />
                    </span>

                    <div>
                        <h2>
                            {index + 1}. {t(`sections.${key}.title`)}
                        </h2>
                        <p>{t(`sections.${key}.text`)}</p>
                    </div>

                    <i className="bi bi-chevron-down uso-aceptable-section__chevron" />
                </section>
            ))}
        </div>
    );
}
