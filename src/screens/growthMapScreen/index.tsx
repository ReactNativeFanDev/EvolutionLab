import React from 'react';
import { View, Text, FlatList, Alert, ActivityIndicator } from 'react-native';
import { useGetLessonsQuery } from '@store/api/lessonsApi';
import { Lesson } from '@store/api/lessonsApi/types';
import { LessonCard } from '@components/cards';
import { styles } from './styles';

export const GrowthMapScreen = () => {
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

  const renderLesson = ({ item, index }: { item: Lesson; index: number }) => (
    <LessonCard
      lesson={item}
      isLast={index === (lessons?.length ?? 0) - 1}
      onPress={handleLessonPress}
    />
  );

  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#8B5CF6" />
        <Text style={styles.loadingText}>Загрузка уроков...</Text>
      </View>
    );
  }

  if (isError || !lessons) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>Ошибка загрузки уроков</Text>
        <Text style={styles.errorSubtext}>
          Попробуйте перезагрузить приложение
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Карта развития</Text>
        <Text style={styles.headerSubtitle}>
          Пройдите все модули последовательно
        </Text>
      </View>

      <FlatList
        data={lessons}
        renderItem={renderLesson}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
