const classPerformance = [
  { name: "Estruturas de Dados", value: 81 },
  { name: "Banco de Dados", value: 74 },
  { name: "Sistemas Operacionais", value: 86 },
];

const topicPerformance = [
  { topic: "Conteúdo A", value: 78 },
  { topic: "Conteúdo B", value: 64 },
  { topic: "Conteúdo C", value: 88 },
  { topic: "Conteúdo D", value: 59 },
];

const weeklyEngagement = [
  { label: "S1", value: 62 },
  { label: "S2", value: 68 },
  { label: "S3", value: 71 },
  { label: "S4", value: 76 },
  { label: "S5", value: 73 },
  { label: "S6", value: 81 },
];

const difficultyTopics = [
  { topic: "Conteúdo D", className: "CI101", level: "Alta" },
  { topic: "Conteúdo B", className: "CI202", level: "Média" },
  { topic: "Conteúdo A", className: "CI303", level: "Baixa" },
];

function levelClasses(level) {
  if (level === "Alta") return "bg-red-100 text-red-700";
  if (level === "Média") return "bg-yellow-100 text-yellow-700";
  return "bg-green-100 text-green-700";
}

function StatCard({ title, value, helper }) {
  return (
    <article className="rounded-[16px] border border-slate-300 bg-white px-4 py-3 shadow-sm">
      <p className="text-xs text-slate-500">{title}</p>
      <h3 className="mt-1 text-lg font-semibold text-slate-900">{value}</h3>
      <p className="mt-1 text-[11px] leading-tight text-slate-500">{helper}</p>
    </article>
  );
}

function ClassBarChart() {
  return (
    <article className="rounded-[18px] border border-slate-300 bg-white p-4 shadow-sm">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-900">
          Média por turma
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Comparativo fictício entre as turmas ativas.
        </p>
      </div>

      <div className="space-y-3">
        {classPerformance.map((item) => (
          <div key={item.name}>
            <div className="mb-1 flex items-center justify-between gap-3">
              <span className="text-sm font-medium text-slate-700">
                {item.name}
              </span>
              <span className="text-xs text-slate-500">{item.value}%</span>
            </div>

            <div className="h-2.5 rounded-full bg-slate-200">
              <div
                className="h-2.5 rounded-full bg-[#17a34a]"
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function TopicBarChart() {
  return (
    <article className="rounded-[18px] border border-slate-300 bg-white p-4 shadow-sm">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-900">
          Acertos por tópico
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Aproveitamento médio fictício por conteúdo.
        </p>
      </div>

      <div className="space-y-3">
        {topicPerformance.map((item) => (
          <div key={item.topic}>
            <div className="mb-1 flex items-center justify-between gap-3">
              <span className="text-sm font-medium text-slate-700">
                {item.topic}
              </span>
              <span className="text-xs text-slate-500">{item.value}%</span>
            </div>

            <div className="h-2.5 rounded-full bg-slate-200">
              <div
                className="h-2.5 rounded-full bg-[#17a34a]"
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function WeeklyChart() {
  const maxValue = Math.max(...weeklyEngagement.map((item) => item.value));

  return (
    <article className="rounded-[18px] border border-slate-300 bg-white p-4 shadow-sm">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-900">
          Engajamento semanal
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Participação fictícia das turmas por semana.
        </p>
      </div>

      <div className="flex h-56 items-end justify-between gap-3 rounded-[14px] bg-slate-50 p-3">
        {weeklyEngagement.map((item) => {
          const height = (item.value / maxValue) * 100;

          return (
            <div
              key={item.label}
              className="flex flex-1 flex-col items-center justify-end"
            >
              <span className="mb-2 text-[11px] text-slate-500">
                {item.value}%
              </span>
              <div
                className="w-full max-w-[42px] rounded-t-[10px] bg-[#17a34a]"
                style={{ height: `${height}%` }}
              />
              <span className="mt-2 text-[11px] font-medium text-slate-600">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </article>
  );
}

function DifficultyCard() {
  return (
    <article className="rounded-[18px] border border-slate-300 bg-white p-4 shadow-sm">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-900">
          Tópicos com maior dificuldade
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Assuntos que merecem reforço nas turmas.
        </p>
      </div>

      <div className="space-y-3">
        {difficultyTopics.map((item) => (
          <div
            key={`${item.className}-${item.topic}`}
            className="flex items-center justify-between rounded-[14px] border border-slate-200 bg-slate-50 px-3 py-2.5"
          >
            <div>
              <h3 className="text-sm font-medium text-slate-800">
                {item.topic}
              </h3>
              <p className="mt-0.5 text-[11px] text-slate-500">
                {item.className}
              </p>
            </div>

            <span
              className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${levelClasses(
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

export default function ProfessorPerformancePage() {
  return (
    <section className="mx-auto w-full max-w-[980px]">
      <div className="mb-5">
        <h1 className="text-2xl font-semibold text-slate-900">Desempenho</h1>
        <p className="mt-2 text-sm md:text-base text-slate-600">
          Acompanhe indicadores consolidados de rendimento, participação e
          dificuldades das turmas.
        </p>
      </div>

      <div className="mb-5 grid grid-cols-1 gap-3 md:grid-cols-3">
        <StatCard
          title="Média geral"
          value="80%"
          helper="Aproveitamento médio das turmas."
        />
        <StatCard
          title="Taxa de envio"
          value="76%"
          helper="Participação média nas atividades."
        />
        <StatCard
          title="Tópicos críticos"
          value="3"
          helper="Assuntos com maior necessidade de reforço."
        />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <ClassBarChart />
        <TopicBarChart />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <WeeklyChart />
        <DifficultyCard />
      </div>
    </section>
  );
}