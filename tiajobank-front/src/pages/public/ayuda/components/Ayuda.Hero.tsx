import type { WithT } from "../../../../shared/types/common";


export default function Hero({ t }: WithT) {
    return (
        <section className="ayuda-hero">
            <div className="ayuda-container ayuda-hero__grid">
                <div className="ayuda-hero__content">
                    <span className="ayuda-pill">
                        <i className="bi bi-life-preserver" />
                        {t("hero.badge")}
                    </span>

                    <h1>
                        {t("hero.title")}
                        <span>{t("hero.highlight")}</span>
                    </h1>

                    <p>{t("hero.description")}</p>

                    <div className="ayuda-search">
                        <i className="bi bi-search" />
                        <input
                            type="search"
                            placeholder={t("hero.searchPlaceholder")}
                            aria-label={t("hero.searchLabel")}
                        />
                        <button type="button">
                            {t("hero.searchButton")}
                        </button>
                    </div>

                    <div className="ayuda-hero__links">
                        <span>{t("hero.quickLabel")}</span>
                        <a href="#cuenta">{t("hero.quick.account")}</a>
                        <a href="#tiajitos">{t("hero.quick.coins")}</a>
                        <a href="#reportes">{t("hero.quick.reports")}</a>
                    </div>
                </div>

                <div className="ayuda-hero__visual">
                    <span className="ayuda-floating ayuda-floating--chat">
                        <i className="bi bi-chat-dots-fill" />
                    </span>

                    <span className="ayuda-floating ayuda-floating--book">
                        <i className="bi bi-book-half" />
                    </span>

                    <span className="ayuda-floating ayuda-floating--gear">
                        <i className="bi bi-gear-fill" />
                    </span>

                    <img
                        src="/assets/img/ayuda/pepe-ayuda.webp"
                        alt={t("hero.imageAlt")}
                    />

                    <article className="ayuda-status-card">
                        <i className="bi bi-check-circle-fill" />
                        <div>
                            <strong>{t("hero.status.title")}</strong>
                            <p>{t("hero.status.text")}</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
