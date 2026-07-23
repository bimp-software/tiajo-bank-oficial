import { Link } from "react-router-dom";
import type { WithTAndLang } from "../../../../shared/types/common";

export default function Support({ t, lang }: WithTAndLang) {
    return (
        <section className="seguridad-support">
            <div className="seguridad-container">
                <div className="seguridad-support__card">
                    <img src="/assets/img/seguridad/pepe-soporte.webp" alt={t("support.imageAlt")} />
                    <div className="seguridad-support__content"><h2>{t("support.title")}</h2><p>{t("support.description")}</p></div>
                    <div className="seguridad-support__actions">
                        <Link to="#" className="seguridad-button seguridad-button--outline">{t("support.contact")}<i className="bi bi-chat-dots" /></Link>
                        <Link to={`/${lang}/centro-ayuda`} className="seguridad-button seguridad-button--primary">{t("support.helpCenter")}<i className="bi bi-box-arrow-up-right" /></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}