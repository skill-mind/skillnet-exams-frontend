import ExamsPage from "../exams/components/Exampage";
import CreateExam from "../exams/create/page";

export default function ExamMainPage({ searchParams }: { searchParams?: { create?: string } }) {
  return searchParams?.create === "true" ? <CreateExam /> : <ExamsPage />;
}
