import { Link } from 'react-router-dom';
import type { WithTAndLang } from "../../types/common";


export default function FinalSection({ t, lang }: WithTAndLang) {
    return (
        <section className="section-final">
            <div className="container-xl">
                <div className="final-card">
                    <div>
                        <h2>
                            {t("final.left.title.before")}{" "}
                            <span>{t("final.left.title.highlight")}</span>
                        </h2>

                        <div className="stats">
                            <div>
                                <i className="bi bi-building-fill"></i>
                                <strong>{t("final.left.stats.schools.number")}</strong>
                                <small>{t("final.left.stats.schools.label")}</small>
                            </div>

                            <div>
                                <i className="bi bi-people-fill"></i>
                                <strong>{t("final.left.stats.families.number")}</strong>
                                <small>{t("final.left.stats.families.label")}</small>
                            </div>

                            <div>
                                <i className="bi bi-coin"></i>
                                <strong>{t("final.left.stats.coins.number")}</strong>
                                <small>{t("final.left.stats.coins.label")}</small>
                            </div>

                            <div>
                                <i className="bi bi-globe-americas"></i>
                                <strong>{t("final.left.stats.languages.number")}</strong>
                                <small>{t("final.left.stats.languages.label")}</small>
                            </div>
                        </div>
                    </div>

                    <div className="final-green">
                        <h3>{t("final.right.title")}</h3>
                        <p>{t("final.right.description")}</p>
                        <Link to={`/${lang}/demo`} className="btn btn-hero-primary">
                            {t("final.right.button")}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}