import type { WithT } from "../../../../shared/types/common";

export default function Protection({ t }: WithT) {
    return (
        <section className="seguridad-section">
            <div className="seguridad-container">
                <div className="seguridad-heading">
                    <h2>{t("protection.title")}<i className="bi bi-stars" /></h2>
                    <p>{t("protection.description")}</p>
                </div>

                <div className="seguridad-protection-grid">
                    <article className="seguridad-protection-card"><span className="seguridad-protection-card__icon seguridad-protection-card__icon--green"><i className="bi bi-shield-check" /></span><h3>{t("protection.items.encryption.title")}</h3><p>{t("protection.items.encryption.text")}</p></article>
                    <article className="seguridad-protection-card"><span className="seguridad-protection-card__icon seguridad-protection-card__icon--purple"><i className="bi bi-server" /></span><h3>{t("protection.items.infrastructure.title")}</h3><p>{t("protection.items.infrastructure.text")}</p></article>
                    <article className="seguridad-protection-card"><span className="seguridad-protection-card__icon seguridad-protection-card__icon--yellow"><i className="bi bi-people" /></span><h3>{t("protection.items.access.title")}</h3><p>{t("protection.items.access.text")}</p></article>
                    <article className="seguridad-protection-card"><span className="seguridad-protection-card__icon seguridad-protection-card__icon--blue"><i className="bi bi-camera-video" /></span><h3>{t("protection.items.monitoring.title")}</h3><p>{t("protection.items.monitoring.text")}</p></article>
                    <article className="seguridad-protection-card"><span className="seguridad-protection-card__icon seguridad-protection-card__icon--pink"><i className="bi bi-cloud-arrow-down" /></span><h3>{t("protection.items.recovery.title")}</h3><p>{t("protection.items.recovery.text")}</p></article>
                </div>
            </div>
        </section>
    );
}