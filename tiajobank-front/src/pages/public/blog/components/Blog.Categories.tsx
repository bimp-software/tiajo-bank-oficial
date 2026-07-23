import type { WithT } from "../../../../shared/types/common";

export default function Categories({ t }: WithT) {
    return (
        <section className="blog-section blog-categories">
            <div className="blog-container">
                <div className="blog-heading">
                    <span>{t("categories.eyebrow")}</span>
                    <h2>{t("categories.title")}</h2>
                    <p>{t("categories.description")}</p>
                </div>

                <div className="blog-categories__grid">
                    <article className="blog-category-card blog-category-card--green">
                        <span><i className="bi bi-lightbulb" /></span>
                        <h3>{t("categories.items.innovation.title")}</h3>
                        <p>{t("categories.items.innovation.text")}</p>
                        <a href="#articulos">{t("categories.action")}<i className="bi bi-arrow-right" /></a>
                    </article>

                    <article className="blog-category-card blog-category-card--purple">
                        <span><i className="bi bi-mortarboard" /></span>
                        <h3>{t("categories.items.education.title")}</h3>
                        <p>{t("categories.items.education.text")}</p>
                        <a href="#articulos">{t("categories.action")}<i className="bi bi-arrow-right" /></a>
                    </article>

                    <article className="blog-category-card blog-category-card--yellow">
                        <span><i className="bi bi-people" /></span>
                        <h3>{t("categories.items.family.title")}</h3>
                        <p>{t("categories.items.family.text")}</p>
                        <a href="#articulos">{t("categories.action")}<i className="bi bi-arrow-right" /></a>
                    </article>

                    <article className="blog-category-card blog-category-card--blue">
                        <span><i className="bi bi-cpu" /></span>
                        <h3>{t("categories.items.technology.title")}</h3>
                        <p>{t("categories.items.technology.text")}</p>
                        <a href="#articulos">{t("categories.action")}<i className="bi bi-arrow-right" /></a>
                    </article>
                </div>
            </div>
        </section>
    );
}
