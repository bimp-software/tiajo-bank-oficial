import { useMemo, useState } from "react";

import "../../../../shared/assets/styles/dashboard/actividades.css";

type EstadoActividad =
    | "publicada"
    | "borrador"
    | "programada"
    | "archivada";

type TipoActividad =
    | "guia"
    | "juego"
    | "evaluacion"
    | "proyecto"
    | "desafio";

type Actividad = {
    id: number;
    titulo: string;
    descripcion: string;
    asignatura: string;
    curso: string;
    tipo: TipoActividad;
    estado: EstadoActividad;
    participantes: number;
    progreso: number;
    fecha: string;
    autor: string;
    icono: string;
};

const actividadesIniciales: Actividad[] = [
    {
        id: 1,
        titulo: "Arquitectos Matemáticos",
        descripcion:
            "Desafío para reconocer figuras 2D y construir cuerpos geométricos.",
        asignatura: "Matemática",
        curso: "2° Básico A",
        tipo: "proyecto",
        estado: "publicada",
        participantes: 31,
        progreso: 78,
        fecha: "13 jul. 2026",
        autor: "Joselyn Cáceres",
        icono: "bi-boxes",
    },
    {
        id: 2,
        titulo: "Pasaporte de Lectura",
        descripcion:
            "Actividad de comprensión lectora con niveles y recompensas.",
        asignatura: "Lenguaje",
        curso: "2° Básico A",
        tipo: "desafio",
        estado: "programada",
        participantes: 0,
        progreso: 0,
        fecha: "15 jul. 2026",
        autor: "Joselyn Cáceres",
        icono: "bi-book-half",
    },
    {
        id: 3,
        titulo: "Exploradores de los pueblos originarios",
        descripcion:
            "Guía interactiva sobre los principales pueblos originarios de Chile.",
        asignatura: "Historia",
        curso: "2° Básico A",
        tipo: "guia",
        estado: "publicada",
        participantes: 28,
        progreso: 61,
        fecha: "10 jul. 2026",
        autor: "Joselyn Cáceres",
        icono: "bi-map",
    },
    {
        id: 4,
        titulo: "Ciclo de vida de los animales",
        descripcion:
            "Evaluación breve con preguntas de selección múltiple e imágenes.",
        asignatura: "Ciencias",
        curso: "2° Básico A",
        tipo: "evaluacion",
        estado: "borrador",
        participantes: 0,
        progreso: 0,
        fecha: "12 jul. 2026",
        autor: "Joselyn Cáceres",
        icono: "bi-bug",
    },
    {
        id: 5,
        titulo: "Bingo de cuerpos geométricos",
        descripcion:
            "Juego para reconocer cubos, prismas, cilindros, conos y esferas.",
        asignatura: "Matemática",
        curso: "2° Básico A",
        tipo: "juego",
        estado: "publicada",
        participantes: 30,
        progreso: 92,
        fecha: "08 jul. 2026",
        autor: "Joselyn Cáceres",
        icono: "bi-controller",
    },
    {
        id: 6,
        titulo: "Debate sobre convivencia digital",
        descripcion:
            "Actividad oral para analizar normas de respeto en entornos digitales.",
        asignatura: "Lenguaje",
        curso: "8° Básico",
        tipo: "proyecto",
        estado: "archivada",
        participantes: 27,
        progreso: 100,
        fecha: "28 jun. 2026",
        autor: "Joselyn Cáceres",
        icono: "bi-chat-square-text",
    },
];

function getEstadoTexto(estado: EstadoActividad): string {
    const estados: Record<EstadoActividad, string> = {
        publicada: "Publicada",
        borrador: "Borrador",
        programada: "Programada",
        archivada: "Archivada",
    };

    return estados[estado];
}

function getTipoTexto(tipo: TipoActividad): string {
    const tipos: Record<TipoActividad, string> = {
        guia: "Guía",
        juego: "Juego",
        evaluacion: "Evaluación",
        proyecto: "Proyecto",
        desafio: "Desafío",
    };

    return tipos[tipo];
}

