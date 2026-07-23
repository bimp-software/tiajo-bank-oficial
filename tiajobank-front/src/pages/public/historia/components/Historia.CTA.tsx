import { Link } from "react-router-dom";
import type { WithTAndLang } from "../../../../shared/types/common";

export default function HistoriaCTA({ t, lang }: WithTAndLang) {
    return (
        <section className="historia-cta">
            <div className="container">
                <div className="historia-cta__card">
                    <div className="historia-cta__content">
                        <span className="historia-cta__eyebrow">
                            <i className="bi bi-heart-fill" />
                            {t("cta.eyebrow")}
                        </span>
                        <h2>{t("cta.title")}</h2>
                        <p>{t("cta.description")}</p>

                        <div className="historia-cta__actions">
                            <Link
                                to={`/${lang}/demo`}
                                className="btn-historia btn-historia--light"
                            >
                                <i className="bi bi-calendar-check-fill" />
                                <span>{t("cta.primaryButton")}</span>
                            </Link>

                            <Link
                                to={`/${lang}/que-es`}
                                className="btn-historia btn-historia--outline-light"
                            >
                                <span>{t("cta.secondaryButton")}</span>
                                <i className="bi bi-arrow-right" />
                            </Link>
                        </div>
                    </div>

                    <div className="historia-cta__visual">
                        <img
                            src="/assets/img/historia/pepe-cta-historia.webp"
                            alt={t("cta.imageAlt")}
                        />
                    </div>

                    <div className="historia-cta__shape historia-cta__shape--one" />
                    <div className="historia-cta__shape historia-cta__shape--two" />
                </div>
            </div>
        </section>
    );
}
