import {Text, StyleSheet, ScrollView, View} from 'react-native';
import { Stack } from 'expo-router';
import StatItem from '../components/StatItem';
import { colors } from '../theme/colors';
import {stats} from '../sample-data';


export default function Stats() {
  return (
    <View style={styles.parent}>
      <Stack.Screen options={{ title: 'Statistics' }} />
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Season Statistics</Text>
        <Text style={styles.subheader}>2024-25 Season</Text>
        {stats.map((stat, index) => (
          <StatItem key={index} label={stat.label} value={stat.value} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    parent:{
      justifyContent: 'center',
        alignItems: 'center',
        minWidth: 500,
        padding: 40
    },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
      width: 600,

  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  subheader: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 20,
  },
});
