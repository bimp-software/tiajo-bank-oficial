import type { WithT } from "../../../../shared/types/common";

export default function Hero({ t }: WithT) {
    return (
        <section className="faq-hero">
            <div className="faq-container faq-hero__grid">
                <div className="faq-hero__content">
                    <span className="faq-pill">
                        <i className="bi bi-question-circle-fill" />
                        {t("hero.badge")}
                    </span>

                    <h1>{t("hero.title")}<span>{t("hero.highlight")}</span></h1>
                    <h2>{t("hero.subtitle")}</h2>
                    <p>{t("hero.description")}</p>

                    <div className="faq-search">
                        <i className="bi bi-search" />
                        <input type="search" placeholder={t("hero.searchPlaceholder")} />
                        <button type="button" aria-label={t("hero.searchButton")}>
                            <i className="bi bi-search" />
                        </button>
                    </div>
                </div>

                <div className="faq-hero__visual">
                    <span className="faq-bubble faq-bubble--one">?</span>
                    <span className="faq-bubble faq-bubble--two"><i className="bi bi-star-fill" /></span>
                    <span className="faq-bubble faq-bubble--three"><i className="bi bi-coin" /></span>
                    <span className="faq-bubble faq-bubble--four"><i className="bi bi-lightbulb-fill" /></span>
                    <img src="/assets/img/faq/pepe-preguntas.webp" alt={t("hero.imageAlt")} />
                </div>
            </div>
        </section>
    );
}
