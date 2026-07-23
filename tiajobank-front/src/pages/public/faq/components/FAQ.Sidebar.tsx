import { Link } from "react-router-dom";
import type { WithTAndLang } from "../../../../shared/types/common";

export default function Sidebar({ t, lang }: WithTAndLang) {
    return (
        <aside className="faq-sidebar">
            <article className="faq-help-card">
                <span>{t("sidebar.help.eyebrow")}</span>
                <h2>{t("sidebar.help.title")}</h2>
                <p>{t("sidebar.help.description")}</p>
                <img src="/assets/img/faq/pepe-soporte.webp" alt={t("sidebar.help.imageAlt")} />
                <Link to={`/${lang}/centro-de-ayuda`}>{t("sidebar.help.helpCenter")}<i className="bi bi-arrow-right" /></Link>
                <a href="mailto:soporte@tiajobank.cl">{t("sidebar.help.contact")}<i className="bi bi-envelope" /></a>
            </article>

            <article className="faq-topics-card">
                <h2>{t("sidebar.topics.title")}</h2>
                <ul>
                    {[
                        ["coins", 23, "bi-file-earmark-text"],
                        ["missions", 18, "bi-bullseye"],
                        ["store", 15, "bi-shop"],
                        ["account", 12, "bi-gear"],
                        ["reports", 10, "bi-clipboard-data"]
                    ].map(([key, total, icon]) => (
                        <li key={key}>
                            <span><i className={`bi ${icon}`} />{t(`sidebar.topics.items.${key}`)}</span>
                            <strong>{total}</strong>
                        </li>
                    ))}
                </ul>
            </article>

            <article className="faq-tip-card">
                <i className="bi bi-lightbulb-fill" />
                <div>
                    <span>{t("sidebar.tip.eyebrow")}</span>
                    <h2>{t("sidebar.tip.title")}</h2>
                    <p>{t("sidebar.tip.description")}</p>
                    <Link to={`/${lang}/guias`}>{t("sidebar.tip.action")}<i className="bi bi-book" /></Link>
                </div>
            </article>
        </aside>
    );
}
