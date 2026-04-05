const summary = [
  {
    title: "Turmas ativas",
    value: "3",
    helper: "Turmas atualmente em andamento",
  },
  {
    title: "Atividades abertas",
    value: "8",
    helper: "Atividades disponíveis para alunos",
  },
  {
    title: "Questões pendentes",
    value: "12",
    helper: "Aguardando revisão/aprovação",
  },
];

const classesOverview = [
  {
    name: "Estruturas de Dados",
    students: 32,
    average: "8,1",
    status: "Bom",
  },
  {
    name: "Banco de Dados",
    students: 28,
    average: "7,4",
    status: "Atenção",
  },
  {
    name: "Sistemas Operacionais",
    students: 30,
    average: "8,6",
    status: "Bom",
  },
];

const activitiesOverview = [
  {
    title: "Atividade 01",
    discipline: "Estruturas de Dados",
    submissions: "24/32",
    deadline: "12/04/2026",
  },
  {
    title: "Atividade 02",
    discipline: "Banco de Dados",
    submissions: "18/28",
    deadline: "14/04/2026",
  },
  {
    title: "Atividade 03",
    discipline: "Sistemas Operacionais",
    submissions: "27/30",
    deadline: "16/04/2026",
  },
];

const planning = [
  {
    day: "Seg",
    time: "08:00",
    subject: "Estruturas de Dados",
    content: "Revisar material da semana",
  },
  {
    day: "Ter",
    time: "10:00",
    subject: "Banco de Dados",
    content: "Preparar atividade",
  },
  {
    day: "Qua",
    time: "14:00",
    subject: "Sistemas Operacionais",
    content: "Aprovar questões geradas",
  },
  {
    day: "Qui",
    time: "16:00",
    subject: "Turma geral",
    content: "Acompanhar desempenho",
  },
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
  if (status === "Bom") return "bg-green-100 text-green-700";
  if (status === "Atenção") return "bg-yellow-100 text-yellow-700";
  return "bg-slate-100 text-slate-700";
}

function PlanningItem({ item }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-[14px] border border-slate-200 bg-slate-50 px-3 py-2">
      <div className="shrink-0">
        <p className="text-xs font-semibold text-slate-700">{item.day}</p>
        <p className="text-[11px] text-slate-500">{item.time}</p>
      </div>

      <div className="min-w-0 text-right">
        <p className="text-sm font-medium text-slate-800">{item.subject}</p>
        <p className="text-[11px] text-slate-500">{item.content}</p>
      </div>
    </div>
  );
}

function ClassOverviewCard({ item }) {
  return (
    <div className="rounded-[14px] border border-slate-200 bg-slate-50 px-3 py-2.5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-800">{item.name}</p>
          <p className="mt-0.5 text-[11px] text-slate-500">
            {item.students} alunos
          </p>
        </div>

        <span
          className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${statusClasses(
            item.status
          )}`}
        >
          {item.status}
        </span>
      </div>

      <p className="mt-2 text-xs text-slate-600">Média da turma: {item.average}</p>
    </div>
  );
}

function ActivityOverviewCard({ item }) {
  return (
    <div className="rounded-[14px] border border-slate-200 bg-slate-50 px-3 py-2.5">
      <p className="text-sm font-medium text-slate-800">{item.title}</p>
      <p className="mt-0.5 text-[11px] text-slate-500">{item.discipline}</p>

      <div className="mt-2 flex items-center justify-between gap-3 text-xs text-slate-600">
        <span>Envios: {item.submissions}</span>
        <span>Prazo: {item.deadline}</span>
      </div>
    </div>
  );
}

export default function ProfessorHomePage() {
  return (
    <section className="mx-auto w-full max-w-[980px]">
      <div className="mb-5">
        <h1 className="text-2xl font-semibold text-slate-900">
          Visão geral
        </h1>
        <p className="mt-2 text-sm md:text-base text-slate-600">
          Acompanhe rapidamente suas turmas, desempenho, atividades e planejamento.
        </p>
      </div>

      <div className="mb-5 grid grid-cols-1 gap-3 md:grid-cols-3">
        {summary.map((item) => (
          <SummaryCard
            key={item.title}
            title={item.title}
            value={item.value}
            helper={item.helper}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <article className="rounded-[18px] border border-slate-300 bg-white p-4 shadow-sm">
          <div className="mb-4">
            <h2 className="text-base font-semibold text-slate-900">Turmas</h2>
            <p className="mt-1 text-sm text-slate-600">
              Resumo do desempenho atual das turmas.
            </p>
          </div>

          <div className="space-y-2">
            {classesOverview.map((item) => (
              <ClassOverviewCard key={item.name} item={item} />
            ))}
          </div>
        </article>

        <article className="rounded-[18px] border border-slate-300 bg-white p-4 shadow-sm">
          <div className="mb-4">
            <h2 className="text-base font-semibold text-slate-900">
              Atividades
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Situação atual das atividades publicadas.
            </p>
          </div>

          <div className="space-y-2">
            {activitiesOverview.map((item) => (
              <ActivityOverviewCard key={item.title} item={item} />
            ))}
          </div>
        </article>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-[18px] border border-slate-300 bg-white p-4 shadow-sm">
          <div className="mb-4">
            <h2 className="text-base font-semibold text-slate-900">
              Desempenho
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Indicadores rápidos sobre o andamento geral das turmas.
            </p>
          </div>

          <div className="space-y-3">
            <div>
              <div className="mb-1 flex items-center justify-between text-[12px] text-slate-600">
                <span>Média geral das turmas</span>
                <span>8,0</span>
              </div>
              <div className="h-2 rounded-full bg-slate-200">
                <div className="h-2 w-[80%] rounded-full bg-[#17a34a]" />
              </div>
            </div>

            <div>
              <div className="mb-1 flex items-center justify-between text-[12px] text-slate-600">
                <span>Taxa média de envio</span>
                <span>76%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-200">
                <div className="h-2 w-[76%] rounded-full bg-[#17a34a]" />
              </div>
            </div>

            <div>
              <div className="mb-1 flex items-center justify-between text-[12px] text-slate-600">
                <span>Questões aprovadas</span>
                <span>68%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-200">
                <div className="h-2 w-[68%] rounded-full bg-[#17a34a]" />
              </div>
            </div>
          </div>
        </article>

        <article className="rounded-[18px] border border-slate-300 bg-white p-4 shadow-sm">
          <div className="mb-4">
            <h2 className="text-base font-semibold text-slate-900">
              Planejamento
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Próximas ações previstas na semana.
            </p>
          </div>

          <div className="space-y-2">
            {planning.map((item, index) => (
              <PlanningItem key={index} item={item} />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}