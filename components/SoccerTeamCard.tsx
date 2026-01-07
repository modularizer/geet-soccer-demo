import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import {sportEmoji} from "../consts";

interface SoccerTeamCardProps {
  name: string;
  wins: number;
  losses: number;
  goalsScored: number;
  cleanSheets: number;
  formation: string;
}

export default function SoccerTeamCard({
  name,
  wins,
  losses,
  goalsScored,
  cleanSheets,
  formation
}: SoccerTeamCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.emoji}>{sportEmoji}</Text>
        <View style={styles.headerText}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.formation}>Formation: {formation}</Text>
        </View>
      </View>

      <View style={styles.stats}>
        <View style={styles.record}>
          <Text style={styles.recordText}>W: {wins}</Text>
          <Text style={styles.recordText}>L: {losses}</Text>
        </View>
        <View style={styles.soccerStats}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{goalsScored}</Text>
            <Text style={styles.statLabel}>Goals</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{cleanSheets}</Text>
            <Text style={styles.statLabel}>Clean Sheets</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.card,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
      maxWidth: 600,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  emoji: {
    fontSize: 32,
    marginRight: 12,
  },
  headerText: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  formation: {
    fontSize: 13,
    color: colors.textSecondary,
    fontStyle: 'italic',
  },
  stats: {
    gap: 12,
  },
  record: {
    flexDirection: 'row',
    gap: 16,
  },
  recordText: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '600',
  },
  soccerStats: {
    flexDirection: 'row',
    gap: 12,
  },
  statBox: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
  },
});
