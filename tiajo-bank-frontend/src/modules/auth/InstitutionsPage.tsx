import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../../shared/assets/styles/auth/institutions.css";

import BackgroundImage from "../../shared/assets/images/auth/backgraund-login.webp";
import LogoImage from "../../shared/assets/icons/logo-tiajobank.webp";
import FrogImage from "../../shared/assets/images/auth/rana-otras-forma-de-acceso.webp";

export default function InstitutionsPage() {
    const { t } = useTranslation("auth");
    const { lang = "es" } = useParams<{ lang: string }>();

    return (
        <main className="institutions-page">
            <div className="institutions-bg">
                <img
                    src={BackgroundImage}
                    alt=""
                />
            </div>

            <div className="institutions-shape institutions-shape-one"></div>
            <div className="institutions-shape institutions-shape-two"></div>

            <section className="institutions-wrapper">
                <div className="institutions-card">
                    <Link
                        to={`/${lang}/acceder/otro-acceso`}
                        className="institutions-back"
                    >
                        <i className="bi bi-arrow-left-short"></i>

                        {t("institutions.body.main_page.back")}
                    </Link>

                    <div className="institutions-logo">
                        <Link
                            to={`/${lang}`}
                            aria-label={t(
                                "institutions.body.logo_link"
                            )}
                        >
                            <img
                                src={LogoImage}
                                alt="TíaJo Bank"
                            />
                        </Link>
                    </div>

                    <div className="institutions-heading">
                        <span className="institutions-badge">
                            <i className="bi bi-buildings-fill"></i>

                            {t(
                                "institutions.body.main_page.badge"
                            )}
                        </span>

                        <h1>
                            {t(
                                "institutions.body.main_page.title"
                            )}
                        </h1>

                        <p>
                            {t(
                                "institutions.body.main_page.description"
                            )}
                        </p>
                    </div>

                    <form className="institutions-form">
                        <div className="institutions-form-row">
                            <div className="institutions-form-group">
                                <label htmlFor="institutionName">
                                    {t(
                                        "institutions.body.main_page.form.institution"
                                    )}
                                </label>

                                <div className="institutions-input-box">
                                    <i className="bi bi-building"></i>

                                    <input
                                        id="institutionName"
                                        type="text"
                                        placeholder={t(
                                            "institutions.body.main_page.form.placeholder_institution"
                                        )}
                                    />
                                </div>
                            </div>

                            <div className="institutions-form-group">
                                <label htmlFor="institutionType">
                                    {t(
                                        "institutions.body.main_page.form.type"
                                    )}
                                </label>

                                <div className="institutions-input-box institutions-select-box">
                                    <i className="bi bi-diagram-3-fill"></i>

                                    <select
                                        id="institutionType"
                                        defaultValue=""
                                    >
                                        <option
                                            value=""
                                            disabled
                                        >
                                            {t(
                                                "institutions.body.main_page.form.placeholder_type"
                                            )}
                                        </option>

                                        <option value="school">
                                            {t(
                                                "institutions.body.main_page.form.options.school"
                                            )}
                                        </option>

                                        <option value="kindergarten">
                                            {t(
                                                "institutions.body.main_page.form.options.kindergarten"
                                            )}
                                        </option>

                                        <option value="foundation">
                                            {t(
                                                "institutions.body.main_page.form.options.foundation"
                                            )}
                                        </option>

                                        <option value="corporation">
                                            {t(
                                                "institutions.body.main_page.form.options.corporation"
                                            )}
                                        </option>

                                        <option value="other">
                                            {t(
                                                "institutions.body.main_page.form.options.other"
                                            )}
                                        </option>
                                    </select>

                                    <i className="bi bi-chevron-down"></i>
                                </div>
                            </div>
                        </div>

                        <div className="institutions-form-row">
                            <div className="institutions-form-group">
                                <label htmlFor="institutionContact">
                                    {t(
                                        "institutions.body.main_page.form.contact"
                                    )}
                                </label>

                                <div className="institutions-input-box">
                                    <i className="bi bi-person"></i>

                                    <input
                                        id="institutionContact"
                                        type="text"
                                        placeholder={t(
                                            "institutions.body.main_page.form.placeholder_contact"
                                        )}
                                    />
                                </div>
                            </div>

                            <div className="institutions-form-group">
                                <label htmlFor="institutionRole">
                                    {t(
                                        "institutions.body.main_page.form.role"
                                    )}
                                </label>

                                <div className="institutions-input-box">
                                    <i className="bi bi-person-badge-fill"></i>

                                    <input
                                        id="institutionRole"
                                        type="text"
                                        placeholder={t(
                                            "institutions.body.main_page.form.placeholder_role"
                                        )}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="institutions-form-group">
                            <label htmlFor="institutionEmail">
                                {t(
                                    "institutions.body.main_page.form.email"
                                )}
                            </label>

                            <div className="institutions-input-box">
                                <i className="bi bi-envelope"></i>

                                <input
                                    id="institutionEmail"
                                    type="email"
                                    placeholder={t(
                                        "institutions.body.main_page.form.placeholder_email"
                                    )}
                                />
                            </div>
                        </div>

                        <div className="institutions-form-group">
                            <label htmlFor="institutionInterest">
                                {t(
                                    "institutions.body.main_page.form.interest"
                                )}
                            </label>

                            <div className="institutions-input-box institutions-select-box">
                                <i className="bi bi-lightbulb-fill"></i>

                                <select
                                    id="institutionInterest"
                                    defaultValue=""
                                >
                                    <option
                                        value=""
                                        disabled
                                    >
                                        {t(
                                            "institutions.body.main_page.form.placeholder_interest"
                                        )}
                                    </option>

                                    <option value="implementation">
                                        {t(
                                            "institutions.body.main_page.form.interests.implementation"
                                        )}
                                    </option>

                                    <option value="demo">
                                        {t(
                                            "institutions.body.main_page.form.interests.demo"
                                        )}
                                    </option>

                                    <option value="pilot">
                                        {t(
                                            "institutions.body.main_page.form.interests.pilot"
                                        )}
                                    </option>

                                    <option value="plans">
                                        {t(
                                            "institutions.body.main_page.form.interests.plans"
                                        )}
                                    </option>

                                    <option value="other">
                                        {t(
                                            "institutions.body.main_page.form.interests.other"
                                        )}
                                    </option>
                                </select>

                                <i className="bi bi-chevron-down"></i>
                            </div>
                        </div>

                        <div className="institutions-form-group">
                            <label htmlFor="institutionMessage">
                                {t(
                                    "institutions.body.main_page.form.message"
                                )}
                            </label>

                            <div className="institutions-textarea-box">
                                <i className="bi bi-chat-left-text"></i>

                                <textarea
                                    id="institutionMessage"
                                    rows={3}
                                    placeholder={t(
                                        "institutions.body.main_page.form.placeholder_message"
                                    )}
                                ></textarea>
                            </div>
                        </div>

                        <label className="institutions-check">
                            <input type="checkbox" />

                            <span>
                                {t(
                                    "institutions.body.main_page.form.accept"
                                )}
                            </span>
                        </label>

                        <button
                            type="button"
                            className="institutions-button"
                        >
                            {t(
                                "institutions.body.main_page.form.button"
                            )}

                            <i className="bi bi-arrow-right"></i>
                        </button>
                    </form>

                    <div className="institutions-divider">
                        <span></span>

                        <p>
                            {t(
                                "institutions.body.main_page.divider"
                            )}
                        </p>

                        <span></span>
                    </div>

                    <div className="institutions-benefits">
                        <div className="institutions-benefit">
                            <i className="bi bi-graph-up-arrow"></i>

                            <div>
                                <strong>
                                    {t(
                                        "institutions.body.main_page.benefits.management.title"
                                    )}
                                </strong>

                                <small>
                                    {t(
                                        "institutions.body.main_page.benefits.management.description"
                                    )}
                                </small>
                            </div>
                        </div>

                        <div className="institutions-benefit">
                            <i className="bi bi-people-fill"></i>

                            <div>
                                <strong>
                                    {t(
                                        "institutions.body.main_page.benefits.community.title"
                                    )}
                                </strong>

                                <small>
                                    {t(
                                        "institutions.body.main_page.benefits.community.description"
                                    )}
                                </small>
                            </div>
                        </div>

                        <div className="institutions-benefit">
                            <i className="bi bi-award-fill"></i>

                            <div>
                                <strong>
                                    {t(
                                        "institutions.body.main_page.benefits.impact.title"
                                    )}
                                </strong>

                                <small>
                                    {t(
                                        "institutions.body.main_page.benefits.impact.description"
                                    )}
                                </small>
                            </div>
                        </div>
                    </div>

                    <div className="institutions-help">
                        <div className="institutions-help-icon">
                            <i className="bi bi-headset"></i>
                        </div>

                        <div>
                            <h3>
                                {t(
                                    "institutions.body.main_page.help.title"
                                )}
                            </h3>

                            <p>
                                {t(
                                    "institutions.body.main_page.help.description"
                                )}
                            </p>
                        </div>
                    </div>
                </div>

                <aside className="institutions-visual">
                    <div className="institutions-message">
                        {t(
                            "institutions.body.main_page.message.part_1"
                        )}

                        <br />

                        <strong>
                            {t(
                                "institutions.body.main_page.message.part_2"
                            )}
                        </strong>

                        <br />

                        {t(
                            "institutions.body.main_page.message.part_3"
                        )}

                        <i className="bi bi-stars"></i>
                    </div>

                    <div className="institutions-frog-circle"></div>

                    <img
                        src={FrogImage}
                        className="institutions-frog"
                        alt={t(
                            "institutions.body.frog_alt"
                        )}
                    />
                </aside>
            </section>
        </main>
    );
}