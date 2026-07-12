import type { WithT } from '../../types/common';

export default function Main({ t }:WithT) {
    const featuresData = [
        { id: 'lessons', icon: 'bi-journal-richtext', color: 'green'},
        { id: 'missions', icon: 'bi-bullseye', color: 'yellow'},
        { id: 'games', icon: 'bi-controller', color: 'purple'},
        { id: 'savings', icon: 'bi-piggy-bank', color: 'pink'},
        { id: 'reports', icon: 'bi-bar-chart-line', color: 'blue'},
        { id: 'family', icon: 'bi-people-fill', color: 'green'},
        { id: 'resources', icon: 'bi-folder2-open', color: 'orange'},
        { id: 'security', icon: 'bi-shield-lock', color: 'blue'},
        { id: 'certifications', icon: 'bi-award', color: 'green'},
        { id: 'badges', icon: 'bi-trophy', color: 'orange'},
        { id: 'teacher_panel', icon: 'bi-people-fill', color: 'blue'},
        { id: 'communication', icon: 'bi-chat-dots', color: 'green'}
    ];

    return (
        <section className="main-features-section">
            <div className="container-xl">

                <div className="section-heading">
                    <h2>{t('features.main.heading_title')}</h2>
                    <p>
                        {t('features.main.heading_subtitle')}
                    </p>
                </div>

                <div className="main-features-grid">
                    {featuresData.map((feature) => (
                        <article className="feature-card" key={feature.id}>
                            <div className={`feature-icon ${feature.color}`}>
                                <i className={`bi ${feature.icon}`}></i>
                            </div>
                            <div>
                                <h3>{t(`features.main.cards.${feature.id}.title`)}</h3>
                                <p>{t(`features.main.cards.${feature.id}.desc`)}</p>
                                <a href="#">{t('features.main.learn_more')}</a>
                            </div>
                            <div className="feature-image">
                                <img src={`/assets/img/features/${feature.id}.webp`} alt={t(`features.main.cards.${feature.id}.title`)} />
                            </div>
                        </article>
                    ))}
                </div>

                <div className="show-more-box">
                    <h3>{t('features.main.more_box.title')}</h3>
                    <p>
                        {t('features.main.more_box.desc')}
                    </p>

                    <button className="btn-show-more" type="button">
                        {t('features.main.more_box.button')} <i className="bi bi-arrow-down"></i>
                    </button>
                </div>

            </div>
        </section>
    );
}