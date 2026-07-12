import { Link, NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { LANG } from "../../app/config/lang";
import Logo from "../../shared/assets/icons/logo-tiajobank.webp";

export default function Navbar() {
    const { t } = useTranslation("navbar");
    const navigate = useNavigate();
    const location = useLocation();
    const { lang = "es" } = useParams();

    const currentLanguage =
        LANG.find((l) => l.code === lang) ?? LANG[0];

    const changeLanguage = (code: string) => {
        const segments = location.pathname.split("/");
        segments[1] = code;
        navigate(segments.join("/"));
    };

    const navClass = ({ isActive }: { isActive: boolean }) =>
        `nav-link px-3 py-2 ${isActive ? "active" : ""}`;

    return (
        <nav
            className="navbar navbar-expand-lg bg-tj sticky-top shadow"
            aria-label={t("navbar.menu_prinicipal")}
        >
            <div className="container-xl py-1">

                <Link className="navbar-brand p-0 m-0" to={`/${lang}`}>
                    <img
                        src={Logo}
                        alt="TíaJo Bank"
                        className="tj-logo-img"
                    />
                </Link>

                <button
                    className="navbar-toggler border-2 bg-success text-white rounded-2 px-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navMain"
                    aria-controls="navMain"
                    aria-expanded="false"
                    aria-label={t("abrir_menu")}
                >
                    <i className="bi bi-list fs-4"></i>
                </button>

                <div className="collapse navbar-collapse" id="navMain">

                    <ul className="navbar-nav tj-nav mx-auto gap-2 py-2 py-lg-3">

                        <li className="nav-item">
                            <NavLink
                                to={`/${lang}`}
                                end
                                className={navClass}
                            >
                                {t("inicio")}
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to={`/${lang}/que-es`}
                                className={navClass}
                            >
                                {t("que_es")}
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to={`/${lang}/beneficios`}
                                className={navClass}
                            >
                                {t("beneficios")}
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to={`/${lang}/funcionalidades`}
                                className={navClass}
                            >
                                {t("funcionalidades")}
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to={`/${lang}/planes`}
                                className={navClass}
                            >
                                {t("planes")}
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to={`/${lang}/recursos`}
                                className={navClass}
                            >
                                {t("recursos")}
                            </NavLink>
                        </li>

                    </ul>

                    <div className="dropdown mx-auto gap-1 py-2">
                        <button
                            className="btn dropdown-toggle text-white border-0 px-3 py-2 d-flex align-items-center gap-2"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            aria-label={t("idioma")}
                        >
                            <i className="bi bi-globe-americas"></i>
                            <span>
                                {currentLanguage.flag} {currentLanguage.label}
                            </span>
                        </button>

                        <ul className="dropdown-menu dropdown-menu-end shadow border-0 rounded-4">
                            {LANG.map((language) => (
                                <li key={language.code}>
                                    <button
                                        className={`dropdown-item py-2 ${
                                            lang === language.code ? "active" : ""
                                        }`}
                                        onClick={() =>
                                            changeLanguage(language.code)
                                        }
                                    >
                                        {language.flag} {language.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="d-flex flex-column flex-lg-row gap-2 pb-2 pb-lg-0">

                        <Link
                            to={`/${lang}/acceder`}
                            className="btn btn-tj-outline btn-sm px-3"
                        >
                            {t("iniciar_sesion")}
                        </Link>

                        <Link
                            to={`/${lang}/registrarse`}
                            className="btn btn-tj-cta btn-sm px-3"
                        >
                            {t("comenzar")}
                        </Link>

                    </div>

                </div>
            </div>
        </nav>
    );
}