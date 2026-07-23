import type { WithT } from "../../../../shared/types/common";

export default function Notice({ t }: WithT) {
    return (
        <article className="politicas-notice">
            <span>
                <i className="bi bi-clipboard-check" />
            </span>
            <p>{t("notice.text")}</p>
        </article>
    );
}