export default function ActividadPage() {
    const [vista, setVista] = useState<"grid" | "table">("grid");
    const [busqueda, setBusqueda] = useState("");
    const [estado, setEstado] = useState("todos");
    const [asignatura, setAsignatura] = useState("todas");
    const [tipo, setTipo] = useState("todos");

    const actividadesFiltradas = useMemo(() => {
        return actividadesIniciales.filter((actividad) => {
            const coincideBusqueda =
                actividad.titulo
                    .toLowerCase()
                    .includes(busqueda.toLowerCase()) ||
                actividad.descripcion
                    .toLowerCase()
                    .includes(busqueda.toLowerCase()) ||
                actividad.curso
                    .toLowerCase()
                    .includes(busqueda.toLowerCase());

            const coincideEstado =
                estado === "todos" || actividad.estado === estado;

            const coincideAsignatura =
                asignatura === "todas" ||
                actividad.asignatura === asignatura;

            const coincideTipo =
                tipo === "todos" || actividad.tipo === tipo;

            return (
                coincideBusqueda &&
                coincideEstado &&
                coincideAsignatura &&
                coincideTipo
            );
        });
    }, [busqueda, estado, asignatura, tipo]);

    const publicadas = actividadesIniciales.filter(
        (actividad) => actividad.estado === "publicada",
    ).length;

    const programadas = actividadesIniciales.filter(
        (actividad) => actividad.estado === "programada",
    ).length;

    const borradores = actividadesIniciales.filter(
        (actividad) => actividad.estado === "borrador",
    ).length;

    return (
        <>
            <div className="tj-activities-page">
                {/* ENCABEZADO */}
                <section className="tj-activities-hero">
                    <div>
                        <span className="tj-activities-eyebrow">
                            <i className="bi bi-stars" />
                            Gestión educativa
                        </span>

                        <h1>Actividades</h1>

                        <p>
                            Crea, organiza y supervisa experiencias de
                            aprendizaje para todos los cursos.
                        </p>
                    </div>

                    <div className="tj-activities-hero-actions">
                        <button
                            type="button"
                            className="btn tj-activities-secondary-button"
                        >
                            <i className="bi bi-upload" />
                            Importar
                        </button>

                        <button
                            type="button"
                            className="btn tj-activities-primary-button"
                            data-bs-toggle="modal"
                            data-bs-target="#createActivityModal"
                        >
                            <i className="bi bi-plus-circle-fill" />
                            Nueva actividad
                        </button>
                    </div>
                </section>

                {/* RESUMEN */}
                <section className="row g-3 mb-4">
                    <div className="col-xl-3 col-md-6">
                        <div className="tj-activity-summary-card">
                            <span className="tj-activity-summary-icon green">
                                <i className="bi bi-collection-play-fill" />
                            </span>

                            <div>
                                <small>Total de actividades</small>
                                <strong>{actividadesIniciales.length}</strong>
                                <span>Biblioteca completa</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <div className="tj-activity-summary-card">
                            <span className="tj-activity-summary-icon blue">
                                <i className="bi bi-send-check-fill" />
                            </span>

                            <div>
                                <small>Publicadas</small>
                                <strong>{publicadas}</strong>
                                <span>Disponibles actualmente</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <div className="tj-activity-summary-card">
                            <span className="tj-activity-summary-icon yellow">
                                <i className="bi bi-calendar2-event-fill" />
                            </span>

                            <div>
                                <small>Programadas</small>
                                <strong>{programadas}</strong>
                                <span>Próximas publicaciones</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <div className="tj-activity-summary-card">
                            <span className="tj-activity-summary-icon purple">
                                <i className="bi bi-pencil-square" />
                            </span>

                            <div>
                                <small>Borradores</small>
                                <strong>{borradores}</strong>
                                <span>Pendientes de completar</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FILTROS */}
                <section className="tj-activities-toolbar">
                    <div className="tj-activities-search">
                        <i className="bi bi-search" />

                        <input
                            type="search"
                            value={busqueda}
                            onChange={(event) =>
                                setBusqueda(event.target.value)
                            }
                            placeholder="Buscar por título, descripción o curso"
                            aria-label="Buscar actividades"
                        />
                    </div>

                    <div className="tj-activities-filters">
                        <select
                            className="form-select"
                            value={estado}
                            onChange={(event) =>
                                setEstado(event.target.value)
                            }
                            aria-label="Filtrar por estado"
                        >
                            <option value="todos">Todos los estados</option>
                            <option value="publicada">Publicadas</option>
                            <option value="borrador">Borradores</option>
                            <option value="programada">Programadas</option>
                            <option value="archivada">Archivadas</option>
                        </select>

                        <select
                            className="form-select"
                            value={asignatura}
                            onChange={(event) =>
                                setAsignatura(event.target.value)
                            }
                            aria-label="Filtrar por asignatura"
                        >
                            <option value="todas">
                                Todas las asignaturas
                            </option>
                            <option value="Lenguaje">Lenguaje</option>
                            <option value="Matemática">Matemática</option>
                            <option value="Ciencias">Ciencias</option>
                            <option value="Historia">Historia</option>
                        </select>

                        <select
                            className="form-select"
                            value={tipo}
                            onChange={(event) =>
                                setTipo(event.target.value)
                            }
                            aria-label="Filtrar por tipo"
                        >
                            <option value="todos">Todos los tipos</option>
                            <option value="guia">Guía</option>
                            <option value="juego">Juego</option>
                            <option value="evaluacion">Evaluación</option>
                            <option value="proyecto">Proyecto</option>
                            <option value="desafio">Desafío</option>
                        </select>
                    </div>

                    <div className="tj-activities-view-buttons">
                        <button
                            type="button"
                            className={vista === "grid" ? "active" : ""}
                            onClick={() => setVista("grid")}
                            aria-label="Vista en tarjetas"
                        >
                            <i className="bi bi-grid-3x3-gap-fill" />
                        </button>

                        <button
                            type="button"
                            className={vista === "table" ? "active" : ""}
                            onClick={() => setVista("table")}
                            aria-label="Vista en tabla"
                        >
                            <i className="bi bi-list-ul" />
                        </button>
                    </div>
                </section>

                {/* INFORMACIÓN DE RESULTADOS */}
                <div className="tj-activities-results-header">
                    <div>
                        <strong>
                            {actividadesFiltradas.length} actividades
                        </strong>

                        <span>
                            Mostrando resultados según los filtros seleccionados
                        </span>
                    </div>

                    <button
                        type="button"
                        className="tj-clear-filters"
                        onClick={() => {
                            setBusqueda("");
                            setEstado("todos");
                            setAsignatura("todas");
                            setTipo("todos");
                        }}
                    >
                        <i className="bi bi-arrow-counterclockwise" />
                        Limpiar filtros
                    </button>
                </div>

                {/* TARJETAS */}
                {vista === "grid" && actividadesFiltradas.length > 0 && (
                    <section className="row g-4">
                        {actividadesFiltradas.map((actividad) => (
                            <div
                                className="col-xxl-4 col-xl-6"
                                key={actividad.id}
                            >
                                <article className="tj-activity-card">
                                    <div className="tj-activity-card-top">
                                        <span
                                            className={`tj-activity-type-icon ${actividad.tipo}`}
                                        >
                                            <i
                                                className={`bi ${actividad.icono}`}
                                            />
                                        </span>

                                        <div className="dropdown">
                                            <button
                                                type="button"
                                                className="tj-activity-options"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                aria-label="Opciones de actividad"
                                            >
                                                <i className="bi bi-three-dots-vertical" />
                                            </button>

                                            <ul className="dropdown-menu dropdown-menu-end shadow border-0 rounded-4 p-2">
                                                <li>
                                                    <button
                                                        type="button"
                                                        className="dropdown-item rounded-3"
                                                    >
                                                        <i className="bi bi-eye me-2" />
                                                        Ver actividad
                                                    </button>
                                                </li>

                                                <li>
                                                    <button
                                                        type="button"
                                                        className="dropdown-item rounded-3"
                                                    >
                                                        <i className="bi bi-pencil me-2" />
                                                        Editar
                                                    </button>
                                                </li>

                                                <li>
                                                    <button
                                                        type="button"
                                                        className="dropdown-item rounded-3"
                                                    >
                                                        <i className="bi bi-copy me-2" />
                                                        Duplicar
                                                    </button>
                                                </li>

                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>

                                                <li>
                                                    <button
                                                        type="button"
                                                        className="dropdown-item rounded-3 text-danger"
                                                    >
                                                        <i className="bi bi-archive me-2" />
                                                        Archivar
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="tj-activity-card-tags">
                                        <span
                                            className={`tj-activity-status ${actividad.estado}`}
                                        >
                                            <i className="bi bi-circle-fill" />
                                            {getEstadoTexto(actividad.estado)}
                                        </span>

                                        <span className="tj-activity-type-label">
                                            {getTipoTexto(actividad.tipo)}
                                        </span>
                                    </div>

                                    <h2>{actividad.titulo}</h2>

                                    <p>{actividad.descripcion}</p>

                                    <div className="tj-activity-meta">
                                        <span>
                                            <i className="bi bi-book" />
                                            {actividad.asignatura}
                                        </span>

                                        <span>
                                            <i className="bi bi-mortarboard" />
                                            {actividad.curso}
                                        </span>
                                    </div>

                                    <div className="tj-activity-progress">
                                        <div className="tj-activity-progress-head">
                                            <span>Progreso general</span>

                                            <strong>
                                                {actividad.progreso}%
                                            </strong>
                                        </div>

                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                style={{
                                                    width: `${actividad.progreso}%`,
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="tj-activity-card-footer">
                                        <div className="tj-activity-participants">
                                            <i className="bi bi-people" />

                                            <span>
                                                {actividad.participantes}{" "}
                                                participantes
                                            </span>
                                        </div>

                                        <small>
                                            <i className="bi bi-calendar3" />
                                            {actividad.fecha}
                                        </small>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </section>
                )}

                {/* TABLA */}
                {vista === "table" && actividadesFiltradas.length > 0 && (
                    <section className="tj-activities-table-card">
                        <div className="table-responsive">
                            <table className="table align-middle mb-0">
                                <thead>
                                    <tr>
                                        <th>Actividad</th>
                                        <th>Asignatura</th>
                                        <th>Curso</th>
                                        <th>Estado</th>
                                        <th>Participantes</th>
                                        <th>Progreso</th>
                                        <th>Fecha</th>
                                        <th />
                                    </tr>
                                </thead>

                                <tbody>
                                    {actividadesFiltradas.map((actividad) => (
                                        <tr key={actividad.id}>
                                            <td>
                                                <div className="tj-table-activity">
                                                    <span
                                                        className={`tj-activity-type-icon ${actividad.tipo}`}
                                                    >
                                                        <i
                                                            className={`bi ${actividad.icono}`}
                                                        />
                                                    </span>

                                                    <div>
                                                        <strong>
                                                            {actividad.titulo}
                                                        </strong>

                                                        <small>
                                                            {getTipoTexto(
                                                                actividad.tipo,
                                                            )}
                                                        </small>
                                                    </div>
                                                </div>
                                            </td>

                                            <td>{actividad.asignatura}</td>

                                            <td>{actividad.curso}</td>

                                            <td>
                                                <span
                                                    className={`tj-activity-status ${actividad.estado}`}
                                                >
                                                    <i className="bi bi-circle-fill" />
                                                    {getEstadoTexto(
                                                        actividad.estado,
                                                    )}
                                                </span>
                                            </td>

                                            <td>
                                                {actividad.participantes}
                                            </td>

                                            <td>
                                                <div className="tj-table-progress">
                                                    <div className="progress">
                                                        <div
                                                            className="progress-bar"
                                                            style={{
                                                                width: `${actividad.progreso}%`,
                                                            }}
                                                        />
                                                    </div>

                                                    <small>
                                                        {actividad.progreso}%
                                                    </small>
                                                </div>
                                            </td>

                                            <td>{actividad.fecha}</td>

                                            <td>
                                                <button
                                                    type="button"
                                                    className="tj-activity-options"
                                                    aria-label="Opciones"
                                                >
                                                    <i className="bi bi-three-dots-vertical" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                )}

                {/* ESTADO VACÍO */}
                {actividadesFiltradas.length === 0 && (
                    <section className="tj-activities-empty">
                        <span>
                            <i className="bi bi-search" />
                        </span>

                        <h2>No encontramos actividades</h2>

                        <p>
                            Prueba con otros términos de búsqueda o limpia los
                            filtros seleccionados.
                        </p>

                        <button
                            type="button"
                            className="btn tj-activities-primary-button"
                            onClick={() => {
                                setBusqueda("");
                                setEstado("todos");
                                setAsignatura("todas");
                                setTipo("todos");
                            }}
                        >
                            <i className="bi bi-arrow-counterclockwise" />
                            Limpiar filtros
                        </button>
                    </section>
                )}
            </div>

            {/* MODAL CREAR ACTIVIDAD */}
            <div
                className="modal fade"
                id="createActivityModal"
                tabIndex={-1}
                aria-labelledby="createActivityModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content tj-create-activity-modal">
                        <div className="modal-header tj-create-activity-header">
                            <div>
                                <span className="tj-create-activity-eyebrow">
                                    <i className="bi bi-magic" />
                                    Nueva experiencia de aprendizaje
                                </span>

                                <h2
                                    className="modal-title"
                                    id="createActivityModalLabel"
                                >
                                    Crear actividad
                                </h2>

                                <p>
                                    Completa la información principal. Por ahora
                                    este formulario es solamente visual.
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
                            <div className="tj-create-activity-layout">
                                <div className="tj-create-activity-main">
                                    <section className="tj-form-section">
                                        <div className="tj-form-section-title">
                                            <span>
                                                <i className="bi bi-card-text" />
                                            </span>

                                            <div>
                                                <h3>Información general</h3>
                                                <p>
                                                    Define el nombre y propósito
                                                    de la actividad.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="row g-3">
                                            <div className="col-12">
                                                <label
                                                    className="form-label"
                                                    htmlFor="activityTitle"
                                                >
                                                    Título de la actividad
                                                </label>

                                                <input
                                                    id="activityTitle"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Ej.: Expedición matemática"
                                                />
                                            </div>

                                            <div className="col-12">
                                                <label
                                                    className="form-label"
                                                    htmlFor="activityDescription"
                                                >
                                                    Descripción
                                                </label>

                                                <textarea
                                                    id="activityDescription"
                                                    className="form-control"
                                                    rows={4}
                                                    placeholder="Describe brevemente el objetivo y la experiencia..."
                                                />
                                            </div>
                                        </div>
                                    </section>

                                    <section className="tj-form-section">
                                        <div className="tj-form-section-title">
                                            <span>
                                                <i className="bi bi-grid-1x2-fill" />
                                            </span>

                                            <div>
                                                <h3>Tipo de actividad</h3>
                                                <p>
                                                    Selecciona el formato que
                                                    utilizarán los estudiantes.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="tj-activity-type-selector">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="activityType"
                                                    defaultChecked
                                                />

                                                <span>
                                                    <i className="bi bi-journal-text" />
                                                    <strong>Guía</strong>
                                                    <small>
                                                        Material de aprendizaje
                                                    </small>
                                                </span>
                                            </label>

                                            <label>
                                                <input
                                                    type="radio"
                                                    name="activityType"
                                                />

                                                <span>
                                                    <i className="bi bi-controller" />
                                                    <strong>Juego</strong>
                                                    <small>
                                                        Experiencia gamificada
                                                    </small>
                                                </span>
                                            </label>

                                            <label>
                                                <input
                                                    type="radio"
                                                    name="activityType"
                                                />

                                                <span>
                                                    <i className="bi bi-ui-checks-grid" />
                                                    <strong>Evaluación</strong>
                                                    <small>
                                                        Medición de aprendizajes
                                                    </small>
                                                </span>
                                            </label>

                                            <label>
                                                <input
                                                    type="radio"
                                                    name="activityType"
                                                />

                                                <span>
                                                    <i className="bi bi-rocket-takeoff" />
                                                    <strong>Proyecto</strong>
                                                    <small>
                                                        Trabajo de largo plazo
                                                    </small>
                                                </span>
                                            </label>
                                        </div>
                                    </section>

                                    <section className="tj-form-section">
                                        <div className="tj-form-section-title">
                                            <span>
                                                <i className="bi bi-mortarboard-fill" />
                                            </span>

                                            <div>
                                                <h3>Asignación educativa</h3>
                                                <p>
                                                    Selecciona curso, asignatura
                                                    y objetivos asociados.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label
                                                    className="form-label"
                                                    htmlFor="activityCourse"
                                                >
                                                    Curso
                                                </label>

                                                <select
                                                    id="activityCourse"
                                                    className="form-select"
                                                    defaultValue=""
                                                >
                                                    <option value="" disabled>
                                                        Seleccionar curso
                                                    </option>
                                                    <option>
                                                        2° Básico A
                                                    </option>
                                                    <option>
                                                        5° Básico
                                                    </option>
                                                    <option>
                                                        7° Básico
                                                    </option>
                                                    <option>
                                                        8° Básico
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-md-6">
                                                <label
                                                    className="form-label"
                                                    htmlFor="activitySubject"
                                                >
                                                    Asignatura
                                                </label>

                                                <select
                                                    id="activitySubject"
                                                    className="form-select"
                                                    defaultValue=""
                                                >
                                                    <option value="" disabled>
                                                        Seleccionar asignatura
                                                    </option>
                                                    <option>Lenguaje</option>
                                                    <option>Matemática</option>
                                                    <option>Ciencias</option>
                                                    <option>Historia</option>
                                                </select>
                                            </div>

                                            <div className="col-12">
                                                <label
                                                    className="form-label"
                                                    htmlFor="activityObjective"
                                                >
                                                    Objetivo de aprendizaje
                                                </label>

                                                <select
                                                    id="activityObjective"
                                                    className="form-select"
                                                    defaultValue=""
                                                >
                                                    <option value="" disabled>
                                                        Seleccionar objetivo
                                                    </option>
                                                    <option>
                                                        OA 1 — Comprender textos
                                                    </option>
                                                    <option>
                                                        OA 6 — Resolver cálculos
                                                    </option>
                                                    <option>
                                                        OA 10 — Observar y
                                                        describir
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </section>

                                    <section className="tj-form-section">
                                        <div className="tj-form-section-title">
                                            <span>
                                                <i className="bi bi-calendar-event-fill" />
                                            </span>

                                            <div>
                                                <h3>Programación</h3>
                                                <p>
                                                    Define disponibilidad,
                                                    duración y fecha de entrega.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="row g-3">
                                            <div className="col-md-4">
                                                <label
                                                    className="form-label"
                                                    htmlFor="activityStart"
                                                >
                                                    Fecha de inicio
                                                </label>

                                                <input
                                                    id="activityStart"
                                                    type="date"
                                                    className="form-control"
                                                />
                                            </div>

                                            <div className="col-md-4">
                                                <label
                                                    className="form-label"
                                                    htmlFor="activityEnd"
                                                >
                                                    Fecha de entrega
                                                </label>

                                                <input
                                                    id="activityEnd"
                                                    type="date"
                                                    className="form-control"
                                                />
                                            </div>

                                            <div className="col-md-4">
                                                <label
                                                    className="form-label"
                                                    htmlFor="activityDuration"
                                                >
                                                    Duración estimada
                                                </label>

                                                <select
                                                    id="activityDuration"
                                                    className="form-select"
                                                    defaultValue="45"
                                                >
                                                    <option value="30">
                                                        30 minutos
                                                    </option>
                                                    <option value="45">
                                                        45 minutos
                                                    </option>
                                                    <option value="60">
                                                        60 minutos
                                                    </option>
                                                    <option value="90">
                                                        90 minutos
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </section>
                                </div>

                                <aside className="tj-create-activity-sidebar">
                                    <div className="tj-activity-preview-card">
                                        <span className="tj-preview-label">
                                            Vista previa
                                        </span>

                                        <div className="tj-preview-cover">
                                            <i className="bi bi-stars" />

                                            <span>
                                                Nueva actividad
                                            </span>
                                        </div>

                                        <div className="tj-preview-content">
                                            <span className="tj-activity-status borrador">
                                                <i className="bi bi-circle-fill" />
                                                Borrador
                                            </span>

                                            <h3>
                                                Título de la actividad
                                            </h3>

                                            <p>
                                                Aquí aparecerá la descripción
                                                que ingreses.
                                            </p>

                                            <div>
                                                <span>
                                                    <i className="bi bi-book" />
                                                    Asignatura
                                                </span>

                                                <span>
                                                    <i className="bi bi-mortarboard" />
                                                    Curso
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tj-gamification-box">
                                        <div className="tj-gamification-box-head">
                                            <span>
                                                <i className="bi bi-controller" />
                                            </span>

                                            <div>
                                                <strong>
                                                    Gamificación
                                                </strong>

                                                <small>
                                                    Configuración opcional
                                                </small>
                                            </div>
                                        </div>

                                        <label className="tj-switch-row">
                                            <span>
                                                Entregar experiencia
                                            </span>

                                            <input
                                                type="checkbox"
                                                defaultChecked
                                            />
                                        </label>

                                        <label className="tj-switch-row">
                                            <span>
                                                Entregar monedas
                                            </span>

                                            <input
                                                type="checkbox"
                                                defaultChecked
                                            />
                                        </label>

                                        <label className="tj-switch-row">
                                            <span>
                                                Habilitar insignia
                                            </span>

                                            <input type="checkbox" />
                                        </label>

                                        <div className="row g-2 mt-1">
                                            <div className="col-6">
                                                <label className="form-label">
                                                    XP
                                                </label>

                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    defaultValue={50}
                                                />
                                            </div>

                                            <div className="col-6">
                                                <label className="form-label">
                                                    Monedas
                                                </label>

                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    defaultValue={100}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tj-ai-activity-box">
                                        <span>
                                            <i className="bi bi-stars" />
                                        </span>

                                        <div>
                                            <strong>
                                                Asistente educativo
                                            </strong>

                                            <p>
                                                Genera instrucciones, preguntas
                                                o una rúbrica para la actividad.
                                            </p>

                                            <button
                                                type="button"
                                                className="btn"
                                            >
                                                Crear con ayuda
                                            </button>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>

                        <div className="modal-footer tj-create-activity-footer">
                            <button
                                type="button"
                                className="btn tj-modal-cancel"
                                data-bs-dismiss="modal"
                            >
                                Cancelar
                            </button>

                            <button
                                type="button"
                                className="btn tj-modal-draft"
                            >
                                <i className="bi bi-save" />
                                Guardar borrador
                            </button>

                            <button
                                type="button"
                                className="btn tj-modal-publish"
                            >
                                <i className="bi bi-send-fill" />
                                Publicar actividad
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}