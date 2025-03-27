import DynamicHeader from "@/components/dashboard/exam/components/dynamic-header";
import { Suspense } from "react";

export default function ResultsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col">
        <DynamicHeader />
        <div className="container flex flex-1 items-center justify-center py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Exam Results</h2>
            <p className="mt-2 text-muted-foreground">
              This page is under construction. Check back soon for your exam
              results.
            </p>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
