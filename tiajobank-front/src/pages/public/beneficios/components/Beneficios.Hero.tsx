import type { WithT } from "../../../../shared/types/common";
import HeroRanitas from "../../../../shared/assets/img/hero-ranitas.webp"

export default function BeneficiosHero({ t }: WithT) {
    return (
        <section className="benefits-hero">
            <div className="container-xl">
                <div className="benefits-hero-grid">

                    <div className="benefits-hero-content">
                        <h1>
                            {t("beneficios.hero.titulo_1")}{" "}
                            <span>{t("beneficios.hero.titulo_2")}</span>
                        </h1>

                        <p>{t("beneficios.hero.descripcion")}</p>

                        <div className="benefits-mini-grid">
                            <article>
                                <div className="mini-img d-flex align-items-center justify-content-center purple-light">
                                    <i className="bi bi-heart-fill fs-5"></i>
                                </div>
                                <h3>{t("beneficios.hero.mini_1")}</h3>
                            </article>

                            <article>
                                <div className="mini-img d-flex align-items-center justify-content-center yellow-light">
                                    <i className="bi bi-coin fs-5"></i>
                                </div>
                                <h3>{t("beneficios.hero.mini_2")}</h3>
                            </article>

                            <article>
                                <div className="mini-img d-flex align-items-center justify-content-center green-light">
                                    <i className="bi bi-shield-check fs-5"></i>
                                </div>
                                <h3>{t("beneficios.hero.mini_3")}</h3>
                            </article>

                            <article>
                                <div className="mini-img d-flex align-items-center justify-content-center blue-light">
                                    <i className="bi bi-people-fill fs-5"></i>
                                </div>
                                <h3>{t("beneficios.hero.mini_4")}</h3>
                            </article>
                        </div>
                    </div>

                    <div className="benefits-hero-image">
                        <img src={HeroRanitas} alt="Personajes TiaJo Bank" />
                    </div>

                </div>
            </div>
        </section>
    );
}