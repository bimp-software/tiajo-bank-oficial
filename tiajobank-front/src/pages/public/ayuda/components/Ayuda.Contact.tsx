import type { WithT } from "../../../../shared/types/common";

export default function Contact({ t }: WithT) {
    return (
        <section className="ayuda-section ayuda-contact">
            <div className="ayuda-container">
                <div className="ayuda-heading">
                    <span>{t("contact.eyebrow")}</span>
                    <h2>{t("contact.title")}</h2>
                    <p>{t("contact.description")}</p>
                </div>

                <div className="ayuda-contact__grid">
                    <article>
                        <span className="ayuda-contact__icon ayuda-contact__icon--green">
                            <i className="bi bi-chat-dots-fill" />
                        </span>
                        <h3>{t("contact.items.chat.title")}</h3>
                        <p>{t("contact.items.chat.text")}</p>
                        <button type="button">{t("contact.items.chat.button")}</button>
                    </article>

                    <article>
                        <span className="ayuda-contact__icon ayuda-contact__icon--purple">
                            <i className="bi bi-envelope-fill" />
                        </span>
                        <h3>{t("contact.items.email.title")}</h3>
                        <p>{t("contact.items.email.text")}</p>
                        <a href="mailto:soporte@tiajobank.cl">{t("contact.items.email.button")}</a>
                    </article>

                    <article>
                        <span className="ayuda-contact__icon ayuda-contact__icon--yellow">
                            <i className="bi bi-calendar-check-fill" />
                        </span>
                        <h3>{t("contact.items.meeting.title")}</h3>
                        <p>{t("contact.items.meeting.text")}</p>
                        <button type="button">{t("contact.items.meeting.button")}</button>
                    </article>
                </div>
            </div>
        </section>
    );
}
