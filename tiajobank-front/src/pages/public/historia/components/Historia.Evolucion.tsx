import type { WithT } from "../../../../shared/types/common";

const evolutionItems = [
    { key: "economy", icon: "bi-cash-coin" },
    { key: "roles", icon: "bi-people-fill" },
    { key: "route", icon: "bi-signpost-split-fill" },
    { key: "panels", icon: "bi-layout-text-window-reverse" },
    { key: "radio", icon: "bi-broadcast-pin" },
    { key: "digital", icon: "bi-phone-fill" },
    { key: "ai", icon: "bi-stars" },
    { key: "virtual", icon: "bi-globe2" },
];

export default function HistoriaEvolucion({ t }: WithT) {
    return (
        <section className="historia-section historia-evolucion">
            <div className="container">
                <div className="historia-section-heading">
                    <span className="historia-eyebrow">{t("evolution.eyebrow")}</span>
                    <h2>{t("evolution.title")}</h2>
                    <p>{t("evolution.description")}</p>
                </div>

                <div className="historia-evolution-grid">
                    {evolutionItems.map(({ key, icon }, index) => (
                        <article className="historia-evolution-card" key={key}>
                            <div className="historia-evolution-card__top">
                                <span className="historia-evolution-card__number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <span className="historia-evolution-card__icon">
                                    <i className={`bi ${icon}`} />
                                </span>
                            </div>
                            <h3>{t(`evolution.items.${key}.title`)}</h3>
                            <p>{t(`evolution.items.${key}.text`)}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
