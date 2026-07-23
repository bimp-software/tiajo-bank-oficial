import type { WithT } from "../../../../shared/types/common";

export default function Testimonial({ t }: WithT) {
    return (
        <article className="trabajo-testimonial">
            <i className="bi bi-quote" />

            <p>{t("testimonial.quote")}</p>

            <div className="trabajo-testimonial__author">
                <img
                    src="/assets/img/trabaja-con-nosotros/carolina.webp"
                    alt={t("testimonial.name")}
                />

                <div>
                    <strong>{t("testimonial.name")}</strong>
                    <span>{t("testimonial.role")}</span>
                </div>

                <div className="trabajo-testimonial__stars" aria-label={t("testimonial.ratingLabel")}>
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                </div>
            </div>
        </article>
    );
}
