import { Link } from "react-router-dom";
import type { WithTAndLang } from "../../../../shared/types/common";

import ImgCta from "../../../../shared/assets/img/hero-ranitas.webp";

export default function BeneficiosCta({ t, lang }: WithTAndLang) {

    return (
        <section className="benefits-cta-section">
            <div className="container-xl">
                <div className="benefits-cta">
                    <div className="cta-image">
                        <img src={ImgCta} alt="TíaJo Bank" />
                    </div>
                    <div className="cta-content">
                        <h2>{t("beneficios.cta.titulo")}</h2>
                        <p>{t("beneficios.cta.descripcion")}</p>
                    </div>
                    <div className="cta-action">
                        <Link to={`/${lang}/contacto`} className="btn-benefits-cta">
                            {t("beneficios.cta.btn")}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}