import { useMemo, useState } from "react";
import "./assets/css/planes.css";

type BillingCycle = "monthly" | "yearly";

type Plan = {
    id: string;
    name: string;
    description: string;
    icon: string;
    tone: "green" | "yellow" | "purple";
    featured?: boolean;
    monthlyPrice?: number;
    yearlyPrice?: number;
    customPrice?: string;
    helperText: string;
    buttonText: string;
    buttonClass: string;
    features: string[];
};

const formatCurrency = (value: number) =>
    new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
        maximumFractionDigits: 0,
    }).format(value);

const plans: Plan[] = [
    {
        id: "basic",
        name: "Básico",
        description: "Ideal para docentes que quieren comenzar.",
        icon: "bi-flower1",
        tone: "green",
        helperText: "Siempre gratis para un curso.",
        buttonText: "Comenzar gratis",
        buttonClass: "btn-plan-outline",
        features: [
            "Hasta 30 estudiantes",
            "1 curso",
            "Actividades básicas",
            "Reportes básicos",
            "Soporte por correo",
        ],
    },
    {
        id: "pro",
        name: "Pro",
        description: "Para escuelas que quieren llevar el aprendizaje al siguiente nivel.",
        icon: "bi-star-fill",
        tone: "yellow",
        featured: true,
        monthlyPrice: 12490,
        yearlyPrice: 9990,
        helperText: "14 días gratis, sin compromiso.",
        buttonText: "Probar Pro",
        buttonClass: "btn-plan-primary",
        features: [
            "Hasta 300 estudiantes",
            "Hasta 10 cursos",
            "Todas las actividades y juegos",
            "Reportes avanzados",
            "Soporte prioritario",
            "Capacitación para docentes",
            "Integración con Google Classroom",
        ],
    },
    {
        id: "institution",
        name: "Institución",
        description: "Para colegios y redes educativas que buscan impacto a gran escala.",
        icon: "bi-building-fill",
        tone: "purple",
        customPrice: "Cotiza con nosotros",
        helperText: "Plan personalizado según tus necesidades.",
        buttonText: "Contactar ventas",
        buttonClass: "btn-plan-purple",
        features: [
            "Estudiantes ilimitados",
            "Cursos ilimitados",
            "Todas las funcionalidades Pro",
            "Reportes personalizados",
            "Administrador institucional",
            "Capacitación personalizada",
            "Integraciones avanzadas",
            "Soporte dedicado",
        ],
    },
];

const comparisonRows = [
    ["Actividades educativas", true, true, true],
    ["Juegos financieros", true, true, true],
    ["Reportes y analíticas", "Básicos", "Avanzados", "Personalizados"],
    ["Número de cursos", "1", "Hasta 10", "Ilimitados"],
    ["Número de estudiantes", "Hasta 30", "Hasta 300", "Ilimitados"],
    ["Soporte", "Correo", "Prioritario", "Dedicado"],
    ["Capacitación", false, true, true],
    ["Integraciones", false, "Google Classroom", "Avanzadas"],
] as const;

function ComparisonValue({ value, purple = false }: { value: string | boolean; purple?: boolean }) {
    if (value === true) {
        return (
            <i
                className={`bi bi-check-circle-fill check ${purple ? "purple" : "green"}`}
                aria-label="Incluido"
            />
        );
    }

    if (value === false) {
        return <span className="not-included" aria-label="No incluido">—</span>;
    }

    return <>{value}</>;
}

