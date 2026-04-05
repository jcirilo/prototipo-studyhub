import { Link } from "react-router-dom";
import logo from "../../public/logo-studyhub.png";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-start justify-center bg-[#f5f5f5] px-4 pt-10 sm:pt-16">
      <div className="w-full max-w-[320px]">
        <div className="mb-4 flex justify-center">
          <img
            src={logo}
            alt="StudyHub"
            className="h-10 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextSibling.style.display = "flex";
            }}
          />
          <div
            className="hidden h-10 items-center justify-center text-lg font-bold text-slate-700"
          >
            StudyHub
          </div>
        </div>

        <div className="rounded-md border border-slate-300 bg-white px-4 py-4 shadow-sm">
          <h1 className="text-[15px] font-semibold text-slate-900">
            Login no StudyHub
          </h1>
          <p className="mt-1 text-[11px] text-slate-500">
            Acesse sua conta de aluno com o <strong>SIGAA</strong>
          </p>

          <form className="mt-4 space-y-3">
            <div>
              <label className="mb-1 block text-[11px] font-medium text-slate-700">
                Usuário
              </label>
              <input
                type="email"
                placeholder="Digite seu usuário"
                className="w-full rounded-[2px] border border-slate-300 px-2 py-1.5 text-[12px] text-slate-800 outline-none placeholder:text-slate-400 focus:border-green-600"
              />
            </div>

            <div>
              <label className="mb-1 block text-[11px] font-medium text-slate-700">
                Senha
              </label>
              <input
                type="password"
                placeholder="Digite sua senha"
                className="w-full rounded-[2px] border border-slate-300 px-2 py-1.5 text-[12px] text-slate-800 outline-none placeholder:text-slate-400 focus:border-green-600"
              />
            </div>

            <label className="flex items-center gap-2 text-[11px] text-slate-600">
              <input
                type="checkbox"
                className="h-3.5 w-3.5 rounded border-slate-300 text-green-600 focus:ring-0"
              />
              Lembrar-me
            </label>

            <Link
              to="/aluno/inicio"
              className="block w-full rounded-[2px] bg-[#17a34a] px-3 py-1.5 text-center text-[12px] font-medium text-white transition hover:bg-[#14873d]"
            >
              Entrar
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
}