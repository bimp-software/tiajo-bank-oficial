import type { WithT } from "../../../../shared/types/common";

const indexItems = [
    "what",
    "purpose",
    "types",
    "essential",
    "functional",
    "analytics",
    "personalization",
    "thirdParty",
    "duration",
    "management",
    "consent",
    "changes",
    "contact",
] as const;

export default function Index({ t }: WithT) {
    return (
        <aside className="cookies-index">
            <h2>{t("index.title")}</h2>

            <nav>
                {indexItems.map((key, index) => (
                    <a
                        href={`#cookies-${key}`}
                        className={index === 0 ? "is-active" : ""}
                        key={key}
                    >
                        <span>{index + 1}.</span>
                        {t(`sections.${key}.title`)}
                    </a>
                ))}
            </nav>

            <a
                className="cookies-download"
                href="/docs/politica-de-cookies.pdf"
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
