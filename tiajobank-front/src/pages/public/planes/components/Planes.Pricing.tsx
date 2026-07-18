import { useMemo, useState } from "react";
import type { WithT } from "../../../../shared/types/common";

type BillingCycle = "monthly" | "yearly";

const formatCurrency = (value: number) =>
    new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(value);

const monthlyPrice = 12490;
const yearlyPrice = 9990;

export default function PlanesPricing({ t }: WithT) {
    const [billingCycle, setBillingCycle] = useState<BillingCycle>("yearly");
    const isYearly = billingCycle === "yearly";

    const proPrice = useMemo(() => (isYearly ? yearlyPrice : monthlyPrice), [isYearly]);

    const getFeatures = (key: string) =>
        t(key, { returnObjects: true }) as unknown as string[];

    const handlePlanAction = (planId: string) => {
        console.info(`Plan seleccionado: ${planId}`);
    };

    return (
        <section className="plans-section">
            <div className="container-xl">

                <div className="plans-heading">
                    <div>
                        <h2>{t("seccion.titulo")} <i className="bi bi-stars"></i></h2>
                        <p>{t("seccion.subtitulo")}</p>
                    </div>

                    <div className="billing-switch">
                        <span className={!isYearly ? "active" : ""}>{t("seccion.mensual")}</span>
                        <button
                            type="button"
                            className={isYearly ? "is-yearly" : ""}
                            aria-label="Cambiar facturación"
                            onClick={() => setBillingCycle(isYearly ? "monthly" : "yearly")}
                        >
                            <span></span>
                        </button>
                        <span className={isYearly ? "active" : ""}>{t("seccion.anual")}</span>
                        <strong>{t("seccion.ahorro")}</strong>
                    </div>
                </div>

                <div className="plans-grid">

                    {/* BÁSICO */}
                    <article className="plan-card basic">
                        <div className="plan-icon green-light">
                            <i className="bi bi-flower1"></i>
                        </div>

                        <h3>{t("planes.basico.nombre")}</h3>
                        <p className="plan-desc">{t("planes.basico.descripcion")}</p>

                        <div className="plan-price">Gratis</div>

                        <p className="plan-small">{t("planes.basico.helper")}</p>

                        <button type="button" className="btn-plan-outline" onClick={() => handlePlanAction("basic")}>
                            {t("planes.basico.boton")}
                        </button>

                        <ul>
                            {getFeatures("planes.basico.features").map((f) => (
                                <li key={f}>{f}</li>
                            ))}
                        </ul>
                    </article>

                    {/* PRO */}
                    <article className="plan-card pro">
                        <div className="plan-label">{t("planes.pro.label")}</div>

                        <div className="plan-icon yellow-light">
                            <i className="bi bi-star-fill"></i>
                        </div>

                        <h3>{t("planes.pro.nombre")}</h3>
                        <p className="plan-desc">{t("planes.pro.descripcion")}</p>

                        <div className="plan-price">
                            {formatCurrency(proPrice)}
                            <span>{t("planes.pro.por_mes")}</span>
                        </div>

                        <p className="plan-badge">
                            {isYearly ? t("planes.pro.facturado_anual") : t("planes.pro.facturado_mensual")}
                        </p>

                        <button type="button" className="btn-plan-primary" onClick={() => handlePlanAction("pro")}>
                            {t("planes.pro.boton")}
                        </button>

                        <p className="trial-text">{t("planes.pro.helper")}</p>

                        <ul>
                            {getFeatures("planes.pro.features").map((f) => (
                                <li key={f}>{f}</li>
                            ))}
                        </ul>
                    </article>

                    {/* INSTITUCIÓN */}
                    <article className="plan-card institution">
                        <div className="plan-icon purple-light">
                            <i className="bi bi-building-fill"></i>
                        </div>

                        <h3>{t("planes.institucion.nombre")}</h3>
                        <p className="plan-desc">{t("planes.institucion.descripcion")}</p>

                        <div className="plan-price custom-price">{t("planes.institucion.precio_custom")}</div>

                        <p className="plan-small">{t("planes.institucion.helper")}</p>

                        <button type="button" className="btn-plan-purple" onClick={() => handlePlanAction("institution")}>
                            {t("planes.institucion.boton")}
                        </button>

                        <ul>
                            {getFeatures("planes.institucion.features").map((f) => (
                                <li key={f}>{f}</li>
                            ))}
                        </ul>
                    </article>

                </div>
            </div>
        </section>
    );
}