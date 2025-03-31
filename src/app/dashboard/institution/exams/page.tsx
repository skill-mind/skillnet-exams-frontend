import ExamsPage from "../../../../components/exams/Exampage";
import CreateExam from "../../../../components/create/page";

export default function ExamMainPage({
  searchParams,
}: {
  searchParams?: { create?: string };
}) {
  return searchParams?.create === "true" ? <CreateExam /> : <ExamsPage />;
}
