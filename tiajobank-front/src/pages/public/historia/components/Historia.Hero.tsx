import { Link } from "react-router-dom";
import type { WithTAndLang } from "../../../../shared/types/common";

export default function HistoriaHero({ t, lang }: WithTAndLang) {
    return (
        <section className="historia-hero">
            <div className="historia-hero__glow historia-hero__glow--one" />
            <div className="historia-hero__glow historia-hero__glow--two" />

            <div className="container position-relative">
                <div className="row align-items-center g-5">
                    <div className="col-lg-7">
                        <div className="historia-badge">
                            <i className="bi bi-stars" />
                            <span>{t("hero.badge")}</span>
                        </div>

                        <h1 className="historia-hero__title">
                            {t("hero.title")}
                            <span>{t("hero.highlight")}</span>
                        </h1>

                        <p className="historia-hero__description">
                            {t("hero.description")}
                        </p>

                        <div className="historia-hero__question">
                            <span className="historia-hero__question-icon">
                                <i className="bi bi-lightbulb-fill" />
                            </span>
                            <p>{t("hero.question")}</p>
                        </div>

                        <div className="historia-hero__actions">
                            <a href="#nuestro-origen" className="btn-historia btn-historia--primary">
                                <span>{t("hero.primaryButton")}</span>
                                <i className="bi bi-arrow-down" />
                            </a>

                            <Link
                                to={`/${lang}/demo`}
                                className="btn-historia btn-historia--secondary"
                            >
                                <i className="bi bi-play-circle-fill" />
                                <span>{t("hero.secondaryButton")}</span>
                            </Link>
                        </div>

                        <div className="historia-hero__trust">
                            <div className="historia-hero__trust-item">
                                <i className="bi bi-heart-fill" />
                                <span>{t("hero.trust.classroom")}</span>
                            </div>
                            <div className="historia-hero__trust-item">
                                <i className="bi bi-people-fill" />
                                <span>{t("hero.trust.students")}</span>
                            </div>
                            <div className="historia-hero__trust-item">
                                <i className="bi bi-rocket-takeoff-fill" />
                                <span>{t("hero.trust.purpose")}</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="historia-hero__visual">
                            <div className="historia-hero__image-card">
                                <img
                                    src="/assets/img/historia/tia-jo-pepe-historia.webp"
                                    alt={t("hero.imageAlt")}
                                    className="historia-hero__image"
                                />

                                <div className="historia-hero__floating historia-hero__floating--top">
                                    <span className="historia-hero__floating-icon">
                                        <i className="bi bi-bank2" />
                                    </span>
                                    <div>
                                        <strong>{t("hero.floating.ideaTitle")}</strong>
                                        <small>{t("hero.floating.ideaText")}</small>
                                    </div>
                                </div>

                                <div className="historia-hero__floating historia-hero__floating--bottom">
                                    <span className="historia-hero__floating-icon">
                                        <i className="bi bi-mortarboard-fill" />
                                    </span>
                                    <div>
                                        <strong>{t("hero.floating.impactTitle")}</strong>
                                        <small>{t("hero.floating.impactText")}</small>
                                    </div>
                                </div>
                            </div>

                            <div className="historia-hero__dots" aria-hidden="true">
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
