import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import "../../../shared/assets/styles/index.css";

import CoinsIcon from "../../../shared/assets/images/icons/coins.webp";
import PigIcon from "../../../shared/assets/images/icons/pig.webp";
import GiftIcon from "../../../shared/assets/images/icons/gift.webp";
import StarIcon from "../../../shared/assets/images/icons/star.webp";
import AppTiajo from "../../../shared/assets/images/app-tiajo.png";

import Hero from "../../components/Inicio/hero";
import Methodology from "../../components/Inicio/methodology";


export default function Inicio() {
    const { t,i18n } = useTranslation("inicio");
    const { lang = "es" } = useParams();

    useEffect(() => {
        if (i18n.language !== lang) {
            i18n.changeLanguage(lang);
        }
    }, [lang, i18n]);

    return (
        <>
            <Hero t={t} lang={lang}/>

            <Methodology t={t}/>

            <section className="section-process">
                <div className="container-xl">
                    <div className="process-card">
                        <h2>
                            ¿Cómo <span>funciona?</span>
                        </h2>

                        <div className="process-steps">
                            <article>
                                <div className="step-icon">
                                    <img src={CoinsIcon} alt="Monedas educativas" />
                                </div>
                                <h3><span className="badge rounded-pill bg-success">1</span> Ganan monedas</h3>
                                <p>Los estudiantes reciben monedas por responsabilidad, esfuerzo y participación.</p>
                            </article>

                            <article>
                                <div className="step-icon">
                                    <img src={PigIcon} alt="Ahorro escolar" />
                                </div>
                                <h3><span className="badge rounded-pill bg-success">2</span> Ahorran y deciden</h3>
                                <p>Aprenden a administrar sus recursos simbólicos y tomar decisiones.</p>
                            </article>

                            <article>
                                <div className="step-icon">
                                    <img src={GiftIcon} alt="Recompensas" />
                                </div>
                                <h3><span className="badge rounded-pill bg-success">3</span> Canjean recompensas</h3>
                                <p>Acceden a beneficios, desafíos, premios y experiencias dentro del curso.</p>
                            </article>

                            <article>
                                <div className="step-icon">
                                    <img src={StarIcon} alt="Logros" />
                                </div>
                                <h3><span className="badge rounded-pill bg-success">4</span> Celebran logros</h3>
                                <p>El progreso se vuelve visible y refuerza la autoestima académica.</p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-platform">
                <div className="container-xl">
                    <div className="platform-grid">
                        <div className="platform-card left">
                            <div>
                                <h2>
                                    Una plataforma para <span>toda la comunidad</span>
                                </h2>

                                <ul>
                                    <li>Panel para docentes y directivos.</li>
                                    <li>Gestión de estudiantes, cursos y monedas.</li>
                                    <li>Roles y permisos por tipo de usuario.</li>
                                    <li>Reportes de participación y progreso.</li>
                                    <li>Acceso para apoderados y estudiantes.</li>
                                    <li>Diseño multilenguaje y accesible.</li>
                                </ul>

                                <Link to={`/${lang}/funcionalidades`} className="btn btn-purple">
                                    Explorar plataforma
                                </Link>
                            </div>

                            <img src={AppTiajo} alt="Aplicación TíaJo Bank" />
                        </div>

                        <div className="platform-card community">
                            <h2>Una comunidad que aprende junta</h2>

                            <div className="community-grid">

                                <article>
                                    <div className="community-icon">
                                        <i className="bi bi-mortarboard-fill"></i>
                                    </div>

                                    <h3>Estudiantes</h3>

                                    <p>
                                        Participan, cumplen metas y visualizan sus avances.
                                    </p>
                                </article>

                                <article>
                                    <div className="community-icon">
                                        <i className="bi bi-person-workspace"></i>
                                    </div>

                                    <h3>Docentes</h3>

                                    <p>
                                        Gestionan incentivos, cursos y dinámicas de aula.
                                    </p>
                                </article>

                                <article>
                                    <div className="community-icon">
                                        <i className="bi bi-people-fill"></i>
                                    </div>

                                    <h3>Apoderados</h3>

                                    <p>
                                        Acompañan el proceso y reconocen los logros.
                                    </p>
                                </article>

                            </div>

                            <div className="testimonial">
                                “Cuando el aprendizaje tiene sentido, los estudiantes se involucran más.”
                                <small>TíaJo Bank</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-final">
                <div className="container-xl">
                    <div className="final-card">
                        <div>
                            <h2>
                                Lleva la gamificación escolar <span>a otro nivel</span>
                            </h2>

                            <div className="stats">
                                <div>
                                    <i className="bi bi-building-fill"></i>
                                    <strong>+500</strong>
                                    <small>Colegios potenciales</small>
                                </div>

                                <div>
                                    <i className="bi bi-people-fill"></i>
                                    <strong>+100.000</strong>
                                    <small>Familias alcanzables</small>
                                </div>

                                <div>
                                    <i className="bi bi-coin"></i>
                                    <strong>+10M</strong>
                                    <small>Monedas simbólicas</small>
                                </div>

                                <div>
                                    <i className="bi bi-globe-americas"></i>
                                    <strong>14</strong>
                                    <small>Idiomas proyectados</small>
                                </div>
                            </div>
                        </div>

                        <div className="final-green">
                            <h3>¿Quieres probar TíaJo Bank?</h3>
                            <p>Solicita una demo y descubre cómo puede adaptarse a tu colegio.</p>
                            <Link to={`/${lang}/demo`} className="btn btn-hero-primary">
                                Solicitar demo
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}