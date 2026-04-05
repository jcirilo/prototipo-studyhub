import { Link } from "react-router-dom";
import StatsOverview from "../components/StatsOverview";

const classes = [
  {
    id: 1,
    name: "Estruturas de Dados",
    code: "CI101",
    students: 32,
    schedule: "Seg e Qua · 08:00 - 10:00",
    status: "Ativa",
    contents: ["Conteúdo A", "Lista 1", "Material"],
  },
  {
    id: 2,
    name: "Banco de Dados",
    code: "CI202",
    students: 28,
    schedule: "Ter e Qui · 10:00 - 12:00",
    status: "Ativa",
    contents: ["Conteúdo B", "Projeto", "Slides"],
  },
  {
    id: 3,
    name: "Sistemas Operacionais",
    code: "CI303",
    students: 30,
    schedule: "Sex · 14:00 - 18:00",
    status: "Nova",
    contents: ["Conteúdo C", "Resumo", "Atividade"],
  },
];

const stats = [
  {
    title: "Turmas ativas",
    value: "3",
    helper: "Turmas atualmente em andamento.",
  },
  {
    title: "Alunos totais",
    value: "90",
    helper: "Quantidade total de alunos vinculados.",
  },
  {
    title: "Conteúdos ativos",
    value: "9",
    helper: "Materiais e atividades associados às turmas.",
  },
];

function statusClasses(status) {
  if (status === "Ativa") return "bg-green-100 text-green-700";
  if (status === "Nova") return "bg-blue-100 text-blue-700";
  return "bg-slate-100 text-slate-700";
}

function ClassCard({ item }) {
  return (
    <article className="rounded-[16px] border border-slate-300 bg-white px-4 py-3 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span>{item.code}</span>
            <span className="text-slate-300">|</span>
            <span>{item.students} alunos</span>
          </div>

          <h2 className="mt-1 text-base font-semibold text-slate-900">
            {item.name}
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

      <p className="mt-2 text-xs text-slate-600">{item.schedule}</p>

      <div className="mt-2 flex flex-wrap gap-1.5">
        {item.contents.map((content) => (
          <span
            key={content}
            className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-700"
          >
            {content}
          </span>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <Link
          to={`/professor/turmas/${item.id}`}
          className="rounded-full bg-[#17a34a] px-3 py-1 text-xs font-semibold text-white transition hover:bg-[#14873d]"
        >
          Acessar
        </Link>

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
          Alunos
        </button>
      </div>
    </article>
  );
}

export default function ProfessorClassesPage() {
  return (
    <section className="mx-auto w-full max-w-[980px]">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Turmas</h1>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Gerencie suas turmas, acompanhe alunos e organize conteúdos.
          </p>
        </div>

        <button
          type="button"
          className="rounded-full bg-[#17a34a] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#14873d]"
        >
          Nova turma
        </button>
      </div>

      <div className="mb-5">
        <StatsOverview items={stats} />
      </div>

      <div className="space-y-3">
        {classes.map((item) => (
          <ClassCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}