import type { WithT } from "../../../../shared/types/common";

export default function Hero({ t }: WithT) {
    return (
        <section className="comunicaciones-hero">
            <div className="comunicaciones-container comunicaciones-hero__grid">
                <div className="comunicaciones-hero__content">
                    <span className="comunicaciones-pill">
                        <i className="bi bi-chat-heart-fill" />
                        {t("hero.badge")}
                    </span>

                    <h1>
                        {t("hero.title")}
                        <span>{t("hero.highlight")}</span>
                    </h1>

                    <p>{t("hero.description")}</p>

                    <div className="comunicaciones-hero__note">
                        <span><i className="bi bi-people-fill" /></span>
                        <p>{t("hero.note")}</p>
                    </div>
                </div>

                <div className="comunicaciones-hero__visual">
                    <span className="comunicaciones-floating comunicaciones-floating--chat">
                        <i className="bi bi-chat-dots-fill" />
                    </span>

                    <span className="comunicaciones-floating comunicaciones-floating--mail">
                        <i className="bi bi-envelope-fill" />
                    </span>

                    <span className="comunicaciones-floating comunicaciones-floating--shield">
                        <i className="bi bi-shield-check" />
                    </span>

                    <img
                        src="/assets/img/politica-comunicaciones/pepe-comunicaciones.webp"
                        alt={t("hero.imageAlt")}
                    />
                </div>
            </div>
        </section>
    );
}
