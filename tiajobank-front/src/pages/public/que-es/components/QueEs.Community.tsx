import type { WithT } from "../../../../shared/types/common"; 

export default function QueEsCommunity({ t }: WithT) {
    return (
        <section className="section-community">
            <div className="container-xl">

                <div className="community-header">
                    <h2>
                        {t("body.comunidad.titulo_1")}{" "}
                        <span>{t("body.comunidad.titulo_2")}</span>
                    </h2>
                </div>

                <div className="community-grid">

                    <article className="community-card">
                        <div className="community-image"></div>
                        <div className="community-content">
                            <h3>{t("body.comunidad.estudiantes.titulo")}</h3>
                            <ul>
                                <li>{t("body.comunidad.estudiantes.item_1")}</li>
                                <li>{t("body.comunidad.estudiantes.item_2")}</li>
                                <li>{t("body.comunidad.estudiantes.item_3")}</li>
                                <li>{t("body.comunidad.estudiantes.item_4")}</li>
                                <li>{t("body.comunidad.estudiantes.item_5")}</li>
                            </ul>
                        </div>
                    </article>

                    <article className="community-card">
                        <div className="community-image"></div>
                        <div className="community-content">
                            <h3>{t("body.comunidad.docentes.titulo")}</h3>
                            <ul>
                                <li>{t("body.comunidad.docentes.item_1")}</li>
                                <li>{t("body.comunidad.docentes.item_2")}</li>
                                <li>{t("body.comunidad.docentes.item_3")}</li>
                                <li>{t("body.comunidad.docentes.item_4")}</li>
                                <li>{t("body.comunidad.docentes.item_5")}</li>
                            </ul>
                        </div>
                    </article>

                    <article className="community-card">
                        <div className="community-image"></div>
                        <div className="community-content">
                            <h3>{t("body.comunidad.apoderados.titulo")}</h3>
                            <ul>
                                <li>{t("body.comunidad.apoderados.item_1")}</li>
                                <li>{t("body.comunidad.apoderados.item_2")}</li>
                                <li>{t("body.comunidad.apoderados.item_3")}</li>
                                <li>{t("body.comunidad.apoderados.item_4")}</li>
                                <li>{t("body.comunidad.apoderados.item_5")}</li>
                            </ul>
                        </div>
                    </article>

                </div>

            </div>
        </section>
    );
}