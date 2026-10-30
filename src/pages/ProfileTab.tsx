import React, { useState } from 'react';
import {
  ArrowRight,
  Award,
  BookOpen,
  Landmark,
  ShieldAlert,
  Scale,
  Gavel,
  Phone
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import type { TabKey } from '../components/Header';
import { LAWYER_INFO } from '../data/legalData';

// Images
import sofiaCutout from '../assets/images/sofia-profile-hero.png';
import sofiaWorkingLandscape from '../assets/images/sofia-working-landscape.jpg';
import portraitFormal from '../assets/images/sofia-profile-postgrados.jpg';
import methodologyInvestigationForensic from '../assets/images/methodology-investigation-forensic.jpg';
import profileCaseInvestigation from '../assets/images/profile-case-investigation.jpg';
import specialtyTrafficExpert from '../assets/images/specialty-traffic-expert.jpg';
import methodologyTransportAudit from '../assets/images/methodology-transport-audit.jpg';
import lawLibraryPrestige from '../assets/images/law-library-prestige.jpg';

interface ProfileTabProps {
  onSelectTab: (tab: TabKey) => void;
  onOpenEmergencyModal: () => void;
}

export const ProfileTab: React.FC<ProfileTabProps> = ({ onSelectTab, onOpenEmergencyModal }) => {
  const [contactInput, setContactInput] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);
  return (
    <div className="w-full bg-[#FAF5EE] text-slate-800 flex flex-col overflow-hidden text-left font-['Montserrat',sans-serif]">
      
      {/* =========================================================================
          SECCIÓN 1: HERO DE PERFIL A ANCHO COMPLETO (FULL-WIDTH)
          Espacio exacto de 20px con respecto al header superior
          ========================================================================= */}
      <section className="relative w-full bg-[#FAF5EE] pt-[20px] pb-24 sm:pb-32 lg:pb-36 overflow-hidden z-10">
        
        {/* 1. Rama botánica / laurel en el borde izquierdo */}
        <div className="absolute left-0 top-4 sm:top-6 -translate-x-3 sm:translate-x-0 pointer-events-none z-0">
          <svg
            className="w-28 sm:w-40 lg:w-48 h-auto text-[#D5C2AF]"
            viewBox="0 0 160 360"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Tallo principal */}
            <path d="M 20 350 C 45 280 60 170 95 15" strokeWidth="2.5" />
            
            {/* Pares de hojas botánicas suaves */}
            {/* Par 1 superior */}
            <path d="M 85 45 C 105 30 130 38 126 60 C 108 68 90 56 85 45 Z" fill="currentColor" fillOpacity="0.85" />
            <path d="M 78 80 C 50 68 40 90 55 106 C 70 108 78 94 78 80 Z" fill="currentColor" fillOpacity="0.85" />
            
            {/* Par 2 medio-alto */}
            <path d="M 72 135 C 95 120 120 128 116 150 C 98 158 78 146 72 135 Z" fill="currentColor" fillOpacity="0.85" />
            <path d="M 64 170 C 35 158 25 180 40 196 C 56 198 64 184 64 170 Z" fill="currentColor" fillOpacity="0.85" />
            
            {/* Par 3 medio-bajo */}
            <path d="M 58 225 C 80 210 105 218 100 240 C 82 248 64 236 58 225 Z" fill="currentColor" fillOpacity="0.85" />
            <path d="M 48 260 C 20 248 10 270 25 286 C 40 288 48 274 48 260 Z" fill="currentColor" fillOpacity="0.85" />
            
            {/* Hoja base */}
            <path d="M 38 310 C 60 295 85 302 80 324 C 62 332 44 320 38 310 Z" fill="currentColor" fillOpacity="0.85" />
          </svg>
        </div>

        {/* 2. Contenedor a todo el ancho de la pantalla */}
        <div className="w-full max-w-[1480px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
            
            {/* Columna Izquierda: Rótulo, Titular Editorial, Párrafo y Botones */}
            <div className="lg:col-span-7 flex flex-col items-start text-left pt-0 z-10">
              
              {/* Rótulo superior en español */}
              <div className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#9C6E52] uppercase mb-4">
                HOLA, SOY SOFÍA SEGURA
              </div>

              {/* Título Principal Editorial con itálica y destellos exactos */}
              <div className="relative mb-6">
                <h1 className="font-['Cinzel',serif] text-4xl sm:text-5xl lg:text-[62px] font-bold text-[#1c2237] leading-[1.06] tracking-tight">
                  Defensa Penal <br />
                  <span className="font-['Playfair_Display',serif] italic font-normal text-[#9C6E52] tracking-normal">
                    Estratégica & Tránsito
                  </span> <br />
                  Constitucional
                </h1>

                {/* Dos destellos/estrellas de 4 puntas a la derecha del titular (exacto a la referencia) */}
                <div className="absolute top-2 -right-8 sm:-right-12 pointer-events-none text-[#C5A059] flex flex-col items-center">
                  <svg className="w-4 h-4 text-[#C5A059]/80" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9Z" />
                  </svg>
                  <svg className="w-6 h-6 text-[#9C6E52] mt-3 ml-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
                  </svg>
                </div>
              </div>

              {/* Párrafo descriptivo con datos reales de Uniandes, Casa Grande y 4 años de experiencia */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mb-8 font-normal">
                Patrocinio jurídico de alta especialización técnica liderado por la{' '}
                <strong className="text-slate-900 font-bold">{LAWYER_INFO.name}</strong>,{' '}
                <span className="text-[#9C6E52] font-semibold">{LAWYER_INFO.title}</span>, con{' '}
                <span className="font-semibold">{LAWYER_INFO.specialty}</span> (Universidad Casa Grande) y formación en la{' '}
                <span className="font-semibold">Universidad Autónoma Regional de Los Andes (Uniandes)</span>.{' '}
                Más de 5 años de experiencia garantizando una defensa rigurosa e implacable.
              </p>

              {/* Fila de Botones: Botón Píldora Sólido + Enlace con Flecha */}
              <div className="flex flex-wrap items-center gap-6">
                <button
                  onClick={() => {
                    const el = document.getElementById('sobre-mi-card');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-3.5 rounded-full bg-[#1c2237] hover:bg-[#9C6E52] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center gap-2.5 transform hover:-translate-y-0.5 active:translate-y-0 group"
                >
                  <span>Conocer Trayectoria</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={onOpenEmergencyModal}
                  className="text-xs font-bold uppercase tracking-wider text-[#1c2237] hover:text-[#9C6E52] transition-colors flex items-center gap-1.5 py-2 group"
                >
                  <span>Atención Urgencias 24/7</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#9C6E52] transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>

            {/* Columna Derecha: El gran arco orgánico que se extiende hacia el borde derecho con la silueta */}
            <div className="lg:col-span-5 relative flex items-end justify-center lg:justify-end min-h-[460px] sm:min-h-[540px] lg:min-h-[580px]">
              
              {/* Mancha orgánica suave beige detrás a la izquierda */}
              <div className="absolute left-0 sm:left-4 bottom-20 w-48 sm:w-60 h-64 sm:h-80 rounded-[90px] bg-[#EAE0CE]/70 blur-[1px] pointer-events-none -z-10" />

              {/* Línea curva orgánica delicada detrás de la mujer */}
              <div className="absolute left-2 sm:left-8 top-10 w-44 h-56 pointer-events-none opacity-40 -z-10">
                <svg viewBox="0 0 100 140" fill="none" className="w-full h-full text-[#9C6E52]">
                  <path d="M 85 130 C 20 100, 10 40, 50 10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                </svg>
              </div>

              {/* Gran Forma Arqueada Orgánica Noble (En verde oliva/azul noche con líneas topográficas) */}
              <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[500px] h-[440px] sm:h-[520px] lg:h-[560px] rounded-tl-[240px] sm:rounded-tl-[280px] rounded-bl-[140px] sm:rounded-bl-[180px] rounded-tr-[40px] rounded-br-none bg-gradient-to-b from-[#242e44] via-[#1c2337] to-[#121724] shadow-[0_30px_60px_rgba(28,35,55,0.28)] flex items-end justify-center overflow-hidden border-l-2 border-t-2 border-[#c5a059]/30">
                
                {/* Líneas topográficas/contornos orgánicos en blanco sutil (exacto a la referencia) */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <svg viewBox="0 0 400 500" fill="none" className="w-full h-full stroke-white">
                    <path d="M 380 480 C 350 360, 260 220, 160 200 C 60 180, 20 260, 20 360" strokeWidth="1.5" />
                    <path d="M 390 420 C 340 320, 270 250, 190 240 C 110 230, 60 290, 60 380" strokeWidth="1.2" />
                    <path d="M 400 360 C 330 280, 280 280, 220 280 C 160 280, 100 320, 100 400" strokeWidth="1" />
                    <circle cx="280" cy="160" r="120" strokeWidth="1.2" strokeDasharray="6 6" />
                  </svg>
                </div>

                {/* Fotografía de la Abogada en Silueta apoyada sobre la base con presencia digna */}
                <img
                  src={sofiaCutout}
                  alt="Ab. Sofía Segura Santana - Titular"
                  className="relative z-10 w-auto max-h-[430px] sm:max-h-[500px] lg:max-h-[540px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)] block m-0 p-0 transform hover:scale-[1.01] transition-transform duration-500"
                />

              </div>

            </div>

          </div>
        </div>

      </section>

      {/* =========================================================================
          SECCIÓN 2: TARJETA BLANCA SUPERPUESTA "SOBRE MÍ"
          ========================================================================= */}
      <section id="sobre-mi-card" className="w-full -mt-20 sm:-mt-28 lg:-mt-32 relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1320px] mx-auto relative">
          
          {/* Mancha orgánica de color camel/arena saliendo del borde izquierdo de la tarjeta (exacto a la referencia) */}
          <div className="absolute -left-3 sm:-left-6 top-10 sm:top-14 w-20 sm:w-28 h-32 sm:h-44 rounded-r-[50px] rounded-tl-[40px] bg-[#E3D3C1] -z-10 pointer-events-none" />

          {/* Extensión del bloque oscuro alineado con la máscara de la imagen superior y debajo de la sección de arriba */}
          <div className="absolute right-[40px] sm:right-[56px] lg:right-[72px] -top-8 w-28 sm:w-40 h-48 sm:h-64 rounded-bl-[60px] bg-[#1c2337] z-0 pointer-events-none opacity-90 hidden sm:block" />

          {/* Tarjeta Blanca Principal con grandes esquinas redondeadas */}
          <div className="w-full bg-white rounded-[32px] sm:rounded-[44px] p-6 sm:p-10 lg:p-12 shadow-[0_20px_55px_rgba(0,0,0,0.06)] border border-stone-200/80 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Columna Izquierda: Fotografía de la titular en su despacho trabajando */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-[22px] sm:rounded-[30px] overflow-hidden aspect-[4/3] sm:aspect-[16/11] shadow-md border border-stone-100 bg-stone-50">
                  <img
                    src={sofiaWorkingLandscape}
                    alt="Ab. Sofía Segura Santana analizando expediente en despacho"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Columna Derecha: SOBRE MÍ, Título de 2 líneas, Párrafo, Firma y Sello Circular */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                
                {/* Rótulo Superior: SOBRE MÍ */}
                <div className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#9C6E52] uppercase mb-2">
                  SOBRE MÍ
                </div>

                {/* Título Estructurado en 2 líneas en tipografía Serif en español */}
                <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#1c2237] leading-[1.15] mb-4">
                  Litigio con propósito. <br />
                  <span className="font-['Playfair_Display',serif] italic font-normal text-[#9C6E52]">
                    Defensa con convicción.
                  </span>
                </h2>

                {/* Párrafo Narrativo y Humano en 4 líneas equilibradas */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  Creo firmemente que la defensa penal trasciende los tribunales: se trata de salvaguardar la libertad, la dignidad y el proyecto de vida de seres humanos y sus familias. Cada causa la asumimos con exhaustivo análisis pericial, lealtad procesal inquebrantable y una teoría del caso dogmáticamente estructurada para resistir el más riguroso debate judicial.
                </p>

                {/* Fila Inferior: Firma Caligráfica + Sello Circular Notarial (idéntico a la referencia) */}
                <div className="w-full flex items-center justify-between pt-3 border-t border-stone-100 mt-1">
                  
                  {/* Firma manuscrita caligráfica: Sofía Segura S. ♡ */}
                  <div className="flex items-center gap-2">
                    <span className="font-['Alex_Brush',cursive] text-3xl sm:text-4xl lg:text-[42px] text-[#9C6E52] leading-none select-none">
                      Sofía Segura S.
                    </span>
                    <span className="text-[#9C6E52] text-xl transform -translate-y-1">
                      ♡
                    </span>
                  </div>

                  {/* Sello Circular Giratorio con texto perimetral y rama de laurel central */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-full h-full animate-[spin_25s_linear_infinite]" viewBox="0 0 120 120">
                      <defs>
                        <path
                          id="stampCirclePath"
                          d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                        />
                      </defs>
                      <text className="text-[7px] uppercase tracking-[0.16em] fill-[#9C6E52] font-bold font-mono">
                        <textPath href="#stampCirclePath" startOffset="0%">
                          · DERECHO PENAL Y TRÁNSITO · BUENA FE · ECUADOR ·
                        </textPath>
                      </text>
                    </svg>
                    
                    {/* Rama de laurel botánica en el centro del sello */}
                    <div className="absolute inset-0 flex items-center justify-center text-[#9C6E52]">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21V3" />
                        <path d="M12 7c-2-2-5-2-7 0 2 2 5 2 7 0Z" fill="currentColor" fillOpacity="0.2" />
                        <path d="M12 7c2-2 5-2 7 0-2 2-5 2-7 0Z" fill="currentColor" fillOpacity="0.2" />
                        <path d="M12 12c-2-2-5-2-7 0 2 2 5 2 7 0Z" fill="currentColor" fillOpacity="0.2" />
                        <path d="M12 12c2-2 5-2 7 0-2 2-5 2-7 0Z" fill="currentColor" fillOpacity="0.2" />
                        <path d="M12 17c-2-2-5-2-7 0 2 2 5 2 7 0Z" fill="currentColor" fillOpacity="0.2" />
                        <path d="M12 17c2-2 5-2 7 0-2 2-5 2-7 0Z" fill="currentColor" fillOpacity="0.2" />
                      </svg>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 3: "ÁREAS DE ENFOQUE / ESPECIALIDADES" (4 Columnas con Íconos Circulares)
          Estructura y espaciado idéntico a la referencia
          ========================================================================= */}
      <section className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-18 sm:pt-24 pb-16 sm:pb-20">
        
        {/* Cabecera Centrada: ÁREAS DE ENFOQUE / Especialidades */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#9C6E52] uppercase mb-2">
            ÁREAS DE ENFOQUE
          </div>
          <h2 className="font-['Cinzel',serif] text-3xl sm:text-4xl font-bold text-[#1c2237]">
            Especialidades Jurídicas
          </h2>
        </div>

        {/* Cuadrícula de 4 Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Tarjeta 1: Derecho Penal */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/70 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group">
            <div className="w-14 h-14 rounded-full bg-[#1c2237] group-hover:bg-[#9C6E52] text-[#c5a059] group-hover:text-white flex items-center justify-center mb-5 transition-colors shadow-sm">
              <ShieldAlert className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 className="font-['Cinzel',serif] text-sm font-bold text-[#1c2237] uppercase tracking-wider mb-2.5">
              Derecho Penal
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              Defensa en robo, receptación, estafa, secuestro extorsivo, asociación ilícita y delincuencia organizada.
            </p>
          </div>

          {/* Tarjeta 2: Experta en Tránsito y Transporte */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/70 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group">
            <div className="w-14 h-14 rounded-full bg-[#9C6E52] group-hover:bg-[#1c2237] text-white group-hover:text-[#c5a059] flex items-center justify-center mb-5 transition-colors shadow-sm">
              <Scale className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 className="font-['Cinzel',serif] text-sm font-bold text-[#1c2237] uppercase tracking-wider mb-2.5">
              Tránsito & Transporte
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              Experta en accidentes, siniestros y constitución y legalización de compañías de transporte ante la ANT.
            </p>
          </div>

          {/* Tarjeta 3: Derecho Familiar */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/70 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group">
            <div className="w-14 h-14 rounded-full bg-[#1c2237] group-hover:bg-[#9C6E52] text-[#c5a059] group-hover:text-white flex items-center justify-center mb-5 transition-colors shadow-sm">
              <Gavel className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 className="font-['Cinzel',serif] text-sm font-bold text-[#1c2237] uppercase tracking-wider mb-2.5">
              Derecho Familiar
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              Pensiones de alimentos, régimen de visitas, tenencia de menores, divorcios y violencia intrafamiliar.
            </p>
          </div>

          {/* Tarjeta 4: Derecho Laboral */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/70 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group">
            <div className="w-14 h-14 rounded-full bg-[#9C6E52] group-hover:bg-[#1c2237] text-white group-hover:text-[#c5a059] flex items-center justify-center mb-5 transition-colors shadow-sm">
              <Award className="w-6 h-6 stroke-[1.8]" />
            </div>
            <h3 className="font-['Cinzel',serif] text-sm font-bold text-[#1c2237] uppercase tracking-wider mb-2.5">
              Derecho Laboral
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              Despidos intempestivos, trámites de visto bueno, cálculo de liquidaciones y actas de finiquito.
            </p>
          </div>

        </div>

      </section>

      {/* =========================================================================
          SECCIÓN 4: BANNER DE MÉTRICAS Y EXPERIENCIA A ANCHO COMPLETO (FULL-WIDTH)
          Tal cual la imagen 2 de referencia, ocupando todo el ancho de la página
          ========================================================================= */}
      <section className="w-full bg-[#101626] border-y border-[#c5a059]/30 py-12 sm:py-16 relative overflow-hidden">
        
        {/* Marca de agua de laurel / hojas en el extremo izquierdo idéntica a la imagen 2 */}
        <div className="absolute left-0 top-0 bottom-0 w-44 pointer-events-none opacity-10 flex items-center">
          <svg
            className="w-full h-full text-white"
            viewBox="0 0 100 240"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 230 C25 180 30 110 50 10" strokeWidth="2" />
            <path d="M42 35 C55 25 70 30 68 45 C55 50 45 42 42 35 Z" fill="currentColor" />
            <path d="M35 75 C18 68 12 82 22 92 C32 94 36 85 35 75 Z" fill="currentColor" />
            <path d="M38 115 C52 105 66 112 62 126 C50 130 40 122 38 115 Z" fill="currentColor" />
            <path d="M30 155 C14 148 10 162 20 172 C30 174 34 165 30 155 Z" fill="currentColor" />
            <path d="M25 195 C40 185 54 192 50 206 C38 210 28 202 25 195 Z" fill="currentColor" />
          </svg>
        </div>

        {/* Las 4 Columnas de Métricas con divisores verticales en todo el ancho */}
        <div className="w-full max-w-[1480px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/10 items-center text-center">
            
            {/* Métrica 1: Años de Experiencia */}
            <div className="flex flex-col items-center justify-center p-4 sm:p-6">
              <div className="font-['Cinzel',serif] text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight">
                {LAWYER_INFO.yearsExperience}
              </div>
              <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#e5c378] mt-2">
                Años de Experiencia
              </div>
            </div>

            {/* Métrica 2: Causas Atendidas */}
            <div className="flex flex-col items-center justify-center p-4 sm:p-6 pt-6 sm:pt-6">
              <div className="font-['Cinzel',serif] text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight">
                {LAWYER_INFO.statFlagrancies}
              </div>
              <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#e5c378] mt-2">
                Causas & Flagrancias
              </div>
            </div>

            {/* Métrica 3: Efectividad Procesal */}
            <div className="flex flex-col items-center justify-center p-4 sm:p-6 pt-6 sm:pt-6">
              <div className="font-['Cinzel',serif] text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight">
                {LAWYER_INFO.statSuccessRate}
              </div>
              <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#e5c378] mt-2">
                Efectividad Procesal
              </div>
            </div>

            {/* Métrica 4: Disponibilidad Nacional */}
            <div className="flex flex-col items-center justify-center p-4 sm:p-6 pt-6 sm:pt-6">
              <div className="font-['Cinzel',serif] text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight">
                24/7
              </div>
              <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#e5c378] mt-2">
                Disponibilidad Nacional
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* =========================================================================
          SECCIÓN 5: "FEATURED WORK / SELECTED PROJECTS" (Imagen 2 de referencia)
          4 Proyectos destacados en formato horizontal con botón central inferior
          ========================================================================= */}
      <section className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Cabecera Centrada: CASUÍSTICA DESTACADA / Casos & Precedentes Relevantes */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#9C6E52] uppercase mb-2">
            CASUÍSTICA DESTACADA
          </div>
          <h2 className="font-['Cinzel',serif] text-3xl sm:text-4xl font-bold text-[#1c2237]">
            Casos & Precedentes Relevantes
          </h2>
        </div>

        {/* 4 Tarjetas de Proyectos en Cuadrícula */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Proyecto 1: Receptación y Delitos Contra la Propiedad */}
          <div className="flex flex-col text-center group cursor-pointer" onClick={() => onSelectTab('servicios')}>
            <div className="rounded-[22px] overflow-hidden aspect-[4/3] bg-stone-100 shadow-sm group-hover:shadow-md transition-all">
              <img
                src={methodologyInvestigationForensic}
                alt="Defensa penal en receptación y delitos contra la propiedad"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h4 className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-[#1c2237] uppercase tracking-wider mt-4 group-hover:text-[#9C6E52] transition-colors">
              Receptación & Robo
            </h4>
            <p className="text-[11px] text-slate-500 font-medium mt-1">
              Sobreseimiento Definitivo · Defensa de la Propiedad
            </p>
          </div>

          {/* Proyecto 2: Audiencia de Flagrancia 24/7 */}
          <div className="flex flex-col text-center group cursor-pointer" onClick={() => onSelectTab('servicios')}>
            <div className="rounded-[22px] overflow-hidden aspect-[4/3] bg-stone-100 shadow-sm group-hover:shadow-md transition-all">
              <img
                src={profileCaseInvestigation}
                alt="Audiencia de flagrancia y medidas cautelares"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h4 className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-[#1c2237] uppercase tracking-wider mt-4 group-hover:text-[#9C6E52] transition-colors">
              Flagrancias y Detenciones 24/7
            </h4>
            <p className="text-[11px] text-slate-500 font-medium mt-1">
              Medidas Sustitutivas · Libertad Inmediata
            </p>
          </div>

          {/* Proyecto 3: Experta en Tránsito y Siniestros */}
          <div className="flex flex-col text-center group cursor-pointer" onClick={() => onSelectTab('servicios')}>
            <div className="rounded-[22px] overflow-hidden aspect-[4/3] bg-stone-100 shadow-sm group-hover:shadow-md transition-all">
              <img
                src={specialtyTrafficExpert}
                alt="Defensa en materia de tránsito y accidentes"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h4 className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-[#1c2237] uppercase tracking-wider mt-4 group-hover:text-[#9C6E52] transition-colors">
              Delitos y Siniestros de Tránsito
            </h4>
            <p className="text-[11px] text-slate-500 font-medium mt-1">
              Peritajes Mecánicos · Reparación Integral
            </p>
          </div>

          {/* Proyecto 4: Legalización de Compañías de Transporte */}
          <div className="flex flex-col text-center group cursor-pointer" onClick={() => onSelectTab('servicios')}>
            <div className="rounded-[22px] overflow-hidden aspect-[4/3] bg-stone-100 shadow-sm group-hover:shadow-md transition-all">
              <img
                src={methodologyTransportAudit}
                alt="Constitución y legalización de compañías de transporte"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h4 className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-[#1c2237] uppercase tracking-wider mt-4 group-hover:text-[#9C6E52] transition-colors">
              Compañías de Transporte
            </h4>
            <p className="text-[11px] text-slate-500 font-medium mt-1">
              Constitución & Trámites ante la ANT
            </p>
          </div>

        </div>

        {/* Botón Central Inferior: VIEW ALL PROJECTS -> VER TODAS LAS ESPECIALIDADES */}
        <div className="flex justify-center">
          <button
            onClick={() => {
              onSelectTab('servicios');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-3.5 rounded-full bg-[#1c2237] hover:bg-[#9C6E52] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 group"
          >
            <span>Ver Todas las Especialidades</span>
            <ArrowRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </section>

      {/* =========================================================================
          SECCIÓN 6: FORMACIÓN ACADÉMICA & TRAYECTORIA (ESTILO EDITORIAL LAWFY)
          Estructura de 3 columnas: Editorial + Stack de 3 credenciales + Retrato formal con tarjeta
          ========================================================================= */}
      <section className="relative w-full bg-white border-t border-stone-200/80 py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Resplandores dorados sutiles en el fondo */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-[#9C6E52]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
            
            {/* -------------------------------------------------------------
                COLUMNA 1 (IZQUIERDA - 5 COLS): ENCABEZADO, LETRA CAPITULAR, CITA Y BOTÓN
                ------------------------------------------------------------- */}
            <div className="lg:col-span-5 flex flex-col justify-between text-left">
              <div>
                {/* Rótulo superior con balanza */}
                <div className="flex items-center gap-2 mb-3">
                  <Scale className="w-4 h-4 text-[#9C6E52]" />
                  <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#9C6E52] uppercase">
                    FORMACIÓN & TRAYECTORIA ACADÉMICA
                  </span>
                </div>

                {/* Titular Editorial en Cinzel */}
                <h3 className="font-['Cinzel',serif] text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1c2237] leading-[1.15] mb-5">
                  Posgrados & Rigor <br />
                  <span className="font-['Playfair_Display',serif] italic font-normal text-[#9C6E52]">
                    en Litigio Penal y Tránsito
                  </span>
                </h3>

                {/* Párrafo con Letra Capitular (Drop-Cap) */}
                <div className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-6 clearfix">
                  <span className="float-left font-['Cinzel',serif] text-5xl sm:text-6xl font-bold text-[#1c2237] leading-[0.8] mr-3 mt-1 select-none">
                    L
                  </span>
                  a formación académica de cuarto nivel y la preparación constante constituyen el pilar fundamental sobre el que edificamos cada estrategia de defensa. Con más de 5 años de experiencia profesional, la <strong>{LAWYER_INFO.name}</strong> combina la solidez de su formación de grado en la <strong>{LAWYER_INFO.academicFormation}</strong> con <strong>Maestrías en Derecho Procesal Penal y Derecho Constitucional</strong> por la <strong>Universidad Casa Grande</strong>, consolidando su trayectoria como especialista litigante en todo el Ecuador.
                </div>

                {/* Bloque de Cita con Comillas y Firma Cursiva */}
                <div className="flex items-start gap-3 sm:gap-4 mb-7 bg-stone-50/80 p-4 sm:p-5 rounded-2xl border-l-2 border-[#9C6E52]">
                  <span className="font-serif text-4xl sm:text-5xl leading-none text-[#9C6E52]/40 select-none">“</span>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-800 text-sm sm:text-base leading-snug mb-2.5">
                      Defensa técnica de alto impacto fundamentada en la dogmática penal, garantías constitucionales y control probatorio.
                    </p>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="font-['Alex_Brush',cursive] text-2xl sm:text-3xl text-[#9C6E52] tracking-wide">
                        Sofía Segura S.
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">
                        — {LAWYER_INFO.title}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón Píldora con Flecha Circular Incrustada */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    onSelectTab('servicios');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-4 pl-6 pr-2 py-2 rounded-full bg-[#1c2237] hover:bg-[#9C6E52] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg group"
                >
                  <span>Ver Especialidades</span>
                  <div className="w-8 h-8 rounded-full bg-[#9C6E52] group-hover:bg-[#1c2237] flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5" />
                  </div>
                </button>
              </div>
            </div>

            {/* -------------------------------------------------------------
                COLUMNA 2 (CENTRAL - 4 COLS): STACK DE 3 TARJETAS CON BADGES CIRCULARES
                ------------------------------------------------------------- */}
            <div className="lg:col-span-4 flex flex-col justify-between pl-4 sm:pl-6">
              <div className="relative rounded-2xl shadow-xl border border-stone-200/80 bg-white flex flex-col justify-between overflow-visible h-full">
                
                {/* Tarjeta 1: Superior (Marrón Cognac #9C6E52 con texto blanco) */}
                <div className="relative bg-[#9C6E52] text-white p-6 sm:p-7 rounded-t-2xl pl-12 sm:pl-14">
                  {/* Badge Circular Izquierdo Superpuesto (Blanco con ícono marrón) */}
                  <div className="absolute -left-6 sm:-left-7 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-[#9C6E52] shadow-lg flex items-center justify-center border-2 border-stone-100">
                    <Award className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-amber-200/90 mb-1 font-bold">
                    Cuarto Nivel de Posgrado
                  </div>
                  <h4 className="font-['Cinzel',serif] text-lg sm:text-xl font-bold text-white mb-2 leading-tight">
                    Maestrías en Universidad Casa Grande
                  </h4>
                  <p className="text-white/90 text-xs sm:text-[13px] leading-relaxed">
                    • Maestría en Derecho Procesal Penal<br />
                    • Maestría en Derecho Constitucional<br />
                    Especialización avanzada en teoría del delito, litigación oral adversarial y garantías jurisdiccionales.
                  </p>
                </div>

                {/* Tarjeta 2: Intermedia (Blanca con badge marrón) */}
                <div className="relative bg-white text-slate-800 p-6 sm:p-7 border-t border-stone-100 pl-12 sm:pl-14">
                  {/* Badge Circular Izquierdo Superpuesto (Marrón con ícono blanco) */}
                  <div className="absolute -left-6 sm:-left-7 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#9C6E52] text-white shadow-lg flex items-center justify-center border-2 border-white">
                    <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#9C6E52] mb-1 font-bold">
                    Tercer Nivel de Grado
                  </div>
                  <h4 className="font-['Cinzel',serif] text-lg sm:text-xl font-bold text-[#1c2237] mb-2 leading-tight">
                    Uniandes
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                    Universidad Autónoma Regional de Los Andes.<br />
                    <strong className="text-slate-800">Foro de Abogados del Consejo de la Judicatura</strong> del Ecuador con habilitación profesional plena.
                  </p>
                </div>

                {/* Tarjeta 3: Inferior (Blanca con badge marrón) */}
                <div className="relative bg-white text-slate-800 p-6 sm:p-7 border-t border-stone-100 rounded-b-2xl pl-12 sm:pl-14">
                  {/* Badge Circular Izquierdo Superpuesto (Marrón con ícono blanco) */}
                  <div className="absolute -left-6 sm:-left-7 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#9C6E52] text-white shadow-lg flex items-center justify-center border-2 border-white">
                    <Landmark className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#9C6E52] mb-1 font-bold">
                    Experiencia & Especialidad
                  </div>
                  <h4 className="font-['Cinzel',serif] text-lg sm:text-xl font-bold text-[#1c2237] mb-2 leading-tight">
                    {LAWYER_INFO.yearsExperience} Años de Experiencia
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                    Experta en Derecho Penal y Tránsito. Litigio oral efectivo en flagrancias, delitos patrimoniales, transporte, laboral y derecho familiar.
                  </p>
                </div>

              </div>
            </div>

            {/* -------------------------------------------------------------
                COLUMNA 3 (DERECHA - 3 COLS): RETRATO FORMAL CON TARJETA DE CONTACTO OSCURA
                ------------------------------------------------------------- */}
            <div className="lg:col-span-3 relative flex flex-col justify-end">
              {/* Contenedor principal con foto y tarjeta superpuesta */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#101626] border border-stone-200/40 flex flex-col justify-end h-full min-h-[480px] sm:min-h-[520px]">
                {/* Imagen de Sofía en traje formal */}
                <img
                  src={portraitFormal}
                  alt="Ab. Sofía Segura Santana"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                
                {/* Degradado para transición suave con la tarjeta de contacto */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101626] via-[#101626]/40 to-transparent pointer-events-none" />

                {/* Tarjeta de Contacto de Vidrio Oscuro (Glassmorphism) */}
                <div className="relative z-10 p-5 bg-[#101626]/90 backdrop-blur-md border-t border-white/10 text-white rounded-b-2xl">
                  {/* Teléfono y Email */}
                  <div className="text-[12px] sm:text-xs font-mono space-y-1 mb-3 text-stone-200">
                    <div>
                      <span className="text-stone-400">Tel: </span>
                      <a href={`tel:+${LAWYER_INFO.phones[0]?.raw || '593998203766'}`} className="hover:text-[#C5A059] transition-colors font-semibold">
                        {LAWYER_INFO.phones[0]?.display || '099 820 3766'}
                      </a>
                    </div>
                    <div>
                      <span className="text-stone-400">Email: </span>
                      <a href={`mailto:${LAWYER_INFO.email}`} className="hover:text-[#C5A059] transition-colors font-semibold">
                        {LAWYER_INFO.email}
                      </a>
                    </div>
                    <div className="text-[11px] text-[#e5c378] pt-1">
                      <span>Oficina: {LAWYER_INFO.scheduleOffice}</span>
                    </div>
                  </div>

                  {/* Rótulo de Contacto */}
                  <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#C5A059] uppercase mb-2.5">
                    TELÉFONO 24 HORAS (URGENCIAS)
                  </div>

                  {/* Fila de Botones de Acción */}
                  <div className="flex items-center gap-2">
                    <a
                      href={`https://wa.me/${LAWYER_INFO.phones[0]?.raw || '593998203766'}?text=${encodeURIComponent(LAWYER_INFO.whatsappMessageUrgent)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Contactar por WhatsApp"
                      className="w-8 h-8 rounded bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-colors group"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-white" />
                    </a>
                    <a
                      href={`tel:+${LAWYER_INFO.phones[0]?.raw || '593998203766'}`}
                      title="Llamada Telefónica Directa"
                      className="w-8 h-8 rounded bg-white/10 hover:bg-[#9C6E52] text-white flex items-center justify-center transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={onOpenEmergencyModal}
                      title="Solicitar Auxilio Legal Inmediato"
                      className="px-3 h-8 rounded bg-[#9C6E52] hover:bg-[#855B41] text-white text-[11px] font-bold tracking-wider uppercase flex items-center justify-center transition-colors ml-auto shadow-sm"
                    >
                      SOS Penal
                    </button>
                  </div>
                </div>
              </div>

              {/* Azulejos decorativos en la esquina inferior derecha (sello del diseño Lawfy) */}
              <div className="absolute -bottom-2 -right-2 w-9 h-9 bg-[#9C6E52] rounded-md -z-10 pointer-events-none hidden sm:block shadow-sm" />
              <div className="absolute -bottom-4 -right-4 w-7 h-7 bg-[#C5A059] rounded-md -z-20 pointer-events-none opacity-80 hidden sm:block shadow-sm" />
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 7: "✦ WHY CHOOSE LIVORA?" STYLE (¿POR QUÉ ELEGIR NUESTRO PATROCINIO?)
          Diseño horizontal exacto a la primera imagen con 4 pilares en fila
          ========================================================================= */}
      <section className="w-full bg-[#FAF5EE] border-t border-stone-200/80 py-14 sm:py-16">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Columna Izquierda: Rótulo + Titular Editorial (2 líneas) */}
            <div className="lg:col-span-4 flex flex-col items-start text-left">
              <div className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#9C6E52] uppercase mb-2 flex items-center gap-1.5">
                <span className="text-[#C5A059]">✦</span>
                <span>¿POR QUÉ ELEGIRNOS?</span>
              </div>
              <h2 className="font-['Cinzel',serif] text-3xl sm:text-4xl font-bold text-[#1c2237] leading-[1.12]">
                Defensa con <br />
                <span className="font-['Playfair_Display',serif] italic font-normal text-[#9C6E52]">
                  propósito
                </span>
              </h2>
            </div>

            {/* Columna Derecha: 4 Pilares Horizontales en Fila con Íconos Lineales */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-6 items-start">
              
              {/* Pilar 1: Timeless Design -> Rigor Dogmático */}
              <div className="flex items-start gap-3.5 text-left group">
                <div className="w-10 h-10 rounded-xl bg-white border border-stone-200/90 shadow-sm flex items-center justify-center text-[#9C6E52] flex-shrink-0 group-hover:border-[#9C6E52] transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="6" width="18" height="15" rx="3" />
                    <path d="M12 11L14 13.5L12 16L10 13.5Z" />
                    <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-['Cinzel',serif] text-xs sm:text-[13px] font-bold text-[#1c2237] leading-tight mb-1">
                    Rigor Dogmático
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-snug font-normal">
                    Análisis procesal y sustantivo de máxima precisión técnica.
                  </p>
                </div>
              </div>

              {/* Pilar 2: Built to Last -> Lealtad Procesal */}
              <div className="flex items-start gap-3.5 text-left group">
                <div className="w-10 h-10 rounded-xl bg-white border border-stone-200/90 shadow-sm flex items-center justify-center text-[#9C6E52] flex-shrink-0 group-hover:border-[#9C6E52] transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L4 6v6c0 5.5 3.5 10.5 8 12 4.5-1.5 8-6.5 8-12V6l-8-4Z" />
                    <circle cx="12" cy="11" r="2.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-['Cinzel',serif] text-xs sm:text-[13px] font-bold text-[#1c2237] leading-tight mb-1">
                    Lealtad Procesal
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-snug font-normal">
                    Ética inquebrantable y confidencialidad con el justiciable.
                  </p>
                </div>
              </div>

              {/* Pilar 3: Sustainable Choice -> Estrategia Blindada */}
              <div className="flex items-start gap-3.5 text-left group">
                <div className="w-10 h-10 rounded-xl bg-white border border-stone-200/90 shadow-sm flex items-center justify-center text-[#9C6E52] flex-shrink-0 group-hover:border-[#9C6E52] transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M7 17L17 7" />
                    <path d="M8 8c1-1 3.5-1 5 1s2 4 1 5" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-['Cinzel',serif] text-xs sm:text-[13px] font-bold text-[#1c2237] leading-tight mb-1">
                    Estrategia Blindada
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-snug font-normal">
                    Teoría del caso sustentada ante fiscalía y tribunales.
                  </p>
                </div>
              </div>

              {/* Pilar 4: Made for You -> Atención a Medida */}
              <div className="flex items-start gap-3.5 text-left group">
                <div className="w-10 h-10 rounded-xl bg-white border border-stone-200/90 shadow-sm flex items-center justify-center text-[#9C6E52] flex-shrink-0 group-hover:border-[#9C6E52] transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="7" r="3" />
                    <circle cx="7" cy="16" r="3" />
                    <circle cx="17" cy="16" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-['Cinzel',serif] text-xs sm:text-[13px] font-bold text-[#1c2237] leading-tight mb-1">
                    Atención a Medida
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-snug font-normal">
                    Acompañamiento personal y disponibilidad nacional 24/7.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 8: BANNER DE CONTACTO / CONSULTA A ANCHO COMPLETO (FULL-WIDTH)
          Mascara derecha de altura completa (top-0 bottom-0 right-0) apegada a la derecha
          ========================================================================= */}
      <section className="w-full bg-[#FAF5EE] pt-8 sm:pt-12 pb-0 m-0 overflow-hidden">
        <div className="relative w-full bg-[#F4EDE4] border-t border-stone-200/80 m-0 p-0 overflow-hidden">
          
          {/* Contenedor de Texto y Formulario a la izquierda y centro */}
          <div className="w-full max-w-[1480px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 py-12 sm:py-16 lg:py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Columna Izquierda: Titular y Párrafo */}
              <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start text-left">
                <h3 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#1c2237] leading-[1.12] mb-3">
                  Evaluación Estratégica <br />
                  <span className="font-['Playfair_Display',serif] italic font-normal text-[#9C6E52]">
                    de su Caso Penal
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-md">
                  Agende su consulta preliminar confidencial y reciba una valoración técnica y objetiva sobre su situación procesal.
                </p>
              </div>

              {/* Columna Central: Campo Input Píldora con Botón Integrado (idéntico a la imagen 2) */}
              <div className="lg:col-span-4 xl:col-span-4 flex justify-start lg:justify-center w-full">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!contactInput.trim()) return;
                    setContactSubmitted(true);
                    const whatsappMsg = `Estimada Ab. Sofía Segura, solicito una consulta estratégica. Mis datos de contacto son: ${contactInput}`;
                    window.open(`https://wa.me/${LAWYER_INFO.phones[0].raw}?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
                  }}
                  className="w-full max-w-md bg-white rounded-full p-1.5 pl-5 sm:pl-6 shadow-sm border border-stone-200/90 flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={contactInput}
                    onChange={(e) => setContactInput(e.target.value)}
                    placeholder="Ingresa tu teléfono o WhatsApp..."
                    className="bg-transparent text-xs sm:text-sm text-slate-700 placeholder-slate-400 focus:outline-none flex-1 min-w-0"
                  />
                  <button
                    type="submit"
                    className="px-6 sm:px-7 py-3 rounded-full bg-[#1c2237] hover:bg-[#9C6E52] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5 flex-shrink-0 group"
                  >
                    <span>{contactSubmitted ? 'Enviado' : 'Consultar'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              </div>

              {/* Espacio reservado para columnas en desktop para que el contenido no tape la imagen */}
              <div className="hidden lg:block lg:col-span-3 xl:col-span-3" />

            </div>
          </div>

          {/* Máscara Orgánica Derecha de Altura Completa: Topa verticalmente de arriba a abajo y se apega a la pestaña derecha */}
          <div className="absolute right-0 top-0 bottom-0 w-[45%] sm:w-[40%] lg:w-[32%] xl:w-[35%] rounded-l-[140px] sm:rounded-l-[220px] lg:rounded-l-[280px] overflow-hidden border-l-2 border-white/80 shadow-lg pointer-events-none hidden sm:block">
            <img
              src={lawLibraryPrestige}
              alt="Biblioteca jurídica y balanza de justicia"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
          </div>

        </div>
      </section>

    </div>
  );
};