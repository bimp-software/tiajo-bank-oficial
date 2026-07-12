import type { WithT } from "../../types/common";

export default function Benefits({ t }: WithT) {
    return (
        <section className="section-benefits">
            <div className="container-xl">

                <div className="benefits-header">
                    <h2>{t("body.beneficios.titulo")}</h2>
                    <p>{t("body.beneficios.descripcion")}</p>
                </div>

                <div className="benefits-grid">

                    <article className="benefit-card">
                        <div className="benefit-icon purple d-flex align-items-center justify-content-center">
                            <i className="bi bi-controller fs-4"></i>
                        </div>
                        <h3>{t("body.beneficios.card_1.titulo")}</h3>
                        <p>{t("body.beneficios.card_1.descripcion")}</p>
                    </article>

                    <article className="benefit-card">
                        <div className="benefit-icon pink d-flex align-items-center justify-content-center">
                            <i className="bi bi-heart-fill fs-4"></i>
                        </div>
                        <h3>{t("body.beneficios.card_2.titulo")}</h3>
                        <p>{t("body.beneficios.card_2.descripcion")}</p>
                    </article>

                    <article className="benefit-card">
                        <div className="benefit-icon yellow d-flex align-items-center justify-content-center">
                            <i className="bi bi-coin fs-4"></i>
                        </div>
                        <h3>{t("body.beneficios.card_3.titulo")}</h3>
                        <p>{t("body.beneficios.card_3.descripcion")}</p>
                    </article>

                    <article className="benefit-card">
                        <div className="benefit-icon green d-flex align-items-center justify-content-center">
                            <i className="bi bi-people-fill fs-4"></i>
                        </div>
                        <h3>{t("body.beneficios.card_4.titulo")}</h3>
                        <p>{t("body.beneficios.card_4.descripcion")}</p>
                    </article>

                    <article className="benefit-card">
                        <div className="benefit-icon blue d-flex align-items-center justify-content-center">
                            <i className="bi bi-backpack-fill fs-4"></i>
                        </div>
                        <h3>{t("body.beneficios.card_5.titulo")}</h3>
                        <p>{t("body.beneficios.card_5.descripcion")}</p>
                    </article>

                </div>

            </div>
        </section>
    );
}