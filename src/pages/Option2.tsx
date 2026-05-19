import { ArrowRight, Leaf, Heart, BookOpen, Mail, Phone } from 'lucide-react';
import NavControls from '../components/NavControls';
import { useLanguage } from '../context/LanguageContext';
import heroImg from '../assets/images/hero.jpg';
import './Option2.css';
const Option2 = () => {
  const { t } = useLanguage();

  return (
    <div className="opt2-container">
      {/* Header */}
      <header className="opt2-header animate-fade-in">
        <div className="container opt2-header-inner">
          <div className="opt2-logo">
            <h1>Verónica Hidalgo Carle</h1>
            <p>{t('header.subtitle')}</p>
          </div>
          <nav className="opt2-nav">
            <a href="#about">{t('header.nav.myVision')}</a>
            <a href="#services">{t('header.nav.accompaniment')}</a>
            <a href="#contact" className="btn-primary">{t('header.nav.contact')}</a>
            <NavControls />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="opt2-hero-split">
        <div className="opt2-hero-split-left animate-fade-in">
          <div className="opt2-hero-split-content">
            <span className="opt2-hero-top-text">{t('hero.tagOpt2')}</span>
            <h2 className="opt2-hero-main-title">
              {t('hero.titleOpt2')}
            </h2>
            <p className="opt2-hero-main-text" dangerouslySetInnerHTML={{ __html: t('hero.textOpt2') }}>
            </p>
            <a href="#contact" className="btn-gold">
              {t('hero.btnBook')}
            </a>
          </div>
        </div>
        
        <div className="opt2-hero-split-right animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <img src={heroImg} alt="Verónica Hidalgo Carle" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="opt2-about section-padding">
        <div className="container">
          <div className="opt2-about-wrapper">
            <div className="opt2-about-content">
              <span className="opt2-subtitle">{t('about.tagOpt2')}</span>
              <h3 className="opt2-section-title">{t('about.titleOpt2')}</h3>
              <p dangerouslySetInnerHTML={{ __html: t('about.text1Opt2') }}></p>
              <p>{t('about.text2Opt2')}</p>
              <div className="opt2-signature">
                <p className="opt2-name">Verónica Hidalgo Carle</p>
                <p className="opt2-role">{t('about.role')}</p>
              </div>
            </div>
            <div className="opt2-about-image">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop" 
                alt="Verónica Hidalgo Carle" 
              />
              <div className="opt2-experience-badge">
                <span className="opt2-number">20+</span>
                <span className="opt2-text">{t('about.badgeYears')}<br/>{t('about.badgeExp')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="opt2-services section-padding">
        <div className="container">
          <div className="opt2-section-header">
            <h3 className="opt2-section-title">{t('services.titleOpt2')}</h3>
            <p>{t('services.subtitleOpt2')}</p>
          </div>
          
          <div className="opt2-services-layout">
            <div className="opt2-service-item">
              <div className="opt2-service-content">
                <Heart className="opt2-service-icon" />
                <h4>{t('services.srv1TitleAlt')}</h4>
                <p>{t('services.srv1TextAlt')}</p>
                <a href="#contact" className="opt2-link">{t('services.linkInfo')} <ArrowRight size={16} /></a>
              </div>
            </div>
            
            <div className="opt2-service-item">
              <div className="opt2-service-content">
                <BookOpen className="opt2-service-icon" />
                <h4>{t('services.srv2Title')}</h4>
                <p>{t('services.srv2TextAlt')}</p>
                <a href="#contact" className="opt2-link">{t('services.linkCourses')} <ArrowRight size={16} /></a>
              </div>
            </div>
            
            <div className="opt2-service-item">
              <div className="opt2-service-content">
                <Leaf className="opt2-service-icon" />
                <h4>{t('services.srv3Title')}</h4>
                <p>{t('services.srv3TextAlt')}</p>
                <a href="#contact" className="opt2-link">{t('services.linkCatalog')} <ArrowRight size={16} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="opt2-contact section-padding">
        <div className="container">
          <div className="opt2-contact-box">
            <h3 className="opt2-section-title text-center">{t('contact.titleOpt2')}</h3>
            <p className="text-center opt2-contact-desc">
              {t('contact.textOpt2')}
            </p>
            
            <form className="opt2-form">
              <div className="opt2-form-row">
                <input type="text" placeholder={t('contact.placeholderName')} required />
                <input type="email" placeholder={t('contact.placeholderEmail')} required />
              </div>
              <div className="opt2-form-row">
                <select required>
                  <option value="" disabled selected>{t('contact.placeholderSubjectAlt')}</option>
                  <option value="terapia">{t('contact.optTherapyAlt')}</option>
                  <option value="curso">{t('contact.optCourseAlt')}</option>
                  <option value="productos">{t('contact.optProductsAlt')}</option>
                </select>
              </div>
              <textarea placeholder={t('contact.placeholderMessageAlt')} rows={5} required></textarea>
              <button type="submit" className="btn-primary opt2-submit">
                {t('contact.btnSubmit')}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="opt2-footer">
        <div className="container">
          <div className="opt2-footer-inner">
            <div className="opt2-footer-info">
              <h4>{t('footer.brand')}</h4>
              <p>{t('header.subtitle')}</p>
              <div className="opt2-socials">
                <a href="https://www.instagram.com/veronica_hidalgo_carle/" target="_blank" rel="noopener noreferrer">{t('footer.links.instagram')}</a>
                <span>&bull;</span>
                <a href="#">{t('footer.links.linkedin')}</a>
              </div>
            </div>
            <div className="opt2-footer-contact">
              <p><Mail size={16} /> {t('contact.email')}</p>
              <p><Phone size={16} /> {t('contact.phone')}</p>
            </div>
          </div>
          <div className="opt2-footer-bottom" style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.05)', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
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

export default Option2;
