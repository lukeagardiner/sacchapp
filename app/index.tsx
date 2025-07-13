import { useEffect, useState } from 'react';
import { Text, View } from "react-native";
import * as Font from 'expo-font';


export default function Index() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
          'TradesmithRough': require('../assets/fonts/TradesmithRough.otf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
      return
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Loading fonts...</Text>
          </View>

  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#f5f5f5'
      }}
    >
      <Text
        style={{
          fontFamily: 'TradesmithRough',
          fontSize: 32,
          color: '#000',
          textShadowColor: 'rgba(0, 0, 0, 0.1)',
          textShadowOffset: {width: 1, height: 1},
          textShadowRadius: 2,
          letterSpacing: 1,
        }}
      >
        Saccharomyces App
      </Text>
      <Text
        style={{
          fontFamily: 'TradesmithRough',
          fontSize: 16,
          color: '#333',
          marginTop: 10,
        }}
      >
        Explore yeast, brewing, and more!
      </Text>
    </View>
  );
}

