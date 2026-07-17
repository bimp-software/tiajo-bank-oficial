import { useMemo, useState } from "react";

import "../../../../shared/assets/styles/dashboard/ligas-temporadas.css";

type EstadoTemporada =
    | "activa"
    | "programada"
    | "finalizada"
    | "borrador";

type EstadoLiga = "activa" | "pausada" | "finalizada";

type Temporada = {
    id: number;
    nombre: string;
    descripcion: string;
    estado: EstadoTemporada;
    fechaInicio: string;
    fechaFin: string;
    participantes: number;
    colegios: number;
    progreso: number;
    icono: string;
    colorPrincipal: string;
    colorSecundario: string;
};

type Liga = {
    id: number;
    nombre: string;
    categoria: string;
    estado: EstadoLiga;
    participantes: number;
    colegios: number;
    nivel: string;
    premio: string;
    icono: string;
    color: string;
};

type Ranking = {
    posicion: number;
    colegio: string;
    sigla: string;
    puntos: number;
    estudiantes: number;
    insignias: number;
    variacion: "sube" | "baja" | "igual";
};

const temporadas: Temporada[] = [
    {
        id: 1,
        nombre: "Temporada Exploradores",
        descripcion:
            "Competencia institucional centrada en aprendizaje, convivencia y participación.",
        estado: "activa",
        fechaInicio: "01 jul. 2026",
        fechaFin: "30 sep. 2026",
        participantes: 8426,
        colegios: 98,
        progreso: 44,
        icono: "bi-compass-fill",
        colorPrincipal: "#255d50",
        colorSecundario: "#34a853",
    },
    {
        id: 2,
        nombre: "Guardianes del conocimiento",
        descripcion:
            "Temporada enfocada en lectura, ciencias y resolución de desafíos.",
        estado: "programada",
        fechaInicio: "01 oct. 2026",
        fechaFin: "15 dic. 2026",
        participantes: 0,
        colegios: 73,
        progreso: 0,
        icono: "bi-shield-fill-check",
        colorPrincipal: "#4338ca",
        colorSecundario: "#8b5cf6",
    },
    {
        id: 3,
        nombre: "Festival TíaJo",
        descripcion:
            "Temporada especial de creatividad, proyectos y participación familiar.",
        estado: "finalizada",
        fechaInicio: "01 mar. 2026",
        fechaFin: "30 jun. 2026",
        participantes: 7154,
        colegios: 84,
        progreso: 100,
        icono: "bi-stars",
        colorPrincipal: "#b45309",
        colorSecundario: "#facc15",
    },
];

const ligas: Liga[] = [
    {
        id: 1,
        nombre: "Liga Diamante",
        categoria: "Rendimiento sobresaliente",
        estado: "activa",
        participantes: 1248,
        colegios: 18,
        nivel: "Legendaria",
        premio: "1.000 TíaCoins",
        icono: "bi-gem",
        color: "#2563eb",
    },
    {
        id: 2,
        nombre: "Liga Esmeralda",
        categoria: "Progreso académico",
        estado: "activa",
        participantes: 2384,
        colegios: 31,
        nivel: "Épica",
        premio: "750 TíaCoins",
        icono: "bi-hexagon-fill",
        color: "#16a34a",
    },
    {
        id: 3,
        nombre: "Liga Rubí",
        categoria: "Participación y convivencia",
        estado: "activa",
        participantes: 3162,
        colegios: 37,
        nivel: "Rara",
        premio: "500 TíaCoins",
        icono: "bi-heart-fill",
        color: "#dc2626",
    },
    {
        id: 4,
        nombre: "Liga Bronce",
        categoria: "Inicio y adaptación",
        estado: "pausada",
        participantes: 1632,
        colegios: 24,
        nivel: "Común",
        premio: "250 TíaCoins",
        icono: "bi-award-fill",
        color: "#b45309",
    },
];

const ranking: Ranking[] = [
    {
        posicion: 1,
        colegio: "Colegio Palencia",
        sigla: "CP",
        puntos: 28450,
        estudiantes: 748,
        insignias: 624,
        variacion: "sube",
    },
    {
        posicion: 2,
        colegio: "Colegio Los Alerces",
        sigla: "LA",
        puntos: 27120,
        estudiantes: 682,
        insignias: 583,
        variacion: "igual",
    },
    {
        posicion: 3,
        colegio: "San Alberto",
        sigla: "SA",
        puntos: 25980,
        estudiantes: 654,
        insignias: 540,
        variacion: "sube",
    },
    {
        posicion: 4,
        colegio: "Instituto del Valle",
        sigla: "IV",
        puntos: 24730,
        estudiantes: 621,
        insignias: 498,
        variacion: "baja",
    },
    {
        posicion: 5,
        colegio: "Escuela Nueva Esperanza",
        sigla: "NE",
        puntos: 23140,
        estudiantes: 576,
        insignias: 462,
        variacion: "sube",
    },
];

