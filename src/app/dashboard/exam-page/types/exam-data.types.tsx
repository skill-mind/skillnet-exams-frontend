// types.ts

/**
 * Represents a single question and its possible options.
 */
export interface Question {
    id: number;
    question: string;
    options: string[];
  }
  
  /**
   * Represents the overall exam metadata plus the list of questions.
   */
  export interface ExamData {
    institutionName: string;
    examTitle: string;
    totalQuestions: number;
    timeLimit: number; // in minutes
    questions: Question[];
  }
  