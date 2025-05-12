import { Redirect, router, SplashScreen, Stack } from "expo-router";
import { useFonts } from 'expo-font';
import "./global.css";
import { StatusBar, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { Asset } from "expo-asset";
import Toast from 'react-native-toast-message';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);
  const [showOnboarding, setShowOnBoarding] = useState<boolean | null>(null);

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

      const onboardingDone = await AsyncStorage.getItem("onboarding_done");
      setShowOnBoarding(onboardingDone === "true");
      setIsReady(true);
    }

    prepare();
  }, []);

  if (!loaded || !isReady || showOnboarding === null) {
    return null;
  }

  // let redirectTo = showOnboarding ? "/onboarding" : "/(auth)";

  return (
    <AuthProvider>
      <StatusBar hidden={false} barStyle={"dark-content"} />
      {showOnboarding ? <Redirect href="/onboarding" /> : null}

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="doctor" />
        {/* <Stack.Screen name="" /> */}
        {/* <Stack.Screen name="(products)" /> */}
        {/* <Stack.Screen name="(cart)" /> */}
        {/* <Stack.Screen name="(profile)" /> */}
        {/* <Stack.Screen name="(chat)" /> */}
      </Stack>
      <Toast />
    </AuthProvider>
  );
}
