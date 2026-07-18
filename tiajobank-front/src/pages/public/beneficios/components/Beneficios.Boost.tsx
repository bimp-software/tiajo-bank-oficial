import type { WithT } from "../../../../shared/types/common";

export default function BeneficiosBoost({ t }: WithT) {
    return (
        <section className="benefits-boost">
            <div className="container-xl">

                <div className="section-heading">
                    <h2>
                        {t("beneficios.cambio.titulo_1")}{" "}
                        <span>{t("beneficios.cambio.titulo_2")}</span>
                    </h2>
                </div>

                <div className="boost-grid">
                    <article className="boost-card">
                        <div className="boost-img d-flex align-items-center justify-content-center">
                            <i className="bi bi-book-half fs-4"></i>
                        </div>
                        <h3>{t("beneficios.cambio.card_1.titulo")}</h3>
                        <p>{t("beneficios.cambio.card_1.desc")}</p>
                    </article>

                    <article className="boost-card">
                        <div className="boost-img d-flex align-items-center justify-content-center">
                            <i className="bi bi-emoji-smile-fill fs-4"></i>
                        </div>
                        <h3>{t("beneficios.cambio.card_2.titulo")}</h3>
                        <p>{t("beneficios.cambio.card_2.desc")}</p>
                    </article>

                    <article className="boost-card">
                        <div className="boost-img d-flex align-items-center justify-content-center">
                            <i className="bi bi-cash-coin fs-4"></i>
                        </div>
                        <h3>{t("beneficios.cambio.card_3.titulo")}</h3>
                        <p>{t("beneficios.cambio.card_3.desc")}</p>
                    </article>

                    <article className="boost-card">
                        <div className="boost-img d-flex align-items-center justify-content-center">
                            <i className="bi bi-chat-heart-fill fs-4"></i>
                        </div>
                        <h3>{t("beneficios.cambio.card_4.titulo")}</h3>
                        <p>{t("beneficios.cambio.card_4.desc")}</p>
                    </article>

                    <article className="boost-card">
                        <div className="boost-img d-flex align-items-center justify-content-center">
                            <i className="bi bi-controller fs-4"></i>
                        </div>
                        <h3>{t("beneficios.cambio.card_5.titulo")}</h3>
                        <p>{t("beneficios.cambio.card_5.desc")}</p>
                    </article>

                    <article className="boost-card">
                        <div className="boost-img d-flex align-items-center justify-content-center">
                            <i className="bi bi-shield-lock-fill fs-4"></i>
                        </div>
                        <h3>{t("beneficios.cambio.card_6.titulo")}</h3>
                        <p>{t("beneficios.cambio.card_6.desc")}</p>
                    </article>
                </div>

            </div>
        </section>
    );
}