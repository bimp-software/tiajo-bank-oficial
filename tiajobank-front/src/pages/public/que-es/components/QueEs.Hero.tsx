import { Link } from "react-router-dom"
import type { WithTAndLang } from "../../../../shared/types/common"

import HeroRanitas from "../../../../shared/assets/img/hero-ranitas.webp"

export default function QuesEsHero({ t, lang }: WithTAndLang) {

    return (
        <section className="home-hero">
            <div className="container-xl">
                <div className="hero-grid">
                    <div className="hero-content">

                        <h1>
                            {t("body.hero.titulo_1")}{" "}
                            <span>
                                {t("body.hero.titulo_2")}
                            </span>{" "}
                            {t("body.hero.titulo_3")}
                        </h1>

                        <p>
                            {t("body.hero.descripcion")}
                        </p>

                        <div className="hero-actions">
                            <Link to={`/${lang}/funcionalidades`} className="btn btn-hero-primary">
                                {t("body.hero.btn_funciones")}
                                <i className="bi bi-arrow-right-short ms-1"></i>
                            </Link>

                            <a href="#" className="btn btn-hero-video">
                                <i className="bi bi-play-fill me-1"></i>
                                {t("body.hero.btn_video")}
                            </a>
                        </div>

                    </div>

                    <div className="hero-image">
                        <img src={HeroRanitas} alt="TiaJo Bank Hero" />
                    </div>
                </div>
            </div>
        </section>
    );
}