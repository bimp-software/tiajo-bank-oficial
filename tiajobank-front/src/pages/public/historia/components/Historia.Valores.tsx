import type { WithT } from "../../../../shared/types/common";

const valueKeys = [
    { key: "innovation", icon: "bi-lightning-charge-fill" },
    { key: "commitment", icon: "bi-heart-fill" },
    { key: "inclusion", icon: "bi-people-fill" },
    { key: "purpose", icon: "bi-bullseye" },
];

export default function HistoriaValores({ t }: WithT) {
    return (
        <section className="historia-section historia-valores">
            <div className="container">
                <div className="historia-section-heading">
                    <span className="historia-eyebrow">{t("values.eyebrow")}</span>
                    <h2>{t("values.title")}</h2>
                    <p>{t("values.description")}</p>
                </div>

                <div className="row g-4 mt-2">
                    {valueKeys.map(({ key, icon }) => (
                        <div className="col-md-6 col-xl-3" key={key}>
                            <article className="historia-value-card">
                                <span className="historia-value-card__icon">
                                    <i className={`bi ${icon}`} />
                                </span>
                                <h3>{t(`values.items.${key}.title`)}</h3>
                                <p>{t(`values.items.${key}.text`)}</p>
                                <div className="historia-value-card__line" />
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
