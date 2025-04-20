import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";
import { images } from "@/constants/images";
import { router } from "expo-router";

const Login = () => {
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
        Selamat Datang di Vet Shop 🐶
      </Text>

      <Text className="text-white text-center mb-10">
        Beli makanan, aksesoris, dan perawatan hewan peliharaanmu!
      </Text>

      <Image source={images.dog3dlogin} className="size-96" />

      <TextInput
        placeholder="Phone Number"
        className="w-full bg-white text-primary rounded-full px-4 py-5 mb-4 font-bold"
        placeholderTextColor="#BF9264"
      />

      <TouchableOpacity className="bg-primary rounded-full px-4 py-5 mb-4 w-full">
        <Text className="text-white font-bold text-center">Login</Text>
      </TouchableOpacity>

      <TouchableOpacity className="bg-white rounded-full px-4 py-5 mb-4 w-full" onPress={handleRegister}>
        <Text className="text-primary font-bold text-center">Register</Text>
      </TouchableOpacity>

      <Text className="text-xs text-white opacity-70 text-center">
        Kami tidak akan membagikan nomor Anda ke pihak lain.
      </Text>
    </View>
  );
};

export default Login;
