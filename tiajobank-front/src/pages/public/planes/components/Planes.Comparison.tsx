import type { WithT } from "../../../../shared/types/common";

function ComparisonValue({ value, purple = false }: { value: string | boolean; purple?: boolean }) {
    if (value === true) return <i className={`bi bi-check-circle-fill check ${purple ? "purple" : "green"}`}></i>;
    if (value === false) return <span className="not-included">—</span>;
    return <>{value}</>;
}

export default function PlanesComparison({ t }:WithT) {
    const rows = [
        [t("comparacion.filas.actividades"), true, true, true],
        [t("comparacion.filas.juegos"), true, true, true],
        [t("comparacion.filas.reportes"), "Básicos", "Avanzados", "Personalizados"],
        [t("comparacion.filas.cursos"), "1", "Hasta 10", "Ilimitados"],
        [t("comparacion.filas.estudiantes"), "Hasta 30", "Hasta 300", "Ilimitados"],
        [t("comparacion.filas.soporte"), "Correo", "Prioritario", "Dedicado"],
        [t("comparacion.filas.capacitacion"), false, true, true],
        [t("comparacion.filas.integraciones"), false, "Google Classroom", "Avanzadas"],
    ] as const;

    return (
        <section className="plans-table-section">
            <div className="container-xl">

                <h2>{t("comparacion.titulo")} <i className="bi bi-stars"></i></h2>

                <div className="plans-table-wrapper">
                    <table className="plans-table">
                        <thead>
                            <tr>
                                <th>{t("comparacion.header_funcionalidad")}</th>
                                <th>{t("planes.basico.nombre")}</th>
                                <th>{t("planes.pro.nombre")}</th>
                                <th>{t("planes.institucion.nombre")}</th>
                            </tr>
                        </thead>

                        <tbody>
                            {rows.map(([feature, basic, pro, institution]) => (
                                <tr key={feature}>
                                    <td>{feature}</td>
                                    <td><ComparisonValue value={basic} /></td>
                                    <td><ComparisonValue value={pro} /></td>
                                    <td><ComparisonValue value={institution} purple /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    );
}