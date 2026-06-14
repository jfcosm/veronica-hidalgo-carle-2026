import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Mail } from 'lucide-react';
import NavControls from '../components/NavControls';
import { useLanguage } from '../context/LanguageContext';
import vero1Img from '../assets/images/vero1.jpg';
import './Detail.css';

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();

  // Validate ID and retrieve respective translations
  let tag = '';
  let title = '';
  let contentHtml = '';
  let isAbout = false;

  if (id === 'sobre-mi') {
    isAbout = true;
    title = 'Verónica Hidalgo Carle';
    tag = t('detail.aboutTitle');
    contentHtml = t('hero.textOpt2Full');
  } else if (id === 'terapia-neurofloral') {
    tag = t('detail.title');
    title = t('services.srv1TitleAlt');
    contentHtml = t('services.srv1TextAlt');
  } else if (id === 'constelaciones-familiares') {
    tag = t('detail.title');
    title = t('services.srv2Title');
    contentHtml = t('services.srv2TextAlt');
  } else if (id === 'tarot-evolutivo') {
    tag = t('detail.title');
    title = t('services.srv3Title');
    contentHtml = t('services.srv3TextAlt');
  } else {
    // Redirect invalid IDs back to landing page
    return <Navigate to="/" replace />;
  }

  return (
    <div className="detail-container">
      {/* Header */}
      <header className="detail-header">
        <div className="container detail-header-inner">
          <Link to="/" className="detail-logo">
            <div className="logo-title">Verónica Hidalgo Carle</div>
            <p>{t('header.subtitle')}</p>
          </Link>
          <nav className="detail-nav">
            <Link to="/" className="btn-back">
              <ArrowLeft size={16} /> {t('detail.back')}
            </Link>
            <NavControls />
          </nav>
        </div>
      </header>

      {/* Main Detail Content */}
      <main className="detail-body container animate-fade-in">
        <article className="detail-content-card">
          {isAbout ? (
            <div className="detail-profile-hero">
              <img src={vero1Img} alt="Verónica Hidalgo Carle" className="detail-profile-avatar" />
              <div className="detail-profile-meta">
                <span className="detail-tag">{tag}</span>
                <h1>{title}</h1>
                <p>{t('header.subtitle')}</p>
              </div>
            </div>
          ) : (
            <>
              <span className="detail-tag">{tag}</span>
              <h1 className="detail-title">{title}</h1>
            </>
          )}

          <div 
            className="detail-text" 
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* Bottom CTA to contact */}
          <section className="detail-cta">
            <h3>{t('contact.titleOpt2')}</h3>
            <p>{t('contact.textOpt2')}</p>
            <Link to="/#contact" className="btn-gold">
              <Mail size={16} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
              {t('hero.btnBook')}
            </Link>
          </section>
        </article>
      </main>
    </div>
  );
};

export default Detail;
