import { Link } from "react-router-dom";
import type { WithTAndLang } from "../../../../shared/types/common";

export default function Articles({ t, lang }: WithTAndLang) {
    return (
        <section id="articulos" className="blog-section blog-articles">
            <div className="blog-container">
                <div className="blog-heading blog-heading--left">
                    <div>
                        <span>{t("articles.eyebrow")}</span>
                        <h2>{t("articles.title")}</h2>
                    </div>

                    <Link className="blog-text-link" to={`/${lang}/blog`}>
                        {t("articles.viewAll")}
                        <i className="bi bi-arrow-right" />
                    </Link>
                </div>

                <div className="blog-articles__grid">
                    {["economy", "family", "technology"].map((key) => (
                        <article className="blog-article-card" key={key}>
                            <div className="blog-article-card__image">
                                <img
                                    src={`/assets/img/blog/${key}.webp`}
                                    alt={t(`articles.items.${key}.imageAlt`)}
                                />
                                <span>{t(`articles.items.${key}.category`)}</span>
                            </div>

                            <div className="blog-article-card__content">
                                <div className="blog-meta">
                                    <span><i className="bi bi-calendar3" />{t(`articles.items.${key}.date`)}</span>
                                    <span><i className="bi bi-clock" />{t(`articles.items.${key}.readingTime`)}</span>
                                </div>

                                <h3>{t(`articles.items.${key}.title`)}</h3>
                                <p>{t(`articles.items.${key}.excerpt`)}</p>

                                <Link to={`/${lang}/blog/${key}`}>
                                    {t("articles.readMore")}
                                    <i className="bi bi-arrow-right" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
