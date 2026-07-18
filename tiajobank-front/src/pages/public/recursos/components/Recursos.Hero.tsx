import type { WithT } from "../../../../shared/types/common";

import ImgHero from "../assets/img/recursos-hero.webp"

export default function Hero({ t }: WithT) {
    const tags = t("hero.tags", { returnObjects: true }) as unknown as string[];

    return (
        <section className="resources-hero">
            <div className="container-xl">
                <div className="resources-hero-grid">

                    <div className="resources-hero-content">
                        <div className="resources-badge">
                            <i className="bi bi-book"></i>
                            {t("hero.badge")}
                        </div>

                        <h1>
                            {t("hero.titulo_1")}
                            <span>{t("hero.titulo_2")}</span>
                        </h1>

                        <p>{t("hero.descripcion")}</p>

                        <div className="resources-search">
                            <i className="bi bi-search"></i>
                            <input type="text" placeholder={t("hero.buscar_placeholder")} />
                            <button type="button">
                                <i className="bi bi-search"></i>
                            </button>
                        </div>

                        <div className="popular-tags">
                            <strong>{t("hero.busquedas_populares")}</strong>
                            {tags.map((tag) => (
                                <a href="#" key={tag}>{tag}</a>
                            ))}
                        </div>
                    </div>

                    <div className="resources-hero-image">
                        <img src={ImgHero} alt="Recursos Educativos de Educación Financiera" />
                    </div>

                </div>
            </div>
        </section>
    );
}