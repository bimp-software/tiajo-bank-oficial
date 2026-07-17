import { useMemo, useState } from "react";

import "../../../../shared/assets/styles/dashboard/mi-ranita.css";

type CharacterClass =
    | "guardian"
    | "mage"
    | "archer"
    | "healer"
    | "explorer";

type CharacterGender = "masculino" | "femenino" | "neutral";

type Rarity =
    | "comun"
    | "raro"
    | "epico"
    | "legendario"
    | "mitico";

type EquipmentSlot =
    | "head"
    | "chest"
    | "weapon"
    | "shield"
    | "back"
    | "companion";

type EquipmentItem = {
    id: number;
    name: string;
    slot: EquipmentSlot;
    icon: string;
    rarity: Rarity;
    color: string;
    level: number;
    attack?: number;
    defense?: number;
    magic?: number;
    health?: number;
};

const classes = [
    {
        id: "guardian",
        name: "Guardián",
        description: "Alta defensa y resistencia.",
        icon: "bi-shield-fill",
    },
    {
        id: "mage",
        name: "Mago",
        description: "Poder mágico y habilidades especiales.",
        icon: "bi-stars",
    },
    {
        id: "archer",
        name: "Arquero",
        description: "Velocidad y ataques a distancia.",
        icon: "bi-bullseye",
    },
    {
        id: "healer",
        name: "Sanador",
        description: "Apoyo, energía y recuperación.",
        icon: "bi-heart-pulse-fill",
    },
    {
        id: "explorer",
        name: "Explorador",
        description: "Equilibrio, aventura y descubrimiento.",
        icon: "bi-compass-fill",
    },
] as const;

const equipment: EquipmentItem[] = [
    {
        id: 1,
        name: "Corona del Bosque",
        slot: "head",
        icon: "bi-gem",
        rarity: "legendario",
        color: "#facc15",
        level: 12,
        magic: 18,
        health: 12,
    },
    {
        id: 2,
        name: "Casco del Guardián",
        slot: "head",
        icon: "bi-shield-fill",
        rarity: "epico",
        color: "#7c3aed",
        level: 8,
        defense: 24,
    },
    {
        id: 3,
        name: "Capucha Arcana",
        slot: "head",
        icon: "bi-stars",
        rarity: "raro",
        color: "#2563eb",
        level: 6,
        magic: 14,
    },
    {
        id: 4,
        name: "Armadura Esmeralda",
        slot: "chest",
        icon: "bi-person-bounding-box",
        rarity: "legendario",
        color: "#16a34a",
        level: 15,
        defense: 32,
        health: 20,
    },
    {
        id: 5,
        name: "Túnica del Sabio",
        slot: "chest",
        icon: "bi-magic",
        rarity: "epico",
        color: "#8b5cf6",
        level: 10,
        magic: 28,
    },
    {
        id: 6,
        name: "Chaqueta Exploradora",
        slot: "chest",
        icon: "bi-compass",
        rarity: "raro",
        color: "#0f766e",
        level: 5,
        defense: 11,
        health: 8,
    },
    {
        id: 7,
        name: "Espada Solar",
        slot: "weapon",
        icon: "bi-lightning-charge-fill",
        rarity: "mitico",
        color: "#f97316",
        level: 20,
        attack: 42,
    },
    {
        id: 8,
        name: "Bastón Estelar",
        slot: "weapon",
        icon: "bi-stars",
        rarity: "legendario",
        color: "#7c3aed",
        level: 14,
        magic: 38,
    },
    {
        id: 9,
        name: "Arco del Viento",
        slot: "weapon",
        icon: "bi-bullseye",
        rarity: "epico",
        color: "#0891b2",
        level: 11,
        attack: 29,
    },
    {
        id: 10,
        name: "Escudo de TíaJo",
        slot: "shield",
        icon: "bi-shield-fill-check",
        rarity: "legendario",
        color: "#255d50",
        level: 16,
        defense: 36,
    },
    {
        id: 11,
        name: "Alas de Luz",
        slot: "back",
        icon: "bi-feather",
        rarity: "mitico",
        color: "#facc15",
        level: 22,
        magic: 20,
        health: 20,
    },
    {
        id: 12,
        name: "Capa del Explorador",
        slot: "back",
        icon: "bi-wind",
        rarity: "epico",
        color: "#2563eb",
        level: 9,
        defense: 9,
    },
    {
        id: 13,
        name: "Mini Dragón",
        slot: "companion",
        icon: "bi-fire",
        rarity: "legendario",
        color: "#dc2626",
        level: 12,
        attack: 14,
    },
    {
        id: 14,
        name: "Luciernaga Mágica",
        slot: "companion",
        icon: "bi-lightbulb-fill",
        rarity: "raro",
        color: "#eab308",
        level: 4,
        magic: 8,
    },
];

