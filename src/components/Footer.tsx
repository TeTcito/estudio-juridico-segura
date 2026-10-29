import React from 'react';
import { Phone, Shield } from 'lucide-react';
import logoImg from '../assets/images/logo.png';
import { LAWYER_INFO } from '../data/legalData';
import type { TabKey } from './Header';

interface FooterProps {
  onSelectTab: (tab: TabKey) => void;
  onOpenEmergencyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenEmergencyModal }) => {
  return (
    <footer className="w-full bg-[#101626] border-t border-[#c5a059]/30 pt-16 pb-12 text-left text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Columna Marca */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-13 h-13 rounded-xl bg-[#0a0d14] p-1.5 shadow-lg border border-[#c5a059]/60 flex items-center justify-center ring-1 ring-white/10">
                <img src={logoImg} alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h4 className="font-['Cinzel',serif] text-base font-bold text-white tracking-wider">
                  {LAWYER_INFO.name}
                </h4>
                <div className="text-[11px] text-[#e5c378] font-bold uppercase tracking-wider">
                  {LAWYER_INFO.title} · Mgs. Procesal Penal & Constitucional
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Especialistas en Derecho Penal, Tránsito, Transporte, Familia y Laboral.
              Atención presencial en Buena Fe (Los Ríos) y litigación estratégica en todo el Ecuador.
            </p>

            <div className="space-y-1 text-xs text-slate-400">
              <div>📍 <span className="text-slate-300">{LAWYER_INFO.addressShort}</span></div>
              <div>⏰ <span className="text-slate-300">Oficina: {LAWYER_INFO.scheduleOffice}</span></div>
              <div>📞 <span className="text-[#e5c378] font-bold">Teléfono: Las 24 Horas (24/7)</span></div>
              <div>✉️ <a href={`mailto:${LAWYER_INFO.email}`} className="text-slate-300 hover:text-[#e5c378] underline">{LAWYER_INFO.email}</a></div>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#e5c378] font-semibold pt-1">
              <Shield className="w-4 h-4 text-[#c5a059]" />
              <span>Universidad Uniandes · Universidad Casa Grande · Más de 5 Años de Experiencia</span>
            </div>
          </div>

          {/* Columna Enlaces de Pestañas */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="font-['Cinzel',serif] text-xs font-bold text-[#e5c378] uppercase tracking-widest">
              Páginas del Sitio
            </h5>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => { onSelectTab('inicio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#e5c378] transition-colors">
                  01. Inicio & Portada
                </button>
              </li>
              <li>
                <button onClick={() => { onSelectTab('perfil'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#e5c378] transition-colors">
                  02. Perfil Profesional & Maestría
                </button>
              </li>
              <li>
                <button onClick={() => { onSelectTab('servicios'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#e5c378] transition-colors">
                  03. Áreas de Práctica & Casuística
                </button>
              </li>
              <li>
                <button onClick={() => { onSelectTab('metodologia'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#e5c378] transition-colors">
                  04. Metodología & FAQ
                </button>
              </li>
              <li>
                <button onClick={() => { onSelectTab('contacto'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#e5c378] transition-colors">
                  05. Contacto & Urgencias 24/7
                </button>
              </li>
            </ul>
          </div>

          {/* Columna Contacto Directo */}
          <div className="lg:col-span-4 space-y-3">
            <h5 className="font-['Cinzel',serif] text-xs font-bold text-[#e5c378] uppercase tracking-widest">
              Atención de Flagrancias 24/7
            </h5>
            <div className="space-y-1.5 text-xs">
              <a href={`tel:${LAWYER_INFO.phones[0].raw}`} className="block text-white hover:text-[#e5c378] font-bold transition-colors">
                Línea 1: {LAWYER_INFO.phones[0].display}
              </a>
              <a href={`tel:${LAWYER_INFO.phones[1].raw}`} className="block text-white hover:text-[#e5c378] font-bold transition-colors">
                Línea 2: {LAWYER_INFO.phones[1].display}
              </a>
              <p className="text-[11px] text-slate-400 pt-1">
                Disponibilidad inmediata para audiencias en Unidades de Flagrancia a nivel nacional.
              </p>
            </div>
            <button
              onClick={onOpenEmergencyModal}
              className="mt-2 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#c5a059] text-white text-xs font-bold hover:bg-[#b38b39] transition-all shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>Activar Urgencia Penal</span>
            </button>
          </div>

        </div>

        {/* Barra de Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} {LAWYER_INFO.name} — {LAWYER_INFO.title} · Mgs. Procesal Penal & Constitucional. Todos los derechos reservados.
          </div>
          <div className="text-[11px] text-slate-400">
            Estudio Jurídico Especializado
          </div>
        </div>
      </div>
    </footer>
  );
};