function getEstadoTemporada(estado: EstadoTemporada): string {
    const estados: Record<EstadoTemporada, string> = {
        activa: "Activa",
        programada: "Programada",
        finalizada: "Finalizada",
        borrador: "Borrador",
    };

    return estados[estado];
}

function getEstadoLiga(estado: EstadoLiga): string {
    const estados: Record<EstadoLiga, string> = {
        activa: "Activa",
        pausada: "Pausada",
        finalizada: "Finalizada",
    };

    return estados[estado];
}

export default function LigasTemporadasPage() {
    const [busqueda, setBusqueda] = useState("");
    const [estadoLiga, setEstadoLiga] = useState("todas");
    const [vista, setVista] = useState<"cards" | "table">("cards");

    const ligasFiltradas = useMemo(() => {
        return ligas.filter((liga) => {
            const coincideBusqueda =
                liga.nombre
                    .toLowerCase()
                    .includes(busqueda.toLowerCase()) ||
                liga.categoria
                    .toLowerCase()
                    .includes(busqueda.toLowerCase());

            const coincideEstado =
                estadoLiga === "todas" || liga.estado === estadoLiga;

            return coincideBusqueda && coincideEstado;
        });
    }, [busqueda, estadoLiga]);

    const temporadaActiva =
        temporadas.find((temporada) => temporada.estado === "activa") ??
        temporadas[0];

    return (
        <>
            <div className="tj-leagues-page">
                {/* HERO */}
                <section className="tj-leagues-hero">
                    <div>
                        <span className="tj-leagues-eyebrow">
                            <i className="bi bi-trophy-fill" />
                            Experiencia estudiantil
                        </span>

                        <h1>Ligas y temporadas</h1>

                        <p>
                            Crea competencias, organiza niveles y supervisa el
                            progreso de colegios, cursos y estudiantes en toda
                            la plataforma.
                        </p>
                    </div>

                    <div className="tj-leagues-hero-actions">
                        <button
                            type="button"
                            className="btn tj-leagues-secondary-button"
                            data-bs-toggle="modal"
                            data-bs-target="#createLeagueModal"
                        >
                            <i className="bi bi-diagram-3-fill" />
                            Nueva liga
                        </button>

                        <button
                            type="button"
                            className="btn tj-leagues-primary-button"
                            data-bs-toggle="modal"
                            data-bs-target="#createSeasonModal"
                        >
                            <i className="bi bi-calendar2-star-fill" />
                            Nueva temporada
                        </button>
                    </div>
                </section>

                {/* ESTADÍSTICAS */}
                <section className="row g-3 mb-4">
                    <div className="col-xl-3 col-md-6">
                        <div className="tj-league-stat-card">
                            <span className="green">
                                <i className="bi bi-trophy-fill" />
                            </span>

                            <div>
                                <small>Ligas activas</small>
                                <strong>3</strong>
                                <p>Competencias en curso</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <div className="tj-league-stat-card">
                            <span className="blue">
                                <i className="bi bi-people-fill" />
                            </span>

                            <div>
                                <small>Participantes</small>
                                <strong>8.426</strong>
                                <p>Estudiantes esta temporada</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <div className="tj-league-stat-card">
                            <span className="yellow">
                                <i className="bi bi-buildings-fill" />
                            </span>

                            <div>
                                <small>Colegios participantes</small>
                                <strong>98</strong>
                                <p>69% de instituciones activas</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <div className="tj-league-stat-card">
                            <span className="purple">
                                <i className="bi bi-lightning-charge-fill" />
                            </span>

                            <div>
                                <small>Puntos entregados</small>
                                <strong>2,8M</strong>
                                <p>Durante la temporada actual</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TEMPORADA ACTIVA */}
                <section
                    className="tj-active-season"
                    style={{
                        background: `radial-gradient(circle at 88% 18%, ${temporadaActiva.colorSecundario}55, transparent 28%), linear-gradient(135deg, ${temporadaActiva.colorPrincipal}, #102f29)`,
                    }}
                >
                    <div className="tj-active-season-icon">
                        <i className={`bi ${temporadaActiva.icono}`} />
                    </div>

                    <div className="tj-active-season-info">
                        <span>
                            <i className="bi bi-broadcast-pin" />
                            Temporada activa
                        </span>

                        <h2>{temporadaActiva.nombre}</h2>

                        <p>{temporadaActiva.descripcion}</p>

                        <div className="tj-active-season-meta">
                            <span>
                                <i className="bi bi-calendar3" />
                                {temporadaActiva.fechaInicio} —{" "}
                                {temporadaActiva.fechaFin}
                            </span>

                            <span>
                                <i className="bi bi-people-fill" />
                                {temporadaActiva.participantes.toLocaleString(
                                    "es-CL",
                                )}{" "}
                                participantes
                            </span>

                            <span>
                                <i className="bi bi-buildings" />
                                {temporadaActiva.colegios} colegios
                            </span>
                        </div>
                    </div>

                    <div className="tj-active-season-progress">
                        <div className="tj-season-progress-circle">
                            <strong>{temporadaActiva.progreso}%</strong>
                            <span>Completada</span>
                        </div>

                        <button type="button">
                            Administrar temporada
                            <i className="bi bi-arrow-right" />
                        </button>
                    </div>
                </section>

                {/* ACCESOS */}
                <section className="tj-league-admin-modules">
                    <button type="button">
                        <span className="blue">
                            <i className="bi bi-table" />
                        </span>

                        <div>
                            <strong>Tabla general</strong>
                            <small>Posiciones de colegios y cursos</small>
                        </div>

                        <i className="bi bi-chevron-right" />
                    </button>

                    <button type="button">
                        <span className="purple">
                            <i className="bi bi-gift-fill" />
                        </span>

                        <div>
                            <strong>Premios y recompensas</strong>
                            <small>Configura monedas, XP e insignias</small>
                        </div>

                        <i className="bi bi-chevron-right" />
                    </button>

                    <button type="button">
                        <span className="yellow">
                            <i className="bi bi-calendar-week-fill" />
                        </span>

                        <div>
                            <strong>Calendario</strong>
                            <small>Etapas, eventos y cierres</small>
                        </div>

                        <i className="bi bi-chevron-right" />
                    </button>

                    <button type="button">
                        <span className="green">
                            <i className="bi bi-graph-up-arrow" />
                        </span>

                        <div>
                            <strong>Analítica</strong>
                            <small>Participación y evolución global</small>
                        </div>

                        <i className="bi bi-chevron-right" />
                    </button>
                </section>

                {/* TEMPORADAS */}
                <section className="tj-season-section">
                    <header className="tj-section-heading">
                        <div>
                            <span>Administración global</span>
                            <h2>Temporadas</h2>
                            <p>
                                Gestiona las competencias activas, programadas y
                                finalizadas.
                            </p>
                        </div>

                        <button type="button">
                            Ver historial completo
                            <i className="bi bi-arrow-right" />
                        </button>
                    </header>

                    <div className="row g-4">
                        {temporadas.map((temporada) => (
                            <div
                                className="col-xl-4"
                                key={temporada.id}
                            >
                                <article className="tj-season-card">
                                    <div
                                        className="tj-season-card-cover"
                                        style={{
                                            background: `radial-gradient(circle at 80% 15%, ${temporada.colorSecundario}66, transparent 30%), linear-gradient(135deg, ${temporada.colorPrincipal}, #142f2a)`,
                                        }}
                                    >
                                        <span
                                            className={`tj-season-status ${temporada.estado}`}
                                        >
                                            <i className="bi bi-circle-fill" />
                                            {getEstadoTemporada(
                                                temporada.estado,
                                            )}
                                        </span>

                                        <i
                                            className={`bi ${temporada.icono}`}
                                        />

                                        <button
                                            type="button"
                                            aria-label="Opciones de temporada"
                                        >
                                            <i className="bi bi-three-dots-vertical" />
                                        </button>
                                    </div>

                                    <div className="tj-season-card-body">
                                        <h3>{temporada.nombre}</h3>

                                        <p>{temporada.descripcion}</p>

                                        <div className="tj-season-dates">
                                            <span>
                                                <i className="bi bi-calendar-event" />
                                                Inicio
                                                <strong>
                                                    {temporada.fechaInicio}
                                                </strong>
                                            </span>

                                            <span>
                                                <i className="bi bi-calendar-check" />
                                                Término
                                                <strong>
                                                    {temporada.fechaFin}
                                                </strong>
                                            </span>
                                        </div>

                                        <div className="tj-season-progress">
                                            <div>
                                                <span>Progreso</span>
                                                <strong>
                                                    {temporada.progreso}%
                                                </strong>
                                            </div>

                                            <div className="progress">
                                                <div
                                                    className="progress-bar"
                                                    style={{
                                                        width: `${temporada.progreso}%`,
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <footer>
                                            <span>
                                                <i className="bi bi-people-fill" />
                                                {temporada.participantes.toLocaleString(
                                                    "es-CL",
                                                )}
                                            </span>

                                            <span>
                                                <i className="bi bi-buildings-fill" />
                                                {temporada.colegios}
                                            </span>

                                            <button type="button">
                                                Administrar
                                                <i className="bi bi-arrow-right" />
                                            </button>
                                        </footer>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </section>

                {/* LIGAS */}
                <section className="tj-leagues-management">
                    <header className="tj-section-heading">
                        <div>
                            <span>Organización competitiva</span>
                            <h2>Ligas configuradas</h2>
                            <p>
                                Supervisa los niveles y recompensas de cada liga.
                            </p>
                        </div>

                        <div className="tj-leagues-view-buttons">
                            <button
                                type="button"
                                className={
                                    vista === "cards" ? "active" : ""
                                }
                                onClick={() => setVista("cards")}
                            >
                                <i className="bi bi-grid-3x3-gap-fill" />
                            </button>

                            <button
                                type="button"
                                className={
                                    vista === "table" ? "active" : ""
                                }
                                onClick={() => setVista("table")}
                            >
                                <i className="bi bi-list-ul" />
                            </button>
                        </div>
                    </header>

                    <div className="tj-leagues-toolbar">
                        <div>
                            <i className="bi bi-search" />

                            <input
                                type="search"
                                value={busqueda}
                                onChange={(event) =>
                                    setBusqueda(event.target.value)
                                }
                                placeholder="Buscar liga o categoría"
                            />
                        </div>

                        <select
                            className="form-select"
                            value={estadoLiga}
                            onChange={(event) =>
                                setEstadoLiga(event.target.value)
                            }
                        >
                            <option value="todas">
                                Todos los estados
                            </option>
                            <option value="activa">Activas</option>
                            <option value="pausada">Pausadas</option>
                            <option value="finalizada">Finalizadas</option>
                        </select>
                    </div>

                    {vista === "cards" && (
                        <div className="row g-4">
                            {ligasFiltradas.map((liga) => (
                                <div
                                    className="col-xl-3 col-md-6"
                                    key={liga.id}
                                >
                                    <article className="tj-league-card">
                                        <div
                                            className="tj-league-emblem"
                                            style={{
                                                background: `radial-gradient(circle at 35% 20%, rgba(255,255,255,.42), transparent 32%), linear-gradient(145deg, ${liga.color}, #111827)`,
                                                borderColor: liga.color,
                                            }}
                                        >
                                            <i
                                                className={`bi ${liga.icono}`}
                                            />
                                        </div>

                                        <span
                                            className={`tj-league-status ${liga.estado}`}
                                        >
                                            <i className="bi bi-circle-fill" />
                                            {getEstadoLiga(liga.estado)}
                                        </span>

                                        <h3>{liga.nombre}</h3>

                                        <p>{liga.categoria}</p>

                                        <div className="tj-league-data">
                                            <div>
                                                <span>Participantes</span>
                                                <strong>
                                                    {liga.participantes.toLocaleString(
                                                        "es-CL",
                                                    )}
                                                </strong>
                                            </div>

                                            <div>
                                                <span>Colegios</span>
                                                <strong>
                                                    {liga.colegios}
                                                </strong>
                                            </div>
                                        </div>

                                        <div className="tj-league-level">
                                            <span>Nivel</span>
                                            <strong>{liga.nivel}</strong>
                                        </div>

                                        <div className="tj-league-prize">
                                            <i className="bi bi-gift-fill" />

                                            <div>
                                                <small>Premio principal</small>
                                                <strong>{liga.premio}</strong>
                                            </div>
                                        </div>

                                        <footer>
                                            <button type="button">
                                                Configurar
                                            </button>

                                            <button type="button">
                                                Ver participantes
                                                <i className="bi bi-arrow-right" />
                                            </button>
                                        </footer>
                                    </article>
                                </div>
                            ))}
                        </div>
                    )}

                    {vista === "table" && (
                        <div className="tj-leagues-table">
                            <div className="table-responsive">
                                <table className="table align-middle mb-0">
                                    <thead>
                                        <tr>
                                            <th>Liga</th>
                                            <th>Categoría</th>
                                            <th>Estado</th>
                                            <th>Participantes</th>
                                            <th>Colegios</th>
                                            <th>Nivel</th>
                                            <th>Premio</th>
                                            <th />
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {ligasFiltradas.map((liga) => (
                                            <tr key={liga.id}>
                                                <td>
                                                    <div className="tj-league-table-name">
                                                        <span
                                                            style={{
                                                                color: liga.color,
                                                                backgroundColor: `${liga.color}18`,
                                                            }}
                                                        >
                                                            <i
                                                                className={`bi ${liga.icono}`}
                                                            />
                                                        </span>

                                                        <strong>
                                                            {liga.nombre}
                                                        </strong>
                                                    </div>
                                                </td>

                                                <td>{liga.categoria}</td>

                                                <td>
                                                    <span
                                                        className={`tj-league-status ${liga.estado}`}
                                                    >
                                                        <i className="bi bi-circle-fill" />
                                                        {getEstadoLiga(
                                                            liga.estado,
                                                        )}
                                                    </span>
                                                </td>

                                                <td>
                                                    {liga.participantes.toLocaleString(
                                                        "es-CL",
                                                    )}
                                                </td>

                                                <td>{liga.colegios}</td>

                                                <td>{liga.nivel}</td>

                                                <td>{liga.premio}</td>

                                                <td>
                                                    <button
                                                        type="button"
                                                        className="tj-league-table-options"
                                                    >
                                                        <i className="bi bi-three-dots-vertical" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </section>

                {/* RANKING Y CALENDARIO */}
                <section className="row g-4 mt-1">
                    <div className="col-xl-8">
                        <article className="tj-ranking-panel">
                            <header className="tj-panel-header">
                                <div>
                                    <span>Clasificación institucional</span>
                                    <h2>Ranking de colegios</h2>
                                    <p>
                                        Posiciones actuales de la temporada
                                        Exploradores.
                                    </p>
                                </div>

                                <div>
                                    <select
                                        className="form-select form-select-sm"
                                        defaultValue="general"
                                    >
                                        <option value="general">
                                            Ranking general
                                        </option>
                                        <option value="basica">
                                            Educación básica
                                        </option>
                                        <option value="media">
                                            Educación media
                                        </option>
                                    </select>

                                    <button type="button">
                                        Ver ranking completo
                                    </button>
                                </div>
                            </header>

                            <div className="tj-ranking-table">
                                {ranking.map((item) => (
                                    <div
                                        className="tj-ranking-row"
                                        key={item.posicion}
                                    >
                                        <span
                                            className={`tj-ranking-number position-${item.posicion}`}
                                        >
                                            {item.posicion}
                                        </span>

                                        <span className="tj-ranking-school-logo">
                                            {item.sigla}
                                        </span>

                                        <div className="tj-ranking-school">
                                            <strong>
                                                {item.colegio}
                                            </strong>

                                            <small>
                                                {item.estudiantes} estudiantes
                                            </small>
                                        </div>

                                        <div className="tj-ranking-value">
                                            <small>Puntos</small>
                                            <strong>
                                                {item.puntos.toLocaleString(
                                                    "es-CL",
                                                )}
                                            </strong>
                                        </div>

                                        <div className="tj-ranking-value">
                                            <small>Insignias</small>
                                            <strong>
                                                {item.insignias}
                                            </strong>
                                        </div>

                                        <span
                                            className={`tj-ranking-change ${item.variacion}`}
                                        >
                                            <i
                                                className={
                                                    item.variacion === "sube"
                                                        ? "bi bi-arrow-up"
                                                        : item.variacion ===
                                                            "baja"
                                                          ? "bi bi-arrow-down"
                                                          : "bi bi-dash"
                                                }
                                            />
                                        </span>

                                        <button type="button">
                                            <i className="bi bi-chevron-right" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </article>
                    </div>

                    <div className="col-xl-4">
                        <article className="tj-season-calendar">
                            <header className="tj-panel-header">
                                <div>
                                    <span>Próximos eventos</span>
                                    <h2>Calendario de temporada</h2>
                                    <p>Hitos y fechas importantes.</p>
                                </div>
                            </header>

                            <div className="tj-calendar-timeline">
                                <div className="completed">
                                    <span>
                                        <strong>01</strong>
                                        <small>JUL</small>
                                    </span>

                                    <div>
                                        <strong>Inicio de temporada</strong>
                                        <small>
                                            Activación para todos los colegios
                                        </small>
                                    </div>

                                    <i className="bi bi-check-circle-fill" />
                                </div>

                                <div className="active">
                                    <span>
                                        <strong>20</strong>
                                        <small>JUL</small>
                                    </span>

                                    <div>
                                        <strong>Desafío intercolegios</strong>
                                        <small>
                                            Competencia de ciencias y matemática
                                        </small>
                                    </div>

                                    <i className="bi bi-broadcast-pin" />
                                </div>

                                <div>
                                    <span>
                                        <strong>15</strong>
                                        <small>AGO</small>
                                    </span>

                                    <div>
                                        <strong>Semana de bonificación</strong>
                                        <small>
                                            Puntos y monedas duplicadas
                                        </small>
                                    </div>

                                    <i className="bi bi-gift-fill" />
                                </div>

                                <div>
                                    <span>
                                        <strong>30</strong>
                                        <small>SEP</small>
                                    </span>

                                    <div>
                                        <strong>Cierre y premiación</strong>
                                        <small>
                                            Entrega de premios y reconocimientos
                                        </small>
                                    </div>

                                    <i className="bi bi-trophy-fill" />
                                </div>
                            </div>

                            <button
                                type="button"
                                className="tj-calendar-button"
                            >
                                Administrar calendario
                                <i className="bi bi-arrow-right" />
                            </button>
                        </article>
                    </div>
                </section>

                {/* PREMIOS */}
                <section className="tj-prizes-section">
                    <header className="tj-section-heading">
                        <div>
                            <span>Recompensas configuradas</span>
                            <h2>Premios de la temporada</h2>
                            <p>
                                Beneficios que recibirán colegios y estudiantes.
                            </p>
                        </div>

                        <button type="button">
                            Configurar premios
                            <i className="bi bi-arrow-right" />
                        </button>
                    </header>

                    <div className="tj-prizes-grid">
                        <article>
                            <span className="gold">
                                <i className="bi bi-trophy-fill" />
                            </span>

                            <div>
                                <small>Primer lugar</small>
                                <strong>Trofeo Exploradores</strong>
                                <p>
                                    5.000 TíaCoins, insignia legendaria y evento
                                    especial.
                                </p>
                            </div>
                        </article>

                        <article>
                            <span className="silver">
                                <i className="bi bi-award-fill" />
                            </span>

                            <div>
                                <small>Segundo lugar</small>
                                <strong>Medalla de excelencia</strong>
                                <p>
                                    3.000 TíaCoins y una insignia épica para el
                                    colegio.
                                </p>
                            </div>
                        </article>

                        <article>
                            <span className="bronze">
                                <i className="bi bi-stars" />
                            </span>

                            <div>
                                <small>Tercer lugar</small>
                                <strong>Reconocimiento destacado</strong>
                                <p>
                                    2.000 TíaCoins y una insignia institucional.
                                </p>
                            </div>
                        </article>

                        <article>
                            <span className="special">
                                <i className="bi bi-heart-fill" />
                            </span>

                            <div>
                                <small>Premio especial</small>
                                <strong>Mejor convivencia</strong>
                                <p>
                                    Reconocimiento al colegio con mayor impacto
                                    positivo.
                                </p>
                            </div>
                        </article>
                    </div>
                </section>
            </div>

            {/* MODAL NUEVA TEMPORADA */}
            <div
                className="modal fade"
                id="createSeasonModal"
                tabIndex={-1}
                aria-labelledby="createSeasonModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content tj-season-modal">
                        <div className="modal-header">
                            <div>
                                <span>
                                    <i className="bi bi-calendar2-star-fill" />
                                    Gestión de temporadas
                                </span>

                                <h2
                                    className="modal-title"
                                    id="createSeasonModalLabel"
                                >
                                    Crear nueva temporada
                                </h2>

                                <p>
                                    Configura identidad, fechas, reglas y
                                    recompensas.
                                </p>
                            </div>

                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Cerrar"
                            />
                        </div>

                        <div className="modal-body">
                            <div className="tj-season-modal-layout">
                                <div className="tj-season-modal-main">
                                    <section className="tj-season-form-section">
                                        <header>
                                            <span>
                                                <i className="bi bi-card-text" />
                                            </span>

                                            <div>
                                                <h3>Información general</h3>
                                                <p>
                                                    Define la identidad y
                                                    propósito de la temporada.
                                                </p>
                                            </div>
                                        </header>

                                        <div className="row g-3">
                                            <div className="col-12">
                                                <label className="form-label">
                                                    Nombre
                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Ej.: Guardianes del conocimiento"
                                                />
                                            </div>

                                            <div className="col-12">
                                                <label className="form-label">
                                                    Descripción
                                                </label>

                                                <textarea
                                                    className="form-control"
                                                    rows={4}
                                                    placeholder="Describe el objetivo de la temporada..."
                                                />
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    Fecha de inicio
                                                </label>

                                                <input
                                                    type="date"
                                                    className="form-control"
                                                />
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    Fecha de término
                                                </label>

                                                <input
                                                    type="date"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </section>

                                    <section className="tj-season-form-section">
                                        <header>
                                            <span>
                                                <i className="bi bi-palette-fill" />
                                            </span>

                                            <div>
                                                <h3>Identidad visual</h3>
                                                <p>
                                                    Selecciona colores, símbolo y
                                                    estilo.
                                                </p>
                                            </div>
                                        </header>

                                        <div className="tj-season-icon-grid">
                                            {[
                                                "bi-compass-fill",
                                                "bi-shield-fill-check",
                                                "bi-stars",
                                                "bi-rocket-takeoff-fill",
                                                "bi-gem",
                                                "bi-lightning-charge-fill",
                                                "bi-trophy-fill",
                                                "bi-globe-americas",
                                            ].map((icono, index) => (
                                                <label key={icono}>
                                                    <input
                                                        type="radio"
                                                        name="seasonIcon"
                                                        defaultChecked={
                                                            index === 0
                                                        }
                                                    />

                                                    <span>
                                                        <i
                                                            className={`bi ${icono}`}
                                                        />
                                                    </span>
                                                </label>
                                            ))}
                                        </div>

                                        <div className="row g-3 mt-1">
                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    Color principal
                                                </label>

                                                <input
                                                    type="color"
                                                    className="form-control form-control-color w-100"
                                                    defaultValue="#255d50"
                                                />
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    Color secundario
                                                </label>

                                                <input
                                                    type="color"
                                                    className="form-control form-control-color w-100"
                                                    defaultValue="#facc15"
                                                />
                                            </div>
                                        </div>
                                    </section>

                                    <section className="tj-season-form-section">
                                        <header>
                                            <span>
                                                <i className="bi bi-sliders" />
                                            </span>

                                            <div>
                                                <h3>Reglas de participación</h3>
                                                <p>
                                                    Define quiénes participan y
                                                    cómo acumulan puntos.
                                                </p>
                                            </div>
                                        </header>

                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    Participación
                                                </label>

                                                <select
                                                    className="form-select"
                                                    defaultValue="todos"
                                                >
                                                    <option value="todos">
                                                        Todos los colegios
                                                    </option>
                                                    <option value="seleccionados">
                                                        Colegios seleccionados
                                                    </option>
                                                    <option value="invitacion">
                                                        Solo por invitación
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    Tipo de ranking
                                                </label>

                                                <select
                                                    className="form-select"
                                                    defaultValue="colegios"
                                                >
                                                    <option value="colegios">
                                                        Por colegio
                                                    </option>
                                                    <option value="cursos">
                                                        Por curso
                                                    </option>
                                                    <option value="estudiantes">
                                                        Por estudiante
                                                    </option>
                                                    <option value="mixto">
                                                        Ranking mixto
                                                    </option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="tj-season-switch-list">
                                            <label>
                                                <span>
                                                    Puntos por actividades
                                                </span>
                                                <input
                                                    type="checkbox"
                                                    defaultChecked
                                                />
                                            </label>

                                            <label>
                                                <span>
                                                    Puntos por evaluaciones
                                                </span>
                                                <input
                                                    type="checkbox"
                                                    defaultChecked
                                                />
                                            </label>

                                            <label>
                                                <span>
                                                    Puntos por convivencia
                                                </span>
                                                <input
                                                    type="checkbox"
                                                    defaultChecked
                                                />
                                            </label>

                                            <label>
                                                <span>
                                                    Mostrar ranking público
                                                </span>
                                                <input type="checkbox" />
                                            </label>
                                        </div>
                                    </section>
                                </div>

                                <aside className="tj-season-modal-sidebar">
                                    <div className="tj-season-preview">
                                        <span>Vista previa</span>

                                        <div>
                                            <i className="bi bi-compass-fill" />

                                            <small>Nueva temporada</small>
                                            <strong>
                                                Guardianes del conocimiento
                                            </strong>

                                            <p>
                                                Próxima competencia de TíaJo
                                                Bank.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="tj-season-rewards-config">
                                        <header>
                                            <span>
                                                <i className="bi bi-gift-fill" />
                                            </span>

                                            <div>
                                                <strong>Recompensas</strong>
                                                <small>
                                                    Premios de la temporada
                                                </small>
                                            </div>
                                        </header>

                                        <label>
                                            <span>Entregar TíaCoins</span>
                                            <input
                                                type="checkbox"
                                                defaultChecked
                                            />
                                        </label>

                                        <label>
                                            <span>Entregar insignias</span>
                                            <input
                                                type="checkbox"
                                                defaultChecked
                                            />
                                        </label>

                                        <label>
                                            <span>Premio institucional</span>
                                            <input
                                                type="checkbox"
                                                defaultChecked
                                            />
                                        </label>

                                        <label>
                                            <span>Accesorios Mi Ranita</span>
                                            <input type="checkbox" />
                                        </label>
                                    </div>

                                    <div className="tj-season-ai-box">
                                        <span>
                                            <i className="bi bi-stars" />
                                        </span>

                                        <div>
                                            <strong>
                                                Diseñador de temporadas
                                            </strong>

                                            <p>
                                                Genera nombre, reglas, etapas y
                                                premios automáticamente.
                                            </p>

                                            <button type="button">
                                                Crear propuesta
                                            </button>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn tj-season-cancel"
                                data-bs-dismiss="modal"
                            >
                                Cancelar
                            </button>

                            <button
                                type="button"
                                className="btn tj-season-draft"
                            >
                                <i className="bi bi-save" />
                                Guardar borrador
                            </button>

                            <button
                                type="button"
                                className="btn tj-season-publish"
                            >
                                <i className="bi bi-calendar-check-fill" />
                                Crear temporada
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* MODAL NUEVA LIGA */}
            <div
                className="modal fade"
                id="createLeagueModal"
                tabIndex={-1}
                aria-labelledby="createLeagueModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content tj-league-modal">
                        <div className="modal-header">
                            <div>
                                <span>
                                    <i className="bi bi-diagram-3-fill" />
                                    Organización competitiva
                                </span>

                                <h2
                                    className="modal-title"
                                    id="createLeagueModalLabel"
                                >
                                    Crear nueva liga
                                </h2>

                                <p>
                                    Define un nuevo nivel dentro de la temporada.
                                </p>
                            </div>

                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Cerrar"
                            />
                        </div>

                        <div className="modal-body">
                            <div className="row g-4">
                                <div className="col-lg-7">
                                    <div className="tj-league-form">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Nombre de la liga
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Ej.: Liga Zafiro"
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">
                                                Categoría
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Ej.: Progreso destacado"
                                            />
                                        </div>

                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    Nivel mínimo
                                                </label>

                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    defaultValue={1}
                                                />
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    Nivel máximo
                                                </label>

                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    defaultValue={10}
                                                />
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    Puntos mínimos
                                                </label>

                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    defaultValue={1000}
                                                />
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    Capacidad máxima
                                                </label>

                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    defaultValue={2500}
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <label className="form-label">
                                                Premio principal
                                            </label>

                                            <select
                                                className="form-select"
                                                defaultValue="coins"
                                            >
                                                <option value="coins">
                                                    TíaCoins
                                                </option>
                                                <option value="badge">
                                                    Insignia exclusiva
                                                </option>
                                                <option value="avatar">
                                                    Accesorio Mi Ranita
                                                </option>
                                                <option value="mixed">
                                                    Premio combinado
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-5">
                                    <div className="tj-league-preview">
                                        <span>Vista previa</span>

                                        <div>
                                            <i className="bi bi-gem" />
                                        </div>

                                        <strong>Liga Zafiro</strong>
                                        <small>Nivel épico</small>

                                        <p>
                                            Liga de progreso y desempeño
                                            destacado.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn tj-season-cancel"
                                data-bs-dismiss="modal"
                            >
                                Cancelar
                            </button>

                            <button
                                type="button"
                                className="btn tj-season-publish"
                            >
                                <i className="bi bi-check-circle-fill" />
                                Crear liga
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}