import React, { useState } from 'react';
import {
  MapPin,
  Mail,
  PhoneCall,
  Check,
  Navigation,
  ExternalLink,
  ShieldCheck,
  Clock
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { LAWYER_INFO } from '../data/legalData';
import contactHeroBg from '../assets/images/contact-hero-bg.jpg';

export const ContactTab: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    subject: 'Derecho Penal',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `CONSULTA JURÍDICA WEB:\nNombre: ${formData.name}\nIdentificación/Empresa: ${formData.company || 'Particular'}\nTeléfono: ${formData.phone}\nEmail: ${formData.email}\nÁrea / Asunto: ${formData.subject}\nMensaje: ${formData.message}`;
    const url = `https://wa.me/${LAWYER_INFO.phones[0].raw}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setSent(true);
  };

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 flex flex-col selection:bg-[#c5a059] selection:text-white">
      
      {/* =========================================================================
          1. HERO HEADER: IMAGEN OSCURA CON TÍTULO Y SUBTÍTULO CENTRADOS
          ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#0a0d14] text-white pt-32 sm:pt-40 lg:pt-44 pb-44 sm:pb-52 lg:pb-60 px-4 text-center">
        
        {/* Imagen de Fondo Panorámica */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src={contactHeroBg}
            alt="Atención y Asistencia Jurídica en Despacho"
            className="w-full h-full object-cover pointer-events-none opacity-65"
            style={{ 
              transform: 'translateY(10px)',
              objectPosition: 'right top',
              maskImage: 'linear-gradient(to bottom, transparent 0px, black 25px, black 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0px, black 25px, black 100%)'
            }}
          />
          {/* Overlay oscuro navy en degradado para máxima legibilidad central/izquierda */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0d14] via-[#0a0d14]/75 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d14] via-transparent to-[#0a0d14] pointer-events-none" />
        </div>

        {/* Contenido Centrado de la Cabecera */}
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="font-['Cinzel',serif] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-md">
            Canales de Contacto
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto leading-relaxed font-light drop-shadow">
            Atención presencial en Buena Fe (Los Ríos) y cobertura legal en todo el Ecuador.
            Oficina de 8:00 a 17:00 y atención telefónica las 24 horas.
          </p>
        </div>

      </section>

      {/* =========================================================================
          2. TARJETA BLANCA FLOTANTE SUPERPUESTA (SPLIT 2 COLUMNAS)
          - Lado Izquierdo: "Póngase en contacto" + 4 Ítems de Contacto + Redes Sociales
          - Lado Derecho: "Envíenos un mensaje" + Formulario Completo + Botón Píldora
          ========================================================================= */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-28 sm:-mt-36 lg:-mt-44 mb-20 sm:mb-24">
        <div className="bg-white rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* ---------------------------------------------------------------------
                COLUMNA IZQUIERDA: PÓNGASE EN CONTACTO
                --------------------------------------------------------------------- */}
            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between text-left">
              <div>
                
                {/* Titular */}
                <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl font-extrabold text-[#101626] mb-3">
                  Póngase en contacto
                </h2>
                
                {/* Párrafo descriptivo */}
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-8 sm:mb-10 max-w-sm">
                  Atención legal rigurosa, inmediata y bajo estricta confidencialidad. Especialistas en derecho penal, tránsito, familiar y laboral.
                </p>

                {/* 4 Bloques de Información de Contacto con Iconos Circulares */}
                <div className="space-y-6 sm:space-y-7">
                  
                  {/* Item 1: Despacho Principal */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#c5a059] text-slate-950 flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                      <MapPin className="w-5 h-5 fill-current" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-[#101626] mb-0.5">
                        Oficina Física
                      </span>
                      <span className="text-xs text-slate-700 font-medium leading-snug">
                        {LAWYER_INFO.address}
                      </span>
                      <span className="text-xs text-slate-500 mt-0.5">
                        {LAWYER_INFO.city}
                      </span>
                    </div>
                  </div>

                  {/* Item 2: Horarios de Atención */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#c5a059] text-slate-950 flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-[#101626] mb-0.5">
                        Horarios de Atención
                      </span>
                      <span className="text-xs text-slate-700 font-medium leading-snug">
                        Oficina: {LAWYER_INFO.scheduleOffice}
                      </span>
                      <span className="text-xs text-[#aa8640] font-bold mt-0.5">
                        En el teléfono: 24 Horas continuas (24/7)
                      </span>
                    </div>
                  </div>

                  {/* Item 3: Correo Electrónico */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#c5a059] text-slate-950 flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-[#101626] mb-0.5">
                        Correo Electrónico
                      </span>
                      <a
                        href={`mailto:${LAWYER_INFO.email}`}
                        className="text-xs text-slate-700 hover:text-[#c5a059] transition-colors leading-snug font-semibold"
                      >
                        {LAWYER_INFO.email}
                      </a>
                      <span className="text-xs text-slate-400">
                        Canal oficial de correspondencia y expedientes
                      </span>
                    </div>
                  </div>

                  {/* Item 4: Líneas Telefónicas */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#c5a059] text-slate-950 flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-[#101626] mb-0.5">
                        Líneas Telefónicas
                      </span>
                      <a
                        href={`tel:${LAWYER_INFO.phones[0].raw}`}
                        className="text-xs text-slate-700 hover:text-[#c5a059] transition-colors leading-snug font-bold"
                      >
                        Línea 1: {LAWYER_INFO.phones[0].display}
                      </a>
                      <a
                        href={`tel:${LAWYER_INFO.phones[1].raw}`}
                        className="text-xs text-slate-700 hover:text-[#c5a059] transition-colors font-bold"
                      >
                        Línea 2: {LAWYER_INFO.phones[1].display}
                      </a>
                    </div>
                  </div>

                </div>

              </div>

              {/* Redes Sociales al pie de la columna izquierda */}
              <div className="mt-8 pt-8 border-t border-slate-100">
                <span className="text-xs font-bold text-[#101626] block mb-3.5">
                  Contacto directo por WhatsApp
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={`https://wa.me/${LAWYER_INFO.phones[0].raw}?text=${encodeURIComponent(LAWYER_INFO.whatsappMessageGeneral)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white hover:bg-[#20ba59] transition-all shadow-sm font-semibold text-xs"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Chatear al {LAWYER_INFO.phones[0].display}</span>
                  </a>
                </div>
              </div>

            </div>

            {/* ---------------------------------------------------------------------
                COLUMNA DERECHA: ENVÍENOS UN MENSAJE (FORMULARIO)
                --------------------------------------------------------------------- */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-slate-100 flex flex-col justify-center text-left bg-white">
              
              <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl font-extrabold text-[#101626] mb-2">
                Envíenos un mensaje
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Complete el formulario y le responderemos con la mayor brevedad posible.
              </p>

              {!sent ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Fila 1: Nombre & Empresa */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Carlos Mendoza"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#f8fafc] border border-slate-200/90 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#c5a059] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Cédula / Empresa (Opcional)
                      </label>
                      <input
                        type="text"
                        placeholder="Ej. Particular / C.I."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#f8fafc] border border-slate-200/90 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#c5a059] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Fila 2: Teléfono & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Teléfono / Celular *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ej. 099 820 3766"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#f8fafc] border border-slate-200/90 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#c5a059] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ejemplo@correo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#f8fafc] border border-slate-200/90 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#c5a059] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Fila 3: Especialidad o Materia Jurídica */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Área de Especialidad / Materia Legal *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#f8fafc] border border-slate-200/90 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#c5a059] focus:bg-white transition-all"
                    >
                      <option value="Derecho Penal (Robo, Receptación, Estafa, etc.)">Derecho Penal (Robo, Receptación, Estafa, Secuestro, etc.)</option>
                      <option value="Flagrancias y Detenciones Urgentes 24/7">Flagrancias y Detenciones Urgentes 24/7</option>
                      <option value="Materia de Tránsito y Accidentes">Materia de Tránsito y Accidentes (Siniestros, Impugnaciones)</option>
                      <option value="Constitución y Legalización de Compañías de Transporte">Constitución y Legalización de Compañías de Transporte</option>
                      <option value="Derecho Familiar (Pensiones, Tenencia, Divorcio)">Derecho Familiar (Pensiones, Tenencia, Divorcio, Violencia)</option>
                      <option value="Derecho Laboral (Despidos, Vistos Buenos)">Derecho Laboral (Despidos, Vistos Buenos, Liquidaciones)</option>
                      <option value="Otra Consulta Legal">Otra Consulta Legal</option>
                    </select>
                  </div>

                  {/* Fila 4: Mensaje */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Mensaje / Resumen de los Hechos
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describa brevemente los hechos o requerimiento legal..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#f8fafc] border border-slate-200/90 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#c5a059] focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* Botón Enviar Mensaje Píldora Completo */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 sm:py-4 rounded-full bg-[#c5a059] hover:bg-[#d4af37] text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Enviar Mensaje por WhatsApp</span>
                    </button>
                  </div>

                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#c5a059]/15 text-[#aa8640] mx-auto flex items-center justify-center">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-['Cinzel',serif] text-xl font-bold text-[#101626]">
                    Mensaje Enviado con Éxito
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                    La comunicación directa se ha iniciado con el despacho. Nuestro equipo procesará su consulta bajo absoluta reserva y confidencialidad.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c5a059] hover:text-[#aa8640] transition-colors cursor-pointer pt-2"
                  >
                    <span>Enviar otra consulta</span>
                  </button>
                </div>
              )}

            </div>

          </div>
        </div>
      </div>

      {/* =========================================================================
          3. MAPA DE ANCHO COMPLETO CON TARJETA FLOTANTE DE UBICACIÓN
          (Ubicado en Buena Fe, Los Ríos, diagonal a la Fiscalía General del Estado)
          ========================================================================= */}
      <section className="w-full relative h-[420px] sm:h-[480px] lg:h-[520px] border-t border-slate-200 overflow-hidden bg-slate-100">
        
        {/* Iframe Interactivo de Google Maps centrado en Buena Fe, Los Ríos, Ecuador */}
        <iframe
          title="Ubicación Estudio Jurídico Segura Santana en Buena Fe, Los Ríos"
          src="https://maps.google.com/maps?q=Fiscalia+Buena+Fe+Los+Rios+Ecuador&t=&z=16&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0 filter saturate-[0.9] contrast-[1.02]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Tarjeta Flotante Superior Izquierda de Información del Mapa */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 max-w-[320px] sm:max-w-sm bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-200 text-left">
          
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <span className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-[#101626] block leading-tight">
                {LAWYER_INFO.firmName}
              </span>
              <span className="text-[11px] text-slate-600 block leading-tight mt-1 font-medium">
                {LAWYER_INFO.address}
              </span>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                {LAWYER_INFO.city}
              </span>
            </div>

            <a
              href="https://maps.google.com/?q=Calle+Felipe+%C3%81lvarez,+Buena+Fe,+Los+R%C3%ADos"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-[#c5a059] text-slate-950 flex items-center justify-center flex-shrink-0 hover:bg-[#d4af37] transition-colors shadow-xs"
              title="Cómo llegar"
              aria-label="Cómo llegar"
            >
              <Navigation className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-amber-500 font-bold mb-3">
            <span>Horario de Oficina:</span>
            <span className="text-slate-700 font-medium">8:00 AM - 5:00 PM</span>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
            <span className="text-[#aa8640] font-bold">Teléfono 24 Horas Activo</span>
            <a
              href="https://maps.google.com/?q=Calle+Felipe+%C3%81lvarez,+Buena+Fe,+Los+R%C3%ADos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c5a059] hover:text-[#aa8640] font-bold flex items-center gap-1"
            >
              <span>Ver en Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

      </section>

    </div>
  );
};
