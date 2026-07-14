import { useMemo, useState } from "react";

import "../../../../shared/assets/styles/dashboard/material-educativo.css";

type EstadoMaterial = "publicado" | "borrador" | "revision";

type TipoMaterial =
    | "pdf"
    | "video"
    | "audio"
    | "presentacion"
    | "imagen"
    | "documento";

type MaterialEducativo = {
    id: number;
    titulo: string;
    descripcion: string;
    tipo: TipoMaterial;
    estado: EstadoMaterial;
    asignatura: string;
    curso: string;
    autor: string;
    fecha: string;
    descargas: number;
    visualizaciones: number;
    tamano: string;
    icono: string;
};

const materialesIniciales: MaterialEducativo[] = [
    {
        id: 1,
        titulo: "Guía de cuerpos geométricos",
        descripcion:
            "Material visual para reconocer cubos, conos, cilindros, prismas y esferas.",
        tipo: "pdf",
        estado: "publicado",
        asignatura: "Matemática",
        curso: "2° Básico",
        autor: "Joselyn Cáceres",
        fecha: "13 jul. 2026",
        descargas: 126,
        visualizaciones: 384,
        tamano: "4,8 MB",
        icono: "bi-file-earmark-pdf-fill",
    },
    {
        id: 2,
        titulo: "Pueblos originarios de Chile",
        descripcion:
            "Presentación con información, imágenes y actividades de comprensión.",
        tipo: "presentacion",
        estado: "publicado",
        asignatura: "Historia",
        curso: "2° Básico",
        autor: "Joselyn Cáceres",
        fecha: "11 jul. 2026",
        descargas: 84,
        visualizaciones: 241,
        tamano: "12,5 MB",
        icono: "bi-file-earmark-slides-fill",
    },
    {
        id: 3,
        titulo: "Podcast sobre convivencia escolar",
        descripcion:
            "Audio educativo para reflexionar sobre respeto, empatía y comunicación.",
        tipo: "audio",
        estado: "revision",
        asignatura: "Orientación",
        curso: "7° Básico",
        autor: "Equipo de convivencia",
        fecha: "10 jul. 2026",
        descargas: 0,
        visualizaciones: 18,
        tamano: "18,2 MB",
        icono: "bi-file-earmark-music-fill",
    },
    {
        id: 4,
        titulo: "Video: ciclos de vida",
        descripcion:
            "Animación educativa sobre metamorfosis y ciclos de vida animal.",
        tipo: "video",
        estado: "publicado",
        asignatura: "Ciencias",
        curso: "2° Básico",
        autor: "Equipo pedagógico",
        fecha: "09 jul. 2026",
        descargas: 63,
        visualizaciones: 512,
        tamano: "48,7 MB",
        icono: "bi-file-earmark-play-fill",
    },
    {
        id: 5,
        titulo: "Plantilla de artículo informativo",
        descripcion:
            "Documento editable para crear artículos sobre pueblos originarios.",
        tipo: "documento",
        estado: "borrador",
        asignatura: "Lenguaje",
        curso: "2° Básico",
        autor: "Joselyn Cáceres",
        fecha: "08 jul. 2026",
        descargas: 0,
        visualizaciones: 7,
        tamano: "1,3 MB",
        icono: "bi-file-earmark-word-fill",
    },
    {
        id: 6,
        titulo: "Láminas de animales vertebrados",
        descripcion:
            "Colección de imágenes para clasificar animales y reconocer hábitats.",
        tipo: "imagen",
        estado: "publicado",
        asignatura: "Ciencias",
        curso: "2° Básico",
        autor: "Biblioteca TíaJo",
        fecha: "05 jul. 2026",
        descargas: 198,
        visualizaciones: 670,
        tamano: "8,9 MB",
        icono: "bi-file-earmark-image-fill",
    },
];

function getEstadoTexto(estado: EstadoMaterial): string {
    const estados: Record<EstadoMaterial, string> = {
        publicado: "Publicado",
        borrador: "Borrador",
        revision: "En revisión",
    };

    return estados[estado];
}

function getTipoTexto(tipo: TipoMaterial): string {
    const tipos: Record<TipoMaterial, string> = {
        pdf: "PDF",
        video: "Video",
        audio: "Audio",
        presentacion: "Presentación",
        imagen: "Imagen",
        documento: "Documento",
    };

    return tipos[tipo];
}

