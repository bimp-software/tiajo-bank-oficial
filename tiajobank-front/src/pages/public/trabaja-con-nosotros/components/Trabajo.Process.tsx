import type { WithT } from "../../../../shared/types/common";

export default function Process({ t }: WithT) {
    return (
        <div className="trabajo-process">
            <div className="trabajo-section-title">
                <i className="bi bi-star-fill" />
                <h2>{t("process.title")}</h2>
            </div>

            <div className="trabajo-process__steps">
                <article>
                    <span>1</span>
                    <i className="bi bi-file-earmark-text" />
                    <div>
                        <h3>{t("process.steps.apply.title")}</h3>
                        <p>{t("process.steps.apply.text")}</p>
                    </div>
                </article>

                <article>
                    <span>2</span>
                    <i className="bi bi-people" />
                    <div>
                        <h3>{t("process.steps.interview.title")}</h3>
                        <p>{t("process.steps.interview.text")}</p>
                    </div>
                </article>

                <article>
                    <span>3</span>
                    <i className="bi bi-clipboard-check" />
                    <div>
                        <h3>{t("process.steps.challenge.title")}</h3>
                        <p>{t("process.steps.challenge.text")}</p>
                    </div>
                </article>

                <article>
                    <span>4</span>
                    <i className="bi bi-handshake" />
                    <div>
                        <h3>{t("process.steps.offer.title")}</h3>
                        <p>{t("process.steps.offer.text")}</p>
                    </div>
                </article>
            </div>
        </div>
    );
}
