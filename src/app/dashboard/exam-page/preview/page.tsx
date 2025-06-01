import ExampPageHeader from "@/components/exam-page/header";
import PreviewQuestions from "@/components/exam-page/exam-preview-questions";

const ExamPreviewPage = () => {
  // Generate 25 dummy questions: odd IDs answered, even IDs not answered
  const dummyQuestions = Array.from({ length: 25 }, (_, i) => {
    const id = i + 1;
    return {
      id,
      option: `Option ${((id - 1) % 4) + 1}`, // cycles through “Option 1” … “Option 4”
      answered: id % 2 === 1, // odd IDs are “answered”
    };
  });

  return (
    <div className="flex flex-col bg-[#F1EFEF]">
      {/* Header */}
      <ExampPageHeader />
      {/* Content */}
      <main className="flex-1 px-6 py-10 space-y-6 container mx-auto">
        <PreviewQuestions questions={dummyQuestions} />
      </main>

      {/* Footer */}
      <footer className="text-center py-4 border-t text-base font-semibold text-[#060812] bg-[#D3D3D3]">
        Powered By SkillNet
      </footer>
    </div>
  );
};

export default ExamPreviewPage;
