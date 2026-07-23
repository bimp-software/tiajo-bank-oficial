import type { WithT } from "../../../../shared/types/common"; 

export default function Team({ t }: WithT) {
    const members = ["juan", "carolina", "nicolas", "valentina", "felipe"] as const;

    return (
        <section className="nosotros-section nosotros-team">
            <div className="nosotros-container">
                <div className="nosotros-team__panel">
                    <div className="nosotros-heading">
                        <span>{t("team.eyebrow")}</span>
                        <h2>{t("team.title")}</h2>
                        <p>{t("team.description")}</p>
                    </div>

                    <div className="nosotros-team__grid">
                        {members.map((member) => (
                            <article key={member}>
                                <img
                                    src={`/assets/img/sobre-nosotros/${member}.webp`}
                                    alt={t(`team.members.${member}.name`)}
                                />

                                <h3>{t(`team.members.${member}.name`)}</h3>
                                <strong>{t(`team.members.${member}.role`)}</strong>
                                <p>{t(`team.members.${member}.text`)}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
