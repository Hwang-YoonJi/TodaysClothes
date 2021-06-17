import React from 'react';
import { StyleSheet, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import WeatherScreen from './screens/WeatherScreen';
import ClothesScreen from './screens/ClothesScreen';

const {width} = Dimensions.get('window');
const numberOfComponents = 2; //자식 컴포넘트 개수

export default function App() {
  retrun (
    <SafeAreaView>
      <ScrollView horizontal={true} style={styles.scrollView}>
        <WeatherScreen />
        <ClothesScreen />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
 scrollView: {
   flex: 1,
 }
})

export default App;

/*
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import WeatherScreen from './screens/WeatherScreen';
// import { NavigationContainer } from '@react-navigation/native';
// import AppStackScreen from './stackScreen/AppStackScreen';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    /*
    <NavigationContainer>
      <AppStackScreen />
    </NavigationContainer>
    *
    <WeatherScreen />
  );
}
*/