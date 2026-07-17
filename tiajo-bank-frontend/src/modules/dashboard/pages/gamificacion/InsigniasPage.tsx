import { useMemo, useState } from "react";

import "../../../../shared/assets/styles/dashboard/insignias.css";

type BadgeShape =
    | "circle"
    | "shield"
    | "hexagon"
    | "diamond"
    | "star"
    | "medal";

type BadgeBorderStyle =
    | "solid"
    | "double"
    | "dashed"
    | "glow";

type BadgeRibbon =
    | "none"
    | "classic"
    | "wide"
    | "double";

type BadgeIcon = {
    id: string;
    label: string;
    icon: string;
};

type BadgeTemplate = {
    id: number;
    name: string;
    description: string;
    shape: BadgeShape;
    primaryColor: string;
    secondaryColor: string;
    borderColor: string;
    icon: string;
    level: string;
};

const availableIcons: BadgeIcon[] = [
    {
        id: "trophy",
        label: "Trofeo",
        icon: "bi-trophy-fill",
    },
    {
        id: "star",
        label: "Estrella",
        icon: "bi-star-fill",
    },
    {
        id: "book",
        label: "Lectura",
        icon: "bi-book-fill",
    },
    {
        id: "calculator",
        label: "Matemática",
        icon: "bi-calculator-fill",
    },
    {
        id: "science",
        label: "Ciencias",
        icon: "bi-flask-fill",
    },
    {
        id: "heart",
        label: "Compañerismo",
        icon: "bi-heart-fill",
    },
    {
        id: "lightning",
        label: "Velocidad",
        icon: "bi-lightning-charge-fill",
    },
    {
        id: "fire",
        label: "Racha",
        icon: "bi-fire",
    },
    {
        id: "controller",
        label: "Jugador",
        icon: "bi-controller",
    },
    {
        id: "medal",
        label: "Medalla",
        icon: "bi-award-fill",
    },
    {
        id: "shield",
        label: "Protección",
        icon: "bi-shield-fill-check",
    },
    {
        id: "people",
        label: "Trabajo en equipo",
        icon: "bi-people-fill",
    },
    {
        id: "mic",
        label: "Comunicación",
        icon: "bi-mic-fill",
    },
    {
        id: "palette",
        label: "Creatividad",
        icon: "bi-palette-fill",
    },
    {
        id: "rocket",
        label: "Explorador",
        icon: "bi-rocket-takeoff-fill",
    },
    {
        id: "frog",
        label: "Ranita",
        icon: "bi-emoji-smile-fill",
    },
];

const templates: BadgeTemplate[] = [
    {
        id: 1,
        name: "Lector legendario",
        description: "Completó diez desafíos de lectura.",
        shape: "shield",
        primaryColor: "#255d50",
        secondaryColor: "#34a853",
        borderColor: "#facc15",
        icon: "bi-book-fill",
        level: "Épica",
    },
    {
        id: 2,
        name: "Mente matemática",
        description: "Resolvió todos los desafíos numéricos.",
        shape: "hexagon",
        primaryColor: "#2563eb",
        secondaryColor: "#60a5fa",
        borderColor: "#dbeafe",
        icon: "bi-calculator-fill",
        level: "Rara",
    },
    {
        id: 3,
        name: "Corazón solidario",
        description: "Apoyó constantemente a sus compañeros.",
        shape: "circle",
        primaryColor: "#db2777",
        secondaryColor: "#f472b6",
        borderColor: "#fbcfe8",
        icon: "bi-heart-fill",
        level: "Especial",
    },
    {
        id: 4,
        name: "Científico curioso",
        description: "Completó experimentos del laboratorio.",
        shape: "diamond",
        primaryColor: "#7e22ce",
        secondaryColor: "#a855f7",
        borderColor: "#e9d5ff",
        icon: "bi-flask-fill",
        level: "Épica",
    },
];

const shapeLabels: Record<BadgeShape, string> = {
    circle: "Circular",
    shield: "Escudo",
    hexagon: "Hexágono",
    diamond: "Diamante",
    star: "Estrella",
    medal: "Medalla",
};

function getShapeClipPath(shape: BadgeShape): string {
    const paths: Record<BadgeShape, string> = {
        circle: "circle(50% at 50% 50%)",
        shield:
            "polygon(50% 0%, 88% 13%, 86% 62%, 50% 100%, 14% 62%, 12% 13%)",
        hexagon:
            "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
        diamond:
            "polygon(50% 0%, 95% 50%, 50% 100%, 5% 50%)",
        star:
            "polygon(50% 0%, 61% 34%, 98% 34%, 68% 55%, 79% 91%, 50% 69%, 21% 91%, 32% 55%, 2% 34%, 39% 34%)",
        medal:
            "polygon(50% 0%, 67% 9%, 86% 8%, 91% 27%, 100% 43%, 89% 59%, 86% 80%, 66% 85%, 50% 100%, 34% 85%, 14% 80%, 11% 59%, 0% 43%, 9% 27%, 14% 8%, 33% 9%)",
    };

    return paths[shape];
}

