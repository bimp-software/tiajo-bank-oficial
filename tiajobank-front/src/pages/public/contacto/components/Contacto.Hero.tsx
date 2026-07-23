import type { WithT } from "../../../../shared/types/common"; 

export default function Hero({ t }: WithT) {
    return (
        <section className="contacto-hero">
            <div className="contacto-container contacto-hero__grid">
                <div className="contacto-hero__content">
                    <span className="contacto-pill">
                        <i className="bi bi-chat-dots-fill" />
                        {t("hero.badge")}
                    </span>

                    <h1>
                        {t("hero.title")}
                        <span>{t("hero.highlight")}</span>
                    </h1>

                    <p>{t("hero.description")}</p>

                    <div className="contacto-hero__benefits">
                        <article>
                            <span className="contacto-benefit-icon contacto-benefit-icon--green">
                                <i className="bi bi-chat-dots-fill" />
                            </span>
                            <div>
                                <strong>{t("hero.benefits.fast.title")}</strong>
                                <p>{t("hero.benefits.fast.text")}</p>
                            </div>
                        </article>

                        <article>
                            <span className="contacto-benefit-icon contacto-benefit-icon--purple">
                                <i className="bi bi-heart-fill" />
                            </span>
                            <div>
                                <strong>{t("hero.benefits.close.title")}</strong>
                                <p>{t("hero.benefits.close.text")}</p>
                            </div>
                        </article>

                        <article>
                            <span className="contacto-benefit-icon contacto-benefit-icon--yellow">
                                <i className="bi bi-shield-fill-check" />
                            </span>
                            <div>
                                <strong>{t("hero.benefits.safe.title")}</strong>
                                <p>{t("hero.benefits.safe.text")}</p>
                            </div>
                        </article>

                        <article>
                            <span className="contacto-benefit-icon contacto-benefit-icon--blue">
                                <i className="bi bi-people-fill" />
                            </span>
                            <div>
                                <strong>{t("hero.benefits.everyone.title")}</strong>
                                <p>{t("hero.benefits.everyone.text")}</p>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="contacto-hero__visual">
                    <span className="contacto-floating contacto-floating--mail">
                        <i className="bi bi-envelope-fill" />
                    </span>

                    <span className="contacto-floating contacto-floating--phone">
                        <i className="bi bi-telephone-fill" />
                    </span>

                    <span className="contacto-floating contacto-floating--chat">
                        <i className="bi bi-chat-left-text-fill" />
                    </span>

                    <div className="contacto-speech">
                        <strong>{t("hero.speech.title")}</strong>
                        <span>{t("hero.speech.text")}</span>
                    </div>

                    <img
                        src="/assets/img/contacto/pepe-contacto.webp"
                        alt={t("hero.imageAlt")}
                    />
                </div>
            </div>
        </section>
    );
}
