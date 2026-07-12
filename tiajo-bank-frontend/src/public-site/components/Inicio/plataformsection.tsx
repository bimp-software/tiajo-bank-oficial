import { Link } from 'react-router-dom';
import type { WithTAndLang } from "../../types/common";

import AppTiajo from "../../../shared/assets/images/app-tiajo.png";

export default function PlatformSection({ t, lang }:WithTAndLang) {
    return (
        <section className="section-platform">
            <div className="container-xl">
                <div className="platform-grid">
                    <div className="platform-card left">
                        <div>
                            <h2>
                                {t("platform.left.title.before")}{" "}
                                <span>{t("platform.left.title.highlight")}</span>
                            </h2>

                            <ul>
                                <li>{t("platform.left.features.teachers")}</li>
                                <li>{t("platform.left.features.management")}</li>
                                <li>{t("platform.left.features.roles")}</li>
                                <li>{t("platform.left.features.reports")}</li>
                                <li>{t("platform.left.features.access")}</li>
                                <li>{t("platform.left.features.multilang")}</li>
                            </ul>

                            <Link to={`/${lang}/funcionalidades`} className="btn btn-purple">
                                {t("platform.left.button")}
                            </Link>
                        </div>

                        <img src={AppTiajo} alt={t("platform.left.img_alt")} />
                    </div>

                    <div className="platform-card community">
                        <h2>{t("platform.right.title")}</h2>

                        <div className="community-grid">
                            <article>
                                <div className="community-icon">
                                    <i className="bi bi-mortarboard-fill"></i>
                                </div>
                                <h3>{t("platform.right.roles.students.title")}</h3>
                                <p>{t("platform.right.roles.students.description")}</p>
                            </article>

                            <article>
                                <div className="community-icon">
                                    <i className="bi bi-person-workspace"></i>
                                </div>
                                <h3>{t("platform.right.roles.teachers.title")}</h3>
                                <p>{t("platform.right.roles.teachers.description")}</p>
                            </article>

                            <article>
                                <div className="community-icon">
                                    <i className="bi bi-people-fill"></i>
                                </div>
                                <h3>{t("platform.right.roles.guardians.title")}</h3>
                                <p>{t("platform.right.roles.guardians.description")}</p>
                            </article>
                        </div>

                        <div className="testimonial">
                            “{t("platform.right.testimonial.quote")}”
                            <small>{t("platform.right.testimonial.author")}</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}