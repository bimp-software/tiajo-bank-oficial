import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../../shared/assets/styles/auth/otro-acceso.css";

import BackgroundImage from "../../shared/assets/images/auth/backgraund-login.webp";
import LogoImage from "../../shared/assets/icons/logo-tiajobank.webp";
import FrogImage from "../../shared/assets/images/auth/rana-otras-forma-de-acceso.webp";

export default function OtroAccesoPage() {
    const { t } = useTranslation("auth");
    const { lang = "es" } = useParams<{ lang: string }>();

    return (
        <main className="other-access-page">
            <div className="other-access-bg">
                <img
                    src={BackgroundImage}
                    alt=""
                />
            </div>

            <section className="other-access-card">
                <aside className="other-access-side">
                    <div className="other-logo">
                        <Link
                            to={`/${lang}`}
                            aria-label={t("other_access.body.logo_link")}
                        >
                            <img
                                src={LogoImage}
                                alt="TíaJo Bank"
                            />
                        </Link>
                    </div>

                    <span className="side-line"></span>

                    <h1>
                        {t("other_access.body.main_page.title")}
                    </h1>

                    <p>
                        {t("other_access.body.main_page.description")}
                    </p>

                    <div className="side-frog">
                        <img
                            src={FrogImage}
                            alt={t("other_access.body.frog_alt")}
                        />
                    </div>
                </aside>

                <div className="access-options-area">
                    <div className="access-options-grid">
                        <Link
                            to="#"
                            className="access-type-card"
                        >
                            <div className="access-type-img">
                                <img src="" alt="" />
                            </div>

                            <h2>
                                {t("other_access.body.main_page.options.student.title")}
                            </h2>

                            <p>
                                {t("other_access.body.main_page.options.student.description")}
                            </p>

                            <i className="bi bi-arrow-right"></i>
                        </Link>

                        <Link
                            to="#"
                            className="access-type-card"
                        >
                            <div className="access-type-img">
                                <img
                                    src=""
                                    alt=""
                                />
                            </div>

                            <h2>
                                {t(
                                    "other_access.body.main_page.options.guardian.title"
                                )}
                            </h2>

                            <p>
                                {t(
                                    "other_access.body.main_page.options.guardian.description"
                                )}
                            </p>

                            <i className="bi bi-arrow-right"></i>
                        </Link>

                        <Link
                            to="#"
                            className="access-type-card"
                        >
                            <div className="access-type-img">
                                <img
                                    src=""
                                    alt=""
                                />
                            </div>

                            <h2>
                                {t(
                                    "other_access.body.main_page.options.teachers.title"
                                )}
                            </h2>

                            <p>
                                {t(
                                    "other_access.body.main_page.options.teachers.description"
                                )}
                            </p>

                            <i className="bi bi-arrow-right"></i>
                        </Link>

                        <Link
                            to="#"
                            className="access-type-card"
                        >
                            <div className="access-type-img">
                                <img
                                    src=""
                                    alt=""
                                />
                            </div>

                            <h2>
                                {t(
                                    "other_access.body.main_page.options.foundations.title"
                                )}
                            </h2>

                            <p>
                                {t(
                                    "other_access.body.main_page.options.foundations.description"
                                )}
                            </p>

                            <i className="bi bi-arrow-right"></i>
                        </Link>

                        <Link
                            to="#"
                            className="access-type-card"
                        >
                            <div className="access-type-img">
                                <img
                                    src=""
                                    alt=""
                                />
                            </div>

                            <h2>
                                {t(
                                    "other_access.body.main_page.options.institutions.title"
                                )}
                            </h2>

                            <p>
                                {t(
                                    "other_access.body.main_page.options.institutions.description"
                                )}
                            </p>

                            <i className="bi bi-arrow-right"></i>
                        </Link>

                        <Link
                            to="#"
                            className="access-type-card"
                        >
                            <div className="access-type-img">
                                <img
                                    src=""
                                    alt=""
                                />
                            </div>

                            <h2>
                                {t(
                                    "other_access.body.main_page.options.volunteering.title"
                                )}
                            </h2>

                            <p>
                                {t(
                                    "other_access.body.main_page.options.volunteering.description"
                                )}
                            </p>

                            <i className="bi bi-arrow-right"></i>
                        </Link>
                    </div>

                    <div className="access-help-bar">
                        <div className="help-icon">
                            <i className="bi bi-headset"></i>
                        </div>

                        <div>
                            <h3>
                                {t(
                                    "other_access.body.main_page.help.title"
                                )}
                            </h3>

                            <p>
                                {t(
                                    "other_access.body.main_page.help.description"
                                )}
                            </p>
                        </div>

                        <Link to="#">
                            {t(
                                "other_access.body.main_page.help.button"
                            )}

                            <i className="bi bi-box-arrow-up-right"></i>
                        </Link>
                    </div>

                    <Link
                        to={`/${lang}/acceder/iniciar-sesion`}
                        className="back-login-link"
                    >
                        <i className="bi bi-arrow-left"></i>

                        {t(
                            "other_access.body.main_page.back_login"
                        )}
                    </Link>
                </div>
            </section>
        </main>
    );
}