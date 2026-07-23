import type { WithT } from "../../../../shared/types/common";

const indexItems = [
    "purpose",
    "scope",
    "channels",
    "institutional",
    "educational",
    "minors",
    "families",
    "consent",
    "content",
    "prohibited",
    "moderation",
    "notifications",
    "records",
    "reports",
    "changes",
    "contact",
] as const;

export default function Index({ t }: WithT) {
    return (
        <aside className="comunicaciones-index">
            <h2>{t("index.title")}</h2>

            <nav>
                {indexItems.map((key, index) => (
                    <a
                        href={`#comunicaciones-${key}`}
                        className={index === 0 ? "is-active" : ""}
                        key={key}
                    >
                        <span>{index + 1}.</span>
                        {t(`sections.${key}.title`)}
                    </a>
                ))}
            </nav>

            <a
                className="comunicaciones-download"
                href="/docs/politica-comunicaciones.pdf"
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
