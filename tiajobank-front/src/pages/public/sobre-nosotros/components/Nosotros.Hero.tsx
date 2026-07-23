import { Link } from "react-router-dom";
import type { WithTAndLang } from "../../../../shared/types/common"; 


export default function Hero({ t, lang }: WithTAndLang) {
    return (
        <section className="nosotros-hero">
            <div className="nosotros-container nosotros-hero__grid">
                <div className="nosotros-hero__content">
                    <span className="nosotros-pill">
                        <i className="bi bi-people-fill" />
                        {t("hero.badge")}
                    </span>

                    <h1>
                        {t("hero.title")}
                        <span>{t("hero.highlight")}</span>
                    </h1>

                    <p className="nosotros-hero__lead">
                        {t("hero.lead.before")}
                        <strong>{t("hero.lead.emphasis")}</strong>
                        {t("hero.lead.after")}
                    </p>

                    <p>{t("hero.description")}</p>

                    <Link to={`/${lang}/nosotros/historia`}>
                        {t("hero.button")}
                        <i className="bi bi-arrow-right" />
                    </Link>
                </div>

                <div className="nosotros-hero__visual">
                    <span className="nosotros-spark nosotros-spark--one">✦</span>
                    <span className="nosotros-spark nosotros-spark--two">✧</span>
                    <span className="nosotros-spark nosotros-spark--three">✦</span>

                    <img
                        src="/assets/img/sobre-nosotros/equipo-tiajo.webp"
                        alt={t("hero.imageAlt")}
                    />
                </div>
            </div>
        </section>
    );
}
