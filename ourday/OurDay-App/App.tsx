import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from './src/styles/ThemeContext';
import { PlanScreen } from './src/screens/PlanScreen';
import { CalendarScreen } from './src/screens/CalendarScreen';
import { ShoppingScreen } from './src/screens/ShoppingScreen';
import { RemindersScreen } from './src/screens/RemindersScreen';
import { TipsScreen } from './src/screens/TipsScreen';
import { LessonsScreen } from './src/screens/LessonsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              backgroundColor: '#F8F7F4',
              borderTopColor: '#E8E6E1',
            },
            tabBarActiveTintColor: '#9B7EDE',
            tabBarInactiveTintColor: '#B8B5B0',
            headerShown: false,
          }}
        >
          <Tab.Screen 
            name="Plan" 
            component={PlanScreen}
            options={{
              tabBarIcon: ({ color }) => '📅',
              title: 'План дня'
            }}
          />
          <Tab.Screen 
            name="Calendar" 
            component={CalendarScreen}
            options={{
              tabBarIcon: ({ color }) => '🗓️',
              title: 'Календарь'
            }}
          />
          <Tab.Screen 
            name="Lessons" 
            component={LessonsScreen}
            options={{
              tabBarIcon: ({ color }) => '🎓',
              title: 'Уроки'
            }}
          />
          <Tab.Screen 
            name="Shopping" 
            component={ShoppingScreen}
            options={{
              tabBarIcon: ({ color }) => '🛍️',
              title: 'Покупки'
            }}
          />
          <Tab.Screen 
            name="Reminders" 
            component={RemindersScreen}
            options={{
              tabBarIcon: ({ color }) => '⏰',
              title: 'Напоминания'
            }}
          />
          <Tab.Screen 
            name="Tips" 
            component={TipsScreen}
            options={{
              tabBarIcon: ({ color }) => '💬',
              title: 'Подсказки'
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}