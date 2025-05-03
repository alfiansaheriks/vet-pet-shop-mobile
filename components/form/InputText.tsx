import { View, Text, TextInput } from "react-native";
import React from "react";

const InputText = ({ label, placeholder, type }: InputTextProps) => {
  return (
    <>
      <View className="bg-white rounded-lg">
      <Text className="mb-2">{label}</Text>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={"black"}
          inputMode={type}
          className="flex-1 text-sm text-black border border-gray-200 p-3 rounded-lg"
          style={{ fontFamily: "Lato-Bold" }}
        />
        {/* <Ionicons name="search" size={24} color="#BF9264" /> */}
      </View>
    </>
  );
};

export default InputText;
