import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../../shared/assets/styles/auth/teacher-community.css";

import BackgroundImage from "../../shared/assets/images/auth/backgraund-login.webp";
import LogoImage from "../../shared/assets/icons/logo-tiajobank.webp";
import FrogImage from "../../shared/assets/images/auth/rana-otras-forma-de-acceso.webp";

export default function TeacherCommunityPage() {
    const { t } = useTranslation("auth");
    const { lang = "es" } = useParams<{ lang: string }>();

    return (
        <main className="teacher-community-page">
            <div className="teacher-community-bg">
                <img src={BackgroundImage} alt="" />
            </div>

            <div className="teacher-community-shape teacher-shape-one"></div>
            <div className="teacher-community-shape teacher-shape-two"></div>

            <section className="teacher-community-wrapper">
                <div className="teacher-community-card">
                    <Link
                        to={`/${lang}/acceder/otro-acceso`}
                        className="teacher-community-back"
                    >
                        <i className="bi bi-arrow-left-short"></i>
                        {t("teacher_community.body.main_page.back")}
                    </Link>

                    <div className="teacher-community-logo">
                        <Link
                            to={`/${lang}`}
                            aria-label={t(
                                "teacher_community.body.logo_link"
                            )}
                        >
                            <img
                                src={LogoImage}
                                alt="TíaJo Bank"
                            />
                        </Link>
                    </div>

                    <div className="teacher-community-heading">
                        <span className="teacher-community-badge">
                            <i className="bi bi-person-workspace"></i>

                            {t(
                                "teacher_community.body.main_page.badge"
                            )}
                        </span>

                        <h1>
                            {t(
                                "teacher_community.body.main_page.title"
                            )}
                        </h1>

                        <p>
                            {t(
                                "teacher_community.body.main_page.description"
                            )}
                        </p>
                    </div>

                    <form className="teacher-community-form">
                        <div className="teacher-form-group">
                            <label htmlFor="teacherName">
                                {t(
                                    "teacher_community.body.main_page.form.name"
                                )}
                            </label>

                            <div className="teacher-input-box">
                                <i className="bi bi-person"></i>

                                <input
                                    id="teacherName"
                                    type="text"
                                    placeholder={t(
                                        "teacher_community.body.main_page.form.placeholder_name"
                                    )}
                                />
                            </div>
                        </div>

                        <div className="teacher-form-group">
                            <label htmlFor="teacherEmail">
                                {t(
                                    "teacher_community.body.main_page.form.email"
                                )}
                            </label>

                            <div className="teacher-input-box">
                                <i className="bi bi-envelope"></i>

                                <input
                                    id="teacherEmail"
                                    type="email"
                                    placeholder={t(
                                        "teacher_community.body.main_page.form.placeholder_email"
                                    )}
                                />
                            </div>
                        </div>

                        <div className="teacher-form-group">
                            <label htmlFor="teacherInterest">
                                {t(
                                    "teacher_community.body.main_page.form.interest"
                                )}
                            </label>

                            <div className="teacher-input-box teacher-select-box">
                                <i className="bi bi-stars"></i>

                                <select
                                    id="teacherInterest"
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        {t(
                                            "teacher_community.body.main_page.form.placeholder_interest"
                                        )}
                                    </option>

                                    <option value="resources">
                                        {t(
                                            "teacher_community.body.main_page.form.options.resources"
                                        )}
                                    </option>

                                    <option value="jobs">
                                        {t(
                                            "teacher_community.body.main_page.form.options.jobs"
                                        )}
                                    </option>

                                    <option value="training">
                                        {t(
                                            "teacher_community.body.main_page.form.options.training"
                                        )}
                                    </option>

                                    <option value="community">
                                        {t(
                                            "teacher_community.body.main_page.form.options.community"
                                        )}
                                    </option>
                                </select>

                                <i className="bi bi-chevron-down"></i>
                            </div>
                        </div>

                        <label className="teacher-community-check">
                            <input type="checkbox" />

                            <span>
                                {t(
                                    "teacher_community.body.main_page.form.accept"
                                )}
                            </span>
                        </label>

                        <button
                            type="button"
                            className="teacher-community-button"
                        >
                            {t(
                                "teacher_community.body.main_page.form.button"
                            )}

                            <i className="bi bi-arrow-right"></i>
                        </button>
                    </form>

                    <div className="teacher-community-divider">
                        <span></span>

                        <p>
                            {t(
                                "teacher_community.body.main_page.divider"
                            )}
                        </p>

                        <span></span>
                    </div>

                    <Link
                        to={`/${lang}/acceder/iniciar-sesion`}
                        className="teacher-community-login"
                    >
                        <div className="teacher-login-icon">
                            <i className="bi bi-box-arrow-in-right"></i>
                        </div>

                        <div className="teacher-login-content">
                            <strong>
                                {t(
                                    "teacher_community.body.main_page.login.title"
                                )}
                            </strong>

                            <small>
                                {t(
                                    "teacher_community.body.main_page.login.description"
                                )}
                            </small>
                        </div>

                        <i className="bi bi-chevron-right teacher-login-arrow"></i>
                    </Link>

                    <div className="teacher-community-benefits">
                        <div>
                            <i className="bi bi-journal-richtext"></i>

                            <span>
                                {t(
                                    "teacher_community.body.main_page.benefits.resources"
                                )}
                            </span>
                        </div>

                        <div>
                            <i className="bi bi-briefcase-fill"></i>

                            <span>
                                {t(
                                    "teacher_community.body.main_page.benefits.jobs"
                                )}
                            </span>
                        </div>

                        <div>
                            <i className="bi bi-mortarboard-fill"></i>

                            <span>
                                {t(
                                    "teacher_community.body.main_page.benefits.training"
                                )}
                            </span>
                        </div>
                    </div>

                    <div className="teacher-community-help">
                        <div className="teacher-help-icon">
                            <i className="bi bi-headset"></i>
                        </div>

                        <div>
                            <h3>
                                {t(
                                    "teacher_community.body.main_page.help.title"
                                )}
                            </h3>

                            <p>
                                {t(
                                    "teacher_community.body.main_page.help.description"
                                )}
                            </p>
                        </div>
                    </div>
                </div>

                <aside className="teacher-community-visual">
                    <div className="teacher-community-message">
                        {t(
                            "teacher_community.body.main_page.message.part_1"
                        )}

                        <br />

                        <strong>
                            {t(
                                "teacher_community.body.main_page.message.part_2"
                            )}
                        </strong>

                        <br />

                        {t(
                            "teacher_community.body.main_page.message.part_3"
                        )}

                        <i className="bi bi-stars"></i>
                    </div>

                    <div className="teacher-frog-circle"></div>

                    <img
                        src={FrogImage}
                        className="teacher-community-frog"
                        alt={t(
                            "teacher_community.body.frog_alt"
                        )}
                    />
                </aside>
            </section>
        </main>
    );
}