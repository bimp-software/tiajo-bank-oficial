import { Link } from "react-router-dom";
import type { WithTAndLang } from "../../../../shared/types/common"; 

export default function FAQ({ t, lang }: WithTAndLang) {
    return (
        <>
            <article className="contacto-help-card">
                <div>
                    <span>{t("help.eyebrow")}</span>
                    <h2>{t("help.title")}</h2>
                    <p>{t("help.description")}</p>

                    <Link to={`/${lang}/centro-de-ayuda`}>
                        {t("help.button")}
                        <i className="bi bi-arrow-right" />
                    </Link>
                </div>

                <img
                    src="/assets/img/contacto/pepe-ayuda.webp"
                    alt={t("help.imageAlt")}
                />
            </article>

            <article className="contacto-social-card">
                <span>{t("social.eyebrow")}</span>
                <h2>{t("social.title")}</h2>
                <p>{t("social.description")}</p>

                <div>
                    <a href="#" aria-label="Instagram"><i className="bi bi-instagram" /></a>
                    <a href="#" aria-label="Facebook"><i className="bi bi-facebook" /></a>
                    <a href="#" aria-label="YouTube"><i className="bi bi-youtube" /></a>
                    <a href="#" aria-label="TikTok"><i className="bi bi-tiktok" /></a>
                </div>
            </article>

            <article className="contacto-faq-card">
                <div className="contacto-card-heading">
                    <span className="contacto-card-heading__icon">
                        <i className="bi bi-question-lg" />
                    </span>
                    <div>
                        <h2>{t("faq.title")}</h2>
                    </div>
                </div>

                <div className="accordion contacto-faq" id="contactoFaq">
                    {["support", "response", "phone", "suggestions", "guides"].map((key, index) => (
                        <div className="accordion-item" key={key}>
                            <h3 className="accordion-header">
                                <button
                                    className={`accordion-button ${index === 0 ? "" : "collapsed"}`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#contacto-${key}`}
                                >
                                    {t(`faq.items.${key}.question`)}
                                </button>
                            </h3>

                            <div
                                id={`contacto-${key}`}
                                className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                                data-bs-parent="#contactoFaq"
                            >
                                <div className="accordion-body">
                                    {t(`faq.items.${key}.answer`)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <Link to={`/${lang}/preguntas-frecuentes`}>
                    {t("faq.action")}
                    <i className="bi bi-arrow-right" />
                </Link>
            </article>
        </>
    );
}
