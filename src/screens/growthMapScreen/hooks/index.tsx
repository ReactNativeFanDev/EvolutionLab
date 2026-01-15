import { useState } from 'react';
import { Alert } from 'react-native';
import mockData from '@const/mockData.json';
import { Lesson } from '@store/api/lessonsApi/types';

export function useHook() {
  const [lessons] = useState<Lesson[]>(mockData as Lesson[]);

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

  return {
    lessons,
    handleLessonPress,
  };
}
