import ExamsPage from "../institution/exams/components/Exampage";
import CreateExam from "../institution/exams/create/page";

export default function ExamMainPage({ searchParams }: { searchParams?: { create?: string } }) {
  if (searchParams?.create === "true") {
    return <CreateExam />;
  }

  return (
    <div className="flex flex-col h-full w-full">
      <h1 className="text-2xl font-bold mb-6">Exams Management</h1>
      <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
        <p className="text-gray-400">
          Manage your exams, create new ones, and view statistics.
        </p>
      </div>
      <ExamsPage />
    </div>
  );
}
