import { useMemo, useState } from "react";

import "../../../../shared/assets/styles/dashboard/laboratorio-virtual.css";

type CategoriaLaboratorio =
    | "todos"
    | "quimica"
    | "fisica"
    | "ciencias"
    | "economia"
    | "robotica"
    | "programacion";

type Experimento = {
    id: number;
    titulo: string;
    descripcion: string;
    categoria: Exclude<CategoriaLaboratorio, "todos">;
    duracion: string;
    nivel: number;
    imagen: string;
    destacado?: boolean;
};

const categorias = [
    {
        id: "quimica",
        nombre: "Química",
        descripcion: "Explora la materia y sus reacciones",
        icono: "bi-flask-fill",
        clase: "quimica",
    },
    {
        id: "fisica",
        nombre: "Física",
        descripcion: "Comprende las leyes del universo",
        icono: "bi-magnet-fill",
        clase: "fisica",
    },
    {
        id: "ciencias",
        nombre: "Ciencias",
        descripcion: "Descubre los seres vivos",
        icono: "bi-leaf-fill",
        clase: "ciencias",
    },
    {
        id: "economia",
        nombre: "Economía",
        descripcion: "Comprende cómo funciona el mundo",
        icono: "bi-bar-chart-line-fill",
        clase: "economia",
    },
    {
        id: "robotica",
        nombre: "Robótica",
        descripcion: "Diseña, construye y programa",
        icono: "bi-robot",
        clase: "robotica",
    },
    {
        id: "programacion",
        nombre: "Programación",
        descripcion: "Crea soluciones con código",
        icono: "bi-code-slash",
        clase: "programacion",
    },
] as const;

const experimentos: Experimento[] = [
    {
        id: 1,
        titulo: "Reacción ácido-base",
        descripcion: "Neutraliza sustancias y observa los cambios de color.",
        categoria: "quimica",
        duracion: "15 min",
        nivel: 2,
        imagen:
            "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80",
        destacado: true,
    },
    {
        id: 2,
        titulo: "Leyes del movimiento",
        descripcion: "Experimenta con fuerza, masa y aceleración.",
        categoria: "fisica",
        duracion: "20 min",
        nivel: 2,
        imagen:
            "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=900&q=80",
        destacado: true,
    },
    {
        id: 3,
        titulo: "Célula en 3D",
        descripcion: "Explora las partes de una célula animal y vegetal.",
        categoria: "ciencias",
        duracion: "20 min",
        nivel: 3,
        imagen:
            "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=900&q=80",
        destacado: true,
    },
    {
        id: 4,
        titulo: "Oferta y demanda",
        descripcion: "Descubre cómo se forman los precios del mercado.",
        categoria: "economia",
        duracion: "15 min",
        nivel: 2,
        imagen:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
        destacado: true,
    },
    {
        id: 5,
        titulo: "Brazo robótico",
        descripcion: "Construye y programa un brazo robótico funcional.",
        categoria: "robotica",
        duracion: "30 min",
        nivel: 3,
        imagen:
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80",
        destacado: true,
    },
    {
        id: 6,
        titulo: "Crea tu videojuego",
        descripcion: "Programa una aventura interactiva paso a paso.",
        categoria: "programacion",
        duracion: "25 min",
        nivel: 2,
        imagen:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
        destacado: true,
    },
];

const misExperimentos = [
    {
        titulo: "Síntesis de aspirina",
        categoria: "Química",
        progreso: 65,
        icono: "bi-flask",
    },
    {
        titulo: "Circuito en serie",
        categoria: "Física",
        progreso: 40,
        icono: "bi-lightning-charge",
    },
    {
        titulo: "Ecosistema virtual",
        categoria: "Ciencias",
        progreso: 100,
        icono: "bi-tree",
    },
    {
        titulo: "Presupuesto familiar",
        categoria: "Economía",
        progreso: 20,
        icono: "bi-wallet2",
    },
];

