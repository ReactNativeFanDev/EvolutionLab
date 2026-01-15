export type LessonStatus = 'done' | 'active' | 'locked';

export interface Lesson {
  id: number;
  title: string;
  status: LessonStatus;
  description?: string;
  progress_percent?: number;
  started_at?: string;
  completed_at?: string;
}
