import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import SoccerTeamCard from '../components/SoccerTeamCard';
import { colors } from '../theme/colors';
import { teams } from "../sample-data";
import {appName} from "../consts";


export default function Teams() {
  return (
    <>
      <Stack.Screen options={{ title: 'Teams' }} />
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>{appName} Teams</Text>
        <View style={styles.grid}>
          {teams.map((team, index) => (
            <View key={index} style={styles.gridItem}>
              <SoccerTeamCard
                name={team.name}
                wins={team.wins}
                losses={team.losses}
                goalsScored={team.goalsScored}
                cleanSheets={team.cleanSheets}
                formation={team.formation}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'flex-start',
  },
  gridItem: {
    flexBasis: '100%',
    minWidth: 300,
    maxWidth: 600,
    flexGrow: 1,
  },
});
