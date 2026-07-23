import type { WithT } from "../../../../shared/types/common"; 

export default function Purpose({ t }: WithT) {
    return (
        <section className="nosotros-purpose">
            <div className="nosotros-container">
                <div className="nosotros-purpose__panel">
                    <article>
                        <span className="nosotros-purpose__icon nosotros-purpose__icon--green">
                            <i className="bi bi-bullseye" />
                        </span>

                        <div>
                            <h2>{t("purpose.mission.title")}</h2>
                            <p>{t("purpose.mission.text")}</p>
                        </div>
                    </article>

                    <article>
                        <span className="nosotros-purpose__icon nosotros-purpose__icon--purple">
                            <i className="bi bi-flag-fill" />
                        </span>

                        <div>
                            <h2>{t("purpose.vision.title")}</h2>
                            <p>{t("purpose.vision.text")}</p>
                        </div>
                    </article>

                    <article>
                        <span className="nosotros-purpose__icon nosotros-purpose__icon--yellow">
                            <i className="bi bi-heart-fill" />
                        </span>

                        <div>
                            <h2>{t("purpose.values.title")}</h2>
                            <ul>
                                <li><i className="bi bi-check-circle-fill" />{t("purpose.values.items.empathy")}</li>
                                <li><i className="bi bi-check-circle-fill" />{t("purpose.values.items.innovation")}</li>
                                <li><i className="bi bi-check-circle-fill" />{t("purpose.values.items.commitment")}</li>
                                <li><i className="bi bi-check-circle-fill" />{t("purpose.values.items.transparency")}</li>
                                <li><i className="bi bi-check-circle-fill" />{t("purpose.values.items.fun")}</li>
                            </ul>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
