import type { WithT } from "../../../../shared/types/common";

export default function HistoriaFuturo({ t }: WithT) {
    return (
        <section className="historia-section historia-futuro">
            <div className="container">
                <div className="historia-futuro__panel">
                    <div className="historia-futuro__glow" />

                    <div className="row align-items-center g-5 position-relative">
                        <div className="col-lg-7">
                            <span className="historia-eyebrow historia-eyebrow--light">
                                {t("future.eyebrow")}
                            </span>
                            <h2>{t("future.title")}</h2>
                            <p>{t("future.description")}</p>

                            <div className="historia-future-goals">
                                <div>
                                    <span><i className="bi bi-globe-americas" /></span>
                                    <div>
                                        <strong>{t("future.goals.latam.title")}</strong>
                                        <small>{t("future.goals.latam.text")}</small>
                                    </div>
                                </div>
                                <div>
                                    <span><i className="bi bi-globe-europe-africa" /></span>
                                    <div>
                                        <strong>{t("future.goals.world.title")}</strong>
                                        <small>{t("future.goals.world.text")}</small>
                                    </div>
                                </div>
                                <div>
                                    <span><i className="bi bi-cpu-fill" /></span>
                                    <div>
                                        <strong>{t("future.goals.technology.title")}</strong>
                                        <small>{t("future.goals.technology.text")}</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="historia-futuro__image-wrap">
                                <img
                                    src="/assets/img/historia/pepe-futuro.webp"
                                    alt={t("future.imageAlt")}
                                    className="historia-futuro__image"
                                />
                                <div className="historia-futuro__orbit historia-futuro__orbit--one">
                                    <i className="bi bi-stars" />
                                </div>
                                <div className="historia-futuro__orbit historia-futuro__orbit--two">
                                    <i className="bi bi-rocket-takeoff-fill" />
                                </div>
                                <div className="historia-futuro__orbit historia-futuro__orbit--three">
                                    <i className="bi bi-mortarboard-fill" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
