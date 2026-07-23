import type { WithT } from "../../../../shared/types/common";

const learningRoute = [
    { key: "prepare", icon: "bi-backpack-fill" },
    { key: "discover", icon: "bi-search-heart-fill" },
    { key: "try", icon: "bi-pencil-square" },
    { key: "achieve", icon: "bi-trophy-fill" },
    { key: "share", icon: "bi-chat-heart-fill" },
    { key: "reflect", icon: "bi-lightbulb-fill" },
];

export default function HistoriaMetodologia({ t }: WithT) {
    return (
        <section className="historia-section historia-metodologia">
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-lg-5">
                        <div className="historia-section-heading historia-section-heading--left">
                            <span className="historia-eyebrow">{t("methodology.eyebrow")}</span>
                            <h2>{t("methodology.title")}</h2>
                            <p>{t("methodology.description")}</p>
                        </div>

                        <div className="historia-methodology-pillars">
                            <div>
                                <i className="bi bi-heart-pulse-fill" />
                                <span>{t("methodology.pillars.emotional")}</span>
                            </div>
                            <div>
                                <i className="bi bi-puzzle-fill" />
                                <span>{t("methodology.pillars.gamification")}</span>
                            </div>
                            <div>
                                <i className="bi bi-universal-access-circle" />
                                <span>{t("methodology.pillars.inclusion")}</span>
                            </div>
                            <div>
                                <i className="bi bi-graph-up-arrow" />
                                <span>{t("methodology.pillars.progress")}</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="historia-route-card">
                            <div className="historia-route-card__header">
                                <span>{t("methodology.routeBadge")}</span>
                                <h3>{t("methodology.routeTitle")}</h3>
                            </div>

                            <div className="historia-route">
                                {learningRoute.map(({ key, icon }, index) => (
                                    <div className="historia-route__step" key={key}>
                                        <div className="historia-route__icon">
                                            <i className={`bi ${icon}`} />
                                        </div>
                                        <span>{index + 1}</span>
                                        <strong>{t(`methodology.route.${key}`)}</strong>
                                    </div>
                                ))}
                            </div>

                            <p className="historia-route-card__note">
                                <i className="bi bi-info-circle-fill" />
                                {t("methodology.routeNote")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
