import { Link } from "react-router-dom";
import type { WithTAndLang } from "../../../../shared/types/common";

const policies = [
    ["privacidad", "bi-person-badge-fill", "green"],
    ["seguridad", "bi-lock-fill", "blue"],
    ["terminos", "bi-file-earmark-text-fill", "purple"],
    ["uso-aceptable", "bi-patch-check-fill", "yellow"],
    ["proteccion-de-menores", "bi-shield-fill-check", "pink"],
    ["cookies", "bi-cookie", "teal"],
    ["compras-y-reembolsos", "bi-cart-fill", "orange"],
    ["intelectual", "bi-c-circle-fill", "green"],
    ["comunicaciones", "bi-megaphone-fill", "blue"],
] as const;

export default function Cards({ t, lang }: WithTAndLang) {
    return (
        <section className="politicas-cards">
            <div className="politicas-heading politicas-heading--left">
                <h2>
                    {t("cards.title")}
                    <i className="bi bi-stars" />
                </h2>
                <p>{t("cards.description")}</p>
            </div>

            <div className="politicas-cards__grid">
                {policies.map(([key, icon, tone]) => (
                    <article className="politicas-card" key={key}>
                        <span className={`politicas-card__icon politicas-card__icon--${tone}`}>
                            <i className={`bi ${icon}`} />
                        </span>

                        <h3>{t(`cards.items.${key}.title`)}</h3>
                        <p>{t(`cards.items.${key}.text`)}</p>

                        <Link to={`/${lang}/politicas/${key}`}>
                            {t("cards.action")}
                            <i className="bi bi-arrow-right" />
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
}
