import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { colors } from '../theme/colors';
import {appName, sportEmoji, sportName} from "../consts";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>{sportEmoji}</Text>
      <Text style={styles.title}>{appName}</Text>
      <Text style={styles.subtitle}>Welcome to your {sportName} hub</Text>

      <View style={styles.menu}>
        <Link href="/teams" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View Teams</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/stats" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View Stats</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  emoji: {
    fontSize: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 40,
  },
  menu: {
    width: '100%',
    gap: 12,
      alignItems: 'center',
      justifyContent: 'center',
  },
  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
      maxWidth: '40%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
