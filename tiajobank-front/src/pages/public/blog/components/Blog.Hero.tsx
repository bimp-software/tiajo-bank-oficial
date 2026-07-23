import type { WithT } from "../../../../shared/types/common";

export default function Hero({ t }: WithT) {
    return (
        <section className="blog-hero">
            <div className="blog-container">
                <div className="blog-hero__content">
                    <span className="blog-pill">
                        <i className="bi bi-book-half" />
                        {t("hero.badge")}
                    </span>

                    <h1>
                        {t("hero.title")}
                        <span>{t("hero.highlight")}</span>
                    </h1>

                    <p>{t("hero.description")}</p>

                    <div className="blog-search">
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

                    <div className="blog-hero__stats">
                        <div>
                            <strong>{t("hero.stats.articles.value")}</strong>
                            <span>{t("hero.stats.articles.label")}</span>
                        </div>
                        <div>
                            <strong>{t("hero.stats.categories.value")}</strong>
                            <span>{t("hero.stats.categories.label")}</span>
                        </div>
                        <div>
                            <strong>{t("hero.stats.community.value")}</strong>
                            <span>{t("hero.stats.community.label")}</span>
                        </div>
                    </div>
                </div>

                <div className="blog-hero__visual">
                    <div className="blog-hero__blob blog-hero__blob--one" />
                    <div className="blog-hero__blob blog-hero__blob--two" />

                    <img
                        src="/assets/img/blog/pepe-blog.webp"
                        alt={t("hero.imageAlt")}
                        className="blog-hero__image"
                    />

                    <article className="blog-float-card blog-float-card--top">
                        <span className="blog-float-card__icon blog-float-card__icon--green">
                            <i className="bi bi-lightbulb-fill" />
                        </span>
                        <div>
                            <strong>{t("hero.cards.ideas.title")}</strong>
                            <p>{t("hero.cards.ideas.text")}</p>
                        </div>
                    </article>

                    <article className="blog-float-card blog-float-card--bottom">
                        <span className="blog-float-card__icon blog-float-card__icon--purple">
                            <i className="bi bi-people-fill" />
                        </span>
                        <div>
                            <strong>{t("hero.cards.community.title")}</strong>
                            <p>{t("hero.cards.community.text")}</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
