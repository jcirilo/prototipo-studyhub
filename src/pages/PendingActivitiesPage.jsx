import { Link } from "react-router-dom";
import StatsOverview from "../components/StatsOverview";

const activities = [
  {
    id: 1,
    discipline: "Estruturas de Dados",
    title: "Atividade 01",
    content: "Conteúdo A",
    type: "Questionário",
    dueDate: "12/04/2026",
    status: "Pendente",
    progress: 30,
  },
  {
    id: 2,
    discipline: "Banco de Dados",
    title: "Atividade 02",
    content: "Conteúdo B",
    type: "Lista",
    dueDate: "14/04/2026",
    status: "Pendente",
    progress: 60,
  },
  {
    id: 3,
    discipline: "Sistemas Operacionais",
    title: "Atividade 03",
    content: "Conteúdo C",
    type: "Questionário",
    dueDate: "16/04/2026",
    status: "Pendente",
    progress: 10,
  },
  {
    id: 4,
    discipline: "Redes de Computadores",
    title: "Atividade 04",
    content: "Módulo 1",
    type: "Exercício",
    dueDate: "18/04/2026",
    status: "Pendente",
    progress: 80,
  },
];

const stats = [
  {
    title: "Pendentes",
    value: "4",
    helper: "Atividades aguardando resposta.",
  },
  {
    title: "Prazo mais próximo",
    value: "12/04",
    helper: "Próxima entrega cadastrada.",
  },
  {
    title: "Disciplinas",
    value: "4",
    helper: "Componentes com atividades ativas",
  },
];

function typeClasses(type) {
  if (type === "Questionário") return "bg-blue-100 text-blue-700";
  if (type === "Lista") return "bg-violet-100 text-violet-700";
  if (type === "Exercício") return "bg-green-100 text-green-700";
  return "bg-slate-100 text-slate-700";
}

function ActivityCard({ activity }) {
  return (
    <article className="rounded-[16px] border border-slate-300 bg-white px-4 py-3 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span>{activity.discipline}</span>
            <span className="text-slate-300">|</span>

            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-700">
              {activity.content}
            </span>

            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${typeClasses(
                activity.type
              )}`}
            >
              {activity.type}
            </span>
          </div>

          <h2 className="mt-1 text-base font-semibold text-slate-900">
            {activity.title}
          </h2>
        </div>

        <span className="shrink-0 rounded-full bg-yellow-100 px-2 py-0.5 text-[10px] font-semibold text-yellow-700">
          {activity.status}
        </span>
      </div>

      <div className="mt-3 flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
        <p className="shrink-0 whitespace-nowrap text-xs text-slate-600">
          Entrega: {activity.dueDate}
        </p>

        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center justify-between text-[10px] text-slate-500">
            <span>Progresso</span>
            <span>{activity.progress}%</span>
          </div>

          <div className="h-1.5 w-full rounded-full bg-slate-200">
            <div
              className="h-1.5 rounded-full bg-[#17a34a] transition-all"
              style={{ width: `${activity.progress}%` }}
            />
          </div>
        </div>

        <Link
          to="/aluno/atividades/responder"
          className="shrink-0 rounded-full bg-[#17a34a] px-3 py-1 text-center text-xs font-semibold text-white transition hover:bg-[#14873d]"
        >
          Responder
        </Link>
      </div>
    </article>
  );
}

export default function PendingActivitiesPage() {
  return (
    <section className="mx-auto w-full max-w-[980px]">
      <div className="mb-5">
        <h1 className="text-2xl font-semibold text-slate-900">Atividades</h1>
        <p className="mt-2 text-sm md:text-base text-slate-600">
          Acompanhe suas atividades pendentes e acesse os conteúdos disponíveis.
        </p>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <Link
          to="/aluno/atividades/pendentes"
          className="rounded-full bg-[#17a34a] px-4 py-1.5 text-sm font-semibold text-white"
        >
          Pendentes
        </Link>

        <Link
          to="/aluno/atividades/concluidas"
          className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          Concluídas
        </Link>
      </div>

      <div className="mb-5">
        <StatsOverview items={stats} />
      </div>

      <div className="space-y-3">
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </section>
  );
}