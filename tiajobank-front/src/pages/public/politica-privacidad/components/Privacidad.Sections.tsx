import type { WithT } from "../../../../shared/types/common";

const sections = [
    ["collection", "bi-person", "green"],
    ["use", "bi-file-earmark-text", "green"],
    ["legal", "bi-balance-scale", "green"],
    ["sharing", "bi-share", "green"],
    ["cookies", "bi-cookie", "green"],
    ["storage", "bi-database", "green"],
    ["security", "bi-shield-check", "green"],
    ["rights", "bi-people", "green"],
    ["children", "bi-person-hearts", "green"],
    ["international", "bi-globe2", "green"],
    ["changes", "bi-pencil-square", "green"],
    ["contact", "bi-envelope", "green"],
] as const;

export default function Sections({ t }: WithT) {
    return (
        <div className="privacidad-sections">
            {sections.map(([key, icon, tone], index) => (
                <section id={`privacidad-${key}`} className="privacidad-section" key={key}>
                    <div className={`privacidad-section__icon privacidad-section__icon--${tone}`}>
                        <i className={`bi ${icon}`} />
                    </div>

                    <div>
                        <h2>{index + 1}. {t(`sections.${key}.title`)}</h2>
                        <p>{t(`sections.${key}.text`)}</p>
                    </div>

                    <i className="bi bi-chevron-down privacidad-section__chevron" />
                </section>
            ))}
        </div>
    );
}
