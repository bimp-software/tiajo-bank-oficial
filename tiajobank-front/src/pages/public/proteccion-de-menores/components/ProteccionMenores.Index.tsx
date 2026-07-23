import type { WithT } from "../../../../shared/types/common";

const indexItems = [
    "purpose",
    "scope",
    "bestInterest",
    "safeEnvironment",
    "accounts",
    "data",
    "communications",
    "content",
    "prohibitedConduct",
    "moderation",
    "reporting",
    "response",
    "families",
    "training",
    "changes",
    "contact",
] as const;

export default function Index({ t }: WithT) {
    return (
        <aside className="proteccion-menores-index">
            <h2>{t("index.title")}</h2>

            <nav>
                {indexItems.map((key, index) => (
                    <a
                        href={`#proteccion-menores-${key}`}
                        className={index === 0 ? "is-active" : ""}
                        key={key}
                    >
                        <span>{index + 1}.</span>
                        {t(`sections.${key}.title`)}
                    </a>
                ))}
            </nav>

            <a
                className="proteccion-menores-download"
                href="/docs/politica-proteccion-menores.pdf"
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
