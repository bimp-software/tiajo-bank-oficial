import type { WithT } from "../../../../shared/types/common";

const indexItems = [
    "collection",
    "use",
    "legal",
    "sharing",
    "cookies",
    "storage",
    "security",
    "rights",
    "children",
    "international",
    "changes",
    "contact",
] as const;

export default function Index({ t }: WithT) {
    return (
        <aside className="privacidad-index">
            <h2>{t("index.title")}</h2>

            <nav>
                {indexItems.map((key, index) => (
                    <a href={`#privacidad-${key}`} key={key} className={index === 0 ? "is-active" : ""}>
                        <span>{index + 1}.</span>
                        {t(`sections.${key}.title`)}
                    </a>
                ))}
            </nav>

            <a className="privacidad-download" href="/docs/politica-privacidad.pdf" download>
                <i className="bi bi-file-earmark-arrow-down" />
                <span>
                    <strong>{t("index.download")}</strong>
                    <small>{t("index.updated")}</small>
                </span>
            </a>
        </aside>
    );
}
