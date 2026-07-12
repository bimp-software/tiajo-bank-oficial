import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../../shared/assets/styles/auth/acceder.css";

import BackgraundImg from "../../shared/assets/images/auth/backgraund-login.webp";
import LogoImage from "../../shared/assets/icons/logo-tiajobank.webp";
import FrogImage from "../../shared/assets/images/auth/rana-acceder.webp";

export default function AccederPage() {
    const { t, i18n } = useTranslation("auth");
    const { lang = "es" } = useParams<{ lang: string }>();

    useEffect(() => {
        if (i18n.language !== lang) {
            void i18n.changeLanguage(lang);
        }
    }, [lang, i18n]);

    useEffect(() => {
        document.title = t("acceder.head.title");

        const description = document.querySelector(
            'meta[name="description"]'
        );

        if (description) {
            description.setAttribute(
                "content",
                t("acceder.head.description")
            );
        }
    }, [t]);

    return (
        <main className="access-page">
            <div className="access-bg" aria-hidden="true">
                <img
                    src={BackgraundImg}
                    alt="background TiaJo Bank"
                />
            </div>

            <section className="access-wrapper">
                <div className="access-card">
                    <Link
                        to={`/${lang}`}
                        className="access-logo"
                        aria-label={t("acceder.body.logo_link")}
                    >
                        <img
                            src={LogoImage}
                            alt="TíaJo Bank"
                        />
                    </Link>

                    <div className="access-heading">
                        <span className="access-badge">
                            <i
                                className="bi bi-shield-lock-fill"
                                aria-hidden="true"
                            />

                            {t("acceder.body.main_page.secure")}
                        </span>

                        <h1>{t("acceder.body.main_page.title")}</h1>

                        <p>
                            {t("acceder.body.main_page.description")}
                        </p>
                    </div>

                    <div className="access-options">
                        <Link
                            to={`/${lang}/acceder/iniciar-sesion`}
                            className="access-option featured"
                        >
                            <div className="access-icon green">
                                <i
                                    className="bi bi-person-badge-fill"
                                    aria-hidden="true"
                                />
                            </div>

                            <h3>
                                {t(
                                    "acceder.body.main_page.form.option_1.title"
                                )}
                            </h3>

                            <p>
                                {t(
                                    "acceder.body.main_page.form.option_1.description"
                                )}
                            </p>
                        </Link>

                        <Link
                            to={`/${lang}/acceder/codigo-qr`}
                            className="access-option"
                        >
                            <div className="access-icon blue">
                                <i
                                    className="bi bi-qr-code-scan"
                                    aria-hidden="true"
                                />
                            </div>

                            <h3>
                                {t(
                                    "acceder.body.main_page.form.option_2.title"
                                )}
                            </h3>

                            <p>
                                {t(
                                    "acceder.body.main_page.form.option_2.description"
                                )}
                            </p>
                        </Link>

                        <Link
                            to={`/${lang}/acceder/otro-acceso`}
                            className="access-option"
                        >
                            <div className="access-icon purple">
                                <i
                                    className="bi bi-people-fill"
                                    aria-hidden="true"
                                />
                            </div>

                            <h3>
                                {t(
                                    "acceder.body.main_page.form.option_3.title"
                                )}
                            </h3>

                            <p>
                                {t(
                                    "acceder.body.main_page.form.option_3.description"
                                )}
                            </p>
                        </Link>
                    </div>

                    <div className="access-divider">
                        <span />

                        <p>
                            {t(
                                "acceder.body.main_page.form.divider_access"
                            )}
                        </p>

                        <span />
                    </div>

                    <div className="social-access">
                        <button
                            type="button"
                            className="social-access-button"
                        >
                            <i
                                className="bi bi-google"
                                aria-hidden="true"
                            />

                            {t(
                                "acceder.body.main_page.form.options.google"
                            )}
                        </button>

                        <button
                            type="button"
                            className="social-access-button"
                        >
                            <i
                                className="bi bi-microsoft"
                                aria-hidden="true"
                            />

                            {t(
                                "acceder.body.main_page.form.options.microsoft"
                            )}
                        </button>

                        <button
                            type="button"
                            className="social-access-button"
                        >
                            <i
                                className="bi bi-apple"
                                aria-hidden="true"
                            />

                            {t(
                                "acceder.body.main_page.form.options.apple"
                            )}
                        </button>
                    </div>

                    <div className="access-help">
                        <div className="access-help-icon">
                            <i
                                className="bi bi-headset"
                                aria-hidden="true"
                            />
                        </div>

                        <div>
                            <h2>
                                {t(
                                    "acceder.body.main_page.help.title"
                                )}
                            </h2>

                            <p>
                                {t(
                                    "acceder.body.main_page.help.description"
                                )}
                            </p>
                        </div>
                    </div>

                    <div className="access-links">
                        <Link to={`/${lang}/ayuda`}>
                            {t(
                                "acceder.body.main_page.help.contact_support.access.help"
                            )}
                        </Link>

                        <span aria-hidden="true">•</span>

                        <Link to={`/${lang}/terminos`}>
                            {t(
                                "acceder.body.main_page.help.contact_support.access.terminos"
                            )}
                        </Link>

                        <span aria-hidden="true">•</span>

                        <Link to={`/${lang}/privacidad`}>
                            {t(
                                "acceder.body.main_page.help.contact_support.access.privacidad"
                            )}
                        </Link>
                    </div>
                </div>

                <div className="frog-area">
                    <div className="frog-message">
                        {t(
                            "acceder.body.main_page.message.parte_1"
                        )}

                        <br />

                        <span>
                            {t(
                                "acceder.body.main_page.message.parte_2"
                            )}
                        </span>

                        <br />

                        {t(
                            "acceder.body.main_page.message.parte_3"
                        )}

                        <i
                            className="bi bi-star-fill"
                            aria-hidden="true"
                        />
                    </div>

                    <div
                        className="frog-circle"
                        aria-hidden="true"
                    />

                    <img
                        className="frog-img"
                        src={FrogImage}
                        alt={t("acceder.body.frog_alt")}
                    />
                </div>
            </section>
        </main>
    );
}