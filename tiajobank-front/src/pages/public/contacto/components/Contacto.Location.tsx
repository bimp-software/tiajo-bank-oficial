import type { WithT } from "../../../../shared/types/common"; 

export default function Location({ t }: WithT) {
    return (
        <article className="contacto-location-card">
            <div className="contacto-card-heading">
                <span className="contacto-card-heading__icon">
                    <i className="bi bi-geo-alt-fill" />
                </span>
                <div>
                    <h2>{t("location.title")}</h2>
                    <p>{t("location.description")}</p>
                </div>
            </div>

            <div className="contacto-map">
                <img
                    src="/assets/img/contacto/mapa.webp"
                    alt={t("location.mapAlt")}
                />

                <article>
                    <i className="bi bi-geo-alt-fill" />
                    <div>
                        <strong>{t("location.office.title")}</strong>
                        <p>{t("location.office.address")}</p>
                    </div>
                </article>
            </div>
        </article>
    );
}
