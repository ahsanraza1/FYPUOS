
import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthScreen } from './screens';
import { Main } from './Screens_Chat/Main.js';

const Stack = createNativeStackNavigator();

// const Main = () => {
//   return(
//     <View>
//         {/* <AuthScreen /> */}
//         <StatusBar style="auto" />
//       </View>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Auth" screenOptions={{headerShown:false}}>
        <Stack.Screen name='Auth' component={AuthScreen}/>
        <Stack.Screen name='Main' component={Main}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
