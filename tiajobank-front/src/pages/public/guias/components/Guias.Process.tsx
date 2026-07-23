import type { WithT } from "../../../../shared/types/common";

export default function Process({ t }: WithT) {
    return (
        <section className="guias-process">
            <div className="guias-container">
                <div className="guias-process__panel">
                    <img
                        src="/assets/img/guias/pepe-aprende.webp"
                        alt={t("process.imageAlt")}
                    />

                    <div className="guias-process__content">
                        <h2>{t("process.title")}</h2>
                        <p>{t("process.description")}</p>
                    </div>

                    <div className="guias-process__steps">
                        <article>
                            <span className="guias-process__icon guias-process__icon--yellow">
                                <i className="bi bi-lightbulb-fill" />
                            </span>
                            <strong>1</strong>
                            <h3>{t("process.steps.learn.title")}</h3>
                            <p>{t("process.steps.learn.text")}</p>
                        </article>

                        <article>
                            <span className="guias-process__icon guias-process__icon--blue">
                                <i className="bi bi-gear-fill" />
                            </span>
                            <strong>2</strong>
                            <h3>{t("process.steps.apply.title")}</h3>
                            <p>{t("process.steps.apply.text")}</p>
                        </article>

                        <article>
                            <span className="guias-process__icon guias-process__icon--yellow">
                                <i className="bi bi-trophy-fill" />
                            </span>
                            <strong>3</strong>
                            <h3>{t("process.steps.motivate.title")}</h3>
                            <p>{t("process.steps.motivate.text")}</p>
                        </article>

                        <article>
                            <span className="guias-process__icon guias-process__icon--yellow">
                                <i className="bi bi-star-fill" />
                            </span>
                            <strong>4</strong>
                            <h3>{t("process.steps.transform.title")}</h3>
                            <p>{t("process.steps.transform.text")}</p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
