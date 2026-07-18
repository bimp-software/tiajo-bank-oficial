import type { WithT } from "../../../../shared/types/common";

export default function BeneficiosFor({ t }: WithT) {
    return (
        <section className="benefits-for">
            <div className="container-xl">

                <div className="section-heading">
                    <h2>{t("beneficios.integrantes.titulo")}</h2>
                    <p>{t("beneficios.integrantes.descripcion")}</p>
                </div>

                <div className="benefits-for-grid">

                    {/* Estudiantes */}
                    <article className="member-card student">
                        <div className="member-icon d-flex align-items-center justify-content-center">
                            <i className="bi bi-mortarboard-fill fs-4"></i>
                        </div>
                        
                        <div className="card-body-wrapper">
                            <div className="card-text-content">
                                <h3>{t("beneficios.integrantes.estudiantes.titulo")}</h3>
                                <ul>
                                    <li>{t("beneficios.integrantes.estudiantes.item_1")}</li>
                                    <li>{t("beneficios.integrantes.estudiantes.item_2")}</li>
                                    <li>{t("beneficios.integrantes.estudiantes.item_3")}</li>
                                    <li>{t("beneficios.integrantes.estudiantes.item_4")}</li>
                                    <li>{t("beneficios.integrantes.estudiantes.item_5")}</li>
                                </ul>
                            </div>
                        </div>
                    </article>

                    {/* Docentes */}
                    <article className="member-card teacher">
                        <div className="member-icon d-flex align-items-center justify-content-center">
                            <i className="bi bi-person-workspace fs-4"></i>
                        </div>
                        
                        <div className="card-body-wrapper">
                            <div className="card-text-content">
                                <h3>{t("beneficios.integrantes.docentes.titulo")}</h3>
                                <ul>
                                    <li>{t("beneficios.integrantes.docentes.item_1")}</li>
                                    <li>{t("beneficios.integrantes.docentes.item_2")}</li>
                                    <li>{t("beneficios.integrantes.docentes.item_3")}</li>
                                    <li>{t("beneficios.integrantes.docentes.item_4")}</li>
                                    <li>{t("beneficios.integrantes.docentes.item_5")}</li>
                                </ul>
                            </div>
                        </div>
                    </article>

                    {/* Apoderados */}
                    <article className="member-card parents">
                        <div className="member-icon d-flex align-items-center justify-content-center">
                            <i className="bi bi-house-heart-fill fs-4"></i>
                        </div>
                        
                        <div className="card-body-wrapper">
                            <div className="card-text-content">
                                <h3>{t("beneficios.integrantes.apoderados.titulo")}</h3>
                                <ul>
                                    <li>{t("beneficios.integrantes.apoderados.item_1")}</li>
                                    <li>{t("beneficios.integrantes.apoderados.item_2")}</li>
                                    <li>{t("beneficios.integrantes.apoderados.item_3")}</li>
                                    <li>{t("beneficios.integrantes.apoderados.item_4")}</li>
                                    <li>{t("beneficios.integrantes.apoderados.item_5")}</li>
                                </ul>
                            </div>
                        </div>
                    </article>

                </div>
            </div>
        </section>
    );
}