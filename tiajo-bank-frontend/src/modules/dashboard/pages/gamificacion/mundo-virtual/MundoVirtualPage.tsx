import { useMemo, useState } from "react";

import "../../../../../shared/assets/styles/dashboard/mundo-virtual.css";

type EstadoMundo = "publicado" | "mantenimiento" | "borrador" | "programado";
type EstadoServidor = "online" | "degradado" | "offline";

type MundoVirtual = {
    id: number;
    nombre: string;
    descripcion: string;
    escenaUnity: string;
    version: string;
    estado: EstadoMundo;
    jugadores: number;
    capacidad: number;
    colegios: number;
    eventos: number;
    miniatura: string;
};

const mundos: MundoVirtual[] = [
    {
        id: 1,
        nombre: "Bosque del Conocimiento",
        descripcion:
            "Zona principal con biblioteca, misiones, NPC y actividades educativas.",
        escenaUnity: "World_Forest_Main",
        version: "1.8.4",
        estado: "publicado",
        jugadores: 684,
        capacidad: 1200,
        colegios: 42,
        eventos: 7,
        miniatura:
            "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: 2,
        nombre: "Ciudad TíaJo",
        descripcion:
            "Campus urbano con banco, tienda, radio escolar y espacios comunitarios.",
        escenaUnity: "World_Tiajo_City",
        version: "1.5.2",
        estado: "publicado",
        jugadores: 438,
        capacidad: 900,
        colegios: 31,
        eventos: 4,
        miniatura:
            "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: 3,
        nombre: "Laboratorio Galáctico",
        descripcion:
            "Mundo de ciencias, robótica, exploración espacial y experimentos.",
        escenaUnity: "World_Space_Lab",
        version: "0.9.8",
        estado: "borrador",
        jugadores: 0,
        capacidad: 600,
        colegios: 0,
        eventos: 2,
        miniatura:
            "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80",
    },
];

function getEstadoMundo(estado: EstadoMundo): string {
    const estados: Record<EstadoMundo, string> = {
        publicado: "Publicado",
        mantenimiento: "En mantenimiento",
        borrador: "Borrador",
        programado: "Programado",
    };

    return estados[estado];
}

