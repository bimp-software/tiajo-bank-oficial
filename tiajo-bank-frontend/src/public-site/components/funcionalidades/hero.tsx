import { Link } from "react-router-dom";
import type { WithTAndLang } from "../../types/common";

import Moneda from "../../../shared/assets/images/icons/comunidad.webp";
import Proteger from "../../../shared/assets/images/icons/proteger.webp";
import Facil from "../../../shared/assets/images/icons/facil de usar.webp";

import ImgFeatures from "../../../shared/assets/images/funcionalidades-hero.webp";

export default function Hero({ t, lang }:WithTAndLang) {

    return (
        <section className="features-hero">
            <div className="container-xl">
                <div className="features-hero-grid">

                    <div className="features-hero-content">
                        <h1>
                            {t('features.hero.title_line1')}
                            <span>{t('features.hero.title_line2')}</span>
                        </h1>

                        <p>
                            {t('features.hero.description')}
                        </p>

                        <div className="features-mini-card">
                            <article>
                                <div className="mini-img">
                                    <img src={Moneda} alt={t('features.hero.mini1.alt')} />
                                </div>
                                <div>
                                    <h3>{t('features.hero.mini1.title')}</h3>
                                    <p>{t('features.hero.mini1.desc')}</p>
                                </div>
                            </article>

                            <article>
                                <div className="mini-img">
                                    <img src={Proteger} alt={t('features.hero.mini2.alt')} />
                                </div>
                                <div>
                                    <h3>{t('features.hero.mini2.title')}</h3>
                                    <p>{t('features.hero.mini2.desc')}</p>
                                </div>
                            </article>

                            <article>
                                <div className="mini-img">
                                    <img src={Facil} alt={t('features.hero.mini3.alt')} />
                                </div>
                                <div>
                                    <h3>{t('features.hero.mini3.title')}</h3>
                                    <p>{t('features.hero.mini3.desc')}</p>
                                </div>
                            </article>
                        </div>

                        <div className="features-actions">
                            <Link to={`/${lang}/demo`}  className="btn-feature-primary">
                                <i className="bi bi-play-circle-fill px-1"></i>
                                {t('features.hero.actions.demo')}
                            </Link>

                            <Link to={`/${lang}/hablar-con-asesor`}  className="btn-feature-outline">
                                <i className="bi bi-chat-dots-fill px-1"></i>
                                {t('features.hero.actions.advisor')}
                            </Link>
                        </div>
                    </div>

                    <div className="features-hero-image">
                        <img src={ImgFeatures} alt={t('features.hero.image_alt')} />
                    </div>

                </div>
            </div>
        </section>
    );
}