export default function PlanesPage() {
    const [billingCycle, setBillingCycle] = useState<BillingCycle>("yearly");

    const isYearly = billingCycle === "yearly";
    const proPrice = useMemo(
        () => (isYearly ? plans[1].yearlyPrice : plans[1].monthlyPrice),
        [isYearly],
    );

    const handlePlanAction = (planId: string) => {
        console.info(`Plan seleccionado: ${planId}`);
    };

    return (
        <div className="plans-page">
            <section className="plans-hero" aria-labelledby="plans-title">
                <div className="container-xl">
                    <div className="plans-hero-grid">
                        <div className="plans-hero-content">
                            <h1 id="plans-title">
                                Planes diseñados para cada comunidad
                                <span>educativa</span>
                            </h1>

                            <p>
                                Elige el plan que mejor se adapte a tu institución y potencia
                                el aprendizaje financiero de tus estudiantes.
                            </p>

                            <div className="plans-hero-features">
                                <article>
                                    <div className="hero-feature-icon green">
                                        <i className="bi bi-shield-check" aria-hidden="true" />
                                    </div>
                                    <span>Seguro y confiable</span>
                                </article>

                                <article>
                                    <div className="hero-feature-icon yellow">
                                        <i className="bi bi-people-fill" aria-hidden="true" />
                                    </div>
                                    <span>Soporte educativo especializado</span>
                                </article>

                                <article>
                                    <div className="hero-feature-icon purple">
                                        <i className="bi bi-arrow-repeat" aria-hidden="true" />
                                    </div>
                                    <span>Actualizaciones constantes</span>
                                </article>
                            </div>
                        </div>

                        <div className="plans-hero-image" aria-hidden="true">
                            <div className="hero-image-glow" />
                            <img src="/assets/img/planes-hero.webp" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="plans-section" aria-labelledby="plans-heading-title">
                <div className="container-xl">
                    <div className="plans-heading">
                        <div>
                            <span className="section-kicker">Opciones flexibles</span>
                            <h2 id="plans-heading-title">
                                Elige tu plan <i className="bi bi-stars" aria-hidden="true" />
                            </h2>
                            <p>Todos los planes incluyen acceso a nuestra plataforma web y móvil.</p>
                        </div>

                        <div className="billing-switch" role="group" aria-label="Periodo de facturación">
                            <span className={!isYearly ? "active" : ""}>Mensual</span>
                            <button
                                type="button"
                                className={isYearly ? "is-yearly" : ""}
                                aria-label={`Cambiar a facturación ${isYearly ? "mensual" : "anual"}`}
                                aria-pressed={isYearly}
                                onClick={() => setBillingCycle(isYearly ? "monthly" : "yearly")}
                            >
                                <span />
                            </button>
                            <span className={isYearly ? "active" : ""}>Anual</span>
                            <strong>Ahorra 20%</strong>
                        </div>
                    </div>

                    <div className="plans-grid">
                        {plans.map((plan) => {
                            const price = plan.id === "pro" ? proPrice : undefined;

                            return (
                                <article
                                    key={plan.id}
                                    className={`plan-card ${plan.id} ${plan.featured ? "featured" : ""}`}
                                >
                                    {plan.featured && <div className="plan-label">MÁS ELEGIDO</div>}

                                    <div className={`plan-icon ${plan.tone}-light`}>
                                        <i className={`bi ${plan.icon}`} aria-hidden="true" />
                                    </div>

                                    <h3>{plan.name}</h3>
                                    <p className="plan-desc">{plan.description}</p>

                                    <div className={`plan-price ${plan.customPrice ? "custom-price" : ""}`}>
                                        {plan.customPrice ?? (price ? formatCurrency(price) : "Gratis")}
                                        {price && <span>por mes</span>}
                                    </div>

                                    {plan.id === "pro" && (
                                        <p className="plan-badge">
                                            {isYearly ? "Facturado anualmente" : "Facturado mensualmente"}
                                        </p>
                                    )}

                                    <p className="plan-small">{plan.helperText}</p>

                                    <button
                                        type="button"
                                        className={plan.buttonClass}
                                        onClick={() => handlePlanAction(plan.id)}
                                    >
                                        {plan.buttonText}
                                        <i className="bi bi-arrow-right" aria-hidden="true" />
                                    </button>

                                    <ul>
                                        {plan.features.map((feature) => (
                                            <li key={feature}>{feature}</li>
                                        ))}
                                    </ul>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="plans-table-section" aria-labelledby="comparison-title">
                <div className="container-xl">
                    <div className="comparison-heading">
                        <span className="section-kicker">Compara en detalle</span>
                        <h2 id="comparison-title">
                            ¿Qué incluye cada plan? <i className="bi bi-stars" aria-hidden="true" />
                        </h2>
                    </div>

                    <div className="plans-table-wrapper">
                        <table className="plans-table">
                            <thead>
                                <tr>
                                    <th scope="col">Funcionalidades</th>
                                    <th scope="col">Básico</th>
                                    <th scope="col" className="recommended-column">Pro</th>
                                    <th scope="col">Institución</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonRows.map(([feature, basic, pro, institution]) => (
                                    <tr key={feature}>
                                        <th scope="row">{feature}</th>
                                        <td><ComparisonValue value={basic} /></td>
                                        <td className="recommended-column"><ComparisonValue value={pro} /></td>
                                        <td><ComparisonValue value={institution} purple /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="plans-help-section" aria-labelledby="help-title">
                <div className="container-xl">
                    <div className="plans-help-card">
                        <div className="help-image" aria-hidden="true">
                            <img src="/assets/img/pepe-asesor.webp" alt="" />
                        </div>

                        <div className="help-content">
                            <span className="section-kicker">Te orientamos</span>
                            <h2 id="help-title">¿No estás seguro de qué plan elegir?</h2>
                            <p>Nuestro equipo te ayuda a encontrar la mejor opción para tu institución.</p>
                        </div>

                        <a
                            href="https://wa.me/"
                            className="btn-help"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Hablar con asesor
                            <i className="bi bi-whatsapp" aria-hidden="true" />
                        </a>

                        <div className="guarantee-card">
                            <div className="guarantee-icon">
                                <i className="bi bi-shield-check" aria-hidden="true" />
                            </div>
                            <div>
                                <h3>Garantía TíaJo</h3>
                                <p>Prueba la plataforma durante 14 días sin riesgo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}