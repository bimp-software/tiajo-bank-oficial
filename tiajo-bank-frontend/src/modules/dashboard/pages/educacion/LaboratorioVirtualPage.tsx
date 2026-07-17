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

type Nivel = 0 | 1 | 2 | 3;

type Experimento = {
    id: number;
    titulo: string;
    descripcion: string;
    categoria: Exclude<CategoriaLaboratorio, "todos">;
    duracion: string;
    nivel: 1 | 2 | 3;
    imagen: string;
    destacado?: boolean;
};

type Desafio = {
    id: string;
    titulo: string;
    descripcion: string;
    actual: number;
    total: number;
    recompensa: number;
    icono: string;
    clase: "fire" | "lightning" | "robot" | "code" | "magnet" | "leaf";
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

const nivelFiltros: { id: Nivel; nombre: string }[] = [
    { id: 0, nombre: "Todos los niveles" },
    { id: 1, nombre: "Principiante" },
    { id: 2, nombre: "Intermedio" },
    { id: 3, nombre: "Avanzado" },
];

const nivelNombre = (nivel: number) =>
    nivel === 1 ? "Principiante" : nivel === 2 ? "Intermedio" : "Avanzado";

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
    {
        id: 7,
        titulo: "Electrólisis del agua",
        descripcion: "Separa el agua en hidrógeno y oxígeno con corriente eléctrica.",
        categoria: "quimica",
        duracion: "10 min",
        nivel: 1,
        imagen:
            "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: 8,
        titulo: "Ondas y frecuencias",
        descripcion: "Manipula amplitud y frecuencia para entender el sonido.",
        categoria: "fisica",
        duracion: "25 min",
        nivel: 3,
        imagen:
            "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: 9,
        titulo: "Fotosíntesis interactiva",
        descripcion: "Descubre cómo las plantas transforman luz en energía.",
        categoria: "ciencias",
        duracion: "12 min",
        nivel: 1,
        imagen:
            "https://images.unsplash.com/photo-1502252430442-aac78f397426?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: 10,
        titulo: "Presupuesto personal",
        descripcion: "Organiza ingresos y gastos para cumplir una meta de ahorro.",
        categoria: "economia",
        duracion: "10 min",
        nivel: 1,
        imagen:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: 11,
        titulo: "Sensores y actuadores",
        descripcion: "Conecta sensores a un circuito y observa su respuesta.",
        categoria: "robotica",
        duracion: "18 min",
        nivel: 2,
        imagen:
            "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: 12,
        titulo: "Estructuras de datos",
        descripcion: "Visualiza pilas, colas y listas mientras programas.",
        categoria: "programacion",
        duracion: "30 min",
        nivel: 3,
        imagen:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
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

const desafiosIniciales: Desafio[] = [
    {
        id: "semanal",
        titulo: "Desafío semanal",
        descripcion: "Crea un puente que soporte 1 kg de peso",
        actual: 3,
        total: 5,
        recompensa: 150,
        icono: "bi-fire",
        clase: "fire",
    },
    {
        id: "quimica",
        titulo: "Desafío de química",
        descripcion: "Realiza 5 reacciones diferentes",
        actual: 2,
        total: 5,
        recompensa: 100,
        icono: "bi-lightning-charge-fill",
        clase: "lightning",
    },
    {
        id: "robotica",
        titulo: "Desafío de robótica",
        descripcion: "Programa un robot para evitar obstáculos",
        actual: 1,
        total: 3,
        recompensa: 120,
        icono: "bi-robot",
        clase: "robot",
    },
    {
        id: "programacion",
        titulo: "Desafío de programación",
        descripcion: "Completa un juego sin errores",
        actual: 0,
        total: 1,
        recompensa: 150,
        icono: "bi-code-square",
        clase: "code",
    },
    {
        id: "fisica",
        titulo: "Desafío de física",
        descripcion: "Completa 3 experimentos de física",
        actual: 2,
        total: 3,
        recompensa: 130,
        icono: "bi-magnet-fill",
        clase: "magnet",
    },
    {
        id: "ciencias",
        titulo: "Desafío de ciencias",
        descripcion: "Documenta un ecosistema completo",
        actual: 1,
        total: 1,
        recompensa: 200,
        icono: "bi-leaf-fill",
        clase: "leaf",
    },
];

const herramientas = [
    { id: "tabla", icono: "bi-grid-3x3-gap-fill", nombre: "Tabla periódica" },
    { id: "calculadora", icono: "bi-calculator-fill", nombre: "Calculadora científica" },
    { id: "cronometro", icono: "bi-stopwatch-fill", nombre: "Cronómetro" },
    { id: "cuaderno", icono: "bi-journal-bookmark-fill", nombre: "Cuaderno de notas" },
    { id: "reglas", icono: "bi-rulers", nombre: "Reglas y unidades" },
    { id: "camara", icono: "bi-camera-fill", nombre: "Cámara 3D" },
    { id: "graficos", icono: "bi-bar-chart-fill", nombre: "Gráficos" },
    { id: "biblioteca", icono: "bi-bookshelf", nombre: "Biblioteca" },
    { id: "exportar", icono: "bi-file-earmark-arrow-down", nombre: "Exportar datos" },
] as const;

export default function LaboratorioVirtualPage() {
    const [categoriaSeleccionada, setCategoriaSeleccionada] =
        useState<CategoriaLaboratorio>("todos");

    const [nivelSeleccionado, setNivelSeleccionado] = useState<Nivel>(0);

    const [busqueda, setBusqueda] = useState("");

    const [mostrarTodos, setMostrarTodos] = useState(false);

    const [guardados, setGuardados] = useState<Set<number>>(new Set());

    const [pestanaLaboratorio, setPestanaLaboratorio] = useState<
        "mis" | "guardados"
    >("mis");

    const [mostrarTodosDesafios, setMostrarTodosDesafios] = useState(false);

    const [reclamados, setReclamados] = useState<Set<string>>(new Set());

    const [herramientasActivas, setHerramientasActivas] = useState<Set<string>>(
        new Set(),
    );

    const [mostrarConsejo, setMostrarConsejo] = useState(true);

    const experimentosFiltrados = useMemo(() => {
        return experimentos.filter((experimento) => {
            const coincideCategoria =
                categoriaSeleccionada === "todos" ||
                experimento.categoria === categoriaSeleccionada;

            const coincideNivel =
                nivelSeleccionado === 0 ||
                experimento.nivel === nivelSeleccionado;

            const coincideBusqueda =
                experimento.titulo
                    .toLowerCase()
                    .includes(busqueda.toLowerCase()) ||
                experimento.descripcion
                    .toLowerCase()
                    .includes(busqueda.toLowerCase());

            const coincideDestacado = mostrarTodos || experimento.destacado;

            return (
                coincideCategoria &&
                coincideNivel &&
                coincideBusqueda &&
                coincideDestacado
            );
        });
    }, [categoriaSeleccionada, nivelSeleccionado, busqueda, mostrarTodos]);

    const experimentosGuardados = useMemo(
        () => experimentos.filter((experimento) => guardados.has(experimento.id)),
        [guardados],
    );

    const desafiosVisibles = mostrarTodosDesafios
        ? desafiosIniciales
        : desafiosIniciales.slice(0, 4);

    const alternarGuardado = (id: number) => {
        setGuardados((anterior) => {
            const siguiente = new Set(anterior);
            if (siguiente.has(id)) {
                siguiente.delete(id);
            } else {
                siguiente.add(id);
            }
            return siguiente;
        });
    };

    const reclamarRecompensa = (id: string) => {
        setReclamados((anterior) => {
            const siguiente = new Set(anterior);
            siguiente.add(id);
            return siguiente;
        });
    };

    const alternarHerramienta = (id: string) => {
        setHerramientasActivas((anterior) => {
            const siguiente = new Set(anterior);
            if (siguiente.has(id)) {
                siguiente.delete(id);
            } else {
                siguiente.add(id);
            }
            return siguiente;
        });
    };

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

            {/* FILTRO POR NIVEL */}
            <section className="tj-lab-level-filters">
                {nivelFiltros.map((nivel) => (
                    <button
                        key={nivel.id}
                        type="button"
                        className={
                            nivelSeleccionado === nivel.id ? "active" : ""
                        }
                        onClick={() => setNivelSeleccionado(nivel.id)}
                    >
                        {nivel.nombre}
                    </button>
                ))}
            </section>

            {/* DESTACADOS */}
            <section className="tj-lab-panel">
                <header className="tj-lab-panel-header">
                    <div>
                        <span>Explora y aprende</span>
                        <h2>
                            {mostrarTodos
                                ? "Todos los experimentos"
                                : "Experimentos destacados"}
                        </h2>
                    </div>

                    <button
                        type="button"
                        onClick={() => setMostrarTodos((anterior) => !anterior)}
                    >
                        {mostrarTodos ? "Ver destacados" : "Ver todos"}
                        <i
                            className={`bi ${
                                mostrarTodos
                                    ? "bi-arrow-return-left"
                                    : "bi-arrow-right"
                            }`}
                        />
                    </button>
                </header>

                {experimentosFiltrados.length > 0 ? (
                    <div className="tj-lab-experiments-grid">
                        {experimentosFiltrados.map((experimento) => {
                            const estaGuardado = guardados.has(experimento.id);

                            return (
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
                                            className={`tj-lab-save-btn ${
                                                estaGuardado ? "active" : ""
                                            }`}
                                            aria-pressed={estaGuardado}
                                            aria-label={
                                                estaGuardado
                                                    ? "Quitar de guardados"
                                                    : "Guardar experimento"
                                            }
                                            onClick={() =>
                                                alternarGuardado(experimento.id)
                                            }
                                        >
                                            <i
                                                className={`bi ${
                                                    estaGuardado
                                                        ? "bi-bookmark-fill"
                                                        : "bi-bookmark"
                                                }`}
                                            />
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

                                            <span
                                                title={nivelNombre(
                                                    experimento.nivel,
                                                )}
                                            >
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
                            );
                        })}
                    </div>
                ) : (
                    <div className="tj-lab-empty">
                        <i className="bi bi-search" />
                        <h3>No encontramos experimentos</h3>
                        <p>
                            Cambia la categoría, el nivel o utiliza otro
                            término de búsqueda.
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
                                <button
                                    type="button"
                                    className={
                                        pestanaLaboratorio === "mis"
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() =>
                                        setPestanaLaboratorio("mis")
                                    }
                                >
                                    Mis experimentos
                                </button>

                                <button
                                    type="button"
                                    className={
                                        pestanaLaboratorio === "guardados"
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() =>
                                        setPestanaLaboratorio("guardados")
                                    }
                                >
                                    Guardados
                                    {experimentosGuardados.length > 0 && (
                                        <span className="tj-lab-tab-count">
                                            {experimentosGuardados.length}
                                        </span>
                                    )}
                                </button>
                            </div>
                        </header>

                        {pestanaLaboratorio === "mis" ? (
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
                                                    {experimento.progreso ===
                                                    100
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
                        ) : experimentosGuardados.length > 0 ? (
                            <div className="tj-my-lab-grid">
                                {experimentosGuardados.map((experimento) => (
                                    <div
                                        className="tj-my-lab-card saved"
                                        key={experimento.id}
                                    >
                                        <div className="tj-my-lab-cover saved-cover">
                                            <img
                                                src={experimento.imagen}
                                                alt={experimento.titulo}
                                            />

                                            <button
                                                type="button"
                                                aria-label="Quitar de guardados"
                                                onClick={() =>
                                                    alternarGuardado(
                                                        experimento.id,
                                                    )
                                                }
                                            >
                                                <i className="bi bi-bookmark-fill" />
                                            </button>
                                        </div>

                                        <div className="tj-my-lab-content">
                                            <strong>
                                                {experimento.titulo}
                                            </strong>

                                            <small>
                                                {categorias.find(
                                                    (categoria) =>
                                                        categoria.id ===
                                                        experimento.categoria,
                                                )?.nombre}
                                            </small>

                                            <div className="tj-lab-experiment-meta saved-meta">
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
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="tj-lab-empty tj-lab-empty-compact">
                                <i className="bi bi-bookmark-heart" />
                                <h3>Aún no tienes experimentos guardados</h3>
                                <p>
                                    Toca el ícono de marcador en cualquier
                                    experimento para guardarlo aquí.
                                </p>
                            </div>
                        )}
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

                            <button
                                type="button"
                                onClick={() =>
                                    setMostrarTodosDesafios(
                                        (anterior) => !anterior,
                                    )
                                }
                            >
                                {mostrarTodosDesafios
                                    ? "Ver menos"
                                    : "Ver todos"}
                            </button>
                        </header>

                        <div className="tj-lab-challenges">
                            {desafiosVisibles.map((desafio) => {
                                const porcentaje = Math.min(
                                    100,
                                    (desafio.actual / desafio.total) * 100,
                                );
                                const completado =
                                    desafio.actual >= desafio.total;
                                const reclamado = reclamados.has(desafio.id);

                                return (
                                    <div key={desafio.id}>
                                        <span
                                            className={`challenge-icon ${desafio.clase}`}
                                        >
                                            <i className={`bi ${desafio.icono}`} />
                                        </span>

                                        <div>
                                            <strong>{desafio.titulo}</strong>
                                            <small>
                                                {desafio.descripcion}
                                            </small>

                                            <div className="progress">
                                                <div
                                                    className="progress-bar"
                                                    style={{
                                                        width: `${porcentaje}%`,
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        {completado && !reclamado ? (
                                            <button
                                                type="button"
                                                className="challenge-claim-btn"
                                                onClick={() =>
                                                    reclamarRecompensa(
                                                        desafio.id,
                                                    )
                                                }
                                            >
                                                Reclamar +{desafio.recompensa}
                                            </button>
                                        ) : reclamado ? (
                                            <span className="challenge-claimed">
                                                <i className="bi bi-check-circle-fill" />
                                                Reclamado
                                            </span>
                                        ) : (
                                            <span className="challenge-reward">
                                                +{desafio.recompensa}
                                            </span>
                                        )}
                                    </div>
                                );
                            })}
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
                    {herramientas.map((herramienta) => {
                        const activa = herramientasActivas.has(
                            herramienta.id,
                        );

                        return (
                            <button
                                type="button"
                                key={herramienta.id}
                                className={activa ? "active" : ""}
                                aria-pressed={activa}
                                onClick={() =>
                                    alternarHerramienta(herramienta.id)
                                }
                            >
                                <span>
                                    <i className={`bi ${herramienta.icono}`} />
                                </span>

                                <strong>{herramienta.nombre}</strong>
                            </button>
                        );
                    })}
                </div>
            </section>

            {/* CONSEJO */}
            {mostrarConsejo && (
                <aside className="tj-lab-tip">
                    <span className="tj-lab-tip-avatar">
                        <i className="bi bi-emoji-smile-fill" />
                    </span>

                    <div>
                        <strong>Consejo del profe TíaJo</strong>

                        <p>
                            No tengas miedo de equivocarte. Cada experimento
                            es una oportunidad para descubrir algo nuevo.
                        </p>
                    </div>

                    <button
                        type="button"
                        aria-label="Cerrar consejo"
                        onClick={() => setMostrarConsejo(false)}
                    >
                        <i className="bi bi-x-lg" />
                    </button>
                </aside>
            )}
        </div>
    );
}