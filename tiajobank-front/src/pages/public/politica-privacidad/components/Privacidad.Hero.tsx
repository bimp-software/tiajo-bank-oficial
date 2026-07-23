import type { WithT } from "../../../../shared/types/common";

export default function Hero({ t }: WithT) {
    return (
        <section className="privacidad-hero">
            <div className="privacidad-container privacidad-hero__grid">
                <div className="privacidad-hero__content">
                    <span className="privacidad-pill">
                        <i className="bi bi-shield-lock-fill" />
                        {t("hero.badge")}
                    </span>

                    <h1>
                        {t("hero.title")}
                        <span>{t("hero.highlight")}</span>
                    </h1>

                    <p>{t("hero.description")}</p>

                    <div className="privacidad-hero__note">
                        <span><i className="bi bi-shield-fill-check" /></span>
                        <p>{t("hero.note")}</p>
                    </div>
                </div>

                <div className="privacidad-hero__visual">
                    <span className="privacidad-floating privacidad-floating--users">
                        <i className="bi bi-people-fill" />
                    </span>
                    <span className="privacidad-floating privacidad-floating--lock">
                        <i className="bi bi-lock-fill" />
                    </span>
                    <span className="privacidad-floating privacidad-floating--shield">
                        <i className="bi bi-shield-check" />
                    </span>

                    <img
                        src="/assets/img/politica-privacidad/pepe-privacidad.webp"
                        alt={t("hero.imageAlt")}
                    />
                </div>
            </div>
        </section>
    );
}
