import { Link, useParams } from "react-router-dom";

import "../../../shared/assets/styles/dashboard/dashboard.css";

type StatCardProps = {
    title: string;
    value: string;
    detail: string;
    trend?: string;
    trendType?: "positive" | "negative" | "neutral";
    icon: string;
    iconClass: string;
};

type ActivityItemProps = {
    icon: string;
    iconClass: string;
    title: string;
    description: string;
    time: string;
};

function StatCard({
    title,
    value,
    detail,
    trend,
    trendType = "neutral",
    icon,
    iconClass,
}: StatCardProps) {
    return (
        <div className="tj-stat-card-pro">
            <div className="tj-stat-card-top">
                <span className={`tj-stat-card-icon ${iconClass}`}>
                    <i className={`bi ${icon}`} />
                </span>

                <button
                    type="button"
                    className="tj-icon-button"
                    aria-label={`Ver detalles de ${title}`}
                >
                    <i className="bi bi-three-dots" />
                </button>
            </div>

            <span className="tj-stat-card-label">{title}</span>

            <div className="tj-stat-value-row">
                <h3>{value}</h3>

                {trend && (
                    <span className={`tj-trend tj-trend-${trendType}`}>
                        <i
                            className={
                                trendType === "negative"
                                    ? "bi bi-arrow-down-right"
                                    : trendType === "positive"
                                      ? "bi bi-arrow-up-right"
                                      : "bi bi-dash"
                            }
                        />

                        {trend}
                    </span>
                )}
            </div>

            <small>{detail}</small>
        </div>
    );
}

function ActivityItem({
    icon,
    iconClass,
    title,
    description,
    time,
}: ActivityItemProps) {
    return (
        <div className="tj-activity-item">
            <span className={`tj-activity-icon ${iconClass}`}>
                <i className={`bi ${icon}`} />
            </span>

            <div className="tj-activity-content">
                <strong>{title}</strong>
                <p>{description}</p>
            </div>

            <small>{time}</small>
        </div>
    );
}