const rarityLabels: Record<Rarity, string> = {
    comun: "Común",
    raro: "Raro",
    epico: "Épico",
    legendario: "Legendario",
    mitico: "Mítico",
};

const slotLabels: Record<EquipmentSlot, string> = {
    head: "Cabeza",
    chest: "Armadura",
    weapon: "Arma",
    shield: "Escudo",
    back: "Espalda",
    companion: "Compañero",
};

export default function MiRanitaPage() {
    const [characterName, setCharacterName] =
        useState("Pepe Guardián");

    const [characterClass, setCharacterClass] =
        useState<CharacterClass>("guardian");

    const [gender, setGender] =
        useState<CharacterGender>("neutral");

    const [skinColor, setSkinColor] = useState("#65a85b");
    const [eyeColor, setEyeColor] = useState("#1f2937");
    const [bellyColor, setBellyColor] = useState("#d9f99d");

    const [selectedSlot, setSelectedSlot] =
        useState<EquipmentSlot>("head");

    const [equipped, setEquipped] = useState<
        Partial<Record<EquipmentSlot, EquipmentItem>>
    >({
        head: equipment[0],
        chest: equipment[3],
        weapon: equipment[6],
        shield: equipment[9],
        back: equipment[10],
        companion: equipment[12],
    });

    const [showAura, setShowAura] = useState(true);
    const [showCompanion, setShowCompanion] = useState(true);
    const [showNameplate, setShowNameplate] = useState(true);

    const filteredEquipment = useMemo(
        () => equipment.filter((item) => item.slot === selectedSlot),
        [selectedSlot],
    );

    const stats = useMemo(() => {
        return Object.values(equipped).reduce(
            (total, item) => ({
                attack: total.attack + (item?.attack ?? 0),
                defense: total.defense + (item?.defense ?? 0),
                magic: total.magic + (item?.magic ?? 0),
                health: total.health + (item?.health ?? 0),
            }),
            {
                attack: 24,
                defense: 28,
                magic: 18,
                health: 100,
            },
        );
    }, [equipped]);

    const equipItem = (item: EquipmentItem) => {
        setEquipped((current) => ({
            ...current,
            [item.slot]: item,
        }));
    };

    const removeItem = (slot: EquipmentSlot) => {
        setEquipped((current) => {
            const next = { ...current };
            delete next[slot];
            return next;
        });
    };

    const selectedClass =
        classes.find((item) => item.id === characterClass) ??
        classes[0];

    return (
        <>
            <div className="tj-character-page">
                {/* HERO */}
                <section className="tj-character-hero">
                    <div>
                        <span className="tj-character-eyebrow">
                            <i className="bi bi-controller" />
                            Experiencia estudiantil
                        </span>

                        <h1>Estudio Mi Ranita</h1>

                        <p>
                            Diseña personajes, armaduras, clases y objetos
                            equipables inspirados en un mundo MMORPG educativo.
                        </p>
                    </div>

                    <div className="tj-character-hero-actions">
                        <button
                            type="button"
                            className="btn tj-character-secondary-button"
                        >
                            <i className="bi bi-collection-fill" />
                            Biblioteca
                        </button>

                        <button
                            type="button"
                            className="btn tj-character-primary-button"
                            data-bs-toggle="modal"
                            data-bs-target="#saveCharacterModal"
                        >
                            <i className="bi bi-cloud-check-fill" />
                            Guardar personaje
                        </button>
                    </div>
                </section>

                {/* ESTADÍSTICAS */}
                <section className="row g-3 mb-4">
                    <div className="col-xl-3 col-md-6">
                        <div className="tj-character-stat-card">
                            <span className="green">
                                <i className="bi bi-person-bounding-box" />
                            </span>

                            <div>
                                <small>Personajes creados</small>
                                <strong>36</strong>
                                <p>Modelos disponibles</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <div className="tj-character-stat-card">
                            <span className="purple">
                                <i className="bi bi-gem" />
                            </span>

                            <div>
                                <small>Objetos equipables</small>
                                <strong>284</strong>
                                <p>Armas, armaduras y accesorios</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <div className="tj-character-stat-card">
                            <span className="yellow">
                                <i className="bi bi-stars" />
                            </span>

                            <div>
                                <small>Objetos legendarios</small>
                                <strong>42</strong>
                                <p>Recompensas exclusivas</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6">
                        <div className="tj-character-stat-card">
                            <span className="blue">
                                <i className="bi bi-people-fill" />
                            </span>

                            <div>
                                <small>Ranitas activas</small>
                                <strong>7.842</strong>
                                <p>Personajes de estudiantes</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ESTUDIO PRINCIPAL */}
                <section className="tj-character-studio">
                    {/* PANEL IZQUIERDO */}
                    <aside className="tj-character-controls">
                        <header className="tj-character-panel-header">
                            <span>
                                <i className="bi bi-sliders" />
                            </span>

                            <div>
                                <h2>Editor de personaje</h2>
                                <p>Personaliza apariencia y clase.</p>
                            </div>
                        </header>

                        <div
                            className="accordion tj-character-accordion"
                            id="characterEditorAccordion"
                        >
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#characterIdentity"
                                    >
                                        <i className="bi bi-person-fill" />
                                        Identidad
                                    </button>
                                </h2>

                                <div
                                    id="characterIdentity"
                                    className="accordion-collapse collapse show"
                                    data-bs-parent="#characterEditorAccordion"
                                >
                                    <div className="accordion-body">
                                        <div className="mb-3">
                                            <label
                                                className="form-label"
                                                htmlFor="characterName"
                                            >
                                                Nombre del personaje
                                            </label>

                                            <input
                                                id="characterName"
                                                type="text"
                                                className="form-control"
                                                value={characterName}
                                                onChange={(event) =>
                                                    setCharacterName(
                                                        event.target.value,
                                                    )
                                                }
                                            />
                                        </div>

                                        <div>
                                            <label className="form-label">
                                                Estilo
                                            </label>

                                            <div className="tj-gender-selector">
                                                {(
                                                    [
                                                        "masculino",
                                                        "femenino",
                                                        "neutral",
                                                    ] as CharacterGender[]
                                                ).map((item) => (
                                                    <button
                                                        key={item}
                                                        type="button"
                                                        className={
                                                            gender === item
                                                                ? "active"
                                                                : ""
                                                        }
                                                        onClick={() =>
                                                            setGender(item)
                                                        }
                                                    >
                                                        {item === "masculino"
                                                            ? "Masculino"
                                                            : item ===
                                                                "femenino"
                                                              ? "Femenino"
                                                              : "Neutral"}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#characterClass"
                                    >
                                        <i className="bi bi-shield-shaded" />
                                        Clase MMORPG
                                    </button>
                                </h2>

                                <div
                                    id="characterClass"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#characterEditorAccordion"
                                >
                                    <div className="accordion-body">
                                        <div className="tj-class-selector">
                                            {classes.map((item) => (
                                                <button
                                                    key={item.id}
                                                    type="button"
                                                    className={
                                                        characterClass ===
                                                        item.id
                                                            ? "active"
                                                            : ""
                                                    }
                                                    onClick={() =>
                                                        setCharacterClass(
                                                            item.id,
                                                        )
                                                    }
                                                >
                                                    <span>
                                                        <i
                                                            className={`bi ${item.icon}`}
                                                        />
                                                    </span>

                                                    <div>
                                                        <strong>
                                                            {item.name}
                                                        </strong>

                                                        <small>
                                                            {
                                                                item.description
                                                            }
                                                        </small>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#characterColors"
                                    >
                                        <i className="bi bi-palette-fill" />
                                        Colores
                                    </button>
                                </h2>

                                <div
                                    id="characterColors"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#characterEditorAccordion"
                                >
                                    <div className="accordion-body">
                                        <div className="tj-character-color">
                                            <label htmlFor="skinColor">
                                                Piel
                                            </label>

                                            <input
                                                id="skinColor"
                                                type="color"
                                                value={skinColor}
                                                onChange={(event) =>
                                                    setSkinColor(
                                                        event.target.value,
                                                    )
                                                }
                                            />
                                        </div>

                                        <div className="tj-character-color">
                                            <label htmlFor="bellyColor">
                                                Vientre
                                            </label>

                                            <input
                                                id="bellyColor"
                                                type="color"
                                                value={bellyColor}
                                                onChange={(event) =>
                                                    setBellyColor(
                                                        event.target.value,
                                                    )
                                                }
                                            />
                                        </div>

                                        <div className="tj-character-color">
                                            <label htmlFor="eyeColor">
                                                Ojos
                                            </label>

                                            <input
                                                id="eyeColor"
                                                type="color"
                                                value={eyeColor}
                                                onChange={(event) =>
                                                    setEyeColor(
                                                        event.target.value,
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#characterEffects"
                                    >
                                        <i className="bi bi-stars" />
                                        Efectos visuales
                                    </button>
                                </h2>

                                <div
                                    id="characterEffects"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#characterEditorAccordion"
                                >
                                    <div className="accordion-body">
                                        <label className="tj-character-switch">
                                            <span>Aura mágica</span>

                                            <input
                                                type="checkbox"
                                                checked={showAura}
                                                onChange={(event) =>
                                                    setShowAura(
                                                        event.target.checked,
                                                    )
                                                }
                                            />
                                        </label>

                                        <label className="tj-character-switch">
                                            <span>Compañero visible</span>

                                            <input
                                                type="checkbox"
                                                checked={showCompanion}
                                                onChange={(event) =>
                                                    setShowCompanion(
                                                        event.target.checked,
                                                    )
                                                }
                                            />
                                        </label>

                                        <label className="tj-character-switch">
                                            <span>Placa de nombre</span>

                                            <input
                                                type="checkbox"
                                                checked={showNameplate}
                                                onChange={(event) =>
                                                    setShowNameplate(
                                                        event.target.checked,
                                                    )
                                                }
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* ESCENARIO CENTRAL */}
                    <main className="tj-character-stage-panel">
                        <header className="tj-character-stage-header">
                            <div>
                                <span>Vista previa del avatar</span>
                                <h2>Personaje MMORPG</h2>
                            </div>

                            <div>
                                <button type="button">
                                    <i className="bi bi-arrow-counterclockwise" />
                                    Reiniciar
                                </button>

                                <button type="button">
                                    <i className="bi bi-arrows-fullscreen" />
                                    Pantalla completa
                                </button>
                            </div>
                        </header>

                        <div className="tj-character-stage">
                            <div className="tj-stage-sky" />
                            <div className="tj-stage-mountains" />
                            <div className="tj-stage-ground" />
                            <div className="tj-stage-platform" />

                            {showAura && (
                                <div
                                    className={`tj-character-aura aura-${characterClass}`}
                                />
                            )}

                            <div
                                className={`tj-frog-character class-${characterClass} gender-${gender}`}
                            >
                                {equipped.back && (
                                    <div
                                        className="tj-equipped-back"
                                        style={{
                                            color: equipped.back.color,
                                        }}
                                    >
                                        <i
                                            className={`bi ${equipped.back.icon}`}
                                        />
                                    </div>
                                )}

                                <div className="tj-frog-head">
                                    <div
                                        className="tj-frog-face"
                                        style={{
                                            backgroundColor: skinColor,
                                        }}
                                    >
                                        <div
                                            className="tj-frog-eye left"
                                            style={{
                                                borderColor: eyeColor,
                                            }}
                                        >
                                            <span
                                                style={{
                                                    backgroundColor: eyeColor,
                                                }}
                                            />
                                        </div>

                                        <div
                                            className="tj-frog-eye right"
                                            style={{
                                                borderColor: eyeColor,
                                            }}
                                        >
                                            <span
                                                style={{
                                                    backgroundColor: eyeColor,
                                                }}
                                            />
                                        </div>

                                        <div className="tj-frog-mouth" />
                                    </div>

                                    {equipped.head && (
                                        <div
                                            className="tj-equipped-head"
                                            style={{
                                                color: equipped.head.color,
                                            }}
                                        >
                                            <i
                                                className={`bi ${equipped.head.icon}`}
                                            />
                                        </div>
                                    )}
                                </div>

                                <div
                                    className="tj-frog-body"
                                    style={{
                                        backgroundColor: skinColor,
                                    }}
                                >
                                    <div
                                        className="tj-frog-belly"
                                        style={{
                                            backgroundColor: bellyColor,
                                        }}
                                    />

                                    {equipped.chest && (
                                        <div
                                            className="tj-equipped-chest"
                                            style={{
                                                borderColor:
                                                    equipped.chest.color,
                                                background: `linear-gradient(145deg, ${equipped.chest.color}, #172033)`,
                                            }}
                                        >
                                            <i
                                                className={`bi ${equipped.chest.icon}`}
                                            />
                                        </div>
                                    )}

                                    <div className="tj-frog-arm left" />
                                    <div className="tj-frog-arm right" />
                                    <div className="tj-frog-leg left" />
                                    <div className="tj-frog-leg right" />
                                </div>

                                {equipped.weapon && (
                                    <div
                                        className="tj-equipped-weapon"
                                        style={{
                                            color: equipped.weapon.color,
                                        }}
                                    >
                                        <i
                                            className={`bi ${equipped.weapon.icon}`}
                                        />
                                    </div>
                                )}

                                {equipped.shield && (
                                    <div
                                        className="tj-equipped-shield"
                                        style={{
                                            color: equipped.shield.color,
                                        }}
                                    >
                                        <i
                                            className={`bi ${equipped.shield.icon}`}
                                        />
                                    </div>
                                )}

                                {showCompanion &&
                                    equipped.companion && (
                                        <div
                                            className="tj-character-companion"
                                            style={{
                                                color:
                                                    equipped.companion.color,
                                            }}
                                        >
                                            <i
                                                className={`bi ${equipped.companion.icon}`}
                                            />

                                            <span>
                                                {
                                                    equipped.companion
                                                        .name
                                                }
                                            </span>
                                        </div>
                                    )}
                            </div>

                            {showNameplate && (
                                <div className="tj-character-nameplate">
                                    <span>
                                        NIVEL 18 ·{" "}
                                        {selectedClass.name.toUpperCase()}
                                    </span>

                                    <strong>
                                        {characterName || "Sin nombre"}
                                    </strong>

                                    <div>
                                        <span style={{ width: "78%" }} />
                                    </div>
                                </div>
                            )}
                        </div>

                        <footer className="tj-character-stage-footer">
                            <div>
                                <span>
                                    <i className="bi bi-box" />
                                    Modelo visual
                                </span>

                                <span>
                                    <i className="bi bi-controller" />
                                    Estilo MMORPG
                                </span>

                                <span>
                                    <i className="bi bi-stars" />
                                    Equipamiento dinámico
                                </span>
                            </div>

                            <button type="button">
                                <i className="bi bi-camera-fill" />
                                Capturar personaje
                            </button>
                        </footer>
                    </main>

                    {/* PANEL DERECHO */}
                    <aside className="tj-character-side-panel">
                        <section className="tj-character-stats-card">
                            <header>
                                <span>
                                    <i
                                        className={`bi ${selectedClass.icon}`}
                                    />
                                </span>

                                <div>
                                    <h2>{selectedClass.name}</h2>
                                    <p>{selectedClass.description}</p>
                                </div>
                            </header>

                            <div className="tj-character-level">
                                <div>
                                    <small>Nivel</small>
                                    <strong>18</strong>
                                </div>

                                <span>7.840 / 10.000 XP</span>
                            </div>

                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    style={{ width: "78%" }}
                                />
                            </div>

                            <div className="tj-rpg-stat">
                                <span>
                                    <i className="bi bi-lightning-charge-fill" />
                                    Ataque
                                </span>

                                <strong>{stats.attack}</strong>
                            </div>

                            <div className="tj-rpg-stat">
                                <span>
                                    <i className="bi bi-shield-fill" />
                                    Defensa
                                </span>

                                <strong>{stats.defense}</strong>
                            </div>

                            <div className="tj-rpg-stat">
                                <span>
                                    <i className="bi bi-stars" />
                                    Magia
                                </span>

                                <strong>{stats.magic}</strong>
                            </div>

                            <div className="tj-rpg-stat">
                                <span>
                                    <i className="bi bi-heart-fill" />
                                    Salud
                                </span>

                                <strong>{stats.health}</strong>
                            </div>
                        </section>

                        <section className="tj-equipped-items-card">
                            <header>
                                <span>
                                    <i className="bi bi-backpack-fill" />
                                </span>

                                <div>
                                    <h2>Equipamiento actual</h2>
                                    <p>Objetos usados por el personaje.</p>
                                </div>
                            </header>

                            <div className="tj-equipped-grid">
                                {(
                                    Object.keys(
                                        slotLabels,
                                    ) as EquipmentSlot[]
                                ).map((slot) => {
                                    const item = equipped[slot];

                                    return (
                                        <button
                                            key={slot}
                                            type="button"
                                            className={
                                                selectedSlot === slot
                                                    ? "active"
                                                    : ""
                                            }
                                            onClick={() =>
                                                setSelectedSlot(slot)
                                            }
                                        >
                                            {item ? (
                                                <>
                                                    <span
                                                        className={`rarity-${item.rarity}`}
                                                        style={{
                                                            color: item.color,
                                                        }}
                                                    >
                                                        <i
                                                            className={`bi ${item.icon}`}
                                                        />
                                                    </span>

                                                    <small>
                                                        {slotLabels[slot]}
                                                    </small>

                                                    <strong>
                                                        {item.name}
                                                    </strong>
                                                </>
                                            ) : (
                                                <>
                                                    <span className="empty">
                                                        <i className="bi bi-plus-lg" />
                                                    </span>

                                                    <small>
                                                        {slotLabels[slot]}
                                                    </small>

                                                    <strong>Vacío</strong>
                                                </>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </section>

                        <section className="tj-character-reward-card">
                            <span>
                                <i className="bi bi-gift-fill" />
                            </span>

                            <div>
                                <h2>Recompensa asociada</h2>

                                <p>
                                    Desbloquea este personaje al completar una
                                    temporada o misión especial.
                                </p>

                                <button type="button">
                                    Configurar desbloqueo
                                </button>
                            </div>
                        </section>
                    </aside>
                </section>

                {/* INVENTARIO */}
                <section className="tj-inventory-section">
                    <header className="tj-section-heading">
                        <div>
                            <span>Biblioteca de equipamiento</span>
                            <h2>Inventario MMORPG</h2>

                            <p>
                                Selecciona una categoría y equipa objetos en
                                tiempo real.
                            </p>
                        </div>

                        <div className="tj-inventory-actions">
                            <button type="button">
                                <i className="bi bi-plus-circle" />
                                Crear objeto
                            </button>

                            <button type="button">
                                Administrar inventario
                                <i className="bi bi-arrow-right" />
                            </button>
                        </div>
                    </header>

                    <div className="tj-inventory-tabs">
                        {(
                            Object.keys(
                                slotLabels,
                            ) as EquipmentSlot[]
                        ).map((slot) => (
                            <button
                                key={slot}
                                type="button"
                                className={
                                    selectedSlot === slot ? "active" : ""
                                }
                                onClick={() => setSelectedSlot(slot)}
                            >
                                <i
                                    className={
                                        slot === "head"
                                            ? "bi bi-gem"
                                            : slot === "chest"
                                              ? "bi bi-person-bounding-box"
                                              : slot === "weapon"
                                                ? "bi bi-lightning-charge"
                                                : slot === "shield"
                                                  ? "bi bi-shield"
                                                  : slot === "back"
                                                    ? "bi bi-feather"
                                                    : "bi bi-fire"
                                    }
                                />

                                {slotLabels[slot]}
                            </button>
                        ))}
                    </div>

                    <div className="row g-3">
                        {filteredEquipment.map((item) => {
                            const isEquipped =
                                equipped[item.slot]?.id === item.id;

                            return (
                                <div
                                    className="col-xl-3 col-md-6"
                                    key={item.id}
                                >
                                    <article
                                        className={`tj-inventory-item rarity-${item.rarity} ${
                                            isEquipped ? "equipped" : ""
                                        }`}
                                    >
                                        <div className="tj-item-preview">
                                            <div
                                                style={{
                                                    color: item.color,
                                                    borderColor: item.color,
                                                }}
                                            >
                                                <i
                                                    className={`bi ${item.icon}`}
                                                />
                                            </div>

                                            <span
                                                className={`tj-rarity-label ${item.rarity}`}
                                            >
                                                {
                                                    rarityLabels[
                                                        item.rarity
                                                    ]
                                                }
                                            </span>
                                        </div>

                                        <div className="tj-item-body">
                                            <span>
                                                Nivel requerido: {item.level}
                                            </span>

                                            <h3>{item.name}</h3>

                                            <div className="tj-item-stat-list">
                                                {item.attack && (
                                                    <span>
                                                        <i className="bi bi-lightning-charge-fill" />
                                                        +{item.attack} ataque
                                                    </span>
                                                )}

                                                {item.defense && (
                                                    <span>
                                                        <i className="bi bi-shield-fill" />
                                                        +{item.defense} defensa
                                                    </span>
                                                )}

                                                {item.magic && (
                                                    <span>
                                                        <i className="bi bi-stars" />
                                                        +{item.magic} magia
                                                    </span>
                                                )}

                                                {item.health && (
                                                    <span>
                                                        <i className="bi bi-heart-fill" />
                                                        +{item.health} salud
                                                    </span>
                                                )}
                                            </div>

                                            <footer>
                                                {isEquipped ? (
                                                    <button
                                                        type="button"
                                                        className="remove"
                                                        onClick={() =>
                                                            removeItem(
                                                                item.slot,
                                                            )
                                                        }
                                                    >
                                                        <i className="bi bi-x-circle" />
                                                        Desequipar
                                                    </button>
                                                ) : (
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            equipItem(item)
                                                        }
                                                    >
                                                        <i className="bi bi-check-circle" />
                                                        Equipar
                                                    </button>
                                                )}

                                                <button type="button">
                                                    <i className="bi bi-three-dots" />
                                                </button>
                                            </footer>
                                        </div>
                                    </article>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* COLECCIONES */}
                <section className="tj-character-collections">
                    <header className="tj-section-heading">
                        <div>
                            <span>Conjuntos temáticos</span>
                            <h2>Colecciones de personajes</h2>

                            <p>
                                Sets completos para temporadas, eventos y
                                recompensas.
                            </p>
                        </div>

                        <button type="button">
                            Ver todas
                            <i className="bi bi-arrow-right" />
                        </button>
                    </header>

                    <div className="row g-4">
                        <div className="col-xl-4">
                            <article className="tj-character-collection forest">
                                <div>
                                    <span>Colección legendaria</span>
                                    <h3>Guardianes del Bosque</h3>

                                    <p>
                                        Armaduras naturales, capas, mascotas y
                                        armas mágicas.
                                    </p>

                                    <button type="button">
                                        Ver 18 objetos
                                    </button>
                                </div>

                                <i className="bi bi-tree-fill" />
                            </article>
                        </div>

                        <div className="col-xl-4">
                            <article className="tj-character-collection magic">
                                <div>
                                    <span>Colección épica</span>
                                    <h3>Academia Arcana</h3>

                                    <p>
                                        Túnicas, bastones, grimorios y efectos
                                        mágicos.
                                    </p>

                                    <button type="button">
                                        Ver 24 objetos
                                    </button>
                                </div>

                                <i className="bi bi-stars" />
                            </article>
                        </div>

                        <div className="col-xl-4">
                            <article className="tj-character-collection space">
                                <div>
                                    <span>Colección mítica</span>
                                    <h3>Exploradores Galácticos</h3>

                                    <p>
                                        Trajes tecnológicos, drones y armas de
                                        energía.
                                    </p>

                                    <button type="button">
                                        Ver 16 objetos
                                    </button>
                                </div>

                                <i className="bi bi-rocket-takeoff-fill" />
                            </article>
                        </div>
                    </div>
                </section>
            </div>

            {/* MODAL GUARDAR */}
            <div
                className="modal fade"
                id="saveCharacterModal"
                tabIndex={-1}
                aria-labelledby="saveCharacterModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content tj-save-character-modal">
                        <div className="modal-header">
                            <div>
                                <span>
                                    <i className="bi bi-cloud-check-fill" />
                                    Guardar personaje
                                </span>

                                <h2
                                    className="modal-title"
                                    id="saveCharacterModalLabel"
                                >
                                    Configurar Mi Ranita
                                </h2>

                                <p>
                                    Define disponibilidad, rareza y condiciones
                                    de desbloqueo.
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
                                    <section className="tj-save-character-form">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Nombre
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control"
                                                value={characterName}
                                                onChange={(event) =>
                                                    setCharacterName(
                                                        event.target.value,
                                                    )
                                                }
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">
                                                Rareza
                                            </label>

                                            <select
                                                className="form-select"
                                                defaultValue="legendario"
                                            >
                                                <option value="comun">
                                                    Común
                                                </option>
                                                <option value="raro">
                                                    Raro
                                                </option>
                                                <option value="epico">
                                                    Épico
                                                </option>
                                                <option value="legendario">
                                                    Legendario
                                                </option>
                                                <option value="mitico">
                                                    Mítico
                                                </option>
                                            </select>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">
                                                Disponibilidad
                                            </label>

                                            <select
                                                className="form-select"
                                                defaultValue="temporada"
                                            >
                                                <option value="todos">
                                                    Disponible para todos
                                                </option>
                                                <option value="temporada">
                                                    Recompensa de temporada
                                                </option>
                                                <option value="mision">
                                                    Completar una misión
                                                </option>
                                                <option value="tienda">
                                                    Comprar en la tienda
                                                </option>
                                                <option value="exclusivo">
                                                    Entrega exclusiva
                                                </option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="form-label">
                                                Descripción
                                            </label>

                                            <textarea
                                                className="form-control"
                                                rows={4}
                                                defaultValue="Personaje legendario de la clase Guardián, equipado con objetos exclusivos."
                                            />
                                        </div>
                                    </section>
                                </div>

                                <div className="col-lg-5">
                                    <section className="tj-save-character-preview">
                                        <span>Vista previa</span>

                                        <div
                                            style={{
                                                backgroundColor: skinColor,
                                            }}
                                        >
                                            <i
                                                className={`bi ${selectedClass.icon}`}
                                            />
                                        </div>

                                        <strong>{characterName}</strong>

                                        <small>
                                            Nivel 18 · {selectedClass.name}
                                        </small>

                                        <p>
                                            Ataque {stats.attack} · Defensa{" "}
                                            {stats.defense} · Magia{" "}
                                            {stats.magic}
                                        </p>
                                    </section>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn tj-character-modal-cancel"
                                data-bs-dismiss="modal"
                            >
                                Cancelar
                            </button>

                            <button
                                type="button"
                                className="btn tj-character-modal-draft"
                            >
                                <i className="bi bi-save" />
                                Guardar borrador
                            </button>

                            <button
                                type="button"
                                className="btn tj-character-modal-publish"
                            >
                                <i className="bi bi-check-circle-fill" />
                                Publicar personaje
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}