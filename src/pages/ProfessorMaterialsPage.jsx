import StatsOverview from "../components/StatsOverview";

const materials = [
  {
    id: 1,
    title: "Aula 01 - Introdução",
    discipline: "Estruturas de Dados",
    topic: "Conteúdo A",
    type: "PDF",
    size: "2,4 MB",
    className: "CI101",
    uploadedAt: "05/04/2026",
    status: "Publicado",
  },
  {
    id: 2,
    title: "Slides - Normalização",
    discipline: "Banco de Dados",
    topic: "Conteúdo B",
    type: "PPT",
    size: "4,8 MB",
    className: "CI202",
    uploadedAt: "04/04/2026",
    status: "Publicado",
  },
  {
    id: 3,
    title: "Vídeo - Escalonamento",
    discipline: "Sistemas Operacionais",
    topic: "Conteúdo C",
    type: "MP4",
    size: "18,2 MB",
    className: "CI303",
    uploadedAt: "03/04/2026",
    status: "Rascunho",
  },
];

const stats = [
  {
    title: "Materiais publicados",
    value: "3",
    helper: "Arquivos disponíveis para os alunos.",
  },
  {
    title: "Turmas com material",
    value: "3",
    helper: "Quantidade total de alunos vinculados.",
  },
  {
    title: "Prontos para IA",
    value: "2",
    helper: "Materiais aptos para geração de questões.",
  },
];

function statusClasses(status) {
  if (status === "Publicado") return "bg-green-100 text-green-700";
  if (status === "Rascunho") return "bg-yellow-100 text-yellow-700";
  return "bg-slate-100 text-slate-700";
}

function typeClasses(type) {
  if (type === "PDF") return "bg-red-100 text-red-700";
  if (type === "PPT") return "bg-orange-100 text-orange-700";
  if (type === "MP4") return "bg-blue-100 text-blue-700";
  if (type === "DOCX") return "bg-indigo-100 text-indigo-700";
  return "bg-slate-100 text-slate-700";
}

function UploadBox() {
  return (
    <article className="rounded-[18px] border border-dashed border-slate-300 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
        <div className="grid flex-1 grid-cols-1 gap-3 md:grid-cols-2">
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
              Tópico
            </label>
            <input
              type="text"
              placeholder="Ex.: Conteúdo A"
              className="w-full rounded-[10px] border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-[#17a34a]"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-1 block text-xs font-medium text-slate-700">
              Arquivo
            </label>
            <div className="rounded-[12px] border border-slate-300 bg-slate-50 px-3 py-3 text-sm text-slate-500">
              Arraste um arquivo aqui ou clique para selecionar
              <p className="mt-1 text-[11px] text-slate-400">
                Formatos aceitos: .pdf, .docx, .ppt, .mp4 · até 50MB
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="rounded-full bg-[#17a34a] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#14873d]"
        >
          Enviar material
        </button>
      </div>
    </article>
  );
}

function MaterialCard({ item }) {
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
          {item.size}
        </span>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-slate-600">Enviado em: {item.uploadedAt}</p>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-700 transition hover:bg-slate-50"
          >
            Visualizar
          </button>
          <button
            type="button"
            className="rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-700 transition hover:bg-slate-50"
          >
            Editar
          </button>
          <button
            type="button"
            className="rounded-full bg-[#17a34a] px-3 py-1 text-xs font-semibold text-white transition hover:bg-[#14873d]"
          >
            Gerar questões
          </button>
        </div>
      </div>
    </article>
  );
}

export default function ProfessorMaterialsPage() {
  return (
    <section className="mx-auto w-full max-w-[980px]">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Materiais</h1>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Envie e organize materiais por turma, disciplina e conteúdo.
          </p>
        </div>
      </div>

      <div className="mb-5">
        <StatsOverview items={stats} />
      </div>

      <div className="mb-5">
        <UploadBox />
      </div>

      <div className="space-y-3">
        {materials.map((item) => (
          <MaterialCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}