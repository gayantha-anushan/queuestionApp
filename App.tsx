/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './screens/SignIn';
import PaperList from './screens/PaperList';
import Queuestion from './screens/Queuestion';
import FinalResult from './screens/FinalResult';
import { RootStackParamList } from './RootStackParamList';
import { Colors } from 'react-native/Libraries/NewAppScreen';

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

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  // <SafeAreaView style={backgroundStyle}>

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:true,
        title:'Aposa',
        headerTitleStyle:{
          fontWeight:'bold'
        },
        headerShadowVisible:false
      }}>
        <Stack.Screen name='SignIn' options={{
          headerStyle:{
            backgroundColor:'#9563F1'
          },
          headerTintColor:'#fff',
        }} component={SignIn}/>
        <Stack.Screen options={{
          headerStyle:{
            backgroundColor:'#fff',
          },
          headerTintColor:'#000'
        }} name='PaperList' component={PaperList}/>
        <Stack.Screen options={{
          headerStyle:{
            backgroundColor:'#fff',
          },
          headerTintColor:'#000'
        }} name='Queuestion' component={Queuestion}/>
        <Stack.Screen options={{
          headerStyle:{
            backgroundColor:'#fff',
          },
          headerTintColor:'#000'
        }} name='FinalResult' component={FinalResult}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});

export default App;