export default function MundoVirtualPage() {
    const [busqueda, setBusqueda] = useState("");
    const [estado, setEstado] = useState("todos");
    const [servidor] = useState<EstadoServidor>("online");

    const mundosFiltrados = useMemo(() => {
        return mundos.filter((mundo) => {
            const coincideBusqueda =
                mundo.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                mundo.escenaUnity
                    .toLowerCase()
                    .includes(busqueda.toLowerCase());

            const coincideEstado =
                estado === "todos" || mundo.estado === estado;

            return coincideBusqueda && coincideEstado;
        });
    }, [busqueda, estado]);

    return (
        <>
            <div className="tj-world-page">
                <section className="tj-world-hero">
                    <div>
                        <span className="tj-world-eyebrow">
                            <i className="bi bi-globe2" />
                            Experiencia estudiantil · Unity
                        </span>

                        <h1>Mundo virtual escolar</h1>

                        <p>
                            Administra mundos, escenas, servidores, eventos y
                            contenido sincronizado con el cliente desarrollado
                            en Unity.
                        </p>
                    </div>

                    <div className="tj-world-hero-actions">
                        <button
                            type="button"
                            className="btn tj-world-secondary-button"
                        >
                            <i className="bi bi-box-arrow-up-right" />
                            Abrir Unity WebGL
                        </button>

                        <button
                            type="button"
                            className="btn tj-world-primary-button"
                            data-bs-toggle="modal"
                            data-bs-target="#createWorldModal"
                        >
                            <i className="bi bi-plus-circle-fill" />
                            Registrar mundo
                        </button>
                    </div>
                </section>

                <section className="row g-3 mb-4">
                    <div className="col-xl-3 col-md-6">
                        <div className="tj-world-stat-card">
                            <span className="green">
                                <i className="bi bi-people-fill" />
                            </span>

                            <div>
                                <small>Jugadores conectados</small>
                                <strong>1.122</strong>
                                <p>En todos los mundos</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <div className="tj-world-stat-card">
                            <span className="blue">
                                <i className="bi bi-globe-americas" />
                            </span>

                            <div>
                                <small>Mundos publicados</small>
                                <strong>2</strong>
                                <p>Disponibles en Unity</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <div className="tj-world-stat-card">
                            <span className="yellow">
                                <i className="bi bi-controller" />
                            </span>

                            <div>
                                <small>Sesiones de hoy</small>
                                <strong>3.846</strong>
                                <p>+14% respecto de ayer</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <div className="tj-world-stat-card">
                            <span className="purple">
                                <i className="bi bi-hdd-network-fill" />
                            </span>

                            <div>
                                <small>Estado del servicio</small>
                                <strong className={`status-${servidor}`}>
                                    Operativo
                                </strong>
                                <p>Latencia promedio: 48 ms</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="tj-unity-status">
                    <div className="tj-unity-status-main">
                        <span className="tj-unity-logo">
                            <i className="bi bi-unity" />
                        </span>

                        <div>
                            <span>Integración activa</span>
                            <h2>Unity World Service</h2>

                            <p>
                                El panel administra la configuración. Unity
                                renderiza el mundo y consume los datos mediante
                                la API de TíaJo Bank.
                            </p>
                        </div>
                    </div>

                    <div className="tj-unity-status-data">
                        <div>
                            <small>Cliente</small>
                            <strong>Unity 6</strong>
                        </div>

                        <div>
                            <small>Build WebGL</small>
                            <strong>v1.8.4</strong>
                        </div>

                        <div>
                            <small>API</small>
                            <strong className="online">Conectada</strong>
                        </div>

                        <div>
                            <small>Última sincronización</small>
                            <strong>Hace 2 min</strong>
                        </div>
                    </div>

                    <button type="button">
                        <i className="bi bi-arrow-repeat" />
                        Sincronizar
                    </button>
                </section>

                <section className="tj-world-admin-modules">
                    <button type="button">
                        <span className="blue">
                            <i className="bi bi-server" />
                        </span>

                        <div>
                            <strong>Servidores e instancias</strong>
                            <small>Capacidad, regiones y estado</small>
                        </div>

                        <i className="bi bi-chevron-right" />
                    </button>

                    <button type="button">
                        <span className="purple">
                            <i className="bi bi-boxes" />
                        </span>

                        <div>
                            <strong>Catálogo de contenido</strong>
                            <small>Objetos, NPC, portales y edificios</small>
                        </div>

                        <i className="bi bi-chevron-right" />
                    </button>

                    <button type="button">
                        <span className="yellow">
                            <i className="bi bi-flag-fill" />
                        </span>

                        <div>
                            <strong>Misiones y eventos</strong>
                            <small>Reglas consumidas por Unity</small>
                        </div>

                        <i className="bi bi-chevron-right" />
                    </button>

                    <button type="button">
                        <span className="green">
                            <i className="bi bi-shield-check" />
                        </span>

                        <div>
                            <strong>Moderación</strong>
                            <small>Reportes, chat y sanciones</small>
                        </div>

                        <i className="bi bi-chevron-right" />
                    </button>
                </section>

                <section className="tj-worlds-section">
                    <header className="tj-world-section-header">
                        <div>
                            <span>Escenas registradas</span>
                            <h2>Mundos de Unity</h2>

                            <p>
                                Configura qué escenas y builds estarán
                                disponibles para cada colegio.
                            </p>
                        </div>

                        <div className="tj-world-filters">
                            <div>
                                <i className="bi bi-search" />

                                <input
                                    type="search"
                                    value={busqueda}
                                    onChange={(event) =>
                                        setBusqueda(event.target.value)
                                    }
                                    placeholder="Buscar mundo o escena Unity"
                                />
                            </div>

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
                                <option value="mantenimiento">
                                    En mantenimiento
                                </option>
                                <option value="borrador">Borradores</option>
                                <option value="programado">Programados</option>
                            </select>
                        </div>
                    </header>

                    <div className="row g-4">
                        {mundosFiltrados.map((mundo) => {
                            const porcentaje =
                                mundo.capacidad > 0
                                    ? Math.round(
                                          (mundo.jugadores /
                                              mundo.capacidad) *
                                              100,
                                      )
                                    : 0;

                            return (
                                <div
                                    className="col-xxl-4 col-xl-6"
                                    key={mundo.id}
                                >
                                    <article className="tj-world-card">
                                        <div className="tj-world-card-image">
                                            <img
                                                src={mundo.miniatura}
                                                alt={mundo.nombre}
                                            />

                                            <span
                                                className={`tj-world-status ${mundo.estado}`}
                                            >
                                                <i className="bi bi-circle-fill" />
                                                {getEstadoMundo(mundo.estado)}
                                            </span>

                                            <span className="tj-world-version">
                                                Unity {mundo.version}
                                            </span>

                                            <button
                                                type="button"
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
                                                        <i className="bi bi-pencil me-2" />
                                                        Editar configuración
                                                    </button>
                                                </li>

                                                <li>
                                                    <button
                                                        type="button"
                                                        className="dropdown-item rounded-3"
                                                    >
                                                        <i className="bi bi-controller me-2" />
                                                        Abrir cliente
                                                    </button>
                                                </li>

                                                <li>
                                                    <button
                                                        type="button"
                                                        className="dropdown-item rounded-3"
                                                    >
                                                        <i className="bi bi-arrow-repeat me-2" />
                                                        Sincronizar
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
                                                        <i className="bi bi-wrench-adjustable me-2" />
                                                        Activar mantenimiento
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="tj-world-card-body">
                                            <span className="tj-world-scene">
                                                <i className="bi bi-unity" />
                                                {mundo.escenaUnity}
                                            </span>

                                            <h3>{mundo.nombre}</h3>
                                            <p>{mundo.descripcion}</p>

                                            <div className="tj-world-card-data">
                                                <div>
                                                    <i className="bi bi-people-fill" />
                                                    <span>Jugadores</span>
                                                    <strong>
                                                        {mundo.jugadores}
                                                    </strong>
                                                </div>

                                                <div>
                                                    <i className="bi bi-buildings-fill" />
                                                    <span>Colegios</span>
                                                    <strong>
                                                        {mundo.colegios}
                                                    </strong>
                                                </div>

                                                <div>
                                                    <i className="bi bi-calendar-event-fill" />
                                                    <span>Eventos</span>
                                                    <strong>
                                                        {mundo.eventos}
                                                    </strong>
                                                </div>
                                            </div>

                                            <div className="tj-world-capacity">
                                                <div>
                                                    <span>
                                                        Capacidad del mundo
                                                    </span>

                                                    <strong>
                                                        {mundo.jugadores}/
                                                        {mundo.capacidad}
                                                    </strong>
                                                </div>

                                                <div className="progress">
                                                    <div
                                                        className="progress-bar"
                                                        style={{
                                                            width: `${Math.min(
                                                                porcentaje,
                                                                100,
                                                            )}%`,
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <footer>
                                                <button type="button">
                                                    Configurar
                                                </button>

                                                <button type="button">
                                                    Ver operaciones
                                                    <i className="bi bi-arrow-right" />
                                                </button>
                                            </footer>
                                        </div>
                                    </article>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <section className="row g-4">
                    <div className="col-xl-8">
                        <article className="tj-live-operations">
                            <header className="tj-world-panel-header">
                                <div>
                                    <span>Supervisión en tiempo real</span>
                                    <h2>Operaciones del mundo</h2>

                                    <p>
                                        Instancias, conexiones y actividad
                                        reportada desde Unity.
                                    </p>
                                </div>

                                <button type="button">
                                    Ver consola completa
                                    <i className="bi bi-arrow-right" />
                                </button>
                            </header>

                            <div className="tj-instance-table">
                                <div className="tj-instance-row heading">
                                    <span>Instancia</span>
                                    <span>Mundo</span>
                                    <span>Región</span>
                                    <span>Jugadores</span>
                                    <span>Latencia</span>
                                    <span>Estado</span>
                                    <span />
                                </div>

                                {[
                                    {
                                        id: "INST-CL-001",
                                        world: "Bosque del Conocimiento",
                                        region: "Santiago",
                                        players: "284 / 300",
                                        latency: "42 ms",
                                        status: "online",
                                    },
                                    {
                                        id: "INST-CL-002",
                                        world: "Bosque del Conocimiento",
                                        region: "Santiago",
                                        players: "267 / 300",
                                        latency: "51 ms",
                                        status: "online",
                                    },
                                    {
                                        id: "INST-BR-001",
                                        world: "Ciudad TíaJo",
                                        region: "São Paulo",
                                        players: "238 / 300",
                                        latency: "68 ms",
                                        status: "degraded",
                                    },
                                    {
                                        id: "INST-CL-003",
                                        world: "Ciudad TíaJo",
                                        region: "Santiago",
                                        players: "200 / 300",
                                        latency: "39 ms",
                                        status: "online",
                                    },
                                ].map((instance) => (
                                    <div
                                        className="tj-instance-row"
                                        key={instance.id}
                                    >
                                        <strong>{instance.id}</strong>
                                        <span>{instance.world}</span>
                                        <span>{instance.region}</span>
                                        <span>{instance.players}</span>
                                        <span>{instance.latency}</span>

                                        <span
                                            className={`tj-instance-status ${instance.status}`}
                                        >
                                            <i className="bi bi-circle-fill" />
                                            {instance.status === "online"
                                                ? "Operativa"
                                                : "Degradada"}
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
                        <article className="tj-world-events">
                            <header className="tj-world-panel-header">
                                <div>
                                    <span>Contenido dinámico</span>
                                    <h2>Próximos eventos</h2>

                                    <p>
                                        Eventos que Unity cargará desde la API.
                                    </p>
                                </div>
                            </header>

                            <div className="tj-world-event-list">
                                <div>
                                    <span className="science">
                                        <i className="bi bi-flask-fill" />
                                    </span>

                                    <div>
                                        <strong>
                                            Feria científica virtual
                                        </strong>

                                        <small>
                                            Bosque del Conocimiento · 20 jul.
                                        </small>
                                    </div>

                                    <span className="active">Activo</span>
                                </div>

                                <div>
                                    <span className="radio">
                                        <i className="bi bi-broadcast" />
                                    </span>

                                    <div>
                                        <strong>Radio escolar en vivo</strong>

                                        <small>
                                            Ciudad TíaJo · 22 jul.
                                        </small>
                                    </div>

                                    <span>Programado</span>
                                </div>

                                <div>
                                    <span className="space">
                                        <i className="bi bi-rocket-takeoff-fill" />
                                    </span>

                                    <div>
                                        <strong>
                                            Misión exploradores
                                        </strong>

                                        <small>
                                            Laboratorio Galáctico · 01 ago.
                                        </small>
                                    </div>

                                    <span>Borrador</span>
                                </div>
                            </div>

                            <button
                                type="button"
                                className="tj-world-events-button"
                            >
                                Administrar eventos
                                <i className="bi bi-arrow-right" />
                            </button>
                        </article>
                    </div>
                </section>

                <section className="tj-world-sync-section">
                    <header className="tj-world-panel-header">
                        <div>
                            <span>Datos compartidos</span>
                            <h2>Sincronización React, Laravel y Unity</h2>

                            <p>
                                Estado de las principales entidades consumidas
                                por el cliente.
                            </p>
                        </div>
                    </header>

                    <div className="tj-sync-grid">
                        {[
                            {
                                name: "Personajes Mi Ranita",
                                count: "7.842",
                                icon: "bi-person-bounding-box",
                                status: "Sincronizado",
                            },
                            {
                                name: "Objetos e inventario",
                                count: "1.284",
                                icon: "bi-backpack-fill",
                                status: "Sincronizado",
                            },
                            {
                                name: "Misiones activas",
                                count: "42",
                                icon: "bi-flag-fill",
                                status: "Sincronizado",
                            },
                            {
                                name: "NPC y diálogos",
                                count: "78",
                                icon: "bi-robot",
                                status: "3 pendientes",
                            },
                            {
                                name: "Tiendas y economía",
                                count: "26",
                                icon: "bi-shop",
                                status: "Sincronizado",
                            },
                            {
                                name: "Eventos de temporada",
                                count: "7",
                                icon: "bi-calendar2-star-fill",
                                status: "Sincronizado",
                            },
                        ].map((item) => (
                            <article key={item.name}>
                                <span>
                                    <i className={`bi ${item.icon}`} />
                                </span>

                                <div>
                                    <small>{item.name}</small>
                                    <strong>{item.count}</strong>
                                </div>

                                <span
                                    className={
                                        item.status.includes("pendientes")
                                            ? "pending"
                                            : "synced"
                                    }
                                >
                                    {item.status}
                                </span>
                            </article>
                        ))}
                    </div>
                </section>
            </div>

            <div
                className="modal fade"
                id="createWorldModal"
                tabIndex={-1}
                aria-labelledby="createWorldModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content tj-create-world-modal">
                        <div className="modal-header">
                            <div>
                                <span>
                                    <i className="bi bi-unity" />
                                    Registro de escena Unity
                                </span>

                                <h2
                                    className="modal-title"
                                    id="createWorldModalLabel"
                                >
                                    Registrar mundo virtual
                                </h2>

                                <p>
                                    Vincula una escena o build de Unity con la
                                    plataforma TíaJo Bank.
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
                            <div className="tj-create-world-layout">
                                <div className="tj-create-world-main">
                                    <section className="tj-world-form-section">
                                        <header>
                                            <span>
                                                <i className="bi bi-card-text" />
                                            </span>

                                            <div>
                                                <h3>Información general</h3>
                                                <p>
                                                    Define cómo aparecerá el
                                                    mundo en la plataforma.
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
                                                    placeholder="Ej.: Bosque del Conocimiento"
                                                />
                                            </div>

                                            <div className="col-12">
                                                <label className="form-label">
                                                    Descripción
                                                </label>

                                                <textarea
                                                    className="form-control"
                                                    rows={4}
                                                    placeholder="Describe la experiencia y propósito educativo..."
                                                />
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    Identificador de escena
                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="World_Forest_Main"
                                                />
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    Versión del build
                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="1.0.0"
                                                />
                                            </div>
                                        </div>
                                    </section>

                                    <section className="tj-world-form-section">
                                        <header>
                                            <span>
                                                <i className="bi bi-link-45deg" />
                                            </span>

                                            <div>
                                                <h3>Integración Unity</h3>
                                                <p>
                                                    Configura la dirección y
                                                    compatibilidad del cliente.
                                                </p>
                                            </div>
                                        </header>

                                        <div className="row g-3">
                                            <div className="col-12">
                                                <label className="form-label">
                                                    URL del build WebGL
                                                </label>

                                                <input
                                                    type="url"
                                                    className="form-control"
                                                    placeholder="https://world.tiajo-bank.cl/build/"
                                                />
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    Plataforma
                                                </label>

                                                <select
                                                    className="form-select"
                                                    defaultValue="webgl"
                                                >
                                                    <option value="webgl">
                                                        Unity WebGL
                                                    </option>
                                                    <option value="windows">
                                                        Windows
                                                    </option>
                                                    <option value="android">
                                                        Android
                                                    </option>
                                                    <option value="multiple">
                                                        Multiplataforma
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    Región principal
                                                </label>

                                                <select
                                                    className="form-select"
                                                    defaultValue="cl"
                                                >
                                                    <option value="cl">
                                                        Chile
                                                    </option>
                                                    <option value="br">
                                                        Brasil
                                                    </option>
                                                    <option value="us">
                                                        Estados Unidos
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </section>

                                    <section className="tj-world-form-section">
                                        <header>
                                            <span>
                                                <i className="bi bi-sliders" />
                                            </span>

                                            <div>
                                                <h3>Acceso y capacidad</h3>
                                                <p>
                                                    Define quiénes podrán
                                                    acceder.
                                                </p>
                                            </div>
                                        </header>

                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    Capacidad máxima
                                                </label>

                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    defaultValue={1200}
                                                />
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label">
                                                    Acceso
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
                                                    <option value="privado">
                                                        Acceso privado
                                                    </option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="tj-world-switches">
                                            <label>
                                                <span>Permitir chat</span>
                                                <input
                                                    type="checkbox"
                                                    defaultChecked
                                                />
                                            </label>

                                            <label>
                                                <span>Permitir comercio</span>
                                                <input type="checkbox" />
                                            </label>

                                            <label>
                                                <span>Activar misiones</span>
                                                <input
                                                    type="checkbox"
                                                    defaultChecked
                                                />
                                            </label>

                                            <label>
                                                <span>Activar moderación</span>
                                                <input
                                                    type="checkbox"
                                                    defaultChecked
                                                />
                                            </label>
                                        </div>
                                    </section>
                                </div>

                                <aside className="tj-create-world-sidebar">
                                    <div className="tj-world-build-preview">
                                        <span>Estado del build</span>

                                        <div>
                                            <i className="bi bi-unity" />

                                            <strong>
                                                Sin build conectado
                                            </strong>

                                            <small>
                                                Ingresa la URL del cliente
                                                Unity.
                                            </small>
                                        </div>
                                    </div>

                                    <div className="tj-world-api-config">
                                        <header>
                                            <span>
                                                <i className="bi bi-braces" />
                                            </span>

                                            <div>
                                                <strong>
                                                    API de configuración
                                                </strong>

                                                <small>
                                                    Datos consumidos por Unity
                                                </small>
                                            </div>
                                        </header>

                                        <label>
                                            <span>Personajes</span>
                                            <input
                                                type="checkbox"
                                                defaultChecked
                                            />
                                        </label>

                                        <label>
                                            <span>Inventario</span>
                                            <input
                                                type="checkbox"
                                                defaultChecked
                                            />
                                        </label>

                                        <label>
                                            <span>Misiones</span>
                                            <input
                                                type="checkbox"
                                                defaultChecked
                                            />
                                        </label>

                                        <label>
                                            <span>Economía</span>
                                            <input
                                                type="checkbox"
                                                defaultChecked
                                            />
                                        </label>
                                    </div>

                                    <div className="tj-world-warning">
                                        <i className="bi bi-info-circle-fill" />

                                        <p>
                                            La escena debe existir dentro del
                                            build de Unity. Este formulario no
                                            crea ni modifica escenas.
                                        </p>
                                    </div>
                                </aside>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn tj-world-modal-cancel"
                                data-bs-dismiss="modal"
                            >
                                Cancelar
                            </button>

                            <button
                                type="button"
                                className="btn tj-world-modal-test"
                            >
                                <i className="bi bi-plug-fill" />
                                Probar conexión
                            </button>

                            <button
                                type="button"
                                className="btn tj-world-modal-save"
                            >
                                <i className="bi bi-check-circle-fill" />
                                Registrar mundo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}