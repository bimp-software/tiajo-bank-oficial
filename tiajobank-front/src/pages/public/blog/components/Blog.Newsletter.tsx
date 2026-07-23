import type { WithT } from "../../../../shared/types/common";

export default function Newsletter({ t }: WithT) {
    return (
        <section id="newsletter" className="blog-newsletter">
            <div className="blog-container">
                <div className="blog-newsletter__card">
                    <img
                        src="/assets/img/blog/pepe-newsletter.webp"
                        alt={t("newsletter.imageAlt")}
                    />

                    <div className="blog-newsletter__content">
                        <span>{t("newsletter.eyebrow")}</span>
                        <h2>{t("newsletter.title")}</h2>
                        <p>{t("newsletter.description")}</p>
                    </div>

                    <form className="blog-newsletter__form">
                        <label htmlFor="blog-email" className="visually-hidden">
                            {t("newsletter.emailLabel")}
                        </label>
                        <div>
                            <i className="bi bi-envelope" />
                            <input
                                id="blog-email"
                                type="email"
                                placeholder={t("newsletter.placeholder")}
                            />
                        </div>
                        <button type="submit">
                            {t("newsletter.button")}
                            <i className="bi bi-send" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
