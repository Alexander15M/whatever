/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

// Placeholder screen for other tabs
const PlaceholderScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Coming Soon</Text>
  </View>
);

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Ciao Mattia!</Text>
          <Text style={styles.doctorInfo}>Medico: Dott. Fioravanti</Text>
        </View>

        {/* Today's Activities Section */}
        <View style={styles.activitiesSection}>
          <Text style={styles.activitiesTitle}>Attività di oggi</Text>
          <Text style={styles.date}>Venerdi, 19 Dicembre</Text>

          {/* Morning Section */}
          <Text style={styles.sectionTitle}>Mattina</Text>
          <View style={styles.tasksList}>
            {[
              {id: 'weight', text: 'Controlla il peso'},
              {id: 'pressure', text: 'Misura pressione'},
              {id: 'heartrate', text: 'Misura frequenza cardiaca'},
              {id: 'oxygen', text: 'Misura ossigeno'},
            ].map(task => (
              <TouchableOpacity
                key={task.id}
                style={styles.taskItem}
                onPress={() => console.log(`Pressed: ${task.text}`)}>
                <Text style={styles.taskText}>{task.text}</Text>
                <Icon name="chevron-forward" size={24} color="#007AFF" />
              </TouchableOpacity>
            ))}
          </View>

          {/* Evening Section */}
          <Text style={styles.sectionTitle}>Sera</Text>
          <TouchableOpacity
            style={[styles.taskItem, styles.eveningTask]}
            onPress={() => console.log('Pressed: Prendi i farmaci')}>
            <Text style={styles.eveningTaskText}>Prendi i farmaci</Text>
            <Icon name="chevron-forward" size={24} color="#6B7280" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Storico') {
                iconName = focused ? 'stats-chart' : 'stats-chart-outline';
              } else if (route.name === 'Chat') {
                iconName = focused ? 'chatbubble' : 'chatbubble-outline';
              } else if (route.name === 'Profilo') {
                iconName = focused ? 'settings' : 'settings-outline';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#007AFF',
            tabBarInactiveTintColor: '#6B7280',
            tabBarStyle: {
              borderTopWidth: 1,
              borderTopColor: '#E5E7EB',
              backgroundColor: 'white',
              height: 60,
              paddingBottom: 8,
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '500',
            },
          })}>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarLabel: 'Home',
            }}
          />
          <Tab.Screen
            name="Storico"
            component={PlaceholderScreen}
            options={{
              headerShown: false,
              tabBarLabel: 'Storico',
            }}
          />
          <Tab.Screen
            name="Chat"
            component={PlaceholderScreen}
            options={{
              headerShown: false,
              tabBarLabel: 'Chat',
            }}
          />
          <Tab.Screen
            name="Profilo"
            component={PlaceholderScreen}
            options={{
              headerShown: false,
              tabBarLabel: 'Profilo',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    padding: 20,
    paddingTop: 12,
    backgroundColor: '#EEF2FF',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  greeting: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
  },
  doctorInfo: {
    fontSize: 18,
    color: '#374151',
    marginTop: 8,
  },
  activitiesSection: {
    padding: 20,
  },
  activitiesTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  date: {
    fontSize: 18,
    color: '#374151',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
    marginTop: 8,
  },
  tasksList: {
    marginBottom: 24,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  taskText: {
    fontSize: 16,
    color: '#111827',
    fontWeight: '500',
  },
  eveningTask: {
    backgroundColor: '#F3F4F6',
  },
  eveningTaskText: {
    fontSize: 16,
    color: '#6B7280',
    fontWeight: '500',
  },
});

export default App;
