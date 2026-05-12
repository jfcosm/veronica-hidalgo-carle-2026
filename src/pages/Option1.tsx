import { ArrowRight, Leaf, Heart, BookOpen, MapPin, Mail, Phone } from 'lucide-react';
import './Option1.css';

const Option1 = () => {
  return (
    <div className="opt1-container">
      {/* Header */}
      <header className="opt1-header animate-fade-in">
        <div className="opt1-logo">
          <h1>Verónica Hidalgo Carle</h1>
          <p>Terapeuta & Neurocientífica</p>
        </div>
        <nav className="opt1-nav">
          <a href="#about">Enfoque</a>
          <a href="#services">Terapias</a>
          <a href="#courses">Formación</a>
          <a href="#contact" className="btn-primary">Agendar Sesión</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="opt1-hero container">
        <div className="opt1-hero-content animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="opt1-subtitle">Bienestar Integral y Consciencia</span>
          <h2 className="opt1-hero-title">
            Transformación emocional a través del <em>Sistema Neurofloral®️</em>
          </h2>
          <p className="opt1-hero-text">
            Más de dos décadas acompañando procesos en niños, adolescentes y adultos, 
            integrando terapia floral, neurociencia y trabajo sistémico para favorecer cambios profundos en tu bienestar.
          </p>
          <div className="opt1-hero-actions">
            <a href="#contact" className="btn-primary">
              Comenzar tu proceso <ArrowRight size={18} />
            </a>
            <a href="#about" className="btn-secondary">
              Conocer más
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
              <span className="opt1-subtitle">Sobre Mí</span>
              <h3 className="opt1-section-title">Una mirada integrativa y profundamente humana</h3>
              <p>
                Soy Terapeuta Floral con más de 20 años de experiencia, especializada en el abordaje emocional 
                integrando conocimientos en trauma, TEA, déficit atencional, regulación emocional y transformación conductual.
              </p>
              <p>
                Como creadora del <strong>Sistema Neurofloral®️</strong>, comprendo las esencias florales como herramientas 
                de modulación emocional y apoyo fundamental en la generación de nuevas rutas neuronales.
              </p>
              <ul className="opt1-features">
                <li><Heart size={20} /> Conexión cálida y profesional</li>
                <li><Leaf size={20} /> Modulación emocional</li>
                <li><BookOpen size={20} /> Transformación conductual</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="opt1-services section-padding">
        <div className="container">
          <div className="opt1-section-header">
            <span className="opt1-subtitle">Acompañamiento</span>
            <h3 className="opt1-section-title">Espacios de Sanación y Aprendizaje</h3>
          </div>
          
          <div className="opt1-services-grid">
            <div className="opt1-service-card">
              <div className="opt1-icon-wrapper">
                <Heart size={24} />
              </div>
              <h4>Terapias y Sesiones</h4>
              <p>Acompañamiento personalizado para niños, adolescentes y adultos, abordando desafíos emocionales y conductuales con el Sistema Neurofloral®️.</p>
            </div>
            
            <div className="opt1-service-card">
              <div className="opt1-icon-wrapper">
                <BookOpen size={24} />
              </div>
              <h4>Cursos y Formaciones</h4>
              <p>Programas de formación terapéutica desde una mirada seria, humana y profesional para quienes buscan profundizar en este camino.</p>
            </div>
            
            <div className="opt1-service-card">
              <div className="opt1-icon-wrapper">
                <Leaf size={24} />
              </div>
              <h4>Esencias Florales</h4>
              <p>Venta de productos y fórmulas exclusivas diseñadas para apoyar procesos específicos de regulación y bienestar integral.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="opt1-contact section-padding">
        <div className="container">
          <div className="opt1-contact-wrapper">
            <div className="opt1-contact-content">
              <h3 className="opt1-section-title">Da el primer paso hacia tu bienestar</h3>
              <p>Agenda una sesión o contáctame para conocer más sobre el Sistema Neurofloral®️ y los próximos cursos disponibles.</p>
              
              <div className="opt1-contact-info">
                <div className="opt1-info-item">
                  <Mail size={20} />
                  <span>contacto@veronicahidalgo.cl</span>
                </div>
                <div className="opt1-info-item">
                  <Phone size={20} />
                  <span>+56 9 1234 5678</span>
                </div>
                <div className="opt1-info-item">
                  <MapPin size={20} />
                  <span>Santiago, Chile (Modalidad Online y Presencial)</span>
                </div>
              </div>
            </div>
            <div className="opt1-contact-form">
              <form>
                <div className="opt1-form-group">
                  <input type="text" placeholder="Tu nombre" required />
                </div>
                <div className="opt1-form-group">
                  <input type="email" placeholder="Tu correo electrónico" required />
                </div>
                <div className="opt1-form-group">
                  <select>
                    <option value="">¿En qué te puedo ayudar?</option>
                    <option value="terapia">Terapia individual</option>
                    <option value="curso">Cursos y formaciones</option>
                    <option value="productos">Esencias florales</option>
                  </select>
                </div>
                <div className="opt1-form-group">
                  <textarea placeholder="Mensaje" rows={4} required></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  Enviar Mensaje
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
              <h4>Verónica Hidalgo Carle</h4>
              <p>Sistema Neurofloral®️</p>
            </div>
            <div className="opt1-footer-links">
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">Términos y Condiciones</a>
            </div>
          </div>
          <div className="opt1-footer-bottom">
            <p>&copy; {new Date().getFullYear()} Verónica Hidalgo Carle. Todos los derechos reservados.</p>
            <p style={{ marginTop: '0.5rem' }}>
              Hecho con el ❤️ y la ⚡️ de <a href="https://www.melodialab.net" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-terracota)', textDecoration: 'none', fontWeight: 500 }}>MelodIA Lab</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Option1;
