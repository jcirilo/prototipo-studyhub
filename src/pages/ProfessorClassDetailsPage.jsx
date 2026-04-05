import { Link } from "react-router-dom";

const classInfo = {
  name: "Estruturas de Dados",
  code: "CI101",
  period: "2026.1",
  schedule: "Seg e Qua · 08:00 - 10:00",
  students: 32,
  average: "8,1",
};

const materials = [
  { id: 1, title: "Material 01", type: "PDF", topic: "Conteúdo A" },
  { id: 2, title: "Slides 02", type: "PPT", topic: "Conteúdo B" },
  { id: 3, title: "Vídeo 03", type: "MP4", topic: "Conteúdo C" },
];

const activities = [
  {
    id: 1,
    title: "Atividade 01",
    topic: "Conteúdo A",
    submissions: "24/32",
    deadline: "12/04/2026",
    status: "Aberta",
  },
  {
    id: 2,
    title: "Atividade 02",
    topic: "Conteúdo B",
    submissions: "18/32",
    deadline: "14/04/2026",
    status: "Aberta",
  },
  {
    id: 3,
    title: "Atividade 03",
    topic: "Conteúdo C",
    submissions: "32/32",
    deadline: "08/04/2026",
    status: "Encerrada",
  },
];

const students = [
  { id: 1, name: "Aluno A", progress: 82, status: "Bom" },
  { id: 2, name: "Aluno B", progress: 64, status: "Atenção" },
  { id: 3, name: "Aluno C", progress: 91, status: "Bom" },
  { id: 4, name: "Aluno D", progress: 58, status: "Atenção" },
];

function statusClasses(status) {
  if (status === "Aberta") return "bg-green-100 text-green-700";
  if (status === "Encerrada") return "bg-slate-100 text-slate-700";
  if (status === "Bom") return "bg-green-100 text-green-700";
  if (status === "Atenção") return "bg-yellow-100 text-yellow-700";
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

function SectionCard({ title, description, children, actionLabel }) {
  return (
    <article className="rounded-[18px] border border-slate-300 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold text-slate-900">{title}</h2>
          <p className="mt-1 text-sm text-slate-600">{description}</p>
        </div>

        {actionLabel ? (
          <button
            type="button"
            className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700 transition hover:bg-slate-50"
          >
            {actionLabel}
          </button>
        ) : null}
      </div>

      {children}
    </article>
  );
}

function MaterialItem({ item }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-[14px] border border-slate-200 bg-slate-50 px-3 py-2.5">
      <div>
        <p className="text-sm font-medium text-slate-800">{item.title}</p>
        <p className="text-[11px] text-slate-500">
          {item.type} · {item.topic}
        </p>
      </div>

      <button
        type="button"
        className="rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-700 transition hover:bg-white"
      >
        Ver
      </button>
    </div>
  );
}

function ActivityItem({ item }) {
  return (
    <div className="rounded-[14px] border border-slate-200 bg-slate-50 px-3 py-2.5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-800">{item.title}</p>
          <p className="text-[11px] text-slate-500">{item.topic}</p>
        </div>

        <span
          className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${statusClasses(
            item.status
          )}`}
        >
          {item.status}
        </span>
      </div>

      <div className="mt-2 flex items-center justify-between gap-3 text-xs text-slate-600">
        <span>Envios: {item.submissions}</span>
        <span>Prazo: {item.deadline}</span>
      </div>
    </div>
  );
}

function StudentItem({ item }) {
  return (
    <div className="rounded-[14px] border border-slate-200 bg-slate-50 px-3 py-2.5">
      <div className="mb-2 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-800">{item.name}</p>
          <p className="text-[11px] text-slate-500">Progresso individual</p>
        </div>

        <span
          className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${statusClasses(
            item.status
          )}`}
        >
          {item.status}
        </span>
      </div>

      <div>
        <div className="mb-1 flex items-center justify-between text-[11px] text-slate-500">
          <span>Desempenho</span>
          <span>{item.progress}%</span>
        </div>

        <div className="h-1.5 rounded-full bg-slate-200">
          <div
            className="h-1.5 rounded-full bg-[#17a34a]"
            style={{ width: `${item.progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default function ProfessorClassDetailsPage() {
  return (
    <section className="mx-auto w-full max-w-[980px]">
      <div className="mb-4">
        <Link
          to="/professor/turmas"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          ← Voltar para turmas
        </Link>
      </div>
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs text-slate-500">
            {classInfo.code} · {classInfo.period}
          </p>
          <h1 className="mt-1 text-2xl font-semibold text-slate-900">
            {classInfo.name}
          </h1>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            {classInfo.schedule}
          </p>
        </div>

        <button
          type="button"
          className="rounded-full bg-[#17a34a] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#14873d]"
        >
          Editar turma
        </button>
      </div>

      <div className="mb-5 grid grid-cols-1 gap-3 md:grid-cols-3">
        <SummaryCard
          title="Alunos"
          value={String(classInfo.students)}
          helper="Quantidade de alunos vinculados à turma."
        />
        <SummaryCard
          title="Média"
          value={classInfo.average}
          helper="Média geral fictícia da turma."
        />
        <SummaryCard
          title="Atividades"
          value="3"
          helper="Atividades cadastradas atualmente."
        />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <SectionCard
          title="Materiais"
          description="Arquivos e conteúdos associados à turma."
          actionLabel="Adicionar"
        >
          <div className="space-y-2">
            {materials.map((item) => (
              <MaterialItem key={item.id} item={item} />
            ))}
          </div>
        </SectionCard>

        <SectionCard
          title="Atividades"
          description="Situação atual das atividades da turma."
          actionLabel="Criar"
        >
          <div className="space-y-2">
            {activities.map((item) => (
              <ActivityItem key={item.id} item={item} />
            ))}
          </div>
        </SectionCard>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <SectionCard
          title="Desempenho da turma"
          description="Indicadores gerais de acompanhamento."
          actionLabel="Ver relatório"
        >
          <div className="space-y-3">
            <div>
              <div className="mb-1 flex items-center justify-between text-[12px] text-slate-600">
                <span>Média de aproveitamento</span>
                <span>81%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-200">
                <div className="h-2 w-[81%] rounded-full bg-[#17a34a]" />
              </div>
            </div>

            <div>
              <div className="mb-1 flex items-center justify-between text-[12px] text-slate-600">
                <span>Taxa de entrega</span>
                <span>76%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-200">
                <div className="h-2 w-[76%] rounded-full bg-[#17a34a]" />
              </div>
            </div>

            <div>
              <div className="mb-1 flex items-center justify-between text-[12px] text-slate-600">
                <span>Domínio do conteúdo</span>
                <span>73%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-200">
                <div className="h-2 w-[73%] rounded-full bg-[#17a34a]" />
              </div>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          title="Alunos"
          description="Resumo de progresso individual."
          actionLabel="Ver todos"
        >
          <div className="space-y-2">
            {students.map((item) => (
              <StudentItem key={item.id} item={item} />
            ))}
          </div>
        </SectionCard>
      </div>
    </section>
  );
}