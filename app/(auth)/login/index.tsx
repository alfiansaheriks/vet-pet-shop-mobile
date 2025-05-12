import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { images } from "@/constants/images";
import { router } from "expo-router";
import { useAuth } from "@/context/AuthContext";
import { login as loginAPI } from "@/lib/api/auth";

const Login = () => {
  const auth = useAuth();
  if (!auth) {
    throw new Error("Auth context is not available");
  }

  const { login } = auth;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await loginAPI({email: email, password: password});
      await login(response.access_token, response.refresh_token);
      router.replace("/(tabs)");
      console.log("Login successful: ", response);
    } catch (error) {
      console.log("Payload: ", {email: email, password: password});
      console.log("API URL: ", process.env.EXPO_PUBLIC_API_URL);
      console.error("Login failed: ", error);
    }
  }

  const handleRegister = () => {
    try {
      router.push("/(auth)/register");
    } catch (error) {
      console.error("Error navigating to register:", error);
    }
  };
  return (
    <View className="flex-1 justify-center items-center bg-secondary px-base gap-x-2">
      <Text className="text-white text-2xl font-bold mb-2">
        Welcome to Vet Pet Shop
      </Text>

      <Text className="text-white text-center mb-10">
        Buy foods, medicines, and accessories for your pet.
      </Text>

      <Image source={images.dog3dlogin} className="size-96" />

      <TextInput
        placeholder="Email"
        className="w-full bg-white text-primary rounded-full px-4 py-5 mb-4 font-bold"
        placeholderTextColor="#BF9264"
        keyboardType="email-address"
        inputMode="email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        className="w-full bg-white text-primary rounded-full px-4 py-5 mb-4 font-bold"
        placeholderTextColor="#BF9264"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        />

      <TouchableOpacity onPress={handleLogin} className="bg-primary rounded-full px-4 py-5 mb-4 w-full">
        <Text className="text-white font-bold text-center">Login</Text>
      </TouchableOpacity>

      <TouchableOpacity className="bg-white rounded-full px-4 py-5 mb-4 w-full" onPress={handleRegister}>
        <Text className="text-primary font-bold text-center">Register</Text>
      </TouchableOpacity>

      <Text className="text-xs text-white opacity-70 text-center">
        We care about your data privacy.
      </Text>
    </View>
  );
};

export default Login;
