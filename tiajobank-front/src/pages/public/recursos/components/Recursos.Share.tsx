import type { WithT } from "../../../../shared/types/common";

export default function Share({ t }: WithT) {
    return (
        <section className="resource-share-section">
            <div className="container-xl">
                <div className="resource-share-card">

                    <div className="share-image">
                        <img src="/assets/img/compartir-recurso.webp" alt="" />
                    </div>

                    <div className="share-content">
                        <h2>{t("compartir.titulo")}</h2>
                        <p>{t("compartir.descripcion")}</p>
                    </div>

                    <a href="#" className="btn-share">
                        {t("compartir.boton")}
                        <i className="bi bi-upload"></i>
                    </a>

                </div>
            </div>
        </section>
    );
}