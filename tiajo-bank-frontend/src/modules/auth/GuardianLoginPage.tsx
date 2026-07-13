import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../../shared/assets/styles/auth/guardian-login.css";

import BackgroundImage from "../../shared/assets/images/auth/backgraund-login.webp";
import LogoImage from "../../shared/assets/icons/logo-tiajobank.webp";
import FrogImage from "../../shared/assets/images/auth/rana-otras-forma-de-acceso.webp";

export default function GuardianLoginPage() {
    const { t } = useTranslation("auth");
    const { lang = "es" } = useParams<{ lang: string }>();

    return (
        <main className="guardian-login-page">
            <div className="guardian-login-bg">
                <img
                    src={BackgroundImage}
                    alt=""
                />
            </div>

            <div className="guardian-login-shape guardian-shape-one"></div>
            <div className="guardian-login-shape guardian-shape-two"></div>

            <section className="guardian-login-wrapper">
                <div className="guardian-login-card">
                    <Link
                        to={`/${lang}/acceder/otro-acceso`}
                        className="guardian-login-back"
                    >
                        <i className="bi bi-arrow-left-short"></i>

                        {t("guardian_login.body.main_page.back")}
                    </Link>

                    <div className="guardian-login-logo">
                        <Link
                            to={`/${lang}`}
                            aria-label={t(
                                "guardian_login.body.logo_link"
                            )}
                        >
                            <img
                                src={LogoImage}
                                alt="TíaJo Bank"
                            />
                        </Link>
                    </div>

                    <div className="guardian-login-heading">
                        <span className="guardian-login-badge">
                            <i className="bi bi-people-fill"></i>

                            {t(
                                "guardian_login.body.main_page.badge"
                            )}
                        </span>

                        <h1>
                            {t(
                                "guardian_login.body.main_page.title"
                            )}
                        </h1>

                        <p>
                            {t(
                                "guardian_login.body.main_page.description"
                            )}
                        </p>
                    </div>

                    <form className="guardian-login-form">
                        <div className="guardian-form-group">
                            <label htmlFor="guardianInstitution">
                                {t(
                                    "guardian_login.body.main_page.form.institution"
                                )}
                            </label>

                            <div className="guardian-input-box">
                                <i className="bi bi-building"></i>

                                <input
                                    id="guardianInstitution"
                                    type="text"
                                    placeholder={t(
                                        "guardian_login.body.main_page.form.placeholder_institution"
                                    )}
                                />
                            </div>
                        </div>

                        <div className="guardian-form-group">
                            <label htmlFor="guardianLogin">
                                {t(
                                    "guardian_login.body.main_page.form.username"
                                )}
                            </label>

                            <div className="guardian-input-box">
                                <i className="bi bi-person"></i>

                                <input
                                    id="guardianLogin"
                                    type="text"
                                    placeholder={t(
                                        "guardian_login.body.main_page.form.placeholder_username"
                                    )}
                                />
                            </div>
                        </div>

                        <div className="guardian-form-group">
                            <label htmlFor="guardianPassword">
                                {t(
                                    "guardian_login.body.main_page.form.password"
                                )}
                            </label>

                            <div className="guardian-input-box">
                                <i className="bi bi-lock"></i>

                                <input
                                    id="guardianPassword"
                                    type="password"
                                    placeholder={t(
                                        "guardian_login.body.main_page.form.placeholder_password"
                                    )}
                                />

                                <button
                                    type="button"
                                    className="guardian-password-button"
                                    aria-label={t(
                                        "guardian_login.body.main_page.form.show_password"
                                    )}
                                >
                                    <i className="bi bi-eye"></i>
                                </button>
                            </div>
                        </div>

                        <div className="guardian-login-options">
                            <label className="guardian-remember">
                                <input type="checkbox" />

                                <span>
                                    {t(
                                        "guardian_login.body.main_page.form.remember"
                                    )}
                                </span>
                            </label>

                            <Link to="#">
                                {t(
                                    "guardian_login.body.main_page.form.forgot_password"
                                )}
                            </Link>
                        </div>

                        <button
                            type="button"
                            className="guardian-login-button"
                        >
                            {t(
                                "guardian_login.body.main_page.form.button"
                            )}

                            <i className="bi bi-arrow-right"></i>
                        </button>
                    </form>

                    <div className="guardian-login-divider">
                        <span></span>

                        <p>
                            {t(
                                "guardian_login.body.main_page.divider"
                            )}
                        </p>

                        <span></span>
                    </div>

                    <Link
                        to="#"
                        className="guardian-link-student"
                    >
                        <div className="guardian-student-icon">
                            <i className="bi bi-person-heart"></i>
                        </div>

                        <div className="guardian-student-content">
                            <strong>
                                {t(
                                    "guardian_login.body.main_page.link_student.title"
                                )}
                            </strong>

                            <small>
                                {t(
                                    "guardian_login.body.main_page.link_student.description"
                                )}
                            </small>
                        </div>

                        <i className="bi bi-chevron-right guardian-student-arrow"></i>
                    </Link>

                    <div className="guardian-login-help">
                        <div className="guardian-help-icon">
                            <i className="bi bi-question-circle-fill"></i>
                        </div>

                        <div>
                            <h3>
                                {t(
                                    "guardian_login.body.main_page.help.title"
                                )}
                            </h3>

                            <p>
                                {t(
                                    "guardian_login.body.main_page.help.description"
                                )}
                            </p>
                        </div>
                    </div>

                    <div className="guardian-login-security">
                        <i className="bi bi-shield-check"></i>

                        <span>
                            {t(
                                "guardian_login.body.main_page.security"
                            )}
                        </span>
                    </div>
                </div>

                <aside className="guardian-login-visual">
                    <div className="guardian-message">
                        {t(
                            "guardian_login.body.main_page.message.part_1"
                        )}

                        <br />

                        <strong>
                            {t(
                                "guardian_login.body.main_page.message.part_2"
                            )}
                        </strong>

                        <br />

                        {t(
                            "guardian_login.body.main_page.message.part_3"
                        )}

                        <i className="bi bi-heart-fill"></i>
                    </div>

                    <div className="guardian-frog-circle"></div>

                    <img
                        src={FrogImage}
                        className="guardian-login-frog"
                        alt={t(
                            "guardian_login.body.frog_alt"
                        )}
                    />
                </aside>
            </section>
        </main>
    );
}