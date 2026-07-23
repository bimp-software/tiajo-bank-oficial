import type { WithT } from "../../../../shared/types/common";

export default function Hero({ t }: WithT) {
    return (
        <section className="proteccion-menores-hero">
            <div className="proteccion-menores-container proteccion-menores-hero__grid">
                <div className="proteccion-menores-hero__content">
                    <span className="proteccion-menores-pill">
                        <i className="bi bi-shield-heart-fill" />
                        {t("hero.badge")}
                    </span>

                    <h1>
                        {t("hero.title")}
                        <span>{t("hero.highlight")}</span>
                    </h1>

                    <p>{t("hero.description")}</p>

                    <div className="proteccion-menores-hero__note">
                        <span>
                            <i className="bi bi-person-heart" />
                        </span>
                        <p>{t("hero.note")}</p>
                    </div>
                </div>

                <div className="proteccion-menores-hero__visual">
                    <span className="proteccion-menores-floating proteccion-menores-floating--heart">
                        <i className="bi bi-heart-fill" />
                    </span>

                    <span className="proteccion-menores-floating proteccion-menores-floating--shield">
                        <i className="bi bi-shield-fill-check" />
                    </span>

                    <span className="proteccion-menores-floating proteccion-menores-floating--family">
                        <i className="bi bi-people-fill" />
                    </span>

                    <img
                        src="/assets/img/politica-proteccion-menores/pepe-proteccion-menores.webp"
                        alt={t("hero.imageAlt")}
                    />
                </div>
            </div>
        </section>
    );
}
