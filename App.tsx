import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { HomeScreen, RootStackParamList } from './src/screens/HomeScreen';
import { QuizScreen } from './src/screens/QuizScreen';
import { ResultScreen } from './src/screens/ResultScreen';
import { StatsScreen } from './src/screens/StatsScreen';
import { NotesScreen } from './src/screens/NotesScreen';
import { NoteDetailScreen } from './src/screens/NoteDetailScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Quiz" component={QuizScreen} />
            <Stack.Screen name="Result" component={ResultScreen} />
            <Stack.Screen name="Stats" component={StatsScreen} />
            <Stack.Screen name="Notes" component={NotesScreen} />
            <Stack.Screen name="NoteDetail" component={NoteDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
