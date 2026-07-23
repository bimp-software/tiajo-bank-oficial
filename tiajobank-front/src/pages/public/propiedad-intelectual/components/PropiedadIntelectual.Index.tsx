import type { WithT } from "../../../../shared/types/common";

const indexItems = [
    "purpose",
    "ownership",
    "platformContent",
    "trademarks",
    "software",
    "licenses",
    "userContent",
    "educationalUse",
    "restrictions",
    "thirdParty",
    "reports",
    "measures",
    "changes",
    "contact",
] as const;

export default function Index({ t }: WithT) {
    return (
        <aside className="propiedad-intelectual-index">
            <h2>{t("index.title")}</h2>

            <nav>
                {indexItems.map((key, index) => (
                    <a
                        href={`#propiedad-intelectual-${key}`}
                        className={index === 0 ? "is-active" : ""}
                        key={key}
                    >
                        <span>{index + 1}.</span>
                        {t(`sections.${key}.title`)}
                    </a>
                ))}
            </nav>

            <a
                className="propiedad-intelectual-download"
                href="/docs/politica-propiedad-intelectual.pdf"
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
