import ExamsPage from "../institution/exams/components/Exampage";
import CreateExam from "../institution/exams/create/page";

export default function ExamMainPage({ searchParams }: { searchParams?: { create?: string } }) {
  return searchParams?.create === "true" ? <CreateExam /> : <ExamsPage />;
}