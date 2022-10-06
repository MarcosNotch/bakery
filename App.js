import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView  } from 'react-native';
import AppNavigator from './src/navigation';



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  return (
      <AppNavigator/>
  );
}