import React, { useState } from 'react';
import {
  Phone,
  Scale,
  Award,
  ArrowRight,
  Play,
  X,
  Check,
  FileSearch,
  FolderSearch,
  CheckSquare,
  FileCheck,
  ShieldAlert,
  Briefcase,
  Lock,
  Gavel,
  MessageSquare
} from 'lucide-react';
import type { TabKey } from '../components/Header';
import { LAWYER_INFO } from '../data/legalData';

// Images
import heroMethodologyBg from '../assets/images/hero-methodology-bg.jpg';
import legalTeamMeeting from '../assets/images/legal-team-meeting.jpg';
import clientAvatar1 from '../assets/images/client-avatar-1.jpg';
import clientAvatar2 from '../assets/images/client-avatar-2.jpg';
import clientAvatar3 from '../assets/images/client-avatar-3.jpg';
import profileCaseInvestigation from '../assets/images/profile-case-investigation.jpg';
import methodologyInvestigationForensic from '../assets/images/methodology-investigation-forensic.jpg';
import methodologyOralTrial from '../assets/images/methodology-oral-trial.jpg';
import methodologyTrafficForensic from '../assets/images/methodology-traffic-forensic.jpg';
import methodologyTransportAudit from '../assets/images/methodology-transport-audit.jpg';
import methodologyMediationTable from '../assets/images/methodology-mediation-table.jpg';
import lawLibraryPrestige from '../assets/images/law-library-prestige.jpg';

interface MethodologyTabProps {
  onOpenEmergencyModal: () => void;
  onSelectTab?: (tab: TabKey) => void;
}

interface SpecialtyModalData {
  id: string;
  title: string;
  badge: string;
  description: string;
  details: string[];
  image: string;
  icon: React.ElementType;
}

