import type { WithTAndLang } from "../../../../shared/types/common";

type Resource = {
    id: string;
    tipo: string;
    nivel: string;
    image: string;
};

const resources: Resource[] = [
    { id: "camino-ahorro", tipo: "Juego", nivel: "Primaria", image: "/assets/img/recursos/camino-ahorro.webp" },
    { id: "guia-docente", tipo: "Guía", nivel: "Docentes", image: "/assets/img/recursos/guia-docente.webp" },
    { id: "tarro-metas", tipo: "Actividad", nivel: "Primaria", image: "/assets/img/recursos/tarro-metas.webp" },
    { id: "presupuesto-personal", tipo: "Plantilla", nivel: "Secundaria", image: "/assets/img/recursos/presupuesto-personal.webp" },
    { id: "interes-simple", tipo: "Presentación", nivel: "Secundaria", image: "/assets/img/recursos/interes-simple.webp" },
];

export default function Featured({ t, lang }: WithTAndLang) {
    return (
        <section className="featured-resources-section">
            <div className="container-xl">

                <div className="section-title between">
                    <h2>{t("destacados.titulo")} <i className="bi bi-stars"></i></h2>
                    <a href={`/${lang}/recursos/todos`}>
                        {t("destacados.ver_todos")} <i className="bi bi-arrow-right"></i>
                    </a>
                </div>

                <div className="featured-resources-grid">
                    {resources.map((r) => (
                        <article className="resource-card" key={r.id}>
                            <div className="resource-image">
                                <img src={r.image} alt="" />
                                <span>{r.tipo}</span>
                            </div>

                            <div className="resource-body">
                                <h3>{t(`destacados.items.${r.id}.titulo`)}</h3>
                                <p>{t(`destacados.items.${r.id}.descripcion`)}</p>

                                <div className="resource-footer">
                                    <small>{r.nivel}</small>
                                    <a href="#"><i className="bi bi-download"></i> {t("destacados.descargar")}</a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}