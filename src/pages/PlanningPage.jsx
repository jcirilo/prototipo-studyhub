const studyPlan = [
  {
    id: 1,
    day: "Segunda-feira",
    topic: "Estruturas de Dados",
    content: "Conteúdo A",
    type: "Leitura",
    time: "18:00 - 19:30",
    status: "Hoje",
  },
  {
    id: 2,
    day: "Terça-feira",
    topic: "Banco de Dados",
    content: "Conteúdo B",
    type: "Exercícios",
    time: "19:00 - 20:30",
    status: "Próximo",
  },
  {
    id: 3,
    day: "Quarta-feira",
    topic: "Sistemas Operacionais",
    content: "Conteúdo C",
    type: "Vídeo",
    time: "18:30 - 20:00",
    status: "Próximo",
  },
];

const priorities = [
  { title: "Conteúdo A", subtitle: "Estruturas de Dados", level: "Alta" },
  { title: "Conteúdo B", subtitle: "Sistemas Operacionais", level: "Média" },
  { title: "Conteúdo C", subtitle: "Banco de Dados", level: "Baixa" },
];

function SummaryCard({ title, value, helper }) {
  return (
    <article className="rounded-[16px] border border-slate-300 bg-white px-4 py-3 shadow-sm">
      <p className="text-xs text-slate-500">{title}</p>
      <h3 className="mt-1 text-lg font-semibold text-slate-900">{value}</h3>
      <p className="mt-1 text-[11px] leading-tight text-slate-500">{helper}</p>
    </article>
  );
}

function statusClasses(status) {
  return status === "Hoje"
    ? "bg-green-100 text-green-700"
    : "bg-slate-100 text-slate-700";
}

function typeClasses(type) {
  switch (type) {
    case "Leitura":
      return "bg-blue-100 text-blue-700";
    case "Exercícios":
      return "bg-violet-100 text-violet-700";
    case "Vídeo":
      return "bg-red-100 text-red-700";
    case "Resumo":
      return "bg-green-100 text-green-700";
    case "Revisão":
      return "bg-yellow-100 text-yellow-700";
    default:
      return "bg-slate-100 text-slate-700";
  }
}

function priorityClasses(level) {
  if (level === "Alta") return "bg-red-100 text-red-700";
  if (level === "Média") return "bg-yellow-100 text-yellow-700";
  return "bg-green-100 text-green-700";
}

function PlanCard({ item }) {
  return (
    <article className="rounded-[18px] border border-slate-300 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs text-slate-500">{item.day}</p>
          <h3 className="text-base font-semibold text-slate-900">
            {item.topic}
          </h3>
        </div>

        <span
          className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${statusClasses(
            item.status
          )}`}
        >
          {item.status}
        </span>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px]">
          {item.content}
        </span>
        <span
          className={`rounded-full px-2.5 py-0.5 text-[11px] ${typeClasses(
            item.type
          )}`}
        >
          {item.type}
        </span>
      </div>

      <p className="mt-3 text-xs text-slate-600">{item.time}</p>
    </article>
  );
}

function PrioritiesCard() {
  return (
    <article className="rounded-[18px] border border-slate-300 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-base font-semibold text-slate-900">
        Prioridades
      </h2>

      <div className="space-y-2">
        {priorities.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-between rounded-[14px] border border-slate-200 bg-slate-50 px-3 py-2"
          >
            <div>
              <p className="text-sm text-slate-800">{item.title}</p>
              <p className="text-[11px] text-slate-500">{item.subtitle}</p>
            </div>

            <span
              className={`rounded-full px-2 py-0.5 text-[11px] ${priorityClasses(
                item.level
              )}`}
            >
              {item.level}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function PlanningPage() {
  return (
    <section className="mx-auto w-full max-w-[980px]">
      <div className="mb-5">
        <h1 className="text-2xl font-semibold text-slate-900">
          Planejamento
        </h1>
        <p className="text-sm text-slate-600">
          Organização semanal de estudos.
        </p>
      </div>

      <div className="mb-5 grid grid-cols-1 gap-3 md:grid-cols-3">
        <SummaryCard title="Sessões" value="5" helper="Semana atual" />
        <SummaryCard title="Carga" value="7h30" helper="Tempo total" />
        <SummaryCard title="Foco" value="ED" helper="Disciplina principal" />
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.4fr_0.9fr]">
        <div className="space-y-4">
          {studyPlan.map((item) => (
            <PlanCard key={item.id} item={item} />
          ))}
        </div>

        <PrioritiesCard />
      </div>
    </section>
  );
}