import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { LessonCardProps } from './types';

export const LessonCard: React.FC<LessonCardProps> = ({
  lesson,
  isLast,
  onPress,
}) => {
  const isActive = lesson.status === 'active';
  const isLocked = lesson.status === 'locked';
  const isDone = lesson.status === 'done';

  return (
    <View style={styles.lessonWrapper}>
      {!isLast && (
        <View
          style={[
            styles.connector,
            { backgroundColor: isDone ? '#10B981' : '#E5E7EB' },
          ]}
        />
      )}

      <TouchableOpacity
        style={[
          styles.lessonCard,
          isActive && styles.activeCard,
          isLocked && styles.lockedCard,
        ]}
        onPress={() => onPress(lesson)}
        activeOpacity={0.7}
      >
        <View style={styles.lessonContent}>
          <View
            style={[
              styles.iconContainer,
              {
                backgroundColor:
                  (isDone ? '#10B981' : isActive ? '#8B5CF6' : '#9CA3AF') +
                  '20',
              },
            ]}
          >
            <Ionicons
              name={
                isDone
                  ? 'checkmark-circle'
                  : isActive
                  ? 'play-circle'
                  : 'lock-closed'
              }
              size={28}
              color={isDone ? '#10B981' : isActive ? '#8B5CF6' : '#9CA3AF'}
            />
          </View>

          <View style={styles.textContainer}>
            <Text
              style={[
                styles.lessonTitle,
                isLocked && styles.lockedText,
                isActive && styles.activeText,
              ]}
            >
              {lesson.title}
            </Text>
            <Text style={styles.lessonSubtitle}>
              {isDone && 'Урок пройден'}
              {isActive && 'Нажмите, чтобы начать'}
              {isLocked && 'Заблокировано'}
            </Text>
          </View>

          {isActive && (
            <View style={styles.startButton}>
              <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};
