import { Redirect, SplashScreen, Stack } from "expo-router";
import { useFonts } from 'expo-font';
import "./global.css";
import { StatusBar } from "react-native";
import { useEffect, useState } from "react";
import { Asset } from "expo-asset";
import Toast from 'react-native-toast-message';

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);
  const [loaded, error] = useFonts({
    "Inter": require("@/assets/fonts/Inter-Regular.ttf"),
    "Lato": require("@/assets/fonts/Lato-Regular.ttf"),
    "Lato-Bold": require("@/assets/fonts/Lato-Bold.ttf"),
    "Lato-Italic": require("@/assets/fonts/Lato-BoldItalic.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  useEffect(() => {
    async function prepare() {
      await Asset.loadAsync([
        require("@/assets/images/onboarding/3d-dogs.png"),
      ]);
      setIsReady(true);
    }

    prepare();
  }, []);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar hidden={false} />
      {/* <Redirect href={"/onboarding"} /> */}
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(auth)" />
        {/* <Stack.Screen name="" /> */}
        {/* <Stack.Screen name="(products)" /> */}
        {/* <Stack.Screen name="(cart)" /> */}
        {/* <Stack.Screen name="(profile)" /> */}
        {/* <Stack.Screen name="(chat)" /> */}
      </Stack>
      <Toast />
    </>
  );
}
