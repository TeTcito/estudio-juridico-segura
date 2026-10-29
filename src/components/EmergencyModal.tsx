import React, { useState } from 'react';
import { X, Phone, AlertTriangle, ShieldCheck, Clock, Send } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { LAWYER_INFO } from '../data/legalData';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
  const [personName, setPersonName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [situation, setSituation] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const urgentMsg = `URGENCIA PENAL 24/7:\nNombre: ${personName}\nTeléfono: ${phoneNumber}\nSituación: ${situation}`;
    const whatsappUrl = `https://wa.me/${LAWYER_INFO.phones[0].raw}?text=${encodeURIComponent(urgentMsg)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-100 p-6 sm:p-8 shadow-2xl text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-red-50 border border-red-200 text-red-600">
            <AlertTriangle className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">
              Protocolo de Guardia Penal 24 Horas
            </div>
            <h3 className="text-xl font-['Cinzel',serif] font-bold text-[#1c2237]">
              Asistencia Urgente en Flagrancia
            </h3>
          </div>
        </div>

        <p className="text-xs text-slate-500 leading-relaxed mb-6">
          Si un familiar o usted enfrenta una aprehensión, detención en flagrancia o allanamiento, las primeras horas son decisivas. Contáctenos de inmediato por cualquiera de las líneas directas:
        </p>

        {/* Quick Call Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          <a
            href={`tel:${LAWYER_INFO.phones[0].raw}`}
            className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#c5a059] hover:bg-white hover:shadow-sm transition-all group"
          >
            <div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Línea Principal</div>
              <div className="text-sm font-bold text-slate-800 group-hover:text-[#c5a059]">{LAWYER_INFO.phones[0].display}</div>
            </div>
            <div className="w-8 h-8 rounded-xl bg-[#c5a059]/15 flex items-center justify-center text-[#c5a059] group-hover:scale-110 transition-transform">
              <Phone className="w-4 h-4" />
            </div>
          </a>

          <a
            href={`tel:${LAWYER_INFO.phones[1].raw}`}
            className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#c5a059] hover:bg-white hover:shadow-sm transition-all group"
          >
            <div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Línea Alternativa</div>
              <div className="text-sm font-bold text-slate-800 group-hover:text-[#c5a059]">{LAWYER_INFO.phones[1].display}</div>
            </div>
            <div className="w-8 h-8 rounded-xl bg-[#c5a059]/15 flex items-center justify-center text-[#c5a059] group-hover:scale-110 transition-transform">
              <Phone className="w-4 h-4" />
            </div>
          </a>
        </div>

        {/* WhatsApp Direct */}
        <a
          href={`https://wa.me/${LAWYER_INFO.phones[0].raw}?text=${encodeURIComponent(LAWYER_INFO.whatsappMessageUrgent)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full mb-5 flex items-center justify-center gap-2.5 py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
        >
          <WhatsAppIcon className="w-4 h-4 text-white" />
          <span>Escribir por WhatsApp a la Abogada</span>
        </a>

        {/* Short Emergency Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="border-t border-slate-100 pt-5 space-y-3">
            <div className="text-xs font-semibold text-slate-700">
              O envíe un reporte rápido para devolución de llamada prioritaria:
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                required
                placeholder="Su Nombre"
                value={personName}
                onChange={(e) => setPersonName(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#c5a059] focus:bg-white"
              />
              <input
                type="tel"
                required
                placeholder="Teléfono / Celular"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#c5a059] focus:bg-white"
              />
            </div>
            <textarea
              required
              rows={2}
              placeholder="¿Qué ocurrió? (Lugar de detención, unidad judicial, ciudad)..."
              value={situation}
              onChange={(e) => setSituation(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#c5a059] focus:bg-white resize-none"
            />
            <button
              type="submit"
              className="w-full py-2.5 rounded-full bg-[#1c2237] hover:bg-[#c5a059] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Enviar Reporte Prioritario</span>
            </button>
          </form>
        ) : (
          <div className="border-t border-slate-100 pt-4 text-center text-xs text-emerald-600 font-semibold">
            ✓ Reporte enviado. Se ha abierto la línea de comunicación directa.
          </div>
        )}

        <div className="mt-5 flex items-center justify-between text-[11px] text-slate-400 pt-3 border-t border-slate-100">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" />
            Secreto profesional garantizado
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
            Respuesta promedio: 5-10 min
          </span>
        </div>
      </div>
    </div>
  );
};
