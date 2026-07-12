import type { WithT  } from "../../types/common";

import CoinsIcon from "../../../shared/assets/images/icons/coins.webp";
import PigIcon from "../../../shared/assets/images/icons/pig.webp";
import GiftIcon from "../../../shared/assets/images/icons/gift.webp";
import StarIcon from "../../../shared/assets/images/icons/star.webp";

export default function HowItWorks({ t }:WithT ) {
    return (
        <section className="section-process">
            <div className="container-xl">
                <div className="process-card">
                    <h2>
                        {t("process.title.before")}{" "}
                        <span>{t("process.title.highlight")}</span>
                    </h2>

                    <div className="process-steps">
                        <article>
                            <div className="step-icon">
                                <img src={CoinsIcon} alt={t("process.steps.earn.alt")} />
                            </div>
                            <h3>
                                <span className="badge rounded-pill bg-success">1</span>{" "}
                                {t("process.steps.earn.title")}
                            </h3>
                            <p>{t("process.steps.earn.description")}</p>
                        </article>

                        <article>
                            <div className="step-icon">
                                <img src={PigIcon} alt={t("process.steps.save.alt")} />
                            </div>
                            <h3>
                                <span className="badge rounded-pill bg-success">2</span>{" "}
                                {t("process.steps.save.title")}
                            </h3>
                            <p>{t("process.steps.save.description")}</p>
                        </article>

                        <article>
                            <div className="step-icon">
                                <img src={GiftIcon} alt={t("process.steps.redeem.alt")} />
                            </div>
                            <h3>
                                <span className="badge rounded-pill bg-success">3</span>{" "}
                                {t("process.steps.redeem.title")}
                            </h3>
                            <p>{t("process.steps.redeem.description")}</p>
                        </article>

                        <article>
                            <div className="step-icon">
                                <img src={StarIcon} alt={t("process.steps.celebrate.alt")} />
                            </div>
                            <h3>
                                <span className="badge rounded-pill bg-success">4</span>{" "}
                                {t("process.steps.celebrate.title")}
                            </h3>
                            <p>{t("process.steps.celebrate.description")}</p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}