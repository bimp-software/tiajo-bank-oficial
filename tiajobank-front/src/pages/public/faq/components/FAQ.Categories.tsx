import type { WithT } from "../../../../shared/types/common";

export default function Categories({ t }: WithT) {
    return (
        <section className="faq-categories">
            <div className="faq-container">
                <div className="faq-categories__panel">
                    {[
                        ["teachers", "bi-mortarboard-fill", "green"],
                        ["students", "bi-people-fill", "purple"],
                        ["families", "bi-people", "orange"],
                        ["administrators", "bi-gear-fill", "blue"]
                    ].map(([key, icon, tone]) => (
                        <article key={key}>
                            <span className={`faq-category-icon faq-category-icon--${tone}`}>
                                <i className={`bi ${icon}`} />
                            </span>
                            <div>
                                <h2>{t(`categories.${key}.title`)}</h2>
                                <p>{t(`categories.${key}.text`)}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
