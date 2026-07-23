import type { WithT } from "../../../../shared/types/common";

const indexItems = [
    "scope",
    "products",
    "prices",
    "payment",
    "billing",
    "subscriptions",
    "renewals",
    "cancellations",
    "refunds",
    "exceptions",
    "processing",
    "promotions",
    "taxes",
    "changes",
    "contact",
] as const;

export default function Index({ t }: WithT) {
    return (
        <aside className="compras-reembolsos-index">
            <h2>{t("index.title")}</h2>

            <nav>
                {indexItems.map((key, index) => (
                    <a
                        href={`#compras-reembolsos-${key}`}
                        className={index === 0 ? "is-active" : ""}
                        key={key}
                    >
                        <span>{index + 1}.</span>
                        {t(`sections.${key}.title`)}
                    </a>
                ))}
            </nav>

            <a
                className="compras-reembolsos-download"
                href="/docs/politica-compras-reembolsos.pdf"
                download
            >
                <i className="bi bi-file-earmark-arrow-down" />
                <span>
                    <strong>{t("index.download")}</strong>
                    <small>{t("index.updated")}</small>
                </span>
            </a>
        </aside>
    );
}
