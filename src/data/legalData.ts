export interface PracticeArea {
  id: string;
  title: string;
  category: 'penal' | 'transito' | 'familia' | 'laboral';
  shortDesc: string;
  fullDesc: string;
  cases: string[];
  icon: string;
  badge?: string;
}

export interface LegalPillar {
  title: string;
  description: string;
  icon: string;
}

export const LAWYER_INFO = {
  name: "Ab. Sofía Segura Santana",
  title: "Experta en Derecho Penal y Tránsito",
  specialty: "Magíster en Derecho Procesal Penal & Constitucional",
  academicFormation: "Universidad Autónoma Regional de Los Andes (Uniandes)",
  credentials: "23-2022-6",
  postgraduates: "Maestrías en Universidad Casa Grande",
  postgraduatesList: [
    "Maestría en Derecho Procesal Penal (Universidad Casa Grande)",
    "Maestría en Derecho Constitucional (Universidad Casa Grande)"
  ],
  firmName: "Estudio Jurídico Segura Santana & Asociados",
  phones: [
    { display: "099 820 3766", raw: "593998203766", isPrimary: true },
    { display: "098 160 3299", raw: "593981603299", isPrimary: false }
  ],
  email: "alina_4759@hotmail.com",
  address: "Calle Felipe Álvarez, diagonal a la Fiscalía General del Estado (atrás del Coliseo Club Patria)",
  addressShort: "Calle Felipe Álvarez (diagonal a la Fiscalía), Buena Fe",
  canton: "Cantón Buena Fe",
  province: "Los Ríos",
  country: "Ecuador",
  city: "Cantón Buena Fe, Los Ríos · Cobertura y Traslados a Nivel Nacional",
  scheduleOffice: "8h00 am a 17h00 pm (Lunes a Viernes)",
  schedulePhone: "Atención Telefónica y Urgencias las 24 horas (24/7)",
  yearsExperience: "4",
  yearsExperienceText: "4 Años de Experiencia",
  statSuccessRate: "98%",
  statFlagrancies: "300+",
  whatsappMessageUrgent: "Hola Ab. Sofía Segura Santana, requiero asistencia legal penal urgente por una detención/caso penal.",
  whatsappMessageGeneral: "Estimada Ab. Sofía Segura, me comunico para agendar una consulta jurídica especializada."
};

