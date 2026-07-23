import type { WithT } from "../../../../shared/types/common";

export default function Hero({ t }: WithT) {
    return (
        <section className="politicas-hero">
            <div className="politicas-container politicas-hero__grid">
                <div className="politicas-hero__content">
                    <span className="politicas-pill">
                        <i className="bi bi-shield-check" />
                        {t("hero.badge")}
                    </span>

                    <h1>
                        {t("hero.title")}
                        <span>{t("hero.highlight")}</span>
                    </h1>

                    <p>{t("hero.description")}</p>
                </div>

                <div className="politicas-hero__visual">
                    <span className="politicas-floating politicas-floating--lock">
                        <i className="bi bi-lock-fill" />
                    </span>

                    <span className="politicas-floating politicas-floating--users">
                        <i className="bi bi-people-fill" />
                    </span>

                    <span className="politicas-floating politicas-floating--law">
                        <i className="bi bi-balance-scale" />
                    </span>

                    <img
                        src="/assets/img/politicas/pepe-politicas.webp"
                        alt={t("hero.imageAlt")}
                    />
                </div>
            </div>
        </section>
    );
}
