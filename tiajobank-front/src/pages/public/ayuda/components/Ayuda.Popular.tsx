import { Link } from "react-router-dom";
import type { WithTAndLang } from "../../../../shared/types/common";

export default function Popular({ t, lang }: WithTAndLang) {
    const articles = ["createAccount", "configureClass", "assignCoins", "viewReports", "recoverPassword", "contactSupport"] as const;

    return (
        <section className="ayuda-section ayuda-popular">
            <div className="ayuda-container">
                <div className="ayuda-heading ayuda-heading--left">
                    <div>
                        <span>{t("popular.eyebrow")}</span>
                        <h2>{t("popular.title")}</h2>
                    </div>

                    <p>{t("popular.description")}</p>
                </div>

                <div className="ayuda-popular__grid">
                    {articles.map((key, index) => (
                        <Link
                            to={`/${lang}/centro-de-ayuda/${key}`}
                            className="ayuda-article-card"
                            key={key}
                        >
                            <span>{String(index + 1).padStart(2, "0")}</span>

                            <div>
                                <h3>{t(`popular.items.${key}.title`)}</h3>
                                <p>{t(`popular.items.${key}.text`)}</p>

                                <small>
                                    <i className="bi bi-clock" />
                                    {t(`popular.items.${key}.time`)}
                                </small>
                            </div>

                            <i className="bi bi-chevron-right" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
