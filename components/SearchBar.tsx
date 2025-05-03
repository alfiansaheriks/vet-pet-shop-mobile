import { View, Text, Image, TextInput, Platform } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface Props {
  placeholder: string;
}

const SearchBar = ({ placeholder }: Props) => {
  return (
    <View 
      className="flex-row items-center"
      style={{
        paddingVertical: Platform.OS === "ios" ? 16 : 0,
      }}
    >
      <Image
        source={icons.search}
        className="size-6 mr-2"
        resizeMode="contain"
        tintColor={"#BF9264"}
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"#000000"}
        style={{
          fontFamily: "Lato-Regular",
        }}
        className="flex-1 text-black font-semibold"
      />
    </View>
  );
};

export default SearchBar;
