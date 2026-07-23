import type { WithT } from "../../../../shared/types/common";

export default function Resources({ t }: WithT) {
    return (
        <section className="guias-section guias-resources">
            <div className="guias-container">
                <div className="guias-heading">
                    <span>{t("resources.eyebrow")}</span>
                    <h2>{t("resources.title")}</h2>
                    <p>{t("resources.description")}</p>
                </div>

                <div className="guias-resources__grid">
                    <article>
                        <span className="guias-resource-icon guias-resource-icon--purple">
                            <i className="bi bi-file-earmark-slides" />
                        </span>
                        <div>
                            <h3>{t("resources.items.planners.title")}</h3>
                            <p>{t("resources.items.planners.text")}</p>
                        </div>
                    </article>

                    <article>
                        <span className="guias-resource-icon guias-resource-icon--pink">
                            <i className="bi bi-file-earmark-image" />
                        </span>
                        <div>
                            <h3>{t("resources.items.posters.title")}</h3>
                            <p>{t("resources.items.posters.text")}</p>
                        </div>
                    </article>

                    <article>
                        <span className="guias-resource-icon guias-resource-icon--green">
                            <i className="bi bi-award" />
                        </span>
                        <div>
                            <h3>{t("resources.items.diplomas.title")}</h3>
                            <p>{t("resources.items.diplomas.text")}</p>
                        </div>
                    </article>

                    <article>
                        <span className="guias-resource-icon guias-resource-icon--yellow">
                            <i className="bi bi-journal-text" />
                        </span>
                        <div>
                            <h3>{t("resources.items.quick.title")}</h3>
                            <p>{t("resources.items.quick.text")}</p>
                        </div>
                    </article>
                </div>

                <div className="guias-request">
                    <div>
                        <span>{t("resources.request.eyebrow")}</span>
                        <h3>{t("resources.request.title")}</h3>
                        <p>{t("resources.request.description")}</p>
                    </div>

                    <button type="button">
                        {t("resources.request.button")}
                        <i className="bi bi-envelope" />
                    </button>
                </div>
            </div>
        </section>
    );
}
