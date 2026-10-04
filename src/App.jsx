import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ArrowUpRight, ArrowRight, Phone, Mail, MapPin, 
  Home, Building2, Utensils, Bed, Briefcase, KeyRound, 
  CheckCircle2, Send
} from 'lucide-react';
import { siteConfig } from './siteConfig';

const InstagramGlyph = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-label="Instagram">
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.3" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

const IconRenderer = ({ name, className = "w-6 h-6" }) => {
  const icons = { Home, Building2, Utensils, Bed, Briefcase, KeyRound };
  const IconComponent = icons[name] || Home;
  return <IconComponent className={className} />;
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    projectType: 'Residential Villa / Apt',
    budget: '₹10–20 Lakhs',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      setFormError('Please fill in all required fields.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
  };

  return (
    <div className="bg-[#FBF9F5] text-[#1A1A1A] min-h-screen selection:bg-[#9E7B56] selection:text-white font-sans">
      
      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-[#FBF9F5]/90 backdrop-blur-md py-4 border-b border-black/10 shadow-sm' : 'bg-[#FBF9F5] py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl font-bold tracking-widest text-[#1A1A1A]">
              {siteConfig.brand.name}
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#8C7A6B] uppercase font-semibold">
              ARCHITECTURE & INTERIORS
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8 text-xs tracking-[0.2em] uppercase font-semibold text-[#333333]">
            <a href="#about" className="hover:text-[#9E7B56] transition-colors">About</a>
            <a href="#services" className="hover:text-[#9E7B56] transition-colors">Services</a>
            <a href="#projects" className="hover:text-[#9E7B56] transition-colors">Projects</a>
            <a href="#process" className="hover:text-[#9E7B56] transition-colors">Process</a>
            <a href="#contact" className="hover:text-[#9E7B56] transition-colors">Contact</a>
          </div>

          <a 
            href="#contact" 
            className="hidden md:inline-flex items-center justify-center bg-[#1A1A1A] text-white px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-[#9E7B56] transition-all duration-300"
          >
            Start a Project
          </a>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-[#1A1A1A] focus:outline-none p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FBF9F5] border-b border-black/10 px-6 py-6 flex flex-col space-y-4 text-sm tracking-widest uppercase font-semibold text-[#1A1A1A]">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#9E7B56]">About</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#9E7B56]">Services</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#9E7B56]">Projects</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#9E7B56]">Process</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#9E7B56]">Contact</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop" 
            alt="Interior Hero" 
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FBF9F5] via-[#FBF9F5]/40 to-black/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-16 pb-20">
          <div className="max-w-3xl">
            <span className="inline-block text-[#8C6A48] text-xs md:text-sm tracking-[0.3em] uppercase mb-4 font-bold bg-[#FBF9F5]/80 px-3 py-1 rounded backdrop-blur-sm">
              {siteConfig.brand.subtagline}
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.05] tracking-tight mb-6 text-[#1A1A1A]">
              SPACES DESIGNED <br />
              <span className="italic font-light text-[#8C6A48]">AROUND YOU.</span>
            </h1>
            <p className="text-[#333333] text-base sm:text-lg max-w-xl font-normal leading-relaxed mb-10 bg-[#FBF9F5]/60 p-2 rounded backdrop-blur-sm">
              {siteConfig.brand.shortDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="bg-[#1A1A1A] text-white px-8 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-[#9E7B56] transition-colors text-center rounded-full shadow-md">
                Explore Projects
              </a>
              <a href="#contact" className="border border-[#1A1A1A] text-[#1A1A1A] bg-white/80 px-8 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-[#1A1A1A] hover:text-white transition-colors text-center rounded-full shadow-sm">
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[#9E7B56] text-xs uppercase tracking-[0.25em] font-bold">About Us</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1A1A1A]">WE CREATE SPACES THAT FEEL LIKE HOME.</h2>
              <p className="text-[#4A4A4A] leading-relaxed font-light">{siteConfig.brand.aboutCopy}</p>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-6 bg-white p-8 border border-black/5 shadow-sm rounded-2xl">
              {siteConfig.stats.map((stat, i) => (
                <div key={i} className="p-2">
                  <p className="font-serif text-4xl text-[#9E7B56] mb-1 font-bold">{stat.value}</p>
                  <p className="text-xs uppercase tracking-widest text-[#666666] font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-[#F2EDE4] border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <span className="text-[#9E7B56] text-xs uppercase tracking-[0.25em] font-bold">Offerings</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal mt-2 text-[#1A1A1A]">WHAT WE DO</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.map((s) => (
              <div key={s.id} className="bg-[#FBF9F5] p-8 border border-black/5 rounded-xl hover:shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-2xl font-serif text-[#9E7B56] font-bold">{s.id}</span>
                    <div className="p-3 bg-[#F2EDE4] text-[#9E7B56] rounded-lg">
                      <IconRenderer name={s.iconName} />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl text-[#1A1A1A] mb-3 font-semibold">{s.title}</h3>
                  <p className="text-[#555555] text-sm font-light mb-6 leading-relaxed">{s.description}</p>
                </div>
                <a href="#contact" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#9E7B56] font-bold hover:text-[#1A1A1A] transition-colors">
                  Inquire Now <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <span className="text-[#9E7B56] text-xs uppercase tracking-[0.25em] font-bold">Portfolio</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal mt-2 text-[#1A1A1A]">SELECTED PROJECTS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {siteConfig.projects.map((p) => (
              <div key={p.id} onClick={() => setSelectedProject(p)} className="cursor-pointer group">
                <div className="aspect-[4/3] overflow-hidden mb-4 bg-stone-200 rounded-xl shadow-sm">
                  <img src={p.mainImage} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex justify-between items-center border-b border-black/10 pb-4">
                  <div>
                    <h3 className="font-serif text-2xl text-[#1A1A1A] group-hover:text-[#9E7B56] transition-colors font-semibold">{p.title}</h3>
                    <p className="text-xs text-[#666666] uppercase tracking-widest mt-1">{p.location} — {p.category}</p>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-[#9E7B56] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 bg-[#F2EDE4] border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <span className="text-[#9E7B56] text-xs uppercase tracking-[0.25em] font-bold">Workflow</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal mt-2 text-[#1A1A1A]">DESIGN PROCESS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {siteConfig.process.map((p) => (
              <div key={p.step} className="bg-[#FBF9F5] p-6 border border-black/5 rounded-xl shadow-sm">
                <div className="text-xs font-mono text-[#9E7B56] font-bold mb-4">0{p.step}</div>
                <h3 className="font-serif text-lg text-[#1A1A1A] font-semibold mb-2">{p.name}</h3>
                <p className="text-xs text-[#555555] font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION MATCHING IMAGE 1 */}
      <section id="contact" className="py-20 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Get In Touch Info + Map */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-[#8C7A6B] text-[11px] uppercase tracking-[0.25em] font-medium block mb-2">
                  GET IN TOUCH
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] font-normal tracking-wide mb-4">
                  START A CONVERSATION
                </h2>
                <p className="text-[#666666] text-sm leading-relaxed font-light">
                  Visit our design studio or reach out directly to schedule an in-person design consultation
                </p>
              </div>

              <div className="space-y-6 pt-2">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#8C7A6B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#8C7A6B]">
                      STUDIO ADDRESS
                    </h4>
                    <p className="text-xs text-[#333333] mt-1 leading-relaxed">
                      123 Design Avenue, Race Course Road, Coimbatore, Tamil Nadu - 641018
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#8C7A6B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#8C7A6B]">
                      PHONE / WHATSAPP
                    </h4>
                    <p className="text-xs text-[#333333] mt-1">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-[#8C7A6B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#8C7A6B]">
                      EMAIL
                    </h4>
                    <p className="text-xs text-[#333333] mt-1">
                      hello@lumainteriors.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map Box Preview */}
              <div className="rounded-2xl overflow-hidden border border-black/10 shadow-sm aspect-[16/9] relative bg-stone-100">
                <iframe 
                  title="Studio Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.33327376387!2d76.96918881526105!3d11.00288829216805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859a35e768393%3A0xe9db299727409f5!2sRace%20Course%20Rd%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  className="w-full h-full border-0"
                  allowFullScreen="" 
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: Project Enquiry Form Container */}
            <div className="lg:col-span-7 bg-[#F5F2EC] p-8 md:p-10 rounded-3xl border border-black/5 shadow-sm">
              <h3 className="font-serif text-2xl text-[#1A1A1A] mb-8 font-normal">
                Project Enquiry Form
              </h3>

              {formSubmitted ? (
                <div className="text-center py-16 bg-white rounded-2xl border border-black/5 p-8">
                  <CheckCircle2 className="w-12 h-12 text-[#8C7A6B] mx-auto mb-4" />
                  <h3 className="font-serif text-2xl text-[#1A1A1A]">ENQUIRY RECEIVED</h3>
                  <p className="text-xs text-[#666666] mt-2">Thank you! Our design team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {formError && <div className="text-red-500 text-xs font-semibold">{formError}</div>}
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] tracking-[0.18em] uppercase font-semibold text-[#8C7A6B] block mb-2">
                        YOUR NAME *
                      </label>
                      <input 
                        type="text" 
                        placeholder="e.g. Ananya Sharma" 
                        required 
                        value={formData.name} 
                        onChange={e => setFormData({...formData, name: e.target.value})} 
                        className="w-full bg-white rounded-xl border border-black/10 px-4 py-3.5 text-xs text-[#1A1A1A] placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#8C7A6B]" 
                      />
                    </div>
                    <div>
                      <label className="text-[10px] tracking-[0.18em] uppercase font-semibold text-[#8C7A6B] block mb-2">
                        PHONE NUMBER *
                      </label>
                      <input 
                        type="tel" 
                        placeholder="+91 98765 43210" 
                        required 
                        value={formData.phone} 
                        onChange={e => setFormData({...formData, phone: e.target.value})} 
                        className="w-full bg-white rounded-xl border border-black/10 px-4 py-3.5 text-xs text-[#1A1A1A] placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#8C7A6B]" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] tracking-[0.18em] uppercase font-semibold text-[#8C7A6B] block mb-2">
                        EMAIL ADDRESS *
                      </label>
                      <input 
                        type="email" 
                        placeholder="ananya@example.com" 
                        required 
                        value={formData.email} 
                        onChange={e => setFormData({...formData, email: e.target.value})} 
                        className="w-full bg-white rounded-xl border border-black/10 px-4 py-3.5 text-xs text-[#1A1A1A] placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#8C7A6B]" 
                      />
                    </div>
                    <div>
                      <label className="text-[10px] tracking-[0.18em] uppercase font-semibold text-[#8C7A6B] block mb-2">
                        SITE LOCATION *
                      </label>
                      <input 
                        type="text" 
                        placeholder="e.g. Race Course, Coimbatore" 
                        required 
                        value={formData.location} 
                        onChange={e => setFormData({...formData, location: e.target.value})} 
                        className="w-full bg-white rounded-xl border border-black/10 px-4 py-3.5 text-xs text-[#1A1A1A] placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#8C7A6B]" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] tracking-[0.18em] uppercase font-semibold text-[#8C7A6B] block mb-2">
                        PROJECT TYPE
                      </label>
                      <select 
                        value={formData.projectType} 
                        onChange={e => setFormData({...formData, projectType: e.target.value})} 
                        className="w-full bg-white rounded-xl border border-black/10 px-4 py-3.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#8C7A6B]"
                      >
                        <option value="Residential Villa / Apt">Residential Villa / Apt</option>
                        <option value="Commercial Interior">Commercial Interior</option>
                        <option value="Modular Kitchen">Modular Kitchen</option>
                        <option value="Renovation">Renovation</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[10px] tracking-[0.18em] uppercase font-semibold text-[#8C7A6B] block mb-2">
                        ESTIMATED BUDGET
                      </label>
                      <select 
                        value={formData.budget} 
                        onChange={e => setFormData({...formData, budget: e.target.value})} 
                        className="w-full bg-white rounded-xl border border-black/10 px-4 py-3.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#8C7A6B]"
                      >
                        <option value="₹5–10 Lakhs">₹5–10 Lakhs</option>
                        <option value="₹10–20 Lakhs">₹10–20 Lakhs</option>
                        <option value="₹20–50 Lakhs">₹20–50 Lakhs</option>
                        <option value="₹50+ Lakhs">₹50+ Lakhs</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] tracking-[0.18em] uppercase font-semibold text-[#8C7A6B] block mb-2">
                      MESSAGE / REQUIREMENTS
                    </label>
                    <textarea 
                      rows={4} 
                      placeholder="Briefly describe your space size, layout idea or timeline requirements..." 
                      value={formData.message} 
                      onChange={e => setFormData({...formData, message: e.target.value})} 
                      className="w-full bg-white rounded-xl border border-black/10 p-4 text-xs text-[#1A1A1A] placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#8C7A6B]" 
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-[#1A1A1A] text-white py-4 rounded-xl text-xs font-semibold uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-[#8C7A6B] transition-colors shadow-md mt-2"
                  >
                    <Send className="w-4 h-4" /> SEND ENQUIRY
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER SECTION MATCHING IMAGE 2 */}
      <footer className="bg-[#171717] text-[#A1A1A1] pt-16 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
            
            {/* Brand Information */}
            <div className="md:col-span-6 space-y-4">
              <h3 className="font-serif text-xl tracking-[0.2em] text-white uppercase font-bold">
                LUMA INTERIORS
              </h3>
              <p className="text-xs text-[#888888] leading-relaxed max-w-md font-light">
                Creating thoughtful spaces with timeless design across South India. Specialists in luxury residential and architectural commercial projects.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#A89078] mb-4">
                QUICK LINKS
              </h4>
              <ul className="space-y-2 text-xs uppercase tracking-widest font-medium text-[#CCCCCC]">
                <li><a href="#about" className="hover:text-white transition-colors">ABOUT STUDIO</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">SERVICES</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">SELECTED PROJECTS</a></li>
                <li><a href="#process" className="hover:text-white transition-colors">PROCESS</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">CONTACT</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#A89078] mb-4">
                CONNECT
              </h4>
              <p className="text-xs text-[#CCCCCC]">hello@lumainteriors.com</p>
              <p className="text-xs text-[#CCCCCC] pb-2">+91 98765 43210</p>
              
              <div className="flex gap-3 pt-1">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-full bg-[#282828] text-white flex items-center justify-center hover:bg-[#A89078] transition-colors">
                  <InstagramGlyph className="w-4 h-4" />
                </a>
                <a href="mailto:hello@lumainteriors.com" aria-label="Email" className="w-8 h-8 rounded-full bg-[#282828] text-white flex items-center justify-center hover:bg-[#A89078] transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Copyright Bar */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-[#666666] tracking-wider">
            <p>© 2026 LUMA INTERIORS. All rights reserved.</p>
            <p className="uppercase tracking-[0.15em] text-[10px] text-[#555555] mt-4 md:mt-0">
              FREELANCE DEMO TEMPLATE • BUILT FOR CLIENT PITCHING
            </p>
          </div>
        </div>
      </footer>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm p-6 flex items-center justify-center overflow-y-auto">
          <div className="bg-[#FBF9F5] border border-black/10 p-8 max-w-3xl w-full relative rounded-2xl shadow-2xl">
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 text-[#666666] hover:text-[#1A1A1A]">
              <X className="w-6 h-6" />
            </button>
            <h2 className="font-serif text-3xl text-[#1A1A1A] mb-2 font-semibold">{selectedProject.title}</h2>
            <p className="text-xs text-[#9E7B56] font-bold uppercase tracking-widest mb-6">{selectedProject.category} — {selectedProject.location}</p>
            <p className="text-[#4A4A4A] text-sm font-light leading-relaxed mb-6">{selectedProject.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {selectedProject.gallery && selectedProject.gallery.map((img, i) => (
                <div key={i} className="aspect-[4/3] bg-stone-200 overflow-hidden rounded-lg">
                  <img 
                    src={img} 
                    alt={`${selectedProject.title} detail ${i + 1}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}