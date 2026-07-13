import Logo from "../../assets/icons/users/logo-administrador.png";

type UsuarioGamificado = {
    nombre: string;
    nombreCorto: string;
    rol: string;
    correo: string;
    nivel: number;
    experienciaActual: number;
    experienciaSiguienteNivel: number;
    insignias: number;
    monedas: number;
    racha: number;
};

const usuario: UsuarioGamificado = {
    nombre: "Benjamín Patricio Cáceres Ramírez",
    nombreCorto: "Benjamín Cáceres",
    rol: "Administrador",
    correo: "administrador@tiajo-bank.cl",
    nivel: 12,
    experienciaActual: 740,
    experienciaSiguienteNivel: 1000,
    insignias: 8,
    monedas: 2450,
    racha: 7,
};

export default function Navbar() {
    const porcentajeExperiencia = Math.min(
        Math.round(
            (usuario.experienciaActual /
                usuario.experienciaSiguienteNivel) *
                100,
        ),
        100,
    );

    const experienciaRestante = Math.max(
        usuario.experienciaSiguienteNivel -
            usuario.experienciaActual,
        0,
    );

    return (
        <nav className="app-header navbar navbar-expand bg-body">
            <div className="container-fluid">
                {/* IZQUIERDA */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <button
                            type="button"
                            className="nav-link btn btn-link"
                            data-lte-toggle="sidebar"
                            aria-label="Abrir o cerrar menú lateral"
                        >
                            <i className="bi bi-list fs-4" />
                        </button>
                    </li>

                    <li className="nav-item d-none d-md-flex align-items-center ms-2">
                        <div>
                            <small className="text-muted fw-semibold d-block">
                                Panel actual
                            </small>

                            <span className="fw-bold text-dark">
                                <i className="bi bi-grid-1x2-fill text-success me-1" />
                                Dashboard general
                            </span>
                        </div>
                    </li>
                </ul>

                {/* BUSCADOR */}
                <form
                    className="d-none d-xl-flex ms-4 flex-grow-1"
                    style={{ maxWidth: 420 }}
                    onSubmit={(event) => event.preventDefault()}
                >
                    <div className="input-group navbar-search">
                        <span className="input-group-text bg-white border-end-0">
                            <i className="bi bi-search text-muted" />
                        </span>

                        <input
                            type="search"
                            className="form-control border-start-0"
                            placeholder="Buscar contenido, usuarios o módulos"
                            aria-label="Buscar contenido"
                        />
                    </div>
                </form>

                {/* DERECHA */}
                <ul className="navbar-nav ms-auto align-items-center gap-1">
                    {/* CREAR */}
                    <li className="nav-item dropdown d-none d-md-block">
                        <button
                            type="button"
                            className="btn btn-success rounded-pill px-3 fw-bold"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="bi bi-plus-circle me-1" />
                            Crear
                        </button>

                        <ul className="dropdown-menu dropdown-menu-end shadow border-0 rounded-4 p-2">
                            <li>
                                <button
                                    type="button"
                                    className="dropdown-item rounded-3"
                                >
                                    <i className="bi bi-file-earmark-plus me-2" />
                                    Nueva guía
                                </button>
                            </li>

                            <li>
                                <button
                                    type="button"
                                    className="dropdown-item rounded-3"
                                >
                                    <i className="bi bi-controller me-2" />
                                    Crear juego
                                </button>
                            </li>

                            <li>
                                <button
                                    type="button"
                                    className="dropdown-item rounded-3"
                                >
                                    <i className="bi bi-newspaper me-2" />
                                    Publicar artículo
                                </button>
                            </li>

                            <li>
                                <button
                                    type="button"
                                    className="dropdown-item rounded-3"
                                >
                                    <i className="bi bi-tv me-2" />
                                    Programar TíaJo TV
                                </button>
                            </li>
                        </ul>
                    </li>

                    {/* MENSAJES */}
                    <li className="nav-item dropdown">
                        <button
                            type="button"
                            className="nav-link btn btn-link position-relative"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            aria-label="Abrir mensajes"
                        >
                            <i className="bi bi-chat-text fs-5" />

                            <span className="badge bg-danger navbar-badge">
                                3
                            </span>
                        </button>

                        <ul
                            className="dropdown-menu dropdown-menu-end shadow border-0 rounded-4 p-2 navbar-dropdown-list"
                            style={{ minWidth: 320 }}
                        >
                            <li className="px-3 py-2">
                                <strong>Mensajes recientes</strong>

                                <small className="text-muted d-block">
                                    Centro de comunicaciones
                                </small>
                            </li>

                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li>
                                <button
                                    type="button"
                                    className="dropdown-item rounded-3 py-2"
                                >
                                    <div className="d-flex gap-2">
                                        <span className="text-success">
                                            <i className="bi bi-person-workspace fs-5" />
                                        </span>

                                        <div className="text-start">
                                            <strong className="d-block small">
                                                Docente solicitó ayuda
                                            </strong>

                                            <small className="text-muted">
                                                Colegio San José · hace 8 min
                                            </small>
                                        </div>
                                    </div>
                                </button>
                            </li>

                            <li>
                                <button
                                    type="button"
                                    className="dropdown-item rounded-3 py-2"
                                >
                                    <div className="d-flex gap-2">
                                        <span className="text-primary">
                                            <i className="bi bi-house-heart fs-5" />
                                        </span>

                                        <div className="text-start">
                                            <strong className="d-block small">
                                                Mensaje de apoderado
                                            </strong>

                                            <small className="text-muted">
                                                Área familiar · hace 20 min
                                            </small>
                                        </div>
                                    </div>
                                </button>
                            </li>

                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li>
                                <button
                                    type="button"
                                    className="dropdown-item text-center fw-bold text-success rounded-3"
                                >
                                    Ver todos los mensajes
                                </button>
                            </li>
                        </ul>
                    </li>

                    {/* NOTIFICACIONES */}
                    <li className="nav-item dropdown">
                        <button
                            type="button"
                            className="nav-link btn btn-link position-relative"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            aria-label="Abrir notificaciones"
                        >
                            <i className="bi bi-bell fs-5" />

                            <span className="badge bg-warning text-dark navbar-badge">
                                15
                            </span>
                        </button>

                        <ul
                            className="dropdown-menu dropdown-menu-end shadow border-0 rounded-4 p-2 navbar-dropdown-list"
                            style={{ minWidth: 320 }}
                        >
                            <li className="px-3 py-2">
                                <strong>Notificaciones</strong>

                                <small className="text-muted d-block">
                                    Resumen importante del sistema
                                </small>
                            </li>

                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li>
                                <button
                                    type="button"
                                    className="dropdown-item rounded-3 py-2"
                                >
                                    <div className="d-flex gap-2">
                                        <span className="text-warning">
                                            <i className="bi bi-credit-card fs-5" />
                                        </span>

                                        <div className="text-start">
                                            <strong className="d-block small">
                                                3 colegios por vencer
                                            </strong>

                                            <small className="text-muted">
                                                Planes y pagos · próximos 7 días
                                            </small>
                                        </div>
                                    </div>
                                </button>
                            </li>

                            <li>
                                <button
                                    type="button"
                                    className="dropdown-item rounded-3 py-2"
                                >
                                    <div className="d-flex gap-2">
                                        <span className="text-danger">
                                            <i className="bi bi-shield-exclamation fs-5" />
                                        </span>

                                        <div className="text-start">
                                            <strong className="d-block small">
                                                Alerta de seguridad
                                            </strong>

                                            <small className="text-muted">
                                                Intentos bloqueados hoy
                                            </small>
                                        </div>
                                    </div>
                                </button>
                            </li>

                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li>
                                <button
                                    type="button"
                                    className="dropdown-item text-center fw-bold text-success rounded-3"
                                >
                                    Ver todas
                                </button>
                            </li>
                        </ul>
                    </li>

                    {/* PANTALLA COMPLETA */}
                    <li className="nav-item d-none d-md-block">
                        <button
                            type="button"
                            className="nav-link btn btn-link"
                            data-lte-toggle="fullscreen"
                            aria-label="Activar pantalla completa"
                        >
                            <i
                                data-lte-icon="maximize"
                                className="bi bi-arrows-fullscreen fs-5"
                            />

                            <i
                                data-lte-icon="minimize"
                                className="bi bi-fullscreen-exit fs-5"
                                style={{ display: "none" }}
                            />
                        </button>
                    </li>

                    {/* PERFIL GAMIFICADO */}
                    <li className="nav-item dropdown ms-2">
                        <button
                            type="button"
                            className="nav-link btn btn-link dropdown-toggle d-flex align-items-center gap-2 user-navbar-button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <div className="user-avatar-wrapper">
                                <img
                                    src={Logo}
                                    className="user-navbar-avatar"
                                    width={42}
                                    height={42}
                                    alt={`Avatar de ${usuario.nombre}`}
                                />

                                <span className="user-navbar-level">
                                    {usuario.nivel}
                                </span>

                                <span
                                    className="user-online-dot"
                                    aria-label="Usuario conectado"
                                />
                            </div>

                            <span className="d-none d-lg-block text-start user-navbar-info">
                                <strong className="d-block small text-dark user-navbar-name">
                                    {usuario.nombreCorto}
                                </strong>

                                <small className="text-muted">
                                    {usuario.rol} · Nivel {usuario.nivel}
                                </small>
                            </span>
                        </button>

                        <ul
                            className="dropdown-menu dropdown-menu-end border-0 p-0 user-game-menu"
                            style={{ minWidth: 360 }}
                        >
                            {/* CABECERA */}
                            <li className="user-game-header">
                                <div className="user-game-decoration user-game-decoration-one" />
                                <div className="user-game-decoration user-game-decoration-two" />

                                <div className="d-flex align-items-center gap-3 position-relative">
                                    <div className="user-profile-avatar-wrapper">
                                        <img
                                            src={Logo}
                                            className="user-profile-avatar"
                                            width={72}
                                            height={72}
                                            alt={`Avatar de ${usuario.nombre}`}
                                        />

                                        <span className="user-profile-level">
                                            {usuario.nivel}
                                        </span>
                                    </div>

                                    <div className="flex-grow-1 overflow-hidden">
                                        <small className="user-player-label">
                                            PERFIL DE JUGADOR
                                        </small>

                                        <strong className="d-block text-white text-truncate user-profile-name">
                                            {usuario.nombreCorto}
                                        </strong>

                                        <span className="user-profile-role">
                                            <i className="bi bi-shield-check me-1" />
                                            {usuario.rol}
                                        </span>
                                    </div>
                                </div>
                            </li>

                            {/* NIVEL Y EXPERIENCIA */}
                            <li className="user-game-progress-section">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <div>
                                        <small className="text-muted d-block">
                                            Nivel actual
                                        </small>

                                        <strong className="user-current-level">
                                            Nivel {usuario.nivel}
                                        </strong>
                                    </div>

                                    <span className="user-xp-badge">
                                        <i className="bi bi-lightning-charge-fill me-1" />
                                        {usuario.experienciaActual} XP
                                    </span>
                                </div>

                                <div
                                    className="progress user-xp-progress"
                                    role="progressbar"
                                    aria-label="Progreso de experiencia"
                                    aria-valuenow={porcentajeExperiencia}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                >
                                    <div
                                        className="progress-bar user-xp-progress-bar"
                                        style={{
                                            width: `${porcentajeExperiencia}%`,
                                        }}
                                    >
                                        <span className="user-xp-shine" />
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between mt-2">
                                    <small className="text-muted">
                                        {porcentajeExperiencia}% completado
                                    </small>

                                    <small className="fw-semibold text-success">
                                        Faltan {experienciaRestante} XP
                                    </small>
                                </div>
                            </li>

                            {/* ESTADÍSTICAS */}
                            <li className="user-game-stats">
                                <div className="user-game-stat">
                                    <span className="user-game-stat-icon stat-icon-badges">
                                        <i className="bi bi-award-fill" />
                                    </span>

                                    <div>
                                        <strong>{usuario.insignias}</strong>
                                        <small>Insignias</small>
                                    </div>
                                </div>

                                <div className="user-game-stat">
                                    <span className="user-game-stat-icon stat-icon-coins">
                                        <i className="bi bi-coin" />
                                    </span>

                                    <div>
                                        <strong>
                                            {usuario.monedas.toLocaleString(
                                                "es-CL",
                                            )}
                                        </strong>
                                        <small>Monedas</small>
                                    </div>
                                </div>

                                <div className="user-game-stat">
                                    <span className="user-game-stat-icon stat-icon-streak">
                                        <i className="bi bi-fire" />
                                    </span>

                                    <div>
                                        <strong>{usuario.racha}</strong>
                                        <small>Días de racha</small>
                                    </div>
                                </div>
                            </li>

                            {/* MISIÓN */}
                            <li className="px-3 pb-3">
                                <div className="user-daily-mission">
                                    <div className="user-mission-icon">
                                        <i className="bi bi-stars" />
                                    </div>

                                    <div className="flex-grow-1">
                                        <small className="text-muted d-block">
                                            Misión diaria
                                        </small>

                                        <strong className="d-block small">
                                            Revisar notificaciones pendientes
                                        </strong>
                                    </div>

                                    <span className="badge rounded-pill text-bg-success">
                                        +50 XP
                                    </span>
                                </div>
                            </li>

                            <li>
                                <hr className="dropdown-divider my-0" />
                            </li>

                            {/* OPCIONES */}
                            <li className="p-2">
                                <button
                                    type="button"
                                    className="dropdown-item rounded-3 py-2 user-menu-option"
                                >
                                    <span className="user-menu-option-icon">
                                        <i className="bi bi-person-fill" />
                                    </span>

                                    <span>
                                        <strong className="d-block">
                                            Mi perfil
                                        </strong>

                                        <small className="text-muted">
                                            Información y datos personales
                                        </small>
                                    </span>
                                </button>

                                <button
                                    type="button"
                                    className="dropdown-item rounded-3 py-2 user-menu-option"
                                >
                                    <span className="user-menu-option-icon user-menu-option-icon-yellow">
                                        <i className="bi bi-trophy-fill" />
                                    </span>

                                    <span>
                                        <strong className="d-block">
                                            Logros e insignias
                                        </strong>

                                        <small className="text-muted">
                                            Revisa tu progreso en TíaJo Bank
                                        </small>
                                    </span>
                                </button>

                                <button
                                    type="button"
                                    className="dropdown-item rounded-3 py-2 user-menu-option"
                                >
                                    <span className="user-menu-option-icon user-menu-option-icon-blue">
                                        <i className="bi bi-shield-lock-fill" />
                                    </span>

                                    <span>
                                        <strong className="d-block">
                                            Seguridad
                                        </strong>

                                        <small className="text-muted">
                                            Contraseña y acceso a tu cuenta
                                        </small>
                                    </span>
                                </button>

                                <button
                                    type="button"
                                    className="dropdown-item rounded-3 py-2 user-menu-option"
                                >
                                    <span className="user-menu-option-icon user-menu-option-icon-purple">
                                        <i className="bi bi-sliders" />
                                    </span>

                                    <span>
                                        <strong className="d-block">
                                            Preferencias
                                        </strong>

                                        <small className="text-muted">
                                            Personaliza tu experiencia
                                        </small>
                                    </span>
                                </button>
                            </li>

                            <li>
                                <hr className="dropdown-divider my-0" />
                            </li>

                            {/* CERRAR SESIÓN */}
                            <li className="p-2">
                                <button
                                    type="button"
                                    className="dropdown-item rounded-3 text-danger fw-bold"
                                    data-bs-toggle="modal"
                                    data-bs-target="#logoutModal"
                                >
                                    <i className="bi bi-box-arrow-right me-2" />
                                    Cerrar sesión
                                </button>
                            </li>

                            <li className="user-account-footer">
                                <i className="bi bi-envelope me-1" />
                                {usuario.correo}
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
}