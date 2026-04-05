import { HashRouter , Navigate, Route, Routes } from "react-router-dom";
import AppShell from "./components/AppShell";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import PendingActivitiesPage from "./pages/PendingActivitiesPage";
import AnswerActivityPage from "./pages/AnswerActivityPage";
import CompletedActivitiesPage from "./pages/CompletedActivitiesPage";
import ClassesPage from "./pages/ClassesPage";
import PerformancePage from "./pages/PerformancePage";
import PlanningPage from "./pages/PlanningPage";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/aluno/login" replace />} />
        <Route path="/aluno/login" element={<LoginPage />} />

        <Route element={<AppShell />}>
          <Route path="/aluno/inicio" element={<HomePage />} />
          <Route
            path="/aluno/atividades/pendentes"
            element={<PendingActivitiesPage />}
          />
          <Route
            path="/aluno/atividades/responder"
            element={<AnswerActivityPage />}
          />
          <Route
            path="/aluno/atividades/concluidas"
            element={<CompletedActivitiesPage />}
          />
          <Route path="/aluno/turmas" element={<ClassesPage />} />
          <Route path="/aluno/desempenho" element={<PerformancePage />} />
          <Route path="/aluno/planejamento" element={<PlanningPage />} />
          <Route path="/aluno/perfil" element={<ProfilePage />} />
        </Route>

        <Route path="*" element={<Navigate to="/aluno/login" replace />} />
      </Routes>
    </HashRouter>
  );
}