import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const ServiceType = ({ icon, title, onPress }: ServiceTypeProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="items-center w-[48%] bg-white rounded-xl p-4 shadow-sm mb-4"
      activeOpacity={0.8}
      style={{
        elevation: 2,
      }}
    >
      <View className="bg-[#f6f2ed] rounded-full p-4 mb-2">
        <MaterialIcons name={icon} size={32} color="#BF9264" />
      </View>
      <Text
        className="text-center text-black"
        style={{
          fontFamily: "Lato-Bold",
          fontSize: 14,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ServiceType;
