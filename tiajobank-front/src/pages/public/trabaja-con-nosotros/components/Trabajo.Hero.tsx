import { Link } from "react-router-dom";
import type { WithTAndLang } from "../../../../shared/types/common";

export default function Hero({ t, lang }: WithTAndLang) {
    return (
        <section className="trabajo-hero">
            <div className="trabajo-container trabajo-hero__grid">
                <div className="trabajo-hero__content">
                    <span className="trabajo-pill">
                        <i className="bi bi-briefcase-fill" />
                        {t("hero.badge")}
                    </span>

                    <h1>
                        {t("hero.title")}
                        <span>{t("hero.highlight")}</span>
                    </h1>

                    <h2>{t("hero.subtitle")}</h2>
                    <p>{t("hero.description")}</p>

                    <Link to={`/${lang}/trabaja-con-nosotros/cultura`}>
                        {t("hero.button")}
                        <i className="bi bi-arrow-right" />
                    </Link>
                </div>

                <div className="trabajo-hero__visual">
                    <span className="trabajo-spark trabajo-spark--one">✦</span>
                    <span className="trabajo-spark trabajo-spark--two">✧</span>
                    <span className="trabajo-spark trabajo-spark--three">✦</span>

                    <img
                        src="/assets/img/trabaja-con-nosotros/equipo-tiajo.webp"
                        alt={t("hero.imageAlt")}
                    />
                </div>
            </div>
        </section>
    );
}