// Especialidades específicas aprobadas y requeridas
export const DETAILED_SPECIALTIES = [
  { id: "receptacion", name: "Receptación", category: "Penal", desc: "Defensa técnica probatoria frente a presunción de tenencia de bienes de procedencia injustificada." },
  { id: "robo", name: "Robo Simple y Agravado", category: "Penal", desc: "Patrocinio en audiencias de juzgamiento, exclusión de pruebas ilícitas y contrainterrogatorios." },
  { id: "secuestro", name: "Secuestro", category: "Penal", desc: "Litigio de alta complejidad en delitos contra la libertad individual ante tribunales penales." },
  { id: "secuestro-extorsivo", name: "Secuestro Extorsivo", category: "Penal", desc: "Estrategia jurídica y pericial especializada en acusaciones por extorsión y privación de libertad." },
  { id: "estafa", name: "Estafa y Delitos Patrimoniales", category: "Penal", desc: "Defensa penal económica en defraudaciones, abusos de confianza y controversias patrimoniales." },
  { id: "asociacion-ilicita", name: "Asociación Ilícita", category: "Penal", desc: "Impugnación de imputaciones colectivas y desvirtuación técnica de concertación delictiva." },
  { id: "delincuencia-organizada", name: "Delincuencia Organizada", category: "Penal", desc: "Defensa estratégica de alto impacto en causas de investigación previa e instrucción fiscal." },
  { id: "materia-transito", name: "Materia y Delitos de Tránsito", category: "Tránsito", desc: "Experta en accidentes, lesiones, peritajes mecánicos, audiencias de tránsito e impugnaciones." },
  { id: "companias-transporte", name: "Constitución y Legalización de Compañías de Transporte", category: "Tránsito / Corporativo", desc: "Asesoría corporativa integral, trámites ante la ANT, estatutos y formalización de operadoras." },
  { id: "derecho-familiar", name: "Derecho Familiar", category: "Familia", desc: "Pensiones de alimentos, régimen de visitas, tenencia de menores, divorcios y violencia intrafamiliar." },
  { id: "derecho-laboral", name: "Derecho Laboral", category: "Laboral", desc: "Patrocinio en despidos intempestivos, vistos buenos, actas de finiquito e indemnizaciones laborales." }
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "penal-general",
    title: "Derecho Penal & Delitos Complejos",
    category: "penal",
    shortDesc: "Defensa técnica en robo, receptación, estafa, secuestro extorsivo, asociación ilícita y delincuencia organizada.",
    fullDesc: "Litigio penal riguroso estructurado sobre la teoría del caso, control de pruebas periciales forenses, contrainterrogatorios contundentes y defensa en estrados de garantías penales.",
    cases: ["Robo simple y agravado", "Receptación y estafa", "Secuestro y secuestro extorsivo", "Asociación ilícita y delincuencia organizada"],
    icon: "Scale",
    badge: "ESPECIALIDAD PRINCIPAL"
  },
  {
    id: "flagrancias",
    title: "Flagrancias y Detenciones 24/7",
    category: "penal",
    shortDesc: "Intervención inmediata en las primeras 24 horas críticas ante Fiscalía y Unidad Judicial.",
    fullDesc: "Asistencia letrada urgente en la calificación de legalidad de la aprehensión, audiencia de formulación de cargos y solicitud fundamentada de medidas sustitutivas a la prisión preventiva.",
    cases: ["Calificación de aprehensión flagrante", "Medidas no privativas de libertad", "Acompañamiento a Fiscalía", "Hábeas corpus correctivo de urgencia"],
    icon: "ShieldAlert",
    badge: "URGENCIA 24/7"
  },
  {
    id: "materia-transito",
    title: "Experta en Derecho de Tránsito",
    category: "transito",
    shortDesc: "Patrocinio letrado en delitos y contravenciones de tránsito, siniestros y reclamos de indemnización.",
    fullDesc: "Defensa técnica rigurosa ante juzgados de tránsito, impugnación de peritajes del SIAT/OIAT, audiencias de flagrancia por accidentes y tutela de licencias de conducir.",
    cases: ["Delitos y accidentes de tránsito", "Impugnación de boletas y citaciones", "Peritajes mecánicos y reconstrucción de hechos", "Reparación integral y acuerdos conciliatorios"],
    icon: "ShieldCheck",
    badge: "EXPERTA CERTIFICADA"
  },
  {
    id: "companias-transporte",
    title: "Compañías de Transporte",
    category: "transito",
    shortDesc: "Constitución, legalización, reformas estatutarias y obtención de permisos de operación de transporte.",
    fullDesc: "Asesoramiento legal corporativo integral a operadoras de transporte terrestre: cooperativas, compañías de taxis, carga pesada, escolar e institucional ante la ANT y GADs.",
    cases: ["Constitución legal de compañías", "Obtención de permisos de operación", "Reformas estatutarias y aumentos de capital", "Resolución de conflictos societarios de transporte"],
    icon: "Briefcase",
    badge: "TRANSPORTE Y CORPORATIVO"
  },
  {
    id: "derecho-familiar",
    title: "Derecho Familiar y Niñez",
    category: "familia",
    shortDesc: "Tutela de derechos de familia, fijación y rebaja de pensiones de alimentos, divorcios y violencia intrafamiliar.",
    fullDesc: "Acompañamiento sensible, técnico y firme en controversias de familia: régimen de visitas, tenencia, patria potestad, medidas de protección inmediatas y disolución conyugal.",
    cases: ["Pensiones alimenticias (fijación, rebaja, aumento)", "Régimen de visitas y tenencia", "Divorcios y liquidación de sociedad conyugal", "Medidas de protección por violencia intrafamiliar"],
    icon: "Gavel",
    badge: "FAMILIA Y PROTECCIÓN"
  },
  {
    id: "derecho-laboral",
    title: "Derecho Laboral",
    category: "laboral",
    shortDesc: "Defensa de trabajadores y empleadores en conflictos individuales, despidos y vistos buenos.",
    fullDesc: "Asesoría y patrocinio letrado en sede administrativa (Ministerio del Trabajo) y judicial en reclamos de indemnización por despido intempestivo, liquidaciones y trámites de visto bueno.",
    cases: ["Despidos intempestivos e indemnizaciones", "Trámites de Visto Bueno", "Actas de finiquito y liquidaciones", "Defensa patronal y de trabajadores"],
    icon: "FileCheck",
    badge: "LABORAL Y EMPLEO"
  }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Evaluación Confidencial Inmediata",
    desc: "Análisis preliminar de la situación legal, partes procesales y estado de la investigación o detención."
  },
  {
    number: "02",
    title: "Auditoría del Expediente Fiscal",
    desc: "Revisión minuciosa de los elementos de convicción, peritajes, informes policiales y posibles nulidades."
  },
  {
    number: "03",
    title: "Estrategia y Teoría del Caso",
    desc: "Diseño técnico de la defensa: pruebas de descargo, peritajes independientes y líneas de interrogatorio."
  },
  {
    number: "04",
    title: "Litigio Oral Contundente",
    desc: "Defensa en audiencia ante jueces y tribunales penales, con alegatos fundamentados y recursos de ley."
  }
];
