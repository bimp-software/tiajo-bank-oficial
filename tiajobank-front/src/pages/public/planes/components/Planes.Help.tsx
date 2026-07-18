import type { WithT } from "../../../../shared/types/common";

export default function PlanesHelp({ t }:WithT) {
    return (
        <section className="plans-help-section">
            <div className="container-xl">
                <div className="plans-help-card">

                    <div className="help-image">
                        <img src="/assets/img/pepe-asesor.webp" alt="" />
                    </div>

                    <div className="help-content">
                        <h2>{t("ayuda.titulo")}</h2>
                        <p>{t("ayuda.descripcion")}</p>
                    </div>

                    <a href="#" className="btn-help">
                        {t("ayuda.boton")}
                        <i className="bi bi-whatsapp"></i>
                    </a>

                    <div className="guarantee-card">
                        <div className="guarantee-icon">
                            <i className="bi bi-shield-check"></i>
                        </div>
                        <div>
                            <h3>{t("ayuda.garantia_titulo")}</h3>
                            <p>{t("ayuda.garantia_descripcion")}</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}