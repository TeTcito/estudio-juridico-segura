import React, { useState } from 'react';
import {
  ShieldAlert,
  Scale,
  Briefcase,
  ShieldCheck,
  FileCheck,
  Gavel,
  Clock,
  Award,
  Phone,
  ArrowRight,
  Plus,
  Minus,
  Check,
  Users,
  Play,
  X,
  PhoneCall,
  FolderSearch,
  CheckCircle2,
  FileText
} from 'lucide-react';
import type { TabKey } from '../components/Header';
import { LAWYER_INFO, DETAILED_SPECIALTIES } from '../data/legalData';

// Images
import sofiaCutout from '../assets/images/sofia-profile-hero.png';
import portraitFormal from '../assets/images/sofia-profile-postgrados.jpg';
import practiceAreasHeader from '../assets/images/practice-areas-header.jpg';
import courtroomJustice from '../assets/images/courtroom-justice.jpg';
import flagranciasDefensa247 from '../assets/images/flagrancias-defensa-24-7.png';
import specialtyTrafficExpert from '../assets/images/specialty-traffic-expert.jpg';
import specialtyTransportCompanies from '../assets/images/specialty-transport-companies.jpg';
import specialtyFamilyLaw from '../assets/images/specialty-family-law.jpg';
import specialtyLaborLaw from '../assets/images/specialty-labor-law.jpg';
import practiceCtaEmergency from '../assets/images/practice-cta-emergency.png';

interface PracticeAreasTabProps {
  onOpenEmergencyModal: () => void;
  onSelectTab: (tab: TabKey) => void;
}

interface SpecialtyItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  cases: string[];
  icon: React.ElementType;
  image: string;
  badge: string;
}

