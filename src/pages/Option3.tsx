import { ArrowRight, MapPin, Mail, Phone, CheckCircle, Brain } from 'lucide-react';
import NavControls from '../components/NavControls';
import { useLanguage } from '../context/LanguageContext';
import './Option3.css';

const Option3 = () => {
  const { t } = useLanguage();

  return (
    <div className="opt3-container">
      {/* Header */}
      <header className="opt3-header">
        <div className="container opt3-header-container">
          <div className="opt3-logo">
            <h1>{t('footer.brand').toUpperCase()}</h1>
            <span>{t('header.subtitle').toUpperCase()}</span>
          </div>
          <nav className="opt3-nav">
            <a href="#about">{t('header.nav.experience')}</a>
            <a href="#neurofloral">{t('header.nav.neurofloral')}</a>
            <a href="#services">{t('header.nav.services')}</a>
            <a href="#contact" className="opt3-btn-outline">{t('header.nav.book')}</a>
            <NavControls />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="opt3-hero container">
        <div className="opt3-hero-grid">
          <div className="opt3-hero-content animate-fade-in">
            <div className="opt3-hero-tag">{t('hero.tagOpt3')}</div>
            <h2 className="opt3-hero-title">
              {t('hero.titleOpt3').split('neurociencia')[0]}
              <span>neurociencia</span>
              {t('hero.titleOpt3').split('neurociencia')[1]}
            </h2>
            <p className="opt3-hero-text">
              {t('hero.textOpt3')}
            </p>
            <div className="opt3-hero-actions">
              <a href="#contact" className="opt3-btn-solid">
                {t('hero.btnStartProcess')} <ArrowRight size={18} />
              </a>
              <a href="#neurofloral" className="opt3-link-action">
                {t('hero.btnKnowSystem')} <ArrowRight size={18} />
              </a>
            </div>
            
            <div className="opt3-hero-stats">
              <div className="opt3-stat">
                <h4>20+</h4>
                <p>{t('hero.statYears')}</p>
              </div>
              <div className="opt3-stat-divider"></div>
              <div className="opt3-stat">
                <h4>Neurofloral®️</h4>
                <p>{t('hero.statNeuro')}</p>
              </div>
            </div>
          </div>
          
          <div className="opt3-hero-visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="opt3-image-frame">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop" 
                alt="Verónica Hidalgo Profesional" 
              />
              <div className="opt3-decorative-box"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Neurofloral Section */}
      <section id="neurofloral" className="opt3-neurofloral section-padding">
        <div className="container">
          <div className="opt3-neuro-header text-center">
            <Brain size={40} className="opt3-icon-primary mx-auto" />
            <h3 className="opt3-section-title">{t('neurofloral.title')}</h3>
            <p className="opt3-section-subtitle">{t('neurofloral.subtitle')}</p>
          </div>
          
          <div className="opt3-neuro-grid">
            <div className="opt3-neuro-card">
              <div className="opt3-card-number">01</div>
              <h4>{t('neurofloral.card1Title')}</h4>
              <p>{t('neurofloral.card1Text')}</p>
            </div>
            
            <div className="opt3-neuro-card">
              <div className="opt3-card-number">02</div>
              <h4>{t('neurofloral.card2Title')}</h4>
              <p>{t('neurofloral.card2Text')}</p>
            </div>
            
            <div className="opt3-neuro-card">
              <div className="opt3-card-number">03</div>
              <h4>{t('neurofloral.card3Title')}</h4>
              <p>{t('neurofloral.card3Text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="opt3-services">
        <div className="container">
          <div className="opt3-services-wrapper">
            <div className="opt3-services-info">
              <h3 className="opt3-section-title-light">{t('services.titleOpt3')}</h3>
              <p>{t('services.subtitleOpt3')}</p>
              
              <ul className="opt3-service-list">
                <li>
                  <CheckCircle size={20} className="opt3-check" />
                  <div>
                    <h5>{t('services.srv1TitleAlt')}</h5>
                    <span>{t('services.srv1Target')}</span>
                  </div>
                </li>
                <li>
                  <CheckCircle size={20} className="opt3-check" />
                  <div>
                    <h5>{t('services.srv2TitleAlt')}</h5>
                    <span>{t('services.srv2Target')}</span>
                  </div>
                </li>
                <li>
                  <CheckCircle size={20} className="opt3-check" />
                  <div>
                    <h5>{t('services.srv3TitleAlt')}</h5>
                    <span>{t('services.srv3Target')}</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="opt3-services-image">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop" 
                alt="Sesión terapéutica" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="opt3-contact section-padding">
        <div className="container">
          <div className="opt3-contact-grid">
            <div className="opt3-contact-details">
              <h3 className="opt3-section-title">{t('contact.titleOpt3')}</h3>
              <p className="opt3-contact-text">
                {t('contact.textOpt3')}
              </p>
              
              <div className="opt3-contact-info">
                <div className="opt3-info-row">
                  <div className="opt3-icon-box"><MapPin size={20} /></div>
                  <div>
                    <h6>{t('contact.lblLocation')}</h6>
                    <p>{t('contact.location')} / {t('contact.locationDescAlt')}</p>
                  </div>
                </div>
                
                <div className="opt3-info-row">
                  <div className="opt3-icon-box"><Mail size={20} /></div>
                  <div>
                    <h6>{t('contact.lblEmail')}</h6>
                    <p>{t('contact.email')}</p>
                  </div>
                </div>
                
                <div className="opt3-info-row">
                  <div className="opt3-icon-box"><Phone size={20} /></div>
                  <div>
                    <h6>{t('contact.lblPhone')}</h6>
                    <p>{t('contact.phone')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="opt3-form-container">
              <form className="opt3-form">
                <div className="opt3-form-group">
                  <label>{t('contact.placeholderName')}</label>
                  <input type="text" required />
                </div>
                <div className="opt3-form-group">
                  <label>{t('contact.placeholderEmail')}</label>
                  <input type="email" required />
                </div>
                <div className="opt3-form-group">
                  <label>{t('contact.placeholderSubjectAlt')}</label>
                  <select required>
                    <option value="">Selecciona una opción...</option>
                    <option value="terapia">{t('contact.optTherapyAlt')}</option>
                    <option value="formacion">{t('contact.optCourseAlt')}</option>
                    <option value="productos">{t('contact.optProductsAlt')}</option>
                  </select>
                </div>
                <div className="opt3-form-group">
                  <label>{t('contact.placeholderMessage')}</label>
                  <textarea rows={4} required></textarea>
                </div>
                <button type="submit" className="opt3-btn-solid w-100">
                  {t('contact.btnSubmitAlt')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="opt3-footer">
        <div className="container opt3-footer-grid">
          <div className="opt3-footer-brand">
            <h4>{t('footer.brand').toUpperCase()}</h4>
            <p>{t('footer.system')}</p>
          </div>
          <div className="opt3-footer-links">
            <a href="#">{t('footer.links.home')}</a>
            <a href="#about">{t('footer.links.experience')}</a>
            <a href="#services">{t('footer.links.services')}</a>
            <a href="#contact">{t('footer.links.contact')}</a>
          </div>
          <div className="opt3-footer-social">
            <a href="#">{t('footer.links.linkedin')}</a>
            <a href="https://www.instagram.com/veronica_hidalgo_carle/" target="_blank" rel="noopener noreferrer">{t('footer.links.instagram')}</a>
          </div>
        </div>
        <div className="opt3-footer-copyright">
          <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
          <p style={{ marginTop: '0.5rem' }}>
            {t('footer.madeWith')} <a href="https://www.melodialab.net" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-terracota)', textDecoration: 'none', fontWeight: 500 }}>MelodIA Lab</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Option3;
