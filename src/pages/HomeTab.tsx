import React from 'react';
import {
  Trophy,
  ShieldCheck,
  ShieldAlert,
  Target,
  GraduationCap,
  Calendar,
  Users,
  Monitor,
  Phone,
  Scale,
  FileSearch,
  Compass,
  Gavel,
  Unlock,
  Briefcase,
  User,
  Star,
  ArrowRight
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import type { TabKey } from '../components/Header';
import { LAWYER_INFO } from '../data/legalData';

// Images
import sofiaCutout from '../assets/images/sofia-lawyer-cutout.png';
import portraitFormal from '../assets/images/sofia-portrait-formal.jpg';
import sofiaDeskLandscape from '../assets/images/sofia-desk-landscape.jpg';
import sofiaWorkingLandscape from '../assets/images/sofia-working-landscape.jpg';
import mosaicMainCenter from '../assets/images/mosaic-main-center.jpg';
import mosaicCourtroom from '../assets/images/mosaic-courtroom.jpg';
import mosaicCollaboration from '../assets/images/mosaic-collaboration.jpg';

interface HomeTabProps {
  onSelectTab: (tab: TabKey) => void;
  onOpenEmergencyModal: () => void;
}

export const HomeTab: React.FC<HomeTabProps> = ({ onSelectTab, onOpenEmergencyModal }) => {
  return (
    <div className="w-full bg-white text-slate-800 flex flex-col overflow-hidden">
      
      {/* =========================================================================
          SECCIÓN 1: HERO (Sin líneas divisorias, imagen a ras de borde)
          ========================================================================= */}
      <section className="relative w-full bg-[#EAE0CE] pt-10 sm:pt-14 lg:pt-16 pb-0 overflow-hidden">
        <div className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-end">
            
            {/* Columna Izquierda: Titular, Párrafo, Botones y Tarjetas */}
            <div className="lg:col-span-7 flex flex-col items-start text-left z-10 pb-10 sm:pb-14 lg:pb-16">
              
              {/* Título Principal */}
              <h1 className="font-['Cinzel',serif] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[56px] font-black text-[#1c2237] leading-[1.14] sm:leading-[1.12] tracking-tight mb-4 sm:mb-5 animate-fade-in-up">
                Defensa Penal <br />
                <span className="text-[#aa8640]">Estratégica & Tránsito</span>
              </h1>

              {/* Párrafo Descriptivo */}
              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed max-w-xl mb-6 sm:mb-8 font-normal animate-fade-in-up delay-100">
                Representación jurídica de alta especialización liderada por la{' '}
                <strong className="text-slate-900 font-bold">{LAWYER_INFO.name}</strong>,{' '}
                <span className="text-[#8c6721] font-bold">Experta en Derecho Penal y Tránsito</span>, con{' '}
                <span className="font-semibold">{LAWYER_INFO.specialty}</span> (Universidad Casa Grande) y formación en la{' '}
                <span className="font-semibold">{LAWYER_INFO.academicFormation}</span>.{' '}
                Más de 5 años de experiencia en litigación penal, tránsito, transporte, derecho familiar y laboral.
              </p>

              {/* Fila de Botón */}
              <div className="flex items-center mb-8 sm:mb-10 animate-fade-in-up delay-200">
                <button
                  onClick={() => onSelectTab('contacto')}
                  className="px-8 py-3.5 rounded-full bg-[#c5a059] hover:bg-[#b38b39] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  Descubrir Más
                </button>
              </div>

              {/* 3 Bloques con Iconos Grandes Referentes a las Especialidades */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5 w-full max-w-2xl animate-fade-in-up delay-300">
                
                {/* Bloque 1: Derecho Penal */}
                <div 
                  onClick={() => onSelectTab('servicios')}
                  className="group cursor-pointer flex items-center sm:flex-col sm:items-start gap-3 sm:gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/95 border border-white/80 shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-[0.99]"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#1c2237] text-[#e5c378] flex items-center justify-center flex-shrink-0 shadow-md group-hover:bg-[#c5a059] group-hover:text-white transition-colors">
                    <ShieldAlert className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-['Cinzel',serif] text-sm sm:text-base font-bold text-[#1c2237] leading-tight group-hover:text-[#aa8640] transition-colors">
                      Derecho Penal
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-1 leading-snug font-normal">
                      Defensa técnica, flagrancias 24/7 y litigio en audiencias.
                    </p>
                  </div>
                </div>

                {/* Bloque 2: Derecho Familiar */}
                <div 
                  onClick={() => onSelectTab('servicios')}
                  className="group cursor-pointer flex items-center sm:flex-col sm:items-start gap-3 sm:gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/95 border border-white/80 shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-[0.99]"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#c5a059] text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:bg-[#1c2237] group-hover:text-[#e5c378] transition-colors">
                    <Users className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-['Cinzel',serif] text-sm sm:text-base font-bold text-[#1c2237] leading-tight group-hover:text-[#aa8640] transition-colors">
                      Derecho Familiar
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-1 leading-snug font-normal">
                      Pensiones de alimentos, tenencia, régimen de visitas y divorcios.
                    </p>
                  </div>
                </div>

                {/* Bloque 3: Derecho Laboral */}
                <div 
                  onClick={() => onSelectTab('servicios')}
                  className="group cursor-pointer flex items-center sm:flex-col sm:items-start gap-3 sm:gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/95 border border-white/80 shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-[0.99]"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#1c2237] text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:bg-[#c5a059] group-hover:text-white transition-colors">
                    <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-['Cinzel',serif] text-sm sm:text-base font-bold text-[#1c2237] leading-tight group-hover:text-[#aa8640] transition-colors">
                      Derecho Laboral
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-1 leading-snug font-normal">
                      Despidos intempestivos, vistos buenos, finiquitos y liquidaciones.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Columna Derecha: Silueta y Máscara a ras del borde inferior */}
            <div className="lg:col-span-5 relative flex items-end justify-center self-end leading-none animate-fade-in delay-200">
              
              {/* La Máscara de Color (Contenedor redondeado arriba, a ras abajo) */}
              <div className="absolute w-[82%] sm:w-[86%] h-[80%] bottom-0 rounded-t-[36px] sm:rounded-t-[44px] bg-gradient-to-br from-[#d4af37] via-[#c5a059] to-[#9e7a2b] shadow-[0_20px_45px_rgba(197,160,89,0.4)]" />

              {/* Imagen con Fondo Transparente terminando EXACTAMENTE en el borde inferior */}
              <img
                src={sofiaCutout}
                alt="Ab. Sofía Segura Santana - Abogada Penalista y Tránsito"
                className="relative z-10 w-auto max-h-[350px] sm:max-h-[460px] md:max-h-[520px] lg:max-h-[560px] xl:max-h-[620px] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)] block align-bottom m-0 p-0"
              />

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 2: EXPERIENCIA Y COMPROMISO PENAL
          ========================================================================= */}
      <section className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 w-full py-12 sm:py-20 lg:py-24 animate-fade-in overflow-hidden lg:overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Columna Izquierda: Composición Mosaico con Cuadritos Desplazados */}
          <div className="lg:col-span-6 relative flex justify-center w-full">
            <div className="relative w-full max-w-[340px] sm:max-w-[440px] md:max-w-[480px] h-[360px] sm:h-[440px] md:h-[500px]">
              
              {/* 1. Foto Central Principal: Composición vertical acomodada para permitir superposición de cuadros */}
              <div className="absolute top-6 sm:top-8 left-6 sm:left-12 right-6 sm:right-10 bottom-8 sm:bottom-12 rounded-2xl sm:rounded-[32px] overflow-hidden shadow-lg z-10 bg-slate-100">
                <img
                  src={mosaicMainCenter}
                  alt="Equipo jurídico en análisis de caso penal"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* 2. Cuadrito Superior Izquierdo: Balanza de la justicia y estrados */}
              <div className="absolute -top-3 sm:-top-6 -left-2 sm:-left-6 w-28 sm:w-36 md:w-44 h-28 sm:h-36 md:h-44 rounded-2xl sm:rounded-[26px] overflow-hidden shadow-2xl z-20 border-3 sm:border-4 border-white bg-white">
                <img
                  src={mosaicCourtroom}
                  alt="Estrados judiciales y balanza de la justicia"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* 3. Cuadrito Inferior Derecho: Análisis pericial y revisión de expediente técnico */}
              <div className="absolute bottom-4 sm:bottom-6 -right-2 sm:-right-6 md:-right-8 w-32 sm:w-44 md:w-52 h-32 sm:h-44 md:h-52 rounded-2xl sm:rounded-[28px] overflow-hidden shadow-2xl z-20 border-3 sm:border-4 border-white bg-white">
                <img
                  src={mosaicCollaboration}
                  alt="Revisión técnica de expediente y pruebas periciales"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* 4. Bloque Años de Experiencia con Paleta Dorada Institucional */}
              <div className="absolute bottom-0 left-0 right-6 sm:right-14 md:right-20 h-[72px] sm:h-[84px] md:h-[92px] bg-gradient-to-r from-[#b38b39] to-[#c5a059] rounded-2xl sm:rounded-[24px] z-10 shadow-xl flex items-center gap-3 sm:gap-3.5 px-3.5 sm:px-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white flex items-center justify-center text-[#aa8640] shadow-sm flex-shrink-0">
                  <Trophy className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-xl sm:text-2xl md:text-3xl font-black text-white font-sans tracking-tight">
                    {LAWYER_INFO.yearsExperience}
                  </div>
                  <div className="text-[10px] sm:text-[11px] md:text-xs text-white/95 font-medium mt-0.5">
                    Años de Experiencia
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Columna Derecha: Texto en Español y Paleta Institucional */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Rótulo Superior */}
            <div className="text-xs font-bold tracking-widest text-[#aa8640] uppercase mb-2">
              EXPERIENCIA & COMPROMISO
            </div>

            {/* Título */}
            <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black text-[#1c2237] leading-tight mb-3">
              Defensa Penal Rigurosa <br />
              <span className="text-[#aa8640]">& Litigio Estratégico</span>
            </h2>

            {/* Párrafo Descriptivo */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 max-w-xl font-normal">
              Brindamos patrocinio jurídico penal fundamentado en el análisis dogmático, la investigación pericial rigurosa y una litigación oral contundente en audiencias para salvaguardar de forma irrestricta la libertad y los derechos de cada uno de nuestros representados.
            </p>

            {/* 2 Tarjetas con Iconos en Paleta Dorada */}
            <div className="space-y-3 w-full mb-6">
              
              {/* Tarjeta 1: Valores del Despacho */}
              <div className="flex items-center gap-3.5 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow">
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#c5a059]/15 flex items-center justify-center flex-shrink-0">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#c5a059] flex items-center justify-center text-white shadow-sm">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#1c2237] mb-0.5 font-['Cinzel',serif]">
                    Valores Profesionales
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-normal">
                    Ética procesal inquebrantable, confidencialidad absoluta y lealtad con el justiciable en cada etapa de la causa.
                  </p>
                </div>
              </div>

              {/* Tarjeta 2: Misión Estratégica */}
              <div className="flex items-center gap-3.5 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow">
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#c5a059]/15 flex items-center justify-center flex-shrink-0">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#c5a059] flex items-center justify-center text-white shadow-sm">
                    <Target className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#1c2237] mb-0.5 font-['Cinzel',serif]">
                    Misión Estratégica
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-normal">
                    Diseñar una teoría del caso técnica y sólida para neutralizar acusaciones fiscales arbitrarias e infundadas.
                  </p>
                </div>
              </div>

            </div>

            {/* Barra Inferior de la Abogada Titular */}
            <div className="w-full flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex items-center gap-3">
                <img
                  src={portraitFormal}
                  alt="Ab. Sofía Segura Santana"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover ring-2 ring-[#c5a059]/30 shadow-sm"
                />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#1c2237] font-['Cinzel',serif]">
                    {LAWYER_INFO.name}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium">
                    Experta en Derecho Penal y Tránsito
                  </div>
                </div>
              </div>

              <button
                onClick={() => onSelectTab('perfil')}
                className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#1c2237] hover:bg-[#c5a059] text-xs font-bold text-white transition-all shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Conocer Perfil
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 3: SOBRE MÍ (2 COLUMNAS: IMAGEN Y TEXTO DE IGUAL ALTURA VERTICAL)
          ========================================================================= */}
      <section className="w-full bg-[#FAF7F2] pt-6 sm:pt-10 lg:pt-12 pb-0 overflow-hidden animate-fade-in">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-stretch">
          
          {/* Columna Izquierda: Imagen a ras del margen izquierdo y a ras del fondo de sección */}
          <div className="relative w-full h-[280px] sm:h-[380px] lg:h-full min-h-[280px] sm:min-h-[380px] lg:min-h-[460px] overflow-hidden">
            <img
              src={sofiaDeskLandscape}
              alt="Ab. Sofía Segura Santana en su despacho"
              className="absolute inset-0 w-full h-full object-cover object-center rounded-none shadow-none transform hover:scale-[1.01] transition-transform duration-500"
            />
          </div>

          {/* Columna Derecha: Texto estructurado que define la altura vertical exacta */}
          <div className="w-full px-5 sm:px-10 lg:px-12 xl:px-20 py-8 sm:py-10 lg:py-10 flex flex-col justify-center items-start text-left">
            
            <div className="text-xs font-bold tracking-widest text-[#aa8640] uppercase mb-2">
              SOBRE MÍ
            </div>
            
            <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#1c2237] leading-tight mb-3">
              Ab. Sofía Segura Santana
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-normal max-w-xl">
              Ejerzo el patrocinio jurídico penal fundamentado en la ética procesal, el rigor dogmático y el respeto irrestricto de las garantías constitucionales. Mi compromiso es brindar una defensa técnica responsable, inmediata y frontal, apegada al Código Orgánico Integral Penal y los tratados de derechos humanos.
            </p>

            {/* 3 Viñetas con Iconos elegantes */}
            <div className="space-y-3 mb-6 w-full max-w-xl">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                <div className="w-7 h-7 rounded-full bg-[#c5a059]/15 flex items-center justify-center text-[#c5a059] flex-shrink-0">
                  <Scale className="w-3.5 h-3.5" />
                </div>
                <span>Experta en Derecho Penal y Tránsito con más de 5 años de experiencia</span>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                <div className="w-7 h-7 rounded-full bg-[#c5a059]/15 flex items-center justify-center text-[#c5a059] flex-shrink-0">
                  <GraduationCap className="w-3.5 h-3.5" />
                </div>
                <span>Maestrías en Derecho Procesal Penal & Constitucional (Casa Grande) · Grado en Uniandes</span>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                <div className="w-7 h-7 rounded-full bg-[#c5a059]/15 flex items-center justify-center text-[#c5a059] flex-shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span>Atención en Buena Fe (Los Ríos) y cobertura a nivel nacional</span>
              </div>
            </div>

            {/* Botón Píldora: Conocer Más */}
            <button
              onClick={() => onSelectTab('perfil')}
              className="px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#1c2237] hover:bg-[#c5a059] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Conocer Más Sobre Mí
            </button>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 4: METODOLOGÍA PROCESAL (2 COLUMNAS: IMAGEN Y TEXTO DE IGUAL ALTURA VERTICAL)
          ========================================================================= */}
      <section className="w-full bg-white pt-0 pb-8 sm:pb-10 lg:pb-12 overflow-hidden animate-fade-in">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-stretch">
          
          {/* Columna Izquierda: Metodología con línea de tiempo y texto que define la altura vertical exacta */}
          <div className="w-full px-5 sm:px-10 lg:px-12 xl:px-20 py-8 sm:py-10 lg:py-10 flex flex-col justify-center items-start text-left order-2 lg:order-1">
            
            <div className="text-xs font-bold tracking-widest text-[#aa8640] uppercase mb-2">
              METODOLOGÍA DE DEFENSA PENAL
            </div>
            
            <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#1c2237] leading-tight mb-6">
              Un Proceso Estratégico, Paso a Paso
            </h2>

            {/* Pasos ordenados con iconos temáticos al lado izquierdo de cada párrafo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-xl">
              
              {/* Paso 1: Evaluación Inicial */}
              <div className="flex flex-col items-start text-left">
                <h3 className="font-bold text-xs sm:text-sm text-[#1c2237] mb-1.5 sm:mb-2 font-['Cinzel',serif]">
                  Evaluación Inicial
                </h3>
                <div className="flex items-center gap-3 w-full">
                  <div className="w-11 h-11 sm:w-[52px] sm:h-[52px] rounded-xl bg-[#c5a059]/15 border border-[#c5a059]/25 flex items-center justify-center text-[#c5a059] flex-shrink-0 shadow-sm">
                    <FileSearch className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-normal flex-1">
                    Revisión preliminar de los hechos, estado procesal y medidas cautelares urgentes.
                  </p>
                </div>
              </div>

              {/* Paso 2: Teoría del Caso */}
              <div className="flex flex-col items-start text-left">
                <h3 className="font-bold text-xs sm:text-sm text-[#1c2237] mb-1.5 sm:mb-2 font-['Cinzel',serif]">
                  Teoría del Caso
                </h3>
                <div className="flex items-center gap-3 w-full">
                  <div className="w-11 h-11 sm:w-[52px] sm:h-[52px] rounded-xl bg-[#c5a059]/15 border border-[#c5a059]/25 flex items-center justify-center text-[#c5a059] flex-shrink-0 shadow-sm">
                    <Compass className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-normal flex-1">
                    Auditoría fiscal rigurosa, acopio de pruebas de descargo y peritajes independientes.
                  </p>
                </div>
              </div>

              {/* Paso 3: Litigio Oral */}
              <div className="flex flex-col items-start text-left">
                <h3 className="font-bold text-xs sm:text-sm text-[#1c2237] mb-1.5 sm:mb-2 font-['Cinzel',serif]">
                  Litigio Oral
                </h3>
                <div className="flex items-center gap-3 w-full">
                  <div className="w-11 h-11 sm:w-[52px] sm:h-[52px] rounded-xl bg-[#c5a059]/15 border border-[#c5a059]/25 flex items-center justify-center text-[#c5a059] flex-shrink-0 shadow-sm">
                    <Gavel className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-normal flex-1">
                    Defensa contundente en estrados judiciales ante jueces, tribunales y fiscalía.
                  </p>
                </div>
              </div>

              {/* Paso 4: Recursos y Libertad */}
              <div className="flex flex-col items-start text-left">
                <h3 className="font-bold text-xs sm:text-sm text-[#1c2237] mb-1.5 sm:mb-2 font-['Cinzel',serif]">
                  Recursos y Libertad
                </h3>
                <div className="flex items-center gap-3 w-full">
                  <div className="w-11 h-11 sm:w-[52px] sm:h-[52px] rounded-xl bg-[#c5a059]/15 border border-[#c5a059]/25 flex items-center justify-center text-[#c5a059] flex-shrink-0 shadow-sm">
                    <Unlock className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-normal flex-1">
                    Apelaciones, casación o hábeas corpus para asegurar justicia y libertad plena.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Columna Derecha: Imagen a ras del margen derecho y a ras del tope superior de sección */}
          <div className="relative w-full h-[280px] sm:h-[380px] lg:h-full min-h-[280px] sm:min-h-[380px] lg:min-h-[460px] overflow-hidden order-1 lg:order-2">
            <img
              src={sofiaWorkingLandscape}
              alt="Ab. Sofía Segura Santana analizando expediente"
              className="absolute inset-0 w-full h-full object-cover object-center rounded-none shadow-none transform hover:scale-[1.01] transition-transform duration-500"
            />
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 5: 3 TARJETAS INFERIORES (Público, Modalidad y Agendamiento - Sin líneas divisorias)
          ========================================================================= */}
      <section className="w-full bg-[#FAF7F2] py-12 sm:py-20 lg:py-24 animate-fade-in-up">
        <div className="max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            
            {/* Tarjeta 1: PÚBLICO ATENDIDO */}
            <div className="bg-white rounded-3xl sm:rounded-[32px] p-6 sm:p-8 lg:p-9 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between text-left">
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#c5a059]/15 flex items-center justify-center text-[#c5a059] mb-5 sm:mb-6">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-2">
                  PÚBLICO ATENDIDO
                </div>
                <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold text-[#1c2237] mb-2 sm:mb-3">
                  Personas, Familias y Empresas
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  Patrocinio penal individual ante investigaciones y defensa especializada en derecho penal económico societario.
                </p>
              </div>
              <div className="pt-4 sm:pt-6 border-t border-slate-100 mt-6 sm:mt-8 text-xs text-slate-400 font-medium">
                Atención personalizada y exclusiva.
              </div>
            </div>

            {/* Tarjeta 2: MODALIDAD DE ATENCIÓN */}
            <div className="bg-white rounded-3xl sm:rounded-[32px] p-6 sm:p-8 lg:p-9 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between text-left">
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#c5a059]/15 flex items-center justify-center text-[#c5a059] mb-5 sm:mb-6">
                  <Monitor className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-2">
                  MODALIDAD DE ATENCIÓN
                </div>
                <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold text-[#1c2237] mb-2 sm:mb-3">
                  Presencial y Telemática
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  Despacho físico en Buena Fe (diagonal a Fiscalía General del Estado) y sesiones seguras por videoconferencia a nivel nacional.
                </p>
              </div>
              <div className="pt-4 sm:pt-6 border-t border-slate-100 mt-6 sm:mt-8 text-xs text-slate-400 font-medium">
                Calle Felipe Álvarez, Cantón Buena Fe, Los Ríos.
              </div>
            </div>

            {/* Tarjeta 3: AGENDAMIENTO (Tarjeta destacada oscura con botón de WhatsApp) */}
            <div className="bg-[#1c2237] rounded-3xl sm:rounded-[32px] p-6 sm:p-8 lg:p-9 shadow-2xl flex flex-col justify-between text-left text-white border border-[#c5a059]/30">
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 flex items-center justify-center text-[#e5c378] mb-5 sm:mb-6 border border-white/10">
                  <Calendar className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#e5c378] uppercase mb-2">
                  AGENDAMIENTO & HORARIOS
                </div>
                <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold text-white mb-2">
                  Oficina 8h00 a 17h00 | Teléfono 24 Horas
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5 sm:mb-6">
                  Atención presencial en oficina de 8h00 a 17h00 y asistencia telefónica las 24 horas para urgencias, flagrancias y siniestros.
                </p>
                <div className="flex items-center gap-2.5 text-sm sm:text-base font-bold text-white mb-5 sm:mb-6">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#c5a059]" />
                  <span>{LAWYER_INFO.phones[0].display}</span>
                </div>
              </div>

              {/* Botón Blanco de WhatsApp */}
              <a
                href={`https://wa.me/${LAWYER_INFO.phones[0].raw}?text=${encodeURIComponent(LAWYER_INFO.whatsappMessageGeneral)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 sm:py-3.5 px-4 rounded-full bg-white hover:bg-slate-100 text-[#1c2237] font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] transition-transform group-hover:scale-110" />
                <span>Hablar por WhatsApp</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 6: OPINIONES & TESTIMONIOS VERIFICADOS DE CLIENTES
          Ocupa todo el ancho de la pestaña, sin hojas y con íconos de perfil sin foto
          Pegada directamente al footer
          ========================================================================= */}
      <section className="relative w-full bg-white border-t border-stone-200/90 overflow-hidden mb-0 pb-0">
        <div className="w-full flex flex-col lg:flex-row items-stretch relative">
          
          {/* Columna Izquierda: Panel Verde Bosque Oscuro con Borde Ondulado Orgánico */}
          <div className="w-full lg:w-[360px] xl:w-[410px] 2xl:w-[450px] flex-shrink-0 bg-[#0f2a1d] text-white p-8 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between relative z-20 text-left">
            
            {/* Contenido Superior */}
            <div>
              {/* Badge con ícono de Estrella */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b3d2b] border border-[#74c69d]/40 text-[#a3e635] text-[11px] font-bold tracking-widest uppercase mb-4 w-fit shadow-xs">
                <Star className="w-3.5 h-3.5 fill-[#a3e635]" />
                <span>OPINIONES & TESTIMONIOS</span>
              </div>

              {/* Título Principal */}
              <h2 className="font-['Cinzel',serif] text-3xl sm:text-4xl xl:text-[40px] font-bold text-white leading-[1.12] mb-3 tracking-tight">
                Confianza & <br />
                <span className="text-[#a3e635]">Casos de Éxito.</span>
              </h2>

              {/* Calificación Promedio con 5 Estrellas Doradas */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center text-[#e5c378]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#e5c378]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-emerald-100/90">5.0 / 5.0 Calificación</span>
              </div>

              {/* Párrafo Descriptivo */}
              <p className="text-xs sm:text-sm text-emerald-100/85 leading-relaxed font-normal mb-8 max-w-sm">
                La tranquilidad y libertad de nuestros representados respaldan nuestro ejercicio profesional con honestidad, inmediatez y solvencia técnica en audiencias.
              </p>
            </div>

            {/* Botón Píldora Inferior: Agendar Consulta */}
            <div className="pt-4 lg:pt-0">
              <button
                onClick={() => onSelectTab('contacto')}
                className="px-7 py-3.5 rounded-full bg-[#4a7c59] hover:bg-[#385e43] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2.5 group w-fit transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Agendar Consulta</span>
                <ArrowRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Borde Ondulado Orgánico S-Curve (Solo Desktop, extiende el color verde hacia las opiniones) */}
            <div className="hidden lg:block absolute -right-10 top-0 bottom-0 w-10 h-full pointer-events-none z-20 text-[#0f2a1d]">
              <svg
                viewBox="0 0 40 500"
                preserveAspectRatio="none"
                className="w-full h-full fill-current"
              >
                <path d="M 0,0 L 14,0 C 42,110 42,170 20,260 C 2,350 8,420 22,500 L 0,500 Z" />
              </svg>
            </div>

          </div>

          {/* Columna Derecha: Cuadrícula de 5 Opiniones con Íconos de Perfil sin Foto y Línea Ondulada */}
          <div className="flex-1 w-full bg-white p-8 sm:p-10 lg:p-12 xl:p-14 relative flex items-center justify-center overflow-hidden z-10">
            
            {/* Contenedor Relativo para las 5 Opiniones y la Línea Ondulada */}
            <div className="relative w-full z-10">
              
              {/* Línea Ondulada Conectora tipo Senoide (Visible en Desktop) */}
              <div className="hidden xl:block absolute left-4 right-4 top-8 h-10 pointer-events-none -z-0">
                <svg viewBox="0 0 1000 60" preserveAspectRatio="none" className="w-full h-full fill-none">
                  <path
                    d="M 50,30 Q 150 5, 250 30 Q 350 55, 450 30 Q 550 5, 650 30 Q 750 55, 850 30 Q 950 5, 1000 30"
                    stroke="#52796f"
                    strokeWidth="1.8"
                    strokeDasharray="4 4"
                    opacity="0.35"
                  />
                  {/* Puntos conectores sutiles */}
                  <circle cx="150" cy="8" r="3" fill="#52796f" opacity="0.4" />
                  <circle cx="350" cy="52" r="3" fill="#52796f" opacity="0.4" />
                  <circle cx="550" cy="8" r="3" fill="#52796f" opacity="0.4" />
                  <circle cx="750" cy="52" r="3" fill="#52796f" opacity="0.4" />
                  <circle cx="950" cy="8" r="3" fill="#52796f" opacity="0.4" />
                </svg>
              </div>

              {/* Grilla de las 5 Opiniones */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6 xl:gap-5 items-stretch relative z-10 text-center">
                
                {/* Opinión 1: Derecho Penal */}
                <div className="flex flex-col items-center bg-stone-50/70 p-4 sm:p-5 rounded-2xl border border-stone-100 hover:border-[#52796f]/40 hover:bg-white hover:shadow-md transition-all group">
                  <div className="relative mb-2.5 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full border-2 border-[#52796f]/30 flex items-center justify-center bg-white shadow-xs p-1">
                      <div className="w-full h-full rounded-full bg-[#0f2a1d] text-emerald-100 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                        <User className="w-6 h-6 stroke-[2]" />
                      </div>
                    </div>
                  </div>
                  {/* Estrellas */}
                  <div className="flex items-center justify-center gap-0.5 text-[#e5c378] mb-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#e5c378]" />
                    ))}
                  </div>
                  <h4 className="font-['Cinzel',serif] text-sm font-bold text-slate-900 leading-tight mb-0.5">Carlos M.</h4>
                  <div className="text-[10px] font-bold text-[#4a7c59] uppercase tracking-wider mb-2">Penal · Flagrancia</div>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-normal italic">
                    “Acompañamiento inmediato en audiencia de flagrancia. La Ab. Sofía logró medidas sustitutivas con una defensa intachable.”
                  </p>
                </div>

                {/* Opinión 2: Tránsito & Siniestros */}
                <div className="flex flex-col items-center bg-stone-50/70 p-4 sm:p-5 rounded-2xl border border-stone-100 hover:border-[#52796f]/40 hover:bg-white hover:shadow-md transition-all group">
                  <div className="relative mb-2.5 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full border-2 border-[#52796f]/30 flex items-center justify-center bg-white shadow-xs p-1">
                      <div className="w-full h-full rounded-full bg-[#0f2a1d] text-emerald-100 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                        <User className="w-6 h-6 stroke-[2]" />
                      </div>
                    </div>
                  </div>
                  {/* Estrellas */}
                  <div className="flex items-center justify-center gap-0.5 text-[#e5c378] mb-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#e5c378]" />
                    ))}
                  </div>
                  <h4 className="font-['Cinzel',serif] text-sm font-bold text-slate-900 leading-tight mb-0.5">Ing. Roberto V.</h4>
                  <div className="text-[10px] font-bold text-[#4a7c59] uppercase tracking-wider mb-2">Tránsito & Siniestros</div>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-normal italic">
                    “Su peritaje técnico en el juzgado desvirtuó acusaciones infundadas. Profesionalismo y solvencia de primer nivel.”
                  </p>
                </div>

                {/* Opinión 3: Derecho Familiar */}
                <div className="flex flex-col items-center bg-stone-50/70 p-4 sm:p-5 rounded-2xl border border-stone-100 hover:border-[#52796f]/40 hover:bg-white hover:shadow-md transition-all group">
                  <div className="relative mb-2.5 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full border-2 border-[#52796f]/30 flex items-center justify-center bg-white shadow-xs p-1">
                      <div className="w-full h-full rounded-full bg-[#0f2a1d] text-emerald-100 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                        <User className="w-6 h-6 stroke-[2]" />
                      </div>
                    </div>
                  </div>
                  {/* Estrellas */}
                  <div className="flex items-center justify-center gap-0.5 text-[#e5c378] mb-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#e5c378]" />
                    ))}
                  </div>
                  <h4 className="font-['Cinzel',serif] text-sm font-bold text-slate-900 leading-tight mb-0.5">Fam. Mendoza P.</h4>
                  <div className="text-[10px] font-bold text-[#4a7c59] uppercase tracking-wider mb-2">Familia · Tenencia</div>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-normal italic">
                    “Atención humana y firme en el proceso de tenencia y pensión. Resolvió la causa con total transparencia y rapidez.”
                  </p>
                </div>

                {/* Opinión 4: Derecho Laboral */}
                <div className="flex flex-col items-center bg-stone-50/70 p-4 sm:p-5 rounded-2xl border border-stone-100 hover:border-[#52796f]/40 hover:bg-white hover:shadow-md transition-all group">
                  <div className="relative mb-2.5 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full border-2 border-[#52796f]/30 flex items-center justify-center bg-white shadow-xs p-1">
                      <div className="w-full h-full rounded-full bg-[#0f2a1d] text-emerald-100 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                        <User className="w-6 h-6 stroke-[2]" />
                      </div>
                    </div>
                  </div>
                  {/* Estrellas */}
                  <div className="flex items-center justify-center gap-0.5 text-[#e5c378] mb-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#e5c378]" />
                    ))}
                  </div>
                  <h4 className="font-['Cinzel',serif] text-sm font-bold text-slate-900 leading-tight mb-0.5">Lcda. Patricia S.</h4>
                  <div className="text-[10px] font-bold text-[#4a7c59] uppercase tracking-wider mb-2">Derecho Laboral</div>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-normal italic">
                    “Patrocinó mi reclamo por despido intempestivo con contundencia, asegurando el cobro íntegro de mis liquidaciones de ley.”
                  </p>
                </div>

                {/* Opinión 5: Compañías de Transporte */}
                <div className="flex flex-col items-center bg-stone-50/70 p-4 sm:p-5 rounded-2xl border border-stone-100 hover:border-[#52796f]/40 hover:bg-white hover:shadow-md transition-all group">
                  <div className="relative mb-2.5 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full border-2 border-[#52796f]/30 flex items-center justify-center bg-white shadow-xs p-1">
                      <div className="w-full h-full rounded-full bg-[#0f2a1d] text-emerald-100 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                        <User className="w-6 h-6 stroke-[2]" />
                      </div>
                    </div>
                  </div>
                  {/* Estrellas */}
                  <div className="flex items-center justify-center gap-0.5 text-[#e5c378] mb-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#e5c378]" />
                    ))}
                  </div>
                  <h4 className="font-['Cinzel',serif] text-sm font-bold text-slate-900 leading-tight mb-0.5">Operadora T.</h4>
                  <div className="text-[10px] font-bold text-[#4a7c59] uppercase tracking-wider mb-2">Transporte · ANT</div>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-normal italic">
                    “Asesoría corporativa integral para la obtención y formalización de permisos ante la ANT. Gran capacidad técnica y seriedad.”
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
