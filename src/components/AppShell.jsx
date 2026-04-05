import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const navItems = [
  { to: "/aluno/inicio", label: "Início" },
  { to: "/aluno/atividades/pendentes", label: "Atividades" },
  { to: "/aluno/turmas", label: "Turmas" },
  { to: "/aluno/desempenho", label: "Desempenho" },
  { to: "/aluno/planejamento", label: "Planejamento" },
  // { to: "/aluno/perfil", label: "Perfil" },
];

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M6 6l12 12" />
      <path d="M18 6l-12 12" />
    </svg>
  );
}

export default function AppShell() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
     (false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-slate-900">
      <header className="bg-[#17a34a] shadow-sm">
        <div className="mx-auto flex h-16 w-full max-w-[980px] items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Link to="/aluno/inicio" className="flex items-center">
              <img
                src="/logo-studyhub.png"
                alt="StudyHub"
                className="h-8 w-auto object-contain"
              />
            </Link>

            <nav className="hidden items-center gap-2 md:flex">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                      isActive
                        ? "bg-white text-[#17a34a]"
                        : "text-white/95 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/aluno/perfil"
              className="hidden rounded-full bg-white/15 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-white/20 md:inline-flex"
            >
              Perfil
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-full bg-white/15 p-2 text-white transition hover:bg-white/20 md:hidden"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/20 md:hidden">
            <div className="mx-auto flex w-full max-w-[980px] flex-col gap-2 px-4 py-3">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`rounded-[12px] px-3 py-2 text-sm font-medium transition ${
                      isActive
                        ? "bg-white text-[#17a34a]"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>

      <main className="px-4 py-5">
        <Outlet />
      </main>
    </div>
  );
}