import StatsOverview from "../components/StatsOverview";

const activities = [
  {
    id: 1,
    title: "Atividade 01",
    className: "CI101",
    discipline: "Estruturas de Dados",
    topic: "Conteúdo A",
    type: "Questionário",
    deadline: "12/04/2026",
    weight: "2,0",
    submissions: "24/32",
    status: "Aberta",
  },
  {
    id: 2,
    title: "Atividade 02",
    className: "CI202",
    discipline: "Banco de Dados",
    topic: "Conteúdo B",
    type: "Lista",
    deadline: "14/04/2026",
    weight: "1,5",
    submissions: "18/28",
    status: "Aberta",
  },
  {
    id: 3,
    title: "Atividade 03",
    className: "CI303",
    discipline: "Sistemas Operacionais",
    topic: "Conteúdo C",
    type: "Questionário",
    deadline: "08/04/2026",
    weight: "2,5",
    submissions: "30/30",
    status: "Encerrada",
  },
];

const stats = [
  {
    title: "Atividades abertas",
    value: "2",
    helper: "Disponíveis para resposta dos alunos.",
  },
  {
    title: "Encerradas",
    value: "1",
    helper: "Atividades já finalizadas.",
  },
  {
    title: "Taxa média de envio",
    value: "76%",
    helper: "Participação atual dos alunos.",
  },
];

function statusClasses(status) {
  if (status === "Aberta") return "bg-green-100 text-green-700";
  if (status === "Encerrada") return "bg-slate-100 text-slate-700";
  if (status === "Rascunho") return "bg-yellow-100 text-yellow-700";
  return "bg-slate-100 text-slate-700";
}

function typeClasses(type) {
  if (type === "Questionário") return "bg-blue-100 text-blue-700";
  if (type === "Lista") return "bg-violet-100 text-violet-700";
  if (type === "Exercício") return "bg-green-100 text-green-700";
  return "bg-slate-100 text-slate-700";
}

function CreateActivityCard() {
  return (
    <article className="rounded-[18px] border border-slate-300 bg-white p-4 shadow-sm">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-900">
          Criar atividade
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Defina turma, conteúdo, prazo e peso avaliativo.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Turma
          </label>
          <select className="w-full rounded-[10px] border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none focus:border-[#17a34a]">
            <option>CI101 - Estruturas de Dados</option>
            <option>CI202 - Banco de Dados</option>
            <option>CI303 - Sistemas Operacionais</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Título
          </label>
          <input
            type="text"
            placeholder="Ex.: Atividade 04"
            className="w-full rounded-[10px] border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-[#17a34a]"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Conteúdo
          </label>
          <input
            type="text"
            placeholder="Ex.: Conteúdo A"
            className="w-full rounded-[10px] border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-[#17a34a]"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Tipo
          </label>
          <select className="w-full rounded-[10px] border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none focus:border-[#17a34a]">
            <option>Questionário</option>
            <option>Lista</option>
            <option>Exercício</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Prazo
          </label>
          <input
            type="date"
            className="w-full rounded-[10px] border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none focus:border-[#17a34a]"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Peso avaliativo
          </label>
          <input
            type="text"
            placeholder="Ex.: 2,0"
            className="w-full rounded-[10px] border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-[#17a34a]"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Enunciado
          </label>
          <textarea
            rows={4}
            placeholder="Descreva a atividade e os critérios principais."
            className="w-full rounded-[10px] border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-[#17a34a]"
          />
        </div>
      </div>

      <div className="mt-4 flex justify-end gap-2">
        <button
          type="button"
          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          Salvar rascunho
        </button>
        <button
          type="button"
          className="rounded-full bg-[#17a34a] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#14873d]"
        >
          Publicar atividade
        </button>
      </div>
    </article>
  );
}

function ActivityCard({ item }) {
  return (
    <article className="rounded-[16px] border border-slate-300 bg-white px-4 py-3 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span>{item.className}</span>
            <span className="text-slate-300">|</span>
            <span>{item.discipline}</span>
          </div>

          <h2 className="mt-1 text-base font-semibold text-slate-900">
            {item.title}
          </h2>
        </div>

        <span
          className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${statusClasses(
            item.status
          )}`}
        >
          {item.status}
        </span>
      </div>

      <div className="mt-2 flex flex-wrap gap-1.5">
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-700">
          {item.topic}
        </span>
        <span
          className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${typeClasses(
            item.type
          )}`}
        >
          {item.type}
        </span>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-700">
          Peso {item.weight}
        </span>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
        <span>Prazo: {item.deadline}</span>
        <span>Envios: {item.submissions}</span>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          className="rounded-full bg-[#17a34a] px-3 py-1 text-xs font-semibold text-white transition hover:bg-[#14873d]"
        >
          Ver detalhes
        </button>
        <button
          type="button"
          className="rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-700 transition hover:bg-slate-50"
        >
          Editar
        </button>
        <button
          type="button"
          className="rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-700 transition hover:bg-slate-50"
        >
          Reprogramar
        </button>
        <button
          type="button"
          className="rounded-full border border-red-200 px-3 py-1 text-xs text-red-700 transition hover:bg-red-50"
        >
          Excluir
        </button>
      </div>
    </article>
  );
}

export default function ProfessorActivitiesPage() {
  return (
    <section className="mx-auto w-full max-w-[980px]">
      <div className="mb-5">
        <h1 className="text-2xl font-semibold text-slate-900">Atividades</h1>
        <p className="mt-2 text-sm md:text-base text-slate-600">
          Crie, edite e acompanhe atividades vinculadas às suas turmas.
        </p>
      </div>

      <div className="mb-5">
        <StatsOverview items={stats} />
      </div>

      <div className="mb-5">
        <CreateActivityCard />
      </div>

      <div className="space-y-3">
        {activities.map((item) => (
          <ActivityCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}