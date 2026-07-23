import type { WithT } from "../../../../shared/types/common";

export default function Privacy({ t }: WithT) {
    return (
        <section className="seguridad-section seguridad-section--privacy">
            <div className="seguridad-container">
                <div className="seguridad-heading"><h2>{t("privacy.title")}<i className="bi bi-stars" /></h2></div>

                <div className="seguridad-privacy-grid">
                    <article className="seguridad-privacy-card seguridad-privacy-card--green">
                        <span className="seguridad-privacy-card__icon"><i className="bi bi-shield-fill-check" /></span>
                        <div><h3>{t("privacy.children.title")}</h3><p>{t("privacy.children.text")}</p></div>
                    </article>

                    <div className="seguridad-privacy-list">
                        <p><i className="bi bi-check-circle-fill" />{t("privacy.items.minimum")}</p>
                        <p><i className="bi bi-check-circle-fill" />{t("privacy.items.education")}</p>
                        <p><i className="bi bi-check-circle-fill" />{t("privacy.items.control")}</p>
                        <p><i className="bi bi-check-circle-fill" />{t("privacy.items.parental")}</p>
                    </div>

                    <article className="seguridad-privacy-card seguridad-privacy-card--purple">
                        <span className="seguridad-privacy-card__icon"><i className="bi bi-people-fill" /></span>
                        <div><h3>{t("privacy.families.title")}</h3><p>{t("privacy.families.text")}</p><a href="#">{t("privacy.families.link")}<i className="bi bi-arrow-right" /></a></div>
                    </article>
                </div>
            </div>
        </section>
    );
}