import type { WithT } from "../../../../shared/types/common"; 

export default function Differences({ t }: WithT) {
    const items = [
        ["gamification", "bi-controller", "green"],
        ["economy", "bi-coin", "yellow"],
        ["emotional", "bi-heart-fill", "pink"],
        ["community", "bi-people-fill", "blue"],
        ["growth", "bi-graph-up-arrow", "lightgreen"],
        ["security", "bi-shield-fill-check", "purple"],
    ] as const;

    return (
        <section className="nosotros-section nosotros-differences">
            <div className="nosotros-container">
                <div className="nosotros-heading">
                    <h2>
                        {t("differences.title")}
                        <i className="bi bi-stars" />
                    </h2>
                    <p>{t("differences.description")}</p>
                </div>

                <div className="nosotros-differences__grid">
                    {items.map(([key, icon, tone]) => (
                        <article key={key}>
                            <span className={`nosotros-difference-icon nosotros-difference-icon--${tone}`}>
                                <i className={`bi ${icon}`} />
                            </span>

                            <h3>{t(`differences.items.${key}.title`)}</h3>
                            <p>{t(`differences.items.${key}.text`)}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
