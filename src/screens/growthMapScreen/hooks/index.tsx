import { Alert } from 'react-native';
import { Lesson } from '@store/api/lessonsApi/types';
import { useGetLessonsQuery } from '@store/api/lessonsApi';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function useHook() {
  const { data: lessons, isLoading, isError } = useGetLessonsQuery();

  const handleLessonPress = (lesson: Lesson) => {
    switch (lesson.status) {
      case 'active':
        console.log('Start lesson');
        break;

      case 'locked':
        Alert.alert(
          'Урок заблокирован',
          'Пожалуйста, завершите предыдущие уроки, чтобы разблокировать этот.',
          [{ text: 'Понятно', style: 'cancel' }],
        );
        break;

      case 'done':
        console.log('Review lesson');
        break;
    }
  };

  const { top } = useSafeAreaInsets();

  return {
    lessons,
    handleLessonPress,
    top,
    isLoading,
    isError,
  };
}
