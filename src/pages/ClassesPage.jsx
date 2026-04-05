const classes = [
  {
    id: 1,
    name: "Estruturas de Dados",
    professor: "Prof. Conteúdo A",
    schedule: "Seg e Qua · 08:00 - 10:00",
    status: "Em andamento",
    contents: ["Conteúdo A", "Conteúdo B", "Lista 1"],
  },
  {
    id: 2,
    name: "Banco de Dados",
    professor: "Profa. Conteúdo B",
    schedule: "Ter e Qui · 10:00 - 12:00",
    status: "Em andamento",
    contents: ["Módulo 1", "Conteúdo C", "Projeto"],
  },
  {
    id: 3,
    name: "Sistemas Operacionais",
    professor: "Prof. Conteúdo C",
    schedule: "Sex · 14:00 - 18:00",
    status: "Nova",
    contents: ["Conteúdo D", "Resumo", "Exercício 1"],
  },
];

function statusClasses(status) {
  if (status === "Em andamento") {
    return "bg-green-100 text-green-700";
  }

  if (status === "Nova") {
    return "bg-blue-100 text-blue-700";
  }

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

function ClassCard({ item }) {
  return (
    <article className="rounded-[16px] border border-slate-300 bg-white px-4 py-3 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold text-slate-900">
            {item.name}
          </h2>
          <p className="text-xs text-slate-500">{item.professor}</p>
        </div>

        <span
          className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${statusClasses(
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

      <div className="mt-3 flex gap-2">
        <button className="rounded-full bg-[#17a34a] px-3 py-1 text-xs font-semibold text-white hover:bg-[#14873d]">
          Acessar
        </button>

        <button className="rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-700 hover:bg-slate-50">
          Materiais
        </button>
      </div>
    </article>
  );
}

export default function ClassesPage() {
  return (
    <section className="mx-auto w-full max-w-[980px]">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-slate-900">Turmas</h1>
        <p className="mt-2 text-base text-slate-600">
          Visualize suas disciplinas atuais, horários e conteúdos associados.
        </p>
      </div>

    <div className="mb-5 grid grid-cols-1 gap-3 md:grid-cols-3">
        <SummaryCard
          title="Turmas ativas"
          value="3"
          helper="Quantidade fictícia de turmas em andamento."
        />
        <SummaryCard
          title="Professores"
          value="3"
          helper="Docentes vinculados às disciplinas atuais."
        />
        <SummaryCard
          title="Conteúdos recentes"
          value="9"
          helper="Materiais e módulos associados às turmas."
        />
      </div>

      <div className="space-y-5">
        {classes.map((item) => (
          <ClassCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}