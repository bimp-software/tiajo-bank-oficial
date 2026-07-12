import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../../shared/assets/styles/auth/login.css";

import BackgraundImg from "../../shared/assets/images/auth/backgraund-login.webp";
import LogoImage from "../../shared/assets/icons/logo-tiajobank.webp";
import FrogImage from "../../shared/assets/images/auth/rana-acceder.webp";

export default function LoginPage() {
    const { t, i18n } = useTranslation("auth");
    const { lang = "es" } = useParams();

    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (i18n.language !== lang) {
            void i18n.changeLanguage(lang);
        }
    }, [lang, i18n]);

    return (
        <main className="login-page">

            <div className="login-bg">
                <img src={BackgraundImg} alt="" />
            </div>

            <div className="login-shape shape-one"></div>
            <div className="login-shape shape-two"></div>

            <section className="login-wrapper">

                <div className="login-card">

                    <Link
                        to={`/${lang}/acceder`}
                        className="login-back-btn"
                    >
                        <i className="bi bi-arrow-left-short"></i>

                        {t("login.body.main_page.back")}
                    </Link>

                    <div className="login-logo">
                        <Link
                            to={`/${lang}`}
                            aria-label={t("login.body.logo_link")}
                        >
                            <img
                                src={LogoImage}
                                alt="TíaJo Bank"
                            />
                        </Link>
                    </div>

                    <div className="login-heading">

                        <span className="login-badge">
                            <i className="bi bi-shield-check"></i>

                            {t("login.body.main_page.secure")}
                        </span>

                        <h1>
                            {t("login.body.main_page.title")}
                        </h1>

                        <p>
                            {t("login.body.main_page.description")}
                        </p>

                    </div>

                    <form
                        className="login-form"
                        autoComplete="off"
                    >

                        <div className="form-group">

                            <label>
                                {t("login.body.main_page.form.username")}
                            </label>

                            <div className="input-box">

                                <i className="bi bi-person"></i>

                                <input
                                    type="text"
                                    placeholder={t("login.body.main_page.form.placeholder_username")}
                                />

                            </div>

                        </div>

                        <div className="form-group">

                            <label>
                                {t("login.body.main_page.form.password")}
                            </label>

                            <div className="input-box">

                                <i className="bi bi-lock"></i>

                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder={t("login.body.main_page.form.placeholder_password")}
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                >
                                    <i
                                        className={
                                            showPassword
                                                ? "bi bi-eye-slash"
                                                : "bi bi-eye"
                                        }
                                    ></i>
                                </button>

                            </div>

                        </div>

                        <div className="login-options">

                            <label className="remember">

                                <input
                                    type="checkbox"
                                />

                                <span>
                                    {t("login.body.main_page.form.remember")}
                                </span>

                            </label>

                            <Link to="#">
                                {t("login.body.main_page.form.forgot_password")}
                            </Link>

                        </div>

                        <button
                            className="btn-login"
                            type="submit"
                        >
                            {t("login.body.main_page.form.login")}

                            <i className="bi bi-arrow-right"></i>
                        </button>

                    </form>

                    <div className="login-help">

                        <i className="bi bi-headset"></i>

                        <div>

                            <h3>
                                {t("login.body.main_page.login_help.title")}
                            </h3>

                            <p>
                                {t("login.body.main_page.login_help.description")}
                            </p>

                        </div>

                    </div>

                </div>

                <div className="login-frog-area">

                    <div className="login-frog-circle"></div>

                    <img
                        className="login-frog-img"
                        src={FrogImage}
                        alt={t("login.body.frog_alt")}
                    />

                </div>

            </section>

        </main>
    );
}