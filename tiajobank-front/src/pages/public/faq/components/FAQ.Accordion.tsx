import type { WithT } from "../../../../shared/types/common";

const questions = [
    ["what", "bi-pc-display", "green"],
    ["coins", "bi-coin", "purple"],
    ["store", "bi-gift-fill", "orange"],
    ["earn", "bi-people-fill", "blue"],
    ["safe", "bi-shield-check", "green"],
    ["progress", "bi-graph-up-arrow", "purple"],
    ["mobile", "bi-phone", "orange"],
    ["help", "bi-headset", "blue"],
    ["plans", "bi-credit-card", "green"],
    ["ages", "bi-rocket-takeoff-fill", "purple"]
] as const;

export default function Accordion({ t }: WithT) {
    return (
        <div className="faq-main">
            <div className="faq-heading">
                <span>{t("accordion.eyebrow")}</span>
                <h2>{t("accordion.title")}</h2>
            </div>

            <div className="faq-filters">
                {["all","teachers","students","families","administrators","general"].map((key, i) => (
                    <button key={key} type="button" className={i === 0 ? "is-active" : ""}>
                        {t(`accordion.filters.${key}`)}
                    </button>
                ))}
            </div>

            <div className="accordion faq-accordion" id="faqAccordion">
                {questions.map(([key, icon, tone], index) => (
                    <div className="accordion-item" key={key}>
                        <h3 className="accordion-header">
                            <button
                                className={`accordion-button ${index === 0 ? "" : "collapsed"}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#faq-${key}`}
                            >
                                <span className={`faq-accordion__icon faq-accordion__icon--${tone}`}>
                                    <i className={`bi ${icon}`} />
                                </span>
                                {t(`accordion.items.${key}.question`)}
                            </button>
                        </h3>
                        <div
                            id={`faq-${key}`}
                            className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                {t(`accordion.items.${key}.answer`)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
