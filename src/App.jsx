import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import AppShell from "./components/AppShell";
import ProfessorShell from "./components/ProfessorShell";

import LoginPage from "./pages/LoginPage";
import ProfessorLoginPage from "./pages/ProfessorLoginPage";

import HomePage from "./pages/HomePage";
import PendingActivitiesPage from "./pages/PendingActivitiesPage";
import AnswerActivityPage from "./pages/AnswerActivityPage";
import CompletedActivitiesPage from "./pages/CompletedActivitiesPage";
import ClassesPage from "./pages/ClassesPage";
import PerformancePage from "./pages/PerformancePage";
import PlanningPage from "./pages/PlanningPage";
import ProfilePage from "./pages/ProfilePage";

import ProfessorHomePage from "./pages/ProfessorHomePage";
import ProfessorClassesPage from "./pages/ProfessorClassesPage";
import ProfessorClassDetailsPage from "./pages/ProfessorClassDetailsPage";
import ProfessorMaterialsPage from "./pages/ProfessorMaterialsPage";
import ProfessorQuestionsPage from "./pages/ProfessorQuestionsPage";
import ProfessorActivitiesPage from "./pages/ProfessorActivitiesPage";
import ProfessorPerformancePage from "./pages/ProfessorPerformancePage";
import ProfessorProfilePage from "./pages/ProfessorProfilePage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/aluno/login" replace />} />

        <Route path="/aluno/login" element={<LoginPage />} />
        <Route path="/professor/login" element={<ProfessorLoginPage />} />

        <Route element={<AppShell />}>
          <Route path="/aluno/inicio" element={<HomePage />} />
          <Route path="/aluno/atividades/pendentes" element={<PendingActivitiesPage />} />
          <Route path="/aluno/atividades/responder" element={<AnswerActivityPage />} />
          <Route path="/aluno/atividades/concluidas" element={<CompletedActivitiesPage />}/>
          <Route path="/aluno/turmas" element={<ClassesPage />} />
          <Route path="/aluno/desempenho" element={<PerformancePage />} />
          <Route path="/aluno/planejamento" element={<PlanningPage />} />
          <Route path="/aluno/perfil" element={<ProfilePage />} />
        </Route>

        <Route element={<ProfessorShell />}>
          <Route path="/professor/inicio" element={<ProfessorHomePage />} />
          <Route path="/professor/turmas" element={<ProfessorClassesPage />} />
          <Route path="/professor/turmas/:id" element={<ProfessorClassDetailsPage />}/>
          <Route path="/professor/materiais" element={<ProfessorMaterialsPage />} />
          <Route path="/professor/atividades" element={<ProfessorActivitiesPage />} />
          <Route path="/professor/questoes" element={<ProfessorQuestionsPage />} />
          <Route path="/professor/desempenho"element={<ProfessorPerformancePage />}/>
          <Route path="/professor/perfil" element={<ProfessorProfilePage />} />
          
        </Route>
        

        <Route path="*" element={<Navigate to="/aluno/login" replace />} />
      </Routes>
    </HashRouter>
  );
}