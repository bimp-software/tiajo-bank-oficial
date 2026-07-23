import type { WithT } from "../../../../shared/types/common"; 

export default function Form({ t }: WithT) {
    return (
        <div className="contacto-form-column">
            <article className="contacto-form-card">
                <div className="contacto-card-heading">
                    <span className="contacto-card-heading__icon">
                        <i className="bi bi-envelope" />
                    </span>
                    <div>
                        <h2>{t("form.title")}</h2>
                        <p>{t("form.description")}</p>
                    </div>
                </div>

                <form className="contacto-form">
                    <div className="contacto-form__grid">
                        <label>
                            <span>{t("form.fields.name")}</span>
                            <div>
                                <i className="bi bi-person" />
                                <input type="text" placeholder={t("form.placeholders.name")} />
                            </div>
                        </label>

                        <label>
                            <span>{t("form.fields.email")}</span>
                            <div>
                                <i className="bi bi-envelope" />
                                <input type="email" placeholder={t("form.placeholders.email")} />
                            </div>
                        </label>

                        <label>
                            <span>{t("form.fields.subject")}</span>
                            <div>
                                <i className="bi bi-tag" />
                                <input type="text" placeholder={t("form.placeholders.subject")} />
                            </div>
                        </label>

                        <label>
                            <span>{t("form.fields.recipient")}</span>
                            <div>
                                <i className="bi bi-diagram-3" />
                                <select defaultValue="">
                                    <option value="" disabled>{t("form.placeholders.recipient")}</option>
                                    <option value="support">{t("form.recipients.support")}</option>
                                    <option value="sales">{t("form.recipients.sales")}</option>
                                    <option value="education">{t("form.recipients.education")}</option>
                                    <option value="alliances">{t("form.recipients.alliances")}</option>
                                </select>
                            </div>
                        </label>
                    </div>

                    <label className="contacto-form__message">
                        <span>{t("form.fields.message")}</span>
                        <div>
                            <i className="bi bi-pencil" />
                            <textarea placeholder={t("form.placeholders.message")} rows={7} />
                        </div>
                    </label>

                    <label className="contacto-form__privacy">
                        <input type="checkbox" />
                        <span>
                            {t("form.privacy.before")}
                            <a href="#">{t("form.privacy.link")}</a>
                            {t("form.privacy.after")}
                        </span>
                    </label>

                    <button type="submit">
                        <i className="bi bi-send" />
                        {t("form.button")}
                    </button>
                </form>
            </article>

            <article className="contacto-methods-card">
                <h2>{t("methods.title")}</h2>

                <div className="contacto-methods-list">
                    <article>
                        <span className="contacto-method-icon contacto-method-icon--green">
                            <i className="bi bi-envelope-fill" />
                        </span>
                        <div>
                            <h3>{t("methods.items.email.title")}</h3>
                            <strong>{t("methods.items.email.value")}</strong>
                            <p>{t("methods.items.email.text")}</p>
                        </div>
                    </article>

                    <article>
                        <span className="contacto-method-icon contacto-method-icon--yellow">
                            <i className="bi bi-telephone-fill" />
                        </span>
                        <div>
                            <h3>{t("methods.items.phone.title")}</h3>
                            <strong>{t("methods.items.phone.value")}</strong>
                            <p>{t("methods.items.phone.text")}</p>
                        </div>
                    </article>

                    <article>
                        <span className="contacto-method-icon contacto-method-icon--purple">
                            <i className="bi bi-chat-dots-fill" />
                        </span>
                        <div>
                            <h3>{t("methods.items.chat.title")}</h3>
                            <strong>{t("methods.items.chat.value")}</strong>
                            <p>{t("methods.items.chat.text")}</p>
                        </div>
                    </article>

                    <article>
                        <span className="contacto-method-icon contacto-method-icon--blue">
                            <i className="bi bi-building-fill" />
                        </span>
                        <div>
                            <h3>{t("methods.items.address.title")}</h3>
                            <strong>{t("methods.items.address.value")}</strong>
                            <p>{t("methods.items.address.text")}</p>
                        </div>
                    </article>

                    <article>
                        <span className="contacto-method-icon contacto-method-icon--green">
                            <i className="bi bi-clock-fill" />
                        </span>
                        <div>
                            <h3>{t("methods.items.hours.title")}</h3>
                            <strong>{t("methods.items.hours.value")}</strong>
                            <p>{t("methods.items.hours.text")}</p>
                        </div>
                    </article>
                </div>
            </article>
        </div>
    );
}
