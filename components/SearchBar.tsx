import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface Props {
  placeholder: string;
}

const SearchBar = ({ placeholder }: Props) => {
  return (
    <View className="flex-row items-center">
      <Image
        source={icons.search}
        className="size-6"
        resizeMode="contain"
        tintColor={"#9ca3af"}
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"#a8b5db"}
        className="flex-1 text-white font-semibold"
      />
    </View>
  );
};

export default SearchBar;
