import { ArrowRight, MapPin, Mail, Phone, CheckCircle, Brain } from 'lucide-react';
import './Option3.css';

const Option3 = () => {
  return (
    <div className="opt3-container">
      {/* Header */}
      <header className="opt3-header">
        <div className="container opt3-header-container">
          <div className="opt3-logo">
            <h1>VERÓNICA HIDALGO CARLE</h1>
            <span>TERAPEUTA & NEUROCIENTÍFICA</span>
          </div>
          <nav className="opt3-nav">
            <a href="#about">Experiencia</a>
            <a href="#neurofloral">Sistema Neurofloral®️</a>
            <a href="#services">Servicios</a>
            <a href="#contact" className="opt3-btn-outline">Agendar Sesión</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="opt3-hero container">
        <div className="opt3-hero-grid">
          <div className="opt3-hero-content animate-fade-in">
            <div className="opt3-hero-tag">Acompañamiento Terapéutico Profesional</div>
            <h2 className="opt3-hero-title">
              Integrando <span>neurociencia</span> y terapia floral para tu bienestar
            </h2>
            <p className="opt3-hero-text">
              Más de dos décadas acompañando procesos emocionales, apoyando la generación de nuevas rutas neuronales y el bienestar integral.
            </p>
            <div className="opt3-hero-actions">
              <a href="#contact" className="opt3-btn-solid">
                Iniciar Proceso <ArrowRight size={18} />
              </a>
              <a href="#neurofloral" className="opt3-link-action">
                Conocer el Sistema <ArrowRight size={18} />
              </a>
            </div>
            
            <div className="opt3-hero-stats">
              <div className="opt3-stat">
                <h4>20+</h4>
                <p>Años de experiencia clínica</p>
              </div>
              <div className="opt3-stat-divider"></div>
              <div className="opt3-stat">
                <h4>Neurofloral®️</h4>
                <p>Enfoque propio e innovador</p>
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
            <h3 className="opt3-section-title">El Sistema Neurofloral®️</h3>
            <p className="opt3-section-subtitle">Una mirada seria, humana y profesional al bienestar emocional.</p>
          </div>
          
          <div className="opt3-neuro-grid">
            <div className="opt3-neuro-card">
              <div className="opt3-card-number">01</div>
              <h4>Regulación Emocional</h4>
              <p>Abordaje integral para manejar el estrés, la ansiedad y procesos de trauma mediante herramientas comprobadas.</p>
            </div>
            
            <div className="opt3-neuro-card">
              <div className="opt3-card-number">02</div>
              <h4>Neuroplasticidad</h4>
              <p>Uso de esencias florales como moduladores para apoyar la creación de nuevas rutas neuronales y patrones de conducta.</p>
            </div>
            
            <div className="opt3-neuro-card">
              <div className="opt3-card-number">03</div>
              <h4>Trabajo Sistémico</h4>
              <p>Comprensión del individuo dentro de su entorno familiar y social, vital en casos de TEA y déficit atencional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="opt3-services">
        <div className="container">
          <div className="opt3-services-wrapper">
            <div className="opt3-services-info">
              <h3 className="opt3-section-title-light">Servicios y Acompañamiento</h3>
              <p>Diseñados para adaptarse a tus necesidades específicas de desarrollo y sanación.</p>
              
              <ul className="opt3-service-list">
                <li>
                  <CheckCircle size={20} className="opt3-check" />
                  <div>
                    <h5>Terapia Individual</h5>
                    <span>Para niños, adolescentes y adultos</span>
                  </div>
                </li>
                <li>
                  <CheckCircle size={20} className="opt3-check" />
                  <div>
                    <h5>Formación Profesional</h5>
                    <span>Cursos y talleres del Sistema Neurofloral®️</span>
                  </div>
                </li>
                <li>
                  <CheckCircle size={20} className="opt3-check" />
                  <div>
                    <h5>Venta de Esencias</h5>
                    <span>Fórmulas personalizadas y de línea</span>
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
              <h3 className="opt3-section-title">Agenda tu sesión</h3>
              <p className="opt3-contact-text">
                Da el primer paso hacia una transformación consciente. Estaré encantada de conocer tu caso 
                y explicarte cómo el Sistema Neurofloral®️ puede ayudarte.
              </p>
              
              <div className="opt3-contact-info">
                <div className="opt3-info-row">
                  <div className="opt3-icon-box"><MapPin size={20} /></div>
                  <div>
                    <h6>Ubicación</h6>
                    <p>Santiago, Chile / Atención Online Internacional</p>
                  </div>
                </div>
                
                <div className="opt3-info-row">
                  <div className="opt3-icon-box"><Mail size={20} /></div>
                  <div>
                    <h6>Email</h6>
                    <p>contacto@veronicahidalgo.cl</p>
                  </div>
                </div>
                
                <div className="opt3-info-row">
                  <div className="opt3-icon-box"><Phone size={20} /></div>
                  <div>
                    <h6>Teléfono</h6>
                    <p>+56 9 1234 5678</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="opt3-form-container">
              <form className="opt3-form">
                <div className="opt3-form-group">
                  <label>Nombre Completo</label>
                  <input type="text" required />
                </div>
                <div className="opt3-form-group">
                  <label>Correo Electrónico</label>
                  <input type="email" required />
                </div>
                <div className="opt3-form-group">
                  <label>Servicio de Interés</label>
                  <select required>
                    <option value="">Selecciona una opción...</option>
                    <option value="terapia">Terapia individual</option>
                    <option value="formacion">Formación y Cursos</option>
                    <option value="productos">Esencias Florales</option>
                  </select>
                </div>
                <div className="opt3-form-group">
                  <label>Mensaje</label>
                  <textarea rows={4} required></textarea>
                </div>
                <button type="submit" className="opt3-btn-solid w-100">
                  Enviar Solicitud
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
            <h4>VERÓNICA HIDALGO CARLE</h4>
            <p>Sistema Neurofloral®️</p>
          </div>
          <div className="opt3-footer-links">
            <a href="#">Inicio</a>
            <a href="#about">Experiencia</a>
            <a href="#services">Servicios</a>
            <a href="#contact">Contacto</a>
          </div>
          <div className="opt3-footer-social">
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
          </div>
        </div>
        <div className="opt3-footer-copyright">
          <p>&copy; {new Date().getFullYear()} Verónica Hidalgo Carle. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Option3;
