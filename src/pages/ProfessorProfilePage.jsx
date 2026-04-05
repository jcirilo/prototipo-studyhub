import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function InfoItem({ label, value }) {
  return (
    <div className="rounded-[16px] border border-slate-200 bg-slate-50 px-4 py-3">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-medium text-slate-900">{value}</p>
    </div>
  );
}

function ActionCard({ title, description, to }) {
  return (
    <Link
      to={to}
      className="block rounded-[16px] border border-slate-300 bg-white p-4 shadow-sm transition hover:border-slate-400"
    >
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-xs text-slate-600">{description}</p>
    </Link>
  );
}

function LogoutModal({ open, onClose, onConfirm }) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-[18px] bg-white p-5 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 className="text-lg font-semibold text-slate-900">
          Confirmar saída
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Deseja realmente sair da sua conta?
        </p>

        <div className="mt-5 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Não
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className="rounded-full bg-[#17a34a] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#14873d]"
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProfessorProfilePage() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/professor/login");
  }

  return (
    <>
      <section className="mx-auto w-full max-w-[980px]">
        <div className="mb-5">
          <h1 className="text-2xl font-semibold text-slate-900">Perfil</h1>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Visualize seus dados acadêmicos e acesse atalhos de gestão.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[0.95fr_1.2fr]">
          <article className="rounded-[18px] border border-slate-300 bg-white p-4 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-2xl font-semibold text-slate-500">
                PL
              </div>

              <h2 className="mt-4 text-lg font-semibold text-slate-900">
                Prof. Luiz
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Centro de Informática · UFPB
              </p>

              <span className="mt-3 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                Professor ativo
              </span>
            </div>

            <div className="mt-5 space-y-3">
              <InfoItem label="SIAPE / ID" value="1234567" />
              <InfoItem
                label="E-mail institucional"
                value="prof.luiz@academico.ufpb.br"
              />
              <InfoItem label="Área principal" value="Ciência da Computação" />
              <InfoItem label="Semestre atual" value="2026.1" />
            </div>
          </article>

          <div className="space-y-4">
            <article className="rounded-[18px] border border-slate-300 bg-white p-4 shadow-sm">
              <h2 className="text-base font-semibold text-slate-900">
                Resumo docente
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Indicadores rápidos de uso e acompanhamento.
              </p>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-[14px] border border-slate-200 bg-slate-50 p-3">
                  <p className="text-xs text-slate-500">Turmas</p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">3</h3>
                </div>

                <div className="rounded-[14px] border border-slate-200 bg-slate-50 p-3">
                  <p className="text-xs text-slate-500">Atividades</p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">8</h3>
                </div>

                <div className="rounded-[14px] border border-slate-200 bg-slate-50 p-3">
                  <p className="text-xs text-slate-500">Materiais</p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">12</h3>
                </div>
              </div>
            </article>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <ActionCard
                to="/professor/turmas"
                title="Gerenciar turmas"
                description="Acesse, edite e acompanhe suas turmas."
              />
              <ActionCard
                to="/professor/materiais"
                title="Meus materiais"
                description="Envie arquivos e organize conteúdos por turma."
              />
              <ActionCard
                to="/professor/questoes"
                title="Revisar questões"
                description="Valide questões geradas antes de publicar."
              />
              <ActionCard
                to="/professor/desempenho"
                title="Ver desempenho"
                description="Consulte médias, engajamento e tópicos críticos."
              />

              <button
                type="button"
                onClick={() => setShowLogoutModal(true)}
                className="rounded-[16px] border border-red-200 bg-red-50 p-4 text-left shadow-sm transition hover:border-red-300 sm:col-span-2"
              >
                <h3 className="text-sm font-semibold text-red-700">Sair</h3>
                <p className="mt-1 text-xs text-red-600">
                  Encerrar sessão e voltar para a tela de login.
                </p>
              </button>
            </div>
          </div>
        </div>
      </section>

      <LogoutModal
        open={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />
    </>
  );
}