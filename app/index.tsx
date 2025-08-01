import { useEffect, useState } from 'react';
import { Text, View, Image } from "react-native";
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

  // default if fonts not loaded
  if (!fontsLoaded) {
      return(
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '000000'}}>
              <Text style = {{color: '#ffffff'}}>Loading fonts...</Text>
          </View>
      );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: '#000000'
      }}
    >
      {/*Index Logo Fermentalists Wings*/}
      <Image
          source = {require('../assets/images/logos/SBCFermWingsWhite.png')}
          style = {{
              width: "84%",
              height: "18%",
              resizeMode: "contain",
              marginBottom: 30,
          }}
      />
      {/*Upcoming Events Container*/}
      <View
          style = {{
              backgroundColor: "#222",
              padding: 16,
              borderRadius: 12,
              marginBottom: 36,
              width: "90%",
              maxWidth: 400,
              borderColor: "#444",
              borderWidth: 1,
              alignItems: "center",
          }}
      >
          <Text style={{ color: "#fff", fontWeight: "bold", marginBottom: 8, fontSize: 16 }} >
              Upcoming Event
          </Text>
          <Text style = {{ color: "#ccc", fontSize: 15, textAlign: "center" }} >
              Sacch Oktoberfest Australia vs Germany. September 25th Fish Lane.
          </Text>
      </View>
      <Text
        style={{
          fontFamily: 'TradesmithRough',
          fontSize: 32,
          color: '#ffffff',
          textShadowColor: 'rgba(255, 255, 255, 0.1)',
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
          color: '#ccc',
          marginTop: 10,
        }}
      >
        Explore yeast, brewing, and more!
      </Text>
    </View>
  );
}

