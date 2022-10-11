import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView  } from 'react-native';
import AppNavigator from './src/navigation';
import { Provider } from 'react-redux';
import store from './src/store/store';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>

  );
}