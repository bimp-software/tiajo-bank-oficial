import { Link } from "react-router-dom";

import HeroRanitas from "../../../shared/assets/images/hero-ranitas.webp";

import "../../../shared/assets/styles/index.css";


export default function Hero({ t, lang }) {


    return (
        <section className="home-hero">
            <div className="container-xl">
                <div className="hero-grid">
                    <div className="hero-content">
                        <h1>
                            {t("hero.title.before")} <span>{t("hero.title.highlight")}</span> {t("hero.title.after")}
                        </h1>

                        <p>
                            {t("hero.description")}
                        </p>

                        <div className="hero-actions">
                            <Link to={`/${lang}/funcionalidades`} className="btn btn-hero-primary">
                                {t("hero.buttons.features")}
                            </Link>

                            <a href="#" className="btn btn-hero-video">
                                <i className="bi bi-play-fill"></i>
                                {t("hero.buttons.video")}
                            </a>
                        </div>
                    </div>

                    <div className="hero-image">
                        <img src={HeroRanitas} alt={t("imageAlt")} />
                    </div>
                </div>

                <div className="hero-pills">
                    <div>
                        <i className="bi bi-controller"></i>
                        {t("hero.pills.gamification")}
                    </div>

                    <div>
                        <i className="bi bi-heart-fill text-danger"></i>
                        {t("hero.pills.coexistence")}
                    </div>

                    <div>
                        <i className="bi bi-coin text-warning"></i>
                        {t("hero.pills.economy")}
                    </div>

                    <div>
                        <i className="bi bi-people text-success"></i>
                        {t("hero.pills.community")}
                    </div>
                </div>
            </div>
        </section>
    );
}