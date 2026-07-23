import type { WithT } from "../../../../shared/types/common";

export default function Benefits({ t }: WithT) {
    return (
        <section className="guias-benefits">
            <div className="guias-container">
                <div className="guias-benefits__panel">
                    <article>
                        <span className="guias-benefit-icon guias-benefit-icon--green">
                            <i className="bi bi-book" />
                        </span>
                        <div>
                            <h2>{t("benefits.items.easy.title")}</h2>
                            <p>{t("benefits.items.easy.text")}</p>
                        </div>
                    </article>

                    <article>
                        <span className="guias-benefit-icon guias-benefit-icon--purple">
                            <i className="bi bi-people-fill" />
                        </span>
                        <div>
                            <h2>{t("benefits.items.everyone.title")}</h2>
                            <p>{t("benefits.items.everyone.text")}</p>
                        </div>
                    </article>

                    <article>
                        <span className="guias-benefit-icon guias-benefit-icon--yellow">
                            <i className="bi bi-clock-fill" />
                        </span>
                        <div>
                            <h2>{t("benefits.items.updated.title")}</h2>
                            <p>{t("benefits.items.updated.text")}</p>
                        </div>
                    </article>

                    <article>
                        <span className="guias-benefit-icon guias-benefit-icon--green">
                            <i className="bi bi-download" />
                        </span>
                        <div>
                            <h2>{t("benefits.items.downloadable.title")}</h2>
                            <p>{t("benefits.items.downloadable.text")}</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