export const MethodologyTab: React.FC<MethodologyTabProps> = ({
  onOpenEmergencyModal,
  onSelectTab
}) => {
  const [selectedPillar, setSelectedPillar] = useState<SpecialtyModalData | null>(null);

  // 6 Pilares Metodológicos para las Cards con Techo en Arco (Sección 4)
  const PILLARS: SpecialtyModalData[] = [
    {
      id: 'flagrancias',
      title: 'Defensa en Flagrancias 24/7',
      badge: 'URGENCIA PENAL',
      description:
        'Intervención letrada inmediata en las primeras 24 horas críticas ante Fiscalía y Unidad Judicial para calificar la legalidad de la aprehensión y evitar la prisión preventiva.',
      details: [
        'Calificación constitucional de la aprehensión',
        'Sustitución fundamentada de prisión preventiva',
        'Asistencia en versiones preliminares en Fiscalía',
        'Hábeas corpus correctivo en caso de detención ilegítima'
      ],
      image: profileCaseInvestigation,
      icon: ShieldAlert
    },
    {
      id: 'delitos-propiedad',
      title: 'Robo, Receptación & Estafa',
      badge: 'PATRIMONIAL',
      description:
        'Construcción rigurosa de la teoría del caso en delitos contra la propiedad, desvirtuación de dolo, impugnación de evidencias y litigación oral en juzgamiento.',
      details: [
        'Defensa en robo simple y agravado',
        'Patrocinio técnico en causas de receptación',
        'Defensa penal económica en estafas y abusos de confianza',
        'Audiencias de sobreseimiento y juicio penal'
      ],
      image: methodologyInvestigationForensic,
      icon: Scale
    },
    {
      id: 'delincuencia-organizada',
      title: 'Delincuencia Organizada & Secuestro',
      badge: 'DELITOS COMPLEJOS',
      description:
        'Estrategia jurídica de alta complejidad en imputaciones por asociación ilícita, delincuencia organizada, secuestro y secuestro extorsivo ante tribunales de garantías penales.',
      details: [
        'Asociación ilícita y presunta concertación',
        'Secuestro y secuestro extorsivo',
        'Exclusión probatoria de escuchas o peritajes irregulares',
        'Defensa técnica en investigación previa e instrucción fiscal'
      ],
      image: methodologyOralTrial,
      icon: Briefcase
    },
    {
      id: 'materia-transito',
      title: 'Experta en Derecho de Tránsito',
      badge: 'TRÁNSITO & SINIESTROS',
      description:
        'Defensa técnica especializada en accidentes de tránsito con daños o lesiones, peritajes mecánicos del SIAT/OIAT e impugnación de citaciones.',
      details: [
        'Audiencias de flagrancia por siniestros viales',
        'Impugnación de peritajes técnicos y reconstrucción de hechos',
        'Reparación integral y acuerdos conciliatorios oportunos',
        'Impugnación de boletas y multas de tránsito'
      ],
      image: methodologyTrafficForensic,
      icon: Lock
    },
    {
      id: 'companias-transporte',
      title: 'Compañías de Transporte',
      badge: 'TRANSPORTE & ANT',
      description:
        'Constitución, legalización, reformas estatutarias y obtención de permisos de operación de operadoras y cooperativas de transporte terrestre.',
      details: [
        'Constitución y formalización legal ante la Superintendencia',
        'Trámites de permisos de operación ante la ANT y GADs',
        'Reformas estatutarias y aumentos de capital de operadoras',
        'Asesoría integral a socios y cooperativas de transporte'
      ],
      image: methodologyTransportAudit,
      icon: FileCheck
    },
    {
      id: 'familia-laboral',
      title: 'Derecho Familiar & Laboral',
      badge: 'FAMILIA & LABORAL',
      description:
        'Patrocinio legal en controversias de derecho de familia (pensiones de alimentos, tenencia, divorcios, violencia) y defensa laboral en despidos y vistos buenos.',
      details: [
        'Fijación, rebaja y aumento de pensiones de alimentos',
        'Régimen de visitas, tenencia y violencia intrafamiliar',
        'Despidos intempestivos e indemnizaciones laborales',
        'Trámites de visto bueno y actas de finiquito'
      ],
      image: methodologyMediationTable,
      icon: Gavel
    }
  ];

  const handleContactClick = () => {
    if (onSelectTab) {
      onSelectTab('contacto');
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-white text-slate-800 flex flex-col selection:bg-[#c5a059] selection:text-white">
      {/* =========================================================================
          SECCIÓN 1: HERO PRINCIPAL CON IMAGEN DE FONDO COMPLETO
          (IMAGEN GENERADA EN TODO EL FONDO CON FOCO A LA DERECHA Y TEXTO DESTACADO A LA IZQUIERDA)
          ========================================================================= */}
      <section className="w-full relative overflow-hidden bg-[#0a0d14] text-white min-h-[600px] sm:min-h-[640px] lg:min-h-[700px] flex items-center border-b border-[#c5a059]/20">
        
        {/* IMAGEN GENERADA: Ocupa el 100% del fondo con su contenido principal enfocado a la DERECHA */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={heroMethodologyBg}
            alt="Defensa Penal Estratégica en Despacho"
            className="w-full h-full object-cover object-right pointer-events-none"
          />
          {/* Capa de atenuación al 50% en el lado derecho tal cual solicitado */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-3/5 bg-[#0a0d14]/50 pointer-events-none" />
          {/* Overlay en degradado desde la izquierda para que el texto superpuesto destaque con máxima legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0d14] via-[#0a0d14]/90 sm:via-[#0a0d14]/80 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-transparent to-black/40 pointer-events-none" />
        </div>

        {/* Marca de agua vertical izquierda: "JUSTICIA" con flecha triangular */}
        <div className="hidden 2xl:flex absolute left-6 bottom-16 flex-col items-center select-none pointer-events-none z-10 opacity-30">
          <span className="font-['Cinzel',serif] text-7xl font-black text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.45)] tracking-[0.25em] [writing-mode:vertical-rl] rotate-180">
            JUSTICIA
          </span>
          <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[14px] border-t-[#c5a059] mt-6" />
        </div>

        {/* Contenido Superpuesto en el Lado Izquierdo */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Columna Izquierda (8 cols): Texto destacado */}
            <div className="lg:col-span-8 flex flex-col items-start text-left">
              
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest text-[#e5c378] uppercase mb-4">
                <span>— ¡BIENVENIDO A DEFENSA PENAL ESTRATÉGICA! —</span>
              </div>

              <h1 className="font-['Cinzel',serif] text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.18] tracking-tight mb-6 max-w-2xl drop-shadow-md">
                Obtenga nuestra{' '}
                <span className="relative inline-block text-[#e5c378] border-b-4 border-[#c5a059] pb-1">
                  solución penal
                </span>{' '}
                para su tranquilidad
              </h1>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl mb-8 font-normal drop-shadow">
                Metodología probatoria y procesal rigurosa. Protegemos su libertad, reputación y garantías
                constitucionales con criterio dogmático, ética intachable y litigación oral de alto nivel en todo el Ecuador.
              </p>

              {/* Fila de Botón Dorado + 4 Círculos de Contacto */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                
                {/* Botón Principal */}
                <button
                  onClick={handleContactClick}
                  className="px-8 py-3.5 rounded-xl bg-[#c5a059] hover:bg-[#d4af37] text-slate-950 font-black text-xs uppercase tracking-wider shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Contactar Ahora</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* 4 Iconos Circulares de Redes/Contacto con fondo blanco tal cual Imagen 1 */}
                <div className="flex items-center gap-2.5">
                  <a
                    href={`https://wa.me/${LAWYER_INFO.phones[0].raw}?text=${encodeURIComponent(LAWYER_INFO.whatsappMessageUrgent)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white text-slate-900 hover:bg-[#25D366] hover:text-white flex items-center justify-center shadow-md transition-all transform hover:scale-110"
                    aria-label="WhatsApp Urgente"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>

                  <a
                    href={`tel:+${LAWYER_INFO.phones[0].raw}`}
                    className="w-10 h-10 rounded-full bg-white text-slate-900 hover:bg-[#c5a059] hover:text-white flex items-center justify-center shadow-md transition-all transform hover:scale-110"
                    aria-label="Llamada Telefónica"
                  >
                    <Phone className="w-4 h-4" />
                  </a>

                  <button
                    onClick={onOpenEmergencyModal}
                    className="w-10 h-10 rounded-full bg-white text-slate-900 hover:bg-red-600 hover:text-white flex items-center justify-center shadow-md transition-all transform hover:scale-110 cursor-pointer"
                    aria-label="Emergencia Flagrancia"
                    title="Urgencia Flagrancia"
                  >
                    <ShieldAlert className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleContactClick}
                    className="w-10 h-10 rounded-full bg-white text-slate-900 hover:bg-[#101626] hover:text-[#e5c378] flex items-center justify-center shadow-md transition-all transform hover:scale-110 cursor-pointer"
                    aria-label="Agendar Cita"
                    title="Agendar Cita"
                  >
                    <Scale className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>

            {/* Columna Derecha vacía: se removió el bloque flotante para dar protagonismo a la escena atenuada */}
            <div className="hidden lg:block lg:col-span-4" />

          </div>
        </div>

        {/* Franja decorativa inferior azul/blanco */}
        <div className="absolute bottom-0 right-0 w-3/4 max-w-4xl h-3.5 bg-gradient-to-r from-transparent via-[#c5a059] to-white rounded-t-lg pointer-events-none" />
      </section>

      {/* =========================================================================
          SECCIÓN 2: NUESTRO PROCESO EN 4 ETAPAS
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full text-center relative">
        
        <div className="flex items-center justify-center gap-3 text-xs font-bold tracking-widest text-[#aa8640] uppercase mb-3">
          <span className="w-8 h-[1px] bg-[#c5a059]" />
          <span>ESTADO DE NUESTRO PATROCINIO</span>
          <span className="w-8 h-[1px] bg-[#c5a059]" />
        </div>

        <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101626] mb-16">
          El éxito de nuestra <span className="text-[#c5a059]">metodología procesal</span>
        </h2>

        {/* Rejilla de 4 Fases con Líneas Curvas Discontinuas entre Pasos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative items-start">
          
          {/* Paso 01 */}
          <div className="flex flex-col items-center text-center relative group">
            <span className="text-6xl font-black text-slate-100 font-mono select-none -mb-6 z-0 group-hover:text-[#c5a059]/15 transition-colors">
              01
            </span>

            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-slate-50 to-white border-2 border-[#c5a059]/50 shadow-md text-[#aa8640] flex items-center justify-center z-10 mb-5 group-hover:bg-[#101626] group-hover:text-[#e5c378] group-hover:scale-105 transition-all duration-300">
              <FileSearch className="w-9 h-9" />
            </div>

            <h3 className="font-['Cinzel',serif] text-base font-bold text-[#101626] mb-2 leading-snug">
              Auditoría y Diagnóstico
            </h3>

            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              Revisión técnica de la aprehensión, elementos de convicción de Fiscalía y detección de nulidades procesales.
            </p>

            <svg
              className="hidden lg:block absolute -right-12 top-14 w-20 h-10 text-[#c5a059]/50 pointer-events-none"
              viewBox="0 0 100 40"
              fill="none"
            >
              <path d="M 5 25 Q 50 0 95 25" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
            </svg>
          </div>

          {/* Paso 02 */}
          <div className="flex flex-col items-center text-center relative group">
            <span className="text-6xl font-black text-slate-100 font-mono select-none -mb-6 z-0 group-hover:text-[#c5a059]/15 transition-colors">
              02
            </span>

            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-slate-50 to-white border-2 border-[#c5a059]/50 shadow-md text-[#aa8640] flex items-center justify-center z-10 mb-5 group-hover:bg-[#101626] group-hover:text-[#e5c378] group-hover:scale-105 transition-all duration-300">
              <FolderSearch className="w-9 h-9" />
            </div>

            <h3 className="font-['Cinzel',serif] text-base font-bold text-[#101626] mb-2 leading-snug">
              Teoría del Caso
            </h3>

            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              Estructuración dogmática de tipicidad, antijuridicidad y formulación de una hipótesis defensiva contrastable.
            </p>

            <svg
              className="hidden lg:block absolute -right-12 top-14 w-20 h-10 text-[#c5a059]/50 pointer-events-none"
              viewBox="0 0 100 40"
              fill="none"
            >
              <path d="M 5 25 Q 50 0 95 25" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
            </svg>
          </div>

          {/* Paso 03 */}
          <div className="flex flex-col items-center text-center relative group">
            <span className="text-6xl font-black text-slate-100 font-mono select-none -mb-6 z-0 group-hover:text-[#c5a059]/15 transition-colors">
              03
            </span>

            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-slate-50 to-white border-2 border-[#c5a059]/50 shadow-md text-[#aa8640] flex items-center justify-center z-10 mb-5 group-hover:bg-[#101626] group-hover:text-[#e5c378] group-hover:scale-105 transition-all duration-300">
              <Scale className="w-9 h-9" />
            </div>

            <h3 className="font-['Cinzel',serif] text-base font-bold text-[#101626] mb-2 leading-snug">
              Pruebas & Peritajes
            </h3>

            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              Producción de peritajes forenses independientes y preparación técnica de testigos y contrainterrogatorios.
            </p>

            <svg
              className="hidden lg:block absolute -right-12 top-14 w-20 h-10 text-[#c5a059]/50 pointer-events-none"
              viewBox="0 0 100 40"
              fill="none"
            >
              <path d="M 5 25 Q 50 0 95 25" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
            </svg>
          </div>

          {/* Paso 04 */}
          <div className="flex flex-col items-center text-center relative group">
            <span className="text-6xl font-black text-slate-100 font-mono select-none -mb-6 z-0 group-hover:text-[#c5a059]/15 transition-colors">
              04
            </span>

            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-slate-50 to-white border-2 border-[#c5a059]/50 shadow-md text-[#aa8640] flex items-center justify-center z-10 mb-5 group-hover:bg-[#101626] group-hover:text-[#e5c378] group-hover:scale-105 transition-all duration-300">
              <Award className="w-9 h-9" />
            </div>

            <h3 className="font-['Cinzel',serif] text-base font-bold text-[#101626] mb-2 leading-snug">
              Litigación & Resultados
            </h3>

            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              Defensa técnica contundente en juicio oral, alegatos de clausura y recursos extraordinarios de apelación y casación.
            </p>
          </div>

        </div>

      </section>

      {/* =========================================================================
          SECCIÓN 3: CONTENEDOR HORIZONTAL CON FOTO SUPERPUESTA DE LA ABOGADA Y TEXTO DIRECTO
          (UN CONTENEDOR HORIZONTAL CON CONTENEDOR CUADRADO SUPERPUESTO CON LA FOTO DE LA ABOGADA,
          Y EL TEXTO EN EL LADO DERECHO DIRECTAMENTE ENCIMA DEL CONTENEDOR HORIZONTAL SIN CONTENEDORES EXTERNOS)
          ========================================================================= */}
      <section className="w-full py-16 sm:py-20 lg:py-28 bg-white relative overflow-visible">
        
        {/* EL CONTENEDOR HORIZONTAL */}
        <div className="relative w-full bg-[#0a0d14] text-white min-h-[360px] lg:min-h-[400px] flex items-center overflow-visible shadow-xl border-y border-[#c5a059]/30">
          
          {/* Esquina superior derecha con corte diagonal y cuña dorada de la firma */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-[#c5a059] [clip-path:polygon(0_0,100%_0,100%_100%)] z-10 pointer-events-none" />

          {/* ONDA FLUIDA ORGÁNICA DORADA EN EL BORDE IZQUIERDO DEL CONTENEDOR HORIZONTAL */}
          <div className="absolute left-0 top-0 bottom-0 w-[180px] sm:w-[260px] lg:w-[320px] pointer-events-none z-0 overflow-hidden">
            <svg
              className="w-full h-full"
              viewBox="0 0 320 600"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M 0,0 L 160,0 C 260,110 260,190 170,280 C 80,370 80,450 240,530 L 240,600 L 0,600 Z"
                fill="#c5a059"
                fillOpacity="0.85"
              />
            </svg>
          </div>

          {/* Anillos concéntricos dorados con resplandor suave en el fondo derecho del contenedor horizontal */}
          <div className="absolute right-0 top-0 bottom-0 w-full sm:w-1/2 pointer-events-none overflow-hidden z-0">
            <div className="absolute right-[-30px] top-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-[#c5a059]/20" />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-[#c5a059]/30" />
            <div className="absolute right-20 top-1/2 -translate-y-1/2 w-36 h-36 rounded-full border border-[#e5c378]/35" />
            <div className="absolute right-28 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#c5a059]/20 blur-xl" />
          </div>

          {/* CONTENIDO INTERNO: Centrado con Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* CONTENEDOR CUADRADO SUPERPUESTO (FOTOGRAFÍA REFERENCIAL DE ANÁLISIS JURÍDICO QUE SOBRESALE ARRIBA Y ABAJO) */}
              <div className="lg:col-span-5 relative flex justify-center lg:justify-start z-20">
                <div className="relative w-full max-w-[390px] h-[380px] sm:h-[420px] lg:h-[480px] lg:-my-24 rounded-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border-2 border-[#c5a059]/60 bg-[#0a0d14] group">
                  <img
                    src={legalTeamMeeting}
                    alt="Estrategia y Análisis de Expedientes en Mesa de Trabajo"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Pequeño círculo dorado decorativo en la esquina inferior */}
                  <div className="absolute bottom-4 right-4 w-5 h-5 rounded-full border-2 border-[#c5a059] pointer-events-none" />
                </div>
              </div>

              {/* LADO DERECHO: TEXTO DIRECTAMENTE SOBRE EL CONTENEDOR HORIZONTAL (SIN CONTENEDORES EXTERNOS) */}
              <div className="lg:col-span-7 flex flex-col justify-center text-left relative z-10 pl-0 lg:pl-6">

                {/* Titular */}
                <h3 className="font-['Cinzel',serif] text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-snug">
                  Diseño de sistemas de soluciones
                </h3>

                {/* Párrafo descriptivo */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 max-w-lg">
                  Cada equipo tiene una cultura y un conjunto de normas que han sido adquiridas o que han
                  evolucionado de forma natural. En el ámbito penal, diseñamos arquitecturas defensivas
                  a la medida de cada causa para blindar los derechos del patrocinado.
                </p>

                {/* Fila de Avatares Sobrepuestos con fotos de clientes + Enlace "Más →" */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex -space-x-3 overflow-hidden">
                    <img
                      src={clientAvatar1}
                      alt="Cliente de asesoría penal"
                      className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-[#0a0d14] shadow-sm"
                    />
                    <img
                      src={clientAvatar2}
                      alt="Cliente corporativo"
                      className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-[#0a0d14] shadow-sm"
                    />
                    <img
                      src={clientAvatar3}
                      alt="Cliente ejecutivo"
                      className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-[#0a0d14] shadow-sm"
                    />
                  </div>

                  <button
                    onClick={handleContactClick}
                    className="text-xs sm:text-sm font-bold text-[#e5c378] hover:text-[#c5a059] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Más</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Subtexto: 29.000 clientes con nuestros servicios [¡Empecemos!] */}
                <div className="text-xs text-slate-400">
                  29.000 clientes con nuestros servicios{' '}
                  <button
                    onClick={onOpenEmergencyModal}
                    className="text-[#c5a059] hover:text-[#e5c378] font-bold cursor-pointer transition-colors"
                  >
                    [¡Empecemos!]
                  </button>
                </div>

              </div>

            </div>
          </div>

          {/* Indicador Vertical "VOLVER ARRIBA" en el extremo derecho */}
          <button
            onClick={handleScrollToTop}
            className="hidden xl:flex absolute right-4 bottom-8 flex-col items-center gap-2 text-[10px] font-bold text-[#c5a059] uppercase tracking-widest [writing-mode:vertical-rl] rotate-180 hover:text-[#e5c378] transition-colors cursor-pointer select-none z-20"
          >
            <span>VOLVER ARRIBA</span>
            <span className="w-6 h-[2px] bg-[#c5a059]" />
          </button>

        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 4: 6 CARDS CON TECHO EN ARCO Y BADGE CIRCULAR
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full text-center">
        
        <div className="flex items-center justify-center gap-3 text-xs font-bold tracking-widest text-[#aa8640] uppercase mb-3">
          <span className="w-8 h-[1px] bg-[#c5a059]" />
          <span>EJES DE DEFENSA TÉCNICA</span>
          <span className="w-8 h-[1px] bg-[#c5a059]" />
        </div>

        <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101626] mb-14">
          Ofrecemos diversos pilares de{' '}
          <span className="text-[#c5a059]">patrocinio penal</span>
        </h2>

        {/* Grid de 6 Tarjetas con Techo Redondeado en Arco (arched top) e Icono Flotante */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch text-left">
          {PILLARS.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            const numberFormatted = `0${idx + 1}`;

            return (
              <div
                key={pillar.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#c5a059]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Foto Superior con Arco Curvado (arched top) */}
                  <div className="w-full h-44 rounded-t-[28px] overflow-hidden bg-slate-100 relative">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Icono Circular Flotante centrado en la frontera entre foto y contenido */}
                  <div className="w-14 h-14 rounded-full bg-[#101626] border-4 border-white shadow-md text-[#e5c378] flex items-center justify-center -mt-7 mx-auto relative z-10 group-hover:bg-[#c5a059] group-hover:text-slate-950 transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Cuerpo de la Card */}
                  <div className="p-6 pt-3 text-center">
                    <h3 className="font-['Cinzel',serif] text-base font-bold text-[#101626] mb-2 leading-snug group-hover:text-[#aa8640] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                {/* Pie de la Card con Número a la izquierda y "Leer más »" a la derecha */}
                <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
                  <span className="text-base font-black text-slate-300 font-mono">
                    {numberFormatted}
                  </span>

                  <button
                    onClick={() => setSelectedPillar(pillar)}
                    className="text-xs font-bold text-[#aa8640] hover:text-[#8c6721] flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Leer más</span>
                    <span className="text-sm font-black">»</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* =========================================================================
          SECCIÓN 5: BANNER OSCURO TAL CUAL LA IMAGEN 2 DE REFERENCIA
          (PATRÓN ISOMÉTRICO 3D, ANILLOS CONCÉNTRICOS, CINTA VERTICAL CON BORDE BLANCO, 6 CHECKS Y REPRODUCTOR CON FLECHA)
          ========================================================================= */}
      <section className="w-full bg-[#0a0d14] text-white relative overflow-hidden border-t border-[#c5a059]/30">
        
        {/* PATRÓN ISOMÉTRICO 3D DE CUBOS EN EL FONDO IZQUIERDO */}
        <div className="absolute left-0 top-0 bottom-0 w-full lg:w-1/2 pointer-events-none opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="isometric-cubes" width="60" height="104" patternUnits="userSpaceOnUse">
                <path d="M30 0 L60 17.32 L30 34.64 L0 17.32 Z" fill="#1c2237" stroke="#0a0d14" strokeWidth="1" />
                <path d="M0 17.32 L30 34.64 L30 69.28 L0 51.96 Z" fill="#101626" stroke="#0a0d14" strokeWidth="1" />
                <path d="M60 17.32 L60 51.96 L30 69.28 L30 34.64 Z" fill="#242e44" stroke="#0a0d14" strokeWidth="1" />
                <path d="M30 69.28 L60 86.6 L30 103.92 L0 86.6 Z" fill="#1c2237" stroke="#0a0d14" strokeWidth="1" />
                <path d="M0 86.6 L30 103.92 L30 138.56 L0 121.24 Z" fill="#101626" stroke="#0a0d14" strokeWidth="1" />
                <path d="M60 86.6 L60 121.24 L30 138.56 L30 103.92 Z" fill="#242e44" stroke="#0a0d14" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#isometric-cubes)" />
          </svg>
        </div>

        {/* Anillos concéntricos dorados en el extremo izquierdo */}
        <div className="absolute -left-28 top-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border-4 border-[#c5a059]/25 pointer-events-none" />
        <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full border-4 border-[#c5a059]/20 pointer-events-none" />
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-[140px] h-[140px] rounded-full border-2 border-[#e5c378]/35 pointer-events-none" />

        <div className="w-full flex flex-col lg:flex-row items-stretch relative z-10">
          
          {/* LADO IZQUIERDO: Contenido textual con tipografía normal legible, altura de sección reducida al 50% */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:py-8 lg:px-12 flex flex-col justify-center text-left relative z-10">
            
            {/* Tag superior en cursiva con guiones */}
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#e5c378] italic uppercase mb-2">
              <span>— NUESTRO ACERCA DE NOSOTROS —</span>
            </div>

            {/* Título Blanco */}
            <h2 className="font-['Cinzel',serif] text-xl sm:text-2xl font-extrabold text-white leading-tight mb-2.5">
              Podemos atender a los clientes con nuestros servicios.
            </h2>

            {/* Párrafo descriptivo */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 max-w-lg">
              Servicios de diseño, gestión y soporte de TI personalizados para empresas, agencia de negocios
              elit, sed do eiusmod tempor. En el ámbito penal, brindamos patrocinio riguroso, ético y de máxima lealtad.
            </p>

            {/* 6 Checks en 2 Columnas con tamaño legible y espaciado limpio */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-5">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckSquare className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                <span>Constructivismo empresarial</span>
              </div>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckSquare className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                <span>Damos gestión</span>
              </div>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckSquare className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                <span>Medios en esta solución.</span>
              </div>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckSquare className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                <span>Constructivismo empresarial</span>
              </div>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckSquare className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                <span>Damos gestión</span>
              </div>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckSquare className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                <span>Medios en esta solución.</span>
              </div>
            </div>

            {/* Fila de Botón Blanco + Texto "Viendo video" con Flecha Dibujada a Mano hacia el Reproductor */}
            <div className="flex flex-wrap items-center gap-4">
              
              {/* Botón Blanco: "Acerca De Más" */}
              <button
                onClick={handleContactClick}
                className="px-6 py-2.5 rounded-lg bg-white text-slate-950 hover:bg-[#c5a059] hover:text-white font-black text-xs uppercase tracking-wider shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                Acerca De Más
              </button>

              {/* Texto "Viendo video" + Flecha dibujada apuntando al Reproductor */}
              <div className="flex items-center gap-2.5">
                <span className="text-xs sm:text-sm font-semibold text-white">
                  Viendo video
                </span>

                {/* Flecha dibujada a mano apuntando hacia abajo al botón de play */}
                <svg
                  className="w-8 h-5 text-white rotate-6"
                  viewBox="0 0 60 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M 5 8 Q 20 22 35 12 Q 45 28 50 32" />
                  <polyline points="42,26 50,32 54,23" />
                </svg>

                {/* Caja oscura con el botón de play dorado circular brillante */}
                <button
                  onClick={onOpenEmergencyModal}
                  className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shadow-md transition-all transform hover:scale-110 cursor-pointer"
                  aria-label="Reproducir video"
                >
                  <div className="w-5 h-5 rounded-full bg-[#c5a059] text-slate-950 flex items-center justify-center shadow-xs">
                    <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                  </div>
                </button>
              </div>

            </div>

          </div>

          {/* CINTA VERTICAL DORADA CENTRAL CON BORDE BLANCO */}
          <div className="hidden lg:flex relative z-20 items-stretch -ml-4 -mr-4">
            <div className="relative w-10 bg-[#c5a059] border-x-2 border-t-2 border-white flex flex-col items-center justify-between pt-3 pb-6 shadow-xl">
              
              {/* Texto Vertical */}
              <span className="text-[11px] font-bold text-slate-950 tracking-wider [writing-mode:vertical-rl] rotate-180 uppercase whitespace-nowrap">
                Desafío de más de 36 expresiones
              </span>

              {/* Punta de la cinta estilo chevron hacia abajo con borde blanco */}
              <div className="absolute -bottom-5 left-[-2px] right-[-2px] h-5 flex items-start justify-center">
                <svg className="w-[42px] h-5" viewBox="0 0 50 24" fill="none">
                  {/* Chevron dorado con borde blanco */}
                  <polygon points="0,0 50,0 25,24" fill="#c5a059" stroke="white" strokeWidth="2" />
                  {/* Triángulo interior decorativo */}
                  <polygon points="10,3 40,3 25,18" fill="#aa8640" stroke="white" strokeWidth="1.5" />
                </svg>
              </div>

            </div>
          </div>

          {/* LADO DERECHO: Fotografía de excelencia y compromiso jurídico en biblioteca */}
          <div className="w-full lg:w-1/2 relative h-48 sm:h-64 lg:h-auto overflow-hidden">
            <img
              src={lawLibraryPrestige}
              alt="Compromiso de Excelencia Técnica y Rigor Procesal"
              className="w-full h-full lg:absolute lg:inset-0 object-cover object-center"
            />
          </div>

        </div>

        {/* Indicador Vertical "VOLVER ARRIBA" en el extremo derecho inferior */}
        <button
          onClick={handleScrollToTop}
          className="hidden xl:flex absolute right-4 bottom-8 flex-col items-center gap-2 text-[10px] font-bold text-[#c5a059] uppercase tracking-widest [writing-mode:vertical-rl] rotate-180 hover:text-[#e5c378] transition-colors cursor-pointer select-none z-20"
        >
          <span>VOLVER ARRIBA</span>
          <span className="w-6 h-[2px] bg-[#c5a059]" />
        </button>
      </section>

      {/* =========================================================================
          MODAL DETALLE DE PILAR METODOLÓGICO (Al hacer clic en "Leer más »")
          ========================================================================= */}
      {selectedPillar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl text-left max-h-[90vh] overflow-y-auto">
            
            {/* Botón Cerrar */}
            <button
              onClick={() => setSelectedPillar(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Cabecera del Modal */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#c5a059]/15 text-[#aa8640] flex items-center justify-center flex-shrink-0">
                <selectedPillar.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#c5a059] uppercase tracking-widest block">
                  {selectedPillar.badge}
                </span>
                <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold text-[#101626]">
                  {selectedPillar.title}
                </h3>
              </div>
            </div>

            {/* Imagen Destacada del Pilar */}
            <div className="w-full h-48 rounded-2xl overflow-hidden border border-slate-200 mb-6 bg-slate-100">
              <img
                src={selectedPillar.image}
                alt={selectedPillar.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Descripción Completa */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              {selectedPillar.description}
            </p>

            {/* Casuística y Actuaciones Frecuentes */}
            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#aa8640] font-bold mb-3">
                Protocolo de Actuación Procesal:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedPillar.details.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700"
                  >
                    <Check className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pie del Modal con Acciones */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap gap-4 items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 block">¿Requiere patrocinio en este ámbito?</span>
                <span className="text-xs font-bold text-[#101626]">Atención directa con la Ab. Sofía Segura</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedPillar(null);
                    onOpenEmergencyModal();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#c5a059] hover:bg-[#b89146] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm cursor-pointer"
                >
                  Consultar Este Caso
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
