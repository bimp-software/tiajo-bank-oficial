import type { WithT } from "../../../../shared/types/common";

const sections = [
    ["purpose", "bi-bullseye"],
    ["scope", "bi-people"],
    ["channels", "bi-broadcast"],
    ["institutional", "bi-building"],
    ["educational", "bi-mortarboard"],
    ["minors", "bi-person-heart"],
    ["families", "bi-people-fill"],
    ["consent", "bi-check2-circle"],
    ["content", "bi-card-text"],
    ["prohibited", "bi-slash-circle"],
    ["moderation", "bi-eye"],
    ["notifications", "bi-bell"],
    ["records", "bi-archive"],
    ["reports", "bi-flag"],
    ["changes", "bi-pencil-square"],
    ["contact", "bi-envelope"],
] as const;

export default function Sections({ t }: WithT) {
    return (
        <div className="comunicaciones-sections">
            {sections.map(([key, icon], index) => (
                <section
                    id={`comunicaciones-${key}`}
                    className="comunicaciones-section"
                    key={key}
                >
                    <span className="comunicaciones-section__icon">
                        <i className={`bi ${icon}`} />
                    </span>

                    <div>
                        <h2>{index + 1}. {t(`sections.${key}.title`)}</h2>
                        <p>{t(`sections.${key}.text`)}</p>
                    </div>

                    <i className="bi bi-chevron-down comunicaciones-section__chevron" />
                </section>
            ))}
        </div>
    );
}
