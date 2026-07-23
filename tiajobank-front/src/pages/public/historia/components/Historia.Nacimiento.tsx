import type { WithT } from "../../../../shared/types/common";

const steps = [
    { key: "observation", icon: "bi-eye-fill" },
    { key: "economy", icon: "bi-coin" },
    { key: "gamification", icon: "bi-controller" },
    { key: "methodology", icon: "bi-diagram-3-fill" },
    { key: "platform", icon: "bi-window-stack" },
];

export default function HistoriaNacimiento({ t }: WithT) {
    return (
        <section className="historia-section historia-nacimiento">
            <div className="container">
                <div className="row align-items-start g-5">
                    <div className="col-lg-5">
                        <div className="historia-section-heading historia-section-heading--left historia-sticky-heading">
                            <span className="historia-eyebrow">{t("birth.eyebrow")}</span>
                            <h2>{t("birth.title")}</h2>
                            <p>{t("birth.description")}</p>

                            <div className="historia-birth-highlight">
                                <i className="bi bi-bank2" />
                                <div>
                                    <strong>{t("birth.highlightTitle")}</strong>
                                    <span>{t("birth.highlightText")}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="historia-timeline">
                            {steps.map(({ key, icon }, index) => (
                                <article className="historia-timeline__item" key={key}>
                                    <div className="historia-timeline__marker">
                                        <span>{index + 1}</span>
                                    </div>
                                    <div className="historia-timeline__card">
                                        <div className="historia-timeline__icon">
                                            <i className={`bi ${icon}`} />
                                        </div>
                                        <div>
                                            <span className="historia-timeline__phase">
                                                {t(`birth.steps.${key}.phase`)}
                                            </span>
                                            <h3>{t(`birth.steps.${key}.title`)}</h3>
                                            <p>{t(`birth.steps.${key}.text`)}</p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
