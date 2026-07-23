import type { WithT } from "../../../../shared/types/common";

export default function Hero({ t }: WithT) {
    return (
        <section className="terminos-hero">
            <div className="terminos-container terminos-hero__grid">
                <div className="terminos-hero__content">
                    <span className="terminos-pill">
                        <i className="bi bi-file-earmark-text-fill" />
                        {t("hero.badge")}
                    </span>

                    <h1>
                        {t("hero.title")}
                        <span>{t("hero.highlight")}</span>
                    </h1>

                    <p>{t("hero.description")}</p>

                    <div className="terminos-hero__note">
                        <span>
                            <i className="bi bi-check-circle-fill" />
                        </span>
                        <p>{t("hero.note")}</p>
                    </div>
                </div>

                <div className="terminos-hero__visual">
                    <span className="terminos-floating terminos-floating--document">
                        <i className="bi bi-file-earmark-check-fill" />
                    </span>

                    <span className="terminos-floating terminos-floating--law">
                        <i className="bi bi-balance-scale" />
                    </span>

                    <span className="terminos-floating terminos-floating--shield">
                        <i className="bi bi-shield-check" />
                    </span>

                    <img
                        src="/assets/img/terminos-condiciones/pepe-terminos.webp"
                        alt={t("hero.imageAlt")}
                    />
                </div>
            </div>
        </section>
    );
}
