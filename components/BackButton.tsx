import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

const BackButton = () => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.back()}
      className="bg-[#f6f2ed] w-14 rounded-full p-4 mb-2 border border-[#f6f2ed] shadow-sm"
    >
      <MaterialIcons name="arrow-back" size={18} color="#BF9264" />
    </TouchableOpacity>
  );
};

export default BackButton;
