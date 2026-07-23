import type { WithT } from "../../../../shared/types/common";

const indexItems = [
    "purpose",
    "scope",
    "responsibleUse",
    "prohibitedConduct",
    "content",
    "privacy",
    "security",
    "communications",
    "intellectualProperty",
    "reporting",
    "measures",
    "changes",
    "contact",
] as const;

export default function Index({ t }: WithT) {
    return (
        <aside className="uso-aceptable-index">
            <h2>{t("index.title")}</h2>

            <nav>
                {indexItems.map((key, index) => (
                    <a
                        href={`#uso-aceptable-${key}`}
                        className={index === 0 ? "is-active" : ""}
                        key={key}
                    >
                        <span>{index + 1}.</span>
                        {t(`sections.${key}.title`)}
                    </a>
                ))}
            </nav>

            <a
                className="uso-aceptable-download"
                href="/docs/politica-uso-aceptable.pdf"
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
