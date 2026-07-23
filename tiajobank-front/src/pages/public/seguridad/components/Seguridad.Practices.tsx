import type { WithT } from "../../../../shared/types/common";

export default function Practices({ t }: WithT) {
    return (
        <section className="seguridad-section seguridad-section--practices">
            <div className="seguridad-container">
                <div className="seguridad-heading"><h2>{t("practices.title")}<i className="bi bi-stars" /></h2></div>

                <div className="seguridad-practices-grid">
                    <article><span className="seguridad-practice-icon seguridad-practice-icon--green"><i className="bi bi-lock" /></span><p>{t("practices.items.passwords")}</p></article>
                    <article><span className="seguridad-practice-icon seguridad-practice-icon--purple"><i className="bi bi-envelope-check" /></span><p>{t("practices.items.verification")}</p></article>
                    <article><span className="seguridad-practice-icon seguridad-practice-icon--yellow"><i className="bi bi-display" /></span><p>{t("practices.items.sessions")}</p></article>
                    <article><span className="seguridad-practice-icon seguridad-practice-icon--blue"><i className="bi bi-shield-check" /></span><p>{t("practices.items.updates")}</p></article>
                    <article><span className="seguridad-practice-icon seguridad-practice-icon--pink"><i className="bi bi-bell" /></span><p>{t("practices.items.report")}</p></article>
                </div>
            </div>
        </section>
    );
}