import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoImg from '../assets/images/logo.png';

export type TabKey = 'inicio' | 'perfil' | 'servicios' | 'metodologia' | 'contacto';

interface HeaderProps {
  activeTab: TabKey;
  onSelectTab: (tab: TabKey) => void;
  onOpenEmergencyModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Botones resumidos para estar garantizados en una sola línea
  const navItems: { key: TabKey; label: string }[] = [
    { key: 'inicio', label: 'Inicio' },
    { key: 'perfil', label: 'Perfil' },
    { key: 'servicios', label: 'Especialidades' },
    { key: 'metodologia', label: 'Metodología' },
    { key: 'contacto', label: 'Contacto' },
  ];

  const handleNavClick = (key: TabKey) => {
    onSelectTab(key);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isContactTab = activeTab === 'contacto';

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isContactTab
          ? `-mb-20 ${
              scrolled || mobileMenuOpen
                ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#c5a059]/30 shadow-lg'
                : 'bg-transparent border-none shadow-none'
            }`
          : 'bg-[#0a0a0a] border-b border-[#c5a059]/30 shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Identity / Logo con máximo 2 líneas de texto */}
          <button
            onClick={() => handleNavClick('inicio')}
            className="flex items-center gap-2.5 sm:gap-3 text-left group focus:outline-none min-w-0 flex-1 sm:flex-initial mr-2 sm:mr-0"
          >
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
              <img
                src={logoImg}
                alt="Logo Abogada Penalista"
                className="w-full h-full object-contain filter drop-shadow"
              />
            </div>
            
            {/* Texto al lado del logo: estrictamente máximo 2 líneas */}
            <div className="flex flex-col justify-center leading-tight min-w-0">
              <span className="font-['Cinzel',serif] text-sm sm:text-base lg:text-lg font-bold text-white group-hover:text-[#e5c378] transition-colors truncate">
                Ab. Sofía Segura Santana
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-[#c5a059] truncate">
                Experta en Derecho Penal y Tránsito · Mgs.
              </span>
            </div>
          </button>

          {/* Navegación de escritorio: Cada botón resumido en una sola línea */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-3">
            {navItems.map((item) => {
              const isActive = activeTab === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  className={`relative px-4 py-2 text-sm font-semibold whitespace-nowrap transition-all rounded-full ${
                    isActive
                      ? 'text-[#e5c378] bg-white/10 font-bold'
                      : 'text-neutral-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#c5a059] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Botón Derecho: CONTACTAR */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleNavClick('contacto')}
              className="px-6 py-2.5 rounded-full bg-[#c5a059] hover:bg-[#d4af37] text-black font-extrabold text-xs tracking-wider uppercase shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            >
              CONTACTAR
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2 flex-shrink-0">
            <button
              onClick={() => handleNavClick('contacto')}
              className="hidden min-[420px]:inline-block px-3 py-1.5 rounded-full bg-[#c5a059] text-black text-xs font-extrabold uppercase shadow-sm"
            >
              CONTACTAR
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0a0a0a] px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          {navItems.map((item) => {
            const isActive = activeTab === item.key;
            return (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-white/10 text-[#e5c378]'
                    : 'text-neutral-300 hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight className={`w-4 h-4 ${isActive ? 'text-[#e5c378]' : 'text-neutral-600'}`} />
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
