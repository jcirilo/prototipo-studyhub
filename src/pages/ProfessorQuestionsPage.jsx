const generationHistory = [
  {
    id: 1,
    material: "Aula 01 - Introdução",
    topic: "Conteúdo A",
    className: "CI101",
    amount: 5,
    type: "Múltipla escolha",
    difficulty: "Média",
    status: "Pendente",
  },
  {
    id: 2,
    material: "Slides - Normalização",
    topic: "Conteúdo B",
    className: "CI202",
    amount: 4,
    type: "Discursiva",
    difficulty: "Alta",
    status: "Aprovada",
  },
  {
    id: 3,
    material: "Vídeo - Escalonamento",
    topic: "Conteúdo C",
    className: "CI303",
    amount: 6,
    type: "Objetiva",
    difficulty: "Baixa",
    status: "Pendente",
  },
];

const pendingQuestions = [
  {
    id: 1,
    title: "Questão 01",
    topic: "Conteúdo A",
    type: "Múltipla escolha",
    statement:
      "Considere uma estrutura de dados linear. Marque a alternativa que melhor descreve uma pilha.",
    options: [
      "O primeiro elemento inserido é o primeiro a sair.",
      "O último elemento inserido é o primeiro a sair.",
      "Todos os elementos podem ser removidos aleatoriamente.",
      "A estrutura é usada apenas para grafos.",
    ],
  },
  {
    id: 2,
    title: "Questão 02",
    topic: "Conteúdo A",
    type: "Múltipla escolha",
    statement:
      "Qual operação é normalmente associada à remoção de um elemento do topo de uma pilha?",
    options: ["enqueue", "peek", "pop", "insert"],
  },
];

function statusClasses(status) {
  if (status === "Aprovada") return "bg-green-100 text-green-700";
  if (status === "Pendente") return "bg-yellow-100 text-yellow-700";
  if (status === "Rascunho") return "bg-slate-100 text-slate-700";
  return "bg-slate-100 text-slate-700";
}

function typeClasses(type) {
  if (type === "Múltipla escolha") return "bg-blue-100 text-blue-700";
  if (type === "Discursiva") return "bg-violet-100 text-violet-700";
  if (type === "Objetiva") return "bg-green-100 text-green-700";
  return "bg-slate-100 text-slate-700";
}

function difficultyClasses(level) {
  if (level === "Alta") return "bg-red-100 text-red-700";
  if (level === "Média") return "bg-yellow-100 text-yellow-700";
  if (level === "Baixa") return "bg-green-100 text-green-700";
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

function GeneratorCard() {
  return (
    <article className="rounded-[18px] border border-slate-300 bg-white p-4 shadow-sm">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-900">
          Gerar questões
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Escolha o material base e defina os parâmetros da geração.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Material base
          </label>
          <select className="w-full rounded-[10px] border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none focus:border-[#17a34a]">
            <option>Aula 01 - Introdução</option>
            <option>Slides - Normalização</option>
            <option>Vídeo - Escalonamento</option>
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

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Quantidade
          </label>
          <select className="w-full rounded-[10px] border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none focus:border-[#17a34a]">
            <option>5 questões</option>
            <option>10 questões</option>
            <option>15 questões</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Dificuldade
          </label>
          <select className="w-full rounded-[10px] border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none focus:border-[#17a34a]">
            <option>Baixa</option>
            <option>Média</option>
            <option>Alta</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="mb-1 block text-xs font-medium text-slate-700">
            Tipo de questão
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="rounded-full bg-[#17a34a] px-3 py-1.5 text-xs font-semibold text-white"
            >
              Múltipla escolha
            </button>
            <button
              type="button"
              className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700"
            >
              Objetiva
            </button>
            <button
              type="button"
              className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700"
            >
              Discursiva
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <button
          type="button"
          className="rounded-full bg-[#17a34a] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#14873d]"
        >
          Gerar questões
        </button>
      </div>
    </article>
  );
}

function GenerationItem({ item }) {
  return (
    <div className="rounded-[14px] border border-slate-200 bg-slate-50 px-3 py-2.5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-800">{item.material}</p>
          <p className="mt-0.5 text-[11px] text-slate-500">
            {item.className} · {item.topic}
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

      <div className="mt-2 flex flex-wrap gap-1.5">
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-700">
          {item.amount} questões
        </span>
        <span
          className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${typeClasses(
            item.type
          )}`}
        >
          {item.type}
        </span>
        <span
          className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${difficultyClasses(
            item.difficulty
          )}`}
        >
          {item.difficulty}
        </span>
      </div>
    </div>
  );
}

function QuestionReviewCard({ item }) {
  return (
    <article className="rounded-[16px] border border-slate-300 bg-white px-4 py-3 shadow-sm">
      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
        <span>{item.title}</span>
        <span className="text-slate-300">|</span>
        <span>{item.topic}</span>
        <span
          className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${typeClasses(
            item.type
          )}`}
        >
          {item.type}
        </span>
      </div>

      <p className="mt-3 text-sm text-slate-800">{item.statement}</p>

      <div className="mt-3 space-y-2">
        {item.options.map((option) => (
          <div
            key={option}
            className="rounded-[12px] border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
          >
            {option}
          </div>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          className="rounded-full bg-[#17a34a] px-3 py-1 text-xs font-semibold text-white transition hover:bg-[#14873d]"
        >
          Aprovar
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
          Excluir
        </button>
        <button
          type="button"
          className="rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-700 transition hover:bg-slate-50"
        >
          Adicionar manualmente
        </button>
      </div>
    </article>
  );
}

export default function ProfessorQuestionsPage() {
  return (
    <section className="mx-auto w-full max-w-[980px]">
      <div className="mb-5">
        <h1 className="text-2xl font-semibold text-slate-900">Questões</h1>
        <p className="mt-2 text-sm md:text-base text-slate-600">
          Gere, revise e aprove questões antes de publicá-las para os alunos.
        </p>
      </div>

      <div className="mb-5 grid grid-cols-1 gap-3 md:grid-cols-3">
        <SummaryCard
          title="Pendentes de revisão"
          value="2"
          helper="Questões aguardando validação."
        />
        <SummaryCard
          title="Aprovadas"
          value="1"
          helper="Questões já prontas para uso."
        />
        <SummaryCard
          title="Gerações recentes"
          value="3"
          helper="Execuções recentes do gerador."
        />
      </div>

      <div className="mb-5">
        <GeneratorCard />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-[18px] border border-slate-300 bg-white p-4 shadow-sm">
          <div className="mb-4">
            <h2 className="text-base font-semibold text-slate-900">
              Histórico de gerações
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Últimos materiais usados para gerar questões.
            </p>
          </div>

          <div className="space-y-2">
            {generationHistory.map((item) => (
              <GenerationItem key={item.id} item={item} />
            ))}
          </div>
        </article>

        <article className="rounded-[18px] border border-slate-300 bg-white p-4 shadow-sm">
          <div className="mb-4">
            <h2 className="text-base font-semibold text-slate-900">
              Revisão e aprovação
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Revise o enunciado, alternativas e publique quando estiver pronto.
            </p>
          </div>

          <div className="space-y-3">
            {pendingQuestions.map((item) => (
              <QuestionReviewCard key={item.id} item={item} />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}