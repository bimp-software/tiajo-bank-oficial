import { Link } from "react-router-dom";

export default function Footer(){
    return (
        <footer className="app-footer tj-footer">
            <div className="tj-footer-left">
                <strong>
                     <p>&copy; {new Date().getFullYear()} TiaJo Bank</p>
                </strong>

                <span>
                    Desarrollado por
                    <Link to="#" className="tj-footer-brand">
                        Bimp Software SpA
                    </Link>
                </span>
            </div>

            <div className="tj-footer-center d-none d-lg-flex">
                <a href="#">
                    <i className="bi bi-life-preserver"></i>
                    Centro de ayuda
                </a>

                <a href="#">
                    <i className="bi bi-shield-check"></i>
                    Seguridad
                </a>

                <a href="#">
                    <i className="bi bi-file-earmark-text"></i>
                    Términos
                </a>

                <a href="#">
                    <i className="bi bi-lock"></i>
                    Privacidad
                </a>
            </div>

            <div className="tj-footer-right">
                <span className="tj-status">
                    <span></span>
                    Sistema activo
                </span>

                <small>
                    v2.0.0.0
                </small>
            </div>
        </footer>
    );
}