export default function Index() {
    const {
        lang = "es",
        accessCode = "",
    } = useParams<{
        lang: string;
        accessCode: string;
    }>();

    const dashboardBase = `/${lang}/${accessCode}/dashboard`;

    const currentDate = new Intl.DateTimeFormat("es-CL", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
    }).format(new Date());

    return (
        <div className="tj-dashboard">
            {/* ENCABEZADO */}
            <section className="tj-dashboard-welcome">
                <div>
                    <span className="tj-dashboard-eyebrow">
                        <i className="bi bi-stars" />
                        Centro de administración
                    </span>

                    <h1>Bienvenido, Benjamín</h1>

                    <p>
                        Revisa el estado general de TíaJo Bank, la actividad de
                        los colegios y las tareas prioritarias de hoy.
                    </p>

                    <small className="tj-dashboard-date">
                        <i className="bi bi-calendar3" />
                        {currentDate}
                    </small>
                </div>

                <div className="tj-dashboard-welcome-actions">
                    <button
                        type="button"
                        className="btn tj-btn-secondary-dashboard"
                    >
                        <i className="bi bi-download" />
                        Exportar informe
                    </button>

                    <Link
                        to={`${dashboardBase}/colegios/crear`}
                        className="btn tj-btn-primary-dashboard"
                    >
                        <i className="bi bi-building-add" />
                        Nuevo colegio
                    </Link>
                </div>
            </section>

            {/* ESTADÍSTICAS */}
            <section className="row g-3 mb-4">
                <div className="col-xxl-3 col-xl-6">
                    <StatCard
                        title="Colegios activos"
                        value="142"
                        detail="12 nuevas instituciones este mes"
                        trend="+9,2%"
                        trendType="positive"
                        icon="bi-buildings"
                        iconClass="tj-icon-blue"
                    />
                </div>

                <div className="col-xxl-3 col-xl-6">
                    <StatCard
                        title="Usuarios registrados"
                        value="18.486"
                        detail="3.486 conectados durante las últimas 24 horas"
                        trend="+18%"
                        trendType="positive"
                        icon="bi-people-fill"
                        iconClass="tj-icon-green"
                    />
                </div>

                <div className="col-xxl-3 col-xl-6">
                    <StatCard
                        title="Ingresos mensuales"
                        value="$2,45M"
                        detail="14 renovaciones completadas"
                        trend="+12,4%"
                        trendType="positive"
                        icon="bi-graph-up-arrow"
                        iconClass="tj-icon-yellow"
                    />
                </div>

                <div className="col-xxl-3 col-xl-6">
                    <StatCard
                        title="Alertas de seguridad"
                        value="11"
                        detail="3 bloqueadas automáticamente"
                        trend="-4"
                        trendType="positive"
                        icon="bi-shield-lock-fill"
                        iconClass="tj-icon-red"
                    />
                </div>
            </section>

            {/* ACTIVIDAD PRINCIPAL */}
            <section className="row g-4">
                <div className="col-xxl-8">
                    <article className="tj-card-pro">
                        <header className="tj-card-pro-header">
                            <div>
                                <span className="tj-card-kicker">
                                    Analítica general
                                </span>

                                <h2>Actividad multi-tenant</h2>

                                <p>
                                    Evolución semanal de estudiantes, docentes
                                    y familias activas.
                                </p>
                            </div>

                            <div className="tj-card-header-actions">
                                <select
                                    className="form-select form-select-sm"
                                    defaultValue="7"
                                    aria-label="Periodo de actividad"
                                >
                                    <option value="7">Últimos 7 días</option>
                                    <option value="30">Últimos 30 días</option>
                                    <option value="90">Últimos 3 meses</option>
                                </select>

                                <Link
                                    to={`${dashboardBase}/reportes/actividad`}
                                    className="tj-inline-link"
                                >
                                    Ver reporte
                                    <i className="bi bi-arrow-right" />
                                </Link>
                            </div>
                        </header>

                        <div className="tj-chart-summary">
                            <div>
                                <small>Usuarios activos</small>
                                <strong>8.742</strong>
                            </div>

                            <div>
                                <small>Sesiones iniciadas</small>
                                <strong>12.540</strong>
                            </div>

                            <div>
                                <small>Tiempo promedio</small>
                                <strong>28 min</strong>
                            </div>
                        </div>

                        <div className="tj-activity-chart">
                            <div className="tj-chart-grid-line line-1" />
                            <div className="tj-chart-grid-line line-2" />
                            <div className="tj-chart-grid-line line-3" />

                            <div className="tj-chart-bars">
                                {[48, 62, 55, 78, 67, 88, 82].map(
                                    (height, index) => (
                                        <div
                                            className="tj-chart-day"
                                            key={index}
                                        >
                                            <div className="tj-chart-bar-group">
                                                <span
                                                    className="tj-chart-bar tj-chart-bar-primary"
                                                    style={{
                                                        height: `${height}%`,
                                                    }}
                                                />

                                                <span
                                                    className="tj-chart-bar tj-chart-bar-secondary"
                                                    style={{
                                                        height: `${Math.max(
                                                            height - 18,
                                                            20,
                                                        )}%`,
                                                    }}
                                                />
                                            </div>

                                            <small>
                                                {
                                                    [
                                                        "Lun",
                                                        "Mar",
                                                        "Mié",
                                                        "Jue",
                                                        "Vie",
                                                        "Sáb",
                                                        "Dom",
                                                    ][index]
                                                }
                                            </small>
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>

                        <div className="tj-chart-legend">
                            <span>
                                <i className="tj-legend-dot primary" />
                                Estudiantes
                            </span>

                            <span>
                                <i className="tj-legend-dot secondary" />
                                Docentes y familias
                            </span>
                        </div>
                    </article>
                </div>

                <div className="col-xxl-4">
                    <article className="tj-card-pro h-100">
                        <header className="tj-card-pro-header">
                            <div>
                                <span className="tj-card-kicker">
                                    Operación SaaS
                                </span>

                                <h2>Estado de colegios</h2>

                                <p>
                                    Distribución actual de planes y suscripciones.
                                </p>
                            </div>

                            <button
                                type="button"
                                className="tj-icon-button"
                                aria-label="Más opciones"
                            >
                                <i className="bi bi-three-dots" />
                            </button>
                        </header>

                        <div className="tj-donut-section">
                            <div className="tj-css-donut">
                                <div>
                                    <strong>142</strong>
                                    <span>Total</span>
                                </div>
                            </div>

                            <div className="tj-status-list-pro">
                                <div>
                                    <span>
                                        <i className="tj-status-dot green" />
                                        Activos
                                    </span>
                                    <strong>98</strong>
                                </div>

                                <div>
                                    <span>
                                        <i className="tj-status-dot yellow" />
                                        Por vencer
                                    </span>
                                    <strong>18</strong>
                                </div>

                                <div>
                                    <span>
                                        <i className="tj-status-dot red" />
                                        Vencidos
                                    </span>
                                    <strong>9</strong>
                                </div>

                                <div>
                                    <span>
                                        <i className="tj-status-dot blue" />
                                        Prueba gratis
                                    </span>
                                    <strong>17</strong>
                                </div>
                            </div>
                        </div>

                        <div className="tj-renewal-box">
                            <span className="tj-renewal-icon">
                                <i className="bi bi-arrow-repeat" />
                            </span>

                            <div>
                                <small>Renovaciones este mes</small>
                                <strong>14 de 18 completadas</strong>
                            </div>

                            <span className="tj-renewal-percentage">78%</span>
                        </div>

                        <div className="progress tj-renewal-progress">
                            <div
                                className="progress-bar"
                                style={{ width: "78%" }}
                            />
                        </div>
                    </article>
                </div>
            </section>

            {/* SALUD Y CRECIMIENTO */}
            <section className="row g-4 mt-1">
                <div className="col-xl-7">
                    <article className="tj-card-pro h-100">
                        <header className="tj-card-pro-header">
                            <div>
                                <span className="tj-card-kicker">
                                    Rendimiento
                                </span>

                                <h2>Crecimiento de la plataforma</h2>

                                <p>
                                    Comparación mensual de actividad y adopción.
                                </p>
                            </div>

                            <span className="tj-period-badge">
                                Julio 2026
                            </span>
                        </header>

                        <div className="tj-growth-grid">
                            <div className="tj-growth-item">
                                <div className="tj-growth-label">
                                    <span>Usuarios activos</span>
                                    <strong>84%</strong>
                                </div>

                                <div className="progress">
                                    <div
                                        className="progress-bar tj-progress-green"
                                        style={{ width: "84%" }}
                                    />
                                </div>

                                <small>Meta mensual: 90%</small>
                            </div>

                            <div className="tj-growth-item">
                                <div className="tj-growth-label">
                                    Retención de colegios
                                    <strong>92%</strong>
                                </div>

                                <div className="progress">
                                    <div
                                        className="progress-bar tj-progress-blue"
                                        style={{ width: "92%" }}
                                    />
                                </div>

                                <small>4,6% sobre el mes anterior</small>
                            </div>

                            <div className="tj-growth-item">
                                <div className="tj-growth-label">
                                    Uso de herramientas
                                    <strong>76%</strong>
                                </div>

                                <div className="progress">
                                    <div
                                        className="progress-bar tj-progress-yellow"
                                        style={{ width: "76%" }}
                                    />
                                </div>

                                <small>Radio y juegos lideran el crecimiento</small>
                            </div>

                            <div className="tj-growth-item">
                                <div className="tj-growth-label">
                                    Participación familiar
                                    <strong>68%</strong>
                                </div>

                                <div className="progress">
                                    <div
                                        className="progress-bar tj-progress-purple"
                                        style={{ width: "68%" }}
                                    />
                                </div>

                                <small>846 familias activas esta semana</small>
                            </div>
                        </div>
                    </article>
                </div>

                <div className="col-xl-5">
                    <article className="tj-card-pro h-100">
                        <header className="tj-card-pro-header">
                            <div>
                                <span className="tj-card-kicker">
                                    Infraestructura
                                </span>

                                <h2>Salud del sistema</h2>

                                <p>
                                    Estado de servicios críticos en tiempo real.
                                </p>
                            </div>

                            <span className="tj-system-online">
                                <i className="bi bi-circle-fill" />
                                Operativo
                            </span>
                        </header>

                        <div className="tj-service-list">
                            <div className="tj-service-item">
                                <span className="tj-service-icon">
                                    <i className="bi bi-database-check" />
                                </span>

                                <div>
                                    <strong>Base de datos</strong>
                                    <small>Respuesta promedio: 46 ms</small>
                                </div>

                                <span className="tj-service-status success">
                                    Estable
                                </span>
                            </div>

                            <div className="tj-service-item">
                                <span className="tj-service-icon">
                                    <i className="bi bi-cloud-check" />
                                </span>

                                <div>
                                    <strong>Servidor principal</strong>
                                    <small>Disponibilidad: 99,98%</small>
                                </div>

                                <span className="tj-service-status success">
                                    Estable
                                </span>
                            </div>

                            <div className="tj-service-item">
                                <span className="tj-service-icon">
                                    <i className="bi bi-envelope-check" />
                                </span>

                                <div>
                                    <strong>Correos y notificaciones</strong>
                                    <small>12 mensajes en cola</small>
                                </div>

                                <span className="tj-service-status warning">
                                    Atención
                                </span>
                            </div>

                            <div className="tj-service-item">
                                <span className="tj-service-icon">
                                    <i className="bi bi-shield-check" />
                                </span>

                                <div>
                                    <strong>Seguridad</strong>
                                    <small>Último análisis: hace 4 minutos</small>
                                </div>

                                <span className="tj-service-status success">
                                    Protegido
                                </span>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            {/* CONTENIDO */}
            <section className="row g-4 mt-1">
                <div className="col-xl-5">
                    <article className="tj-card-pro h-100">
                        <header className="tj-card-pro-header">
                            <div>
                                <span className="tj-card-kicker">
                                    Biblioteca digital
                                </span>

                                <h2>Centro de contenido</h2>

                                <p>
                                    Recursos disponibles para la comunidad.
                                </p>
                            </div>

                            <Link
                                to={`${dashboardBase}/contenido`}
                                className="tj-inline-link"
                            >
                                Administrar
                                <i className="bi bi-arrow-right" />
                            </Link>
                        </header>

                        <div className="tj-content-grid">
                            <Link to={`${dashboardBase}/guias`}>
                                <span className="tj-content-icon green">
                                    <i className="bi bi-journal-text" />
                                </span>

                                <strong>346</strong>
                                <small>Guías educativas</small>
                            </Link>

                            <Link to={`${dashboardBase}/blog`}>
                                <span className="tj-content-icon blue">
                                    <i className="bi bi-newspaper" />
                                </span>

                                <strong>82</strong>
                                <small>Artículos del blog</small>
                            </Link>

                            <Link to={`${dashboardBase}/tiajo-tv`}>
                                <span className="tj-content-icon red">
                                    <i className="bi bi-tv" />
                                </span>

                                <strong>12</strong>
                                <small>Programas TíaJo TV</small>
                            </Link>

                            <Link to={`${dashboardBase}/radio`}>
                                <span className="tj-content-icon yellow">
                                    <i className="bi bi-broadcast" />
                                </span>

                                <strong>423</strong>
                                <small>Audios y podcast</small>
                            </Link>
                        </div>
                    </article>
                </div>

                <div className="col-xl-7">
                    <article className="tj-card-pro h-100">
                        <header className="tj-card-pro-header">
                            <div>
                                <span className="tj-card-kicker">
                                    Seguimiento
                                </span>

                                <h2>Actividad reciente</h2>

                                <p>
                                    Últimos eventos relevantes de la plataforma.
                                </p>
                            </div>

                            <Link
                                to={`${dashboardBase}/actividad`}
                                className="tj-inline-link"
                            >
                                Ver historial
                                <i className="bi bi-arrow-right" />
                            </Link>
                        </header>

                        <div className="tj-activity-list">
                            <ActivityItem
                                icon="bi-building-check"
                                iconClass="success"
                                title="Nuevo colegio registrado"
                                description="Colegio Los Alerces completó su configuración inicial."
                                time="Hace 5 min"
                            />

                            <ActivityItem
                                icon="bi-person-plus"
                                iconClass="primary"
                                title="Usuarios importados"
                                description="Se agregaron 248 estudiantes al Colegio Palencia."
                                time="Hace 18 min"
                            />

                            <ActivityItem
                                icon="bi-shield-exclamation"
                                iconClass="danger"
                                title="Intento de acceso bloqueado"
                                description="Se bloqueó una dirección IP por múltiples intentos fallidos."
                                time="Hace 32 min"
                            />

                            <ActivityItem
                                icon="bi-controller"
                                iconClass="warning"
                                title="Nuevo juego publicado"
                                description="El juego Matemática Aventurera fue publicado para 2° básico."
                                time="Hace 1 h"
                            />
                        </div>
                    </article>
                </div>
            </section>

            {/* PENDIENTES Y ACCIONES */}
            <section className="row g-4 mt-1 pb-4">
                <div className="col-xl-4">
                    <article className="tj-card-pro h-100">
                        <header className="tj-card-pro-header">
                            <div>
                                <span className="tj-card-kicker">
                                    Prioridades
                                </span>

                                <h2>Tareas pendientes</h2>

                                <p>Acciones que necesitan revisión.</p>
                            </div>

                            <span className="tj-count-badge">6</span>
                        </header>

                        <div className="tj-task-list">
                            <label className="tj-task-item">
                                <input type="checkbox" />
                                <span>
                                    <strong>Revisar renovaciones</strong>
                                    <small>3 colegios vencen esta semana</small>
                                </span>
                            </label>

                            <label className="tj-task-item">
                                <input type="checkbox" />
                                <span>
                                    <strong>Aprobar contenidos</strong>
                                    <small>8 recursos esperan revisión</small>
                                </span>
                            </label>

                            <label className="tj-task-item">
                                <input type="checkbox" />
                                <span>
                                    <strong>Revisar alertas</strong>
                                    <small>2 alertas de convivencia pendientes</small>
                                </span>
                            </label>

                            <label className="tj-task-item">
                                <input type="checkbox" />
                                <span>
                                    <strong>Actualizar permisos</strong>
                                    <small>Nuevo rol UTP en configuración</small>
                                </span>
                            </label>
                        </div>
                    </article>
                </div>

                <div className="col-xl-4">
                    <article className="tj-card-pro h-100">
                        <header className="tj-card-pro-header">
                            <div>
                                <span className="tj-card-kicker">
                                    Instituciones
                                </span>

                                <h2>Colegios destacados</h2>

                                <p>Mayor actividad durante esta semana.</p>
                            </div>
                        </header>

                        <div className="tj-school-ranking">
                            <div>
                                <span className="tj-ranking-position gold">
                                    1
                                </span>

                                <span className="tj-school-avatar">CP</span>

                                <div>
                                    <strong>Colegio Palencia</strong>
                                    <small>1.248 usuarios activos</small>
                                </div>

                                <span className="tj-ranking-score">98%</span>
                            </div>

                            <div>
                                <span className="tj-ranking-position silver">
                                    2
                                </span>

                                <span className="tj-school-avatar">SA</span>

                                <div>
                                    <strong>San Alberto</strong>
                                    <small>986 usuarios activos</small>
                                </div>

                                <span className="tj-ranking-score">94%</span>
                            </div>

                            <div>
                                <span className="tj-ranking-position bronze">
                                    3
                                </span>

                                <span className="tj-school-avatar">LA</span>

                                <div>
                                    <strong>Los Alerces</strong>
                                    <small>743 usuarios activos</small>
                                </div>

                                <span className="tj-ranking-score">91%</span>
                            </div>
                        </div>
                    </article>
                </div>

                <div className="col-xl-4">
                    <article className="tj-card-pro h-100">
                        <header className="tj-card-pro-header">
                            <div>
                                <span className="tj-card-kicker">
                                    Gestión diaria
                                </span>

                                <h2>Acciones rápidas</h2>

                                <p>Accesos frecuentes del administrador.</p>
                            </div>
                        </header>

                        <div className="tj-quick-actions">
                            <Link to={`${dashboardBase}/colegios/crear`}>
                                <span>
                                    <i className="bi bi-building-add" />
                                </span>

                                <div>
                                    <strong>Nuevo colegio</strong>
                                    <small>Registrar institución</small>
                                </div>

                                <i className="bi bi-chevron-right" />
                            </Link>

                            <Link to={`${dashboardBase}/usuarios/crear`}>
                                <span>
                                    <i className="bi bi-person-plus" />
                                </span>

                                <div>
                                    <strong>Crear usuario</strong>
                                    <small>Agregar una cuenta</small>
                                </div>

                                <i className="bi bi-chevron-right" />
                            </Link>

                            <Link to={`${dashboardBase}/juegos/crear`}>
                                <span>
                                    <i className="bi bi-controller" />
                                </span>

                                <div>
                                    <strong>Crear juego</strong>
                                    <small>Contenido gamificado</small>
                                </div>

                                <i className="bi bi-chevron-right" />
                            </Link>

                            <Link to={`${dashboardBase}/anuncios/crear`}>
                                <span>
                                    <i className="bi bi-megaphone" />
                                </span>

                                <div>
                                    <strong>Publicar anuncio</strong>
                                    <small>Enviar comunicación</small>
                                </div>

                                <i className="bi bi-chevron-right" />
                            </Link>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
}