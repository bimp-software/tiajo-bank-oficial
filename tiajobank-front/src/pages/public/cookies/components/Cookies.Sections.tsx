import type { WithT } from "../../../../shared/types/common";

const sections = [
    ["what", "bi-question-circle"],
    ["purpose", "bi-bullseye"],
    ["types", "bi-grid"],
    ["essential", "bi-shield-check"],
    ["functional", "bi-toggles"],
    ["analytics", "bi-bar-chart"],
    ["personalization", "bi-stars"],
    ["thirdParty", "bi-box-arrow-up-right"],
    ["duration", "bi-clock-history"],
    ["management", "bi-sliders"],
    ["consent", "bi-check2-circle"],
    ["changes", "bi-pencil-square"],
    ["contact", "bi-envelope"],
] as const;

export default function Sections({ t }: WithT) {
    return (
        <div className="cookies-sections">
            {sections.map(([key, icon], index) => (
                <section id={`cookies-${key}`} className="cookies-section" key={key}>
                    <span className="cookies-section__icon">
                        <i className={`bi ${icon}`} />
                    </span>

                    <div>
                        <h2>{index + 1}. {t(`sections.${key}.title`)}</h2>
                        <p>{t(`sections.${key}.text`)}</p>
                    </div>

                    <i className="bi bi-chevron-down cookies-section__chevron" />
                </section>
            ))}
        </div>
    );
}
