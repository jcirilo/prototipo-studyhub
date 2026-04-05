import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function InfoItem({ label, value }) {
  return (
    <div className="rounded-[14px] border border-slate-200 bg-slate-50 px-4 py-3">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-1 text-base font-medium text-slate-900">{value}</p>
    </div>
  );
}

function ActionCard({ title, description, to }) {
  return (
    <Link
      to={to}
      className="block rounded-[18px] border border-slate-300 bg-white p-4 shadow-sm transition hover:border-slate-400"
    >
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">{description}</p>
    </Link>
  );
}

function LogoutModal({ open, onClose, onConfirm }) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
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
        className="w-full max-w-md rounded-[24px] bg-white p-6 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 className="text-xl font-semibold text-slate-900">
          Confirmar saída
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Deseja realmente sair da sua conta?
        </p>

        <div className="mt-6 flex justify-end gap-3">
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

export default function ProfilePage() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/aluno/login");
  }

  return (
    <>
      <section className="mx-auto w-full max-w-[980px]">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-slate-900">Perfil</h1>
          <p className="mt-2 text-base text-slate-600">
            Visualize seus dados acadêmicos e acesse configurações da conta.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.95fr_1.2fr]">
          <article className="rounded-[24px] border border-slate-300 bg-white p-6 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-100 text-3xl font-semibold text-slate-500">
                JS
              </div>

              <h2 className="mt-4 text-xl font-semibold text-slate-900">
                João Silva
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Ciência da Computação
              </p>

              <span className="mt-3 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                Aluno ativo
              </span>
            </div>

            <div className="mt-6 space-y-3">
              <InfoItem label="Matrícula" value="20230012345" />
              <InfoItem label="E-mail institucional" value="joao@academico.ufpb.br" />
              <InfoItem label="Período atual" value="6º período" />
              <InfoItem label="Turma principal" value="Estruturas de Dados II" />
            </div>
          </article>

          <div className="space-y-5">
            <article className="rounded-[24px] border border-slate-300 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Resumo acadêmico
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Informações rápidas sobre seu uso atual da plataforma.
              </p>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-[14px] border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Atividades concluídas</p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-900">24</h3>
                </div>

                <div className="rounded-[14px] border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Média atual</p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-900">8,1</h3>
                </div>

                <div className="rounded-[14px] border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Horas de estudo</p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-900">36h</h3>
                </div>
              </div>
            </article>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <ActionCard
                to="/aluno/desempenho"
                title="Ver desempenho"
                description="Consulte seus gráficos e tópicos que exigem atenção."
              />
              <ActionCard
                to="/aluno/planejamento"
                title="Abrir planejamento"
                description="Veja seu cronograma e prioridades da semana."
              />
              <ActionCard
                to="/aluno/turmas"
                title="Minhas turmas"
                description="Acesse disciplinas e conteúdos vinculados ao seu perfil."
              />
              <button
                type="button"
                onClick={() => setShowLogoutModal(true)}
                className="rounded-[18px] border border-red-200 bg-red-50 p-4 text-left shadow-sm transition hover:border-red-300"
              >
                <h3 className="text-base font-semibold text-red-700">Sair</h3>
                <p className="mt-1 text-sm text-red-600">
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