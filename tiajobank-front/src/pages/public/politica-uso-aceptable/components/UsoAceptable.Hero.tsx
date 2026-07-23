import type { WithT } from "../../../../shared/types/common";

export default function Hero({ t }: WithT) {
    return (
        <section className="uso-aceptable-hero">
            <div className="uso-aceptable-container uso-aceptable-hero__grid">
                <div className="uso-aceptable-hero__content">
                    <span className="uso-aceptable-pill">
                        <i className="bi bi-patch-check-fill" />
                        {t("hero.badge")}
                    </span>

                    <h1>
                        {t("hero.title")}
                        <span>{t("hero.highlight")}</span>
                    </h1>

                    <p>{t("hero.description")}</p>

                    <div className="uso-aceptable-hero__note">
                        <span>
                            <i className="bi bi-people-fill" />
                        </span>
                        <p>{t("hero.note")}</p>
                    </div>
                </div>

                <div className="uso-aceptable-hero__visual">
                    <span className="uso-aceptable-floating uso-aceptable-floating--check">
                        <i className="bi bi-check-circle-fill" />
                    </span>

                    <span className="uso-aceptable-floating uso-aceptable-floating--shield">
                        <i className="bi bi-shield-fill-check" />
                    </span>

                    <span className="uso-aceptable-floating uso-aceptable-floating--community">
                        <i className="bi bi-people-fill" />
                    </span>

                    <img
                        src="/assets/img/politica-uso-aceptable/pepe-uso-aceptable.webp"
                        alt={t("hero.imageAlt")}
                    />
                </div>
            </div>
        </section>
    );
}
