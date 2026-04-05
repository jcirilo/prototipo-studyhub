import { Link } from "react-router-dom";

const question = {
  discipline: "Estruturas de Dados",
  title: "Atividade 01",
  content: "Conteúdo A",
  type: "Questionário",
  dueDate: "12/04/2026",
  progress: 30,
  currentQuestion: 1,
  totalQuestions: 5,
  statement:
    "Considere uma estrutura de dados linear. Marque a alternativa que melhor descreve uma pilha.",
  options: [
    "Estrutura em que o primeiro elemento inserido é o primeiro a sair.",
    "Estrutura em que o último elemento inserido é o primeiro a sair.",
    "Estrutura que permite acesso direto a qualquer posição sem critério.",
    "Estrutura usada exclusivamente para ordenação de grafos.",
  ],
};

function typeClasses(type) {
  if (type === "Questionário") return "bg-blue-100 text-blue-700";
  if (type === "Lista") return "bg-violet-100 text-violet-700";
  if (type === "Exercício") return "bg-green-100 text-green-700";
  return "bg-slate-100 text-slate-700";
}

function InfoPill({ children, className = "" }) {
  return (
    <span
      className={`rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-700 ${className}`}
    >
      {children}
    </span>
  );
}

export default function AnswerActivityPage() {
  return (
    <section className="mx-auto w-full max-w-[980px]">
      <div className="mb-5">
        <h1 className="text-2xl font-semibold text-slate-900">
          Responder atividade
        </h1>
        <p className="mt-2 text-sm md:text-base text-slate-600">
          Leia o enunciado com atenção e selecione a alternativa correta.
        </p>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <Link
          to="/aluno/atividades/pendentes"
          className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          Voltar para pendentes
        </Link>

        <Link
          to="/aluno/atividades/concluidas"
          className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          Ver concluídas
        </Link>
      </div>

      <article className="rounded-[18px] border border-slate-300 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span>{question.discipline}</span>
              <span className="text-slate-300">|</span>
              <InfoPill>{question.content}</InfoPill>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${typeClasses(
                  question.type
                )}`}
              >
                {question.type}
              </span>
            </div>

            <h2 className="mt-1 text-lg font-semibold text-slate-900">
              {question.title}
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Entrega: {question.dueDate}
            </p>
          </div>

          <div className="w-full max-w-[280px]">
            <div className="mb-1 flex items-center justify-between text-[10px] text-slate-500">
              <span>Progresso da atividade</span>
              <span>{question.progress}%</span>
            </div>

            <div className="h-1.5 w-full rounded-full bg-slate-200">
              <div
                className="h-1.5 rounded-full bg-[#17a34a]"
                style={{ width: `${question.progress}%` }}
              />
            </div>

            <p className="mt-2 text-right text-[11px] text-slate-500">
              Questão {question.currentQuestion} de {question.totalQuestions}
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-[16px] border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm leading-6 text-slate-800">{question.statement}</p>
        </div>

        <div className="mt-5 space-y-3">
          {question.options.map((option, index) => (
            <label
              key={option}
              className="flex cursor-pointer items-start gap-3 rounded-[16px] border border-slate-300 bg-white px-4 py-3 transition hover:border-slate-400 hover:bg-slate-50"
            >
              <input
                type="radio"
                name="question-1"
                className="mt-0.5 h-4 w-4 shrink-0 accent-[#17a34a]"
              />

              <div className="min-w-0">
                <p className="text-xs font-semibold text-slate-500">
                  Alternativa {String.fromCharCode(65 + index)}
                </p>
                <p className="mt-1 text-sm text-slate-800">{option}</p>
              </div>
            </label>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Salvar resposta
          </button>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Próxima questão
            </button>

            <Link
              to="/aluno/atividades/concluidas"
              className="rounded-full bg-[#17a34a] px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-[#14873d]"
            >
              Enviar atividade
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}