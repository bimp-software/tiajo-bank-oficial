import type { WithT } from "../../../../shared/types/common";

export default function Hero({ t }: WithT) {
    return (
        <section className="seguridad-hero">
            <div className="seguridad-container seguridad-hero__grid">
                <div className="seguridad-hero__content">
                    <span className="seguridad-pill">
                        <i className="bi bi-shield-check" />
                        {t("hero.badge")}
                    </span>

                    <h1>
                        {t("hero.title")}
                        <span>{t("hero.highlight")}</span>
                    </h1>

                    <p className="seguridad-hero__description">{t("hero.description")}</p>

                    <div className="seguridad-hero__benefits">
                        <article>
                            <span className="seguridad-icon seguridad-icon--green"><i className="bi bi-shield-lock-fill" /></span>
                            <div><strong>{t("hero.benefits.protection.title")}</strong><p>{t("hero.benefits.protection.text")}</p></div>
                        </article>
                        <article>
                            <span className="seguridad-icon seguridad-icon--purple"><i className="bi bi-lock-fill" /></span>
                            <div><strong>{t("hero.benefits.privacy.title")}</strong><p>{t("hero.benefits.privacy.text")}</p></div>
                        </article>
                        <article>
                            <span className="seguridad-icon seguridad-icon--yellow"><i className="bi bi-people-fill" /></span>
                            <div><strong>{t("hero.benefits.environment.title")}</strong><p>{t("hero.benefits.environment.text")}</p></div>
                        </article>
                    </div>

                    <div className="seguridad-hero__compliance">
                        <span className="seguridad-hero__compliance-icon"><i className="bi bi-lock-fill" /></span>
                        <div>
                            <strong>{t("hero.compliance.title")}</strong>
                            <p>{t("hero.compliance.text")}</p>
                            <a href="#seguridad-estandares">{t("hero.compliance.link")}<i className="bi bi-arrow-right" /></a>
                        </div>
                    </div>
                </div>

                <div className="seguridad-hero__visual">
                    <div className="seguridad-hero__orbit" />
                    <span className="seguridad-floating seguridad-floating--cloud"><i className="bi bi-cloud-lock-fill" /></span>
                    <span className="seguridad-floating seguridad-floating--database"><i className="bi bi-database-lock" /></span>
                    <span className="seguridad-floating seguridad-floating--user"><i className="bi bi-person-circle" /></span>

                    <img src="/assets/img/seguridad/pepe-seguridad.webp" alt={t("hero.imageAlt")} className="seguridad-hero__image" />

                    <aside className="seguridad-hero__safe-card">
                        <h2>{t("hero.safeCard.title")}</h2>
                        <ul>
                            <li><i className="bi bi-check-circle-fill" />{t("hero.safeCard.items.encryption")}</li>
                            <li><i className="bi bi-check-circle-fill" />{t("hero.safeCard.items.access")}</li>
                            <li><i className="bi bi-check-circle-fill" />{t("hero.safeCard.items.monitoring")}</li>
                            <li><i className="bi bi-check-circle-fill" />{t("hero.safeCard.items.backups")}</li>
                            <li><i className="bi bi-check-circle-fill" />{t("hero.safeCard.items.privacy")}</li>
                        </ul>
                    </aside>
                </div>
            </div>
        </section>
    );
}
