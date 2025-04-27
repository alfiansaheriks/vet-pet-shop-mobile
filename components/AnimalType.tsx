import { View, Text, TouchableOpacity, Image, Platform } from "react-native";
import React, { useEffect, useState } from "react";
import { images } from "@/constants/images";

const AnimalType = ({
  images,
  name,
  isActiveType,
  onPress,
}: AnimalTypeProps) => {
  return (
    <View className="items-center">
      {/* Kotak icon dengan shadow */}
      <TouchableOpacity
        // key={name}
        className="justify-center items-center bg-white rounded-2xl"
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          width: "100%",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 6,
          elevation: 4, // for Android
          backgroundColor: isActiveType ? "#f6dec7" : "#fff",
        }}
        onPress={onPress}
      >
        <Image
          source={images}
          className="w-12 h-12"
          style={{
            resizeMode: "contain",
            tintColor: isActiveType ? "#BF9264" : "#d3d3d3",
          }}
        />
      </TouchableOpacity>

      {/* Nama di bawah kotak */}
      <Text
        className="text-black text-md mt-2"
        style={{
          fontFamily: "Lato-Bold",
          fontSize: 14,
          color: isActiveType ? "#BF9264" : "#d3d3d3",
        }}
      >
        {name}
      </Text>
    </View>
  );
};
export default AnimalType;
