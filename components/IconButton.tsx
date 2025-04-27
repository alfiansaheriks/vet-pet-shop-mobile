import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

type IconButtonProps = {
  name: keyof typeof MaterialIcons.glyphMap;
  label: string;
  size: number;
  onPress?: () => void;
};

const IconButton = ({ name, size, onPress, label }: IconButtonProps) => {
  return (
    <View className="items-center">
      <TouchableOpacity
        onPress={onPress}
        className="bg-[#f6f2ed] rounded-full p-4 mb-2 border border-[#f6f2ed] shadow-sm"
      >
        <MaterialIcons name={name} size={size} color="#BF9264" />
      </TouchableOpacity>
      <Text
        className="text-sm text-black"
        style={{ fontFamily: "Lato-Regular" }}
      >
        {label}
      </Text>
    </View>
  );
};

export default IconButton;
