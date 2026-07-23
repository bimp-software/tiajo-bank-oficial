import type { WithT } from "../../../../shared/types/common";

const indexItems = [
    "acceptance",
    "service",
    "registration",
    "responsibilities",
    "intellectualProperty",
    "userContent",
    "payments",
    "suspension",
    "liability",
    "changes",
    "law",
    "contact",
] as const;

export default function Index({ t }: WithT) {
    return (
        <aside className="terminos-index">
            <h2>{t("index.title")}</h2>

            <nav>
                {indexItems.map((key, index) => (
                    <a
                        href={`#terminos-${key}`}
                        className={index === 0 ? "is-active" : ""}
                        key={key}
                    >
                        <span>{index + 1}.</span>
                        {t(`sections.${key}.title`)}
                    </a>
                ))}
            </nav>

            <a
                className="terminos-download"
                href="/docs/terminos-y-condiciones.pdf"
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
