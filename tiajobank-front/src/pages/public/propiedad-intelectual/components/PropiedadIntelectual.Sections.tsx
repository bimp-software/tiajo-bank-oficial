import type { WithT } from "../../../../shared/types/common";

const sections = [
    ["purpose", "bi-bullseye"],
    ["ownership", "bi-award"],
    ["platformContent", "bi-window"],
    ["trademarks", "bi-patch-check"],
    ["software", "bi-code-slash"],
    ["licenses", "bi-file-earmark-check"],
    ["userContent", "bi-person-lines-fill"],
    ["educationalUse", "bi-mortarboard"],
    ["restrictions", "bi-slash-circle"],
    ["thirdParty", "bi-box-arrow-up-right"],
    ["reports", "bi-flag"],
    ["measures", "bi-exclamation-triangle"],
    ["changes", "bi-pencil-square"],
    ["contact", "bi-envelope"],
] as const;

export default function Sections({ t }: WithT) {
    return (
        <div className="propiedad-intelectual-sections">
            {sections.map(([key, icon], index) => (
                <section
                    id={`propiedad-intelectual-${key}`}
                    className="propiedad-intelectual-section"
                    key={key}
                >
                    <span className="propiedad-intelectual-section__icon">
                        <i className={`bi ${icon}`} />
                    </span>

                    <div>
                        <h2>{index + 1}. {t(`sections.${key}.title`)}</h2>
                        <p>{t(`sections.${key}.text`)}</p>
                    </div>

                    <i className="bi bi-chevron-down propiedad-intelectual-section__chevron" />
                </section>
            ))}
        </div>
    );
}
