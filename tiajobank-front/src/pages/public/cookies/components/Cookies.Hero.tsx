import type { WithT } from "../../../../shared/types/common";

export default function Hero({ t }: WithT) {
    return (
        <section className="cookies-hero">
            <div className="cookies-container cookies-hero__grid">
                <div className="cookies-hero__content">
                    <span className="cookies-pill">
                        <i className="bi bi-cookie" />
                        {t("hero.badge")}
                    </span>

                    <h1>
                        {t("hero.title")}
                        <span>{t("hero.highlight")}</span>
                    </h1>

                    <p>{t("hero.description")}</p>

                    <div className="cookies-hero__note">
                        <span>
                            <i className="bi bi-sliders" />
                        </span>
                        <p>{t("hero.note")}</p>
                    </div>
                </div>

                <div className="cookies-hero__visual">
                    <span className="cookies-floating cookies-floating--cookie">
                        <i className="bi bi-cookie" />
                    </span>

                    <span className="cookies-floating cookies-floating--settings">
                        <i className="bi bi-gear-fill" />
                    </span>

                    <span className="cookies-floating cookies-floating--shield">
                        <i className="bi bi-shield-check" />
                    </span>

                    <img
                        src="/assets/img/politica-cookies/pepe-cookies.webp"
                        alt={t("hero.imageAlt")}
                    />
                </div>
            </div>
        </section>
    );
}
