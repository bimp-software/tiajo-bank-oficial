import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../../shared/assets/styles/auth/foundations.css";

import BackgroundImage from "../../shared/assets/images/auth/backgraund-login.webp";
import LogoImage from "../../shared/assets/icons/logo-tiajobank.webp";
import FrogImage from "../../shared/assets/images/auth/rana-otras-forma-de-acceso.webp";

export default function FoundationsPage() {
    const { t } = useTranslation("auth");
    const { lang = "es" } = useParams<{ lang: string }>();

    return (
        <main className="foundations-page">
            <div className="foundations-bg">
                <img
                    src={BackgroundImage}
                    alt=""
                />
            </div>

            <div className="foundations-shape foundations-shape-one"></div>
            <div className="foundations-shape foundations-shape-two"></div>

            <section className="foundations-wrapper">
                <div className="foundations-card">
                    <Link
                        to={`/${lang}/acceder/otro-acceso`}
                        className="foundations-back"
                    >
                        <i className="bi bi-arrow-left-short"></i>

                        {t("foundations.body.main_page.back")}
                    </Link>

                    <div className="foundations-logo">
                        <Link
                            to={`/${lang}`}
                            aria-label={t(
                                "foundations.body.logo_link"
                            )}
                        >
                            <img
                                src={LogoImage}
                                alt="TíaJo Bank"
                            />
                        </Link>
                    </div>

                    <div className="foundations-heading">
                        <span className="foundations-badge">
                            <i className="bi bi-people-fill"></i>

                            {t(
                                "foundations.body.main_page.badge"
                            )}
                        </span>

                        <h1>
                            {t(
                                "foundations.body.main_page.title"
                            )}
                        </h1>

                        <p>
                            {t(
                                "foundations.body.main_page.description"
                            )}
                        </p>
                    </div>

                    <form className="foundations-form">
                        <div className="foundations-form-row">
                            <div className="foundations-form-group">
                                <label htmlFor="organizationName">
                                    {t(
                                        "foundations.body.main_page.form.organization"
                                    )}
                                </label>

                                <div className="foundations-input-box">
                                    <i className="bi bi-buildings"></i>

                                    <input
                                        id="organizationName"
                                        type="text"
                                        placeholder={t(
                                            "foundations.body.main_page.form.placeholder_organization"
                                        )}
                                    />
                                </div>
                            </div>

                            <div className="foundations-form-group">
                                <label htmlFor="contactName">
                                    {t(
                                        "foundations.body.main_page.form.contact"
                                    )}
                                </label>

                                <div className="foundations-input-box">
                                    <i className="bi bi-person"></i>

                                    <input
                                        id="contactName"
                                        type="text"
                                        placeholder={t(
                                            "foundations.body.main_page.form.placeholder_contact"
                                        )}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="foundations-form-group">
                            <label htmlFor="foundationEmail">
                                {t(
                                    "foundations.body.main_page.form.email"
                                )}
                            </label>

                            <div className="foundations-input-box">
                                <i className="bi bi-envelope"></i>

                                <input
                                    id="foundationEmail"
                                    type="email"
                                    placeholder={t(
                                        "foundations.body.main_page.form.placeholder_email"
                                    )}
                                />
                            </div>
                        </div>

                        <div className="foundations-form-group">
                            <label htmlFor="collaborationType">
                                {t(
                                    "foundations.body.main_page.form.collaboration"
                                )}
                            </label>

                            <div className="foundations-input-box foundations-select-box">
                                <i className="bi bi-handshake-fill"></i>

                                <select
                                    id="collaborationType"
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        {t(
                                            "foundations.body.main_page.form.placeholder_collaboration"
                                        )}
                                    </option>

                                    <option value="educational-projects">
                                        {t(
                                            "foundations.body.main_page.form.options.educational_projects"
                                        )}
                                    </option>

                                    <option value="resources">
                                        {t(
                                            "foundations.body.main_page.form.options.resources"
                                        )}
                                    </option>

                                    <option value="funding">
                                        {t(
                                            "foundations.body.main_page.form.options.funding"
                                        )}
                                    </option>

                                    <option value="volunteering">
                                        {t(
                                            "foundations.body.main_page.form.options.volunteering"
                                        )}
                                    </option>

                                    <option value="other">
                                        {t(
                                            "foundations.body.main_page.form.options.other"
                                        )}
                                    </option>
                                </select>

                                <i className="bi bi-chevron-down"></i>
                            </div>
                        </div>

                        <div className="foundations-form-group">
                            <label htmlFor="collaborationMessage">
                                {t(
                                    "foundations.body.main_page.form.message"
                                )}
                            </label>

                            <div className="foundations-textarea-box">
                                <i className="bi bi-chat-left-text"></i>

                                <textarea
                                    id="collaborationMessage"
                                    rows={3}
                                    placeholder={t(
                                        "foundations.body.main_page.form.placeholder_message"
                                    )}
                                ></textarea>
                            </div>
                        </div>

                        <label className="foundations-check">
                            <input type="checkbox" />

                            <span>
                                {t(
                                    "foundations.body.main_page.form.accept"
                                )}
                            </span>
                        </label>

                        <button
                            type="button"
                            className="foundations-button"
                        >
                            {t(
                                "foundations.body.main_page.form.button"
                            )}

                            <i className="bi bi-arrow-right"></i>
                        </button>
                    </form>

                    <div className="foundations-divider">
                        <span></span>

                        <p>
                            {t(
                                "foundations.body.main_page.divider"
                            )}
                        </p>

                        <span></span>
                    </div>

                    <div className="foundations-impact-grid">
                        <div className="foundations-impact-card">
                            <i className="bi bi-lightbulb-fill"></i>

                            <div>
                                <strong>
                                    {t(
                                        "foundations.body.main_page.impact.innovation.title"
                                    )}
                                </strong>

                                <small>
                                    {t(
                                        "foundations.body.main_page.impact.innovation.description"
                                    )}
                                </small>
                            </div>
                        </div>

                        <div className="foundations-impact-card">
                            <i className="bi bi-globe-americas"></i>

                            <div>
                                <strong>
                                    {t(
                                        "foundations.body.main_page.impact.community.title"
                                    )}
                                </strong>

                                <small>
                                    {t(
                                        "foundations.body.main_page.impact.community.description"
                                    )}
                                </small>
                            </div>
                        </div>

                        <div className="foundations-impact-card">
                            <i className="bi bi-heart-fill"></i>

                            <div>
                                <strong>
                                    {t(
                                        "foundations.body.main_page.impact.transformation.title"
                                    )}
                                </strong>

                                <small>
                                    {t(
                                        "foundations.body.main_page.impact.transformation.description"
                                    )}
                                </small>
                            </div>
                        </div>
                    </div>

                    <div className="foundations-help">
                        <div className="foundations-help-icon">
                            <i className="bi bi-headset"></i>
                        </div>

                        <div>
                            <h3>
                                {t(
                                    "foundations.body.main_page.help.title"
                                )}
                            </h3>

                            <p>
                                {t(
                                    "foundations.body.main_page.help.description"
                                )}
                            </p>
                        </div>
                    </div>
                </div>

                <aside className="foundations-visual">
                    <div className="foundations-message">
                        {t(
                            "foundations.body.main_page.message.part_1"
                        )}

                        <br />

                        <strong>
                            {t(
                                "foundations.body.main_page.message.part_2"
                            )}
                        </strong>

                        <br />

                        {t(
                            "foundations.body.main_page.message.part_3"
                        )}

                        <i className="bi bi-heart-fill"></i>
                    </div>

                    <div className="foundations-frog-circle"></div>

                    <img
                        src={FrogImage}
                        className="foundations-frog"
                        alt={t(
                            "foundations.body.frog_alt"
                        )}
                    />
                </aside>
            </section>
        </main>
    );
}