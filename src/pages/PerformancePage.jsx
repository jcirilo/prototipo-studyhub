import StatsOverview from "../components/StatsOverview";

const subjectPerformance = [
  { name: "Algoritmos", value: 82 },
  { name: "ED", value: 74 },
  { name: "BD", value: 91 },
  { name: "SO", value: 68 },
];

const weeklyProgress = [
  { label: "S1", value: 45 },
  { label: "S2", value: 58 },
  { label: "S3", value: 63 },
  { label: "S4", value: 72 },
];

const difficultyTopics = [
  { topic: "Grafos", level: "Alta" },
  { topic: "Escalonamento", level: "Média" },
  { topic: "OSI", level: "Baixa" },
];

const stats = [
  {
    title: "Média",
    value: "78%",
    helper: "Geral.",
  },
  {
    title: "Atividades",
    value: "24",
    helper: "Concluídas.",
  },
  {
    title: "Horas",
    value: "36h",
    helper: "Total.",
  },
];

function ProgressBarChart() {
  return (
    <article className="rounded-[18px] border border-slate-300 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-base font-semibold">Disciplinas</h2>

      <div className="space-y-3">
        {subjectPerformance.map((item) => (
          <div key={item.name}>
            <div className="flex justify-between text-[12px]">
              <span>{item.name}</span>
              <span>{item.value}%</span>
            </div>

            <div className="h-2 bg-slate-200 rounded-full">
              <div
                className="h-2 bg-[#17a34a] rounded-full"
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function WeeklyBarChart() {
  const max = Math.max(...weeklyProgress.map((i) => i.value));

  return (
    <article className="rounded-[18px] border border-slate-300 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-base font-semibold">Evolução</h2>

      <div className="flex h-44 items-end gap-2 bg-slate-50 p-2 rounded-[12px]">
        {weeklyProgress.map((item) => (
          <div key={item.label} className="flex-1 text-center">
            <div
              className="bg-[#17a34a] rounded-t"
              style={{ height: `${(item.value / max) * 100}%` }}
            />
            <span className="text-[10px]">{item.label}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

function DifficultyCard() {
  return (
    <article className="rounded-[18px] border border-slate-300 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-base font-semibold">Atenção</h2>

      <div className="space-y-2">
        {difficultyTopics.map((item) => (
          <div
            key={item.topic}
            className="flex justify-between rounded-[12px] bg-slate-50 px-3 py-2"
          >
            <span className="text-sm">{item.topic}</span>
            <span className="text-[11px]">{item.level}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function PerformancePage() {
  return (
    <section className="mx-auto max-w-[980px]">
      <div className="mb-5">
        <h1 className="text-2xl font-semibold">Desempenho</h1>
        <p className="text-sm text-slate-600">Acompanhe sua evolução.</p>
      </div>

      <div className="mb-5">
        <StatsOverview items={stats} />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <ProgressBarChart />
        <WeeklyBarChart />
      </div>

      <div className="mt-4">
        <DifficultyCard />
      </div>
    </section>
  );
}