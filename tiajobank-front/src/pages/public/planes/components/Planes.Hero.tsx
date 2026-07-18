import type { WithT } from "../../../../shared/types/common";

import ImgHero from "../assets/img/planes-hero.webp"

export default function PlanesHero({ t }:WithT) {
    return (
        <section className="plans-hero">
            <div className="container-xl">
                <div className="plans-hero-grid">

                    <div className="plans-hero-content">
                        <h1>
                            {t("hero.titulo_1")}
                            <span>{t("hero.titulo_2")}</span>
                        </h1>

                        <p>{t("hero.descripcion")}</p>

                        <div className="plans-hero-features">
                            <article>
                                <div className="hero-feature-icon green">
                                    <i className="bi bi-shield-check"></i>
                                </div>
                                <span>{t("hero.feature_seguro")}</span>
                            </article>

                            <article>
                                <div className="hero-feature-icon yellow">
                                    <i className="bi bi-people-fill"></i>
                                </div>
                                <span>{t("hero.feature_soporte")}</span>
                            </article>

                            <article>
                                <div className="hero-feature-icon purple">
                                    <i className="bi bi-arrow-repeat"></i>
                                </div>
                                <span>{t("hero.feature_actualizaciones")}</span>
                            </article>
                        </div>
                    </div>

                    <div className="plans-hero-image">
                        <img src={ImgHero} alt="Planes TiaJo Bank" />
                    </div>

                </div>
            </div>
        </section>
    );
}