import type { WithT } from "../../types/common";

export default function HowItWorks({ t }: WithT) {
    return (
        <section className="section-how">
            <div className="container-xl">
                <div className="how-card">

                    <div className="how-header">
                        <h2>{t("body.funciona.titulo")}</h2>
                        <p>{t("body.funciona.descripcion")}</p>
                    </div>

                    <div className="how-steps">

                        <article className="how-step">
                            <div className="how-icon d-flex align-items-center justify-content-center">
                                <i className="bi bi-coin fs-4"></i>
                            </div>
                            <div>
                                <h3>{t("body.funciona.step_1_titulo")}</h3>
                                <p>{t("body.funciona.step_1_desc")}</p>
                            </div>
                        </article>

                        <article className="how-step">
                            <div className="how-icon d-flex align-items-center justify-content-center">
                                <i className="bi bi-piggy-bank-fill fs-4"></i>
                            </div>
                            <div>
                                <h3>{t("body.funciona.step_2_titulo")}</h3>
                                <p>{t("body.funciona.step_2_desc")}</p>
                            </div>
                        </article>

                        <article className="how-step">
                            <div className="how-icon d-flex align-items-center justify-content-center">
                                <i className="bi bi-gift-fill fs-4"></i>
                            </div>
                            <div>
                                <h3>{t("body.funciona.step_3_titulo")}</h3>
                                <p>{t("body.funciona.step_3_desc")}</p>
                            </div>
                        </article>

                        <article className="how-step">
                            <div className="how-icon d-flex align-items-center justify-content-center">
                                <i className="bi bi-star-fill fs-4"></i>
                            </div>
                            <div>
                                <h3>{t("body.funciona.step_4_titulo")}</h3>
                                <p>{t("body.funciona.step_4_desc")}</p>
                            </div>
                        </article>

                    </div>

                </div>
            </div>
        </section>
    );
}