import { StyleSheet } from 'react-native';
import { colors } from '@const/colors';
import { fontSize } from '@const/fontSize';

export const styles = StyleSheet.create({
  lessonWrapper: {
    position: 'relative',
    marginBottom: 20,
  },
  connector: {
    position: 'absolute',
    left: 27,
    top: 70,
    width: 3,
    height: 40,
    borderRadius: 2,
  },
  lessonCard: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 16,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 2,
    borderColor: colors.transparent,
  },
  activeCard: {
    borderColor: colors.primary,
    shadowOpacity: 0.15,
    shadowColor: colors.primary,
    elevation: 5,
  },
  lockedCard: {
    opacity: 0.6,
  },
  lessonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  lessonTitle: {
    fontSize: fontSize(17),
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 4,
  },
  activeText: {
    color: colors.primary,
  },
  lockedText: {
    color: colors.textTertiary,
  },
  lessonSubtitle: {
    fontSize: fontSize(13),
    color: colors.textSecondary,
  },
  startButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
});
