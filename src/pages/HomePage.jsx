import PlanningCard from "../components/PlanningCard";
import StatsOverview from "../components/StatsOverview";

const summary = [
  { title: "Pendentes", value: "4", helper: "Atividades aguardando resposta" },
  { title: "Hoje", value: "2h", helper: "Carga prevista de estudo" },
  { title: "Média", value: "8,2", helper: "Desempenho geral fictício" },
];

const recommendations = [
  {
    id: 1,
    type: "Vídeo",
    title: "Conteúdo A",
    description: "Descrição do vídeo",
    icon: "video",
  },
  {
    id: 2,
    type: "Web",
    title: "Conteúdo B",
    description: "Resumo",
    icon: "web",
  },
  {
    id: 3,
    type: "Resumo",
    title: "Conteúdo C",
    description: "Material complementar",
    icon: "doc",
  },
  {
    id: 4,
    type: "Exercício",
    title: "Módulo 1",
    description: "Questões de revisão",
    icon: "list",
  },
  {
    id: 5,
    type: "Vídeo",
    title: "Módulo 2",
    description: "Descrição do vídeo",
    icon: "video",
  },
  {
    id: 6,
    type: "Web",
    title: "Módulo 3",
    description: "Resumo",
    icon: "web",
  },
];

const planning = [
  {
    day: "Seg",
    time: "18:00",
    subject: "Estruturas de Dados",
    content: "Conteúdo A",
  },
  {
    day: "Ter",
    time: "19:00",
    subject: "Banco de Dados",
    content: "Conteúdo B",
  },
  {
    day: "Qua",
    time: "18:30",
    subject: "Sistemas Operacionais",
    content: "Conteúdo C",
  },
  {
    day: "Qui",
    time: "17:30",
    subject: "Redes",
    content: "Módulo 1",
  },
];

const progressActivities = [
  {
    title: "Atividade 01",
    subject: "ED",
    progress: 30,
  },
  {
    title: "Atividade 02",
    subject: "BD",
    progress: 65,
  },
  {
    title: "Atividade 03",
    subject: "SO",
    progress: 80,
  },
];

const stats = [
  {
    title: "Pendentes",
    value: "4",
    helper: "Atividades aguardando resposta",
  },
  {
    title: "Hoje",
    value: "2h",
    helper: "Carga preista de estudo",
  },
  {
    title: "Média",
    value: "8,2",
    helper: "Desempenho geral ficitício",
  },
];

function CardIcon({ icon }) {
  if (icon === "video") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-16 w-16 text-slate-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="M10 9l5 3-5 3V9z" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (icon === "web") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-16 w-16 text-slate-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M4 12h16" />
        <path d="M12 4a13 13 0 0 1 0 16" />
        <path d="M12 4a13 13 0 0 0 0 16" />
      </svg>
    );
  }

  if (icon === "doc") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-16 w-16 text-slate-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M8 3h6l4 4v14H8z" />
        <path d="M14 3v5h5" />
        <path d="M10 13h6" />
        <path d="M10 16h6" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-16 w-16 text-slate-400"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="5" y="6" width="14" height="12" rx="2" />
      <path d="M9 10h6" />
      <path d="M9 14h4" />
    </svg>
  );
}

function badgeClasses(type) {
  switch (type) {
    case "Vídeo":
      return "bg-red-100 text-red-700";
    case "Web":
      return "bg-green-100 text-green-700";
    case "Resumo":
      return "bg-blue-100 text-blue-700";
    case "Exercício":
      return "bg-violet-100 text-violet-700";
    default:
      return "bg-slate-100 text-slate-700";
  }
}

function SummaryCard({ item }) {
  return (
    <article className="rounded-[16px] border border-slate-300 bg-white px-4 py-3 shadow-sm">
      <p className="text-xs text-slate-500">{item.title}</p>
      <h3 className="mt-1 text-lg font-semibold text-slate-900">{item.value}</h3>
      <p className="mt-1 text-[11px] leading-tight text-slate-500">
        {item.helper}
      </p>
    </article>
  );
}

function RecommendationCard({ item }) {
  return (
    <article className="overflow-hidden rounded-[18px] border border-slate-300 bg-[#efefef] shadow-sm">
      <div className="m-3 mb-0 flex h-36 items-center justify-center rounded-[14px] bg-[#d9d9d9]">
        <CardIcon icon={item.icon} />
      </div>

      <div className="px-4 py-3.5">
        <span
          className={`inline-flex rounded-full px-2.5 py-1 text-sm font-semibold ${badgeClasses(
            item.type
          )}`}
        >
          {item.type}
        </span>

        <h3 className="mt-3 text-base font-semibold text-slate-900">
          {item.title}
        </h3>

        <p className="mt-2 text-[14px] text-slate-600">{item.description}</p>
      </div>
    </article>
  );
}

function ProgressItem({ item }) {
  return (
    <div className="rounded-[14px] border border-slate-200 bg-slate-50 px-3 py-2">
      <div className="mb-1 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-800">{item.title}</p>
          <p className="text-[11px] text-slate-500">{item.subject}</p>
        </div>

        <span className="text-xs text-slate-500">{item.progress}%</span>
      </div>

      <div className="h-1.5 w-full rounded-full bg-slate-200">
        <div
          className="h-1.5 rounded-full bg-[#17a34a]"
          style={{ width: `${item.progress}%` }}
        />
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <section className="mx-auto w-full max-w-[980px]">
      <div className="mb-5">
        <h1 className="text-2xl font-semibold text-slate-900">
          Recomendações
        </h1>
        <p className="mt-2 text-sm md:text-base text-slate-600">
          Conteúdos sugeridos para apoiar seus estudos e revisões.
        </p>
      </div>


      <div className="mb-5">
        <StatsOverview items={stats} />
      </div>

      <div className="mb-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <PlanningCard planning={planning} />

        <article className="rounded-[18px] border border-slate-300 bg-white p-4 shadow-sm">
          <div className="mb-4">
            <h2 className="text-base font-semibold text-slate-900">
              Progresso das atividades
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Acompanhe o andamento das atividades em aberto.
            </p>
          </div>

          <div className="space-y-2">
            {progressActivities.map((item, index) => (
              <ProgressItem key={index} item={item} />
            ))}
          </div>
        </article>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {recommendations.map((item) => (
          <RecommendationCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}