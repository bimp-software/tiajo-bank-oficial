import { useMemo, useState } from "react";

import "../../../../shared/assets/styles/dashboard/evaluaciones.css";

type EstadoEvaluacion =
    | "publicada"
    | "borrador"
    | "programada"
    | "finalizada";

type TipoEvaluacion =
    | "prueba"
    | "quiz"
    | "proyecto"
    | "rubrica"
    | "desafio";

type Evaluacion = {
    id: number;
    titulo: string;
    descripcion: string;
    asignatura: string;
    curso: string;
    tipo: TipoEvaluacion;
    estado: EstadoEvaluacion;
    preguntas: number;
    duracion: number;
    estudiantes: number;
    promedio: string;
    fecha: string;
    xp: number;
    icono: string;
};

const evaluaciones: Evaluacion[] = [
    {
        id: 1,
        titulo: "Comprensión lectora: misterio",
        descripcion:
            "Evaluación de comprensión, inferencias y análisis de un relato de misterio.",
        asignatura: "Lenguaje",
        curso: "8° Básico",
        tipo: "prueba",
        estado: "publicada",
        preguntas: 30,
        duracion: 60,
        estudiantes: 36,
        promedio: "5,8",
        fecha: "15 jul. 2026",
        xp: 120,
        icono: "bi-book-half",
    },
    {
        id: 2,
        titulo: "Ciclos de vida animal",
        descripcion:
            "Evaluación visual sobre las etapas del ciclo de vida de distintos animales.",
        asignatura: "Ciencias",
        curso: "2° Básico",
        tipo: "quiz",
        estado: "programada",
        preguntas: 15,
        duracion: 35,
        estudiantes: 31,
        promedio: "—",
        fecha: "18 jul. 2026",
        xp: 80,
        icono: "bi-bug-fill",
    },
    {
        id: 3,
        titulo: "Objeto tecnológico reciclado",
        descripcion:
            "Proyecto evaluado mediante rúbrica, creatividad y uso responsable de materiales.",
        asignatura: "Tecnología",
        curso: "5° Básico",
        tipo: "proyecto",
        estado: "finalizada",
        preguntas: 0,
        duracion: 90,
        estudiantes: 34,
        promedio: "6,1",
        fecha: "08 jul. 2026",
        xp: 180,
        icono: "bi-tools",
    },
    {
        id: 4,
        titulo: "Pueblos originarios de Chile",
        descripcion:
            "Prueba global con selección múltiple e interpretación de imágenes.",
        asignatura: "Historia",
        curso: "2° Básico",
        tipo: "prueba",
        estado: "borrador",
        preguntas: 25,
        duracion: 45,
        estudiantes: 0,
        promedio: "—",
        fecha: "Sin publicar",
        xp: 100,
        icono: "bi-map-fill",
    },
    {
        id: 5,
        titulo: "Desafío de cuerpos geométricos",
        descripcion:
            "Misión gamificada de reconocimiento y construcción de cuerpos geométricos.",
        asignatura: "Matemática",
        curso: "2° Básico",
        tipo: "desafio",
        estado: "publicada",
        preguntas: 12,
        duracion: 30,
        estudiantes: 30,
        promedio: "6,4",
        fecha: "12 jul. 2026",
        xp: 150,
        icono: "bi-boxes",
    },
    {
        id: 6,
        titulo: "Rúbrica de locución radial",
        descripcion:
            "Evaluación de expresión oral, respeto, organización y trabajo en equipo.",
        asignatura: "Taller de Expresión",
        curso: "7° Básico",
        tipo: "rubrica",
        estado: "programada",
        preguntas: 0,
        duracion: 45,
        estudiantes: 28,
        promedio: "—",
        fecha: "20 jul. 2026",
        xp: 140,
        icono: "bi-mic-fill",
    },
];

function getEstadoTexto(estado: EstadoEvaluacion): string {
    const estados: Record<EstadoEvaluacion, string> = {
        publicada: "Publicada",
        borrador: "Borrador",
        programada: "Programada",
        finalizada: "Finalizada",
    };

    return estados[estado];
}