export default function InsigniasPage() {
    const [badgeName, setBadgeName] = useState("Explorador TíaJo");
    const [badgeDescription, setBadgeDescription] = useState(
        "Reconoce el esfuerzo, la curiosidad y la participación constante.",
    );

    const [shape, setShape] = useState<BadgeShape>("shield");
    const [primaryColor, setPrimaryColor] = useState("#255d50");
    const [secondaryColor, setSecondaryColor] =
        useState("#34a853");
    const [borderColor, setBorderColor] = useState("#facc15");

    const [borderWidth, setBorderWidth] = useState(8);
    const [borderStyle, setBorderStyle] =
        useState<BadgeBorderStyle>("solid");

    const [selectedIcon, setSelectedIcon] =
        useState("bi-trophy-fill");

    const [iconSize, setIconSize] = useState(72);
    const [iconColor, setIconColor] = useState("#ffffff");

    const [showStars, setShowStars] = useState(true);
    const [stars, setStars] = useState(3);

    const [ribbon, setRibbon] = useState<BadgeRibbon>("classic");
    const [ribbonText, setRibbonText] = useState("NIVEL 5");

    const [showInitials, setShowInitials] = useState(false);
    const [initials, setInitials] = useState("TJ");

    const [pattern, setPattern] = useState<
        "none" | "dots" | "lines" | "rays"
    >("rays");

    const [shadow, setShadow] = useState(true);
    const [shine, setShine] = useState(true);

    const [selectedTemplate, setSelectedTemplate] =
        useState<number | null>(null);

    const shapeClipPath = useMemo(
        () => getShapeClipPath(shape),
        [shape],
    );

    const applyTemplate = (template: BadgeTemplate) => {
        setSelectedTemplate(template.id);
        setBadgeName(template.name);
        setBadgeDescription(template.description);
        setShape(template.shape);
        setPrimaryColor(template.primaryColor);
        setSecondaryColor(template.secondaryColor);
        setBorderColor(template.borderColor);
        setSelectedIcon(template.icon);
    };

    const resetBadge = () => {
        setBadgeName("Explorador TíaJo");
        setBadgeDescription(
            "Reconoce el esfuerzo, la curiosidad y la participación constante.",
        );
        setShape("shield");
        setPrimaryColor("#255d50");
        setSecondaryColor("#34a853");
        setBorderColor("#facc15");
        setBorderWidth(8);
        setBorderStyle("solid");
        setSelectedIcon("bi-trophy-fill");
        setIconSize(72);
        setIconColor("#ffffff");
        setShowStars(true);
        setStars(3);
        setRibbon("classic");
        setRibbonText("NIVEL 5");
        setShowInitials(false);
        setInitials("TJ");
        setPattern("rays");
        setShadow(true);
        setShine(true);
        setSelectedTemplate(null);
    };

    return (
        <div className="tj-badges-page">
            {/* HERO */}
            <section className="tj-badges-hero">
                <div>
                    <span className="tj-badges-eyebrow">
                        <i className="bi bi-stars" />
                        Experiencia estudiantil
                    </span>

                    <h1>Estudio de insignias</h1>

                    <p>
                        Diseña reconocimientos únicos, combina formas,
                        colores, íconos y recompensas para transformar
                        cada logro en una experiencia memorable.
                    </p>
                </div>

                <div className="tj-badges-hero-actions">
                    <button
                        type="button"
                        className="btn tj-badges-secondary-button"
                    >
                        <i className="bi bi-folder2-open" />
                        Mis diseños
                    </button>

                    <button
                        type="button"
                        className="btn tj-badges-primary-button"
                        data-bs-toggle="modal"
                        data-bs-target="#saveBadgeModal"
                    >
                        <i className="bi bi-cloud-check-fill" />
                        Guardar insignia
                    </button>
                </div>
            </section>

            {/* INDICADORES */}
            <section className="row g-3 mb-4">
                <div className="col-xl-3 col-md-6">
                    <div className="tj-badge-stat-card">
                        <span className="green">
                            <i className="bi bi-award-fill" />
                        </span>

                        <div>
                            <small>Insignias creadas</small>
                            <strong>48</strong>
                            <p>Biblioteca institucional</p>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6">
                    <div className="tj-badge-stat-card">
                        <span className="yellow">
                            <i className="bi bi-stars" />
                        </span>

                        <div>
                            <small>Insignias entregadas</small>
                            <strong>2.845</strong>
                            <p>Durante este semestre</p>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6">
                    <div className="tj-badge-stat-card">
                        <span className="purple">
                            <i className="bi bi-palette-fill" />
                        </span>

                        <div>
                            <small>Diseños personalizados</small>
                            <strong>31</strong>
                            <p>Creados por la comunidad</p>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6">
                    <div className="tj-badge-stat-card">
                        <span className="blue">
                            <i className="bi bi-people-fill" />
                        </span>

                        <div>
                            <small>Estudiantes reconocidos</small>
                            <strong>1.376</strong>
                            <p>Con al menos una insignia</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* EDITOR */}
            <section className="tj-badge-studio">
                {/* PANEL IZQUIERDO */}
                <aside className="tj-badge-controls">
                    <div className="tj-badge-panel-heading">
                        <span>
                            <i className="bi bi-sliders" />
                        </span>

                        <div>
                            <h2>Personalización</h2>
                            <p>Modifica cada detalle del diseño.</p>
                        </div>
                    </div>

                    <div
                        className="accordion tj-badge-accordion"
                        id="badgeEditorAccordion"
                    >
                        {/* INFORMACIÓN */}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#badgeInfo"
                                >
                                    <i className="bi bi-card-text" />
                                    Información
                                </button>
                            </h2>

                            <div
                                id="badgeInfo"
                                className="accordion-collapse collapse show"
                                data-bs-parent="#badgeEditorAccordion"
                            >
                                <div className="accordion-body">
                                    <div className="mb-3">
                                        <label
                                            htmlFor="badgeName"
                                            className="form-label"
                                        >
                                            Nombre
                                        </label>

                                        <input
                                            id="badgeName"
                                            type="text"
                                            className="form-control"
                                            value={badgeName}
                                            onChange={(event) =>
                                                setBadgeName(
                                                    event.target.value,
                                                )
                                            }
                                            maxLength={40}
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="badgeDescription"
                                            className="form-label"
                                        >
                                            Descripción
                                        </label>

                                        <textarea
                                            id="badgeDescription"
                                            className="form-control"
                                            rows={3}
                                            value={badgeDescription}
                                            onChange={(event) =>
                                                setBadgeDescription(
                                                    event.target.value,
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FORMA */}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#badgeShape"
                                >
                                    <i className="bi bi-hexagon-fill" />
                                    Forma y estructura
                                </button>
                            </h2>

                            <div
                                id="badgeShape"
                                className="accordion-collapse collapse"
                                data-bs-parent="#badgeEditorAccordion"
                            >
                                <div className="accordion-body">
                                    <div className="tj-shape-selector">
                                        {(
                                            Object.keys(
                                                shapeLabels,
                                            ) as BadgeShape[]
                                        ).map((shapeItem) => (
                                            <button
                                                type="button"
                                                key={shapeItem}
                                                className={
                                                    shape === shapeItem
                                                        ? "active"
                                                        : ""
                                                }
                                                onClick={() =>
                                                    setShape(shapeItem)
                                                }
                                            >
                                                <span
                                                    className="tj-shape-miniature"
                                                    style={{
                                                        clipPath:
                                                            getShapeClipPath(
                                                                shapeItem,
                                                            ),
                                                    }}
                                                />

                                                <small>
                                                    {
                                                        shapeLabels[
                                                            shapeItem
                                                        ]
                                                    }
                                                </small>
                                            </button>
                                        ))}
                                    </div>

                                    <div className="mt-3">
                                        <label
                                            htmlFor="borderWidth"
                                            className="form-label d-flex justify-content-between"
                                        >
                                            Grosor del borde
                                            <strong>
                                                {borderWidth}px
                                            </strong>
                                        </label>

                                        <input
                                            id="borderWidth"
                                            type="range"
                                            className="form-range"
                                            min={2}
                                            max={16}
                                            value={borderWidth}
                                            onChange={(event) =>
                                                setBorderWidth(
                                                    Number(
                                                        event.target
                                                            .value,
                                                    ),
                                                )
                                            }
                                        />
                                    </div>

                                    <div className="mt-3">
                                        <label
                                            htmlFor="borderStyle"
                                            className="form-label"
                                        >
                                            Estilo del borde
                                        </label>

                                        <select
                                            id="borderStyle"
                                            className="form-select"
                                            value={borderStyle}
                                            onChange={(event) =>
                                                setBorderStyle(
                                                    event.target
                                                        .value as BadgeBorderStyle,
                                                )
                                            }
                                        >
                                            <option value="solid">
                                                Sólido
                                            </option>
                                            <option value="double">
                                                Doble
                                            </option>
                                            <option value="dashed">
                                                Segmentado
                                            </option>
                                            <option value="glow">
                                                Brillante
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* COLORES */}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#badgeColors"
                                >
                                    <i className="bi bi-palette-fill" />
                                    Colores y fondo
                                </button>
                            </h2>

                            <div
                                id="badgeColors"
                                className="accordion-collapse collapse"
                                data-bs-parent="#badgeEditorAccordion"
                            >
                                <div className="accordion-body">
                                    <div className="tj-color-control">
                                        <label htmlFor="primaryColor">
                                            Color principal
                                        </label>

                                        <div>
                                            <input
                                                id="primaryColor"
                                                type="color"
                                                value={primaryColor}
                                                onChange={(event) =>
                                                    setPrimaryColor(
                                                        event.target
                                                            .value,
                                                    )
                                                }
                                            />

                                            <input
                                                type="text"
                                                className="form-control"
                                                value={primaryColor}
                                                onChange={(event) =>
                                                    setPrimaryColor(
                                                        event.target
                                                            .value,
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div className="tj-color-control">
                                        <label htmlFor="secondaryColor">
                                            Color secundario
                                        </label>

                                        <div>
                                            <input
                                                id="secondaryColor"
                                                type="color"
                                                value={secondaryColor}
                                                onChange={(event) =>
                                                    setSecondaryColor(
                                                        event.target
                                                            .value,
                                                    )
                                                }
                                            />

                                            <input
                                                type="text"
                                                className="form-control"
                                                value={secondaryColor}
                                                onChange={(event) =>
                                                    setSecondaryColor(
                                                        event.target
                                                            .value,
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div className="tj-color-control">
                                        <label htmlFor="borderColor">
                                            Color del borde
                                        </label>

                                        <div>
                                            <input
                                                id="borderColor"
                                                type="color"
                                                value={borderColor}
                                                onChange={(event) =>
                                                    setBorderColor(
                                                        event.target
                                                            .value,
                                                    )
                                                }
                                            />

                                            <input
                                                type="text"
                                                className="form-control"
                                                value={borderColor}
                                                onChange={(event) =>
                                                    setBorderColor(
                                                        event.target
                                                            .value,
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <label
                                            htmlFor="badgePattern"
                                            className="form-label"
                                        >
                                            Textura
                                        </label>

                                        <select
                                            id="badgePattern"
                                            className="form-select"
                                            value={pattern}
                                            onChange={(event) =>
                                                setPattern(
                                                    event.target
                                                        .value as
                                                        | "none"
                                                        | "dots"
                                                        | "lines"
                                                        | "rays",
                                                )
                                            }
                                        >
                                            <option value="none">
                                                Sin textura
                                            </option>
                                            <option value="dots">
                                                Puntos
                                            </option>
                                            <option value="lines">
                                                Líneas
                                            </option>
                                            <option value="rays">
                                                Rayos
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ÍCONO */}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#badgeIcon"
                                >
                                    <i className="bi bi-stars" />
                                    Ícono central
                                </button>
                            </h2>

                            <div
                                id="badgeIcon"
                                className="accordion-collapse collapse"
                                data-bs-parent="#badgeEditorAccordion"
                            >
                                <div className="accordion-body">
                                    <div className="tj-icon-selector">
                                        {availableIcons.map((item) => (
                                            <button
                                                key={item.id}
                                                type="button"
                                                className={
                                                    selectedIcon ===
                                                    item.icon
                                                        ? "active"
                                                        : ""
                                                }
                                                onClick={() =>
                                                    setSelectedIcon(
                                                        item.icon,
                                                    )
                                                }
                                                title={item.label}
                                            >
                                                <i
                                                    className={`bi ${item.icon}`}
                                                />
                                            </button>
                                        ))}
                                    </div>

                                    <div className="mt-3">
                                        <label
                                            htmlFor="iconSize"
                                            className="form-label d-flex justify-content-between"
                                        >
                                            Tamaño
                                            <strong>
                                                {iconSize}px
                                            </strong>
                                        </label>

                                        <input
                                            id="iconSize"
                                            type="range"
                                            className="form-range"
                                            min={40}
                                            max={110}
                                            value={iconSize}
                                            onChange={(event) =>
                                                setIconSize(
                                                    Number(
                                                        event.target
                                                            .value,
                                                    ),
                                                )
                                            }
                                        />
                                    </div>

                                    <div className="tj-color-control mt-3">
                                        <label htmlFor="iconColor">
                                            Color del ícono
                                        </label>

                                        <div>
                                            <input
                                                id="iconColor"
                                                type="color"
                                                value={iconColor}
                                                onChange={(event) =>
                                                    setIconColor(
                                                        event.target
                                                            .value,
                                                    )
                                                }
                                            />

                                            <input
                                                type="text"
                                                className="form-control"
                                                value={iconColor}
                                                onChange={(event) =>
                                                    setIconColor(
                                                        event.target
                                                            .value,
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>

                                    <label className="tj-editor-switch mt-3">
                                        <span>
                                            Usar iniciales en lugar del
                                            ícono
                                        </span>

                                        <input
                                            type="checkbox"
                                            checked={showInitials}
                                            onChange={(event) =>
                                                setShowInitials(
                                                    event.target
                                                        .checked,
                                                )
                                            }
                                        />
                                    </label>

                                    {showInitials && (
                                        <input
                                            type="text"
                                            className="form-control mt-2"
                                            maxLength={3}
                                            value={initials}
                                            onChange={(event) =>
                                                setInitials(
                                                    event.target.value
                                                        .toUpperCase(),
                                                )
                                            }
                                            placeholder="Iniciales"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* DECORACIÓN */}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#badgeDecorations"
                                >
                                    <i className="bi bi-magic" />
                                    Decoraciones
                                </button>
                            </h2>

                            <div
                                id="badgeDecorations"
                                className="accordion-collapse collapse"
                                data-bs-parent="#badgeEditorAccordion"
                            >
                                <div className="accordion-body">
                                    <label className="tj-editor-switch">
                                        <span>Mostrar estrellas</span>

                                        <input
                                            type="checkbox"
                                            checked={showStars}
                                            onChange={(event) =>
                                                setShowStars(
                                                    event.target
                                                        .checked,
                                                )
                                            }
                                        />
                                    </label>

                                    {showStars && (
                                        <div className="mt-3">
                                            <label
                                                htmlFor="starCount"
                                                className="form-label"
                                            >
                                                Cantidad de estrellas
                                            </label>

                                            <select
                                                id="starCount"
                                                className="form-select"
                                                value={stars}
                                                onChange={(event) =>
                                                    setStars(
                                                        Number(
                                                            event.target
                                                                .value,
                                                        ),
                                                    )
                                                }
                                            >
                                                <option value={1}>
                                                    1 estrella
                                                </option>
                                                <option value={2}>
                                                    2 estrellas
                                                </option>
                                                <option value={3}>
                                                    3 estrellas
                                                </option>
                                                <option value={4}>
                                                    4 estrellas
                                                </option>
                                                <option value={5}>
                                                    5 estrellas
                                                </option>
                                            </select>
                                        </div>
                                    )}

                                    <div className="mt-3">
                                        <label
                                            htmlFor="badgeRibbon"
                                            className="form-label"
                                        >
                                            Cinta inferior
                                        </label>

                                        <select
                                            id="badgeRibbon"
                                            className="form-select"
                                            value={ribbon}
                                            onChange={(event) =>
                                                setRibbon(
                                                    event.target
                                                        .value as BadgeRibbon,
                                                )
                                            }
                                        >
                                            <option value="none">
                                                Sin cinta
                                            </option>
                                            <option value="classic">
                                                Clásica
                                            </option>
                                            <option value="wide">
                                                Ancha
                                            </option>
                                            <option value="double">
                                                Doble
                                            </option>
                                        </select>
                                    </div>

                                    {ribbon !== "none" && (
                                        <div className="mt-3">
                                            <label
                                                htmlFor="ribbonText"
                                                className="form-label"
                                            >
                                                Texto de la cinta
                                            </label>

                                            <input
                                                id="ribbonText"
                                                type="text"
                                                className="form-control"
                                                value={ribbonText}
                                                maxLength={16}
                                                onChange={(event) =>
                                                    setRibbonText(
                                                        event.target
                                                            .value
                                                            .toUpperCase(),
                                                    )
                                                }
                                            />
                                        </div>
                                    )}

                                    <label className="tj-editor-switch mt-3">
                                        <span>Sombra exterior</span>

                                        <input
                                            type="checkbox"
                                            checked={shadow}
                                            onChange={(event) =>
                                                setShadow(
                                                    event.target
                                                        .checked,
                                                )
                                            }
                                        />
                                    </label>

                                    <label className="tj-editor-switch">
                                        <span>Brillo superior</span>

                                        <input
                                            type="checkbox"
                                            checked={shine}
                                            onChange={(event) =>
                                                setShine(
                                                    event.target
                                                        .checked,
                                                )
                                            }
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* LIENZO CENTRAL */}
                <main className="tj-badge-canvas-section">
                    <header className="tj-badge-canvas-header">
                        <div>
                            <span>Vista previa en tiempo real</span>
                            <h2>Tu insignia</h2>
                        </div>

                        <div className="tj-badge-canvas-actions">
                            <button
                                type="button"
                                onClick={resetBadge}
                            >
                                <i className="bi bi-arrow-counterclockwise" />
                                Reiniciar
                            </button>

                            <button type="button">
                                <i className="bi bi-zoom-in" />
                                Ampliar
                            </button>
                        </div>
                    </header>

                    <div className="tj-badge-canvas">
                        <div className="tj-badge-grid-background" />

                        <div
                            className={`tj-badge-preview ${
                                shadow ? "has-shadow" : ""
                            }`}
                        >
                            <div
                                className={`tj-badge-ribbon-back ribbon-${ribbon}`}
                            />

                            <div
                                className="tj-badge-main-shape"
                                style={{
                                    clipPath: shapeClipPath,
                                    background: `linear-gradient(145deg, ${primaryColor}, ${secondaryColor})`,
                                    padding: `${borderWidth}px`,
                                    filter:
                                        borderStyle === "glow"
                                            ? `drop-shadow(0 0 12px ${borderColor})`
                                            : undefined,
                                }}
                            >
                                <div
                                    className={`tj-badge-border border-${borderStyle}`}
                                    style={{
                                        clipPath: shapeClipPath,
                                        backgroundColor:
                                            borderColor,
                                    }}
                                >
                                    <div
                                        className="tj-badge-inner"
                                        style={{
                                            clipPath:
                                                shapeClipPath,
                                            background: `linear-gradient(145deg, ${primaryColor}, ${secondaryColor})`,
                                        }}
                                    >
                                        {pattern !== "none" && (
                                            <div
                                                className={`tj-badge-pattern pattern-${pattern}`}
                                            />
                                        )}

                                        {shine && (
                                            <div className="tj-badge-shine" />
                                        )}

                                        <div className="tj-badge-inner-ring" />

                                        <div className="tj-badge-icon">
                                            {showInitials ? (
                                                <strong
                                                    style={{
                                                        color: iconColor,
                                                        fontSize:
                                                            iconSize *
                                                            0.62,
                                                    }}
                                                >
                                                    {initials || "TJ"}
                                                </strong>
                                            ) : (
                                                <i
                                                    className={`bi ${selectedIcon}`}
                                                    style={{
                                                        color: iconColor,
                                                        fontSize:
                                                            iconSize,
                                                    }}
                                                />
                                            )}
                                        </div>

                                        {showStars && (
                                            <div className="tj-badge-stars">
                                                {Array.from({
                                                    length: stars,
                                                }).map((_, index) => (
                                                    <i
                                                        key={index}
                                                        className="bi bi-star-fill"
                                                        style={{
                                                            color: borderColor,
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {ribbon !== "none" && (
                                <div
                                    className={`tj-badge-ribbon ribbon-${ribbon}`}
                                    style={{
                                        backgroundColor:
                                            borderColor,
                                    }}
                                >
                                    <span>{ribbonText}</span>
                                </div>
                            )}
                        </div>

                        <div className="tj-badge-preview-text">
                            <span>INSIGNIA</span>

                            <h3>{badgeName || "Sin nombre"}</h3>

                            <p>{badgeDescription}</p>
                        </div>
                    </div>

                    <footer className="tj-badge-canvas-footer">
                        <div>
                            <span>
                                <i className="bi bi-aspect-ratio" />
                                512 × 512 px
                            </span>

                            <span>
                                <i className="bi bi-vector-pen" />
                                Diseño vectorial
                            </span>

                            <span>
                                <i className="bi bi-palette" />
                                Colores editables
                            </span>
                        </div>

                        <button
                            type="button"
                            className="tj-export-badge-button"
                        >
                            <i className="bi bi-download" />
                            Exportar diseño
                        </button>
                    </footer>
                </main>

                {/* PANEL DERECHO */}
                <aside className="tj-badge-side-panel">
                    <section className="tj-badge-properties-card">
                        <header>
                            <span>
                                <i className="bi bi-info-circle-fill" />
                            </span>

                            <div>
                                <h2>Resumen del diseño</h2>
                                <p>Configuración actual.</p>
                            </div>
                        </header>

                        <div className="tj-badge-property">
                            <span>Forma</span>
                            <strong>{shapeLabels[shape]}</strong>
                        </div>

                        <div className="tj-badge-property">
                            <span>Ícono</span>
                            <strong>
                                {availableIcons.find(
                                    (item) =>
                                        item.icon ===
                                        selectedIcon,
                                )?.label ?? "Personalizado"}
                            </strong>
                        </div>

                        <div className="tj-badge-property">
                            <span>Cinta</span>
                            <strong>
                                {ribbon === "none"
                                    ? "Sin cinta"
                                    : ribbonText}
                            </strong>
                        </div>

                        <div className="tj-badge-property">
                            <span>Estrellas</span>
                            <strong>
                                {showStars ? stars : "No"}
                            </strong>
                        </div>

                        <div className="tj-badge-color-summary">
                            <span
                                style={{
                                    backgroundColor:
                                        primaryColor,
                                }}
                            />

                            <span
                                style={{
                                    backgroundColor:
                                        secondaryColor,
                                }}
                            />

                            <span
                                style={{
                                    backgroundColor:
                                        borderColor,
                                }}
                            />

                            <span
                                style={{
                                    backgroundColor: iconColor,
                                }}
                            />
                        </div>
                    </section>

                    <section className="tj-badge-reward-card">
                        <header>
                            <span>
                                <i className="bi bi-gift-fill" />
                            </span>

                            <div>
                                <h2>Recompensa asociada</h2>
                                <p>Beneficios al obtenerla.</p>
                            </div>
                        </header>

                        <div className="tj-reward-option">
                            <span className="xp">
                                <i className="bi bi-lightning-charge-fill" />
                            </span>

                            <div>
                                <strong>Experiencia</strong>
                                <small>+150 XP</small>
                            </div>

                            <input
                                type="checkbox"
                                defaultChecked
                            />
                        </div>

                        <div className="tj-reward-option">
                            <span className="coins">
                                <i className="bi bi-coin" />
                            </span>

                            <div>
                                <strong>Monedas</strong>
                                <small>+200 TíaCoins</small>
                            </div>

                            <input
                                type="checkbox"
                                defaultChecked
                            />
                        </div>

                        <div className="tj-reward-option">
                            <span className="avatar">
                                <i className="bi bi-person-bounding-box" />
                            </span>

                            <div>
                                <strong>Accesorio</strong>
                                <small>Objeto para Mi Ranita</small>
                            </div>

                            <input type="checkbox" />
                        </div>
                    </section>

                    <section className="tj-badge-ai-card">
                        <span>
                            <i className="bi bi-stars" />
                        </span>

                        <div>
                            <h2>Diseñador inteligente</h2>

                            <p>
                                Describe el logro y TíaJo generará una
                                combinación de forma, colores e ícono.
                            </p>

                            <textarea
                                className="form-control"
                                rows={3}
                                placeholder="Ej.: Insignia para estudiantes que ayudan a sus compañeros..."
                            />

                            <button type="button">
                                <i className="bi bi-magic" />
                                Generar diseño
                            </button>
                        </div>
                    </section>
                </aside>
            </section>

            {/* PLANTILLAS */}
            <section className="tj-badge-templates-section">
                <header>
                    <div>
                        <span>Inspiración rápida</span>
                        <h2>Plantillas de insignias</h2>
                        <p>
                            Aplica una base prediseñada y luego personalízala.
                        </p>
                    </div>

                    <button type="button">
                        Ver biblioteca completa
                        <i className="bi bi-arrow-right" />
                    </button>
                </header>

                <div className="row g-3">
                    {templates.map((template) => (
                        <div
                            className="col-xl-3 col-md-6"
                            key={template.id}
                        >
                            <button
                                type="button"
                                className={`tj-badge-template-card ${
                                    selectedTemplate === template.id
                                        ? "active"
                                        : ""
                                }`}
                                onClick={() =>
                                    applyTemplate(template)
                                }
                            >
                                <div className="tj-template-preview">
                                    <div
                                        className="tj-template-shape"
                                        style={{
                                            clipPath:
                                                getShapeClipPath(
                                                    template.shape,
                                                ),
                                            background: `linear-gradient(145deg, ${template.primaryColor}, ${template.secondaryColor})`,
                                            borderColor:
                                                template.borderColor,
                                        }}
                                    >
                                        <i
                                            className={`bi ${template.icon}`}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <span>{template.level}</span>
                                    <strong>{template.name}</strong>
                                    <small>
                                        {template.description}
                                    </small>
                                </div>
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* GALERÍA */}
            <section className="tj-badge-gallery-section">
                <header>
                    <div>
                        <span>Biblioteca institucional</span>
                        <h2>Insignias recientes</h2>
                    </div>

                    <button type="button">
                        Administrar insignias
                        <i className="bi bi-arrow-right" />
                    </button>
                </header>

                <div className="tj-badge-gallery">
                    {[
                        {
                            name: "Buen compañero",
                            icon: "bi-heart-fill",
                            color: "#db2777",
                        },
                        {
                            name: "Racha de lectura",
                            icon: "bi-fire",
                            color: "#ea580c",
                        },
                        {
                            name: "Mente brillante",
                            icon: "bi-lightbulb-fill",
                            color: "#7e22ce",
                        },
                        {
                            name: "Líder positivo",
                            icon: "bi-people-fill",
                            color: "#2563eb",
                        },
                        {
                            name: "Científico TíaJo",
                            icon: "bi-flask-fill",
                            color: "#15803d",
                        },
                        {
                            name: "Artista creativo",
                            icon: "bi-palette-fill",
                            color: "#c026d3",
                        },
                    ].map((badge) => (
                        <article key={badge.name}>
                            <div
                                style={{
                                    background: `linear-gradient(145deg, ${badge.color}, #111827)`,
                                }}
                            >
                                <i
                                    className={`bi ${badge.icon}`}
                                />
                            </div>

                            <strong>{badge.name}</strong>

                            <small>
                                Entregada a 124 estudiantes
                            </small>

                            <button type="button">
                                <i className="bi bi-three-dots" />
                            </button>
                        </article>
                    ))}
                </div>
            </section>

            {/* MODAL GUARDAR */}
            <div
                className="modal fade"
                id="saveBadgeModal"
                tabIndex={-1}
                aria-labelledby="saveBadgeModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content tj-save-badge-modal">
                        <div className="modal-header">
                            <div>
                                <span>
                                    <i className="bi bi-cloud-check-fill" />
                                    Guardar diseño
                                </span>

                                <h2
                                    className="modal-title"
                                    id="saveBadgeModalLabel"
                                >
                                    Configurar insignia
                                </h2>

                                <p>
                                    Define cómo se obtendrá y quién podrá
                                    recibirla.
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
                                    <div className="tj-save-badge-section">
                                        <h3>Información</h3>

                                        <div className="mb-3">
                                            <label className="form-label">
                                                Nombre
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control"
                                                value={badgeName}
                                                onChange={(event) =>
                                                    setBadgeName(
                                                        event.target
                                                            .value,
                                                    )
                                                }
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">
                                                Categoría
                                            </label>

                                            <select
                                                className="form-select"
                                                defaultValue="aprendizaje"
                                            >
                                                <option value="aprendizaje">
                                                    Aprendizaje
                                                </option>
                                                <option value="convivencia">
                                                    Convivencia
                                                </option>
                                                <option value="participacion">
                                                    Participación
                                                </option>
                                                <option value="creatividad">
                                                    Creatividad
                                                </option>
                                                <option value="asistencia">
                                                    Asistencia
                                                </option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="form-label">
                                                Rareza
                                            </label>

                                            <select
                                                className="form-select"
                                                defaultValue="epica"
                                            >
                                                <option value="comun">
                                                    Común
                                                </option>
                                                <option value="rara">
                                                    Rara
                                                </option>
                                                <option value="epica">
                                                    Épica
                                                </option>
                                                <option value="legendaria">
                                                    Legendaria
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="tj-save-badge-section mt-3">
                                        <h3>Condición de obtención</h3>

                                        <select
                                            className="form-select mb-3"
                                            defaultValue="manual"
                                        >
                                            <option value="manual">
                                                Entrega manual
                                            </option>
                                            <option value="actividad">
                                                Completar actividad
                                            </option>
                                            <option value="evaluacion">
                                                Alcanzar calificación
                                            </option>
                                            <option value="racha">
                                                Completar una racha
                                            </option>
                                            <option value="monedas">
                                                Alcanzar monedas
                                            </option>
                                        </select>

                                        <textarea
                                            className="form-control"
                                            rows={3}
                                            placeholder="Describe cómo se obtiene esta insignia..."
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-5">
                                    <div className="tj-save-preview">
                                        <span>Vista previa</span>

                                        <div
                                            style={{
                                                clipPath:
                                                    shapeClipPath,
                                                background: `linear-gradient(145deg, ${primaryColor}, ${secondaryColor})`,
                                                borderColor:
                                                    borderColor,
                                            }}
                                        >
                                            <i
                                                className={`bi ${selectedIcon}`}
                                            />
                                        </div>

                                        <strong>{badgeName}</strong>

                                        <small>
                                            Insignia épica · +150 XP
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn tj-save-cancel"
                                data-bs-dismiss="modal"
                            >
                                Cancelar
                            </button>

                            <button
                                type="button"
                                className="btn tj-save-draft"
                            >
                                <i className="bi bi-save" />
                                Guardar borrador
                            </button>

                            <button
                                type="button"
                                className="btn tj-save-publish"
                            >
                                <i className="bi bi-check-circle-fill" />
                                Publicar insignia
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}