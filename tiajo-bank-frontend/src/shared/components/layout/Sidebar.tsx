import { NavLink } from "react-router-dom";

import Logo from "../../assets/icons/logo-tiajobank.webp";
import RanitaAyuda from "../../assets/images/ranita-logout.webp";

export default function Sidebar() {
    return (
        <aside
            className="app-sidebar bg-body-secondary shadow sidebar-tiajo"
            data-bs-theme="dark"
        >
            <div className="sidebar-logo">
                <img src={Logo} alt="TíaJo Bank" />
            </div>

            <nav className="sidebar-menu">
                <NavLink
                    to="inicio"
                    end
                    className={({ isActive }) =>
                        `menu-link ${isActive ? "active" : ""}`
                    }
                >
                    <i className="bi bi-grid-1x2-fill" />
                    <span>Dashboard</span>
                </NavLink>

                <span className="menu-title">EDUCACIÓN</span>

                <details className="menu-dropdown">
                    <summary>
                        <i className="bi bi-journal-bookmark" />
                        <span>Gestión educativa</span>
                        <i className="bi bi-chevron-right arrow" />
                    </summary>

                    <div className="submenu">
                        <NavLink
                            to="actividades"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Actividades
                        </NavLink>

                        <NavLink
                            to="material-educativo"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Material educativo
                        </NavLink>

                        <NavLink
                            to="laboratorio-virtual"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Laboratorio virtual
                        </NavLink>

                        <NavLink
                            to="evaluaciones"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Evaluaciones
                        </NavLink>
                    </div>
                </details>

                <span className="menu-title">GAMIFICACIÓN</span>

                <details className="menu-dropdown">
                    <summary>
                        <i className="bi bi-trophy" />
                        <span>Exp. estudiantil</span>
                        <i className="bi bi-chevron-right arrow" />
                    </summary>

                    <div className="submenu">
                        <NavLink
                            to="insignias"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Insignias
                        </NavLink>

                        <NavLink
                            to="ligas-temporadas"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Ligas y temporadas
                        </NavLink>

                        <NavLink
                            to="mi-ranita"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Mi Ranita
                        </NavLink>

                        <NavLink
                            to="mundo-virtual"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Mundo virtual escolar
                        </NavLink>

                        <NavLink
                            to="economia-escolar"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Economía escolar
                        </NavLink>
                    </div>
                </details>

                <span className="menu-title">CONTENIDO</span>

                <details className="menu-dropdown">
                    <summary>
                        <i className="bi bi-folder2-open" />
                        <span>Gest. de contenido</span>
                        <i className="bi bi-chevron-right arrow" />
                    </summary>

                    <div className="submenu">
                        <NavLink
                            to="guias-recursos"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Guías y recursos
                        </NavLink>

                        <NavLink
                            to="blog"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Blog educativo
                        </NavLink>

                        <NavLink
                            to="radio-escolar"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Radio escolar
                        </NavLink>

                        <NavLink
                            to="tiajo-tv"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            TíaJo TV
                        </NavLink>

                        <NavLink
                            to="series-interactivas"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Series interactivas
                        </NavLink>

                        <NavLink
                            to="disenador-tarjetas"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Diseñador de tarjetas
                        </NavLink>
                    </div>
                </details>

                <span className="menu-title">COMUNIDAD</span>

                <details className="menu-dropdown">
                    <summary>
                        <i className="bi bi-people" />
                        <span>Uss. y comunidad</span>
                        <i className="bi bi-chevron-right arrow" />
                    </summary>

                    <div className="submenu">
                        <NavLink
                            to="colegios"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Colegios
                        </NavLink>

                        <NavLink
                            to="usuarios"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Usuarios
                        </NavLink>

                        <NavLink
                            to="estudiantes"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Estudiantes
                        </NavLink>

                        <NavLink
                            to="apoderados"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Apoderados
                        </NavLink>

                        <NavLink
                            to="docentes"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Docentes
                        </NavLink>

                        <NavLink
                            to="area-familiar"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Área familiar
                        </NavLink>
                    </div>
                </details>

                <span className="menu-title">BIENESTAR</span>

                <details className="menu-dropdown">
                    <summary>
                        <i className="bi bi-heart-pulse" />
                        <span>Bien. y apoyo</span>
                        <i className="bi bi-chevron-right arrow" />
                    </summary>

                    <div className="submenu">
                        <NavLink
                            to="bienestar-emocional"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Bienestar emocional
                        </NavLink>

                        <NavLink
                            to="centro-emocional"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Centro emocional
                        </NavLink>

                        <NavLink
                            to="chats-seguros"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Chats seguros
                        </NavLink>

                        <NavLink
                            to="asistente-educativo"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Asistente educativo
                        </NavLink>
                    </div>
                </details>

                <span className="menu-title">SISTEMA</span>

                <details className="menu-dropdown">
                    <summary>
                        <i className="bi bi-gear" />
                        <span>Configuración</span>
                        <i className="bi bi-chevron-right arrow" />
                    </summary>

                    <div className="submenu">
                        <NavLink
                            to="planes-pagos"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Planes y pagos
                        </NavLink>

                        <NavLink
                            to="mascotas"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Mascotas
                        </NavLink>

                        <NavLink
                            to="tipos-establecimiento"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Tipos de establecimiento
                        </NavLink>

                        <NavLink
                            to="tipos-ensenanza"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Tipos de enseñanza
                        </NavLink>

                        <NavLink
                            to="idiomas"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Idiomas disponibles
                        </NavLink>

                        <NavLink
                            to="paises"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Países
                        </NavLink>

                        <NavLink
                            to="regiones"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Regiones
                        </NavLink>

                        <NavLink
                            to="provincias"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Provincias
                        </NavLink>

                        <NavLink
                            to="comunas"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Comunas
                        </NavLink>

                        <NavLink
                            to="roles"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Roles
                        </NavLink>

                        <NavLink
                            to="permisos"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Permisos
                        </NavLink>
                    </div>
                </details>
            </nav>

            <div className="sidebar-help">
                <img src={RanitaAyuda} alt="Ranita de TíaJo Bank" />

                <h6>Centro de ayuda</h6>

                <p>Soporte, seguridad y asistencia para colegios.</p>

                <NavLink to="soporte" className="btn-help">
                    Ir a soporte
                </NavLink>
            </div>
        </aside>
    );
}