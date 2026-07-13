import RanitaLogout from "../../assets/images/auth/ranita-logout.webp"

export default function ModalCerrarSesion() {
    const handleLogout = () => {
        console.log("Cerrar sesión");
    };

    return (
        <div
            className="modal fade"
            id="logoutModal"
            tabIndex={-1}
            aria-hidden="true"
            aria-labelledby="logoutModalTitle"
        >
            <div className="modal-dialog modal-dialog-centered tj-logout-dialog">
                <div className="modal-content tj-logout-content">
                    <button
                        type="button"
                        className="tj-logout-close"
                        data-bs-dismiss="modal"
                        aria-label="Cerrar modal"
                    >
                        <i className="bi bi-x-lg" />
                    </button>

                    <div className="tj-logout-grid">
                        <div className="tj-logout-mascot">
                            <img
                                src={RanitaLogout}
                                alt="Ranita TíaJo"
                            />
                        </div>

                        <div className="tj-logout-info">
                            <span className="tj-safe-badge">
                                <i className="bi bi-shield-check" />
                                Sesión protegida
                            </span>

                            <h2 id="logoutModalTitle">
                                ¿Nos vemos pronto?
                            </h2>

                            <p>
                                Tu progreso, configuraciones y actividades se
                                guardarán automáticamente para que puedas
                                continuar cuando quieras.
                            </p>

                            <div className="tj-logout-cards">
                                <div>
                                    <i className="bi bi-lock" />

                                    <strong>Sesión segura</strong>

                                    <span>
                                        Protegemos tu información.
                                    </span>
                                </div>

                                <div>
                                    <i className="bi bi-cloud-check" />

                                    <strong>Datos guardados</strong>

                                    <span>
                                        Todo queda respaldado.
                                    </span>
                                </div>

                                <div>
                                    <i className="bi bi-clock-history" />

                                    <strong>Vuelve cuando quieras</strong>

                                    <span>
                                        Continúa donde quedaste.
                                    </span>
                                </div>
                            </div>

                            <div className="tj-logout-actions">
                                <button
                                    type="button"
                                    className="btn tj-btn-stay"
                                    data-bs-dismiss="modal"
                                >
                                    Seguir aquí
                                </button>

                                <button
                                    type="button"
                                    className="btn tj-btn-exit"
                                    onClick={handleLogout}
                                >
                                    <i className="bi bi-box-arrow-right" />
                                    Sí, cerrar sesión
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}