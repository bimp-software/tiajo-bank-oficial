import type { WithT } from "../../../../shared/types/common"; 

export default function CTA({ t }: WithT) {
    return (
        <section className="contacto-cta">
            <div className="contacto-container">
                <div className="contacto-cta__panel">
                    <img
                        src="/assets/img/contacto/pepe-opinion.webp"
                        alt={t("cta.imageAlt")}
                    />

                    <div>
                        <h2>{t("cta.title")}</h2>
                        <p>{t("cta.description")}</p>
                    </div>

                    <button type="button">
                        {t("cta.button")}
                        <i className="bi bi-chat-square-dots" />
                    </button>
                </div>
            </div>
        </section>
    );
}
