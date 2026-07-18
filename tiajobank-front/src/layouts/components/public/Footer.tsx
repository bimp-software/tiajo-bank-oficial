import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Logo from "../../../shared/assets/icons/logo-tiajobank.webp"

export default function Footer() {
    const { t } = useTranslation("footer");
    const { lang = "es" } = useParams();

    return (
        <footer className="bg-tj text-white pt-5" role="contentinfo">
            <div className="container-xl">
                <div className="row g-4 g-xl-5">
                    <div className="col-12 col-sm-6 col-lg-3">
                        <Link to={`/${lang}`} className="d-inline-block mb-3" aria-label="TíaJo Bank – Inicio">
                            <img src={Logo} alt="TíaJo Bank" className="tj-logo-img" />
                        </Link>

                        <p className="text-white-50 small fw-semibold lh-lg">
                            {t("tagline")}
                        </p>

                        <div className="d-flex gap-2 mt-3">
                            <a href="#" className="tj-social-link text-decoration-none" aria-label={t("social.instagram")}>
                                <i className="bi bi-instagram" />
                            </a>
                            <a href="#" className="tj-social-link text-decoration-none" aria-label={t("social.facebook")}>
                                <i className="bi bi-facebook" />
                            </a>
                            <a href="#" className="tj-social-link text-decoration-none" aria-label={t("social.tiktok")}>
                                <i className="bi bi-tiktok" />
                            </a>
                            <a href="#" className="tj-social-link text-decoration-none" aria-label={t("social.youtube")}>
                                <i className="bi bi-youtube" />
                            </a>
                        </div>
                    </div>

                    <FooterColumn
                        title={t("platform.title")}
                        links={[
                            { label: t("platform.que_es"), to: `/${lang}/que-es` },
                            { label: t("platform.funcionalidades"), to: `/${lang}/funcionalidades` },
                            { label: t("platform.planes"), to: `/${lang}/planes` },
                            { label: t("platform.seguridad"), to: `/${lang}/seguridad` },
                        ]}
                    />

                    <FooterColumn
                        title={t("resources.title")}
                        links={[
                            { label: t("resources.blog"), to: `/${lang}/blog` },
                            { label: t("resources.guias"), to: `/${lang}/recursos` },
                            { label: t("resources.faq"), to: `/${lang}/faq` },
                            { label: t("resources.ayuda"), to: `/${lang}/ayuda` },
                        ]}
                    />

                    <FooterColumn
                        title={t("company.title")}
                        links={[
                            { label: t("company.nosotros"), to: `/${lang}/nosotros` },
                            { label: t("company.contacto"), to: `/${lang}/contacto` },
                            { label: t("company.trabajo"), to: `/${lang}/trabajo` },
                            { label: t("company.politicas"), to: `/${lang}/politicas` },
                        ]}
                    />

                    <div className="col-12 col-sm-9 col-lg-3">
                        <div className="bg-tj2 borde border-opacity-10 rounded-3 p-4">
                            <h6 className="fw-black text-white mb-1">{t("newsletter.title")}</h6>

                            <p className="small text-white-50 mb-3">
                                {t("newsletter.description")}
                            </p>

                            <div className="d-flex align-items-center gap-2">
                                <label htmlFor="newsletterEmail" className="visually-hidden">
                                    {t("newsletter.email_label")}
                                </label>

                                <input id="newsletterEmail" type="email" className="form-control form-control-sm tj-email-input" placeholder={t("newsletter.placeholder")} autoComplete="email" style={{ borderRadius: "999px" }} />

                                <button type="button" className="btn btn-tj-cta btn-sm d-flex align-items-center gap-1 flex-shrink-0 px-3" aria-label={t("newsletter.button")}>
                                    {t("newsletter.button")}
                                    <i className="bi bi-send-fill" style={{ fontSize: ".75rem" }} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="border-white border-opacity-10 mt-5 mb-0" />
            </div>

            <div className="py-4">
                <div className="container">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                        <div className="text-white-50 small fw-semibold">
                            {t("copyright")}
                        </div>

                        <div className="d-flex flex-wrap justify-content-center gap-3">
                            <Link to={`/${lang}/terminos`} className="text-decoration-none text-white-50 footer-link small">
                                {t("legal.terminos")}
                            </Link>
                            <Link to={`/${lang}/privacidad`} className="text-decoration-none text-white-50 footer-link small">
                                {t("legal.privacidad")}
                            </Link>
                            <Link to={`/${lang}/cookies`} className="text-decoration-none text-white-50 footer-link small">
                                {t("legal.cookies")}
                            </Link>
                            <Link to={`/${lang}/soporte`} className="text-decoration-none text-white-50 footer-link small">
                                {t("legal.soporte")}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

type FooterColumnProps = {
    title: string;
    links: {
        label: string;
        to: string;
    }[];
};

function FooterColumn({ title, links }: FooterColumnProps) {
    return (
        <div className="col-6 col-sm-3 col-lg-2">
            <p className="text-yellow text-uppercase fw-black small mb-3" style={{ letterSpacing: ".1em" }}>
                {title}
            </p>

            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                {links.map((link) => (
                    <li key={link.to}>
                        <Link to={link.to} className="tj-footer-link text-decoration-none">
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}