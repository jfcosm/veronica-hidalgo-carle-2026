import { ArrowRight, Leaf, Heart, BookOpen, MapPin, Mail, Phone } from 'lucide-react';
import NavControls from '../components/NavControls';
import { useLanguage } from '../context/LanguageContext';
import './Option1.css';

const Option1 = () => {
  const { t } = useLanguage();

  return (
    <div className="opt1-container">
      {/* Header */}
      <header className="opt1-header animate-fade-in">
        <div className="opt1-logo">
          <h1>Verónica Hidalgo Carle</h1>
          <p>{t('header.subtitle')}</p>
        </div>
        <nav className="opt1-nav">
          <a href="#about">{t('header.nav.approach')}</a>
          <a href="#services">{t('header.nav.therapies')}</a>
          <a href="#courses">{t('header.nav.training')}</a>
          <a href="#contact" className="btn-primary">{t('header.nav.book')}</a>
          <NavControls />
        </nav>
      </header>

      {/* Hero Section */}
      <section className="opt1-hero container">
        <div className="opt1-hero-content animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="opt1-subtitle">{t('hero.tag')}</span>
          <h2 className="opt1-hero-title">
            {t('hero.titleOpt1')} <em>Sistema Neurofloral®️</em>
          </h2>
          <p className="opt1-hero-text">{t('hero.textOpt1')}</p>
          <div className="opt1-hero-actions">
            <a href="#contact" className="btn-primary">
              {t('hero.btnStart')} <ArrowRight size={18} />
            </a>
            <a href="#about" className="btn-secondary">
              {t('hero.btnLearnMore')}
            </a>
          </div>
        </div>
        <div className="opt1-hero-image animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="opt1-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1490750967868-88cb44cb2753?q=80&w=2070&auto=format&fit=crop" 
              alt="Flores delicadas sobre fondo blanco" 
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="opt1-about section-padding">
        <div className="container">
          <div className="opt1-about-grid">
            <div className="opt1-about-image">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop" 
                alt="Mujer en entorno tranquilo" 
              />
            </div>
            <div className="opt1-about-content">
              <span className="opt1-subtitle">{t('about.tag')}</span>
              <h3 className="opt1-section-title">{t('about.titleOpt1')}</h3>
              <p>{t('about.text1Opt1')}</p>
              <p>{t('about.text2Opt1')}</p>
              <ul className="opt1-features">
                <li><Heart size={20} /> {t('about.feat1')}</li>
                <li><Leaf size={20} /> {t('about.feat2')}</li>
                <li><BookOpen size={20} /> {t('about.feat3')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="opt1-services section-padding">
        <div className="container">
          <div className="opt1-section-header">
            <span className="opt1-subtitle">{t('services.tag')}</span>
            <h3 className="opt1-section-title">{t('services.titleOpt1')}</h3>
          </div>
          
          <div className="opt1-services-grid">
            <div className="opt1-service-card">
              <div className="opt1-icon-wrapper">
                <Heart size={24} />
              </div>
              <h4>{t('services.srv1Title')}</h4>
              <p>{t('services.srv1Text')}</p>
            </div>
            
            <div className="opt1-service-card">
              <div className="opt1-icon-wrapper">
                <BookOpen size={24} />
              </div>
              <h4>{t('services.srv2Title')}</h4>
              <p>{t('services.srv2Text')}</p>
            </div>
            
            <div className="opt1-service-card">
              <div className="opt1-icon-wrapper">
                <Leaf size={24} />
              </div>
              <h4>{t('services.srv3Title')}</h4>
              <p>{t('services.srv3Text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="opt1-contact section-padding">
        <div className="container">
          <div className="opt1-contact-wrapper">
            <div className="opt1-contact-content">
              <h3 className="opt1-section-title">{t('contact.titleOpt1')}</h3>
              <p>{t('contact.textOpt1')}</p>
              
              <div className="opt1-contact-info">
                <div className="opt1-info-item">
                  <Mail size={20} />
                  <span>{t('contact.email')}</span>
                </div>
                <div className="opt1-info-item">
                  <Phone size={20} />
                  <span>{t('contact.phone')}</span>
                </div>
                <div className="opt1-info-item">
                  <MapPin size={20} />
                  <span>{t('contact.location')} ({t('contact.locationDesc')})</span>
                </div>
              </div>
            </div>
            <div className="opt1-contact-form">
              <form>
                <div className="opt1-form-group">
                  <input type="text" placeholder={t('contact.placeholderName')} required />
                </div>
                <div className="opt1-form-group">
                  <input type="email" placeholder={t('contact.placeholderEmail')} required />
                </div>
                <div className="opt1-form-group">
                  <select>
                    <option value="">{t('contact.placeholderSubject')}</option>
                    <option value="terapia">{t('contact.optTherapy')}</option>
                    <option value="curso">{t('contact.optCourse')}</option>
                    <option value="productos">{t('contact.optProducts')}</option>
                  </select>
                </div>
                <div className="opt1-form-group">
                  <textarea placeholder={t('contact.placeholderMessage')} rows={4} required></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  {t('contact.btnSubmit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="opt1-footer">
        <div className="container">
          <div className="opt1-footer-content">
            <div className="opt1-logo">
              <h4>{t('footer.brand')}</h4>
              <p>{t('footer.system')}</p>
            </div>
            <div className="opt1-footer-links">
              <a href="https://www.instagram.com/veronica_hidalgo_carle/" target="_blank" rel="noopener noreferrer">{t('footer.links.instagram')}</a>
              <a href="#">{t('footer.links.linkedin')}</a>
              <a href="#">{t('footer.links.terms')}</a>
            </div>
          </div>
          <div className="opt1-footer-bottom">
            <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
            <p style={{ marginTop: '0.5rem' }}>
              {t('footer.madeWith')} <a href="https://www.melodialab.net" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-terracota)', textDecoration: 'none', fontWeight: 500 }}>MelodIA Lab</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Option1;
