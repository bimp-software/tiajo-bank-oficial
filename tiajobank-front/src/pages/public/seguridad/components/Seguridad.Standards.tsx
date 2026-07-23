import type { WithT } from "../../../../shared/types/common";

export default function Standards({ t }: WithT) {
    return (
        <section id="seguridad-estandares" className="seguridad-section seguridad-section--standards">
            <div className="seguridad-container">
                <div className="seguridad-standards">
                    <div className="seguridad-standards__intro">
                        <h2>{t("standards.title")}<i className="bi bi-stars" /></h2>
                        <p>{t("standards.description")}</p>
                    </div>

                    <div className="seguridad-standards__grid">
                        <article><img src="/assets/img/seguridad/iso-27001.webp" alt="ISO 27001" /><h3>{t("standards.items.iso.title")}</h3><p>{t("standards.items.iso.text")}</p></article>
                        <article><img src="/assets/img/seguridad/coppa.webp" alt="COPPA" /><h3>{t("standards.items.coppa.title")}</h3><p>{t("standards.items.coppa.text")}</p></article>
                        <article><img src="/assets/img/seguridad/gdpr.webp" alt="RGPD" /><h3>{t("standards.items.gdpr.title")}</h3><p>{t("standards.items.gdpr.text")}</p></article>
                        <article><img src="/assets/img/seguridad/ley-datos-chile.webp" alt="Protección de datos en Chile" /><h3>{t("standards.items.chile.title")}</h3><p>{t("standards.items.chile.text")}</p></article>
                        <article><img src="/assets/img/seguridad/pci-dss.webp" alt="PCI DSS" /><h3>{t("standards.items.pci.title")}</h3><p>{t("standards.items.pci.text")}</p></article>
                    </div>

                    <a href="#" className="seguridad-link">{t("standards.link")}<i className="bi bi-arrow-right" /></a>
                </div>
            </div>
        </section>
    );
}