export default function MaterialEducativoPage() {
    const [vista, setVista] = useState<"grid" | "table">("grid");
    const [busqueda, setBusqueda] = useState("");
    const [tipo, setTipo] = useState("todos");
    const [estado, setEstado] = useState("todos");
    const [asignatura, setAsignatura] = useState("todas");

    const materialesFiltrados = useMemo(() => {
        return materialesIniciales.filter((material) => {
            const coincideBusqueda =
                material.titulo
                    .toLowerCase()
                    .includes(busqueda.toLowerCase()) ||
                material.descripcion
                    .toLowerCase()
                    .includes(busqueda.toLowerCase()) ||
                material.autor
                    .toLowerCase()
                    .includes(busqueda.toLowerCase());

            const coincideTipo =
                tipo === "todos" || material.tipo === tipo;

            const coincideEstado =
                estado === "todos" || material.estado === estado;

            const coincideAsignatura =
                asignatura === "todas" ||
                material.asignatura === asignatura;

            return (
                coincideBusqueda &&
                coincideTipo &&
                coincideEstado &&
                coincideAsignatura
            );
        });
    }, [busqueda, tipo, estado, asignatura]);

    const publicados = materialesIniciales.filter(
        (material) => material.estado === "publicado",
    ).length;

    const enRevision = materialesIniciales.filter(
        (material) => material.estado === "revision",
    ).length;

    const totalDescargas = materialesIniciales.reduce(
        (total, material) => total + material.descargas,
        0,
    );

    return (
        <>
            <div className="tj-materials-page">
                {/* ENCABEZADO */}
                <section className="tj-materials-hero">
                    <div>
                        <span className="tj-materials-eyebrow">
                            <i className="bi bi-folder2-open" />
                            Biblioteca educativa
                        </span>

                        <h1>Material educativo</h1>

                        <p>
                            Organiza, publica y comparte recursos pedagógicos
                            para toda la comunidad educativa.
                        </p>
                    </div>

                    <div className="tj-materials-hero-actions">
                        <button
                            type="button"
                            className="btn tj-materials-secondary-button"
                        >
                            <i className="bi bi-folder-plus" />
                            Nueva carpeta
                        </button>

                        <button
                            type="button"
                            className="btn tj-materials-primary-button"
                            data-bs-toggle="modal"
                            data-bs-target="#uploadMaterialModal"
                        >
                            <i className="bi bi-cloud-arrow-up-fill" />
                            Subir material
                        </button>
                    </div>
                </section>

                {/* INDICADORES */}
                <section className="row g-3 mb-4">
                    <div className="col-xl-3 col-md-6">
                        <div className="tj-material-summary-card">
                            <span className="tj-material-summary-icon green">
                                <i className="bi bi-folder-fill" />
                            </span>

                            <div>
                                <small>Total de recursos</small>
                                <strong>{materialesIniciales.length}</strong>
                                <span>Biblioteca completa</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <div className="tj-material-summary-card">
                            <span className="tj-material-summary-icon blue">
                                <i className="bi bi-cloud-check-fill" />
                            </span>

                            <div>
                                <small>Publicados</small>
                                <strong>{publicados}</strong>
                                <span>Disponibles para usuarios</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <div className="tj-material-summary-card">
                            <span className="tj-material-summary-icon yellow">
                                <i className="bi bi-hourglass-split" />
                            </span>

                            <div>
                                <small>En revisión</small>
                                <strong>{enRevision}</strong>
                                <span>Pendientes de aprobación</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <div className="tj-material-summary-card">
                            <span className="tj-material-summary-icon purple">
                                <i className="bi bi-cloud-arrow-down-fill" />
                            </span>

                            <div>
                                <small>Descargas</small>
                                <strong>{totalDescargas}</strong>
                                <span>Durante este período</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CARPETAS */}
                <section className="tj-material-folders">
                    <div className="tj-material-section-heading">
                        <div>
                            <h2>Carpetas destacadas</h2>
                            <p>
                                Accede rápidamente a las principales categorías.
                            </p>
                        </div>

                        <button type="button">
                            Ver todas
                            <i className="bi bi-arrow-right" />
                        </button>
                    </div>

                    <div className="row g-3">
                        <div className="col-xl-3 col-md-6">
                            <button
                                type="button"
                                className="tj-folder-card"
                            >
                                <span className="tj-folder-icon language">
                                    <i className="bi bi-folder-fill" />
                                </span>

                                <div>
                                    <strong>Lenguaje</strong>
                                    <small>84 recursos</small>
                                </div>

                                <i className="bi bi-chevron-right" />
                            </button>
                        </div>

                        <div className="col-xl-3 col-md-6">
                            <button
                                type="button"
                                className="tj-folder-card"
                            >
                                <span className="tj-folder-icon math">
                                    <i className="bi bi-folder-fill" />
                                </span>

                                <div>
                                    <strong>Matemática</strong>
                                    <small>72 recursos</small>
                                </div>

                                <i className="bi bi-chevron-right" />
                            </button>
                        </div>

                        <div className="col-xl-3 col-md-6">
                            <button
                                type="button"
                                className="tj-folder-card"
                            >
                                <span className="tj-folder-icon science">
                                    <i className="bi bi-folder-fill" />
                                </span>

                                <div>
                                    <strong>Ciencias</strong>
                                    <small>63 recursos</small>
                                </div>

                                <i className="bi bi-chevron-right" />
                            </button>
                        </div>

                        <div className="col-xl-3 col-md-6">
                            <button
                                type="button"
                                className="tj-folder-card"
                            >
                                <span className="tj-folder-icon history">
                                    <i className="bi bi-folder-fill" />
                                </span>

                                <div>
                                    <strong>Historia</strong>
                                    <small>51 recursos</small>
                                </div>

                                <i className="bi bi-chevron-right" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* FILTROS */}
                <section className="tj-materials-toolbar">
                    <div className="tj-materials-search">
                        <i className="bi bi-search" />

                        <input
                            type="search"
                            value={busqueda}
                            onChange={(event) =>
                                setBusqueda(event.target.value)
                            }
                            placeholder="Buscar material, autor o descripción"
                        />
                    </div>

                    <div className="tj-materials-filters">
                        <select
                            className="form-select"
                            value={tipo}
                            onChange={(event) =>
                                setTipo(event.target.value)
                            }
                        >
                            <option value="todos">
                                Todos los formatos
                            </option>
                            <option value="pdf">PDF</option>
                            <option value="video">Video</option>
                            <option value="audio">Audio</option>
                            <option value="presentacion">
                                Presentación
                            </option>
                            <option value="imagen">Imagen</option>
                            <option value="documento">Documento</option>
                        </select>

                        <select
                            className="form-select"
                            value={estado}
                            onChange={(event) =>
                                setEstado(event.target.value)
                            }
                        >
                            <option value="todos">
                                Todos los estados
                            </option>
                            <option value="publicado">Publicados</option>
                            <option value="borrador">Borradores</option>
                            <option value="revision">En revisión</option>
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
                            <option value="Orientación">Orientación</option>
                        </select>
                    </div>

                    <div className="tj-materials-view-buttons">
                        <button
                            type="button"
                            className={vista === "grid" ? "active" : ""}
                            onClick={() => setVista("grid")}
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

                <div className="tj-materials-results-header">
                    <div>
                        <strong>
                            {materialesFiltrados.length} recursos encontrados
                        </strong>

                        <span>
                            Material disponible según los filtros aplicados
                        </span>
                    </div>

                    <button
                        type="button"
                        onClick={() => {
                            setBusqueda("");
                            setTipo("todos");
                            setEstado("todos");
                            setAsignatura("todas");
                        }}
                    >
                        <i className="bi bi-arrow-counterclockwise" />
                        Limpiar filtros
                    </button>
                </div>

                {/* TARJETAS */}
                {vista === "grid" && materialesFiltrados.length > 0 && (
                    <section className="row g-4">
                        {materialesFiltrados.map((material) => (
                            <div
                                className="col-xxl-4 col-xl-6"
                                key={material.id}
                            >
                                <article className="tj-material-card">
                                    <div
                                        className={`tj-material-preview ${material.tipo}`}
                                    >
                                        <span className="tj-material-format">
                                            {getTipoTexto(material.tipo)}
                                        </span>

                                        <i
                                            className={`bi ${material.icono}`}
                                        />

                                        <div className="dropdown">
                                            <button
                                                type="button"
                                                className="tj-material-options"
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
                                                        <i className="bi bi-share me-2" />
                                                        Compartir
                                                    </button>
                                                </li>

                                                <li>
                                                    <button
                                                        type="button"
                                                        className="dropdown-item rounded-3"
                                                    >
                                                        <i className="bi bi-download me-2" />
                                                        Descargar
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
                                                        <i className="bi bi-trash me-2" />
                                                        Eliminar
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="tj-material-card-body">
                                        <div className="tj-material-tags">
                                            <span
                                                className={`tj-material-status ${material.estado}`}
                                            >
                                                <i className="bi bi-circle-fill" />
                                                {getEstadoTexto(
                                                    material.estado,
                                                )}
                                            </span>

                                            <span>
                                                {material.asignatura}
                                            </span>
                                        </div>

                                        <h2>{material.titulo}</h2>

                                        <p>{material.descripcion}</p>

                                        <div className="tj-material-meta">
                                            <span>
                                                <i className="bi bi-mortarboard" />
                                                {material.curso}
                                            </span>

                                            <span>
                                                <i className="bi bi-hdd" />
                                                {material.tamano}
                                            </span>
                                        </div>

                                        <div className="tj-material-author">
                                            <span className="tj-material-avatar">
                                                {material.autor
                                                    .split(" ")
                                                    .slice(0, 2)
                                                    .map((name) => name[0])
                                                    .join("")}
                                            </span>

                                            <div>
                                                <strong>
                                                    {material.autor}
                                                </strong>

                                                <small>
                                                    Publicado el{" "}
                                                    {material.fecha}
                                                </small>
                                            </div>
                                        </div>

                                        <div className="tj-material-card-footer">
                                            <span>
                                                <i className="bi bi-eye" />
                                                {material.visualizaciones}
                                            </span>

                                            <span>
                                                <i className="bi bi-download" />
                                                {material.descargas}
                                            </span>

                                            <button type="button">
                                                Abrir recurso
                                                <i className="bi bi-arrow-right" />
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </section>
                )}

                {/* TABLA */}
                {vista === "table" && materialesFiltrados.length > 0 && (
                    <section className="tj-materials-table-card">
                        <div className="table-responsive">
                            <table className="table align-middle mb-0">
                                <thead>
                                    <tr>
                                        <th>Material</th>
                                        <th>Formato</th>
                                        <th>Asignatura</th>
                                        <th>Curso</th>
                                        <th>Estado</th>
                                        <th>Descargas</th>
                                        <th>Fecha</th>
                                        <th />
                                    </tr>
                                </thead>

                                <tbody>
                                    {materialesFiltrados.map((material) => (
                                        <tr key={material.id}>
                                            <td>
                                                <div className="tj-material-table-name">
                                                    <span
                                                        className={`tj-material-table-icon ${material.tipo}`}
                                                    >
                                                        <i
                                                            className={`bi ${material.icono}`}
                                                        />
                                                    </span>

                                                    <div>
                                                        <strong>
                                                            {material.titulo}
                                                        </strong>

                                                        <small>
                                                            {material.autor}
                                                        </small>
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                {getTipoTexto(material.tipo)}
                                            </td>

                                            <td>{material.asignatura}</td>

                                            <td>{material.curso}</td>

                                            <td>
                                                <span
                                                    className={`tj-material-status ${material.estado}`}
                                                >
                                                    <i className="bi bi-circle-fill" />
                                                    {getEstadoTexto(
                                                        material.estado,
                                                    )}
                                                </span>
                                            </td>

                                            <td>{material.descargas}</td>

                                            <td>{material.fecha}</td>

                                            <td>
                                                <button
                                                    type="button"
                                                    className="tj-material-options"
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

                {/* SIN RESULTADOS */}
                {materialesFiltrados.length === 0 && (
                    <section className="tj-materials-empty">
                        <span>
                            <i className="bi bi-folder-x" />
                        </span>

                        <h2>No encontramos material educativo</h2>

                        <p>
                            Modifica los filtros o utiliza otros términos de
                            búsqueda.
                        </p>

                        <button
                            type="button"
                            className="btn tj-materials-primary-button"
                            onClick={() => {
                                setBusqueda("");
                                setTipo("todos");
                                setEstado("todos");
                                setAsignatura("todas");
                            }}
                        >
                            <i className="bi bi-arrow-counterclockwise" />
                            Limpiar filtros
                        </button>
                    </section>
                )}
            </div>

            {/* MODAL SUBIR MATERIAL */}
            <div
                className="modal fade"
                id="uploadMaterialModal"
                tabIndex={-1}
                aria-labelledby="uploadMaterialModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content tj-upload-material-modal">
                        <div className="modal-header tj-upload-material-header">
                            <div>
                                <span>
                                    <i className="bi bi-cloud-arrow-up-fill" />
                                    Biblioteca TíaJo
                                </span>

                                <h2
                                    className="modal-title"
                                    id="uploadMaterialModalLabel"
                                >
                                    Subir material educativo
                                </h2>

                                <p>
                                    Agrega un nuevo recurso a la biblioteca
                                    pedagógica.
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
                            <div className="tj-upload-material-layout">
                                <div className="tj-upload-material-main">
                                    <section className="tj-material-form-section">
                                        <div className="tj-material-form-title">
                                            <span>
                                                <i className="bi bi-cloud-upload" />
                                            </span>

                                            <div>
                                                <h3>Archivo del recurso</h3>
                                                <p>
                                                    Selecciona o arrastra el
                                                    material educativo.
                                                </p>
                                            </div>
                                        </div>

                                        <label className="tj-upload-dropzone">
                                            <input type="file" />

                                            <span>
                                                <i className="bi bi-cloud-arrow-up" />
                                            </span>

                                            <strong>
                                                Arrastra tu archivo aquí
                                            </strong>

                                            <p>
                                                o haz clic para buscarlo en tu
                                                equipo
                                            </p>

                                            <small>
                                                PDF, DOCX, PPTX, MP4, MP3, PNG o
                                                JPG. Máximo 100 MB.
                                            </small>
                                        </label>
                                    </section>

                                    <section className="tj-material-form-section">
                                        <div className="tj-material-form-title">
                                            <span>
                                                <i className="bi bi-card-text" />
                                            </span>

                                            <div>
                                                <h3>Información general</h3>
                                                <p>
                                                    Describe el contenido del
                                                    recurso.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="row g-3">
                                            <div className="col-12">
                                                <label
                                                    className="form-label"
                                                    htmlFor="materialTitle"
                                                >
                                                    Título
                                                </label>

                                                <input
                                                    id="materialTitle"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Ej.: Guía de cuerpos geométricos"
                                                />
                                            </div>

                                            <div className="col-12">
                                                <label
                                                    className="form-label"
                                                    htmlFor="materialDescription"
                                                >
                                                    Descripción
                                                </label>

                                                <textarea
                                                    id="materialDescription"
                                                    className="form-control"
                                                    rows={4}
                                                    placeholder="Describe el contenido y propósito pedagógico..."
                                                />
                                            </div>

                                            <div className="col-md-6">
                                                <label
                                                    className="form-label"
                                                    htmlFor="materialType"
                                                >
                                                    Tipo de recurso
                                                </label>

                                                <select
                                                    id="materialType"
                                                    className="form-select"
                                                    defaultValue=""
                                                >
                                                    <option value="" disabled>
                                                        Seleccionar formato
                                                    </option>
                                                    <option>Documento PDF</option>
                                                    <option>Presentación</option>
                                                    <option>Video</option>
                                                    <option>Audio</option>
                                                    <option>Imagen</option>
                                                    <option>
                                                        Documento editable
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-md-6">
                                                <label
                                                    className="form-label"
                                                    htmlFor="materialLanguage"
                                                >
                                                    Idioma
                                                </label>

                                                <select
                                                    id="materialLanguage"
                                                    className="form-select"
                                                    defaultValue="es"
                                                >
                                                    <option value="es">
                                                        Español
                                                    </option>
                                                    <option value="en">
                                                        Inglés
                                                    </option>
                                                    <option value="fr">
                                                        Francés
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </section>

                                    <section className="tj-material-form-section">
                                        <div className="tj-material-form-title">
                                            <span>
                                                <i className="bi bi-mortarboard-fill" />
                                            </span>

                                            <div>
                                                <h3>
                                                    Clasificación educativa
                                                </h3>

                                                <p>
                                                    Define a qué público está
                                                    dirigido.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label
                                                    className="form-label"
                                                    htmlFor="materialSubject"
                                                >
                                                    Asignatura
                                                </label>

                                                <select
                                                    id="materialSubject"
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
                                                    <option>Orientación</option>
                                                </select>
                                            </div>

                                            <div className="col-md-6">
                                                <label
                                                    className="form-label"
                                                    htmlFor="materialLevel"
                                                >
                                                    Nivel educativo
                                                </label>

                                                <select
                                                    id="materialLevel"
                                                    className="form-select"
                                                    defaultValue=""
                                                >
                                                    <option value="" disabled>
                                                        Seleccionar nivel
                                                    </option>
                                                    <option>
                                                        Educación parvularia
                                                    </option>
                                                    <option>
                                                        Educación básica
                                                    </option>
                                                    <option>
                                                        Educación media
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-md-6">
                                                <label
                                                    className="form-label"
                                                    htmlFor="materialCourse"
                                                >
                                                    Curso
                                                </label>

                                                <select
                                                    id="materialCourse"
                                                    className="form-select"
                                                    defaultValue=""
                                                >
                                                    <option value="" disabled>
                                                        Seleccionar curso
                                                    </option>
                                                    <option>1° Básico</option>
                                                    <option>2° Básico</option>
                                                    <option>5° Básico</option>
                                                    <option>7° Básico</option>
                                                    <option>8° Básico</option>
                                                </select>
                                            </div>

                                            <div className="col-md-6">
                                                <label
                                                    className="form-label"
                                                    htmlFor="materialObjective"
                                                >
                                                    Objetivo de aprendizaje
                                                </label>

                                                <select
                                                    id="materialObjective"
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
                                        </div>
                                    </section>
                                </div>

                                <aside className="tj-upload-material-sidebar">
                                    <div className="tj-material-preview-panel">
                                        <span className="tj-material-preview-label">
                                            Vista previa
                                        </span>

                                        <div className="tj-material-preview-empty">
                                            <i className="bi bi-file-earmark-arrow-up" />

                                            <strong>
                                                Ningún archivo seleccionado
                                            </strong>

                                            <small>
                                                La vista previa aparecerá aquí.
                                            </small>
                                        </div>
                                    </div>

                                    <div className="tj-material-visibility-box">
                                        <div className="tj-material-box-title">
                                            <span>
                                                <i className="bi bi-eye-fill" />
                                            </span>

                                            <div>
                                                <strong>Visibilidad</strong>
                                                <small>
                                                    Define quién podrá verlo
                                                </small>
                                            </div>
                                        </div>

                                        <label>
                                            <input
                                                type="radio"
                                                name="visibility"
                                                defaultChecked
                                            />

                                            <span>
                                                <strong>
                                                    Toda la comunidad
                                                </strong>

                                                <small>
                                                    Visible para todos los
                                                    colegios
                                                </small>
                                            </span>
                                        </label>

                                        <label>
                                            <input
                                                type="radio"
                                                name="visibility"
                                            />

                                            <span>
                                                <strong>
                                                    Solo docentes
                                                </strong>

                                                <small>
                                                    Recurso para uso pedagógico
                                                </small>
                                            </span>
                                        </label>

                                        <label>
                                            <input
                                                type="radio"
                                                name="visibility"
                                            />

                                            <span>
                                                <strong>Privado</strong>

                                                <small>
                                                    Visible solo para el autor
                                                </small>
                                            </span>
                                        </label>
                                    </div>

                                    <div className="tj-material-options-box">
                                        <div className="tj-material-box-title">
                                            <span>
                                                <i className="bi bi-sliders" />
                                            </span>

                                            <div>
                                                <strong>Opciones</strong>
                                                <small>
                                                    Configuración adicional
                                                </small>
                                            </div>
                                        </div>

                                        <label className="tj-material-switch">
                                            <span>
                                                Permitir descargas
                                            </span>

                                            <input
                                                type="checkbox"
                                                defaultChecked
                                            />
                                        </label>

                                        <label className="tj-material-switch">
                                            <span>
                                                Permitir comentarios
                                            </span>

                                            <input
                                                type="checkbox"
                                                defaultChecked
                                            />
                                        </label>

                                        <label className="tj-material-switch">
                                            <span>
                                                Requiere revisión
                                            </span>

                                            <input type="checkbox" />
                                        </label>
                                    </div>
                                </aside>
                            </div>
                        </div>

                        <div className="modal-footer tj-upload-material-footer">
                            <button
                                type="button"
                                className="btn tj-material-modal-cancel"
                                data-bs-dismiss="modal"
                            >
                                Cancelar
                            </button>

                            <button
                                type="button"
                                className="btn tj-material-modal-draft"
                            >
                                <i className="bi bi-save" />
                                Guardar borrador
                            </button>

                            <button
                                type="button"
                                className="btn tj-material-modal-publish"
                            >
                                <i className="bi bi-cloud-arrow-up-fill" />
                                Publicar material
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}