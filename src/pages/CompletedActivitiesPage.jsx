import { Link } from "react-router-dom";

const completedActivities = [
  {
    id: 1,
    discipline: "Estruturas de Dados",
    title: "Atividade 01",
    content: "Conteúdo A",
    type: "Questionário",
    completedAt: "02/04/2026",
    score: "8,5",
    progress: 100,
    status: "Concluída",
  },
  {
    id: 2,
    discipline: "Banco de Dados",
    title: "Atividade 02",
    content: "Conteúdo B",
    type: "Lista",
    completedAt: "30/03/2026",
    score: "9,0",
    progress: 100,
    status: "Concluída",
  },
  {
    id: 3,
    discipline: "Sistemas Operacionais",
    title: "Atividade 03",
    content: "Conteúdo C",
    type: "Questionário",
    completedAt: "28/03/2026",
    score: "7,8",
    progress: 100,
    status: "Concluída",
  },
];

function typeClasses(type) {
  if (type === "Questionário") return "bg-blue-100 text-blue-700";
  if (type === "Lista") return "bg-violet-100 text-violet-700";
  if (type === "Exercício") return "bg-green-100 text-green-700";
  return "bg-slate-100 text-slate-700";
}

function SummaryCard({ title, value, helper }) {
  return (
    <article className="rounded-[16px] border border-slate-300 bg-white px-4 py-3 shadow-sm">
      <p className="text-xs text-slate-500">{title}</p>
      <h3 className="mt-1 text-lg font-semibold text-slate-900">{value}</h3>
      <p className="mt-1 text-[11px] leading-tight text-slate-500">{helper}</p>
    </article>
  );
}

function CompletedCard({ activity }) {
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

        <span className="shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700">
          {activity.status}
        </span>
      </div>

      <div className="mt-3 flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
        <p className="shrink-0 whitespace-nowrap text-xs text-slate-600">
          Finalizada em: {activity.completedAt}
        </p>

        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center justify-between text-[10px] text-slate-500">
            <span>Progresso</span>
            <span>{activity.progress}%</span>
          </div>

          <div className="h-1.5 w-full rounded-full bg-slate-200">
            <div
              className="h-1.5 rounded-full bg-[#17a34a]"
              style={{ width: `${activity.progress}%` }}
            />
          </div>
        </div>

        <div className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          Nota: {activity.score}
        </div>
      </div>
    </article>
  );
}

export default function CompletedActivitiesPage() {
  return (
    <section className="mx-auto w-full max-w-[980px]">
      <div className="mb-5">
        <h1 className="text-2xl font-semibold text-slate-900">Atividades</h1>
        <p className="mt-2 text-sm md:text-base text-slate-600">
          Consulte seu histórico de atividades concluídas e resultados obtidos.
        </p>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <Link
          to="/aluno/atividades/pendentes"
          className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          Pendentes
        </Link>

        <Link
          to="/aluno/atividades/concluidas"
          className="rounded-full bg-[#17a34a] px-4 py-1.5 text-sm font-semibold text-white"
        >
          Concluídas
        </Link>
      </div>

      <div className="mb-5 grid grid-cols-1 gap-3 md:grid-cols-3">
        <SummaryCard
          title="Concluídas"
          value="3"
          helper="Atividades já finalizadas no período."
        />
        <SummaryCard
          title="Média"
          value="8,4"
          helper="Aproveitamento médio fictício."
        />
        <SummaryCard
          title="Última entrega"
          value="02/04"
          helper="Data da atividade concluída mais recente."
        />
      </div>

      <div className="space-y-3">
        {completedActivities.map((activity) => (
          <CompletedCard key={activity.id} activity={activity} />
        ))}
      </div>
    </section>
  );
}