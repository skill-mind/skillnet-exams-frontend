import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Answer {
  [questionNumber: number]: number;
}

interface ExamState {
  currentQuestion: number;
  totalQuestions: number;
  timeLeft: number; // in seconds
  selectedAnswers: Answer;
  score: number;
  examSubmitted: boolean;
  
  // Actions
  setCurrentQuestion: (questionNumber: number) => void;
  setAnswer: (questionNumber: number, option: number) => void;
  decrementTime: () => void;
  submitExam: () => void;
  resetExam: () => void;
}

export const useExamStore = create<ExamState>()(
  persist(
    (set) => ({
      currentQuestion: 1,
      totalQuestions: 24,
      timeLeft: 60 * 60, // 60 minutes in seconds
      selectedAnswers: {},
      score: 0,
      examSubmitted: false,

      setCurrentQuestion: (questionNumber) => 
        set({ currentQuestion: questionNumber }),
      
      setAnswer: (questionNumber, option) => 
        set((state) => ({
          selectedAnswers: {
            ...state.selectedAnswers,
            [questionNumber]: option
          }
        })),
      
      decrementTime: () => 
        set((state) => ({
          timeLeft: Math.max(0, state.timeLeft - 1)
        })),
      
      submitExam: () => 
        set((state) => {
          // Calculate score - in a real app, you would compare with correct answers
          // This is a simplified version that assigns 70% score
          const answeredQuestions = Object.keys(state.selectedAnswers).length;
          const score = Math.round((answeredQuestions / state.totalQuestions) * 100);
          
          return {
            examSubmitted: true,
            score: score > 0 ? score : 70 // Default to 70 if no questions answered
          };
        }),
      
      resetExam: () => 
        set({
          currentQuestion: 1,
          timeLeft: 60 * 60,
          selectedAnswers: {},
          score: 0,
          examSubmitted: false
        })
    }),
    {
      name: 'exam-storage',
    }
  )
);