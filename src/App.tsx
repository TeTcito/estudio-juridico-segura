import { useState } from 'react';
import { Header, type TabKey } from './components/Header';
import { Footer } from './components/Footer';
import { EmergencyModal } from './components/EmergencyModal';
import { HomeTab } from './pages/HomeTab';
import { ProfileTab } from './pages/ProfileTab';
import { PracticeAreasTab } from './pages/PracticeAreasTab';
import { MethodologyTab } from './pages/MethodologyTab';
import { ContactTab } from './pages/ContactTab';
import { WhatsAppIcon } from './components/WhatsAppIcon';
import { LAWYER_INFO } from './data/legalData';

export function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('inicio');
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-[#c5a059] selection:text-white">
      {/* Header fijo con fondo blanco y acentos dorados */}
      <Header
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onOpenEmergencyModal={() => setEmergencyModalOpen(true)}
      />

      {/* Contenido principal según la pestaña activa */}
      <main className="flex-1 w-full bg-white">
        {activeTab === 'inicio' && (
          <HomeTab
            onSelectTab={setActiveTab}
            onOpenEmergencyModal={() => setEmergencyModalOpen(true)}
          />
        )}
        {activeTab === 'perfil' && (
          <ProfileTab
            onSelectTab={setActiveTab}
            onOpenEmergencyModal={() => setEmergencyModalOpen(true)}
          />
        )}
        {activeTab === 'servicios' && (
          <PracticeAreasTab
            onSelectTab={setActiveTab}
            onOpenEmergencyModal={() => setEmergencyModalOpen(true)}
          />
        )}
        {activeTab === 'metodologia' && (
          <MethodologyTab
            onSelectTab={setActiveTab}
            onOpenEmergencyModal={() => setEmergencyModalOpen(true)}
          />
        )}
        {activeTab === 'contacto' && <ContactTab />}
      </main>

      {/* Botón Flotante Permanente de WhatsApp / Emergencia 24/7 */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <button
          onClick={() => setEmergencyModalOpen(true)}
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold shadow-xl hover:border-[#c5a059] transition-all transform hover:scale-105"
        >
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <span>Urgencia Flagrancia</span>
        </button>

        <a
          href={`https://wa.me/${LAWYER_INFO.phones[0].raw}?text=${encodeURIComponent(LAWYER_INFO.whatsappMessageUrgent)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_6px_25px_rgba(37,211,102,0.45)] transition-all transform hover:scale-110 active:scale-95 group"
          aria-label="Contactar por WhatsApp"
        >
          <WhatsAppIcon className="w-8 h-8 text-white" />
        </a>
      </div>

      {/* Footer corporativo adaptado */}
      <Footer
        onSelectTab={setActiveTab}
        onOpenEmergencyModal={() => setEmergencyModalOpen(true)}
      />

      {/* Modal de Emergencias 24/7 */}
      <EmergencyModal
        isOpen={emergencyModalOpen}
        onClose={() => setEmergencyModalOpen(false)}
      />
    </div>
  );
}

export default App;