export default function LaboratorioVirtualPage() {
    const [categoriaSeleccionada, setCategoriaSeleccionada] =
        useState<CategoriaLaboratorio>("todos");

    const [busqueda, setBusqueda] = useState("");

    const experimentosFiltrados = useMemo(() => {
        return experimentos.filter((experimento) => {
            const coincideCategoria =
                categoriaSeleccionada === "todos" ||
                experimento.categoria === categoriaSeleccionada;

            const coincideBusqueda =
                experimento.titulo
                    .toLowerCase()
                    .includes(busqueda.toLowerCase()) ||
                experimento.descripcion
                    .toLowerCase()
                    .includes(busqueda.toLowerCase());

            return coincideCategoria && coincideBusqueda;
        });
    }, [categoriaSeleccionada, busqueda]);

    return (
        <div className="tj-lab-page">
            {/* CABECERA */}
            <section className="tj-lab-header">
                <div className="tj-lab-title">
                    <span className="tj-lab-title-icon">
                        <i className="bi bi-flask-fill" />
                    </span>

                    <div>
                        <h1>Laboratorios virtuales</h1>

                        <p>
                            Experimenta, descubre y aprende mediante
                            simulaciones interactivas.
                        </p>
                    </div>
                </div>

                <div className="tj-lab-search">
                    <i className="bi bi-search" />

                    <input
                        type="search"
                        value={busqueda}
                        onChange={(event) =>
                            setBusqueda(event.target.value)
                        }
                        placeholder="Buscar experimentos..."
                        aria-label="Buscar experimentos"
                    />
                </div>

                <div className="tj-lab-player-stats">
                    <div>
                        <span className="coin">
                            <i className="bi bi-coin" />
                        </span>

                        <div>
                            <strong>2.450</strong>
                            <small>Puntos TíaJo</small>
                        </div>
                    </div>

                    <div>
                        <span className="badge-icon">
                            <i className="bi bi-star-fill" />
                        </span>

                        <div>
                            <strong>18</strong>
                            <small>Insignias</small>
                        </div>
                    </div>

                    <div>
                        <span className="experiment-icon">
                            <i className="bi bi-calendar-check-fill" />
                        </span>

                        <div>
                            <strong>12</strong>
                            <small>Experimentos</small>
                        </div>
                    </div>
                </div>
            </section>

            {/* CATEGORÍAS */}
            <section className="tj-lab-categories">
                {categorias.map((categoria) => {
                    const activa =
                        categoriaSeleccionada === categoria.id;

                    return (
                        <button
                            key={categoria.id}
                            type="button"
                            className={`tj-lab-category ${categoria.clase} ${
                                activa ? "active" : ""
                            }`}
                            onClick={() =>
                                setCategoriaSeleccionada(
                                    activa
                                        ? "todos"
                                        : categoria.id,
                                )
                            }
                        >
                            <span>
                                <i className={`bi ${categoria.icono}`} />
                            </span>

                            <div>
                                <strong>{categoria.nombre}</strong>
                                <small>{categoria.descripcion}</small>
                            </div>
                        </button>
                    );
                })}
            </section>

            {/* DESTACADOS */}
            <section className="tj-lab-panel">
                <header className="tj-lab-panel-header">
                    <div>
                        <span>Explora y aprende</span>
                        <h2>Experimentos destacados</h2>
                    </div>

                    <button type="button">
                        Ver todos
                        <i className="bi bi-arrow-right" />
                    </button>
                </header>

                {experimentosFiltrados.length > 0 ? (
                    <div className="tj-lab-experiments-grid">
                        {experimentosFiltrados.map((experimento) => (
                            <article
                                className="tj-lab-experiment-card"
                                key={experimento.id}
                            >
                                <div className="tj-lab-experiment-image">
                                    <img
                                        src={experimento.imagen}
                                        alt={experimento.titulo}
                                    />

                                    <span
                                        className={`tj-lab-experiment-category ${experimento.categoria}`}
                                    >
                                        {categorias.find(
                                            (categoria) =>
                                                categoria.id ===
                                                experimento.categoria,
                                        )?.nombre}
                                    </span>

                                    <button
                                        type="button"
                                        aria-label="Más opciones"
                                    >
                                        <i className="bi bi-three-dots-vertical" />
                                    </button>
                                </div>

                                <div className="tj-lab-experiment-body">
                                    <h3>{experimento.titulo}</h3>

                                    <p>{experimento.descripcion}</p>

                                    <div className="tj-lab-experiment-meta">
                                        <span>
                                            <i className="bi bi-clock" />
                                            {experimento.duracion}
                                        </span>

                                        <span>
                                            Nivel
                                            {[1, 2, 3].map((nivel) => (
                                                <i
                                                    key={nivel}
                                                    className={`bi ${
                                                        nivel <=
                                                        experimento.nivel
                                                            ? "bi-star-fill"
                                                            : "bi-star"
                                                    }`}
                                                />
                                            ))}
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="tj-lab-empty">
                        <i className="bi bi-search" />
                        <h3>No encontramos experimentos</h3>
                        <p>
                            Cambia la categoría o utiliza otro término de
                            búsqueda.
                        </p>
                    </div>
                )}
            </section>

            {/* FILA PRINCIPAL */}
            <section className="row g-4">
                {/* MI LABORATORIO */}
                <div className="col-xxl-6">
                    <article className="tj-lab-panel h-100">
                        <header className="tj-lab-panel-header">
                            <div>
                                <span>Tu espacio personal</span>
                                <h2>Mi laboratorio</h2>
                            </div>

                            <div className="tj-lab-tabs">
                                <button type="button" className="active">
                                    Mis experimentos
                                </button>

                                <button type="button">
                                    Guardados
                                </button>
                            </div>
                        </header>

                        <div className="tj-my-lab-grid">
                            {misExperimentos.map((experimento) => (
                                <div
                                    className="tj-my-lab-card"
                                    key={experimento.titulo}
                                >
                                    <div className="tj-my-lab-cover">
                                        <i
                                            className={`bi ${experimento.icono}`}
                                        />

                                        {experimento.progreso === 100 ? (
                                            <span className="completed">
                                                Completado
                                            </span>
                                        ) : (
                                            <span>En progreso</span>
                                        )}
                                    </div>

                                    <div className="tj-my-lab-content">
                                        <strong>
                                            {experimento.titulo}
                                        </strong>

                                        <small>
                                            {experimento.categoria}
                                        </small>

                                        <div className="tj-my-lab-progress">
                                            <span>
                                                {experimento.progreso === 100
                                                    ? "Completado"
                                                    : `${experimento.progreso}% completado`}
                                            </span>

                                            <div className="progress">
                                                <div
                                                    className="progress-bar"
                                                    style={{
                                                        width: `${experimento.progreso}%`,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </article>
                </div>

                {/* DESAFÍOS */}
                <div className="col-xxl-3 col-xl-6">
                    <article className="tj-lab-panel h-100">
                        <header className="tj-lab-panel-header">
                            <div>
                                <span>Supera tus metas</span>
                                <h2>Desafíos del laboratorio</h2>
                            </div>

                            <button type="button">Ver todos</button>
                        </header>

                        <div className="tj-lab-challenges">
                            <div>
                                <span className="challenge-icon fire">
                                    <i className="bi bi-fire" />
                                </span>

                                <div>
                                    <strong>Desafío semanal</strong>
                                    <small>
                                        Crea un puente que soporte 1 kg
                                    </small>

                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            style={{ width: "60%" }}
                                        />
                                    </div>
                                </div>

                                <span className="challenge-reward">
                                    +150
                                </span>
                            </div>

                            <div>
                                <span className="challenge-icon lightning">
                                    <i className="bi bi-lightning-charge-fill" />
                                </span>

                                <div>
                                    <strong>Desafío de química</strong>
                                    <small>
                                        Realiza 5 reacciones diferentes
                                    </small>

                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            style={{ width: "40%" }}
                                        />
                                    </div>
                                </div>

                                <span className="challenge-reward">
                                    +100
                                </span>
                            </div>

                            <div>
                                <span className="challenge-icon robot">
                                    <i className="bi bi-robot" />
                                </span>

                                <div>
                                    <strong>Desafío de robótica</strong>
                                    <small>
                                        Programa un robot sin colisiones
                                    </small>

                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            style={{ width: "33%" }}
                                        />
                                    </div>
                                </div>

                                <span className="challenge-reward">
                                    +120
                                </span>
                            </div>

                            <div>
                                <span className="challenge-icon code">
                                    <i className="bi bi-code-square" />
                                </span>

                                <div>
                                    <strong>Desafío de programación</strong>
                                    <small>
                                        Completa un juego sin errores
                                    </small>

                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            style={{ width: "10%" }}
                                        />
                                    </div>
                                </div>

                                <span className="challenge-reward">
                                    +150
                                </span>
                            </div>
                        </div>
                    </article>
                </div>

                {/* EN VIVO */}
                <div className="col-xxl-3 col-xl-6">
                    <article className="tj-lab-panel h-100">
                        <header className="tj-lab-panel-header">
                            <div>
                                <span>Clases interactivas</span>
                                <h2>Laboratorios en vivo</h2>
                            </div>

                            <button type="button">
                                Ver calendario
                            </button>
                        </header>

                        <div className="tj-live-labs">
                            <article>
                                <div className="tj-live-image chemistry">
                                    <span>EN VIVO</span>

                                    <i className="bi bi-flask-fill" />

                                    <div>
                                        <strong>
                                            Explorando reacciones químicas
                                        </strong>
                                        <small>Con la profe Ana</small>
                                    </div>

                                    <span className="viewers">
                                        <i className="bi bi-people-fill" />
                                        128
                                    </span>
                                </div>
                            </article>

                            <article>
                                <div className="tj-live-image astronomy">
                                    <span>PRÓXIMO</span>

                                    <i className="bi bi-globe-americas" />

                                    <div>
                                        <strong>
                                            Física del sistema solar
                                        </strong>
                                        <small>Con el profe Luis</small>
                                    </div>

                                    <span className="viewers">
                                        En 15 min
                                    </span>
                                </div>
                            </article>
                        </div>
                    </article>
                </div>
            </section>

            {/* HERRAMIENTAS */}
            <section className="tj-lab-panel tj-lab-tools-panel">
                <header className="tj-lab-panel-header">
                    <div>
                        <span>Recursos de apoyo</span>
                        <h2>Herramientas del laboratorio</h2>
                    </div>
                </header>

                <div className="tj-lab-tools">
                    {[
                        ["bi-grid-3x3-gap-fill", "Tabla periódica"],
                        ["bi-calculator-fill", "Calculadora científica"],
                        ["bi-stopwatch-fill", "Cronómetro"],
                        ["bi-journal-bookmark-fill", "Cuaderno de notas"],
                        ["bi-rulers", "Reglas y unidades"],
                        ["bi-camera-fill", "Cámara 3D"],
                        ["bi-bar-chart-fill", "Gráficos"],
                        ["bi-bookshelf", "Biblioteca"],
                        ["bi-file-earmark-arrow-down", "Exportar datos"],
                    ].map(([icono, nombre]) => (
                        <button type="button" key={nombre}>
                            <span>
                                <i className={`bi ${icono}`} />
                            </span>

                            <strong>{nombre}</strong>
                        </button>
                    ))}
                </div>
            </section>

            {/* CONSEJO */}
            <aside className="tj-lab-tip">
                <span className="tj-lab-tip-avatar">
                    <i className="bi bi-emoji-smile-fill" />
                </span>

                <div>
                    <strong>Consejo del profe TíaJo</strong>

                    <p>
                        No tengas miedo de equivocarte. Cada experimento es una
                        oportunidad para descubrir algo nuevo.
                    </p>
                </div>

                <button type="button" aria-label="Cerrar consejo">
                    <i className="bi bi-x-lg" />
                </button>
            </aside>
        </div>
    );
}