function getTipoTexto(tipo: TipoEvaluacion): string {
    const tipos: Record<TipoEvaluacion, string> = {
        prueba: "Prueba",
        quiz: "Quiz",
        proyecto: "Proyecto",
        rubrica: "Rúbrica",
        desafio: "Desafío",
    };

    return tipos[tipo];
}

export default function EvaluacionesPage() {
    const [busqueda, setBusqueda] = useState("");
    const [estado, setEstado] = useState("todos");
    const [tipo, setTipo] = useState("todos");
    const [asignatura, setAsignatura] = useState("todas");
    const [vista, setVista] = useState<"cards" | "table">("cards");

    const evaluacionesFiltradas = useMemo(() => {
        return evaluaciones.filter((evaluacion) => {
            const coincideBusqueda =
                evaluacion.titulo
                    .toLowerCase()
                    .includes(busqueda.toLowerCase()) ||
                evaluacion.descripcion
                    .toLowerCase()
                    .includes(busqueda.toLowerCase()) ||
                evaluacion.curso
                    .toLowerCase()
                    .includes(busqueda.toLowerCase());

            const coincideEstado =
                estado === "todos" || evaluacion.estado === estado;

            const coincideTipo =
                tipo === "todos" || evaluacion.tipo === tipo;

            const coincideAsignatura =
                asignatura === "todas" ||
                evaluacion.asignatura === asignatura;

            return (
                coincideBusqueda &&
                coincideEstado &&
                coincideTipo &&
                coincideAsignatura
            );
        });
    }, [busqueda, estado, tipo, asignatura]);

    const publicadas = evaluaciones.filter(
        (evaluacion) => evaluacion.estado === "publicada",
    ).length;

    const programadas = evaluaciones.filter(
        (evaluacion) => evaluacion.estado === "programada",
    ).length;

    const finalizadas = evaluaciones.filter(
        (evaluacion) => evaluacion.estado === "finalizada",
    ).length;

    const limpiarFiltros = () => {
        setBusqueda("");
        setEstado("todos");
        setTipo("todos");
        setAsignatura("todas");
    };

    return (
        <>
            <div className="tj-evaluations-page">
                {/* HERO */}
                <section className="tj-evaluations-hero">
                    <div>
                        <span className="tj-evaluations-eyebrow">
                            <i className="bi bi-stars" />
                            Centro inteligente de evaluación
                        </span>

                        <h1>Evaluaciones</h1>

                        <p>
                            Diseña pruebas, proyectos, rúbricas y desafíos
                            gamificados para medir y acompañar el aprendizaje.
                        </p>
                    </div>

                    <div className="tj-evaluations-hero-actions">
                        <button
                            type="button"
                            className="btn tj-evaluations-ai-button"
                        >
                            <i className="bi bi-magic" />
                            Crear con IA
                        </button>

                        <button
                            type="button"
                            className="btn tj-evaluations-primary-button"
                            data-bs-toggle="modal"
                            data-bs-target="#createEvaluationModal"
                        >
                            <i className="bi bi-plus-circle-fill" />
                            Nueva evaluación
                        </button>
                    </div>
                </section>

                {/* INDICADORES */}
                <section className="row g-3 mb-4">
                    <div className="col-xl-3 col-md-6">
                        <div className="tj-evaluation-stat-card">
                            <span className="tj-evaluation-stat-icon green">
                                <i className="bi bi-ui-checks-grid" />
                            </span>

                            <div>
                                <small>Total de evaluaciones</small>
                                <strong>{evaluaciones.length}</strong>
                                <span>Biblioteca completa</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <div className="tj-evaluation-stat-card">
                            <span className="tj-evaluation-stat-icon blue">
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
                        <div className="tj-evaluation-stat-card">
                            <span className="tj-evaluation-stat-icon yellow">
                                <i className="bi bi-calendar-event-fill" />
                            </span>

                            <div>
                                <small>Programadas</small>
                                <strong>{programadas}</strong>
                                <span>Próximas evaluaciones</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <div className="tj-evaluation-stat-card">
                            <span className="tj-evaluation-stat-icon purple">
                                <i className="bi bi-graph-up-arrow" />
                            </span>

                            <div>
                                <small>Promedio general</small>
                                <strong>6,1</strong>
                                <span>{finalizadas} evaluaciones finalizadas</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ACCESOS DESTACADOS */}
                <section className="tj-evaluation-modules">
                    <button type="button">
                        <span className="blue">
                            <i className="bi bi-bank2" />
                        </span>

                        <div>
                            <strong>Banco de preguntas</strong>
                            <small>1.540 preguntas disponibles</small>
                        </div>

                        <i className="bi bi-chevron-right" />
                    </button>

                    <button type="button">
                        <span className="purple">
                            <i className="bi bi-list-check" />
                        </span>

                        <div>
                            <strong>Rúbricas</strong>
                            <small>42 plantillas de evaluación</small>
                        </div>

                        <i className="bi bi-chevron-right" />
                    </button>

                    <button type="button">
                        <span className="yellow">
                            <i className="bi bi-calendar3" />
                        </span>

                        <div>
                            <strong>Calendario</strong>
                            <small>18 evaluaciones programadas</small>
                        </div>

                        <i className="bi bi-chevron-right" />
                    </button>

                    <button type="button">
                        <span className="green">
                            <i className="bi bi-bar-chart-fill" />
                        </span>

                        <div>
                            <strong>Analítica</strong>
                            <small>Resultados y aprendizajes descendidos</small>
                        </div>

                        <i className="bi bi-chevron-right" />
                    </button>
                </section>

                {/* FILTROS */}
                <section className="tj-evaluations-toolbar">
                    <div className="tj-evaluations-search">
                        <i className="bi bi-search" />

                        <input
                            type="search"
                            value={busqueda}
                            onChange={(event) =>
                                setBusqueda(event.target.value)
                            }
                            placeholder="Buscar evaluación, curso o contenido"
                            aria-label="Buscar evaluaciones"
                        />
                    </div>

                    <div className="tj-evaluations-filters">
                        <select
                            className="form-select"
                            value={estado}
                            onChange={(event) =>
                                setEstado(event.target.value)
                            }
                        >
                            <option value="todos">Todos los estados</option>
                            <option value="publicada">Publicadas</option>
                            <option value="borrador">Borradores</option>
                            <option value="programada">Programadas</option>
                            <option value="finalizada">Finalizadas</option>
                        </select>

                        <select
                            className="form-select"
                            value={tipo}
                            onChange={(event) =>
                                setTipo(event.target.value)
                            }
                        >
                            <option value="todos">Todos los tipos</option>
                            <option value="prueba">Prueba</option>
                            <option value="quiz">Quiz</option>
                            <option value="proyecto">Proyecto</option>
                            <option value="rubrica">Rúbrica</option>
                            <option value="desafio">Desafío</option>
                        </select>

                        <select
                            className="form-select"
                            value={asignatura}
                            onChange={(event) =>
                                setAsignatura(event.target.value)
                            }
                        >
                            <option value="todas">
                                Todas las asignaturas
                            </option>
                            <option value="Lenguaje">Lenguaje</option>
                            <option value="Matemática">Matemática</option>
                            <option value="Ciencias">Ciencias</option>
                            <option value="Historia">Historia</option>
                            <option value="Tecnología">Tecnología</option>
                        </select>
                    </div>

                    <div className="tj-evaluations-view">
                        <button
                            type="button"
                            className={vista === "cards" ? "active" : ""}
                            onClick={() => setVista("cards")}
                        >
                            <i className="bi bi-grid-3x3-gap-fill" />
                        </button>

                        <button
                            type="button"
                            className={vista === "table" ? "active" : ""}
                            onClick={() => setVista("table")}
                        >
                            <i className="bi bi-list-ul" />
                        </button>
                    </div>
                </section>

                <div className="tj-evaluations-results">
                    <div>
                        <strong>
                            {evaluacionesFiltradas.length} evaluaciones
                        </strong>

                        <span>
                            Resultados según los filtros seleccionados
                        </span>
                    </div>

                    <button type="button" onClick={limpiarFiltros}>
                        <i className="bi bi-arrow-counterclockwise" />
                        Limpiar filtros
                    </button>
                </div>

                {/* TARJETAS */}
                {vista === "cards" &&
                    evaluacionesFiltradas.length > 0 && (
                        <section className="row g-4">
                            {evaluacionesFiltradas.map((evaluacion) => (
                                <div
                                    className="col-xxl-4 col-xl-6"
                                    key={evaluacion.id}
                                >
                                    <article className="tj-evaluation-card">
                                        <div className="tj-evaluation-card-top">
                                            <span
                                                className={`tj-evaluation-main-icon ${evaluacion.tipo}`}
                                            >
                                                <i
                                                    className={`bi ${evaluacion.icono}`}
                                                />
                                            </span>

                                            <div className="dropdown">
                                                <button
                                                    type="button"
                                                    className="tj-evaluation-options"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
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
                                                            Vista previa
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
                                                        <button
                                                            type="button"
                                                            className="dropdown-item rounded-3"
                                                        >
                                                            <i className="bi bi-bar-chart me-2" />
                                                            Ver resultados
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

                                        <div className="tj-evaluation-tags">
                                            <span
                                                className={`tj-evaluation-status ${evaluacion.estado}`}
                                            >
                                                <i className="bi bi-circle-fill" />
                                                {getEstadoTexto(
                                                    evaluacion.estado,
                                                )}
                                            </span>

                                            <span>
                                                {getTipoTexto(evaluacion.tipo)}
                                            </span>
                                        </div>

                                        <h2>{evaluacion.titulo}</h2>

                                        <p>{evaluacion.descripcion}</p>

                                        <div className="tj-evaluation-info-grid">
                                            <div>
                                                <i className="bi bi-book" />
                                                <span>Asignatura</span>
                                                <strong>
                                                    {evaluacion.asignatura}
                                                </strong>
                                            </div>

                                            <div>
                                                <i className="bi bi-mortarboard" />
                                                <span>Curso</span>
                                                <strong>
                                                    {evaluacion.curso}
                                                </strong>
                                            </div>

                                            <div>
                                                <i className="bi bi-ui-checks" />
                                                <span>Preguntas</span>
                                                <strong>
                                                    {evaluacion.preguntas || "—"}
                                                </strong>
                                            </div>

                                            <div>
                                                <i className="bi bi-clock" />
                                                <span>Duración</span>
                                                <strong>
                                                    {evaluacion.duracion} min
                                                </strong>
                                            </div>
                                        </div>

                                        <div className="tj-evaluation-performance">
                                            <div>
                                                <small>Promedio obtenido</small>

                                                <strong>
                                                    {evaluacion.promedio}
                                                </strong>
                                            </div>

                                            <div>
                                                <small>Participantes</small>

                                                <strong>
                                                    {evaluacion.estudiantes}
                                                </strong>
                                            </div>

                                            <span className="tj-evaluation-xp">
                                                <i className="bi bi-lightning-charge-fill" />
                                                +{evaluacion.xp} XP
                                            </span>
                                        </div>

                                        <footer className="tj-evaluation-footer">
                                            <span>
                                                <i className="bi bi-calendar3" />
                                                {evaluacion.fecha}
                                            </span>

                                            <button type="button">
                                                Abrir evaluación
                                                <i className="bi bi-arrow-right" />
                                            </button>
                                        </footer>
                                    </article>
                                </div>
                            ))}
                        </section>
                    )}

                {/* TABLA */}
                {vista === "table" &&
                    evaluacionesFiltradas.length > 0 && (
                        <section className="tj-evaluations-table">
                            <div className="table-responsive">
                                <table className="table align-middle mb-0">
                                    <thead>
                                        <tr>
                                            <th>Evaluación</th>
                                            <th>Tipo</th>
                                            <th>Curso</th>
                                            <th>Estado</th>
                                            <th>Preguntas</th>
                                            <th>Participantes</th>
                                            <th>Promedio</th>
                                            <th>Fecha</th>
                                            <th />
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {evaluacionesFiltradas.map(
                                            (evaluacion) => (
                                                <tr key={evaluacion.id}>
                                                    <td>
                                                        <div className="tj-evaluation-table-name">
                                                            <span
                                                                className={`tj-evaluation-main-icon ${evaluacion.tipo}`}
                                                            >
                                                                <i
                                                                    className={`bi ${evaluacion.icono}`}
                                                                />
                                                            </span>

                                                            <div>
                                                                <strong>
                                                                    {
                                                                        evaluacion.titulo
                                                                    }
                                                                </strong>

                                                                <small>
                                                                    {
                                                                        evaluacion.asignatura
                                                                    }
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        {getTipoTexto(
                                                            evaluacion.tipo,
                                                        )}
                                                    </td>

                                                    <td>{evaluacion.curso}</td>

                                                    <td>
                                                        <span
                                                            className={`tj-evaluation-status ${evaluacion.estado}`}
                                                        >
                                                            <i className="bi bi-circle-fill" />
                                                            {getEstadoTexto(
                                                                evaluacion.estado,
                                                            )}
                                                        </span>
                                                    </td>

                                                    <td>
                                                        {evaluacion.preguntas ||
                                                            "—"}
                                                    </td>

                                                    <td>
                                                        {
                                                            evaluacion.estudiantes
                                                        }
                                                    </td>

                                                    <td>
                                                        {evaluacion.promedio}
                                                    </td>

                                                    <td>{evaluacion.fecha}</td>

                                                    <td>
                                                        <button
                                                            type="button"
                                                            className="tj-evaluation-options"
                                                        >
                                                            <i className="bi bi-three-dots-vertical" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ),
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    )}

                {/* SIN RESULTADOS */}
                {evaluacionesFiltradas.length === 0 && (
                    <section className="tj-evaluations-empty">
                        <span>
                            <i className="bi bi-search" />
                        </span>

                        <h2>No encontramos evaluaciones</h2>

                        <p>
                            Intenta con otros términos o elimina los filtros
                            seleccionados.
                        </p>

                        <button
                            type="button"
                            className="btn tj-evaluations-primary-button"
                            onClick={limpiarFiltros}
                        >
                            <i className="bi bi-arrow-counterclockwise" />
                            Limpiar filtros
                        </button>
                    </section>
                )}
            </div>

            {/* MODAL CREAR EVALUACIÓN */}
            <div
                className="modal fade"
                id="createEvaluationModal"
                tabIndex={-1}
                aria-labelledby="createEvaluationModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content tj-create-evaluation-modal">
                        <div className="modal-header tj-create-evaluation-header">
                            <div>
                                <span>
                                    <i className="bi bi-stars" />
                                    Centro inteligente de evaluación
                                </span>

                                <h2
                                    className="modal-title"
                                    id="createEvaluationModalLabel"
                                >
                                    Crear nueva evaluación
                                </h2>

                                <p>
                                    Configura una experiencia evaluativa
                                    tradicional o gamificada.
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
                            <div className="tj-evaluation-wizard">
                                <aside className="tj-evaluation-wizard-steps">
                                    <button type="button" className="active">
                                        <span>1</span>

                                        <div>
                                            <strong>Tipo</strong>
                                            <small>
                                                Formato de evaluación
                                            </small>
                                        </div>
                                    </button>

                                    <button type="button">
                                        <span>2</span>

                                        <div>
                                            <strong>Información</strong>
                                            <small>
                                                Datos principales
                                            </small>
                                        </div>
                                    </button>

                                    <button type="button">
                                        <span>3</span>

                                        <div>
                                            <strong>Preguntas</strong>
                                            <small>
                                                Contenido evaluativo
                                            </small>
                                        </div>
                                    </button>

                                    <button type="button">
                                        <span>4</span>

                                        <div>
                                            <strong>Gamificación</strong>
                                            <small>
                                                XP y recompensas
                                            </small>
                                        </div>
                                    </button>

                                    <button type="button">
                                        <span>5</span>

                                        <div>
                                            <strong>Publicación</strong>
                                            <small>
                                                Fechas y permisos
                                            </small>
                                        </div>
                                    </button>
                                </aside>

                                <div className="tj-evaluation-wizard-content">
                                    <section className="tj-evaluation-form-section">
                                        <div className="tj-evaluation-form-title">
                                            <span>
                                                <i className="bi bi-grid-fill" />
                                            </span>

                                            <div>
                                                <h3>
                                                    Selecciona el tipo de
                                                    evaluación
                                                </h3>

                                                <p>
                                                    El formato puede modificarse
                                                    más adelante.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="tj-evaluation-type-grid">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="evaluationType"
                                                    defaultChecked
                                                />

                                                <span>
                                                    <i className="bi bi-ui-checks-grid" />
                                                    <strong>Prueba</strong>
                                                    <small>
                                                        Preguntas y alternativas
                                                    </small>
                                                </span>
                                            </label>

                                            <label>
                                                <input
                                                    type="radio"
                                                    name="evaluationType"
                                                />

                                                <span>
                                                    <i className="bi bi-controller" />
                                                    <strong>Quiz</strong>
                                                    <small>
                                                        Evaluación interactiva
                                                    </small>
                                                </span>
                                            </label>

                                            <label>
                                                <input
                                                    type="radio"
                                                    name="evaluationType"
                                                />

                                                <span>
                                                    <i className="bi bi-rocket-takeoff" />
                                                    <strong>Proyecto</strong>
                                                    <small>
                                                        Producto o trabajo
                                                    </small>
                                                </span>
                                            </label>

                                            <label>
                                                <input
                                                    type="radio"
                                                    name="evaluationType"
                                                />

                                                <span>
                                                    <i className="bi bi-list-check" />
                                                    <strong>Rúbrica</strong>
                                                    <small>
                                                        Criterios y niveles
                                                    </small>
                                                </span>
                                            </label>

                                            <label>
                                                <input
                                                    type="radio"
                                                    name="evaluationType"
                                                />

                                                <span>
                                                    <i className="bi bi-puzzle-fill" />
                                                    <strong>Desafío</strong>
                                                    <small>
                                                        Misión gamificada
                                                    </small>
                                                </span>
                                            </label>

                                            <label>
                                                <input
                                                    type="radio"
                                                    name="evaluationType"
                                                />

                                                <span>
                                                    <i className="bi bi-people-fill" />
                                                    <strong>Debate</strong>
                                                    <small>
                                                        Expresión y argumentos
                                                    </small>
                                                </span>
                                            </label>
                                        </div>
                                    </section>

                                    <section className="tj-evaluation-form-section">
                                        <div className="tj-evaluation-form-title">
                                            <span>
                                                <i className="bi bi-card-text" />
                                            </span>

                                            <div>
                                                <h3>Información general</h3>
                                                <p>
                                                    Completa los principales
                                                    datos pedagógicos.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="row g-3">
                                            <div className="col-12">
                                                <label
                                                    className="form-label"
                                                    htmlFor="evaluationTitle"
                                                >
                                                    Título
                                                </label>

                                                <input
                                                    id="evaluationTitle"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Ej.: Evaluación global de Matemática"
                                                />
                                            </div>

                                            <div className="col-12">
                                                <label
                                                    className="form-label"
                                                    htmlFor="evaluationDescription"
                                                >
                                                    Descripción
                                                </label>

                                                <textarea
                                                    id="evaluationDescription"
                                                    className="form-control"
                                                    rows={3}
                                                    placeholder="Describe el objetivo de la evaluación..."
                                                />
                                            </div>

                                            <div className="col-md-6">
                                                <label
                                                    className="form-label"
                                                    htmlFor="evaluationCourse"
                                                >
                                                    Curso
                                                </label>

                                                <select
                                                    id="evaluationCourse"
                                                    className="form-select"
                                                    defaultValue=""
                                                >
                                                    <option value="" disabled>
                                                        Seleccionar curso
                                                    </option>
                                                    <option>
                                                        2° Básico A
                                                    </option>
                                                    <option>5° Básico</option>
                                                    <option>7° Básico</option>
                                                    <option>8° Básico</option>
                                                </select>
                                            </div>

                                            <div className="col-md-6">
                                                <label
                                                    className="form-label"
                                                    htmlFor="evaluationSubject"
                                                >
                                                    Asignatura
                                                </label>

                                                <select
                                                    id="evaluationSubject"
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
                                                    <option>Tecnología</option>
                                                </select>
                                            </div>

                                            <div className="col-md-6">
                                                <label
                                                    className="form-label"
                                                    htmlFor="evaluationObjective"
                                                >
                                                    Objetivo de aprendizaje
                                                </label>

                                                <select
                                                    id="evaluationObjective"
                                                    className="form-select"
                                                    defaultValue=""
                                                >
                                                    <option value="" disabled>
                                                        Seleccionar OA
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

                                            <div className="col-md-6">
                                                <label
                                                    className="form-label"
                                                    htmlFor="evaluationUnit"
                                                >
                                                    Unidad
                                                </label>

                                                <select
                                                    id="evaluationUnit"
                                                    className="form-select"
                                                    defaultValue="3"
                                                >
                                                    <option value="1">
                                                        Unidad 1
                                                    </option>
                                                    <option value="2">
                                                        Unidad 2
                                                    </option>
                                                    <option value="3">
                                                        Unidad 3
                                                    </option>
                                                    <option value="4">
                                                        Unidad 4
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </section>
                                </div>

                                <aside className="tj-evaluation-modal-sidebar">
                                    <div className="tj-evaluation-preview">
                                        <span>Vista previa</span>

                                        <div className="tj-evaluation-preview-cover">
                                            <i className="bi bi-ui-checks-grid" />

                                            <strong>Nueva evaluación</strong>

                                            <small>
                                                Curso y asignatura
                                            </small>
                                        </div>

                                        <div className="tj-evaluation-preview-content">
                                            <span className="tj-evaluation-status borrador">
                                                <i className="bi bi-circle-fill" />
                                                Borrador
                                            </span>

                                            <h3>
                                                Título de la evaluación
                                            </h3>

                                            <p>
                                                Aquí aparecerá la descripción
                                                ingresada.
                                            </p>

                                            <div>
                                                <span>
                                                    <i className="bi bi-clock" />
                                                    45 minutos
                                                </span>

                                                <span>
                                                    <i className="bi bi-ui-checks" />
                                                    25 preguntas
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tj-evaluation-gamification">
                                        <div>
                                            <span>
                                                <i className="bi bi-controller" />
                                            </span>

                                            <section>
                                                <strong>
                                                    Gamificación
                                                </strong>

                                                <small>
                                                    Recompensas opcionales
                                                </small>
                                            </section>
                                        </div>

                                        <label>
                                            <span>Entregar experiencia</span>
                                            <input
                                                type="checkbox"
                                                defaultChecked
                                            />
                                        </label>

                                        <label>
                                            <span>Entregar monedas</span>
                                            <input
                                                type="checkbox"
                                                defaultChecked
                                            />
                                        </label>

                                        <label>
                                            <span>Mostrar ranking</span>
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
                                                    defaultValue={100}
                                                />
                                            </div>

                                            <div className="col-6">
                                                <label className="form-label">
                                                    Monedas
                                                </label>

                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    defaultValue={200}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tj-evaluation-ai-box">
                                        <span>
                                            <i className="bi bi-stars" />
                                        </span>

                                        <div>
                                            <strong>
                                                Asistente de evaluación
                                            </strong>

                                            <p>
                                                Genera preguntas, alternativas,
                                                rúbricas o adecuaciones.
                                            </p>

                                            <button type="button">
                                                Generar contenido
                                            </button>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>

                        <div className="modal-footer tj-create-evaluation-footer">
                            <button
                                type="button"
                                className="btn tj-evaluation-cancel"
                                data-bs-dismiss="modal"
                            >
                                Cancelar
                            </button>

                            <button
                                type="button"
                                className="btn tj-evaluation-draft"
                            >
                                <i className="bi bi-save" />
                                Guardar borrador
                            </button>

                            <button
                                type="button"
                                className="btn tj-evaluation-next"
                            >
                                Continuar
                                <i className="bi bi-arrow-right" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}