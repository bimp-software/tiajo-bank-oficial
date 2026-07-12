import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../../shared/assets/styles/auth/qr.css";

import BackgroundImage from "../../shared/assets/images/auth/backgraund-login.webp";
import LogoImage from "../../shared/assets/icons/logo-tiajobank.webp";

export default function QrAccessPage() {
    const { t } = useTranslation("auth");
    const { lang = "es" } = useParams();

    return (
        <main className="qr-access-page">
            <div className="qr-bg">
                <img src={BackgroundImage} alt="" />
            </div>

            <section className="qr-card">
                <Link
                    to={`/${lang}/acceder`}
                    className="qr-back"
                >
                    <i className="bi bi-arrow-left"></i>
                    {t("qr.body.main_page.back")}
                </Link>

                <div className="qr-logo">
                    <img
                        src={LogoImage}
                        alt="TíaJo Bank"
                    />
                </div>

                <div className="qr-heading">
                    <h1>
                        {t("qr.body.main_page.title")}
                    </h1>

                    <p className="mobile-text">
                        {t("qr.body.main_page.mobile_description")}
                    </p>

                    <p className="desktop-text">
                        {t("qr.body.main_page.desktop_description")}
                    </p>

                    <span></span>
                </div>

                <div className="qr-mobile-layout">
                    <div className="qr-scan-box">
                        <div className="qr-scan-title">
                            <i className="bi bi-qr-code-scan"></i>

                            {t("qr.body.main_page.mobile.scan_title")}
                        </div>

                        <div className="camera-preview">
                            <video
                                autoPlay
                                playsInline
                                muted
                            ></video>

                            <div className="scanner-frame">
                                <i className="bi bi-qr-code"></i>
                            </div>
                        </div>

                        <button
                            className="btn-qr-primary"
                            type="button"
                        >
                            <i className="bi bi-camera"></i>

                            {t("qr.body.main_page.actions.activate_camera")}
                        </button>

                        <p className="qr-status"></p>

                        <div className="qr-other-options">
                            <h3>
                                {t("qr.body.main_page.mobile.other_options")}
                            </h3>

                            <button type="button">
                                <i className="bi bi-keyboard"></i>

                                <span>
                                    <strong>
                                        {t("qr.body.main_page.options.manual.title")}
                                    </strong>

                                    <small>
                                        {t("qr.body.main_page.options.manual.description")}
                                    </small>
                                </span>

                                <i className="bi bi-chevron-right"></i>
                            </button>

                            <label>
                                <i className="bi bi-image"></i>

                                <span>
                                    <strong>
                                        {t("qr.body.main_page.options.upload.title")}
                                    </strong>

                                    <small>
                                        {t("qr.body.main_page.options.upload.description")}
                                    </small>
                                </span>

                                <i className="bi bi-chevron-right"></i>

                                <input
                                    type="file"
                                    accept="image/*"
                                    hidden
                                />
                            </label>

                            <button type="button">
                                <i className="bi bi-question-circle"></i>

                                <span>
                                    <strong>
                                        {t("qr.body.main_page.options.help.title")}
                                    </strong>

                                    <small>
                                        {t("qr.body.main_page.options.help.description")}
                                    </small>
                                </span>

                                <i className="bi bi-chevron-right"></i>
                            </button>
                        </div>

                        <div className="qr-secure">
                            <i className="bi bi-shield-check"></i>

                            <div>
                                <strong>
                                    {t("qr.body.main_page.secure.title")}
                                </strong>

                                <p>
                                    {t("qr.body.main_page.secure.description")}
                                </p>
                            </div>

                            <i className="bi bi-lock-fill"></i>
                        </div>
                    </div>

                    <div className="qr-mobile-frog">
                        <img src="" alt="" />
                    </div>
                </div>

                <div className="qr-desktop-layout">
                    <article className="qr-option-card recommended">
                        <span className="recommended-label">
                            {t("qr.body.main_page.recommended")}
                        </span>

                        <div className="qr-option-icon">
                            <i className="bi bi-camera-video-fill"></i>
                        </div>

                        <h2>
                            {t("qr.body.main_page.desktop.camera.title")}
                        </h2>

                        <p>
                            {t("qr.body.main_page.desktop.camera.description")}
                        </p>

                        <button
                            className="btn-qr-primary"
                            type="button"
                        >
                            {t("qr.body.main_page.actions.activate_camera")}
                        </button>

                        <div className="desktop-camera-preview">
                            <video
                                autoPlay
                                playsInline
                                muted
                            ></video>
                        </div>

                        <p className="qr-status"></p>
                    </article>

                    <article className="qr-option-card">
                        <div className="qr-option-icon purple">
                            <i className="bi bi-keyboard"></i>
                        </div>

                        <h2>
                            {t("qr.body.main_page.options.manual.title")}
                        </h2>

                        <p>
                            {t("qr.body.main_page.desktop.manual_description")}
                        </p>

                        <button
                            className="btn-qr-outline purple"
                            type="button"
                        >
                            {t("qr.body.main_page.actions.enter_code")}
                        </button>
                    </article>

                    <article className="qr-option-card">
                        <div className="qr-option-icon blue">
                            <i className="bi bi-image"></i>
                        </div>

                        <h2>
                            {t("qr.body.main_page.options.upload.title")}
                        </h2>

                        <p>
                            {t("qr.body.main_page.desktop.upload_description")}
                        </p>

                        <label className="btn-qr-outline blue">
                            {t("qr.body.main_page.actions.select_image")}

                            <input
                                type="file"
                                accept="image/*"
                                hidden
                            />
                        </label>
                    </article>
                </div>

                <div className="qr-info-box">
                    <div>
                        <i className="bi bi-lightbulb-fill"></i>
                    </div>

                    <div>
                        <h3>
                            {t("qr.body.main_page.info.title")}
                        </h3>

                        <p>
                            {t("qr.body.main_page.info.description")}
                        </p>
                    </div>

                    <div className="qr-example">
                        <i className="bi bi-qr-code"></i>

                        <span>
                            {t("qr.body.main_page.info.example")}
                        </span>

                        <strong>
                            {t("qr.body.main_page.info.example_code")}
                        </strong>
                    </div>
                </div>

                <div className="qr-help">
                    <i className="bi bi-headset"></i>

                    <div>
                        <h3>
                            {t("qr.body.main_page.help.title")}
                        </h3>

                        <p>
                            {t("qr.body.main_page.help.description")}
                        </p>
                    </div>

                    <Link to="#">
                        {t("qr.body.main_page.help.button")}

                        <i className="bi bi-box-arrow-up-right"></i>
                    </Link>
                </div>
            </section>

            <div className="qr-bottom-secure">
                <i className="bi bi-lock-fill"></i>

                <strong>
                    {t("qr.body.main_page.bottom_secure.title")}
                </strong>

                <span></span>

                <p>
                    {t("qr.body.main_page.bottom_secure.description")}
                </p>
            </div>

            <div className="qr-modal">
                <div className="qr-modal-card">
                    <button
                        className="qr-modal-close"
                        type="button"
                    >
                        <i className="bi bi-x-lg"></i>
                    </button>

                    <h2>
                        {t("qr.body.main_page.modal.title")}
                    </h2>

                    <p>
                        {t("qr.body.main_page.modal.description")}
                    </p>

                    <input
                        type="text"
                        placeholder={t("qr.body.main_page.modal.placeholder")}
                    />

                    <button
                        className="btn-qr-primary"
                        type="button"
                    >
                        {t("qr.body.main_page.modal.button")}
                    </button>

                    <small></small>
                </div>
            </div>
        </main>
    );
}