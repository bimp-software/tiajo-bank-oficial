import type { WithT } from "../../../../shared/types/common";

const problemKeys = [
    { key: "motivation", icon: "bi-battery-half" },
    { key: "meaning", icon: "bi-journal-x" },
    { key: "participation", icon: "bi-person-dash-fill" },
    { key: "technology", icon: "bi-laptop" },
];

export default function HistoriaProblema({ t }: WithT) {
    return (
        <section className="historia-section historia-problema">
            <div className="container">
                <div className="historia-section-heading">
                    <span className="historia-eyebrow">{t("problem.eyebrow")}</span>
                    <h2>{t("problem.title")}</h2>
                    <p>{t("problem.description")}</p>
                </div>

                <div className="row g-4 mt-2">
                    {problemKeys.map(({ key, icon }, index) => (
                        <div className="col-md-6 col-xl-3" key={key}>
                            <article className="historia-problem-card">
                                <span className="historia-problem-card__index">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <div className="historia-problem-card__icon">
                                    <i className={`bi ${icon}`} />
                                </div>
                                <h3>{t(`problem.items.${key}.title`)}</h3>
                                <p>{t(`problem.items.${key}.text`)}</p>
                            </article>
                        </div>
                    ))}
                </div>

                <div className="historia-problema__bridge">
                    <span className="historia-problema__bridge-icon">
                        <i className="bi bi-arrow-down-circle-fill" />
                    </span>
                    <div>
                        <strong>{t("problem.bridgeTitle")}</strong>
                        <p>{t("problem.bridgeText")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
