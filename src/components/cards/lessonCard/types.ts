import { Lesson } from '@store/api/lessonsApi/types';

export interface LessonCardProps {
  lesson: Lesson;
  isLast: boolean;
  onPress: (lesson: Lesson) => void;
}
