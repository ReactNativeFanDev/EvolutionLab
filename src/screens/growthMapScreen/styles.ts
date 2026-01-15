import { StyleSheet } from 'react-native';
import { colors } from '@const/colors';
import { fontSize } from '@const/fontSize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  loadingText: {
    marginTop: 16,
    fontSize: fontSize(16),
    color: colors.textSecondary,
  },
  errorText: {
    fontSize: fontSize(18),
    fontWeight: '600',
    color: colors.error,
    marginBottom: 8,
  },
  errorSubtext: {
    fontSize: fontSize(14),
    color: colors.textSecondary,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTitle: {
    fontSize: fontSize(28),
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: fontSize(15),
    color: colors.textSecondary,
  },
  listContainer: {
    padding: 20,
    paddingTop: 30,
  },
});
