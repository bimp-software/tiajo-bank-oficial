import type { WithT } from "../../../../shared/types/common";

type Category = {
    id: string;
    icon: string;
    tone: "green" | "yellow" | "purple" | "blue" | "pink" | "cyan";
    count: number;
};

const categories: Category[] = [
    { id: "ahorro", icon: "bi-piggy-bank", tone: "green", count: 128 },
    { id: "presupuesto", icon: "bi-calculator", tone: "yellow", count: 95 },
    { id: "emprendimiento", icon: "bi-rocket-takeoff", tone: "purple", count: 87 },
    { id: "consumo", icon: "bi-shield-check", tone: "blue", count: 76 },
    { id: "convivencia", icon: "bi-people-fill", tone: "pink", count: 64 },
    { id: "juegos", icon: "bi-controller", tone: "cyan", count: 80 },
];

export default function Categories({ t }: WithT) {
    return (
        <section className="resource-categories-section">
            <div className="container-xl">

                <div className="section-title">
                    <h2>{t("categorias.titulo")} <i className="bi bi-stars"></i></h2>
                </div>

                <div className="resource-categories-grid">
                    {categories.map((cat) => (
                        <article className="category-card" key={cat.id}>
                            <div className={`category-icon ${cat.tone}`}>
                                <i className={`bi ${cat.icon}`}></i>
                            </div>
                            <h3>{t(`categorias.items.${cat.id}.nombre`)}</h3>
                            <p>{t(`categorias.items.${cat.id}.descripcion`)}</p>
                            <strong>{cat.count} {t("categorias.recursos_label")}</strong>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}