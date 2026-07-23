import type { WithT } from "../../../../shared/types/common"; 

export default function Impact({ t }: WithT) {
    return (
        <section className="nosotros-impact">
            <div className="nosotros-container">
                <div className="nosotros-impact__panel">
                    <div className="nosotros-impact__heading">
                        <h2>
                            {t("impact.title")}
                            <i className="bi bi-stars" />
                        </h2>
                    </div>

                    <div className="nosotros-impact__grid">
                        <article>
                            <span>🏫</span>
                            <div>
                                <strong>{t("impact.items.schools.value")}</strong>
                                <p>{t("impact.items.schools.label")}</p>
                            </div>
                        </article>

                        <article>
                            <span>👨‍👩‍👧‍👦</span>
                            <div>
                                <strong>{t("impact.items.students.value")}</strong>
                                <p>{t("impact.items.students.label")}</p>
                            </div>
                        </article>

                        <article>
                            <span>🪙</span>
                            <div>
                                <strong>{t("impact.items.coins.value")}</strong>
                                <p>{t("impact.items.coins.label")}</p>
                            </div>
                        </article>

                        <article>
                            <span>🌎</span>
                            <div>
                                <strong>{t("impact.items.countries.value")}</strong>
                                <p>{t("impact.items.countries.label")}</p>
                            </div>
                        </article>

                        <article>
                            <span>🏆</span>
                            <div>
                                <strong>{t("impact.items.rewards.value")}</strong>
                                <p>{t("impact.items.rewards.label")}</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
