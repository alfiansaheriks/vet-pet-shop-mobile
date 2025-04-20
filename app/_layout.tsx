import { Redirect, SplashScreen, Stack } from "expo-router";
import "./global.css";
import { StatusBar } from "react-native";
import { useEffect, useState } from "react";
import { Asset } from "expo-asset";

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);
  
    useEffect(() => {
      async function prepare() {
        await Asset.loadAsync([
          require("@/assets/images/onboarding/3d-dogs.png"),
        ]);
        setIsReady(true);
        await SplashScreen.hideAsync();
      }

      prepare();
    }, []);

    if (!isReady) return null;

  return (
    <>
    <Redirect href="/onboarding" />
    <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
