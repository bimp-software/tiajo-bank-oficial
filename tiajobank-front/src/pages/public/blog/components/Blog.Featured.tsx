import { Link } from "react-router-dom";
import type { WithTAndLang } from "../../../../shared/types/common";

export default function Featured({ t, lang }: WithTAndLang) {
    return (
        <section className="blog-section blog-featured">
            <div className="blog-container">
                <div className="blog-heading blog-heading--left">
                    <div>
                        <span>{t("featured.eyebrow")}</span>
                        <h2>{t("featured.title")}</h2>
                    </div>

                    <p>{t("featured.description")}</p>
                </div>

                <article className="blog-featured-card">
                    <div className="blog-featured-card__image">
                        <img
                            src="/assets/img/blog/articulo-destacado.webp"
                            alt={t("featured.article.imageAlt")}
                        />
                        <span>{t("featured.article.category")}</span>
                    </div>

                    <div className="blog-featured-card__content">
                        <div className="blog-meta">
                            <span><i className="bi bi-calendar3" />{t("featured.article.date")}</span>
                            <span><i className="bi bi-clock" />{t("featured.article.readingTime")}</span>
                        </div>

                        <h3>{t("featured.article.title")}</h3>
                        <p>{t("featured.article.excerpt")}</p>

                        <div className="blog-featured-card__footer">
                            <div className="blog-author">
                                <img
                                    src="/assets/img/blog/avatar-tiajo.webp"
                                    alt={t("featured.article.author")}
                                />
                                <div>
                                    <strong>{t("featured.article.author")}</strong>
                                    <span>{t("featured.article.authorRole")}</span>
                                </div>
                            </div>

                            <Link to={`/${lang}/blog/aprender-jugando`}>
                                {t("featured.article.action")}
                                <i className="bi bi-arrow-right" />
                            </Link>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}
