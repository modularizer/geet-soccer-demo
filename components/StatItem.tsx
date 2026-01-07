import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

interface StatItemProps {
  label: string;
  value: string | number;
}

export default function StatItem({ label, value }: StatItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: colors.card,
    borderRadius: 8,
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
});
