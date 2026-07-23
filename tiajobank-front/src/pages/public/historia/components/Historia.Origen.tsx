import type { WithT } from "../../../../shared/types/common";

export default function HistoriaOrigen({ t }: WithT) {
    return (
        <section id="nuestro-origen" className="historia-section historia-origen">
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-lg-6">
                        <div className="historia-section-heading historia-section-heading--left">
                            <span className="historia-eyebrow">{t("origin.eyebrow")}</span>
                            <h2>{t("origin.title")}</h2>
                            <p>{t("origin.description")}</p>
                        </div>

                        <div className="historia-quote">
                            <i className="bi bi-quote" />
                            <blockquote>{t("origin.quote")}</blockquote>
                            <div className="historia-quote__author">
                                <span className="historia-quote__avatar">
                                    <i className="bi bi-person-heart" />
                                </span>
                                <div>
                                    <strong>{t("origin.author")}</strong>
                                    <small>{t("origin.role")}</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="historia-origin-card">
                            <div className="historia-origin-card__number">01</div>
                            <div className="historia-origin-card__icon">
                                <i className="bi bi-house-heart-fill" />
                            </div>
                            <h3>{t("origin.cardTitle")}</h3>
                            <p>{t("origin.cardText")}</p>

                            <div className="historia-origin-card__details">
                                <div>
                                    <i className="bi bi-check-circle-fill" />
                                    <span>{t("origin.details.observation")}</span>
                                </div>
                                <div>
                                    <i className="bi bi-check-circle-fill" />
                                    <span>{t("origin.details.experimentation")}</span>
                                </div>
                                <div>
                                    <i className="bi bi-check-circle-fill" />
                                    <span>{t("origin.details.improvement")}</span>
                                </div>
                            </div>

                            <div className="historia-origin-card__decor historia-origin-card__decor--one" />
                            <div className="historia-origin-card__decor historia-origin-card__decor--two" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
