import type { WithT } from "../../../../shared/types/common";

type Format = {
    id: string;
    icon: string;
    tone: "red" | "orange" | "purple" | "blue" | "green";
};

const formats: Format[] = [
    { id: "guias", icon: "bi-file-earmark-pdf", tone: "red" },
    { id: "presentaciones", icon: "bi-file-earmark-slides", tone: "orange" },
    { id: "juegos", icon: "bi-controller", tone: "purple" },
    { id: "videos", icon: "bi-camera-video", tone: "blue" },
    { id: "hojas", icon: "bi-ui-checks-grid", tone: "green" },
];

export default function Formats({ t }: WithT) {
    return (
        <section className="resource-formats-section">
            <div className="container-xl">

                <div className="section-title">
                    <h2>{t("formatos.titulo")} <i className="bi bi-stars"></i></h2>
                </div>

                <div className="resource-formats-grid">
                    {formats.map((f) => (
                        <article className={`format-card ${f.tone}`} key={f.id}>
                            <div className="format-icon">
                                <i className={`bi ${f.icon}`}></i>
                            </div>
                            <h3>{t(`formatos.items.${f.id}.nombre`)}</h3>
                            <p>{t(`formatos.items.${f.id}.descripcion`)}</p>
                            <a href="#">{t("formatos.ver_recursos")} <i className="bi bi-arrow-right"></i></a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}