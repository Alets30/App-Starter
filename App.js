import React from 'react';
import { useFonts } from 'expo-font';
import Navigation from './Navigation';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat': require('./assets/fonts/Montserrat-VariableFont_wght.ttf')
  })

  if(!fontsLoaded)
    return null;

  return (
    <Navigation />
  );
}