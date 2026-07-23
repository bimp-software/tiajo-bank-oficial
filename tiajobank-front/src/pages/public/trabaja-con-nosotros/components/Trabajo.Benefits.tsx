import type { WithT } from "../../../../shared/types/common";

export default function Benefits({ t }: WithT) {
    const items = [
        ["purpose", "bi-heart", "green"],
        ["team", "bi-people", "purple"],
        ["growth", "bi-graph-up-arrow", "yellow"],
        ["innovation", "bi-controller", "teal"],
        ["benefits", "bi-gift", "coral"],
    ] as const;

    return (
        <section className="trabajo-benefits">
            <div className="trabajo-container">
                <div className="trabajo-heading">
                    <h2>
                        {t("benefits.title")}
                        <i className="bi bi-stars" />
                    </h2>
                    <p>{t("benefits.description")}</p>
                </div>

                <div className="trabajo-benefits__panel">
                    {items.map(([key, icon, tone]) => (
                        <article key={key}>
                            <span className={`trabajo-benefit-icon trabajo-benefit-icon--${tone}`}>
                                <i className={`bi ${icon}`} />
                            </span>
                            <h3>{t(`benefits.items.${key}.title`)}</h3>
                            <p>{t(`benefits.items.${key}.text`)}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
