import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

const BackButton = () => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.back()}
      className="rounded-full p-4 mb-2"
    >
      <MaterialIcons name="arrow-back" size={24} color="#BF9264" />
    </TouchableOpacity>
  );
};

export default BackButton;
