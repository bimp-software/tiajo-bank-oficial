import type { WithT } from "../../../../shared/types/common";

export default function Hero({ t }: WithT) {
    return (
        <section className="compras-reembolsos-hero">
            <div className="compras-reembolsos-container compras-reembolsos-hero__grid">
                <div className="compras-reembolsos-hero__content">
                    <span className="compras-reembolsos-pill">
                        <i className="bi bi-credit-card-fill" />
                        {t("hero.badge")}
                    </span>

                    <h1>
                        {t("hero.title")}
                        <span>{t("hero.highlight")}</span>
                    </h1>

                    <p>{t("hero.description")}</p>

                    <div className="compras-reembolsos-hero__note">
                        <span><i className="bi bi-receipt-cutoff" /></span>
                        <p>{t("hero.note")}</p>
                    </div>
                </div>

                <div className="compras-reembolsos-hero__visual">
                    <span className="compras-reembolsos-floating compras-reembolsos-floating--cart">
                        <i className="bi bi-cart-check-fill" />
                    </span>

                    <span className="compras-reembolsos-floating compras-reembolsos-floating--refund">
                        <i className="bi bi-arrow-counterclockwise" />
                    </span>

                    <span className="compras-reembolsos-floating compras-reembolsos-floating--shield">
                        <i className="bi bi-shield-check" />
                    </span>

                    <img
                        src="/assets/img/politica-compras-reembolsos/pepe-compras-reembolsos.webp"
                        alt={t("hero.imageAlt")}
                    />
                </div>
            </div>
        </section>
    );
}
