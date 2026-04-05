import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/aluno/inicio", label: "Início" },
  { to: "/aluno/atividades/pendentes", label: "Atividades" },
  { to: "/aluno/turmas", label: "Turmas" },
  { to: "/aluno/desempenho", label: "Desempenho" },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-5">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center px-2 py-3 text-xs font-medium transition ${
                isActive
                  ? "text-indigo-600"
                  : "text-slate-500 hover:text-slate-700"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}