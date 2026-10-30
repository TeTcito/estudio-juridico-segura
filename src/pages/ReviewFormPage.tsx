import React, { useState } from 'react';
import { Star, Check, ArrowLeft, ShieldCheck, Scale, Sparkles } from 'lucide-react';
import { LAWYER_INFO } from '../data/legalData';
import { saveNewReview, type ReviewItem } from '../data/reviewsData';
import logoImg from '../assets/images/logo.png';

interface ReviewFormPageProps {
  onComplete: (reviewId: string) => void;
  onCancel: () => void;
}

export const ReviewFormPage: React.FC<ReviewFormPageProps> = ({ onComplete, onCancel }) => {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState('Buena Fe');
  const [matter, setMatter] = useState('Derecho Penal · Flagrancia');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const getRatingLabel = (val: number) => {
    switch (val) {
      case 5:
        return 'Excelente (5 de 5 estrellas) — Muy satisfecho/a';
      case 4:
        return 'Muy Buena (4 de 5 estrellas) — Buen resultado';
      case 3:
        return 'Buena (3 de 5 estrellas) — Conforme';
      case 2:
        return 'Regular (2 de 5 estrellas)';
      default:
        return 'Insuficiente (1 de 5 estrellas)';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !comment.trim()) return;

    setIsSubmitting(true);

    const newId = `rev-${Date.now()}`;
    const newReview: ReviewItem = {
      id: newId,
      name: author.trim(),
      matter,
      location: location.trim() || 'Ecuador',
      comment: comment.trim(),
      rating,
      createdAt: new Date().toISOString(),
      isNew: true,
    };

    saveNewReview(newReview);
    setSubmitted(true);

    setTimeout(() => {
      onComplete(newId);
    }, 1800);
  };

  return (
    <div className="min-h-screen w-full bg-[#FAF5EE] text-slate-800 flex flex-col justify-between py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-['Montserrat',sans-serif]">
      
      {/* Resplandores dorados sutiles de fondo */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#c5a059]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#101626]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Cabecera / Branding del Estudio */}
      <div className="max-w-2xl mx-auto w-full text-center relative z-10 mb-6">
        <div className="inline-flex items-center gap-3 p-2 px-4 rounded-full bg-white/80 border border-[#c5a059]/30 shadow-xs mb-3">
          <div className="w-8 h-8 rounded-lg bg-[#101626] p-1 flex items-center justify-center border border-[#c5a059]/40 shadow-xs">
            <img src={logoImg} alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div className="text-left">
            <div className="font-['Cinzel',serif] text-xs font-bold text-[#101626] leading-tight">
              {LAWYER_INFO.name}
            </div>
            <div className="text-[10px] text-[#aa8640] font-bold uppercase tracking-wider">
              {LAWYER_INFO.title}
            </div>
          </div>
        </div>
      </div>

      {/* Tarjeta Principal del Formulario */}
      <div className="max-w-xl mx-auto w-full relative z-10">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-stone-200/90 text-left relative overflow-hidden">
          
          {/* Barra decorativa superior dorada */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#101626] via-[#c5a059] to-[#101626]" />

          {!submitted ? (
            <>
              {/* Botón Volver */}
              <button
                type="button"
                onClick={onCancel}
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-[#101626] font-medium transition-colors mb-5 group cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                <span>Volver al sitio web principal</span>
              </button>

              {/* Título del Formulario */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-[#c5a059]" />
                  <span className="text-[11px] font-bold tracking-widest text-[#aa8640] uppercase">
                    FORMULARIO DE TESTIMONIOS
                  </span>
                </div>
                <h1 className="font-['Cinzel',serif] text-2xl sm:text-3xl font-bold text-[#101626] leading-tight mb-2">
                  Comparta su Experiencia
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Su opinión es muy valiosa para nosotros y permite a otros justiciables conocer la calidad, ética y eficacia de nuestro patrocinio jurídico.
                </p>
              </div>

              {/* Formulario */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* 1. Selector de Calificación (Estrellas Grandes) */}
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/70">
                  <label className="block text-xs font-bold text-slate-800 mb-1.5 font-['Cinzel',serif]">
                    ¿Cómo califica la atención recibida? *
                  </label>
                  
                  <div className="flex items-center gap-1.5 py-1">
                    {[1, 2, 3, 4, 5].map((star) => {
                      const isActive = (hoverRating !== null ? star <= hoverRating : star <= rating);
                      return (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(null)}
                          className="p-1 focus:outline-none transition-transform hover:scale-125 cursor-pointer"
                          aria-label={`Calificar con ${star} estrellas`}
                        >
                          <Star
                            className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors ${
                              isActive
                                ? 'text-[#c5a059] fill-[#c5a059] drop-shadow-sm'
                                : 'text-slate-300'
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>

                  <div className="text-xs font-semibold text-[#8c6721] mt-1.5">
                    {getRatingLabel(hoverRating || rating)}
                  </div>
                </div>

                {/* 2. Nombre o Iniciales y Ciudad */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 font-['Cinzel',serif]">
                      Su Nombre o Iniciales *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Carlos M. / Familia Pérez"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#c5a059] focus:bg-white transition-all"
                    />
                    <span className="text-[10px] text-slate-400 mt-1 block">
                      Puede usar sus iniciales si prefiere privacidad.
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 font-['Cinzel',serif]">
                      Cantón o Ciudad *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Buena Fe, Quevedo, Los Ríos"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#c5a059] focus:bg-white transition-all"
                    />
                    <span className="text-[10px] text-slate-400 mt-1 block">
                      Lugar de atención o residencia.
                    </span>
                  </div>
                </div>

                {/* 3. Materia Legal Atendida */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 font-['Cinzel',serif]">
                    Área o Materia Legal Atendida *
                  </label>
                  <select
                    value={matter}
                    onChange={(e) => setMatter(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#c5a059] focus:bg-white transition-all"
                  >
                    <option value="Derecho Penal · Flagrancia">Derecho Penal (Flagrancia, Juicios, Recursos)</option>
                    <option value="Tránsito & Siniestros">Derecho de Tránsito (Accidentes, Peritajes, Citaciones)</option>
                    <option value="Familia · Alimentos & Tenencia">Derecho Familiar (Pensiones, Tenencia, Divorcios)</option>
                    <option value="Derecho Laboral">Derecho Laboral (Despidos, Liquidaciones)</option>
                    <option value="Transporte · ANT">Transporte Terrestre (Permisos de Operación, ANT)</option>
                    <option value="Asesoría Jurídica Integral">Asesoría Jurídica Integral</option>
                  </select>
                </div>

                {/* 4. Comentario / Testimonio */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 font-['Cinzel',serif]">
                    Su Opinión o Testimonio *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Cuéntenos cómo fue el patrocinio de la Abogada, la claridad en el proceso y el resultado obtenido..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#c5a059] focus:bg-white transition-all resize-none leading-relaxed"
                  />
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1">
                    <span>Mínimo unas palabras que describan su satisfacción.</span>
                    <span>{comment.length} caracteres</span>
                  </div>
                </div>

                {/* Garantía de Reserva y Publicación Inmediata */}
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-[#aa8640] flex-shrink-0 mt-0.5" />
                  <span>
                    Su opinión se publicará de inmediato en el carrusel de testimonios de la página web oficial.
                  </span>
                </div>

                {/* Botón de Envío */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-full bg-[#101626] hover:bg-[#c5a059] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <Check className="w-4 h-4 text-[#e5c378]" />
                    <span>Publicar mi Opinión Ahora</span>
                  </button>
                </div>

              </form>
            </>
          ) : (
            /* Estado de Éxito y Redirección */
            <div className="py-10 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-lg border-2 border-emerald-200 animate-bounce">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <h2 className="font-['Cinzel',serif] text-2xl font-bold text-[#101626]">
                ¡Muchas Gracias por su Opinión!
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Su testimonio ha sido guardado exitosamente. Le estamos redirigiendo ahora mismo a la página principal para que pueda ver su reseña publicada en el carrusel de clientes...
              </p>

              <div className="pt-4 flex items-center justify-center gap-2 text-xs font-bold text-[#c5a059]">
                <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-ping" />
                <span>Cargando su testimonio en la página de inicio...</span>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Pie inferior con derechos y contacto */}
      <div className="max-w-xl mx-auto w-full text-center relative z-10 mt-6 text-xs text-slate-500">
        <p className="text-[11px] text-slate-400">
          © {new Date().getFullYear()} {LAWYER_INFO.name} · Estudio Jurídico en Buena Fe, Los Ríos.
        </p>
      </div>

    </div>
  );
};
