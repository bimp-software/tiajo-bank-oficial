import type { WithT } from "../../../../shared/types/common";

export default function Hero({ t }: WithT) {
    return (
        <section className="propiedad-intelectual-hero">
            <div className="propiedad-intelectual-container propiedad-intelectual-hero__grid">
                <div className="propiedad-intelectual-hero__content">
                    <span className="propiedad-intelectual-pill">
                        <i className="bi bi-c-circle-fill" />
                        {t("hero.badge")}
                    </span>

                    <h1>
                        {t("hero.title")}
                        <span>{t("hero.highlight")}</span>
                    </h1>

                    <p>{t("hero.description")}</p>

                    <div className="propiedad-intelectual-hero__note">
                        <span><i className="bi bi-lightbulb-fill" /></span>
                        <p>{t("hero.note")}</p>
                    </div>
                </div>

                <div className="propiedad-intelectual-hero__visual">
                    <span className="propiedad-intelectual-floating propiedad-intelectual-floating--copyright">
                        <i className="bi bi-c-circle-fill" />
                    </span>

                    <span className="propiedad-intelectual-floating propiedad-intelectual-floating--idea">
                        <i className="bi bi-lightbulb-fill" />
                    </span>

                    <span className="propiedad-intelectual-floating propiedad-intelectual-floating--shield">
                        <i className="bi bi-shield-check" />
                    </span>

                    <img
                        src="/assets/img/politica-propiedad-intelectual/pepe-propiedad-intelectual.webp"
                        alt={t("hero.imageAlt")}
                    />
                </div>
            </div>
        </section>
    );
}
