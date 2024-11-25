import React from 'react';
import { useTranslation } from 'react-i18next'; // For multilingual support
import '../styles/Home.css'; // Import the CSS file

const Home = () => {
  const { t } = useTranslation(); // For translations

  return (
    <div className="home-container">
      {/* Background Overlay */}
      <div className="background-overlay"></div>

      {/* Main Content Section */}
      <main className="main-content">
        {/* About Us Section */}
        <section className="section-card">
          <div className="section-card-content">
            <h2>{t('home.about_title')}</h2>
            <p>{t('home.about_description')}</p>
          </div>
        </section>

        {/* Goals Section */}
        <section className="section-card">
          <div className="section-card-content">
            <h3>{t('home.goals_title')}</h3>
            <div className="goal-cards">
              <div className="goal-card">
                <h4>{t('home.goal_1_title')}</h4>
                <p>{t('home.goal_1_description')}</p>
              </div>
              <div className="goal-card">
                <h4>{t('home.goal_2_title')}</h4>
                <p>{t('home.goal_2_description')}</p>
              </div>
              <div className="goal-card">
                <h4>{t('home.goal_3_title')}</h4>
                <p>{t('home.goal_3_description')}</p>
              </div>
              <div className="goal-card">
                <h4>{t('home.goal_4_title')}</h4>
                <p>{t('home.goal_4_description')}</p>
              </div>
            </div>
          </div>
          <img src="/assets/bg2.jpg" alt="Goals Image" className="section-image" />
        </section>

        {/* Future Activities Section */}
        <section className="section-card">
          <div className="section-card-content">
            <h3>{t('home.future_activities_title')}</h3>
            <div className="activity-cards">
              <div className="activity-card">
                <h4>{t('home.future_activity_1_title')}</h4>
                <p>{t('home.future_activity_1_description')}</p>
              </div>
              <div className="activity-card">
                <h4>{t('home.future_activity_2_title')}</h4>
                <p>{t('home.future_activity_2_description')}</p>
              </div>
              <div className="activity-card">
                <h4>{t('home.future_activity_3_title')}</h4>
                <p>{t('home.future_activity_3_description')}</p>
              </div>
              <div className="activity-card">
                <h4>{t('home.future_activity_4_title')}</h4>
                <p>{t('home.future_activity_4_description')}</p>
              </div>
            </div>
          </div>
          <img src="../assets/bg1.jpg" alt="Future Activities" className="section-image" />
        </section>

        {/* Cultural Events Section */}
        <section className="section-card">
          <div className="section-card-content">
            <h3>{t('home.cultural_events_title')}</h3>
            <div className="event-cards">
              <div className="event-card">
                <img src="/assets/event1-placeholder.jpg" alt="Cultural Event 1" className="event-image" />
                <p>{t('home.event_1_description')}</p>
              </div>
              <div className="event-card">
                <img src="/assets/event2-placeholder.jpg" alt="Cultural Event 2" className="event-image" />
                <p>{t('home.event_2_description')}</p>
              </div>
              <div className="event-card">
                <img src="/assets/event3-placeholder.jpg" alt="Cultural Event 3" className="event-image" />
                <p>{t('home.event_3_description')}</p>
              </div>
            </div>
          </div>
          <img src="/assets/cultural-events-image.jpg" alt="Cultural Events" className="section-image" />
        </section>
      </main>
    </div>
  );
};

export default Home;
