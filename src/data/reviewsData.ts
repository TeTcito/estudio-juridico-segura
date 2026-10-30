export interface ReviewItem {
  id: string;
  name: string;
  matter: string;
  location: string;
  comment: string;
  rating: number;
  createdAt?: string;
  isNew?: boolean;
}

export const STORAGE_KEY_REVIEWS = 'estudio_juridico_reviews';

export const DEFAULT_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Carlos M.",
    matter: "Penal · Flagrancia",
    location: "Buena Fe",
    comment: "Acompañamiento inmediato en audiencia de flagrancia. La Ab. Sofía logró medidas sustitutivas con una defensa intachable.",
    rating: 5,
  },
  {
    id: "rev-2",
    name: "Ing. Roberto V.",
    matter: "Tránsito & Siniestros",
    location: "Quevedo",
    comment: "Su peritaje técnico en el juzgado desvirtuó acusaciones infundadas. Profesionalismo y solvencia de primer nivel.",
    rating: 5,
  },
  {
    id: "rev-3",
    name: "Fam. Mendoza P.",
    matter: "Familia · Tenencia",
    location: "Buena Fe",
    comment: "Atención humana y firme en el proceso de tenencia y pensión. Resolvió la causa con total transparencia y rapidez.",
    rating: 5,
  },
  {
    id: "rev-4",
    name: "Lcda. Patricia S.",
    matter: "Derecho Laboral",
    location: "Los Ríos",
    comment: "Patrocinó mi reclamo por despido intempestivo con contundencia, asegurando el cobro íntegro de mis liquidaciones de ley.",
    rating: 5,
  },
  {
    id: "rev-5",
    name: "Operadora T.",
    matter: "Transporte · ANT",
    location: "Los Ríos",
    comment: "Asesoría corporativa integral para la obtención y formalización de permisos ante la ANT. Gran capacidad técnica y seriedad.",
    rating: 5,
  },
];

export function getStoredReviews(): ReviewItem[] {
  if (typeof window === 'undefined') return DEFAULT_REVIEWS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_REVIEWS);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Error leyendo reseñas guardadas:', e);
  }
  return DEFAULT_REVIEWS;
}

export function saveNewReview(item: ReviewItem): ReviewItem[] {
  const current = getStoredReviews();
  const updated = [item, ...current];
  try {
    localStorage.setItem(STORAGE_KEY_REVIEWS, JSON.stringify(updated));
  } catch (e) {
    console.warn('Error guardando reseña:', e);
  }
  return updated;
}