export const PracticeAreasTab: React.FC<PracticeAreasTabProps> = ({
  onOpenEmergencyModal,
  onSelectTab
}) => {
  // Modal para ver detalle completo de especialidad
  const [selectedSpecialty, setSelectedSpecialty] = useState<SpecialtyItem | null>(null);

  // Estado del Acordeón de FAQ
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Lista de 6 Especialidades Principales
  const SPECIALTIES: SpecialtyItem[] = [
    {
      id: 'penal-delitos',
      title: 'Derecho Penal & Delitos Complejos',
      shortDesc: 'Defensa técnica especializada en robo, receptación, estafa, secuestro extorsivo, asociación ilícita y delincuencia organizada.',
      fullDesc: 'Patrocinio penal integral en todas las etapas procesales (investigación previa, instrucción fiscal, evaluación y juicio oral). Exclusión de pruebas ilícitas, peritajes forenses y formulación dogmática de la teoría del caso.',
      cases: [
        'Robo simple y agravado',
        'Receptación y estafa',
        'Secuestro y secuestro extorsivo',
        'Asociación ilícita y delincuencia organizada'
      ],
      icon: Scale,
      image: courtroomJustice,
      badge: 'ESPECIALIDAD PRINCIPAL'
    },
    {
      id: 'flagrancias',
      title: 'Flagrancias y Detenciones 24/7',
      shortDesc: 'Intervención inmediata en las primeras 24 horas críticas ante Fiscalía y Unidad Judicial.',
      fullDesc: 'Asistencia técnica urgente en la calificación de legalidad de la aprehensión, audiencia de formulación de cargos y solicitud fundamentada de medidas sustitutivas a la prisión preventiva.',
      cases: [
        'Calificación de aprehensión flagrante',
        'Sustitución de prisión preventiva',
        'Acompañamiento en toma de versiones',
        'Hábeas corpus correctivo de urgencia'
      ],
      icon: ShieldAlert,
      image: flagranciasDefensa247,
      badge: 'URGENCIA 24/7'
    },
    {
      id: 'materia-transito',
      title: 'Experta en Derecho de Tránsito',
      shortDesc: 'Defensa técnica en accidentes de tránsito, siniestros, lesiones, peritajes mecánicos e impugnaciones.',
      fullDesc: 'Experta acreditada en materia de tránsito. Asistencia técnica en audiencias de flagrancia por accidentes de tránsito, control de peritajes del SIAT/OIAT, reconstrucción de hechos y acuerdos reparatorios.',
      cases: [
        'Delitos y siniestros de tránsito',
        'Impugnación de citaciones y contravenciones',
        'Peritajes mecánicos y reconstrucción',
        'Conciliación y acuerdos reparatorios'
      ],
      icon: ShieldCheck,
      image: specialtyTrafficExpert,
      badge: 'EXPERTA CERTIFICADA'
    },
    {
      id: 'companias-transporte',
      title: 'Compañías de Transporte',
      shortDesc: 'Constitución, legalización, reformas estatutarias y formalización de operadoras de transporte.',
      fullDesc: 'Asesoramiento legal corporativo integral a cooperativas y compañías de transporte terrestre: taxis, carga pesada, escolar e institucional ante la ANT y GADs municipales.',
      cases: [
        'Constitución legal de compañías de transporte',
        'Obtención y renovación de permisos de operación',
        'Reformas estatutarias y aumentos de capital',
        'Resolución de controversias societarias de transporte'
      ],
      icon: Briefcase,
      image: specialtyTransportCompanies,
      badge: 'TRANSPORTE Y CORPORATIVO'
    },
    {
      id: 'derecho-familiar',
      title: 'Derecho Familiar y Niñez',
      shortDesc: 'Pensiones de alimentos, régimen de visitas, tenencia, patria potestad, divorcios y violencia intrafamiliar.',
      fullDesc: 'Patrocinio legal humano y riguroso en controversias de derecho de familia: fijación, aumento y rebaja de pensiones alimenticias, tenencia, patria potestad, disolución de vínculo conyugal y medidas de protección.',
      cases: [
        'Pensiones alimenticias (fijación, rebaja, aumento)',
        'Régimen de visitas y tenencia',
        'Divorcios y liquidación conyugal',
        'Medidas de protección por violencia intrafamiliar'
      ],
      icon: Gavel,
      image: specialtyFamilyLaw,
      badge: 'FAMILIA Y PROTECCIÓN'
    },
    {
      id: 'derecho-laboral',
      title: 'Derecho Laboral',
      shortDesc: 'Defensa de trabajadores y empleadores en despidos intempestivos, vistos buenos y liquidaciones.',
      fullDesc: 'Patrocinio en sede administrativa ante el Ministerio del Trabajo y en juzgados de trabajo. Reclamos de indemnizaciones por despido ineficaz o intempestivo, trámites de visto bueno y actas de finiquito.',
      cases: [
        'Despidos intempestivos e indemnizaciones',
        'Trámites de Visto Bueno',
        'Cálculo de liquidaciones y haberes laborales',
        'Actas de finiquito y mediación laboral'
      ],
      icon: FileCheck,
      image: specialtyLaborLaw,
      badge: 'LABORAL Y EMPLEO'
    }
  ];

  // Preguntas Frecuentes (FAQ Accordion)
  const FAQ_ITEMS = [
    {
      question: '¿Qué debo hacer de inmediato si un familiar acaba de ser detenido en flagrancia?',
      answer:
        'Guarde la calma y ejerza de inmediato el derecho constitucional a guardar silencio. No rinda declaraciones ni firme documentos sin su abogada defensora presente. Comuníquese de inmediato a nuestra línea de urgencia 24/7 (099 8203 766) para apersonarnos a la Unidad de Flagrancia antes de la audiencia de las primeras 24 horas y evitar la prisión preventiva.'
    },
    {
      question: '¿Cómo se determinan los honorarios profesionales y los planes de pago?',
      answer:
        'Trabajamos con total transparencia mediante contrato escrito de patrocinio legal. Analizamos la complejidad técnica de la causa, las fases procesales requeridas y acordamos un pacto de honorarios claro, con facilidades de pago estructuradas sin costos ocultos.'
    },
    {
      question: '¿Prestan asistencia jurídica fuera de la ciudad o a nivel nacional?',
      answer:
        'Sí. Disponemos de cobertura y capacidad de traslado inmediato a cualquier provincia del Ecuador para comparecer en audiencias de formulación de cargos, juicios penales y diligencias ante la Corte Provincial o la Corte Nacional de Justicia en Quito.'
    },
    {
      question: '¿Por qué es indispensable contar con una Magíster en Derecho Procesal Penal?',
      answer:
        'El sistema penal oral acusatorio demanda un dominio riguroso de la dogmática penal, reglas de exclusión probatoria y técnicas de litigación oral. Un especialista calificado asegura que no se vulneren garantías del debido proceso y maximiza las posibilidades reales de sobreseimiento o ratificación de inocencia.'
    }
  ];

  return (
    <div className="w-full bg-white text-slate-800 flex flex-col selection:bg-[#c5a059] selection:text-white">
      {/* =========================================================================
          SECCIÓN 1: HERO SECTION (OCUPA EL 100% DEL ANCHO DE LA PESTAÑA)
          ========================================================================= */}
      <section className="w-full bg-gradient-to-b from-[#fbf8f2] via-[#f7f3ec] to-white border-b border-[#e9e2d5]/70 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-14 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Columna Izquierda: Píldora, H1, Subtítulo, Botones y 4 Métricas */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Píldora Superior: [ Fast • Reliable • Professional ] */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/30 text-xs sm:text-sm font-semibold text-[#8c6721] tracking-wide mb-5">
                <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse" />
                <span>Inmediata • Rigurosa • Confidencial</span>
              </div>

              {/* H1 Principal: 3 líneas de impacto */}
              <h1 className="font-['Cinzel',serif] text-3xl sm:text-4xl lg:text-[46px] font-black text-[#101626] leading-[1.14] tracking-tight mb-5">
                Defensa Penal, Tránsito & Asistencia{' '}
                <span className="text-[#c5a059] block">Legal Integral</span>
              </h1>

              {/* Subtítulo Descriptivo */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mb-8 font-normal">
                Especialistas en Derecho Penal, Tránsito, Transporte, Derecho Familiar y Laboral.
                Desde audiencias de flagrancia y defensa en delitos complejos, hasta siniestros de tránsito,
                constitución de operadoras y litigio ante tribunales en todo el Ecuador.
              </p>

              {/* Fila de Botones: Botón Píldora Amarillo/Dorado + Botón Reproductor */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-10">
                <button
                  onClick={() => onSelectTab('contacto')}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#c5a059] hover:bg-[#b89146] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span>Agendar Consulta</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenEmergencyModal}
                  className="inline-flex items-center gap-3 text-slate-800 hover:text-[#aa8640] font-semibold text-xs sm:text-sm transition-colors group cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-full bg-[#101626] group-hover:bg-[#c5a059] text-white flex items-center justify-center shadow-md transition-all">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                  <span>Línea de Urgencia 24/7</span>
                </button>
              </div>

              {/* 4 Indicadores / Badges de Confianza en Fila */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 border-t border-slate-200/80">
                
                {/* 1. 24/7 Servicio */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-[#c5a059] flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs sm:text-sm font-bold text-[#101626]">24/7</div>
                    <div className="text-[11px] text-slate-500 leading-tight">Urgencia Penal</div>
                  </div>
                </div>

                {/* 2. Formación & Maestrías */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-[#c5a059] flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs sm:text-sm font-bold text-[#101626]">Uniandes · Casa Grande</div>
                    <div className="text-[11px] text-slate-500 leading-tight">Formación & Maestrías</div>
                  </div>
                </div>

                {/* 3. Precios Claros */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-[#c5a059] flex-shrink-0">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs sm:text-sm font-bold text-[#101626]">Honorarios</div>
                    <div className="text-[11px] text-slate-500 leading-tight">Pacto Transparente</div>
                  </div>
                </div>

                {/* 4. Años de Experiencia */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-[#c5a059] flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs sm:text-sm font-bold text-[#101626]">{LAWYER_INFO.yearsExperience} Años</div>
                    <div className="text-[11px] text-slate-500 leading-tight">Experiencia Litigante</div>
                  </div>
                </div>

              </div>

            </div>

            {/* Columna Derecha: Imagen Profesional con Badge Flotante de Urgencias */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                
                {/* Imagen Principal con Borde Redondeado y Sombra Profunda */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                  <img
                    src={practiceAreasHeader}
                    alt="Estudio Jurídico Segura Santana & Asociados"
                    className="w-full h-[380px] sm:h-[450px] object-cover object-top hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Badge Flotante Inferior Derecho: [ Need Emergency Help? Call Now ] */}
                <div className="absolute -bottom-5 -right-2 sm:-bottom-6 sm:-right-4 bg-[#0a0d14] text-white p-4 sm:p-5 rounded-2xl shadow-2xl border border-[#c5a059]/40 max-w-[280px] sm:max-w-[300px] text-left">
                  <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    ¿Detención o Flagrancia?
                  </div>
                  <a
                    href={`tel:+${LAWYER_INFO.phones[0].raw}`}
                    className="flex items-center gap-3 group/call"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#c5a059] group-hover/call:bg-[#d4af37] text-slate-900 flex items-center justify-center flex-shrink-0 shadow-md transition-colors">
                      <Phone className="w-5 h-5 fill-current" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm sm:text-base font-black text-white group-hover/call:text-[#e5c378] transition-colors leading-tight">
                        {LAWYER_INFO.phones[0].display}
                      </span>
                      <span className="text-[11px] font-bold text-[#c5a059] uppercase tracking-wider">
                        Llamar Ahora 24/7
                      </span>
                    </div>
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 2: OUR SERVICES / ÁREAS DE ESPECIALIZACIÓN (GRID DE 6 CARDS)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full text-center">
        
        {/* Cabecera Centrada con Líneas Horizontales: — NUESTRAS ESPECIALIDADES — */}
        <div className="flex items-center justify-center gap-3 text-xs font-bold tracking-widest text-[#aa8640] uppercase mb-3">
          <span className="w-8 h-[1px] bg-[#c5a059]" />
          <span>ÁREAS DE ESPECIALIZACIÓN</span>
          <span className="w-8 h-[1px] bg-[#c5a059]" />
        </div>

        <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101626] mb-3">
          Brindamos Defensa Penal{' '}
          <span className="text-[#c5a059]">Integral & Especializada</span>
        </h2>

        <p className="text-center text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto mb-14 leading-relaxed">
          Desde audiencias inmediatas de flagrancia hasta recursos técnicos de casación penal,
          asumimos cada caso con solvencia dogmática, ética y litigación oral contundente.
        </p>

        {/* Grid de 6 Cards: Texto a la Izquierda + Imagen a la Derecha tal cual el diseño */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {SPECIALTIES.map((spec) => {
            const IconComponent = spec.icon;
            return (
              <div
                key={spec.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-xl hover:border-[#c5a059]/50 transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  {/* Lado Izquierdo de la Card: Icono, Título y Descripción */}
                  <div className="flex-1 pr-1">
                    <div className="w-11 h-11 rounded-xl bg-[#c5a059]/15 text-[#aa8640] flex items-center justify-center mb-3 group-hover:bg-[#c5a059] group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <h3 className="font-['Cinzel',serif] text-sm sm:text-base font-bold text-[#101626] mb-2 leading-snug group-hover:text-[#aa8640] transition-colors">
                      {spec.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mb-3">
                      {spec.shortDesc}
                    </p>
                  </div>

                  {/* Lado Derecho de la Card: Imagen Thumbnail */}
                  <div className="w-24 sm:w-28 h-32 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100 border border-slate-200 shadow-inner">
                    <img
                      src={spec.image}
                      alt={spec.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Link Inferior: Learn More → */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedSpecialty(spec)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#aa8640] hover:text-[#8c6721] transition-colors cursor-pointer"
                  >
                    <span>Conocer Más</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    {spec.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================================
            CATÁLOGO DE ESPECIALIDADES DETALLADAS Y DELITOS ESPECÍFICOS
            (Receptación, Robo, Secuestro, Secuestro Extorsivo, Estafa, Asociación Ilícita,
             Delincuencia Organizada, Materia de Tránsito, Constitución de Compañías, Familia y Laboral)
            ========================================================================= */}
        <div className="mt-16 pt-12 border-t border-slate-200 text-left">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-widest text-[#aa8640] uppercase block mb-1">
              PORTAFOLIO DE DEFENSAS Y MATERIAS
            </span>
            <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold text-[#101626]">
              Delitos y Áreas de Práctica Específicas
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Atención jurídica integral y personalizada según los requerimientos procesales del caso en todo el país.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DETAILED_SPECIALTIES.map((item, idx) => (
              <div
                key={item.id}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-[#c5a059] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#c5a059]/15 text-[#8c6721] uppercase">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400 font-bold">
                      #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                  </div>
                  <h4 className="font-['Cinzel',serif] text-sm font-bold text-[#101626] mb-1.5">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Patrocinio letrado</span>
                  <button
                    onClick={() => onSelectTab('contacto')}
                    className="text-[#aa8640] font-bold hover:text-[#101626] flex items-center gap-1 transition-colors"
                  >
                    <span>Consultar</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* =========================================================================
          SECCIÓN 3: ABOUT US / SOBRE LA ESPECIALISTA (SPLIT CON STATS VERTICALES)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Lado Izquierdo (5 cols): Foto Cutout sobre Círculo con Burbujas Decorativas */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-72 sm:w-80 h-72 sm:h-80 flex items-center justify-center">
              
              {/* Círculo Gráfico de Fondo Azul/Dorado */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#101626]/10 via-[#c5a059]/20 to-[#e5c378]/30 border border-[#c5a059]/30" />

              {/* Burbujas y Círculos Decorativos alrededor (igual que en PlumbPro) */}
              <span className="absolute -top-3 -right-2 w-7 h-7 rounded-full bg-[#c5a059]/25 animate-pulse" />
              <span className="absolute bottom-4 -left-3 w-6 h-6 rounded-full bg-[#101626]/15" />
              <span className="absolute top-1/2 -right-5 w-4 h-4 rounded-full bg-[#c5a059]/40" />
              <span className="absolute -bottom-2 right-1/4 w-3 h-3 rounded-full bg-[#8c6721]/30" />

              {/* Imagen Cutout de la Abogada Sofía Segura sobresaliendo del círculo */}
              <img
                src={sofiaCutout}
                alt="Ab. Sofía Segura Santana"
                className="relative z-10 w-full max-w-[300px] sm:max-w-[340px] -mt-10 object-contain drop-shadow-2xl [mask-image:linear-gradient(to_bottom,black_86%,transparent_100%)]"
              />
            </div>
          </div>

          {/* Centro (4 cols): Texto, Bullets y Botón */}
          <div className="lg:col-span-4 text-left">
            <span className="text-xs font-bold tracking-widest text-[#aa8640] uppercase block mb-2">
              SOBRE LA ESPECIALISTA
            </span>

            <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl font-black text-[#101626] leading-tight mb-4">
              Su Abogada de{' '}
              <span className="text-[#c5a059]">Confianza</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              En el Estudio Jurídico Segura Santana & Asociados, ejercemos una defensa técnica, ética e implacable.
              Bajo el liderazgo de la <strong className="text-slate-900">{LAWYER_INFO.name}</strong>,{' '}
              {LAWYER_INFO.title}, con grado en la Universidad Autónoma Regional de Los Andes (Uniandes)
              y Maestrías en Derecho Procesal Penal y Constitucional por la Universidad Casa Grande.
            </p>

            {/* 4 Bullets con Checkmarks (2 columnas) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <div className="w-4 h-4 rounded-full bg-[#c5a059]/20 text-[#aa8640] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Uniandes · Casa Grande</span>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <div className="w-4 h-4 rounded-full bg-[#c5a059]/20 text-[#aa8640] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Respuesta 24/7</span>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <div className="w-4 h-4 rounded-full bg-[#c5a059]/20 text-[#aa8640] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Penal, Tránsito, Familia</span>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <div className="w-4 h-4 rounded-full bg-[#c5a059]/20 text-[#aa8640] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>100% Reserva y Ética</span>
              </div>
            </div>

            {/* Botón Amarillo/Dorado: Conocer Más → */}
            <button
              onClick={() => onSelectTab('perfil')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#c5a059] hover:bg-[#b89146] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>Conocer Trayectoria</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Lado Derecho (3 cols): 4 Tarjetas de Estadísticas Verticales */}
          <div className="lg:col-span-3 flex flex-col gap-3.5 text-left">
            
            {/* Stat 1: 4 Años de Experiencia */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs flex items-center gap-4 hover:border-[#c5a059] transition-all">
              <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 text-[#aa8640] flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-black text-[#101626] font-['Cinzel',serif] leading-tight">
                  {LAWYER_INFO.yearsExperience} Años
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Experiencia Litigante
                </div>
              </div>
            </div>

            {/* Stat 2: 98% Efectividad */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs flex items-center gap-4 hover:border-[#c5a059] transition-all">
              <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 text-[#aa8640] flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-black text-[#101626] font-['Cinzel',serif] leading-tight">
                  {LAWYER_INFO.statSuccessRate}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Efectividad Procesal
                </div>
              </div>
            </div>

            {/* Stat 3: 300+ Audiencias de Flagrancia & Causas */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs flex items-center gap-4 hover:border-[#c5a059] transition-all">
              <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 text-[#aa8640] flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-black text-[#101626] font-['Cinzel',serif] leading-tight">
                  {LAWYER_INFO.statFlagrancies}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Causas & Audiencias
                </div>
              </div>
            </div>

            {/* Stat 4: 24/7 Urgencias */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs flex items-center gap-4 hover:border-[#c5a059] transition-all">
              <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 text-[#aa8640] flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-black text-[#101626] font-['Cinzel',serif] leading-tight">
                  24/7
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Atención Telefónica
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 4: OUR SIMPLE 4 STEP PROCESS / NUESTRO PROCESO EN 4 FASES
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full text-center">
        
        {/* Cabecera Centrada: — CÓMO TRABAJAMOS — */}
        <div className="flex items-center justify-center gap-3 text-xs font-bold tracking-widest text-[#aa8640] uppercase mb-3">
          <span className="w-8 h-[1px] bg-[#c5a059]" />
          <span>METODOLOGÍA PROCESAL</span>
          <span className="w-8 h-[1px] bg-[#c5a059]" />
        </div>

        <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101626] mb-12">
          Nuestro Proceso Estratégico en{' '}
          <span className="text-[#c5a059]">4 Fases</span>
        </h2>

        {/* 4 Pasos en Fila con Flechas Intermedias */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative items-start">
          
          {/* Paso 01 */}
          <div className="flex flex-col items-center text-center relative">
            <div className="w-16 h-16 rounded-full bg-[#101626] text-[#e5c378] flex items-center justify-center shadow-lg border-2 border-[#c5a059]/40 mb-4 transition-transform hover:scale-110 duration-300">
              <PhoneCall className="w-7 h-7" />
            </div>
            <span className="text-xs font-black text-[#aa8640] tracking-widest mb-1 font-mono">
              01
            </span>
            <h4 className="font-['Cinzel',serif] text-sm sm:text-base font-bold text-[#101626] mb-2">
              Diagnóstico Inmediato
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              Contacto confidencial inicial y análisis preliminar urgente del estado procesal o aprehensión.
            </p>

            {/* Flecha conectora para pantallas grandes */}
            <div className="hidden md:block absolute -right-4 top-8 text-slate-300 text-lg font-bold">
              →
            </div>
          </div>

          {/* Paso 02 */}
          <div className="flex flex-col items-center text-center relative">
            <div className="w-16 h-16 rounded-full bg-[#101626] text-[#e5c378] flex items-center justify-center shadow-lg border-2 border-[#c5a059]/40 mb-4 transition-transform hover:scale-110 duration-300">
              <FolderSearch className="w-7 h-7" />
            </div>
            <span className="text-xs font-black text-[#aa8640] tracking-widest mb-1 font-mono">
              02
            </span>
            <h4 className="font-['Cinzel',serif] text-sm sm:text-base font-bold text-[#101626] mb-2">
              Auditoría del Expediente
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              Revisión exhaustiva de elementos de convicción de Fiscalía, peritajes forenses y nulidades.
            </p>

            {/* Flecha conectora para pantallas grandes */}
            <div className="hidden md:block absolute -right-4 top-8 text-slate-300 text-lg font-bold">
              →
            </div>
          </div>

          {/* Paso 03 */}
          <div className="flex flex-col items-center text-center relative">
            <div className="w-16 h-16 rounded-full bg-[#101626] text-[#e5c378] flex items-center justify-center shadow-lg border-2 border-[#c5a059]/40 mb-4 transition-transform hover:scale-110 duration-300">
              <Scale className="w-7 h-7" />
            </div>
            <span className="text-xs font-black text-[#aa8640] tracking-widest mb-1 font-mono">
              03
            </span>
            <h4 className="font-['Cinzel',serif] text-sm sm:text-base font-bold text-[#101626] mb-2">
              Teoría del Caso
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              Diseño dogmático de la defensa, preparación técnica de testigos y peritajes de descargo.
            </p>

            {/* Flecha conectora para pantallas grandes */}
            <div className="hidden md:block absolute -right-4 top-8 text-slate-300 text-lg font-bold">
              →
            </div>
          </div>

          {/* Paso 04 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#101626] text-[#e5c378] flex items-center justify-center shadow-lg border-2 border-[#c5a059]/40 mb-4 transition-transform hover:scale-110 duration-300">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <span className="text-xs font-black text-[#aa8640] tracking-widest mb-1 font-mono">
              04
            </span>
            <h4 className="font-['Cinzel',serif] text-sm sm:text-base font-bold text-[#101626] mb-2">
              Litigio & Resultados
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              Defensa oral contundente en juicio penal y activación de recursos superiores de ley.
            </p>
          </div>

        </div>

      </section>

      {/* =========================================================================
          SECCIÓN 5: "THE PLUMBPRO DIFFERENCE" / WHY CHOOSE US
          (OCUPA EL 100% DEL ANCHO DE LA PESTAÑA TAL CUAL LA INDICACIÓN DEL USUARIO)
          ========================================================================= */}
      <section className="w-full bg-[#0a0d14] text-white py-16 sm:py-24 relative overflow-hidden border-y border-[#c5a059]/30">
        
        {/* Glows y gradientes de fondo sutiles */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#1a2238]/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Lado Izquierdo (7 cols): Titular, Subtítulo y 5 Iconos en Fila */}
            <div className="lg:col-span-7 text-left">
              
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#c5a059] uppercase mb-2">
                <span>— POR QUÉ ELEGIRNOS —</span>
              </div>

              <h2 className="font-['Cinzel',serif] text-3xl sm:text-4xl lg:text-4xl font-extrabold text-white leading-tight mb-4">
                La Diferencia en{' '}
                <span className="text-[#e5c378]">Nuestra Defensa Penal</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mb-10">
                Superamos el estándar de la defensa tradicional ofreciendo un patrocinio letrado
                riguroso, fundamentado en dogmática procesal penal, lealtad procesal irrestricta y
                transparencia constante en cada audiencia.
              </p>

              {/* Fila de 5 Iconos con Etiquetas (exacto como los 5 iconos de The PlumbPro) */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                
                {/* 1. 24/7 */}
                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#c5a059]/40 transition-colors">
                  <div className="w-11 h-11 rounded-full bg-[#c5a059]/20 text-[#e5c378] flex items-center justify-center mb-2">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-white leading-tight">24/7</div>
                  <div className="text-[10px] text-slate-400">Atención Flagrancia</div>
                </div>

                {/* 2. Licencia */}
                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#c5a059]/40 transition-colors">
                  <div className="w-11 h-11 rounded-full bg-[#c5a059]/20 text-[#e5c378] flex items-center justify-center mb-2">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-white leading-tight">Mgs. Procesal</div>
                  <div className="text-[10px] text-slate-400">Título Registrado</div>
                </div>

                {/* 3. Técnicos Expertos */}
                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#c5a059]/40 transition-colors">
                  <div className="w-11 h-11 rounded-full bg-[#c5a059]/20 text-[#e5c378] flex items-center justify-center mb-2">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-white leading-tight">Litigantes</div>
                  <div className="text-[10px] text-slate-400">Especializados</div>
                </div>

                {/* 4. Honorarios Transparentes */}
                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#c5a059]/40 transition-colors">
                  <div className="w-11 h-11 rounded-full bg-[#c5a059]/20 text-[#e5c378] flex items-center justify-center mb-2">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-white leading-tight">Honorarios</div>
                  <div className="text-[10px] text-slate-400">Transparentes</div>
                </div>

                {/* 5. 100% Confidencial */}
                <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#c5a059]/40 transition-colors col-span-2 sm:col-span-1">
                  <div className="w-11 h-11 rounded-full bg-[#c5a059]/20 text-[#e5c378] flex items-center justify-center mb-2">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-white leading-tight">100% Ética</div>
                  <div className="text-[10px] text-slate-400">Reserva Absoluta</div>
                </div>

              </div>

            </div>

            {/* Lado Derecho (5 cols): Foto del Equipo/Abogada con Texto Cursivo y Flecha Amarilla */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                
                {/* Texto Caligráfico Cursivo Amarillo/Dorado: "¡Su Aliada Penal de Confianza!" */}
                <div className="absolute -top-10 -right-2 sm:-right-4 z-20 flex flex-col items-end">
                  <span className="font-['Alex_Brush',cursive] text-3xl sm:text-4xl text-[#e5c378] drop-shadow-lg transform -rotate-6">
                    ¡Su Aliada Penal de Confianza!
                  </span>
                  {/* Flecha curva dibujada en SVG apuntando hacia la foto */}
                  <svg
                    className="w-14 h-10 text-[#e5c378] -rotate-12 mt-1 mr-6 drop-shadow"
                    viewBox="0 0 100 60"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  >
                    <path d="M 15 10 Q 55 45 85 45" />
                    <polyline points="72,36 85,45 74,56" />
                  </svg>
                </div>

                {/* Contenedor de la Foto con Curva/Forma Orgánica */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#c5a059]/50 shadow-2xl bg-[#101626]">
                  <img
                    src={portraitFormal}
                    alt="Ab. Sofía Segura Santana"
                    className="w-full h-[360px] sm:h-[400px] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14]/80 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-left p-3 rounded-xl bg-black/60 backdrop-blur-sm border border-white/10">
                    <div className="font-['Cinzel',serif] text-sm font-bold text-white">
                      {LAWYER_INFO.name}
                    </div>
                    <div className="text-[11px] text-[#c5a059] font-medium">
                      {LAWYER_INFO.title} · Mgs. Procesal Penal & Constitucional
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 6: FAQ ACCORDION ("Got Questions? We've Got Answers!")
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20 w-full">
        <div className="bg-slate-50 rounded-3xl border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Lado Izquierdo (5 cols): Foto de Instrumentos Jurídicos + Texto FAQ + Botón */}
            <div className="lg:col-span-5 text-left flex flex-col items-start">
              
              {/* Foto de Instrumentos / Despacho Jurídico */}
              <div className="w-full h-44 sm:h-48 rounded-2xl overflow-hidden border border-slate-200 shadow-sm mb-6 bg-slate-200">
                <img
                  src={practiceCtaEmergency}
                  alt="Instrumentos y Estrategia Legal"
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="text-xs font-bold tracking-widest text-[#aa8640] uppercase block mb-1">
                PREGUNTAS FRECUENTES
              </span>

              <h3 className="font-['Cinzel',serif] text-2xl sm:text-3xl font-extrabold text-[#101626] mb-3 leading-snug">
                ¿Tiene Dudas Legales? <br className="hidden sm:inline" />
                ¡Tenemos Respuestas Claras!
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Encuentre respuestas a las consultas más habituales sobre detenciones, flagrancia,
                honorarios y el ejercicio técnico de su defensa penal en el Ecuador.
              </p>

              {/* Botón Azul Oscuro / Dorado */}
              <button
                onClick={() => onSelectTab('contacto')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#101626] hover:bg-[#1a2238] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer"
              >
                <span>Consultar Caso Particular</span>
                <ArrowRight className="w-4 h-4 text-[#c5a059]" />
              </button>
            </div>

            {/* Lado Derecho (7 cols): Acordeón Interactivo con 4 Preguntas */}
            <div className="lg:col-span-7 flex flex-col gap-3 text-left">
              {FAQ_ITEMS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className={`rounded-2xl border transition-all overflow-hidden ${
                      isOpen
                        ? 'bg-white border-[#c5a059] shadow-sm'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
                    >
                      <span className="text-xs sm:text-sm font-bold text-[#101626] leading-snug">
                        {faq.question}
                      </span>
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                          isOpen
                            ? 'bg-[#c5a059] text-white'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-fade-in">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 7: BANNER INFERIOR EXTENDIDO DE TOPE A TOPE (FLUSH CON EL FOOTER)
          ========================================================================= */}
      <section className="w-full bg-gradient-to-r from-[#080b12] via-[#101626] to-[#162035] text-white border-t border-[#c5a059]/30 relative overflow-hidden m-0 p-0">
        
        {/* Textura sutil y glow ambiental */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-left">
          
          {/* Lado Izquierdo: Titular y Subtexto */}
          <div className="max-w-xl">
            <h3 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-2.5 leading-tight">
              ¿Requiere Asistencia Penal Inmediata?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Atención especializada 24/7 en flagrancias, audiencias de formulación de cargos y
              urgencias procesales en todo el Ecuador.
            </p>
          </div>

          {/* Lado Derecho: Botón Dorado + Teléfono */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-8">
            <button
              onClick={() => onSelectTab('contacto')}
              className="px-7 py-3.5 rounded-xl bg-[#c5a059] hover:bg-[#d4af37] text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg transition-all transform hover:scale-105 active:scale-95 inline-flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <span>Agendar Consulta</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:+${LAWYER_INFO.phones[0].raw}`}
              className="flex items-center gap-3 text-white hover:text-[#e5c378] transition-colors whitespace-nowrap group"
            >
              <div className="w-12 h-12 rounded-full border border-white/30 bg-white/10 flex items-center justify-center text-[#e5c378] group-hover:bg-[#c5a059] group-hover:text-slate-900 group-hover:border-[#c5a059] transition-all flex-shrink-0">
                <Phone className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="text-[11px] text-slate-300 block uppercase tracking-wider font-semibold">
                  Línea de Urgencia 24/7
                </span>
                <span className="text-base sm:text-lg font-black text-white block">
                  {LAWYER_INFO.phones[0].display}
                </span>
              </div>
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================================
          MODAL DETALLE DE ESPECIALIDAD (Al hacer clic en "Conocer Más →")
          ========================================================================= */}
      {selectedSpecialty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl text-left max-h-[90vh] overflow-y-auto">
            
            {/* Botón Cerrar */}
            <button
              onClick={() => setSelectedSpecialty(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Cabecera del Modal */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#c5a059]/15 text-[#aa8640] flex items-center justify-center flex-shrink-0">
                <selectedSpecialty.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#c5a059] uppercase tracking-widest block">
                  {selectedSpecialty.badge}
                </span>
                <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold text-[#101626]">
                  {selectedSpecialty.title}
                </h3>
              </div>
            </div>

            {/* Imagen Destacada del Servicio */}
            <div className="w-full h-48 rounded-2xl overflow-hidden border border-slate-200 mb-6 bg-slate-100">
              <img
                src={selectedSpecialty.image}
                alt={selectedSpecialty.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Descripción Completa */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              {selectedSpecialty.fullDesc}
            </p>

            {/* Casuística y Actuaciones Frecuentes */}
            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#aa8640] font-bold mb-3">
                Actuaciones y Casos Frecuentes:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedSpecialty.cases.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700"
                  >
                    <Check className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pie del Modal con Acciones */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap gap-4 items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 block">¿Su caso requiere esta especialidad?</span>
                <span className="text-xs font-bold text-[#101626]">Asesoría directa con la Ab. Sofía Segura</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedSpecialty(null);
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
