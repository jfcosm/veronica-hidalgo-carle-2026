import { ArrowRight, Leaf, Heart, BookOpen, Mail, Phone, Sun } from 'lucide-react';
import './Option2.css';

const Option2 = () => {
  return (
    <div className="opt2-container">
      {/* Header */}
      <header className="opt2-header animate-fade-in">
        <div className="container opt2-header-inner">
          <div className="opt2-logo">
            <h1>Verónica Hidalgo Carle</h1>
            <p>Terapeuta & Neurocientífica</p>
          </div>
          <nav className="opt2-nav">
            <a href="#about">Mi Visión</a>
            <a href="#services">Acompañamiento</a>
            <a href="#contact" className="btn-primary">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="opt2-hero section-padding">
        <div className="container">
          <div className="opt2-hero-content animate-fade-in">
            <div className="opt2-hero-badge">
              <Sun size={16} />
              <span>Sistema Neurofloral®️</span>
            </div>
            <h2 className="opt2-hero-title">
              Sanación profunda desde la <span>conexión humana</span> y la neurociencia
            </h2>
            <p className="opt2-hero-text">
              Te acompaño a modular tus emociones y crear nuevas rutas de bienestar a través de la terapia floral integrativa y el trabajo sistémico.
            </p>
            <div className="opt2-hero-actions">
              <a href="#contact" className="btn-primary">
                Agendar Sesión
              </a>
              <a href="#about" className="btn-secondary">
                Conocer mi enfoque <ArrowRight size={18} />
              </a>
            </div>
          </div>
          
          <div className="opt2-hero-images animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="opt2-img-1">
              <img 
                src="https://images.unsplash.com/photo-1596431940984-7a0dd7ee16d1?q=80&w=2070&auto=format&fit=crop" 
                alt="Ambiente cálido terapéutico" 
              />
            </div>
            <div className="opt2-img-2">
              <img 
                src="https://images.unsplash.com/photo-1490750967868-88cb44cb2753?q=80&w=2070&auto=format&fit=crop" 
                alt="Esencias florales" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="opt2-about section-padding">
        <div className="container">
          <div className="opt2-about-wrapper">
            <div className="opt2-about-content">
              <span className="opt2-subtitle">Más de 20 años de trayectoria</span>
              <h3 className="opt2-section-title">Acompañando procesos de transformación</h3>
              <p>
                A lo largo de mi carrera, he integrado mis conocimientos en trauma, TEA, déficit atencional 
                y regulación emocional para crear un enfoque único: el <strong>Sistema Neurofloral®️</strong>.
              </p>
              <p>
                Mi compromiso es brindar un espacio seguro y cálido donde las esencias florales actúan 
                como puente para la modulación emocional, favoreciendo cambios profundos en la percepción 
                y la conducta.
              </p>
              <div className="opt2-signature">
                <p className="opt2-name">Verónica Hidalgo Carle</p>
                <p className="opt2-role">Creadora del Sistema Neurofloral®️</p>
              </div>
            </div>
            <div className="opt2-about-image">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop" 
                alt="Verónica Hidalgo Carle" 
              />
              <div className="opt2-experience-badge">
                <span className="opt2-number">20+</span>
                <span className="opt2-text">Años de<br/>Experiencia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="opt2-services section-padding">
        <div className="container">
          <div className="opt2-section-header">
            <h3 className="opt2-section-title">¿Cómo puedo acompañarte?</h3>
            <p>Descubre las diferentes formas en las que podemos trabajar juntos hacia tu bienestar integral.</p>
          </div>
          
          <div className="opt2-services-layout">
            <div className="opt2-service-item">
              <div className="opt2-service-content">
                <Heart className="opt2-service-icon" />
                <h4>Terapia Individual</h4>
                <p>Procesos emocionales para niños, adolescentes y adultos, integrando el conocimiento del neurodesarrollo y la terapia floral.</p>
                <a href="#contact" className="opt2-link">Solicitar información <ArrowRight size={16} /></a>
              </div>
            </div>
            
            <div className="opt2-service-item">
              <div className="opt2-service-content">
                <BookOpen className="opt2-service-icon" />
                <h4>Cursos y Formaciones</h4>
                <p>Charlas, talleres y formación terapéutica para profesionales y personas interesadas en profundizar en la regulación emocional.</p>
                <a href="#contact" className="opt2-link">Ver próximos cursos <ArrowRight size={16} /></a>
              </div>
            </div>
            
            <div className="opt2-service-item">
              <div className="opt2-service-content">
                <Leaf className="opt2-service-icon" />
                <h4>Esencias Florales</h4>
                <p>Productos basados en el Sistema Neurofloral®️, formulados específicamente para modular estados emocionales y apoyar tu proceso.</p>
                <a href="#contact" className="opt2-link">Ver catálogo <ArrowRight size={16} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="opt2-contact section-padding">
        <div className="container">
          <div className="opt2-contact-box">
            <h3 className="opt2-section-title text-center">Conectemos</h3>
            <p className="text-center opt2-contact-desc">
              Si sientes que este es el espacio que buscas, me encantará acompañarte. 
              Escríbeme para agendar una sesión o consultar sobre las formaciones.
            </p>
            
            <form className="opt2-form">
              <div className="opt2-form-row">
                <input type="text" placeholder="Tu nombre" required />
                <input type="email" placeholder="Tu correo" required />
              </div>
              <div className="opt2-form-row">
                <select required>
                  <option value="" disabled selected>Motivo de contacto</option>
                  <option value="terapia">Consultar por Terapia</option>
                  <option value="curso">Inscripción a Cursos</option>
                  <option value="productos">Adquirir Esencias</option>
                </select>
              </div>
              <textarea placeholder="Cuéntame un poco sobre lo que buscas..." rows={5} required></textarea>
              <button type="submit" className="btn-primary opt2-submit">
                Enviar Mensaje
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
              <h4>Verónica Hidalgo Carle</h4>
              <p>Terapeuta Floral & Neurocientífica</p>
              <div className="opt2-socials">
                <a href="#">Instagram</a>
                <span>&bull;</span>
                <a href="#">LinkedIn</a>
              </div>
            </div>
            <div className="opt2-footer-contact">
              <p><Mail size={16} /> contacto@veronicahidalgo.cl</p>
              <p><Phone size={16} /> +56 9 1234 5678</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Option2;
