import React from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { Lesson } from '@store/api/lessonsApi/types';
import { LessonCard } from '@components/cards';
import { styles } from './styles';
import { useHook } from './hooks';

export const GrowthMapScreen = () => {
  const { lessons, handleLessonPress, top, isLoading, isError } = useHook();

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
      <View style={StyleSheet.compose(styles.header, { paddingTop: top })}>
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
