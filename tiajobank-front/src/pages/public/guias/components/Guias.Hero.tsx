import type { WithT } from "../../../../shared/types/common";

export default function Hero({ t }: WithT) {
    return (
        <section className="guias-hero">
            <div className="guias-container guias-hero__grid">
                <div className="guias-hero__content">
                    <span className="guias-pill">
                        <i className="bi bi-journal-bookmark-fill" />
                        {t("hero.badge")}
                    </span>

                    <h1>
                        {t("hero.title")}
                        <span>{t("hero.highlight")}</span>
                    </h1>

                    <p>{t("hero.description")}</p>

                    <div className="guias-search">
                        <i className="bi bi-search" />
                        <input
                            type="search"
                            placeholder={t("hero.searchPlaceholder")}
                            aria-label={t("hero.searchLabel")}
                        />
                        <button type="button" aria-label={t("hero.searchButton")}>
                            <i className="bi bi-search" />
                        </button>
                    </div>
                </div>

                <div className="guias-hero__visual">
                    <div className="guias-hero__shape guias-hero__shape--one" />
                    <div className="guias-hero__shape guias-hero__shape--two" />

                    <span className="guias-floating guias-floating--idea">
                        <i className="bi bi-lightbulb-fill" />
                    </span>

                    <span className="guias-floating guias-floating--book">
                        <i className="bi bi-book-fill" />
                    </span>

                    <span className="guias-floating guias-floating--download">
                        <i className="bi bi-download" />
                    </span>

                    <span className="guias-floating guias-floating--coin">
                        <i className="bi bi-coin" />
                    </span>

                    <img
                        src="/assets/img/guias/pepe-guias.webp"
                        alt={t("hero.imageAlt")}
                        className="guias-hero__image"
                    />
                </div>
            </div>
        </section>
    );
}
