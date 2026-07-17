import type { WithT } from "../../../../shared/types/common";

export default function InicioMethodology({ t }:WithT) {
    return (
        <section className="section-soft">
            <div className="container-xl">
                <div className="need-card">

                    <div className="need-title">
                        <h2 className="gap-2">
                            {t("methodology.title.before")}{" "}
                            <span>{t("methodology.title.highlight")}</span>
                        </h2>
                    </div>

                    <div className="need-items">
                        <article>
                            <div className="circle purple">🏆</div>
                            <h3>{t("methodology.cards.motivation.title")}</h3>
                            <p>{t("methodology.cards.motivation.description")}</p>
                        </article>

                        <article>
                            <div className="circle green">📈</div>
                            <h3>{t("methodology.cards.progress.title")}</h3>
                            <p>{t("methodology.cards.progress.description")}</p>
                        </article>

                        <article>
                            <div className="circle pink">💗</div>
                            <h3>{t("methodology.cards.coexistence.title")}</h3>
                            <p>{t("methodology.cards.coexistence.description")}</p>
                        </article>

                        <article>
                            <div className="circle purple">👥</div>
                            <h3>{t("methodology.cards.participation.title")}</h3>
                            <p>{t("methodology.cards.participation.description")}</p>
                        </article>

                    </div>
                </div>
            </div>
        </section>
    );
}